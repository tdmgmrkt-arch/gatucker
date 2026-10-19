# SEO Punch List — G.A. Tucker PI

_Compiled 2026-10-01. Everything found during the forensic-profiling and custody work that
was out of scope to fix at the time._

Ordered by what unblocks what, not by severity alone. Items marked **verified** were checked
at the source, not inferred.

---

## A. Our call — no client input needed

| # | Item | Detail |
|---|---|---|
| A1 | **"833 PI Serve" is a third phone format** | Homepage uses the vanity spelling; everywhere else is "(833) 747-3783". Pick one. `src/app/components/three-steps-section.tsx:12` |
| A2 | **Duplicate background-checks page** | `/services/background-checks` duplicates `/background-checks`. **Verified orphaned** — not in sitemap, not linked anywhere, no canonical, no `noindex`. Decide: delete, or 301 to `/background-checks`. |
| A3 | **"San Diego, CA" on that duplicate page** | `src/app/services/background-checks/page.tsx:619` says "our fully licensed private investigator in San Diego, CA". He is in Murrieta. This is the "San Diego mention" the 2026-08-11 audit flagged and never tracked down. Resolves with A2. |
| A4 | **`/reviews` aggregateRating will drift** | Root layout hardcodes 4.9/67; `/reviews` writes a live Google value to the same `#organization` entity. Identical today, guaranteed to diverge. One of them should be the single source. |
| A5 | **Re-check the 2026-08-11 schema punch list** | Several items on it may already be fixed — the invalid root `geo` block is, and nobody logged it (**verified**: `layout.tsx:96-97` now has correct lat/long). Worth a pass before assuming the rest are open. |

## B. Needs Greg

| # | Item | What we need |
|---|---|---|
| B1 | **(909) 220-4006 still live on 2 pages** | **Recount 2026-10-19 — the earlier "exactly once" figure was wrong.** It renders on **2 built pages**: the homepage (via `src/app/components/three-steps-section.tsx:12`) and `/services/background-checks` (`page.tsx:619`). The canonical number appears on all 61. Neither instance is in schema and no call-tracking platform is installed, so this is a hardcoded leftover, not dynamic number insertion. **Second defect in the same copy block:** the background-checks line advertises "our fully licensed private investigator in **San Diego, CA**" — wrong city for a Murrieta firm. Ask: does 220-4006 ring, and to whom? If dead, both instances come off and the San Diego line is corrected at the same time. |
| B2 | **GBP access** | Manager or owner access. Open since August. Needed for: adding the three new services, checking the service area (see B3), Insights, and auto-poster onboarding. **Correction to earlier notes: the GBP is healthy and surfacing normally** — 4.9/67, correct phone, correct hours, website field populated. This is an optimisation ask, not a repair. |
| B3 | **GBP service area may be far too broad** | The knowledge-panel map renders at continental zoom with a large polygon. For a Murrieta SAB that would dilute local relevance badly. **Unverified — read off a thumbnail.** Confirm in the dashboard before acting. |
| B4 | ~~Blog pricing contradicts the live rate~~ | **RESOLVED 2026-09-10 in `3d0d063`.** `src/app/blog/posts.ts` now reads "between $150 and $400 per hour" with a note that advanced degrees and forensic credentials command the upper end. Consistent with the $375 rate. No action. |
| B5 | **CALI / WAD memberships** | **Verified**: no public listing for Greg in either directory, while a competing Murrieta firm (Hodson P.I.) *is* in CALI's Find An Investigator. Are the memberships current, and may we complete the public profiles? |

## C. Compliance — fix regardless

| # | Item | Detail |
|---|---|---|
| C1 | ~~`/about` calls Julia a "psychologist"~~ | **RESOLVED 2026-10-19 (unpushed).** The claim appeared **twice** on `/about`, once misspelled "pyschologist". Both replaced with the `CANONICAL-FACTS.md` wording already live on `/child-custody` and `/high-net-worth-child-custody`: "a background in child psychology and education, a paralegal certification, and more than 17 years working with children and families." Verified 0 remaining instances in source and in rendered output. |
| C2 | **`info@gatuckerpi.com` — removed from the site, but the infrastructure decision is still open** | **PARTIALLY RESOLVED 2026-10-19 (unpushed).** `gatuckerpi.com` still has **no MX records**, so `info@` still receives nothing. What changed: it is no longer *published*. It was in the Organization schema (`layout.tsx:68`) and twice in `llms.txt` — the two surfaces AI assistants and crawlers read — while every human-facing link on the site already used `gatuckerpi@gmail.com`. Schema and `llms.txt` now match the address that actually receives mail. **Still needs Greg:** stand up domain email at GoDaddy, or confirm Gmail as canonical. Until then the firm has no address at its own domain. |

