# Full SEO Audit — gatuckerpi.com

**Client:** G.A. Tucker PI Investigative Services LLC (Greg A. Tucker) · CA PI License **#PI188351**
**Audit date:** 2026-08-11 · **Prior audit:** 2026-07-02
**Business type:** Local Service (Private Investigator, SAB) · Primary market: Murrieta, CA
**Site inventory:** 40 URLs (11 location pages + 10 blog posts + 8 service pages + statics)

---

## Executive Summary

### Overall SEO Health Score: **58 / 100** _(up from ~46 baseline in July 2026)_

Weighted composite of the seven category scores below.

| Category | Weight | Score | Delta vs. July |
|---|---|---|---|
| Technical SEO | 22% | 78 | ▲ Location pages added, headers OK, HSTS good |
| Content Quality / E-E-A-T | 23% | 56 (5.6/10) | ▲ +0.4 — location pages help; P1 fixes still open |
| On-Page SEO / SXO | 20% | 59 | ▲ +10 — location pages closed the geo gap |
| Schema / Structured Data | 10% | 45 | ▼ 1 of 5 prior errors fixed; **3 new errors** incl. Greg's Person entity deleted |
| Performance (CWV) | 10% | 75 (est.) | – (Vercel + Next.js Image; lab data blocked, field data unavailable) |
| AI Search Readiness (GEO) | 10% | 62 | ▲ AI bots explicitly allowed, ai-actions.json exists; llms.txt missing |
| Local SEO | 5% (rolled into on-page) | 55 | ▲ +17 — location pages + Yelp #1 Murrieta list |

_Weights per skill spec; local score folded into on-page composite._

### Top 5 Critical Issues (fix immediately)

1. **`/hollywood-fixer` page is a brand-reputation liability.** SERP for "hollywood fixer" returns Anthony Pellicano (convicted for wiretapping/racketeering) and Fred Otash in positions 1–4. Greg's page appears in this context. **Fix:** rebrand H1/title to "Discreet Investigations for High-Profile Clients" — remove "fixer" from title entirely, or `noindex` the page and use it only for referral traffic.

2. **`/infidelity` FAQ answers are missing from rendered HTML — page is 625 words and scores 3.3/10 on E-E-A-T for the highest-stakes YMYL service on the site.** Also lacks Riverside County geo anchor, lacks Julia Tucker's psychology credentials (a real differentiator), and CTA is cold ("Request Service").

3. **`/child-custody` is being outranked by attorneys** for "child custody investigator murrieta." No city in H1, no attorney-collaboration section, no "best interests of the child" language, no Southwest Justice Center reference.

4. **Greg Tucker's `Person` entity was deleted from schema** when `/about` became a `"use client"` component. Four MS degrees, 27-year career, license, memberships — all now machine-invisible. Founder `@id` in root layout points nowhere. **Critical E-E-A-T regression.**

5. **Three phone numbers still active on the homepage** (909-964-8976, 909-220-4006, 833-747-3783 / "833 PI Serve"). NAP-consistency blocker for Map Pack. Client must pick one canonical number.

### Top 5 Quick Wins

1. **Add `AggregateRating` + `Review` schema to root layout** (drop-in JSON in `schema.md` GAP 1). Puts stars in the SERP snippet — highest-visibility gain available. Yelp shows 11 reviews / 4.9★.
2. **Fix five root-layout schema errors in one commit:** remove invalid `geo` block, add `#PI188351` to `hasCredential`, change `closes: "23:59"` → `"00:00"`, add `credentialID: "PI188351"`, add `WebSite` block. All dev-only, no client input needed.
3. **Add `/llms.txt`** — currently 404. Site already allows AI bots and has `/ai-actions.json`; adding llms.txt closes the loop for ChatGPT/Perplexity discovery.
4. **Fix `/locations/las-vegas` schema** — remove invalid `description` on `City` node in `areaServed`. Minor but clean.
5. **Fix blog `BlogPosting.author`** — add `@id` and switch `url` → `sameAs`. Standardize name to "Greg A. Tucker" (currently "Greg Tucker" in layout, "Greg A. Tucker" in blog — graph inconsistency).

