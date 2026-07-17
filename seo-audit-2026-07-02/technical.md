# G.A. Tucker PI — Technical SEO Audit
**Audit Date:** 2026-07-02  
**Domain:** https://gatuckerpi.com  
**Platform:** Next.js on Vercel  
**Context:** New domain migration; SEO hit since move

---

## Pages Audited

| Page | HTTP Status | Notes |
|------|-------------|-------|
| / | 200 | SSG/ISR confirmed (X-Nextjs-Prerender: 1) |
| /about | 200 | |
| /services | 200 | |
| /background-checks | 200 | |
| /investigations | 200 | |
| /consulting | 200 | |
| /risk-management | 200 | |
| /infidelity | 200 | |
| /this-does-not-exist | 404 | 404 handling works correctly |

---

## CRITICAL

### C1 — Canonical Tags Missing Site-Wide
**All 8 audited pages have no `<link rel="canonical">` tag.**

Without canonicals, Google must independently determine the preferred URL for every page. This is actively harmful post-migration because:
- Trailing-slash variants both return 200 with no redirect and no canonical to differentiate them. Example: `/about` and `/about/` both serve the same page with a 308 redirect between them (when trailing slash is present Vercel correctly 308s to the no-slash version), but the rendered page has no self-referencing canonical to reinforce the preferred URL.
- After a domain migration, canonicals are the primary signal Google uses to consolidate link equity. Without them, Google may continue to credit the old domain (if it had canonicals pointing to itself).

**Fix:** Add self-referencing canonical to every page in Next.js `metadata` export:
```ts
// In each page's metadata:
alternates: {
  canonical: 'https://gatuckerpi.com/page-slug',
}
// In layout.tsx for homepage:
alternates: {
  canonical: 'https://gatuckerpi.com/',
}
```

---

### C2 — www Subdomain Returns 307 Temporary Redirect (Not Permanent)
**URL:** https://www.gatuckerpi.com/  
**Evidence:** `HTTP/1.1 307 Temporary Redirect → Location: https://gatuckerpi.com/`

307 is a temporary redirect. This tells Googlebot and other crawlers to re-evaluate the redirect every time they visit — no link equity is transferred. The HTTP→HTTPS redirect on the same server correctly uses 308 Permanent, but the www→non-www is stuck on 307.

This is a Vercel configuration issue. The primary domain should redirect www with a 301/308.

**Fix:** In Vercel project settings → Domains, ensure `www.gatuckerpi.com` is set to redirect to `gatuckerpi.com` using the permanent redirect option. Alternatively, add a `vercel.json` redirect:
```json
{
  "redirects": [
    {
      "source": "/:path*",
      "has": [{ "type": "host", "value": "www.gatuckerpi.com" }],
      "destination": "https://gatuckerpi.com/:path*",
      "permanent": true
    }
  ]
}
```

---

### C3 — Title Tags Over-Long and Double-Branded on 6 of 8 Pages
**Affected pages:** /services, /background-checks, /investigations, /consulting, /risk-management, /infidelity

Every service page title ends with `| G.A. Tucker PI | G.A. Tucker PI` — the brand name is appended twice. This appears to be a template bug where the page-level title and the site-wide title suffix are both being injected.

| Page | Title | Length |
|------|-------|--------|
| / | G.A. Tucker PI \| California Private Investigator \| 27+ Years Experience | 71 chars |
| /about | California Private Investigator \| Greg Tucker \| G.A. Tucker PI | 62 chars — OK |
| /services | Private Investigation Services \| California PI Services \| G.A. Tucker PI \| G.A. Tucker PI | 89 chars |
| /background-checks | Background Check Services \| Employment & Personal Checks \| G.A. Tucker PI \| G.A. Tucker PI | 94 chars |
| /investigations | Private Investigations \| Civil & Criminal Cases \| G.A. Tucker PI \| G.A. Tucker PI | 85 chars |
| /consulting | Consulting Services \| Jury & Trial Consultation \| G.A. Tucker PI \| G.A. Tucker PI | 85 chars |
| /risk-management | Risk Management Services \| Threat Assessment \| G.A. Tucker PI \| G.A. Tucker PI | 78 chars |
| /infidelity | Infidelity Investigations \| Cheating Spouse Surveillance \| G.A. Tucker PI \| G.A. Tucker PI | 90 chars |

Google truncates titles beyond ~60 chars. Six pages are truncated in SERPs, and the double brand suffix makes the truncation happen earlier — cutting off the keyword-rich portion of each title. Google may also rewrite titles it considers "stuffed."

**Fix:** In Next.js `metadata`, set `title.template` in layout.tsx once:
```ts
title: {
  template: '%s | G.A. Tucker PI',
  default: 'G.A. Tucker PI | California Private Investigator',
}
```
Then each page exports only the page-specific title without the brand suffix. The template appends it once automatically.

---

## HIGH

