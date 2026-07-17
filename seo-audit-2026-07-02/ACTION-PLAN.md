# Action Plan — gatuckerpi.com SEO Recovery
**Date:** 2026-07-02
**Goal:** Recover from the April 2025 www→bare-domain flip + site rebuild that caused the SEO hit, and rebuild E-E-A-T signals for a YMYL vertical.

---

## Phase 0 — Client Actions (5 minutes, HIGHEST leverage)

These require Greg or Julia — we can't do them:

1. **Log into Google Business Profile.** Change the website field to `https://gatuckerpi.com` (bare, HTTPS). If it currently shows `www.gatuckerpi.com`, this is critical. Also run **"Change of Address"** in Search Console if the URL there is still `www.`.
2. **Google Search Console:** verify BOTH properties exist — `gatuckerpi.com` and `www.gatuckerpi.com` (or the domain property `sc-domain:gatuckerpi.com` which covers both). File a **Change of Address** from www → non-www if a bare-domain property doesn't already own the traffic.
3. **Decide the single canonical phone number.** Currently 909-964-8976 and 909-220-4006 both appear. Pick one.
4. **Decide the single canonical email.** Currently `gatuckerpi@gmail.com` (visible) vs `info@gatuckerpi.com` (in schema — likely doesn't exist). Pick one. Domain email preferred for YMYL trust.
5. **Confirm the anchor city.** Yelp + area code point to **Murrieta, CA**. Confirm — we'll use it in schema, H1s, and llms.txt.

---

## Phase 1 — Critical Technical Fixes (this week, ~3 hours)

### 1.1 Fix the www redirect from 307 → 308 permanent [BLOCKER]
- Vercel project settings, or `vercel.json` redirect rule
- Verify with `curl -sI https://www.gatuckerpi.com/` — should show `308 Permanent Redirect`
- **Impact:** unblocks PageRank consolidation from 7 years of `www.gatuckerpi.com` backlinks

### 1.2 Add canonical tags to every page
- In each `page.tsx` or `layout.tsx`, add `metadata.alternates.canonical: "https://gatuckerpi.com/<path>"`
- Verify: view-source shows `<link rel="canonical" href="https://gatuckerpi.com/...">` on every page
- **Impact:** gives Google an in-page consolidation signal

### 1.3 Fix title tags — remove doubled brand
- In root `layout.tsx`, set `metadata.title.template = "%s | G.A. Tucker PI"`
- On each page's metadata, set only the page-specific title (no `| G.A. Tucker PI` suffix — the template adds it)
- Trim all titles to ≤60 characters
- Include city + state in service page titles: e.g., "Background Check Services in Murrieta, CA"

### 1.4 Fix hero H1 duplication
- Add `aria-hidden="true"` to the non-visible animation span in the hero, OR restructure so the visible text is a single H1

### 1.5 Prioritize the LCP hero image
- On `<Image>` component for `gatuckerbwport.png`, add `priority` prop and remove `loading="lazy"`

**Owner:** web-developer subagent

---

## Phase 2 — Schema + NAP Alignment (this week, ~1 hour)

### 2.1 Align email across schema + visible site
- Pick one (recommend `info@gatuckerpi.com` — set up forwarding, YMYL trust signal)
- Update schema in `layout.tsx` and all visible references

### 2.2 Fix schema errors
- Remove invalid `GeoCoordinates.addressCountry`, add real lat/long: `latitude: 33.55400, longitude: -117.21392`
- Add `addressLocality: "Murrieta"`, `addressRegion: "CA"`, `postalCode: "<confirm>"` to `PostalAddress`
- Add `credentialID: "PI188351"` inside `hasCredential`
- Give `founder` an `@id` that matches the Person `@id` on `/about`
- Remove duplicate `LocalBusiness` block at `/about#localbusiness` — one canonical business entity, not two
- Fix `closes: "23:59"` → `closes: "00:00"` (or drop opening hours for 24/7 availability)
- Change `@type: "ProfessionalService"` → `@type: ["LocalBusiness", "ProfessionalService"]`

### 2.3 Add AggregateRating + Review markup
- Three real 5-star testimonials exist in code (Tom, Jonathon, Ashley M. attorney)
- Add `aggregateRating` + `review` array to the root ProfessionalService entity
- Eligibility for star ratings in SERP

### 2.4 Add BreadcrumbList and WebSite schema
- BreadcrumbList on all non-home pages
- WebSite with SearchAction on root layout

**Owner:** web-developer subagent (execute); ghl-engineer not involved

---

## Phase 3 — Content + E-E-A-T Reinforcement (weeks 2–3, ~10 hours)

### 3.1 Add Privacy Policy + Terms pages [YMYL required]
- Not optional for a vertical where users are researching personal decisions
- Include: form data handling, cookies, GA4 disclosure, GHL webhook mention, right-to-deletion

### 3.2 Add credential mini-block to every service page
- Top of body: license badge + degree list (2 lines) + link to `/about`
- Repeatedly reinforces expertise on YMYL pages

### 3.3 Weave Greg's Legal Studies degree into `/investigations` and `/consulting`
- Currently unmentioned on the most relevant pages

### 3.4 Fix broken review link
- `/background-checks` "Read More Reviews" points to `#` — link to GBP reviews URL or a dedicated `/reviews` page

### 3.5 Add FAQ blocks with real answers on every service page
- 4–6 questions per page, with direct factual answers (turnaround time, pricing range, legal basis, geography served)
- Mark up with FAQPage schema (won't get rich results anymore but strong AI-citation signal)

### 3.6 Expand `/consulting` and `/risk-management`
- Currently thin. Target the actual queries:
  - `/consulting` → attorney-referral + expert-witness (Greg's expert-witness status is documented — foreground it)
  - `/risk-management` → corporate investigations + pre-employment screening

**Owner:** seo-writer subagent

---

## Phase 4 — SXO Restructure (weeks 3–5, larger scope)

Even after Phase 1–3, these pages won't recover without page-type restructuring:

### 4.1 Rebuild `/investigations` as `/private-investigator-murrieta-ca` (or add as new page)
- 3,000+ word city landing page
- Demographic + zip context, pricing range, service area list (15+ nearby cities)
- Note: two prior page-1 competitors for Murrieta PI queries (amatrixinvestigations, privin.net Murrieta pages) appear offline — open ranking window

### 4.2 Restructure `/infidelity`
- H1: "Infidelity Investigator Murrieta, CA" (city + state, above the fold)
- Add CA community-property + divorce-law context
- CTA: "Free confidential consultation" (not "Request Service")

### 4.3 Add `/child-custody` (currently absent from sitemap)
- 2,500–5,000 words
- Attorney-collaboration framing
- California "best interests of the child" legal standard
- Specific evidence types family courts accept
- This is the highest-value service segment (attorney referrals)

**Owner:** seo-writer subagent (drafts) + web-developer (builds)

---

## Phase 5 — Local Signal Rebuild (parallel to Phase 3–4)

### 5.1 Add GBP linkage on site
- "Find Us on Google" button in footer + Contact page
- Embed Google Maps iframe on Contact page (even for SAB — validates location)

### 5.2 Citation cleanup
- Audit citations pointing to `www.gatuckerpi.com` — request updates to bare domain where possible
- Add: BBB profile (currently missing entirely)
- Verify: Yelp Murrieta listing points to `https://gatuckerpi.com`

### 5.3 Reviews acceleration
- Set up GHL post-service review request flow (ghl-engineer)
- Target: 5+ new Google reviews in the next 90 days to compensate for the 18-day-review-velocity signal loss during the rebuild window

**Owner:** local-seo + ghl-engineer

---

## Sequencing Summary

| Phase | Timing | Effort | Owner | Blocking Client Input? |
|---|---|---|---|---|
| 0 — Client actions | Today | 5 min | Greg/Julia | — |
| 1 — Critical technical | This week | 3 hr | web-developer | Anchor city confirmation |
| 2 — Schema + NAP | This week | 1 hr | web-developer | Phone + email decisions |
| 3 — Content/E-E-A-T | Weeks 2–3 | 10 hr | seo-writer | — |
| 4 — SXO restructure | Weeks 3–5 | 20+ hr | seo-writer + web-developer | — |
| 5 — Local signals | Parallel | 5 hr | local-seo + ghl-engineer | GBP access |

---

## What Will Recover From These Fixes vs. What Requires More Work

**Will recover (weeks to ~3 months) with Phase 0–2:**
- Ranking for existing indexed pages
- Map-pack visibility once GBP + citations realign to bare domain
- SERP presentation (titles, canonicals, star ratings)

**Won't recover without Phase 3–4:**
- Rankings on service pages that lost content depth in the rebuild
- Any keyword targeting that requires city-anchored content (all service pages are missing this)
- YMYL trust equity — Privacy/Terms and physical-location signals must be added