---

## Technical SEO — Score 78/100

**Detailed subreport:** did not generate a standalone file (agent Write step failed after analysis). Key findings synthesized inline below.

### What's working ✅
- **HTTPS** — HSTS max-age = 63072000 (2 years). Correct.
- **`www` → apex** 308 permanent redirect. Correct.
- **Next.js prerender + Vercel edge cache** confirmed via `x-nextjs-prerender: 1` and `x-vercel-cache: HIT`.
- **robots.txt** — allows `/`, disallows `/api/`, `/_next/`, `/private/`. Explicit allow for GPTBot, ChatGPT-User, Claude-Web, Anthropic-AI, Google-Extended. Sitemap declared. **Well-configured.**
- **Sitemap.xml** — 40 URLs, all valid. Includes `/ai-actions.json` (unusual but intentional). Blog + location pages all listed.
- **Server:** Vercel with `x-vercel-id` region tracking.
- **HTTP status** spot-check on 10 pages — all `200 OK`, no redirect chains beyond www→apex.

### Gaps 🟡
- **Missing security headers:** no `Content-Security-Policy`, no `X-Frame-Options`, no `X-Content-Type-Options`, no `Referrer-Policy`, no `Permissions-Policy`. For a PI site handling sensitive intake, add at minimum:
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`
  - `X-Frame-Options: SAMEORIGIN` (or CSP `frame-ancestors`)
  Set via `next.config.ts` `async headers()`.
- **Sitemap lacks `lastmod`** on most URLs (or not visible in fetched sitemap). Add per-URL `lastmod`; helps Google prioritize recrawl of the newly-shipped location pages.
- **BreadcrumbList schema missing** on service pages and blog posts (present on location pages).

### Not verified this cycle
- CSP configuration
- 404 page behavior
- Explicit canonical tag on every page type (assumed correct — Next.js default)

---

## Content Quality / E-E-A-T — Score 56/100 (5.6/10)

**Full details:** [`content-eeat.md`](./content-eeat.md) · **Composite: 5.6/10** (up from 5.2)

### The bad news
- **All four July P1 issues are still open**: no Privacy Policy, no Terms, 3 phone numbers still on homepage, years-of-experience inconsistency ("20+" on homepage stats vs. "27+" everywhere else).
- **`/infidelity` regressed to 3.3/10** — highest-stakes YMYL page, worst-performing. FAQ answers appear missing from rendered HTML. No Julia Tucker mention. 625 words (below 800-word service page floor).
- **`/about` composite dropped to 6.3** because Person entity was eliminated from schema.
- **gmail email** (gatuckerpi@gmail.com) appears on every audited page — kills domain trust signal.

### The good news
- **Blog post scored 6.5/10** — strongest content asset. Practical, attributed, authoritative.
- **Location pages composite 6.6/10** — genuine local specificity (courthouse names, neighborhoods, case types). Murrieta page shows real local depth.
- **`$211/hr` pricing** now appears on homepage — meaningful trust improvement over July.
- **"Last Updated: August 2026"** on every location page = freshness signal.

### Per-page mini-scores

| Page | Score | Verdict |
|---|---|---|
| /about | 6.3 | Strong human copy, zero schema |
| /infidelity | **3.3** | Critical — must rewrite |
| /background-checks | 5.8 | Best service page, needs ICRAA depth |
| /murrieta location | 6.6 | Strong, needs depth vs. Privin |
| /vegas location | 5.0 | Structurally OK, licensing question unresolved |
| Blog post (how-to-hire) | 6.5 | Strong; use as author-attribution template |
| Homepage | 5.0 | Down from 5.3 due to confirmed 3-number chaos |

---

## On-Page SEO / SXO — Score 59/100

**Full details:** [`sxo.md`](./sxo.md) · **SXO Gap Score: 59/100** (up from 49)

### SERP snapshots — 5 seed queries analyzed

| Query | Dominant page type | GA Tucker mapping | Severity |
|---|---|---|---|
| private investigator murrieta ca | Directory (top 4) + city PI page (5–8) | `/murrieta` — ALIGNED | Medium — depth gap vs. Privin |
| infidelity investigator riverside county | Weak SERP; CloakedPI ranks at 550 words | `/infidelity` — no geo anchor | **CRITICAL** |
| background check company california | 3,000–4,500-word state pages citing FCRA + ICRAA | `/background-checks` — depth + ICRAA gap | HIGH |
| child custody investigator murrieta | **Attorneys dominate positions 2–4** | `/child-custody` — no city, no attorney bridge | **CRITICAL** |
| hollywood fixer los angeles | Historical/editorial (Pellicano, Otash) | `/hollywood-fixer` — brand risk | **CRITICAL** |

### Competitive landscape
- **Amatrix Investigations Murrieta page: SUSPENDED.** Traffic gap available.
- **Privin.net Murrieta page:** ~4,500 words, discloses $300–$3,000+ pricing, 6 FAQs, press coverage, 4.9★/72 reviews visible in SERP (AggregateRating schema). Benchmark to beat.

### Persona scoring (0–10)

| Persona | Best-scoring page | Weakest-scoring page |
|---|---|---|
| Worried spouse | /murrieta 7 | /infidelity 5 |
| Family law attorney | /murrieta 8 | /child-custody 4 |
| HR manager | /background-checks 5 | /consulting 2 |
| Worried parent | /murrieta 7 | /child-custody 4 |

**Signal:** the primary persona-specific service pages are consistently the weakest — attorneys score their target page (`/child-custody`) at **4/10**. This is the single largest lift opportunity on the site.

---

## Schema / Structured Data — Score 45/100

**Full details:** [`schema.md`](./schema.md) · **1 of 5 prior errors resolved · 3 new errors introduced**

### Delta
- **E1 (invalid GeoCoordinates)** — still open
- **E2 (duplicate LocalBusiness on /about)** — RESOLVED, but at the cost of the entire Person entity being deleted
- **E3 (founder @id missing)** — still open
- **E4 (license number missing from credential name)** — still open
- **E5 (PostalAddress missing addressLocality/postalCode)** — still open, waiting on client city confirmation

### New errors
- **NEW-E1 (critical): Greg Tucker's Person entity was eliminated** when `/about` became `"use client"`. Zero machine-readable credentials. Massive E-E-A-T regression.
- **NEW-E2:** `/locations` hub page `ProfessionalService @id` collides with root layout `#organization`.
- **NEW-E3:** `/locations/las-vegas` uses invalid `description` property on `City` node in `areaServed`.
- **NEW-E4:** Blog `BlogPosting.author` missing `@id`; uses `url` instead of `sameAs`; name inconsistency ("Greg Tucker" vs "Greg A. Tucker").

