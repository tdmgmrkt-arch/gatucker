# Full SEO Audit — gatuckerpi.com
**Date:** 2026-07-02
**Business:** G.A. Tucker PI Investigative Services LLC (Greg A. Tucker, CA License #PI188351)
**Vertical:** Local Service (SAB) — Private Investigator, YMYL-adjacent
**Anchor city (inferred):** Murrieta, CA (Yelp slug + 909 area code confirm)

---

## Executive Summary

**Overall SEO Health Score: 44 / 100**

| Category | Score | Weight |
|---|---|---|
| Technical SEO | 40/100 | 22% |
| Content Quality / E-E-A-T | 52/100 | 23% |
| On-Page SEO | 35/100 | 20% |
| Schema / Structured Data | 55/100 | 10% |
| Performance (CWV, lab) | 50/100 | 10% |
| AI Search Readiness (GEO) | 60/100 | 10% |
| Images | 55/100 | 5% |
| Local SEO (industry overlay) | 32/100 | — |

---

## What Actually Happened With the "Domain Move" — Root Cause Analysis

The story is more precise than "we moved to a new domain":

1. **The domain `gatuckerpi.com` is NOT new.** Wayback Machine shows it has been live since at least **2018**, canonicalized on **`www.gatuckerpi.com`** for that entire period.
2. **Around April 2025, two things happened at once:**
   - The canonical URL flipped from `www.gatuckerpi.com` → `gatuckerpi.com` (bare domain)
   - The site was rebuilt (Wayback body-size collapsed from ~72,000 bytes to ~31,000 bytes — different content, different framework)
3. **The redirect from the old canonical is a `307 Temporary`, not a `308 Permanent`.**
   `https://www.gatuckerpi.com/` → 307 → `https://gatuckerpi.com/`

**This is the single biggest cause of the SEO hit.** Seven years of backlinks, citations, and Google's own index memory point at `www.gatuckerpi.com`. A 307 tells Google "don't consolidate authority — this is temporary, the www URL is still the real one." PageRank leaks on every crawl and Google refuses to fully credit the bare domain.

Compounding factors:
- **No canonical tags on any page** — Google has no in-page signal to consolidate variants.
- **GBP website field almost certainly still points to www or the old configuration** — this decouples the map-pack signal from the ranking site.
- **Content shrank ~55%** in the rebuild — pages that used to rank on depth are thinner now.
- **Three phone numbers in play** across the site (909-964-8976, 909-220-4006, +1 unknown) — NAP inconsistency post-rebuild.

The hit isn't mysterious. It's a textbook migration where the 301/308 discipline was skipped.

---

## Top 5 Critical Issues

1. **307 (temporary) redirect on `www.gatuckerpi.com`** — must be `308 Permanent`. Fix in `vercel.json` or Vercel project settings. **This is #1.**
2. **No canonical tags on any page.** Add `alternates.canonical` to Next.js `metadata` on every page.
3. **GBP website URL likely not updated** to `https://gatuckerpi.com` (bare, HTTPS). Client must log into GBP dashboard.
4. **NAP inconsistency** — schema declares `info@gatuckerpi.com`, site shows `gatuckerpi@gmail.com`. Three different phone numbers on service pages. Pick one email, one phone, propagate everywhere.
5. **Address missing from schema** — `addressLocality` (Murrieta) and `postalCode` (92562/92563) not encoded. For a SAB in a YMYL vertical, this is a trust signal Google expects.

## Top 5 Quick Wins

1. Add `<link rel="canonical">` to every page (Next.js `metadata.alternates.canonical`). ~1 hour.
2. Change www→root redirect from 307 to 308 in `vercel.json`. ~5 minutes.
3. Fix schema email to match visible site email. ~5 minutes.
4. Add `credentialID: "PI188351"` inside the `hasCredential` schema block. ~5 minutes.
5. Add lat/long to schema `geo` block + `addressLocality: "Murrieta"` + `postalCode`. ~10 minutes.

---

## Fundamentals — Where the Site Is Struggling

### Technical (score 40/100)

**Critical**
- No canonical tags anywhere (all 8 audited pages)
- 307 temporary redirect on www subdomain (should be 308 permanent)
- Double brand suffix in titles (6 of 8 pages end with `| G.A. Tucker PI | G.A. Tucker PI`); titles run 78–94 chars, truncating in SERPs

**High**
- Hero H1 duplicates "PRIVATE INVESTIGATOR" twice in DOM (animation spans) — reads as keyword stuffing
- LCP hero image lazy-loaded with no `fetchpriority` — Core Web Vitals suppressed
- Sitemap `lastmod` frozen at 2026-02-18 for every URL — signals stale content

**Medium**
- 4 security headers missing: X-Content-Type-Options, X-Frame-Options, Referrer-Policy, CSP
- `/request-service-form` present in sitemap unnecessarily
- IndexNow not configured (Bing/Yandex fast-index)

Detail: [technical.md](technical.md)

### Content + E-E-A-T (score 52/100)

The site is a legitimate, credentialed business — but the pages don't broadcast it hard enough for a YMYL vertical.

**Strongest page:** `/about` — 6.8/10 composite. Real names, photos, four degrees with institution logos, four affiliations with logos, license #PI188351 prominently displayed. Best E-E-A-T asset on the site.

**Weakest pages:**
- `/services` (3.8/10) — pure navigation hub with no credentials reinforcement
- `/investigations` (4.3/10) — Greg's Legal Studies master's degree is directly relevant and never mentioned
- `/consulting` and `/risk-management` — thin, generic, no expert positioning

**Systematic E-E-A-T gaps across the site:**
- **No physical address** anywhere — only "Southern California" (fine for SAB privacy, but "Murrieta, CA — serving Southern California" would be stronger)
- **No BBB link, no CALI verification link, no external validation links** (logos exist but don't link to profiles)
- **No Privacy Policy** and **no Terms** — YMYL red flag
- **Gmail address as primary contact** (`gatuckerpi@gmail.com`) reduces trust vs. a domain email
- **Broken "Read More Reviews" link** on /background-checks (goes to `#`)
- **Testimonials exist but are not marked up as Review schema** — no star ratings in SERPs despite three real 5-star testimonials

Detail: [content-eeat.md](content-eeat.md)

### On-Page SEO (score 35/100)

- Titles doubled and over-length (see technical)
- Meta descriptions present but not consistently unique
- No H1 with city name (Murrieta) on any service page — this is the geo-relevance gate Google uses first
- Service pages don't cross-link to `/about` credentials or to each other
- No FAQ blocks on `/services`, `/investigations`, `/consulting`, `/risk-management`, `/infidelity` (only `/background-checks` has FAQ, and it's weak)

### Schema (score 55/100)

Well-implemented for a small business — JSON-LD everywhere, uses ProfessionalService, links Greg as founder, includes hasCredential. But:
- `GeoCoordinates` block invalid (declares `addressCountry` which isn't a valid property; missing actual lat/long)
- Duplicate business entity on `/about` (LocalBusiness at `/about#localbusiness` conflicts with root ProfessionalService at `/#organization`)
- `founder` lacks `@id` — graph disconnected between org and Person
- License number in schema `hasCredential` missing the actual `PI188351` ID
- Testimonials not marked up as `Review` / `AggregateRating` — leaves star-rating SERP eligibility on the table
- Address `addressLocality` and `postalCode` missing

Detail: [schema.md](schema.md)

### Local SEO (score 32/100)

- **GBP linkage:** Zero mentions of GBP on-site — no Maps embed, no g.page link, no Place ID in schema. Client must (a) confirm GBP website URL is `https://gatuckerpi.com`, and (b) add a "Find Us on Google" link + Maps embed on the Contact page.
- **NAP:** Three phone numbers on the site; two email addresses (Gmail visible, schema declares an info@ that likely doesn't exist).
- **Citations:** Yelp Murrieta listing confirmed alive. BBB missing entirely. Legacy citations from years of `www.gatuckerpi.com` traffic are now hitting a 307 redirect — some directories may have de-linked already.
- **Local schema:** `areaServed` is state-only ("California") — not sub-region granular. Add Murrieta + surrounding cities + counties as `areaServed` array.

Detail: [local.md](local.md)

### AI Search Readiness / GEO (score 60/100)

**Positives (unusual for a small business):**
- Robots.txt explicitly allows GPTBot, ChatGPT-User, Claude-Web, Anthropic-AI, Google-Extended.
- `/llms.txt` exists and is well-structured with credentials, contact, pricing, and service links. This is above baseline.

**Gaps:**
- Passage-level citability is weak on service pages — copy is marketing-forward, not factual-forward. AI systems prefer short quotable answer sentences ("A California PI must be licensed under BSIS." "Background checks typically complete in 1–2 business days.").
- FAQ blocks are sparse and answers are generic ("varies, contact us").
- Freshness signals missing — no "last updated" dates on service pages.

### SXO — Search Experience Optimization (Critical Finding)

Even after all technical fixes, four pages will not recover to prior positions without restructuring — they suffer from search-intent mismatch:

- **`/infidelity`** — winners on page 1 are city-anchored ("Infidelity Investigator [City], CA"). Current H1 is generic "Infidelity Investigations". Missing California community-property/divorce-law context and a "free confidential consultation" CTA.
- **`/investigations`** — completely generic. Should be repurposed as the primary "Private Investigator Murrieta, CA" landing page (3,000+ words, demographic + zip context, pricing range).
- **`/consulting`** — no rankable target query. Needs to be reframed as attorney-referral / expert-witness services.
- **`/risk-management`** — no consumer intent. Reframe as "Corporate Investigation Services California" or "Pre-Employment Screening".

Detail: [sxo.md](sxo.md)

---

## Prioritized Action Plan

See [ACTION-PLAN.md](ACTION-PLAN.md) for the full sequenced plan with effort estimates.
