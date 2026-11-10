#!/usr/bin/env node
/**
 * Regression gate for the 2026-11-09 redirect fix.
 *
 * Every URL in scripts/legacy-urls.txt is a real historical URL for
 * gatuckerpi.com, pulled from the Wayback CDX API across all three site
 * generations (WordPress, the Hibu build, and this one). On 2026-11-09,
 * 73 of the 93 ended in a 404 and were silently dumping every inbound link
 * and every bit of accumulated ranking equity on the floor.
 *
 * This script follows redirects to the FINAL status code. That matters:
 * Next normalises the trailing slash before matching, so the WordPress-era
 * `/foo/` returns 308 on a single-hop check and then 404s. A shallow crawler
 * reports that as healthy, which is exactly how this went unnoticed.
 *
 * It also checks that every page carries a self-referencing canonical and
 * that the sitemap contains only real pages.
 *
 *   node scripts/verify-redirects.mjs                        # production
 *   node scripts/verify-redirects.mjs http://localhost:3000  # local build
 *
 * Exits 1 on any failure, so it can gate a deploy.
 */

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const BASE = (process.argv[2] || 'https://gatuckerpi.com').replace(/\/$/, '');
const HERE = path.dirname(fileURLToPath(import.meta.url));
const CONCURRENCY = 8;

const legacyUrls = readFileSync(path.join(HERE, 'legacy-urls.txt'), 'utf8')
  .split('\n')
  .map((l) => l.trim())
  .filter(Boolean);

async function mapLimit(items, limit, fn) {
  const out = new Array(items.length);
  let next = 0;
  await Promise.all(
    Array.from({ length: Math.min(limit, items.length) }, async () => {
      while (next < items.length) {
        const i = next++;
        out[i] = await fn(items[i]);
      }
    })
  );
  return out;
}

async function head(url) {
  try {
    const res = await fetch(url, { redirect: 'follow' });
    return { status: res.status, final: res.url };
  } catch (err) {
    return { status: 0, final: '', error: String(err.message || err) };
  }
}

let failed = 0;
const fail = (msg) => {
  failed++;
  console.log(`  FAIL  ${msg}`);
};

console.log(`\nVerifying ${BASE}\n`);

// 1. No legacy URL may end in a 404.
console.log(`[1/3] ${legacyUrls.length} historical URLs -> final status`);
const results = await mapLimit(legacyUrls, CONCURRENCY, async (p) => ({
  path: p,
  ...(await head(BASE + p)),
}));
const dead = results.filter((r) => r.status !== 200);
if (dead.length) {
  for (const d of dead) fail(`${d.status || d.error}  ${d.path}`);
} else {
  console.log(`  OK    all ${results.length} resolve to 200`);
}

// 2. Every sitemap page must carry a self-referencing canonical,
//    and the sitemap must not list non-page assets.
console.log(`\n[2/3] sitemap contents and canonicals`);
const sitemapXml = await (await fetch(`${BASE}/sitemap.xml`)).text();
// The sitemap always writes absolute production URLs. Rewrite the host onto
// BASE so this gate can run against a local build before anything is pushed.
const locs = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
  (m) => BASE + new URL(m[1]).pathname
);
console.log(`  ..    ${locs.length} URLs in sitemap`);

const nonPages = locs.filter((u) => /\.(json|xml|txt|webp|png|jpg|svg)$/i.test(u));
if (nonPages.length) {
  for (const u of nonPages) fail(`not a page, does not belong in the sitemap: ${u}`);
} else {
  console.log(`  OK    no non-page assets listed`);
}

const canonResults = await mapLimit(locs, CONCURRENCY, async (loc) => {
  const res = await fetch(loc);
  const html = await res.text();
  const m = html.match(/rel="canonical"\s+href="([^"]+)"/);
  return { loc, canonical: m ? m[1] : null };
});
const noCanon = canonResults.filter((c) => !c.canonical);
if (noCanon.length) {
  for (const c of noCanon) fail(`no canonical: ${c.loc}`);
} else {
  console.log(`  OK    ${canonResults.length}/${canonResults.length} pages carry a canonical`);
}

// Compare by path, not by full URL — the canonical is always the production
// host even when this gate is pointed at a local build.
const samePath = (a, b) =>
  new URL(a).pathname.replace(/\/$/, '') === new URL(b).pathname.replace(/\/$/, '');
const mismatched = canonResults.filter((c) => c.canonical && !samePath(c.canonical, c.loc));
if (mismatched.length) {
  for (const c of mismatched) fail(`canonical points elsewhere: ${c.loc} -> ${c.canonical}`);
} else {
  console.log(`  OK    every canonical is self-referencing`);
}

// 3. robots.txt must still allow crawling and advertise the sitemap.
console.log(`\n[3/3] robots.txt`);
const robots = await (await fetch(`${BASE}/robots.txt`)).text();
if (/^Disallow:\s*\/\s*$/m.test(robots)) fail('robots.txt disallows the whole site');
else console.log('  OK    site-wide crawling allowed');
if (!robots.includes('/sitemap.xml')) fail('robots.txt does not declare the sitemap');
else console.log('  OK    sitemap declared');

console.log(
  failed ? `\n${failed} FAILURE(S)\n` : `\nAll checks passed against ${BASE}\n`
);
process.exit(failed ? 1 : 0);
