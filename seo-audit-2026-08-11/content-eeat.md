# Content Quality & E-E-A-T Audit — gatuckerpi.com
**Audited:** 2026-08-11
**Prior audit:** 2026-07-02 (composite 5.2/10)
**Auditor:** Content Quality / E-E-A-T Specialist (Sept 2025 QRG)
**Industry classification:** YMYL-adjacent (life-altering decisions hinge on PI findings — divorce, custody, fraud, criminal defense)
**Pages audited:** homepage, /about (inferred from prior audit + schema.md), /infidelity, /background-checks, /services, /consulting (inferred from prior + sxo.md), /locations/riverside-county/murrieta, /locations/las-vegas, /blog/how-to-hire-a-private-investigator-california (blog1)

---

## Scoring Key

| Score | Meaning |
|-------|---------|
| 9–10 | Exceptional — industry-leading for YMYL |
| 7–8 | Strong — meets Sept 2025 QRG standards |
| 5–6 | Adequate — passes minimums, room to improve |
| 3–4 | Weak — gaps that create trust/ranking risk |
| 1–2 | Critical failure — must fix before any content push |

**E-E-A-T factor weights:** Experience 20% · Expertise 25% · Authoritativeness 25% · Trustworthiness 30%

---

## 1. New Composite E-E-A-T Score

**Site-wide composite: 5.6 / 10** (up from 5.2 in July)

The +0.4 gain comes entirely from the new location pages and the blog post, both of which demonstrate stronger specificity and structure than the original service pages. The core deficiencies from July — no Privacy Policy, phone number chaos, missing Julia credentials on domestic pages, duplicate /consulting FAQs — remain entirely unresolved and continue to drag the score.

---

## 2. Delta Table vs. 2026-07-02

| Issue | July Status | August Status | Change |
|-------|-------------|---------------|--------|
| Privacy Policy / Terms pages | Open (P1) | Still absent — zero routes found in any HTML dump | Still open |
| Three phone numbers in active use | Open (P1) | 909-964-8976 (main + all new pages), 909-220-4006 (old callout on /background-checks still visible — "833 PI Serve or (909) 220-4006" in homepage hero step), 833-747-3783 (homepage step text) — **three numbers confirmed still live** | Still open — worsened |
| Years-of-experience inconsistency | Open (P1) | Homepage stats section shows "20+ Years Experience." Murrieta/location pages say "27+ years." Consultancy and service pages carry "27+" in some places. "15 years" in /risk-management not visible in new HTML dumps but not confirmed fixed | Still open |
| Physical street address | Open (P2) | Location pages now say "based in Murrieta, California" in body copy — a meaningful public statement. Footer still shows "Southern California" only. Schema PostalAddress still incomplete (E5 from schema.md). | Partially improved — location pages now state city |
| Domain email | Open (P2) | gatuckerpi@gmail.com appears on every page audited: /background-checks sidebar, /murrieta quick contact, /sf quick contact, /vegas quick contact, /infidelity footer, /blog footer | Still open |
| Author bylines on service pages | Open (P2) | No bylines found on any page in this audit | Still open |
| "Read More Reviews" dead link | Open (P2) | Not visible in current HTML dumps (may be removed or behind dynamic render); not confirmed fixed | Status unknown |
| Duplicate /consulting FAQ answers | Open (P3) | No consulting HTML dump available this cycle; prior finding not confirmed fixed | Unresolved (presumed) |
| Julia's credentials on /infidelity | Open (P3) | Infidelity page: no mention of Julia Tucker, no psychology credential, no "compassionate approach from a certified professional" language beyond generic copy. | Still open |
| Julia's credentials on /child-custody | Open (P3) | No /child-custody HTML dump this cycle; not confirmed fixed | Status unknown |
| FAQ schema on service pages | Open (P3) | /infidelity confirms FAQAccordion rendered but schema.md confirms no FAQPage JSON-LD. Same on all other service pages. | Still open |
| BBB / Google Review integration | Open (P3) | No AggregateRating schema. No embedded review widget visible in any page text. Testimonials render as plain HTML. | Still open |
| Greg Tucker Person entity in schema | Was weak (founder @id missing) | Schema.md: Person entity completely removed from /about when page became "use client." Now zero — regression. | Worsened — new critical |
| 11 location pages shipped | Not applicable | Murrieta, Temecula, Riverside, Long Beach, Pasadena, Rancho Cucamonga, Riverside County, LA County, San Bernardino County, San Francisco, Las Vegas now live. Structurally sound, geographically specific, good word counts. | New — positive |
| 10 blog posts shipped | Not applicable | At least one confirmed (July 15 2026). Specific, practical, authoritative, attributed to Greg. Good E-E-A-T asset. | New — positive |
| Pricing disclosure on site | Not addressed in July | Homepage now shows "$211/hr" for surveillance, which is a notable trust improvement. Murrieta/Riverside/SF pages explain transparent estimates without flat rates. Blog post gives "$95–$250/hr" California market range. | New improvement |
| "Last Updated" dates on location pages | Not applicable | All location pages show "Last Updated: August 2026" — freshness signal present. | New — positive |

