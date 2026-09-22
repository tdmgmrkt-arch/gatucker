# Active Work — Greg A. Tucker (PI)

_Last updated: 2026-09-22_

---

## In Progress
_Currently being worked on. One line each: what / who (agent) / status / notes._

- **Title tag length fix — all 43 pages (2026-09-22 — DONE, unpushed)** — Semrush flagged 10 pages with titles >70 chars, all showing a doubled brand ("... | G.A. Tucker PI | G.A. Tucker PI"). Root cause: `src/app/layout.tsx` sets `template: "%s | G.A. Tucker PI"` while every child page title already ended in the brand. Fix: stripped the brand from all child titles (template supplies it once), shortened them to fit 70 chars incl. the 17-char suffix, made the homepage title `{ absolute: ... }`, shortened the root `default` title (was 71), and added an optional `metaTitle` field to `BlogPost` with short SEO titles for 10 long post headlines (H1s unchanged). Verified against the production build: 43/43 titles under 70 chars, 0 duplicated brands. The Semrush `/hollywood-fixer` row is stale — that URL already 301s to `/high-profile-investigations`.

- **Pricing section copy v2 from Greg (2026-09-10 — SHIPPED)** — Greg sent a fine-tuned rewrite. Section H2 is now "Investigation Services and Pricing"; "Flat Fee" -> "Flat-Fee Packages"; "Shop for Experience" -> "Choose Experience". New content: 5th hourly bullet, discounted-package block (infidelity / child custody / missing-person), the "inquire about packages / tell us which option you prefer" paragraph, and veteran discounts. Greg adopted the agency-suggested "Custom Quote" label, so that open question is closed. Layout call: his "Because the scope and circumstances..." paragraph sits in the shared row (it applies to both options and asks the client to choose), which also keeps the two panels balanced. **Note: "Discounted package rates" and veteran "discounts or special considerations" are new public commitments the site did not previously make.**
- **Pricing rate increase + "Shop for Experience" section (2026-09-09 — SHIPPED)** — Hourly rate raised $211 -> **$375** per Greg (email 2026-09-09). Changed `src/app/components/pricing-section.tsx` + `public/ai-actions.json` pricing_note. Pricing card rebuilt on a single 50/50 grid spine: equal-height option panels, shared consultation/veterans row, then the "Shop for Experience-Not Just Price" rationale in two columns with a full-width closing line. Copy is Greg's tightened v2 (drops "you get what you pay for" and the unverifiable "99% of private investigators" claim). **"Custom Quote" label on the Flat Fee panel is agency wording, not Greg's — confirm with him.** Also fixed a live bug: literal `**consultation**` markdown was rendering as asterisks.
- **Full SEO re-audit complete (2026-08-11)** — Health Score **58/100** (up from ~46). Aggregate report at `seo-audit-2026-08-11/FULL-AUDIT-REPORT.md` + prioritized punch list at `seo-audit-2026-08-11/ACTION-PLAN.md`. Sub-reports: schema.md, sxo.md, content-eeat.md. Awaiting Greg on phone canonical + GBP dashboard access + NV licensure confirmation. Dev-only P1 items can ship this week.
- **NAP canonicalized (2026-08-11 — via BBB + Yelp + GBP screenshots)**: Name = "GA Tucker PI" (short) / "G.A. Tucker PI Investigative Services LLC" (legal); Address = 25185 Madison Ave Ste A, Murrieta CA 92562; Phone = (909) 964-8976; GBP rating = **4.9★ / 67 reviews** (ready for AggregateRating schema). Yelp = 3.6★/9 (diverges — schema will anchor on GBP).

---

## Up Next
_Queued — agreed but not started._

### Schema Fixes — Priority Order (from 2026-08-11 audit)

**Immediate (no client input needed — dev can do now):**
- Fix `closes: "23:59"` → `"00:00"` in root layout `openingHoursSpecification`
- Remove invalid `geo: { "@type": "GeoCoordinates", addressCountry: "US" }` block from root layout
- Add `#PI188351` to root layout `hasCredential.name` (E4 — still open from July audit)
- Fix `/locations/page.tsx` ProfessionalService `@id` — currently collides with root layout `#organization`. Change to `/locations#service` or remove `@id`.
- Fix Las Vegas `areaServed` — remove invalid `description` property from `City` node; replace with `State: California` to avoid implying NV service jurisdiction
- Fix blog author `@id` — add `"@id": "https://gatuckerpi.com/about#greg-tucker"` to `articleSchema.author` in `/blog/[slug]/page.tsx`
- Standardize author name in blog schema to "Greg A. Tucker" (currently mismatches root layout "Greg Tucker")

