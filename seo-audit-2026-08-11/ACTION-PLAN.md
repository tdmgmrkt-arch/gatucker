# SEO Action Plan — gatuckerpi.com

**Audit source:** [`FULL-AUDIT-REPORT.md`](./FULL-AUDIT-REPORT.md) · 2026-08-11
**Health score:** 58/100 · **Target for next quarter:** 75/100

---

## Legend

- 🔴 **P1** — Critical (fix this week; blocks ranking / creates liability)
- 🟠 **P2** — High (fix within 2 weeks; direct rank impact)
- 🟡 **P3** — Medium (fix within 1 month; optimization)
- 🟢 **P4** — Low (backlog)

**Effort estimates:** S = <1 hr · M = 1–4 hrs · L = 4–16 hrs · XL = 16+ hrs

---

## 🔴 P1 — Critical (this week)

### 1. Rebrand or deindex `/hollywood-fixer` — brand-reputation liability
**Owner:** seo-writer + web-developer · **Effort:** M
**Why:** SERP for "hollywood fixer" is dominated by Anthony Pellicano (convicted felon) and Fred Otash. GA Tucker appears in this results context.
**Do:**
- Rewrite H1: `"Hollywood's Preferred Fixer"` → `"Discreet Investigations for High-Profile Clients"`
- Rewrite title tag: `"High-Profile & Executive Investigations | Discreet PI | GA Tucker PI"`
- Remove the word "fixer" from title, meta description, and above-the-fold copy
- Keep the cinematic visual design — it works for the new framing
- If Greg objects to the rebrand: add `noindex` to page metadata and treat as a referral-only landing URL

### 2. Rewrite `/infidelity` (highest E-E-A-T failure at 3.3/10)
**Owner:** seo-writer · **Effort:** L
**Do:**
- New H1: `"Infidelity Investigator — Riverside County & Murrieta, CA"`
- New title: `"Infidelity Investigator Riverside County CA | Murrieta | GA Tucker PI"`
- Rewrite lead paragraph — see full block in [`sxo.md`](./sxo.md) section "5 Weakest Pages" #1
- **Verify FAQ answers render as static HTML** (current dump shows questions with empty answers — either an accordion JS bug or missing content)
- Add Julia Tucker section: her MS Forensic Psychology / 17-year psychology background is the real differentiator for infidelity work
- Replace `"Request Service"` CTA → `"Schedule a Free Confidential Consultation"`
- Add pricing anchor: "California PI rates typically run $85–$175/hour"
- Add named client attribution: `"— Client, Murrieta, CA"`
- Target: 1,500 words minimum (from current 625)

### 3. Rewrite `/child-custody` to bridge PI → attorney gap
**Owner:** seo-writer · **Effort:** L
**Why:** attorneys occupy SERP positions 2–4 for "child custody investigator murrieta." Persona scoring: 4/10 for the exact target user.
**Do:**
- New H1: `"Child Custody Investigator — Murrieta & Southwest Riverside County"`
- New title: `"Child Custody Investigator Murrieta CA | Court-Ready Evidence | GA Tucker PI"`
- Add H2: `"Evidence that Meets California Family Court Standards"` — name Southwest Justice Center, cite "best interests of the child," list evidence types (timestamped video, parenting behavior, living conditions)
- Add H2: `"Working with Your Murrieta Family Law Attorney"` — describe handoff workflow, deposition support, testimony availability
- Add pricing signal (hourly range + typical block)
- Full rewrite block in [`sxo.md`](./sxo.md) #2

### 4. Restore Greg Tucker's `Person` schema entity
**Owner:** web-developer · **Effort:** S
**Why:** eliminated when `/about` became `"use client"`. Zero machine-readable credentials right now. **This is a critical E-E-A-T regression.**
**Do:**
- Add `<script type="application/ld+json">` inside `/about/page.tsx` client component — full drop-in snippet in [`schema.md`](./schema.md) GAP 2 (includes all 4 MS degrees, license, memberships)
- Simultaneously add `"@id": "https://gatuckerpi.com/about#greg-tucker"` to `founder` in root layout (fixes prior E3)

### 5. Phone number canonical decision — client input required
**Owner:** Chief of Staff → Greg · **Effort:** S (decision) + M (site sweep)
**Why:** 3 numbers still on homepage. Blocks NAP consistency, Map Pack, Yelp/BBB citation updates, schema, GBP.
**Do (Chief of Staff):**
- Ask Greg: which one number should appear on every citation, every page, and GBP? Recommend **909-964-8976** (already the schema `telephone`).
- Once selected: sweep site for other numbers, replace with canonical. Update ai-actions.json.