## D. Off-site — free, and the thing that makes AI answers stick

Every claim about Greg currently traces back to his own site. Independent sources are what stop
a cautious model hedging. All paste-ready copy is in `CANONICAL-FACTS.md`.

| # | Item | Detail |
|---|---|---|
| D1 | **BBB has no website link at all** | A+ rating, in business since 2018-03-29, not accredited — and no link to gatuckerpi.com. Free link going unclaimed. |
| D2 | **BBB service list has typos Google is displaying** | "**serveillance**" and "**trail consulting**" appear in the BBB snippet on page one of his own branded search. An AI summary quoted both back verbatim on 2026-10-01 — direct proof directory text gets ingested. |
| D3 | **Yelp "About" is one sentence** | Profile is claimed and otherwise accurate (NAP, website, hours, 23 photos all correct) but carries no service list, no credentials, no licence number. Yelp ranks **twice** on his branded SERP. Highest-visibility underused field he owns. |
| D4 | **Yelp messaging is disabled** | "This provider has not enabled messaging on Yelp." A free inbound lead channel, switched off. |
| D5 | **Yahoo Local unclaimed** | Listing is accurate but unverified. Claiming is free. |
| D6 | **New services missing everywhere off-site** | Forensic behavioral profiling, forensic linguistics, and high-asset custody are live on the site but on no third-party profile. Cheapest corroboration win available. |
| D7 | **Link the DCA licence record** | **Verified**: licence #188351, Private Investigator, status CURRENT, expires 2028-03-31, no disciplinary action. A `.ca.gov` record is the strongest free third-party corroboration there is. Cite the number everywhere and link the lookup from the site. |

### Review-profile context (nothing to "fix", worth knowing)

Google **4.9** (67) · Chamber of Commerce **5/5** (10) · Yelp **3.4** (8). Independent platforms,
so divergence is normal — but Yelp is the weakest and appears twice on page one. Schema correctly
anchors on the Google figure. Never publish a blended number.

## E. Tooling

| # | Item | Detail |
|---|---|---|
| E1 | **Google API setup — ~20 min, free, one time** | Unblocks real keyword volume and Search Console data for **every** client, not just this one. DataForSEO is not installed here and is paid; the free `seo-google` skill covers GSC, PageSpeed, CrUX, GA4, and Keyword Planner at Tier 3. gatuckerpi.com is **already GSC-verified** (`layout.tsx:218`) and GA4 is live (`G-4M0SQ0VYEM`) — only the API plumbing is missing. Steps: `~/.claude/skills/seo-google/references/auth-setup.md` |

## F. Standing blocker

| # | Item | Detail |
|---|---|---|
| F1 | **Bebas Neue has never loaded, site-wide** | `src/app/globals.css:422` places the `@import` mid-file. CSS ignores `@import` after any rule, so every `Bebas Neue` declaration falls back to Arial Black on every page. The site has never once rendered in its intended typeface. Fixing it changes typography everywhere at once, which is why it has sat unshipped — but it is a bug, not a redesign. Note: the new pages' heading sizes were tuned against Arial Black, so they will want re-checking after the fix. |

---

## Closed during this work

- ~~Old domain unknown~~ — **almost certainly does not exist.** gatuckerpi.com archived
  continuously since 2018-08-06; LLC formed 2018-03-29. The "citation bleed" theory had no basis.
- ~~Email conflict~~ — resolved to a definite answer: `info@` is dead. Now C2.
- ~~"Only PI in California" claim~~ — replaced with structural rarity phrasing. No longer a
  question for Greg.
- ~~GBP not surfacing~~ — was a tooling artifact on my side. The profile is healthy.
