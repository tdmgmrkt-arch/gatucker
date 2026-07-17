# Local SEO Audit — G.A. Tucker PI Investigative Services
**Date:** 2026-07-02
**URL:** https://gatuckerpi.com
**Auditor:** Local SEO specialist (via Chief of Staff / Otto)

---

## Local SEO Score: 38 / 100

| Dimension | Weight | Raw Score | Weighted |
|-----------|--------|-----------|---------|
| GBP Signals | 25% | 10/100 | 2.5 |
| Reviews & Reputation | 20% | 35/100 | 7.0 |
| Local On-Page SEO | 20% | 40/100 | 8.0 |
| NAP Consistency & Citations | 15% | 30/100 | 4.5 |
| Local Schema Markup | 10% | 45/100 | 4.5 |
| Local Link & Authority Signals | 10% | 55/100 | 5.5 |
| **TOTAL** | | | **32 / 100** |

---

## Business Classification

- **Business type detected:** SAB (Service Area Business) — no visible street address, service area stated as "All of California & Nationwide"
- **Industry vertical:** Legal/Investigation (Private Investigator)
- **Correct schema subtype:** `ProfessionalService` (currently used) is acceptable, but a more precise type such as `LocalBusiness` with `serviceType: "Private Investigation"` would be better. Google's preferred type for PI firms is `ProfessionalService` — this is correct.
- **Anchor city (inferred):** Murrieta, CA (Yelp slug is `g-a-tucker-p-i-investigative-services-murrieta`, 909 area code is Inland Empire)

---

## QUICK WINS — Fix Today

### QW-1: NAP inconsistency — email address mismatch (CRITICAL)
- Schema in `layout.tsx` declares `"email": "info@gatuckerpi.com"`
- Every visible page uses `gatuckerpi@gmail.com`
- Two different email addresses create a NAP conflict. Google reads the JSON-LD; users and citations use the Gmail address.
- **Fix:** Align schema email to `gatuckerpi@gmail.com` OR stand up `info@gatuckerpi.com` as a real forwarding address and update all contact pages and citations. Pick one and be consistent everywhere.

### QW-2: Schema geo coordinates are empty (CRITICAL for SAB)
- `layout.tsx` schema has `"geo": { "@type": "GeoCoordinates", "addressCountry": "US" }` — no latitude or longitude.
- Google uses geo to anchor the business location. Without it, the profile floats.
- **Fix:** Add precise lat/long for Murrieta, CA HQ (or wherever GBP is registered): `"latitude": 33.55400, "longitude": -117.21392` (5 decimal precision).

### QW-3: Schema address missing city/ZIP (CRITICAL)
- `layout.tsx` schema `address` block only has `addressRegion: "CA"` and `addressCountry: "US"`. No `streetAddress`, `addressLocality`, or `postalCode`.
- **Fix:** Add at minimum `"addressLocality": "Murrieta"` and `"postalCode": "92563"` (verify ZIP). Even as a SAB, the GBP registration city must appear in schema.

### QW-4: No GBP link anywhere on site (HIGH)
- Zero links to the GBP profile (no g.page/ shortlink, no Google Maps embed, no Place ID reference).
- This is a key post-domain-move signal gap. The old domain had whatever GBP association it had; the new domain has no explicit GBP pointer.
- **Fix:** Add a "Find Us on Google" button in the Contact page and/or footer linking to the GBP profile URL. Also embed a Google Maps iframe on the Contact page (even for a SAB it validates location to Google).

### QW-5: PI license number not machine-readable (MEDIUM-HIGH)
- License `#188351` appears visually but is not encoded in schema (`hasCredential` block exists but omits the actual `credentialID` / license number field).
- **Fix:** Add `"credentialID": "PI188351"` inside the `hasCredential` object in schema.

### QW-6: No `@type: ["LocalBusiness", "ProfessionalService"]` array — single type only (MEDIUM)
- Current: `"@type": "ProfessionalService"` alone.
- **Fix:** Use `"@type": ["LocalBusiness", "ProfessionalService"]` so Google recognizes it as a location-anchored entity, not just an abstract professional service.

---

## MEDIUM EFFORT — This Week

### ME-1: No Murrieta/Inland Empire city targeting on any page (HIGH PRIORITY)
- H1 on homepage: "HIRE CALIFORNIA'S LEADING PRIVATE INVESTIGATOR" — state-level only.
- Page title: "G.A. Tucker PI | California Private Investigator | 27+ Years Experience" — no city.
- Zero city-specific pages in the sitemap (15 pages total, all service-based).
- Competing for "California private investigator" is a statewide fight. Local map pack wins come from "private investigator Murrieta" or "private investigator Temecula."
- **Fix:** Add Murrieta (and 3–5 surrounding cities: Temecula, Menifee, Lake Elsinore, Corona) to the homepage title and H1 subtext. Build 3–5 city landing pages at `/private-investigator-murrieta/` etc. Each page needs unique content, not a swap.