### H1 — Hero H1 Contains Duplicate Text ("PRIVATE INVESTIGATOR" Twice)
**URL:** https://gatuckerpi.com/  
**Evidence:** H1 raw text extracts as: `HIRE CALIFORNIA'S LEADING PRIVATE INVESTIGATOR PRIVATE INVESTIGATOR`

The H1 contains `PRIVATE INVESTIGATOR` twice — this is a hero animation bug where multiple `<span>` elements (likely cycling between phrases) are both present in the DOM simultaneously. Google reads the full H1 text; this looks like keyword stuffing in the raw source.

**Fix:** Audit the hero animation component. Ensure the non-visible span has `aria-hidden="true"` or is conditionally rendered so only one text variation exists in the DOM at a time. The rendered H1 string Google sees should be a single coherent sentence.

---

### H2 — LCP Image Not Prioritized
**URL:** https://gatuckerpi.com/  
**Evidence:** Image at index [1] (the hero/above-fold portrait `gatuckerbwport.png`, 1920px) has `loading="lazy"` with no `fetchpriority="high"`. The logo (index [0]) is also lazy-loaded.

For a Next.js site, the hero image should have `priority` prop set, which automatically removes lazy loading and adds `fetchpriority="high"`. Currently no images have this set. This delays LCP — likely a core contributor to any Core Web Vitals regression post-migration.

Three fonts are preloaded but the hero image is not. The LCP element on a PI site with a prominent hero portrait is almost certainly that portrait.

**Fix:** Add `priority` prop to the hero `<Image>` component:
```tsx
<Image
  src="/gatuckerbwport.png"
  priority
  fetchPriority="high"
  ...
/>
```
Also remove `loading="lazy"` from the logo in the navbar if it appears above the fold.

---

### H3 — Missing Security Headers (X-Content-Type-Options, X-Frame-Options, Referrer-Policy, CSP)
**Evidence from `curl -I https://gatuckerpi.com/`:**

| Header | Status |
|--------|--------|
| Strict-Transport-Security | Present: `max-age=63072000` (2 years — good) |
| X-Content-Type-Options | **MISSING** |
| X-Frame-Options | **MISSING** |
| Referrer-Policy | **MISSING** |
| Content-Security-Policy | **MISSING** |

While HSTS is set (via Vercel default), the other four headers are absent. Missing `X-Frame-Options` leaves the site open to clickjacking. Missing CSP means no protection against XSS — significant for a site collecting contact/case inquiry data.

**Fix:** Add to `next.config.js`:
```js
headers: async () => [
  {
    source: '/(.*)',
    headers: [
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
    ],
  },
],
```
CSP requires a separate implementation pass (nonce-based for Next.js with inline scripts).

---

### H4 — Sitemap lastmod Dates Are Static (4.5 Months Stale)
**URL:** https://gatuckerpi.com/sitemap.xml  
**Evidence:** All 15 URLs show `<lastmod>2026-02-18T22:00:57.775Z</lastmod>` — frozen at the build date.

Google uses lastmod as a crawl-scheduling hint. Static lastmod dates that never update reduce crawl frequency for updated pages.

**Fix:** In Next.js App Router, use the `sitemap.ts` dynamic generation:
```ts
// app/sitemap.ts
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://gatuckerpi.com/', lastModified: new Date() },
    // ...
  ]
}
```
This generates fresh timestamps on each deploy.

---

## MEDIUM

### M1 — Trailing Slash Creates Duplicate URL Risk
**Evidence:**  
- `https://gatuckerpi.com/about` → 200 (served)  
- `https://gatuckerpi.com/about/` → 308 redirect to `/about` ✓ (Vercel handles this)

Trailing slashes are handled by Vercel (308 permanent back to no-slash version). This is actually acceptable behavior. However, without self-referencing canonicals on the canonical URL (`/about`), there is no fallback signal if the 308 chain breaks or is bypassed.

**Fix:** Resolved by implementing C1 (canonical tags).

---

### M2 — Homepage Title Slightly Over-Length
**URL:** https://gatuckerpi.com/  
**Evidence:** Title = `G.A. Tucker PI | California Private Investigator | 27+ Years Experience` — 71 chars, recommended max ~60.

The `| 27+ Years Experience` suffix is getting truncated in most SERP displays. The core keyword phrase is preserved, but the UVP is cut.

**Fix:** Trim to: `G.A. Tucker PI | California Private Investigator` (48 chars) and move the experience claim to the meta description. Or: `California Private Investigator | G.A. Tucker PI` (48 chars, keyword-first).

---

### M3 — 29 Inline Script Blocks (Performance and INP Risk)
**URL:** https://gatuckerpi.com/  
**Evidence:** 29 inline `<script>` blocks found in homepage source.

Heavy inline scripting (GTM, GA4, reCAPTCHA, EqualWeb accessibility widget, Facebook Pixel) increases parse/execute time and can inflate INP scores. The reCAPTCHA enterprise script and EqualWeb accessibility script are both preloaded in `<head>` as synchronous resources.