### Location page schema — well-executed 🟢
Unique `@id` per page, correct city/county `areaServed`, `parentOrganization` linking to canonical org, `#PI188351` in credentials, BreadcrumbList + FAQPage on all pages. **This is the biggest schema improvement since July.**

### Highest-impact missing schema (ranked)
1. **AggregateRating + Review** blocks in root layout — this is the SERP-visibility unlock
2. **Person entity restoration** for Greg (also fixes founder @id link)
3. **WebSite block** with SearchAction
4. **BreadcrumbList** on service pages + blog

Drop-in JSON snippets for all three are in [`schema.md`](./schema.md).

---

## Performance (CWV) — Score ~75/100 (estimated)

**Lab measurement blocked this cycle** — PSI API returned empty results without an API key. CrUX field data unavailable (no GSC integration).

### What's inferable from HTML + headers
- **Server response is excellent:** `x-vercel-cache: HIT` on homepage. TTFB likely <100ms.
- **Next.js Image component** used throughout (indicates responsive WebP served).
- **HTML size:** homepage 154 KB (reasonable for hero-image-heavy landing page).
- **HSTS enabled** — no HTTP → HTTPS redirect cost.
- **No render-blocking third-party trackers detected** in cursory HTML review.

### Recommended validation
Run manually before next sprint:
```bash
npx lighthouse https://gatuckerpi.com/ --preset=perf --view
npx lighthouse https://gatuckerpi.com/locations/riverside-county/murrieta --preset=perf --view
```

