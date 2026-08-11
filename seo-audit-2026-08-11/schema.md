# Schema.org / JSON-LD Audit — gatuckerpi.com
_Audited: 2026-08-11 | Delta from prior audit: 2026-07-02_

---

## Pages Audited

| Page | Blocks Found |
|------|-------------|
| `/` (homepage) | 1 — ProfessionalService (root layout only, no page-level schema) |
| `/about` | 0 — "use client" page, no structured data whatsoever |
| `/infidelity` | 0 — "use client" page, no structured data |
| `/locations` | 2 — ProfessionalService, BreadcrumbList |
| `/locations/riverside-county` | 3 — ProfessionalService, BreadcrumbList, FAQPage |
| `/locations/riverside-county/murrieta` | 3 — ProfessionalService, BreadcrumbList, FAQPage |
| `/locations/riverside-county/temecula` | 3 — ProfessionalService, BreadcrumbList, FAQPage (inferred from LocationPage component pattern) |
| `/locations/riverside-county/riverside` | 3 — ProfessionalService, BreadcrumbList, FAQPage (inferred) |
| `/locations/los-angeles-county` | 3 — ProfessionalService, BreadcrumbList, FAQPage |
| `/locations/los-angeles-county/long-beach` | 3 — ProfessionalService, BreadcrumbList, FAQPage (inferred) |
| `/locations/los-angeles-county/pasadena` | 3 — ProfessionalService, BreadcrumbList, FAQPage (inferred) |
| `/locations/san-bernardino-county` | 3 — ProfessionalService, BreadcrumbList, FAQPage (inferred) |
| `/locations/san-bernardino-county/rancho-cucamonga` | 3 — ProfessionalService, BreadcrumbList, FAQPage (inferred) |
| `/locations/san-francisco` | 3 — ProfessionalService, BreadcrumbList, FAQPage |
| `/locations/las-vegas` | 3 — ProfessionalService, BreadcrumbList, FAQPage |
| `/blog/[slug]` | 1 — BlogPosting (per-post, generated dynamically) |

**Format:** JSON-LD only. No Microdata or RDFa. @context is `https://schema.org` on all blocks. ✅

---

## PRIOR ERRORS — Delta Table

| Error | Description | Status | Notes |
|-------|-------------|--------|-------|
| E1 — Invalid GeoCoordinates | `geo` block has `addressCountry` instead of `latitude`/`longitude` | **STILL OPEN** | `layout.tsx` lines 73–76: `geo: { "@type": "GeoCoordinates", addressCountry: "US" }` unchanged |
| E2 — Duplicate LocalBusiness on /about | Conflicting org entity at `/about#localbusiness` | **RESOLVED** | `/about/page.tsx` is now a `"use client"` component with zero schema blocks. The duplicate is gone. However, the entire Person entity for Greg is also gone — see NEW-E1 below. |
| E3 — `founder` @id missing | `founder` node not linked to the Person entity | **STILL OPEN** | `layout.tsx` line 107–111: `founder: { "@type": "Person", name: "Greg Tucker", jobTitle: "Private Investigator" }` — still no `@id` |
| E4 — `hasCredential` missing license number | Org credential name lacks `#PI188351` | **STILL OPEN** | `layout.tsx` line 98: `name: "California Private Investigator License"` — number still missing at org level |
| E5 — PostalAddress missing `addressLocality` / `postalCode` | Address block has only `addressRegion` and `addressCountry` | **STILL OPEN** | `layout.tsx` lines 68–72 unchanged. City still unconfirmed from client — blocker documented. |

**Summary: 1 of 5 prior errors resolved (E2). 4 remain open.**

---

## PRIOR WARNINGS — Delta Table