### 6. Fix 6 root-layout schema errors in one commit (no client input needed)
**Owner:** web-developer · **Effort:** S
**Do:** all in `src/app/layout.tsx`:
- Remove invalid `geo: { addressCountry: "US" }` block
- Change `openingHoursSpecification.closes: "23:59"` → `"00:00"`
- Add `#PI188351` to `hasCredential.name` string
- Add `credentialID: "PI188351"` to `hasCredential`
- Fix `/locations/page.tsx` `@id` collision (change from `#organization` → `/locations#service` or remove `@id`)
- Fix `/locations/las-vegas/page.tsx` — remove invalid `description` property from `City` node in `areaServed`
- Fix blog `articleSchema.author` in `/blog/[slug]/page.tsx` — add `@id`, change `url` → `sameAs`, standardize name to "Greg A. Tucker"

### 7. Publish Privacy Policy + Terms pages
**Owner:** seo-writer + client legal review · **Effort:** M
**Why:** open since July P1. E-E-A-T trust signal + California CCPA/CPRA compliance for a business handling sensitive intake data.
**Do:**
- Draft Privacy Policy covering: what intake data is collected, how it's stored, PI-specific confidentiality commitments, CA resident rights (CCPA)
- Draft Terms of Service covering: scope of engagement, no legal advice, confidentiality expectations
- Add footer links on every page

---

## 🟠 P2 — High (within 2 weeks)

### 8. Add `AggregateRating` + `Review` schema (SERP star rating unlock)
**Owner:** web-developer · **Effort:** S
**Do:** drop-in JSON in [`schema.md`](./schema.md) GAP 1. Insert into root layout `organizationSchema`. Puts stars in Google SERP snippet — highest visibility gain on the site. Verify count against live Yelp (11 reviews / 4.9★).

### 9. Deepen `/locations/riverside-county/murrieta` to 3,000+ words
**Owner:** seo-writer · **Effort:** L
**Why:** Privin ranks with ~4,500 words + disclosed pricing + press. GA Tucker's Murrieta page is ~1,800 words with evasive pricing FAQ.
**Do:**
- Expand each service subsection to 3–4 paragraphs (not 1-sentence bullets)
- Add H2: `"How Much Does a Private Investigator Cost in Murrieta, CA?"` with real ranges ($85–$175/hr surveillance, flat-fee background checks)
- Add "Murrieta Case Types We See Most Often" narrative section
- Reference Yelp 2026 Top-10 Murrieta list as press proof

### 10. Rewrite `/background-checks` to add ICRAA + California legal depth
**Owner:** seo-writer · **Effort:** M
**Why:** top-ranking pages for "background check company california" are 3,000–4,500 words and all cite ICRAA (CA-specific law). GA Tucker mentions FCRA but no ICRAA.
**Do:**
- New H1: `"California Background Check Investigator | Murrieta & Southern CA"`
- Add H2: `"California Background Check Laws: FCRA and ICRAA"` — explain the CA-specific layer
- Surface turnaround time above the fold (currently only in FAQ)
- Add employer-specific section: `"Pre-Employment Background Checks for California Businesses"`
- Full lead paragraph in [`sxo.md`](./sxo.md) rewrite #4

### 11. Adopt domain email + fix email schema conflict
**Owner:** client + web-developer · **Effort:** M
**Do:**
- Set up `info@gatuckerpi.com` (or `greg@gatuckerpi.com`) via GoDaddy / Google Workspace
- Sweep site — replace `gatuckerpi@gmail.com` on all pages, sidebars, footers
- Update ai-actions.json
- Update root schema `email` field

### 12. Add `WebSite` block with `SearchAction`
**Owner:** web-developer · **Effort:** S
**Do:** drop-in JSON in [`schema.md`](./schema.md) GAP 3. Second `<script>` tag in `<head>`.

### 13. Add `/llms.txt`
**Owner:** web-developer · **Effort:** S
**Do:** starter draft in [`FULL-AUDIT-REPORT.md`](./FULL-AUDIT-REPORT.md) "AI Search Readiness" section. Place at `/public/llms.txt`.

### 14. Add security headers via `next.config.ts`
**Owner:** web-developer · **Effort:** S
**Do:**
```typescript
async headers() {
  return [{
    source: '/:path*',
    headers: [
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
      { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
    ],
  }];
}
```

### 15. Consolidate business name — standardize to canonical
**Owner:** web-developer · **Effort:** M
**Do:** decide canonical (recommend `"G.A. Tucker PI Investigative Services LLC"` for legal contexts, `"G.A. Tucker PI"` for headings). Sweep site + ai-actions.json + schema.

### 16. GBP audit — confirm website URL + reviews link + citation cleanup
**Owner:** local-seo agent · **Effort:** L
**Do:**
- Client shares GBP dashboard access (or exports website URL + review count)
- If URL is stale/old-domain: update to gatuckerpi.com
- File BBB profile
- File PInow, CALI, Thumbtack profiles
- Full 10-target citation queue in [`FULL-AUDIT-REPORT.md`](./FULL-AUDIT-REPORT.md) "Local SEO" section
- Add GBP link + Google Maps embed to `/contact` page