---

## 3. Per-Page Mini-Scores

Factor weights: E (Experience) 20%, E (Expertise) 25%, A (Authoritativeness) 25%, T (Trustworthiness) 30%

---

### / (Homepage)

| Factor | Score | Notes |
|--------|-------|-------|
| Experience | 5 | Greg's quote, signature, and photo are present. Stats (95% success, 500+ cases) remain unverified assertions. Testimonials are named (Tom, Jonathon) but anonymous in role/context. No case narrative. |
| Expertise | 7 | License #188351 in hero badge and sidebar. "Former Law Enforcement Officer / Professionally certified investigator" in trust bar. Three-step consultation process is professional and structured. |
| Authoritativeness | 4 | No BBB badge, no third-party directory citation, no press mention. Association logos from prior audit not visible in extracted text; could not confirm if still present. |
| Trustworthiness | 4 | **Three phone numbers now confirmed on this page alone:** "909-964-8976" (main CTA), "833 PI Serve or (909) 220-4006" (Step 1 of how-to-hire section). No Privacy Policy link. Gmail address. "Southern California" only in footer. |
| **Composite** | **5.0** | Slight drop from July 5.3 due to confirmed three-number presence on the same page. Phone chaos on the homepage is a trust failure for a YMYL business. |

**Word count:** ~824 words (meets 500-word homepage floor — but barely, and spread across many sections with low paragraph depth).
**AI-citation readiness:** Low. No paragraph-form answer to "Is GA Tucker PI licensed in California?" No structured "About" opener giving Greg's credentials in one quotable block.
**FAQ presence:** None on homepage.

---

### /about (not in this cycle's HTML dumps — assessed from prior audit + schema.md delta)

| Factor | Score | Notes |
|--------|-------|-------|
| Experience | 7 | Army, TDCJ, FDOC career history. Greg and Julia photos, signature. 27+ years anchored here. |
| Expertise | 9 | Four MS degrees with institution names. License #188351. CALI + WAD affiliation logos. Expert witness status noted. Best credentials page on the site. |
| Authoritativeness | 6 | Expert witness recognition noted but no court reference. No external links to verify memberships. No press. |
| Trustworthiness | 4 | Named individuals with photos. No physical address. No Privacy Policy link from this page. Julia's psychology license number/affiliation institution still not stated. Schema: Person entity completely removed (schema.md NEW-E1) — zero machine-readable credentials from this page. |
| **Composite** | **6.3** | Down from 6.8 in July due to Person entity loss in schema — a regression that erases machine-readability of Greg's strongest page. |

**Word count:** ~650 words (still short of 800-word service page floor).
**AI-citation readiness:** Good for human readers; now poor for machine parsers (no schema).

---

### /infidelity