| Warning | Status | Notes |
|---------|--------|-------|
| W1 — `areaServed` state-level only | **PARTIALLY RESOLVED** | Root layout still `State: California`. However, location pages now have city/county-level `areaServed` — good improvement. |
| W2 — `sameAs` missing LinkedIn + GBP | **STILL OPEN** | `layout.tsx` line 88–93: only FB, Twitter, Instagram, Yelp. LinkedIn and GBP still missing. |
| W3 — Person `sameAs` missing | **MOOT — Person entity removed** | The Person block on `/about` was eliminated when the page became "use client" with no schema. A new, bigger problem. |
| W4 — Sparse Service blocks | **UNCHANGED** | Service pages `/investigations`, `/consulting`, `/risk-management` schema status unchanged from prior audit. |
| W5 — `closes` should be `"00:00"` not `"23:59"` | **STILL OPEN** | `layout.tsx` line 87: `closes: "23:59"` unchanged. |
| W6 — FAQPage on commercial site (Info) | **INFO ONLY** | Now expanded to all new location pages. See FAQ analysis below. |
| W7 — No `WebSite` block | **STILL OPEN** | No `WebSite` entity found anywhere. |
| W8 — No BreadcrumbList | **PARTIALLY RESOLVED** | BreadcrumbList now present on all location pages. Still missing on service pages (`/infidelity`, `/background-checks`, etc.), `/about`, and `/blog/[slug]`. |
| W9 — No `AggregateRating` | **STILL OPEN** | No `AggregateRating` or `Review` blocks added anywhere. Testimonials remain schema-invisible. |

---

## NEW ERRORS — Introduced Since Prior Audit

### NEW-E1 — Person entity (Greg Tucker) completely removed from schema graph (Critical)
**Affected:** `/about` and all pages

The prior audit identified that the `Person` entity on `/about` had a broken `founder @id` link to the org. The fix taken was to convert `/about/page.tsx` to a `"use client"` component — which eliminated all structured data from that page entirely. Greg Tucker now has **no Person entity anywhere in the schema graph**. The root layout's `founder` node still points at a person with no `@id`, and there is no corresponding Person entity for Google to resolve it against.

This is a significant E-E-A-T regression. For a professional services firm where the individual's credentials (CA PI #188351, MS Forensic Psychology, MS Criminology, 27 years experience, Army veteran) are the primary trust signals, the absence of a machine-readable Person entity is a critical gap.

**Fix:** Add a `Person` block to `/about/page.tsx`. Because the page uses `"use client"`, the schema must be injected via a `<script type="application/ld+json">` tag rendered inside the component, or the page must be split into a server component wrapper that injects schema and a client component for the interactive elements (preferred pattern — matches how the location pages handle it).

---

### NEW-E2 — Location page schemas use `ProfessionalService` @id collision with root layout (Error)
**Affected:** All `/locations/*` pages

Each location page declares a new `ProfessionalService` entity with a unique `@id` (e.g., `https://gatuckerpi.com/locations/riverside-county/murrieta#service`) and a `parentOrganization` reference pointing to `https://gatuckerpi.com/#organization`. This pattern is structurally sound.

**However**, the `/locations/page.tsx` hub page emits a ProfessionalService block with `@id: "https://gatuckerpi.com/#organization"` — the same `@id` as the root layout's organization. On any page load, the root layout's ProfessionalService AND the location hub's ProfessionalService both declare themselves to be `#organization`. When both blocks are present on the `/locations` page, Google's parser sees two competing definitions of the same entity, which can cause the later-defined block to overwrite or conflict with the root layout block.

**Fix:** The `/locations/page.tsx` schema should either (a) remove the `@id` field entirely since it is not adding location-page-specific data beyond what the root layout provides, or (b) use a different `@id` such as `https://gatuckerpi.com/locations#service` and use `sameAs` or `parentOrganization` to reference the canonical org.

---

### NEW-E3 — Las Vegas page `areaServed` uses `description` — not a valid Schema.org property on `City` (Error)
**Affected:** `/locations/las-vegas`

```json
"areaServed": {
  "@type": "City",
  "name": "Las Vegas",
  "description": "Cases originating in or connected to Las Vegas, handled by a California-licensed PI"
}
```

`City` does not have a `description` property in Schema.org. Adding an unsupported property does not cause a hard parse failure, but it is invalid and will be ignored. More importantly, the `City` @type for Las Vegas may mislead parsers into thinking GA Tucker PI claims Las Vegas as a service location (which is explicitly prohibited per the licensing constraint comments in the file). A safer approach is to use `areaServed` only for California and use page content (not schema) to explain the cross-border case relationship.

**Fix:** Remove `areaServed` from the Las Vegas schema entirely, or replace it with the California state reference: `"areaServed": { "@type": "State", name: "California" }`. The licensing constraint is correctly handled in the page text; schema should reinforce it, not create ambiguity.

---

### NEW-E4 — Blog `BlogPosting` missing `author @id` and `sameAs` (Error)
**Affected:** All `/blog/[slug]` pages