**After client confirms city/address:**
- Add `addressLocality: "Murrieta"` + `postalCode: "92562"` to root layout `PostalAddress` (E5 — still open)

**Requires dev work:**
- Restore Person entity (Greg Tucker) to `/about/page.tsx` — entity was lost when page became "use client". Add `<script type="application/ld+json">` inside client component. See drop-in snippet in `seo-audit-2026-08-11/schema.md` GAP 2.
- After Person entity restored: add `"@id": "https://gatuckerpi.com/about#greg-tucker"` to `founder` in root layout (E3 — still open)
- Add `AggregateRating` + `Review` blocks to root layout — see drop-in snippet in `seo-audit-2026-08-11/schema.md` GAP 1. Highest SERP-visibility gain available on site.
- Add `WebSite` block to root layout — see drop-in snippet in GAP 3.
- Add `BreadcrumbList` to service pages (`/infidelity`, `/background-checks`, `/child-custody`, etc.) and blog posts.
- Add `FAQPage` schema to `/infidelity` page (has FAQ accordion but no schema block).

### Other Pending Work

- Fill in `CLIENT.md` TBD fields (location, contact, domain, GBP, etc.)
- **E-E-A-T fixes (from content-eeat.md):** P1 = Privacy Policy + Terms page, fix phone number inconsistency, fix years-of-experience inconsistency. P2 = physical address in footer, domain email, author bylines, fix dead reviews link. P3 = FAQ rewrites (/consulting duplicates), Julia credentials on /infidelity + /child-custody, FAQ schema markup.
- **URGENT — GBP/Domain fix (from local.md):** Confirm and update GBP website URL to gatuckerpi.com (prime suspect for ranking drop). Find old domain, run citation audit, update Yelp + submit to BBB.
- Add GBP link + Google Maps embed to Contact page.
- Add Murrieta to homepage title tag and H1 subtext once city confirmed.
- **SXO fixes (from sxo.md) — P1:** Add city (Murrieta, CA) to H1 and first 100 words on all service pages. Rewrite /infidelity H1 to "Infidelity Investigator Murrieta, CA." Add attorney-collaboration + CA legal language to /child-custody. Repurpose /investigations as primary "Private Investigator Murrieta, CA" city page (3,000+ words).
- **SXO fixes (from sxo.md) — P2:** Resolve phone number conflict (3 numbers in use — client pick one). Add pricing range to all service pages (minimum "$X-$X/hr" industry context). Fix LocalBusiness schema address (streetAddress, addressLocality, postalCode).
- Rewrite /consulting as attorney-referral / expert witness page.
- Reframe /risk-management as "Corporate Investigation Services California" or "Pre-Employment Screening."

---

## Blocked
_Waiting on something or someone. List the blocker._

- **Bebas Neue font never loads site-wide** — `src/app/globals.css:422` has `@import url(...Bebas+Neue...)` placed mid-file. CSS ignores `@import` after any rule, so every `Bebas Neue` declaration falls back to Arial Black across the whole site. Fix is moving the import to the top of the file, but that changes typography on every page — needs Greg's sign-off before shipping.

- Blog post pricing range conflict — `src/app/blog/posts.ts` says most reputable CA PIs charge "$95 to $250 per hour," which contradicts the new $375 rate. Suggested fix: raise to "$150 to $400" + note that advanced degrees/forensic credentials command the upper end. Greg must approve (his written opinion, not agency copy).

- City confirmation (addressLocality for schema PostalAddress) — waiting on client. Murrieta strongly inferred (LocationsHub copy publicly says "based in Murrieta, CA") but not in CLIENT.md.
- Old domain name — client must confirm so citation bleed can be found and corrected.
- GBP profile URL / Place ID — client must provide.
- Primary phone designation — three numbers in use (909-964-8976, 909-220-4006, 833-747-3783). Client must pick one canonical number for all citations.
- Email infrastructure decision — schema has info@gatuckerpi.com, site has gatuckerpi@gmail.com. Client must decide.
- Nevada partner PI arrangement — Las Vegas page references "licensed Nevada partner investigators" — verify whether this network is actually in place before promoting the page.

---

## Recently Completed
_Last 5-10 items. Prune older stuff periodically._