### ME-2: GBP primary category must be verified and updated post-domain-move (CRITICAL for map pack)
- According to Whitespark 2026, wrong GBP category is the #1 negative ranking factor. Primary category for this business must be "Private investigator" (exact GBP string).
- After a domain move, the GBP website URL field needs to be updated to `https://gatuckerpi.com`. This is almost certainly not done yet and is the primary suspect for the ranking drop.
- **Fix:** Log into GBP, update the website URL from the old domain to `gatuckerpi.com`, verify category is "Private investigator," and submit.

### ME-3: No areaServed cities listed in schema (HIGH)
- Current: `"areaServed": { "@type": "State", "name": "California" }` — too broad for local pack.
- **Fix:** Replace with an array of specific cities/counties the business actually serves:
  ```json
  "areaServed": [
    { "@type": "City", "name": "Murrieta", "sameAs": "https://en.wikipedia.org/wiki/Murrieta,_California" },
    { "@type": "City", "name": "Temecula" },
    { "@type": "City", "name": "Menifee" },
    { "@type": "City", "name": "Lake Elsinore" }
  ]
  ```

### ME-4: Testimonials are hardcoded, not schema-marked (MEDIUM)
- Three testimonials are hardcoded in `testimonials-section.tsx` but have no `Review` or `aggregateRating` schema.
- No Google review widget — testimonials appear disconnected from the GBP profile.
- **Fix:** Add `aggregateRating` to the organization schema (e.g., `"ratingValue": "5.0", "reviewCount": "3"` to start, update as GBP reviews accumulate). Long-term: implement a Google review widget or pull live reviews.

### ME-5: BBB not listed — zero Tier 1 citation presence confirmed (HIGH)
- BBB search returned zero results for GA Tucker PI Investigative Services in California.
- Yelp listing exists (Murrieta slug) but could not be scraped for website URL verification.
- **Fix:** Submit to BBB. Critically: ensure Yelp, BBB, and any other citation that lists this business now points to `gatuckerpi.com` (not the old domain). This citation-to-domain mismatch is a major contributor to the post-domain-move SEO hit.

### ME-6: Multiple phone numbers create NAP fragmentation (MEDIUM)
- Three phone numbers appear across the site: `(909) 964-8976`, `(909) 220-4006`, `(833) PI SERVE / (833) 747-3783`.
- Schema uses only `+1-909-964-8976`.
- Citations will distribute across all three numbers creating fragmented NAP signals.
- **Fix:** Designate one primary phone number for all citations and schema. The `(909) 964-8976` local line is the strongest local signal (Inland Empire area code). The toll-free can appear as a secondary number on-site but should not appear in citation listings.

### ME-7: Footer shows "Avatar Website Design" credit — brand dilution and possible old domain signal (LOW-MEDIUM)
- Footer copyright: "Copyright © 2025 GA Tucker, Private Investigator | Powered by TD Marketing Group"
- The footer business name `GA Tucker, Private Investigator` differs from the schema name `G.A. Tucker PI` and the GBP name `G.A. Tucker PI Investigative Services L.L.C` — three different variations.
- **Fix:** Standardize footer business name to exactly match GBP: "G.A. Tucker PI Investigative Services LLC"

---

## LONGER EFFORT — This Month

### LE-1: No dedicated service pages with local signals (CRITICAL for organic)
- Service pages exist (`/background-checks`, `/infidelity`, etc.) but none contain city-level targeting.
- According to Whitespark 2026: dedicated service pages = #1 local organic factor and #2 AI visibility factor.
- **Fix:** Update each service page to include the primary city in H1, title tag, and first paragraph. E.g., "Background Check Investigator — Murrieta & Temecula, CA"

### LE-2: No review velocity strategy (MEDIUM)
- Sterling Sky's 18-day rule: rankings drop if no new Google reviews in 3 weeks.
- Site has 3 hardcoded testimonials with no visible Google review count.
- **Fix:** Set up a GHL review request automation triggered after case close. Target: 1+ new Google review every 10–14 days.

### LE-3: CAPI membership not displayed (LOW-MEDIUM)
- Site lists CALI (California Association of Licensed Investigators) which is correct.
- No CAPI (California Association of Professional Investigators) mention — if a member, add it.
- Both are E-A-T signals specific to the PI industry.
- **Fix:** Confirm membership status with client. If not a member, evaluate joining CAPI — the membership page backlink from a .org authority site is a Tier 1 local link signal.

### LE-4: Citation audit across all directories (HIGH)
- Cannot confirm without tools (DataForSEO, Whitespark Citation Finder, BrightLocal) what the old domain was or which citations still point to it.
- **Fix:** Run a full citation audit via BrightLocal or Whitespark to find all citations listing the old domain and submit corrections.

---

## NAP Consistency Audit

| Source | Name | Address | Phone | Email | Website |
|--------|------|---------|-------|-------|---------|
| JSON-LD Schema | G.A. Tucker PI | CA, US only | (909) 964-8976 | info@gatuckerpi.com | gatuckerpi.com |
| Footer (visible) | GA Tucker, Private Investigator | Southern California | (909) 964-8976 | gatuckerpi@gmail.com | — |
| Contact Page | G.A. Tucker PI | Southern California | (909) 964-8976 + (833) 747-3783 | gatuckerpi@gmail.com | — |
| Yelp (from slug) | G.A. Tucker P.I. Investigative Services | Murrieta, CA | Unknown | Unknown | Unknown (may be old domain) |
| BBB | NOT LISTED | — | — | — | — |