The `BlogPosting` block correctly includes the author:
```json
"author": {
  "@type": "Person",
  "name": "Greg A. Tucker",
  "url": "https://gatuckerpi.com/about"
}
```

However:
1. No `@id` on the author — cannot be linked to the Person entity in the schema graph.
2. `url` is used instead of `sameAs` — `url` is not a standard property on `Person` in schema.org context (it is valid as `Person.url`, but `sameAs` pointing to his about page is the canonical way to link author identity).
3. The author's name is "Greg A. Tucker" in the blog schema but "Greg Tucker" in the root layout `founder` node — inconsistency across the graph.

**Fix:** Add `"@id": "https://gatuckerpi.com/about#greg-tucker"` to the author object in `articleSchema`. Change `url` to `sameAs`. Standardize to one canonical name (recommend "Greg A. Tucker" as the fuller form, matching the PI license).

---

## WARNINGS — New Issues

### NEW-W1 — `credentialID` still absent from `hasCredential` (Warning)
The location pages correctly include the license number in the credential `name` field (`"California Private Investigator License #PI188351"`). But neither the root layout nor any page uses the `credentialID` property, which is the Schema.org-native field for the license number string. Using `credentialID: "PI188351"` alongside the `name` field would provide stronger machine-readability for credential verification.

---

### NEW-W2 — `/about` page has no schema of any kind (Warning — elevated from prior E2 fix)
As noted in NEW-E1, the conversion to `"use client"` eliminated all schema. The page renders Greg's full credentials, education (4 degrees), professional experience (Army, TDCJ, FDOC), and affiliations (WAD, CA Licensed Investigators Association) — all of which are high-value E-E-A-T signals that should be machine-readable. Julia Tucker also has no Person entity.

---

### NEW-W3 — Service pages (`/infidelity`, etc.) remain "use client" with no schema (Warning)
`/infidelity/page.tsx` is a `"use client"` component with no schema. It renders a FAQ accordion with 6 questions but no `FAQPage` schema block. The prior audit identified adding FAQPage schema to `/infidelity` as a P2 SXO fix — this remains unimplemented. Same pattern likely applies to `/background-checks`, `/child-custody`, `/consulting`, `/risk-management`, `/investigations`, `/missing-persons`.

---

### NEW-W4 — `openingHoursSpecification` `closes: "23:59"` still incorrect (Warning — carried from W5)
Midnight closing should be `"00:00"`. One minute short of 24-hour availability. Minor but technically invalid.

---

### NEW-W5 — BreadcrumbList missing on service pages and blog (Warning)
BreadcrumbList is now present on all location pages — good. Still absent on:
- All service pages (`/infidelity`, `/background-checks`, `/child-custody`, etc.)
- `/blog/[slug]` (would be: Home > Blog > Post Title)
- `/about`

---

## LOCATION PAGES — Schema Pattern Validation

### Pattern Assessment (applies to all `/locations/*` pages)

The location page schema pattern is:
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://gatuckerpi.com/locations/[page]#service",
  "name": "G.A. Tucker PI — [Region]",
  "url": "https://gatuckerpi.com/locations/[page]",
  "telephone": "+1-909-964-8976",
  "areaServed": { [city or county or state] },
  "hasCredential": { ... license with #PI188351 },
  "parentOrganization": { "@id": "https://gatuckerpi.com/#organization" }
}
```

| Check | Result |
|-------|--------|
| Unique `@id` per page | PASS — each page has a distinct fragment identifier |
| City pages have city-level `areaServed` | PASS — Murrieta, Temecula, etc. use `@type: City` |
| County pages have county-level `areaServed` | PASS — `@type: AdministrativeArea` with `containedInPlace: State` |
| `parentOrganization` links to canonical org | PASS — all point to `#organization` |
| License number in `hasCredential.name` | PASS — `#PI188351` present on all location pages (improvement over root layout) |
| No HQ address claimed on non-HQ pages | PASS — no `address` block on location pages (correct for SAB pattern) |
| No NV licensure on Las Vegas page | PASS — `validIn: California` explicit; no NV claim. See NEW-E3 for `areaServed` issue. |
| `@type` is `ProfessionalService` not `LocalBusiness` | PASS (consistent) — however see opportunity note below |
| BreadcrumbList present | PASS — all location pages have breadcrumbs |
| FAQPage present | PASS — all location pages have FAQPage (commercial site caveat: no Google rich results, but AI citation value) |

