# Active Work — Greg A. Tucker (PI)

_Last updated: 2026-07-02_

---

## In Progress
_Currently being worked on. One line each: what / who (agent) / status / notes._

- Schema audit findings delivered — 5 errors, 9 warnings identified. Awaiting dev implementation.

---

## Up Next
_Queued — agreed but not started._

- Fill in `CLIENT.md` TBD fields (location, contact, domain, GBP, etc.)
- Implement schema fixes from audit (schema-markup-specialist) — priority order: E2 (duplicate LocalBusiness on /about), E1 (invalid GeoCoordinates), E3 (founder @id), E4 (license number in org credential), then add AggregateRating + Review blocks.
- Confirm city/locality for PostalAddress before publishing to production.
- **E-E-A-T fixes (from content-eeat.md):** P1 = Privacy Policy + Terms page, fix phone number inconsistency, fix years-of-experience inconsistency. P2 = physical address in footer, domain email, author bylines, fix dead reviews link. P3 = FAQ rewrites (/consulting duplicates), Julia credentials on /infidelity + /child-custody, FAQ schema markup.
- **URGENT — GBP/Domain fix (from local.md):** Confirm and update GBP website URL to gatuckerpi.com (prime suspect for ranking drop). Find old domain, run citation audit, update Yelp + submit to BBB.
- Local schema fixes (from local.md): fix email conflict (info@ vs gmail), add lat/long to geo, add addressLocality + postalCode (Murrieta pending confirm), add credentialID "PI188351", expand areaServed to city array, change @type to ["LocalBusiness","ProfessionalService"], add aggregateRating.
- Add GBP link + Google Maps embed to Contact page.
- Add Murrieta to homepage title tag and H1 subtext once city confirmed.
- **SXO fixes (from sxo.md) — P1:** Add city (Murrieta, CA) to H1 and first 100 words on all service pages. Rewrite /infidelity H1 to "Infidelity Investigator Murrieta, CA." Add attorney-collaboration + CA legal language to /child-custody. Repurpose /investigations as primary "Private Investigator Murrieta, CA" city page (3,000+ words).
- **SXO fixes (from sxo.md) — P2:** Resolve phone number conflict (3 numbers in use — client pick one). Add FAQPage schema to /background-checks and /infidelity. Add pricing range to all service pages (minimum "$X-$X/hr" industry context). Fix LocalBusiness schema address (streetAddress, addressLocality, postalCode).
- Build 3-5 city landing pages: /murrieta-private-investigator, /temecula-private-investigator, /riverside-private-investigator (minimum).
- Rewrite /consulting as attorney-referral / expert witness page.
- Reframe /risk-management as "Corporate Investigation Services California" or "Pre-Employment Screening."

---

## Blocked
_Waiting on something or someone. List the blocker._

- City confirmation (addressLocality for schema PostalAddress) — waiting on client. Murrieta inferred from Yelp slug + 909 area code but not confirmed.
- Old domain name — client must confirm so citation bleed can be found and corrected.
- GBP profile URL / Place ID — client must provide.
- Primary phone designation — three numbers in use (909-964-8976, 909-220-4006, 833-747-3783). Client must pick one canonical number for all citations.
- Email infrastructure decision — schema has info@gatuckerpi.com, site has gatuckerpi@gmail.com. Client must decide.

---

## Recently Completed
_Last 5-10 items. Prune older stuff periodically._

- 2026-07-02 — SXO (Search Experience Optimization) audit completed. SXO Gap Score 49/100. Findings at `seo-audit-2026-07-02/sxo.md`. 4 seed queries analyzed. Critical: no city names in service page H1s; /child-custody and /infidelity structurally mismatched vs. SERP; /investigations has no rankable intent; pricing hidden site-wide. Two competitor city pages (amatrixinvestigations, privin Murrieta) now suspended — ranking opportunity exists.
- 2026-07-02 — Local SEO audit completed. Score 38/100. Findings at `seo-audit-2026-07-02/local.md`. Critical: GBP website URL likely not updated post-domain-move; schema NAP email conflict; schema geo missing lat/long; zero city targeting; BBB not listed.
- 2026-07-02 — Content quality & E-E-A-T audit completed (8 pages). Findings at `seo-audit-2026-07-02/content-eeat.md`. Site composite E-E-A-T 5.2/10 vs. 7.5 target. 3 critical gaps, 4 high gaps identified.
- 2026-07-02 — Schema.org / JSON-LD audit completed. Findings at `seo-audit-2026-07-02/schema.md`. 5 errors, 9 warnings.
- 2026-07-02 — Moved repo from `~/ga-tucker-pi` into `~/agency/clients/ga-tucker-pi`
- 2026-07-02 — Created `CLIENT.md` + `ACTIVE_WORK.md` stubs

---

## Decisions Log
_Important decisions made for this client and why. Prevents re-litigating later._

- 2026-07-02 — Kept slug as `ga-tucker-pi` (initials + PI). Documented in CLIENT.md that `ga` ≠ Georgia to prevent future agents from assuming location.
- 2026-07-02 — FAQPage on /faqs flagged as Info only (not an error). Commercial site won't get Google rich results, but retaining for AI/LLM citation benefit.
- 2026-07-02 — Primary city is Murrieta, CA (inferred from Yelp slug `g-a-tucker-p-i-investigative-services-murrieta` + 909 area code). Pending client confirmation before hard-coding in schema or city pages.
- 2026-07-02 — Canonical business name should be "G.A. Tucker PI Investigative Services LLC" — 4 name variations exist across schema, footer, contact page, and Yelp. Standardize everywhere.
- 2026-07-02 — /infidelity and /investigations are weakest E-E-A-T pages. Julia's psychology credentials are an untapped differentiator for domestic investigation pages.
- 2026-07-02 — SXO audit confirms /investigations page should be repurposed as the primary "Private Investigator Murrieta, CA" city landing page — it currently targets no specific search intent and would otherwise be wasted URL real estate.