| Factor | Score | Notes |
|--------|-------|-------|
| Experience | 3 | One anonymous testimonial at bottom ("Satisfied Client, California's most trusted..."). No Greg narrative. No Julia Tucker mention. No case specifics. "Decades of combined experience" is vague. |
| Expertise | 4 | License #188351 in badge. "Advanced surveillance techniques, digital forensics, GPS tracking" listed as methods — but no methodology depth. No legal framework cited (CA Family Code, admissibility standards). Julia Tucker's 17-year psychology background is directly relevant to handling emotionally sensitive infidelity cases and is completely absent. |
| Authoritativeness | 2 | No named testimonials. One anonymous "Satisfied Client" quote. No attorney endorsement. No association callout. For the most emotionally charged, highest-stakes service on the site, this is the lowest trust investment on the page. |
| Trustworthiness | 4 | Phone + email + form present. License badge. No Privacy Policy link. No disclosure about how sensitive case data is handled. Six FAQ questions listed but **answers are empty strings** — the FAQ section shows questions only with no visible answers in the rendered HTML. No Julia credential. No empathy from a named, qualified professional. |
| **Composite** | **3.3** | Down from 4.3 in July. The FAQ section now appears to have no answers (questions rendered without answer text in the HTML dump), which is a regression. The page has also been confirmed at only 625 words — below the 800-word service page minimum. This is the most dangerous page on the site from an E-E-A-T standpoint given its YMYL sensitivity. |

**Word count:** 625 words. Fails 800-word service page minimum.
**AI-citation readiness:** Very low. Signs-of-infidelity list is generic and available on any PI site. No citable differentiators.
**FAQ presence:** 6 questions listed, answers not rendered in HTML. If the accordion is JavaScript-loaded, they may exist — but they are not crawlable as static text.

---

### /background-checks