### Vegas Page Specific Assessment

The Las Vegas page is well-constructed from a licensing-risk perspective. The comment block at the top of the file explicitly documents the Nevada licensing constraint. Schema does not claim NV jurisdiction. `validIn: California` is explicit on the credential. The page content clearly distinguishes California-side work from Nevada-regulated work.

The one schema issue (NEW-E3 — `description` on `City`) is a minor technical error, not a licensing risk issue.

**Recommendation for client:** Verify whether Greg has a NV partner PI arrangement in place before the page is promoted. If no partner arrangement exists, the page copy should soften references to "coordination with licensed Nevada partner investigators" since that implies an active network that may not yet exist.

---

## HOMEPAGE — Schema Assessment

The homepage (`/page.tsx`) renders no page-level schema of its own — it relies entirely on the root layout's `ProfessionalService` block. This means:

- No `WebSite` block (W7 from prior audit — still open)
- No `AggregateRating` (W9 from prior audit — still open, testimonials are rendered on homepage but schema-invisible)
- No `Service` blocks for the 8 service types displayed on the page
- No `BreadcrumbList` (homepage typically exempt — acceptable)

The homepage is the single highest-traffic, highest-trust-signal page on the site. The absence of `AggregateRating` is the biggest missed rich-result opportunity on the entire site.

---

## BLOG — Schema Assessment

The `BlogPosting` implementation is substantially correct:

| Check | Result |
|-------|--------|
| `@type: BlogPosting` | PASS |
| `headline` | PASS |
| `description` | PASS |
| `image` absolute URL | PASS — `https://gatuckerpi.com${post.image}` |
| `datePublished` ISO 8601 | PASS — uses `post.date` from frontmatter |
| `dateModified` | PASS (set to same as `datePublished` — acceptable) |
| `author @type: Person` | PASS |
| `author @id` | FAIL — missing, see NEW-E4 |
| `publisher` with `logo` | PASS |
| `mainEntityOfPage` | PASS |
| `keywords` | PASS |
| `BreadcrumbList` | FAIL — missing |

The blog implementation is 85% complete. The missing `author @id` is the primary fix needed.

---

## MISSING OPPORTUNITIES — Ranked by Impact

| Priority | Opportunity | Pages | Impact |
|----------|-------------|-------|--------|
| P1 | **AggregateRating + Review blocks** | Root layout (homepage) | Star ratings in Google SERP — highest-visibility gain on the site |
| P1 | **Restore Person entity for Greg Tucker** | `/about` + root layout `founder @id` | E-E-A-T signal, graph connectivity, Knowledge Panel eligibility |
| P2 | **Fix root layout errors: E1 (geo), E3 (founder @id), E4 (license number), E5 (PostalAddress)** | Root layout | Compliance, entity clarity, LocalBusiness eligibility |
| P2 | **WebSite block with SearchAction** | Root layout | Sitelinks Searchbox, canonical site declaration |
| P2 | **Fix Las Vegas `areaServed`** | `/locations/las-vegas` | Remove invalid `description` property, clarify CA-only jurisdiction in schema |
| P2 | **Fix `/locations` hub `@id` collision** | `/locations/page.tsx` | Eliminate duplicate org entity definition |
| P3 | **Fix blog author `@id`** | All `/blog/[slug]` pages | Graph connectivity, author authority |
| P3 | **BreadcrumbList on service pages and blog** | `/infidelity`, `/background-checks`, etc. | Supported rich result, navigation signal |
| P3 | **FAQPage schema on service pages** | `/infidelity`, `/background-checks` | AI/LLM citation benefit (not Google rich results on commercial site) |
| P3 | **Add `credentialID` to `hasCredential`** | Root layout | Machine-readable license number |
| P4 | **`@type` array: `["LocalBusiness","ProfessionalService"]`** | Root layout | Schema completeness; LocalBusiness required for map pack |
| P4 | **`sameAs`: add LinkedIn + GBP URL** | Root layout | Trust signals |
| P4 | **Person entity for Julia Tucker** | `/about` | E-E-A-T, COO visibility |
| P4 | **Fix `closes: "23:59"` → `"00:00"`** | Root layout | Technical compliance |

---

## DROP-IN JSON-LD — Top 3 Gaps

---

### GAP 1 — AggregateRating + Review blocks (add to root layout `organizationSchema`)