**Discrepancies flagged:**
1. Email: `info@gatuckerpi.com` (schema) vs `gatuckerpi@gmail.com` (site-wide) — CONFLICT
2. Business name has 4 variations across sources — standardize to legal name: "G.A. Tucker PI Investigative Services LLC"
3. Address: schema has `CA` only; footer has "Southern California"; Yelp has "Murrieta" — inconsistent locality signal
4. Phone: schema has 1 number; contact page shows 2 — pick a primary

---

## GBP Optimization Checklist

| Signal | Status |
|--------|--------|
| GBP profile exists | Unknown — no URL provided, Yelp slug confirms Murrieta location |
| GBP website URL updated to new domain | UNKNOWN — likely NOT updated (prime suspect for ranking drop) |
| Primary category: "Private investigator" | UNKNOWN — must verify |
| GBP link on website | MISSING |
| Google Maps embed | MISSING |
| Place ID in schema | MISSING |
| Review count visible | MISSING |
| Posts / content cadence | UNKNOWN |
| Photos on GBP | UNKNOWN |

---

## Review Health Snapshot

| Metric | Status |
|--------|--------|
| On-site testimonials | 3 hardcoded (Tom, Jonathon, Ashley M.) — all 5 stars |
| aggregateRating in schema | MISSING |
| Google review widget | MISSING |
| Review velocity | UNKNOWN (no GBP data accessible) |
| Response pattern | UNKNOWN |

---

## Schema Validation

| Property | Required | Status | Issue |
|----------|----------|--------|-------|
| @type | Yes | ProfessionalService only | Should be ["LocalBusiness", "ProfessionalService"] |
| name | Yes | Present | "G.A. Tucker PI" — verify matches GBP exactly |
| address | Yes | Partial | Missing addressLocality and postalCode |
| telephone | Yes | Present | +1-909-964-8976 |
| url | Yes | Present | https://gatuckerpi.com |
| geo (lat/long) | Recommended | BROKEN | Has GeoCoordinates type but no lat/long values |
| openingHoursSpecification | Recommended | Present | 00:00-23:59 all days (24/7 correct for SAB) |
| areaServed | Recommended | Too broad | State-level only; needs city array |
| aggregateRating | Recommended | MISSING | No review schema at all |
| hasCredential.credentialID | PI-industry critical | MISSING | License number not in schema field |
| email | Recommended | CONFLICT | info@gatuckerpi.com vs gatuckerpi@gmail.com |
| founder | Optional | Present | Greg Tucker |
| sameAs | Recommended | Present (4 social profiles) | Yelp URL in sameAs should match exact Yelp listing URL |

---

## Limitations Disclaimer

The following could not be assessed without paid tools or client credentials:

- Live GBP ranking positions (requires DataForSEO or manual search)
- Actual GBP profile URL, place ID, review count, and photo count (GBP dashboard access required)
- Full citation footprint and which citations still point to the old domain (requires BrightLocal or Whitespark Citation Finder)
- Old domain identity — client must confirm prior domain so redirect effectiveness and citation bleed can be assessed
- Search Console data: clicks/impressions trend before and after domain move (client must grant access)
- Yelp listing detail: current website URL on Yelp listing (Yelp blocked scraping with 403)
- Review velocity: pace of new Google reviews over last 90 days
- Proximity factor: per Search Atlas ML study, proximity accounts for 55.2% of local pack ranking variance — outside our control

---

## Top 10 Prioritized Actions

| Priority | Action | Effort | Impact |
|----------|--------|--------|--------|
| CRITICAL | Update GBP website URL from old domain to gatuckerpi.com immediately | 5 min | Highest — #1 suspect for ranking drop |
| CRITICAL | Fix schema email conflict (info@ vs gmail) — pick one, make consistent everywhere | 30 min | High — NAP integrity |
| CRITICAL | Add lat/long to schema geo block (Murrieta coordinates) | 15 min | High — entity anchor |
| CRITICAL | Add addressLocality + postalCode to schema address | 15 min | High — local signal |
| HIGH | Add GBP profile link and Google Maps iframe to Contact page | 1 hour | High — GBP/domain association |
| HIGH | Run citation audit (BrightLocal/Whitespark) to find old-domain citations and update to gatuckerpi.com | 2–4 hours | High — citation NAP repair |
| HIGH | Add Murrieta to homepage title tag and H1 subtext | 30 min | Medium-High — city targeting |
| HIGH | Submit to BBB and verify Yelp listing website URL is updated to new domain | 1 hour | Medium-High — Tier 1 citations |
| MEDIUM | Add credentialID "PI188351" to hasCredential schema block | 15 min | Medium — trust/E-A-T |
| MEDIUM | Build 3–5 city landing pages (Murrieta, Temecula, Menifee) with unique PI content | 3–5 days | High long-term — local organic |