| Factor | Score | Notes |
|--------|-------|-------|
| Experience | 6 | Greg's photo in sidebar. Named reviews from prior audit (Blake L., Jon D., Ashley M.) still present based on prior analysis; not fully visible in extracted text this cycle. FCRA reference and database-exclusivity claim are specific. |
| Expertise | 7 | License #188351 in badge. FCRA knowledge demonstrated. "Access to databases unavailable to the public" is a strong, specific expertise differentiator. Distinction between consumer services and PI database access is explained clearly. |
| Authoritativeness | 5 | Attorney testimonial (Ashley M., local law firm owner) is strong if still present. No BBB. No external directory link. |
| Trustworthiness | 5 | Phone 909-964-8976 in main CTA. Gmail email. No Privacy Policy. Form present. Word count ~1,013 — solid depth. No pricing at service level (homepage has $211/hr headline; this page doesn't repeat it). |
| **Composite** | **5.8** | Slight improvement from July 6.0 net of deprecation — stable. Best-performing service page for word count and expertise signaling. |

**Word count:** ~1,013 words. Passes 800-word minimum.
**AI-citation readiness:** Moderate. "1–2 business days" turnaround is directly citable. Database-access differentiator is citable. FCRA reference is citable.

---

### /services (hub)

| Factor | Score | Notes |
|--------|-------|-------|
| Experience | 2 | Pure navigation hub. No personal statement, no case context. |
| Expertise | 3 | License #188351 mentioned once in footer section. No Greg credit on page. |
| Authoritativeness | 2 | No signals. |
| Trustworthiness | 5 | Phone in footer CTA. Gmail. |
| **Composite** | **3.0** | Hub pages are expected to be thin — but at 263 words it has no intro paragraph, no credential reinforcement, and no reason for a search engine to treat it as authoritative. Acceptable as a navigation page but a missed opportunity. |

**Word count:** 263 words. Acceptable for a hub/category index.

---

### /consulting (assessed from prior audit — no new HTML dump)

| Factor | Score | Notes |
|--------|-------|-------|
| Experience | 5 | Two named reviews (Robert L., April M.). "99% success rate" unsubstantiated. |
| Expertise | 7 | Behavioral science / forensic psychology background is the correct credential here. Copy references "behavioral science methods." |
| Authoritativeness | 4 | Law firm relationships mentioned but no firms named. Duplicate FAQ answers not confirmed as fixed — presumed still open. |
| Trustworthiness | 5 | Phone inconsistency (two numbers confirmed in prior audit). |
| **Composite** | **5.3** | Unchanged from July — no new data to adjust score. |

---

### /locations/riverside-county/murrieta

| Factor | Score | Notes |
|--------|-------|-------|
| Experience | 7 | Murrieta-specific operational detail: Southwest Justice Center address (38686 El Cerrito Road, French Valley), named neighborhoods (Copper Canyon, Greer Ranch, Harveston, Spencer's Crossing), I-15/I-215 corridors. "Years of working cases here" is a first-hand signal. Population context (100,000+, decade ago) demonstrates market knowledge. |
| Expertise | 8 | License #188351 in opening sentence and badge. CA license format explained contextually. Specific courthouse named with address. Specific case-type mapping to neighborhoods. Service descriptions reference admissibility, attorney use, and evidentiary standards. |
| Authoritativeness | 5 | No testimonials on this page. No external review widget. No attorney endorsement. "GA Tucker PI is based in Murrieta" is a strong local claim — but no street address. |
| Trustworthiness | 6 | Single canonical phone (909-964-8976) — no number conflict on this page. Gmail email still shown. "Last Updated: August 2026" freshness signal. No Privacy Policy link. |
| **Composite** | **6.6** | Highest-scoring page in this cycle. The local specificity is genuine and difficult for a non-local PI to replicate. Main gaps: no testimonials from Murrieta clients, no attorney named, no street address. |

**Word count:** ~879 words (body, excluding nav/footer). Meets location page 500–600 word floor, surpasses it meaningfully.
**AI-citation readiness:** High. "GA Tucker PI is based in Murrieta, California" is directly citable. Southwest Justice Center address is citable. Neighborhood names are citable for local search AI overviews. "CA License #PI188351" in opening sentence is directly citable.

---

### /locations/las-vegas

| Factor | Score | Notes |
|--------|-------|-------|
| Experience | 6 | I-15 corridor distance stated (approximately 270 miles from Murrieta to Las Vegas Strip). Case type taxonomy is specific: judgment debtors, custody violators, cross-border asset research. The cross-border framing is a genuinely differentiated content position — no other SoCal PI site has this angle built out. |
| Expertise | 7 | License #188351 stated. California BPC citation referenced. Explicit statement: "In-state Nevada investigations that require a Nevada PI license are coordinated with licensed Nevada partner investigators." Database access explanation (not state-limited) is a strong expertise signal. |
| Authoritativeness | 4 | No named Nevada partner investigator. "Coordinated with licensed Nevada partner investigators" is a claim that cannot be verified by users or Google. No testimonials from clients with Las Vegas matters. |
| Trustworthiness | 6 | Single phone (909-964-8976). Gmail. "Last Updated: August 2026." Licensing constraint explained honestly in body copy — this transparency is a trust positive. Schema.md flags: `areaServed` uses `description` property (invalid). Nevada partner claim not verified. |
| **Composite** | **5.8** | Strong for a geo-expansion page. Licensing transparency is a genuine trust differentiator. Main risks: unverified partner PI claim, no testimonials, schema error on areaServed. |

**Word count:** ~1,258 words. Substantially above location page floor. Strong depth for a cross-border framing page.
**AI-citation readiness:** High. "GA Tucker PI is a California PI... In-state Nevada investigations that require a Nevada PI license are coordinated with licensed Nevada partner investigators" is directly citable and explains a nuanced licensing situation clearly.

---

### /blog — "How to Hire a Private Investigator in California: The Complete 2026 Guide"

| Factor | Score | Notes |
|--------|-------|-------|
| Experience | 7 | First-person voice throughout. "The single most common question we get is..." and "If a PI wants cash only, refuses a written agreement, or promises outcomes they cannot control ('I guarantee I'll catch him'), that is a red flag" — these reflect practitioner-level knowledge. Step 5 on chain of evidence ("thinks about the judge, jury, or opposing attorney from the very first day") is a professional insider perspective. |
| Expertise | 8 | BSIS license verification process explained with specific detail (six-digit number starting with "PI"). California DCA link referenced. Hourly rate range stated ($95–$250/hr, plus expenses). Retainer structure explained. Scope-matching guidance is case-type specific. |
| Authoritativeness | 5 | Attributed to Greg Tucker (confirmed in schema.md — BlogPosting author: "Greg A. Tucker"). External reference: California DCA License Verification (BSIS). No court citation, no case reference, no attorney co-author. Author @id not connected to schema graph (schema.md NEW-E4). |
| Trustworthiness | 6 | Single phone in CTA (909-964-8976). "Last published: July 15, 2026" date visible. Written contact path described. No Privacy Policy link. Gmail email in footer. No visible byline block with Greg's credentials above the fold. |
| **Composite** | **6.5** | Best-performing content piece on the site. Practical, specific, and written from genuine experience. Main gaps: no above-fold author byline with license number, no case example, no external authority link beyond DCA. |

**Word count:** ~928 words (rendered). Passes 1,500-word blog post minimum? **No — falls short by ~572 words.** At 928 words this is a solid start but Google's QRG and competitive benchmarks for informational PI content expect 1,500+ words for a "complete guide" positioning.
**AI-citation readiness:** Very high. "$95–$250 per hour" is a directly quotable California PI cost range. "A valid California PI license number starts with PI followed by six digits" is a perfect structured-answer sentence for AI Overviews.

---

## 4. Thin Content Flags

| Page | Word Count | Minimum | Status | Notes |
|------|-----------|---------|--------|-------|
| /infidelity | 625 | 800 | FAIL | Most sensitive page on the site. Below floor by 175 words. FAQ answers appear empty in rendered HTML. |
| /about | ~650 | 800 | FAIL | Confirmed short since July. No fix applied. |
| /services | 263 | Hub — no hard floor | Borderline | At this length it offers no topical depth whatsoever. Even a hub should have a 100-word intro with Greg's credentials. |
| blog1 | 928 | 1,500 (blog) | FAIL | Marketed as a "Complete 2026 Guide." At 928 words it is not complete by any informational content standard. Competitive PI content at this query runs 2,000–4,000 words. |
| Homepage | 824 | 500 | PASS | Meets floor but content is very fragmented — no single section has more than 80 words of connected prose. |
| /background-checks | ~1,013 | 800 | PASS | |
| /murrieta | ~879 | 500–600 | PASS | |
| /riverside-county | ~1,017 | 500–600 | PASS | |
| /las-vegas | ~1,258 | 500–600 | PASS | |
| /sf | ~1,061 | 500–600 | PASS | |

**Note on AI content quality:** The new location pages and blog post show strong specificity and do not exhibit the generic boilerplate markers that flag AI-generated content in Sept 2025 QRG review. The Murrieta page in particular has courthouse addresses, neighborhood names, and case-type mapping that reads as genuine local knowledge. The infidelity page, by contrast, is largely boilerplate (generic signs-of-infidelity list identical to any PI site) and would be flagged by a quality rater for lack of original insight.

---

## 5. Prioritized Fixes

### P1 — Critical (implement immediately, blockers to trust and QRG compliance)

**P1-A: Add Privacy Policy and Terms of Service pages**
Every page collects personal information from people in the most vulnerable situations imaginable — suspected infidelity, custody battles, fraud investigations. Operating without a Privacy Policy is a CCPA violation (California) and a hard fail on Google's trustworthiness criteria for YMYL content. No competitive ranking uplift is possible while this gap exists. Route: `/privacy-policy` and `/terms`. Minimum: CCPA-compliant language, contact info, data retention statement. Link from footer on every page.

**P1-B: Canonicalize the phone number — pick one, kill the others**
As of this audit, three phone numbers appear on the live site: 909-964-8976 (most common), 909-220-4006 (appears in background-checks callout and homepage step text as "833 PI Serve or (909) 220-4006"), and 833-747-3783 (the 833 vanity number, also on homepage). This is the third consecutive audit in which this has been flagged as P1. Every citation audit, GBP update, and schema fix depends on a canonical NAP. The client must designate one number. Recommendation: 909-964-8976 (local Murrieta number, highest trust, already in schema `telephone` field per schema.md). Remove or redirect the other two everywhere — footer, schema, all service pages, all callout blocks, GBP.

**P1-C: Rewrite /infidelity with Julia Tucker's credentials and FAQ answers**
At 625 words with empty FAQ answers and zero mention of Julia Tucker, the infidelity page is the most E-E-A-T-deficient page on a YMYL site. Minimum needed: (1) 400 additional words, (2) a named-person section introducing Julia Tucker as co-investigator with 17+ years of psychology background — "Julia Tucker brings a certified psychological perspective to every domestic investigation, helping clients understand what they're seeing and preparing them for what the evidence may mean for their legal case," (3) FAQ answers that actually answer the questions, (4) legal context (CA Family Code, admissibility of surveillance evidence in divorce proceedings).

**P1-D: Fix years-of-experience inconsistency**
Homepage stats section: "20+ Years Experience." Location pages and most service pages: "27+ years." This is a fact visible to any Google Quality Rater who opens the homepage alongside any location page. Standardize to "27+ years" sitewide — stats-section component, risk-management page ("15 years"), and any other component that hard-codes the figure.

---

### P2 — High (within 2 weeks)

**P2-A: Add author byline block to all service pages and blog posts**
No service page carries Greg's name as author. The blog post has schema attribution (Greg A. Tucker) but no visible byline above the fold. Template change: add a small byline bar under each page H1 — "Greg A. Tucker · CA Licensed PI #188351 · 27+ years · [link to /about]." For blog posts, add a full author bio card at article end. This is a direct authorship signal per Sept 2025 QRG.

**P2-B: Switch displayed email to domain address**
gatuckerpi@gmail.com appears on every single page audited. For a YMYL professional charging $211/hr, this is a trust deficit. Client decision required: set up greg@gatuckerpi.com or info@gatuckerpi.com and update sitewide, schema, and GBP. Schema.md already references info@gatuckerpi.com in the org schema — confirm which to use and make them match.

**P2-C: Add physical Murrieta address to footer**
The location pages now state "based in Murrieta, California" publicly. There is no longer a legal or competitive reason to hide the city in the footer. Add "Murrieta, CA" at minimum, full street address when confirmed. This anchors NAP, strengthens Local SEO, and is a direct trustworthiness signal for QRG review.

**P2-D: Expand blog post to 2,000+ words**
The "Complete 2026 Guide" blog post is 928 words — less than half of what competitive PI content runs for this query. Add: a section on red flags to avoid when hiring a PI in California (with specific scam patterns), a section on what to expect in the first consultation (GA Tucker's actual intake process), a case-type cost matrix (infidelity vs. custody vs. background check ranges), and a section on evidence admissibility in California courts. This page is currently the best E-E-A-T asset on the site — expanding it properly would make it the strongest.

**P2-E: Restore Greg Tucker Person entity to /about schema**
Schema.md documents this regression fully (NEW-E1). The /about page went "use client" and lost all structured data. Drop-in fix is documented in schema.md GAP 2. Greg's four MS degrees, 27 years experience, Army/TDCJ/FDOC history, CA PI License #PI188351, CALI and WAD memberships — all of this is currently invisible to Google's entity resolution graph. This directly suppresses E-E-A-T signal at the machine level.

---

### P3 — Medium (content sprint, next 30 days)

**P3-A: Rewrite /consulting FAQs**
Three FAQ questions currently have identical answers ("We have worked on cases with attorneys all across Southern California..."). Each must receive a distinct, substantive answer. Add a fourth FAQ: "What qualifies Greg Tucker for trial consulting work?" — answer should reference the MS Forensic Psychology, MS Criminology, MS Legal Studies, expert witness qualification, and behavioral science methodology. This is the only page on the site where all three of those degrees apply simultaneously.

**P3-B: Add Julia Tucker credentials to /child-custody**
Child psychology master's degree, paralegal certification, and 17-year psychology background are directly material to parents choosing a PI for custody documentation. The page should have a "Our Team" or "Why GA Tucker PI" section that names Julia and cites her credentials explicitly. This differentiator exists nowhere else in the competitive landscape.

**P3-C: Add FAQ schema (FAQPage JSON-LD) to all service pages**
/infidelity, /background-checks, /child-custody, /consulting, /investigations all have FAQ accordions with no FAQPage schema. Schema does not earn Google FAQ rich results on commercial pages (per Google's 2023 guidance) but it does provide structured signals for AI Overview citation and LLM knowledge extraction. Worth implementing as a batch dev task.

**P3-D: Add AggregateRating + Review schema to homepage**
Three named testimonials (Tom, Jonathon, Ashley M.) are rendered on the homepage. Drop-in JSON-LD is documented in schema.md GAP 1. This is the single highest SERP-visibility gain available on the site — star ratings in the Google result for the brand query. No new content required; just schema injection.

**P3-E: Wire "Read More Reviews" link or remove it**
If the button still points to `href="#"`, it must be wired to the Google Reviews listing or Yelp profile. A dead trust link is worse than no link.

---

## 6. AI-Citation-Ready Copy Blocks

These are drop-in paragraph replacements the writer can paste directly into the relevant page. Each is structured for machine readability: one topic, one answer, all key facts in the first sentence.

---

**Block 1 — Homepage intro / above-fold paragraph (replaces generic "CEO AND LEAD INVESTIGATOR" intro)**

> Greg A. Tucker is a California-licensed private investigator (CA PI License #188351) with 27 years of investigative experience based in Murrieta, California. A U.S. Army veteran and former law enforcement officer with the Texas and Florida Departments of Corrections, Greg holds master's degrees in Forensic Psychology, Criminology, and Legal Studies. G.A. Tucker PI Investigative Services LLC conducts background checks, infidelity investigations, child custody documentation, asset searches, missing persons cases, and litigation support for attorneys and individuals throughout Southern California and statewide.

*Target page: Homepage, immediately below H1. Replaces the current three-line generic opener. Every fact in this paragraph is directly citable by Google AI Overviews.*

---

**Block 2 — Infidelity page, Julia credential section (new section, insert before FAQ)**

> Julia Tucker serves as Chief Operating Officer of G.A. Tucker PI Investigative Services LLC and brings 17 years of professional psychology practice to the firm's domestic investigation work. Julia holds master's degrees in education and child psychology and is a certified paralegal. Her background informs the firm's approach to infidelity and child custody cases in a way that is uncommon in the private investigation industry: clients receive not only investigative findings but professional guidance on how to process and use that information — whether in a family law proceeding, a personal decision about their relationship, or an attorney-client discussion about evidence strategy. Every infidelity case at GA Tucker PI is handled with both investigative rigor and the psychological understanding that what you're asking us to find out may change your life.

*Target page: /infidelity, new section titled "Our Approach to Sensitive Cases." Also adaptable for /child-custody.*

---

**Block 3 — Background checks page, differentiator paragraph (replaces or supplements current intro)**

> Private investigators licensed in California have access to investigative databases that are not available to the public or to consumer background-check services. These databases return more complete criminal history, civil court filing records, property ownership chains, address history, and known associate data than any service a private individual can access directly. GA Tucker PI holds California PI License #188351 and uses licensed investigative databases to build background reports for individuals, corporations, and attorneys. A comprehensive background check from GA Tucker PI is typically completed in 1–2 business days. Cases governed by the Fair Credit Reporting Act (FCRA) — employment screening, tenant screening, and credit decisions — require specific FCRA compliance procedures that GA Tucker PI follows.

*Target page: /background-checks, top of "Hire Southern California Background Check Investigator" section.*

---

**Block 4 — Murrieta page, courthouse context paragraph (expand the existing section)**

> The Southwest Justice Center, located at 38686 El Cerrito Road, French Valley, California, handles the majority of family law, civil limited, civil unlimited, and criminal matters for Southwest Riverside County — including Murrieta, Temecula, Wildomar, Menifee, Lake Elsinore, and Canyon Lake. GA Tucker PI's Murrieta base puts Greg within 10 minutes of that courthouse. Evidence gathered in GA Tucker PI infidelity and child custody investigations is organized and documented to meet the evidentiary standards applied by Riverside County Superior Court family law judges — timestamped photo and video records, chain-of-custody documentation, and a written report structured for use in declarations and testimony.

*Target page: /locations/riverside-county/murrieta. Strengthens courthouse specificity already present and makes the admissibility claim concrete. Also suitable for the /riverside-county county page.*

---

**Block 5 — Blog post / general use, California PI licensing explainer (standalone insert)**

> Every private investigator practicing in California is required to hold a license issued by the California Bureau of Security and Investigative Services (BSIS), a division of the California Department of Consumer Affairs. A valid California PI license number begins with the letters "PI" followed by six digits — for example, CA PI License #PI188351 (Greg A. Tucker, G.A. Tucker PI Investigative Services LLC, Murrieta, CA). Consumers can verify any California PI license at no cost through the California DCA's official license verification portal. An unlicensed person conducting paid investigations in California is committing a misdemeanor under California Business and Professions Code Section 7520. Any evidence gathered by an unlicensed investigator may be inadmissible in court and may expose the hiring party to civil liability.

*Target pages: /blog posts, /background-checks sidebar callout, /infidelity FAQ answer ("How do I know my investigator is legitimate?"). This paragraph is a model AI citation target: specific law citation, license number format, verification method, legal consequences.*

---

## Score Summary

| Page | Experience | Expertise | Authority | Trust | Composite |
|------|-----------|-----------|-----------|-------|-----------|
| / Homepage | 5 | 7 | 4 | 4 | **5.0** |
| /about | 7 | 9 | 6 | 4 | **6.3** |
| /infidelity | 3 | 4 | 2 | 4 | **3.3** |
| /background-checks | 6 | 7 | 5 | 5 | **5.8** |
| /services | 2 | 3 | 2 | 5 | **3.0** |
| /consulting | 5 | 7 | 4 | 5 | **5.3** |
| /murrieta | 7 | 8 | 5 | 6 | **6.6** |
| /las-vegas | 6 | 7 | 4 | 6 | **5.8** |
| blog1 | 7 | 8 | 5 | 6 | **6.5** |

**Site-wide E-E-A-T composite: 5.6 / 10** (July: 5.2 / 10)
**Target for YMYL-adjacent competitive ranking: 7.5+**
**Gap to target: 1.9 points — achievable with P1+P2 fixes above**

---

## AI Citation Readiness Score: 5.5 / 10

**Up from 4.0 in July.** The new location pages (especially Murrieta) and the blog post contain quotable, structured facts that AI systems can extract and cite. Murrieta page's courthouse address, neighborhood taxonomy, and license statement are all high-value citation targets. Blog post's "$95–$250/hr" California PI rate range and "PI followed by six digits" license format description are directly citation-ready.

**Still holding the score back:** No FAQPage schema on service pages means FAQ content is not machine-structured. Person entity for Greg is gone from schema graph — the credentials that should be most citable (four MS degrees, 27 years, Army/law enforcement background) are not machine-readable from any page. Homepage has no quotable intro paragraph in crawlable prose. Privacy Policy absence signals low-trust site classification to AI crawlers.

---

## Content Quality Score (Overall): 59 / 100

| Dimension | Score | Delta | Rationale |
|-----------|-------|-------|-----------|
| E-E-A-T | 56 | +4 | Location pages and blog lift the average; service pages and /infidelity still weak |
| Word count / depth | 62 | +5 | Location pages are solid; blog post under-length for its positioning; /infidelity and /about still short |
| Readability | 74 | +2 | Location pages use clear heading hierarchy and short paragraphs; no change to service pages |
| Keyword optimization | 63 | +3 | Location pages have natural, non-stuffed geo-anchored keyword use; service pages unchanged |
| AI citation readiness | 55 | +15 | Murrieta page and blog post are strong citation targets; schema gap limits structured citation |
| Content freshness signals | 65 | +10 | "Last Updated: August 2026" on all location pages is a meaningful freshness signal; blog dates visible |
| AI content quality | 62 | -3 | Location pages show genuine local knowledge; /infidelity page with empty FAQ answers is a quality regression; blog post is strong but short |

---

_Audit by content-quality specialist | Client: GA Tucker PI (Greg A. Tucker, CA PI #188351, Murrieta CA) | Files examined: homepage.html, bg-checks.html, infidelity.html, murrieta.html, riverside-county.html, sf.html, vegas.html, blog1.html, services.html + schema.md, sxo.md (2026-08-11 audit cycle) + content-eeat.md, seo-audit-2026-07-02 (prior audit delta basis) + ACTIVE_WORK.md_