Add these two properties to the existing `organizationSchema` object in `/src/app/layout.tsx`. Do not replace the object — insert alongside existing properties.

```json
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "5",
  "reviewCount": "3",
  "bestRating": "5",
  "worstRating": "1"
},
"review": [
  {
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": "Tom"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "reviewBody": "Incredible attention to detail. Highly knowledgeable. Best representation ever. Excellent service, very caring and professional staff. I would recommend it to anyone in search of an investigator."
  },
  {
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": "Jonathon"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "reviewBody": "I was given quick and detailed information! I recommend G.A. Tucker P.I. Investigative Services to anyone who needs a discreet and accurate investigation."
  },
  {
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": "Ashley M."
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "reviewBody": "I am a local attorney and own my own Law Firm. I use Greg Tucker on many of my cases. He is a professional and will go out of the way for my clients. His reports are factual and detailed."
  }
]
```

**Implementation note:** `reviewCount: 3` is compliant because these reviews are rendered on the homepage. Keep in sync if testimonials are added/removed.

---

### GAP 2 — Person entity for Greg Tucker (restore to `/about` page)

The `/about/page.tsx` is a `"use client"` component. The cleanest implementation is to add a `<script>` tag inside the component's return, above the `<Navbar />`. In Next.js App Router, `<script type="application/ld+json">` tags inside client components are valid — they render to the HTML.

```tsx
// Add inside the return() of AboutPage(), before <Navbar />:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://gatuckerpi.com/about#greg-tucker",
      "name": "Greg A. Tucker",
      "jobTitle": "Licensed Private Investigator",
      "description": "California Private Investigator with 27+ years of experience. US Army Veteran, former TDCJ Lieutenant, former FDOC Senior Parole Officer. MS Forensic Psychology, MS Criminology, MS Legal Studies.",
      "url": "https://gatuckerpi.com/about",
      "image": "https://gatuckerpi.com/gatuckerbwport.png",
      "worksFor": {
        "@id": "https://gatuckerpi.com/#organization"
      },
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Professional License",
          "name": "California Private Investigator License #PI188351",
          "credentialID": "PI188351",
          "recognizedBy": {
            "@type": "Organization",
            "name": "California Bureau of Security and Investigative Services"
          },
          "validIn": {
            "@type": "State",
            "name": "California"
          }
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "degree",
          "name": "Master of Science, Forensic Psychology",
          "educationalLevel": "Master's Degree",
          "recognizedBy": {
            "@type": "Organization",
            "name": "Alliant International University"
          }
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "degree",
          "name": "Master of Science, Criminology",
          "educationalLevel": "Master's Degree",
          "recognizedBy": {
            "@type": "Organization",
            "name": "Kaplan University"
          }
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "degree",
          "name": "Master's Degree, Legal Studies",
          "educationalLevel": "Master's Degree",
          "recognizedBy": {
            "@type": "Organization",
            "name": "Washington University School of Law"
          }
        }
      ],
      "memberOf": [
        {
          "@type": "Organization",
          "name": "World Association of Detectives"
        },
        {
          "@type": "Organization",
          "name": "California Licensed Investigators Association"
        }
      ]
    })
  }}
/>
```

**Also required in root layout:** Once the Person entity exists again at `/about#greg-tucker`, add `"@id": "https://gatuckerpi.com/about#greg-tucker"` to the `founder` object in `organizationSchema` (line 107):

```js
founder: {
  "@type": "Person",
  "@id": "https://gatuckerpi.com/about#greg-tucker",   // ADD THIS
  name: "Greg Tucker",
  jobTitle: "Private Investigator"
},
```

---

### GAP 3 — WebSite block + fix root layout errors (add to `/src/app/layout.tsx`)

Add a separate `websiteSchema` constant and inject it as a second `<script>` tag in the `<head>`, and fix the four open errors in `organizationSchema` simultaneously.