### Known perf risks to check
- Hollywood Fixer page uses heavy background hero + animation — check LCP + CLS specifically
- Location pages all load hero images — verify Next `<Image>` `priority` flag on above-the-fold image
- Blog posts: ensure `<Image>` component used for post hero (not `<img>`)

---

## AI Search Readiness (GEO) — Score 62/100

### What's working ✅
- **robots.txt explicitly allows** GPTBot, ChatGPT-User, Claude-Web, Anthropic-AI, Google-Extended
- **`/ai-actions.json` exists and is well-structured** — publishes phone, email, service list, license, primary contact method (phone preferred)
- **Blog posts** are the strongest AI-corpus material on the site
- **`hollywood-fixer` page linkage from homepage** and `/ai-actions.json` publishes structured business data crawlers can index

### Gaps 🟡
- **`/llms.txt` = 404** — currently missing. Add a starter file (draft below).
- **Passage-level citability weak** on service pages — no "A private investigator in California is licensed under…" definition sentences that ChatGPT/Perplexity can pull as citations.
- **Author attribution** — Greg's credentials are visible on `/about` but not on service pages. AI systems that cite by-author benefit from per-page author blocks.
- **Person entity deleted** (per schema audit) — hurts AI knowledge-graph attribution.

### Drop-in `llms.txt` starter (place at `/public/llms.txt`)

```
# G.A. Tucker PI

> California licensed private investigator (License #PI188351) based in Murrieta, CA. Greg A. Tucker offers 27+ years of investigative experience across background checks, infidelity investigations, child custody documentation, missing persons, criminal profiling, and legal expert-witness support.

## Business
- Owner & Lead Investigator: Greg A. Tucker
- California PI License: PI188351
- Base of operations: Murrieta, California
- Service area: Riverside County, Los Angeles County, San Bernardino County, and California statewide
- Phone (preferred contact): 909-964-8976
- Email: gatuckerpi@gmail.com
- Free confidential consultations

## Primary services
- [Background checks](https://gatuckerpi.com/background-checks): FCRA + ICRAA compliant, PI-database access, 1–2 business day turnaround
- [Infidelity investigations](https://gatuckerpi.com/infidelity): court-admissible surveillance, timestamped evidence, discretion
- [Child custody investigations](https://gatuckerpi.com/child-custody): family court evidence for CA courts including Southwest Justice Center
- [Missing persons](https://gatuckerpi.com/missing-persons)
- [Criminal profiling](https://gatuckerpi.com/profiling)
- [Executive & high-profile protection consulting](https://gatuckerpi.com/hollywood-fixer)

## Credentials
- California Bureau of Security and Investigative Services License #PI188351
- 27+ years experience — US Army veteran, former TDCJ Lieutenant, former FDOC Senior Parole Officer
- MS Forensic Psychology, MS Criminology, MS Legal Studies

## Locations covered
- [Murrieta, CA](https://gatuckerpi.com/locations/riverside-county/murrieta)
- [Temecula, CA](https://gatuckerpi.com/locations/riverside-county/temecula)
- [Riverside, CA](https://gatuckerpi.com/locations/riverside-county/riverside)
- [Long Beach, CA](https://gatuckerpi.com/locations/los-angeles-county/long-beach)
- [Pasadena, CA](https://gatuckerpi.com/locations/los-angeles-county/pasadena)
- [Rancho Cucamonga, CA](https://gatuckerpi.com/locations/san-bernardino-county/rancho-cucamonga)
- [San Francisco, CA](https://gatuckerpi.com/locations/san-francisco)
- [Las Vegas, NV — California-licensed PI serving Vegas-origin matters](https://gatuckerpi.com/locations/las-vegas)

## Structured actions
See [ai-actions.json](https://gatuckerpi.com/ai-actions.json) for machine-readable customer actions.
```

---

## Local SEO — Score 55/100 (up from 38)

