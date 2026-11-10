# Redirect Audit — gatuckerpi.com

_Run 2026-11-09, in response to Troy's SEO diagnosis. Every status below was taken live with
`curl -L` against production, following redirects to the **final** status code. Historical URL
universe came from the Wayback CDX API (93 distinct content URLs across all site generations)._

---

## Headline

**73 of 93 historical URLs end in a 404 today.** 54 of those are real content pages
(service pages, city pages, blog posts); the rest are WordPress category/tag/author/feed
archives, which matter less but still bleed crawl budget and any links pointing at them.

Only **two** redirects exist on the site today — [next.config.ts](next.config.ts):
`/testimonials → /reviews` and `/hollywood-fixer → /high-profile-investigations`. Both work.
The mechanism is fine; it was simply never applied to the pre-rebuild URL set.

**Trap for whoever writes the map:** Next.js 308-redirects a trailing slash to the
non-slash form *first*, then 404s. So `/surveillance-private-investigator/` returns 308,
not 404, on a single-hop check — and a shallow crawler reports it as "redirecting fine."
Write the rules against the **non-slash** form; Next matches after normalisation.

## Dead city pages (highest value — these are the local-pack equity)

| Old URL | Suggested target |
|---|---|
| `/riverside-county-private-investigator/` | `/locations/riverside-county` |
| `/los-angeles-private-investigator/` | `/locations/los-angeles-county` |
| `/orange-county-private-investigator/` | `/locations` |
| `/san-diego-private-investigator/` | `/locations` |

## Dead service pages

| Old URL | Suggested target |
|---|---|
| `/surveillance` · `/surveillance-private-investigator/` | `/investigations` |
| `/background-checks-private-investigator/` · `/corporate-background-checks/` · `/personal-background-check/` | `/background-checks` |
| `/child-custody-private-investigator/` | `/child-custody` |
| `/infidelity-private-investigator/` · `/fidelity` · `/domestic-investigation/` | `/infidelity` |
| `/missing-person` · `/missing-persons-private-investigator/` | `/missing-persons` |
| `/profiler/` · `/profiling-private-investigator/` · `/behavioral-analysis-consulting/` | `/profiling` |
| `/forensic-linguistics/` · `/forensic-linguistics-private-investigator/` | `/forensic-behavioral-profiling` |
| `/risk-management-private-investigator/` · `/threat-assessment/` · `/threat-assessment-private-investigator/` · `/stalking-consulting-services/` | `/risk-management` |
| `/counter-intelligence` · `/counter-intelligence-private-investigator/` · `/cyberbullying-private-investigator/` | `/profiling` |
| `/trial-consulting/` · `/jury-consulting/` · `/attorney-services` · `/private-investigator-for-attorneys/` · `/corporate-services/` | `/consulting` |
| `/criminal-investigation/` · `/criminal-investigations` · `/civil-investigations` | `/investigations` |
| `/asset-searches/` | `/background-checks` |
| `/process-service` · `/process-server-private-investigator/` | `/services` |
| `/our-services` | `/services` |
| `/about-us` · `/associations/` | `/about` |
| `/contact-us` · `/start-your-case/` | `/contact` |
| `/client-testimonials` | `/reviews` |
| `/payment` · `/client-payment-portal/` | `/contact` |

## Dead blog posts

| Old URL | Suggested target |
|---|---|
| `/how-much-do-private-investigators-cost-for-a-small-case/` (+ `-2`) | `/blog/how-to-hire-private-investigator-california` |
| `/conducting-a-background-check-on-prospective-employees/` | `/blog/employment-background-checks-california-employers` |
| `/the-stalker/` | `/blog/behavioral-threat-assessment-families-executives` |
| `/benefits-of-having-professional-manage-security/` | `/blog/executive-protection-risk-management-guide` |
| `/now-clients-finally-know-the-truth-for-peace-of-mind/` (+ `-2`) | `/reviews` |
| `/security-guards-flooding-new-york-after-looting-binge/` (+ `-2`) | `/blog` |

## Archives (lower value, send to the nearest hub)

`/category/background-checks/` → `/background-checks` · `/category/child-custody/` → `/child-custody` ·
`/category/investigations/` → `/investigations` · `/category/security-guards/` → `/risk-management` ·
`/category/uncategorized/` · `/tag/*` · `/author/*` · `/hello-world/` · `/thank-you/` ·
`/thank-you-old/` · `/sitemap.rss` · `//feed/*` → `/blog` or `/`

---

## Other claims in Troy's report, checked

| Claim | Verdict |
|---|---|
| Site is not deindexed; crawling allowed; nothing noindexed | **True.** All 59 HTML pages render `<meta name="robots" content="index, follow">`; `robots.txt` allows `/`. |
| Sitemap lists 60 URLs | **True.** Exactly 60. |
| `/ai-actions.json` is in the sitemap | **True** — [src/app/sitemap.ts](src/app/sitemap.ts). It is a JSON file, not a page. Remove it. |
| Missing self-referencing canonicals | **True, on 20 of 34 pages** — including the homepage and every core service page. Location pages, `/blog`, `/reviews` have them. Low impact on its own (Google self-canonicals), but cheap to fix. |
| "40 sitemap pages that no other page links to" | **FALSE.** Crawled all 60 sitemap URLs and extracted every internal `href` from the raw server HTML: **zero orphans.** Every page is internally linked. Likely a depth-limited or JS-less crawl on their end. |
| Dozens of old URLs 404 instead of redirecting | **True, and understated — it is 73.** |
| GBP / NAP / directory conflicts | **Consistent with our own backlog.** See [SEO-PUNCHLIST.md](SEO-PUNCHLIST.md) B2 (GBP access, open since August), B3 (service-area polygon), D1–D7 (BBB/Yelp/Yahoo). Note the GBP itself is healthy — 4.9★/67, correct NAP — so this is optimisation, not repair. |
| Referring domains 263 → 1,267 since August | **Unverified from here** (needs Semrush/GSC). A 5× spike in 3 months on a site this size is worth a serious look in GSC Links before anyone touches a disavow file. |
| Branded "ga tucker" ranked #3 last December, now absent | **Unverified from here.** This is the single most alarming line in the report and the first thing to check with the new GSC access — Manual Actions, then Security Issues, then branded impressions over time. |
| "4 questions" article | **Could not locate it.** No such slug in the repo and nothing matching in the Wayback archive of any site generation. Ask Troy which URL he means, or pull it from GSC. |

## Timeline

Repo history: initial commit **2025-10-10**, 20 commits in Nov 2025, 27 in Dec 2025.
Wayback has the old site through **2025-07-26** and then nothing until **2026-01-14**, which
is already the Next.js build. The traffic fall Troy dates to "the December 2025 core update"
lands in the same window as our launch. Both things happened at once, and the 73 unredirected
URLs are a sufficient explanation on their own. Do not assume the algorithm did this.