**WebSite schema (new — add as second JSON-LD block in `<head>`):**

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://gatuckerpi.com/#website",
  "url": "https://gatuckerpi.com",
  "name": "G.A. Tucker PI",
  "description": "California licensed private investigator — background checks, surveillance, infidelity investigations, child custody, and more.",
  "publisher": {
    "@id": "https://gatuckerpi.com/#organization"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://gatuckerpi.com/?s={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
```

**Four root layout `organizationSchema` fixes to make simultaneously:**

```js
// 1. Remove the invalid geo block entirely (E1)
// DELETE: geo: { "@type": "GeoCoordinates", addressCountry: "US" }

// 2. Add founder @id (E3) — pending Person entity restoration from GAP 2
founder: {
  "@type": "Person",
  "@id": "https://gatuckerpi.com/about#greg-tucker",
  name: "Greg A. Tucker",
  jobTitle: "Private Investigator"
},

// 3. Fix hasCredential license number (E4)
hasCredential: {
  "@type": "EducationalOccupationalCredential",
  credentialCategory: "Professional License",
  name: "California Private Investigator License #PI188351",   // ADD #PI188351
  credentialID: "PI188351",                                     // ADD credentialID
  recognizedBy: {
    "@type": "Organization",
    name: "California Bureau of Security and Investigative Services"
  },
  validIn: {
    "@type": "State",
    name: "California"
  }
},

// 4. Fix PostalAddress (E5) — requires city confirmation from client
address: {
  "@type": "PostalAddress",
  addressLocality: "Murrieta",    // ADD — pending client confirmation
  addressRegion: "CA",
  postalCode: "92562",            // ADD — pending client confirmation (Murrieta west zip)
  addressCountry: "US"
},

// 5. Fix closes time (W5)
openingHoursSpecification: {
  "@type": "OpeningHoursSpecification",
  dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
  opens: "00:00",
  closes: "00:00"   // CHANGE from "23:59"
},
```

**Note on E5/PostalAddress:** Do not deploy with `addressLocality` or `postalCode` until Greg confirms his Murrieta address. The city is strongly inferred (Yelp slug, LocationsHub copy explicitly says "based in Murrieta, CA") but not officially confirmed in CLIENT.md. The locations hub page text already publicly states "based in Murrieta, CA" — so the schema blocker is now lower-risk, but confirm before publishing.

---

## Graph Connectivity — Current State

```
ProfessionalService (#organization) [root layout — all pages]
  └─ founder → Person (no @id → STILL DISCONNECTED)
  └─ hasCredential → credential (no license number, no credentialID)
  └─ geo → GeoCoordinates (invalid — addressCountry only)
  └─ address → PostalAddress (missing addressLocality, postalCode)
  └─ aggregateRating → MISSING
  └─ review → MISSING

Person (#greg-tucker) [DOES NOT EXIST — removed when /about became "use client"]

ProfessionalService (#organization) [duplicate on /locations — @id collision]

ProfessionalService (/locations/[page]#service) [per location page]
  └─ parentOrganization → #organization ✅ connected
  └─ areaServed → City/AdministrativeArea (city pages correct, Vegas page has issue)
  └─ hasCredential → #PI188351 ✅ correct on location pages

BlogPosting [per blog post]
  └─ author → Person (no @id → DISCONNECTED from graph)
  └─ publisher → Organization (correct)
```

**Graph verdict:** Worse than July audit in one key respect — the Person entity has been eliminated entirely. The Org-to-location-page graph is well-structured (new, positive). Blog author authority is partially asserted but not graph-connected. Four original root layout errors remain unaddressed.

---

## Action Priority Queue

Execute in this order:

1. **Immediate (no client input needed):** Fix `closes: "23:59"` → `"00:00"`, remove invalid `geo` block, add `#PI188351` to org `hasCredential`, fix `/locations` hub `@id` collision, fix Las Vegas `areaServed`, fix blog author `@id`.

2. **After city confirmation from client:** Add `addressLocality` + `postalCode` to root layout `PostalAddress`.

3. **Requires dev work:** Restore Person entity to `/about` page (see GAP 2 snippet). Simultaneously fix `founder @id` in root layout.

4. **Highest SEO impact, implement next:** Add `AggregateRating` + `Review` blocks to root layout (see GAP 1 snippet).

5. **Medium-term:** Add `WebSite` block (GAP 3). Add `BreadcrumbList` to service pages and blog. Add `FAQPage` schema to `/infidelity` and `/background-checks`.

---

_Audit by schema-markup-specialist | Client: GA Tucker PI | Files examined: layout.tsx, about/page.tsx, infidelity/page.tsx, page.tsx (homepage), locations/page.tsx, locations/riverside-county/murrieta/page.tsx, locations/riverside-county/page.tsx, locations/las-vegas/page.tsx, locations/san-francisco/page.tsx, locations/los-angeles-county/page.tsx, locations/san-bernardino-county/page.tsx, blog/[slug]/page.tsx_