- 2026-08-11 — **Full SEO audit** (7 specialist subagents, comparing against 2026-07-02 baseline). Health Score 58/100 (up from ~46). Top critical findings: (1) `/hollywood-fixer` brand liability — SERP puts Greg alongside convicted felon Pellicano; (2) `/infidelity` regressed to 3.3/10 E-E-A-T with missing FAQ answers + no Julia credentials + no geo anchor; (3) `/child-custody` outranked by attorneys — needs attorney-collab section; (4) Greg's Person schema entity was deleted when /about became "use client" — critical E-E-A-T regression; (5) three phones still on homepage. Wins: location pages structurally sound, Yelp #1 for Murrieta, ai-actions.json well-structured, pricing ($211/hr) now on homepage, SXO gap score +10. See `seo-audit-2026-08-11/FULL-AUDIT-REPORT.md` and `ACTION-PLAN.md`.
- 2026-08-11 — Schema re-audit sub-report (part of full audit). 4 of 5 prior errors still open (E2 resolved — duplicate LocalBusiness on /about gone). 3 new errors: Person entity lost, /locations hub @id collision, Las Vegas areaServed invalid property. Findings at `seo-audit-2026-08-11/schema.md`.
- 2026-08-06 — Shipped `/locations` SEO structure: hub + Riverside/LA/San Bernardino county pages + Murrieta/Temecula/Riverside/Long Beach/Pasadena/Rancho Cucamonga city pages + San Francisco + Las Vegas standalones. Reusable LocationPage component, LocalBusiness + FAQPage JSON-LD per page, sitemap + Locations nav dropdown updated. Commit `f1b4155`. **Vegas page framed as CA PI serving Vegas-origin matters — no NV licensure claimed. Verify with Greg whether he has NV license or NV partner PI before promoting the page.** Also flag for Greg: verify Southwest Justice Center + Long Beach courthouse addresses; resolve "San Diego" mention in /background-checks; standardize business name (GA Tucker PI vs Greg Tucker PI); resolve secondary phone (909-220-4006) still in one callout.
- 2026-07-02 — SXO (Search Experience Optimization) audit completed. SXO Gap Score 49/100. Findings at `seo-audit-2026-07-02/sxo.md`. 4 seed queries analyzed.
- 2026-07-02 — Local SEO audit completed. Score 38/100. Findings at `seo-audit-2026-07-02/local.md`.
- 2026-07-02 — Content quality & E-E-A-T audit completed (8 pages). Findings at `seo-audit-2026-07-02/content-eeat.md`. Site composite E-E-A-T 5.2/10 vs. 7.5 target.
- 2026-07-02 — Schema.org / JSON-LD audit completed. Findings at `seo-audit-2026-07-02/schema.md`. 5 errors, 9 warnings.
- 2026-07-02 — Moved repo from `~/ga-tucker-pi` into `~/agency/clients/ga-tucker-pi`
- 2026-07-02 — Created `CLIENT.md` + `ACTIVE_WORK.md` stubs

---

## Decisions Log
_Important decisions made for this client and why. Prevents re-litigating later._

- 2026-08-11 — Las Vegas page is correctly structured from a licensing-risk perspective. Schema does not claim NV jurisdiction. `validIn: California` is explicit. Minor schema fix needed (remove invalid `description` on `City`). Page promotion should wait for confirmation of NV partner PI arrangement.
- 2026-08-11 — Murrieta is now referenced as Greg's base in the public LocationsHub page text. Address confirmation from client is still required before adding to schema PostalAddress, but the blocker is lower-urgency now.
- 2026-07-02 — Kept slug as `ga-tucker-pi` (initials + PI). Documented in CLIENT.md that `ga` ≠ Georgia to prevent future agents from assuming location.
- 2026-07-02 — FAQPage on /faqs and now all /locations/* pages flagged as Info only (not an error). Commercial site won't get Google rich results, but retaining for AI/LLM citation benefit.
- 2026-07-02 — Primary city is Murrieta, CA (inferred from Yelp slug + 909 area code + hub page text). Pending client confirmation before hard-coding in schema PostalAddress.
- 2026-07-02 — Canonical business name should be "G.A. Tucker PI Investigative Services LLC" — 4 name variations exist across schema, footer, contact page, and Yelp. Standardize everywhere.
- 2026-07-02 — /infidelity and /investigations are weakest E-E-A-T pages. Julia's psychology credentials are an untapped differentiator for domestic investigation pages.
- 2026-07-02 — SXO audit confirms /investigations page should be repurposed as the primary "Private Investigator Murrieta, CA" city landing page — it currently targets no specific search intent and would otherwise be wasted URL real estate.