---

## 🟡 P3 — Medium (within 1 month)

### 17. Rewrite `/consulting` as attorney-referral / expert-witness page
**Owner:** seo-writer · **Effort:** M
**Why:** currently generic. Highest B2B revenue potential is attorney referrals.
**Do:** new title `"PI Expert Witness & Attorney Referral Services | GA Tucker PI"`. Frame around what attorneys need: court-admissible evidence, chain-of-custody, testimony availability, Southwest Justice Center familiarity.

### 18. Reframe `/risk-management` as "Pre-Employment Screening California"
**Owner:** seo-writer · **Effort:** M
**Why:** clearer commercial intent than generic "risk management." Targets HR managers and small business owners.

### 19. Add `BreadcrumbList` schema to service pages + blog
**Owner:** web-developer · **Effort:** S
**Do:** Location pages already have it. Extend to `/infidelity`, `/background-checks`, `/child-custody`, all other service pages, and `/blog/[slug]`.

### 20. Add `FAQPage` schema to `/infidelity` + `/background-checks`
**Owner:** web-developer · **Effort:** S
**Why:** commercial site won't get Google rich results, but AI/LLM citation benefit is real.

### 21. Add Julia Tucker credentials to `/infidelity` and `/child-custody`
**Owner:** seo-writer · **Effort:** M
**Why:** her MS Forensic Psychology + 17-year psychology background is a direct differentiator for domestic investigation. Untapped E-E-A-T asset.

### 22. Year-of-experience consistency sweep
**Owner:** web-developer + seo-writer · **Effort:** S
**Do:** homepage stats say "20+ Years." Rest of site says "27+." Standardize to "27+" everywhere (Greg's actual figure).

### 23. Resolve `/locations/las-vegas` — NV licensure or partner PI arrangement
**Owner:** Chief of Staff → Greg (decision) · **Effort:** S decision, M downstream cleanup
**Do:** ask Greg whether he holds an NV license or has a formal NV partner PI network. If yes: add NV license number to page + soften "coordination with licensed Nevada partner investigators" language to reflect the actual relationship. If no: either restructure to explicit "CA-based, cases involving Vegas travel or Vegas-origin matters that fall under CA jurisdiction" **or** `noindex` the page.

### 24. Fix `/consulting` FAQ duplicates
**Owner:** seo-writer · **Effort:** S
**Why:** flagged in July audit as P3. Not confirmed fixed.

### 25. Add BlogPosting BreadcrumbList
**Owner:** web-developer · **Effort:** S
**Do:** Home > Blog > Post Title. Same pattern as location pages.

---

## 🟢 P4 — Low (backlog)

- Add `@type: ["LocalBusiness","ProfessionalService"]` to root layout (currently just ProfessionalService — LocalBusiness needed for map pack eligibility)
- Add `sameAs`: LinkedIn + GBP URL to root layout
- Add `Person` entity for Julia Tucker (COO / co-owner visibility)
- Add sitemap `lastmod` per URL
- Add "Read More Reviews" link that actually works (was dead in July)
- Consider adding video content (Privin uses 4-step visual methodology; a brief "meet Greg" clip would differentiate)
- Add press mention section — Yelp 2026 Top-10 Murrieta naming qualifies

---

## Blocked — awaiting client input

- **Phone canonical** (Greg picks one of 3)
- **Address confirmation** — city inferred as Murrieta from public copy; schema PostalAddress `addressLocality` + `postalCode` need Greg's confirmation before publishing
- **GBP dashboard access** — for URL verification + review count
- **Old domain name** — for citation-bleed audit
- **NV license or partner PI arrangement** — for `/locations/las-vegas` decision
- **Legal review** of Privacy Policy + Terms drafts

---

## Sequencing recommendation

**Week 1:**
- P1 items 4, 6 (schema fixes — no client input) → dev deploys same day
- P1 item 5 → ask Greg for phone canonical
- P1 item 7 → seo-writer starts Privacy Policy + Terms drafts

**Week 2:**
- P1 items 1, 2, 3 (Hollywood Fixer rebrand + Infidelity + Child Custody rewrites)
- P2 items 8, 12, 13, 14 (schema + headers deploys)

**Week 3–4:**
- P2 items 9, 10 (Murrieta depth expansion + Background Checks rewrite)
- P2 item 15 (business name consolidation)
- P2 item 16 (GBP + citations — once client access confirmed)

**Month 2:**
- All P3 items
- Re-audit to measure delta

---

_Punch list · 25 items · Estimated total effort: ~120 hours across dev + writer + local-seo · Blocking dependencies flagged._