**Fix:**  
- Load reCAPTCHA only when the form is in view (lazy init on intersection).
- Load EqualWeb accessibility widget with `defer` or load on user interaction.
- Audit GTM container for redundant tags.

---

### M4 — No IndexNow Protocol Configured
**Evidence:** robots.txt has no IndexNow key reference. No IndexNow key file detected.

For a newly migrated domain, IndexNow would accelerate indexing of new/updated URLs by Bing and Yandex (which use it). Given the domain migration SEO hit, faster re-indexing on all engines matters.

**Fix:** Generate an IndexNow key at https://www.indexnow.org/, place the key file at `https://gatuckerpi.com/<key>.txt`, and add to robots.txt:
```
IndexNow-Key: <your-key>
```
Configure auto-submission via Vercel deploy hooks or Next.js `on-demand revalidation` triggers.

---

### M5 — Robots.txt Does Not Block /request-service-form from Indexing
**URL:** https://gatuckerpi.com/request-service-form  
**Evidence:** robots.txt allows all URLs except `/api/`, `/_next/`, `/private/`. The form submission page `/request-service-form` is in the sitemap and indexable.

Standalone form pages typically provide no search value and can dilute crawl budget. They also show thin content if indexed.

**Fix:** Either add `Disallow: /request-service-form` in robots.txt, or add `<meta name="robots" content="noindex, follow">` to the page and remove it from the sitemap.

---

## LOW

### L1 — No hreflang Tags
The site serves California-specific content in English only. No hreflang tags are present, which is correct for a single-language, single-region site. No action needed.

---

### L2 — OG Tags Present but Redundant with Meta Description on Service Pages
OG description tags are truncated versions of the meta description — acceptable but not optimized for social sharing. Low priority for a PI business.

---

### L3 — Sitemap Contains /request-service-form and Utility Pages
**URLs in sitemap that are SEO-thin:** `/request-service-form`, `/faqs` (if thin)

Include only canonically valuable pages in the sitemap. Utility pages inflate the sitemap and can consume crawl budget.

---

### L4 — Facebook Pixel noscript Tag Has Empty Alt Text
**Evidence:** `<img src="https://www.facebook.com/tr?id=...&ev=PageView&noscript=1" ... alt="">`

Empty alt on tracking pixel is technically correct (decorative/tracking), but worth noting for completeness. No action required.

---

### L5 — Sitemap Includes Pages Not in Original Audit Scope
Pages `/child-custody`, `/missing-persons`, `/profiling`, `/hollywood-fixer` are all in the sitemap and return 200 — this is good. They were not audited in detail; recommend a follow-up meta tag audit for these pages (especially title length, which likely follows the same double-brand pattern).

---

## Summary Table

| Category | Status | Finding |
|----------|--------|---------|
| Crawlability | Pass | robots.txt is clean; sitemap present with 15 URLs; all 200 |
| Indexability | FAIL | No canonical tags site-wide; title duplication bug |
| Security (HTTPS) | Partial | HSTS present; X-Frame-Options, X-Content-Type-Options, Referrer-Policy, CSP missing |
| URL Structure | Partial | www redirect is 307 (not permanent); trailing slash handled by Vercel 308 |
| Mobile | Pass | Viewport meta present; responsive structure; no mixed content |
| Core Web Vitals | FAIL | LCP image lazy-loaded with no priority; 29 inline scripts inflate INP risk |
| Structured Data | Pass | Schema.org present on all pages (ProfessionalService, Person, LocalBusiness) |
| JS Rendering | Pass | SSG/ISR confirmed (X-Nextjs-Prerender: 1); full HTML in source |
| IndexNow | FAIL | Not configured |

---

## Top 3 Technical Causes of the SEO Hit From the Domain Migration

**1. Missing canonical tags (C1) — most likely primary cause.**  
After a domain migration, Google relies heavily on canonicals to consolidate ranking signals from the old domain to the new one. With zero canonical tags on the new domain, Google has no explicit signal that `https://gatuckerpi.com/about` is the authoritative URL. If the old domain also lacked canonicals (or still has pages online), Google is essentially choosing arbitrarily between the two domains. This delays re-indexing and PageRank transfer significantly — typically extending the recovery period by months.

**2. www redirect serving as 307 Temporary (C2) — link equity leak.**  
Any backlinks to `www.gatuckerpi.com` (from old citations, directories, or social profiles) are hitting a 307 temporary redirect. A 307 does not pass PageRank. Until this becomes a 301/308 permanent, those links do not contribute to the non-www domain's authority. For a newly migrated domain with a fragile backlink profile, this is actively suppressing rankings.

**3. LCP image has no priority/fetchpriority (H2) — Core Web Vitals regression.**  
The hero portrait is lazy-loaded with no `fetchpriority="high"`. This means it is deprioritized by the browser until after the initial render, pushing LCP scores up. Post-migration, Google re-crawls and re-evaluates Core Web Vitals signals; if LCP has degraded on the new domain vs. the old (which may have had a simpler image-loading setup), this contributes directly to ranking suppression on mobile-first indexing.