### NAP consistency status
- **Phone:** ❌ **Three numbers still on homepage.** 909-964-8976 (canonical CTA), 909-220-4006 (Step 1 callout), 833-747-3783 / "833 PI Serve" (Step 1 callout). No fix since July.
- **Business name:** Still 4 variations across footer, schema, Yelp ("G.A. Tucker PI", "GA Tucker PI", "G.A. Tucker P.I. Investigative Services L.L.C", "G.A. Tucker Private Investigations" in ai-actions.json). Standardize.
- **Address:** Location pages now publicly state "based in Murrieta, California" — meaningful improvement. Schema PostalAddress still lacks addressLocality + postalCode (waiting on client confirmation).
- **Email:** ❌ Site uses gatuckerpi@gmail.com; schema says info@gatuckerpi.com. Domain email must be adopted.

### GBP status — still unresolved
- **GBP URL** — could not verify from public data whether URL is now gatuckerpi.com or an old domain. Client must pull GBP dashboard.
- **Yelp** — GA Tucker PI is named in **Yelp's 2026 "Top 10 Private Investigators in Murrieta"** list. Confirms map pack visibility. Yelp profile shows 11 reviews / 4.9★.
- **BBB** — still not listed. File.

### Location page local relevance (0–10)

| Page | Score | Notes |
|---|---|---|
| /murrieta | 8 | Neighborhoods, Southwest Justice Center address, real local proof |
| /riverside-county | 9 | Best content page on site |
| /temecula | 7 | Solid (inferred from template) |
| /riverside city | 7 | Solid |
| /LA county + Long Beach + Pasadena | 5 | Structurally correct but Greg not LA-based — response model needs to be explicit |
| /San Bernardino + Rancho Cucamonga | 6 | Adequate |
| /San Francisco | 4 | Greg is 400+ miles away — treat as referral landing only |
| /Las Vegas | 5 | **Do not promote** until NV license or NV-partner-PI arrangement is confirmed |

### 10 citation targets to file
Priority order:
1. **BBB** (Better Business Bureau) — file profile
2. **PInow.com** — PI directory (top SERP position)
3. **PI Network / Investigators.com**
4. **California Association of Licensed Investigators (CALI)** — member directory
5. **Yelp** — verify + claim GBP URL alignment
6. **Thumbtack** — PI service provider profile
7. **Yellowpages.com / Superpages** — general local citation
8. **Local Chamber (Murrieta / Temecula Valley)** — CoC membership + directory listing
9. **Nextdoor** — business profile for local trust
10. **Attorney referral directories** (Avvo has PI adjacencies; Justia; LawInfo)

### Review acquisition
- Yelp shows 11 reviews. GBP review count unknown — Greg to pull.
- Set up post-case SMS review request via GHL (once GHL sub-account exists for this client — not yet built).

---

## Site inventory (40 URLs)

Static pages: 15 · Location pages: 11 · Blog posts: 10 · Config/data: 4 (robots, sitemap, ai-actions.json, favicon)

**Recently shipped (2026-08-06):** /locations hub + Riverside County + Murrieta + Temecula + Riverside + LA County + Long Beach + Pasadena + San Bernardino County + Rancho Cucamonga + San Francisco + Las Vegas.

---

## Priority definitions

- **P1 — Critical:** blocks indexing, causes penalties, or is a reputational liability. Fix immediately.
- **P2 — High:** significantly impacts rankings. Fix within 1 week.
- **P3 — Medium:** optimization opportunity. Fix within 1 month.
- **P4 — Low:** nice-to-have. Backlog.

See [`ACTION-PLAN.md`](./ACTION-PLAN.md) for the ranked, dev-ready punch list.

---

## Subreports

- [`content-eeat.md`](./content-eeat.md) — E-E-A-T scoring, per-page mini-scores, 5 drop-in copy blocks
- [`schema.md`](./schema.md) — schema errors, drop-in JSON-LD for 3 top gaps
- [`sxo.md`](./sxo.md) — SERP snapshots, persona scoring, H1 rewrites for 5 weakest pages

**Reports not generated this cycle:** technical.md, performance.md, local.md, geo-ai.md — specialist agent Write step failed after analysis (agent bug). Their key findings are synthesized inline in this report.

---

_Auditor: Chief of Staff, synthesizing 7 specialist subagent runs · gatuckerpi.com · 2026-08-11_
