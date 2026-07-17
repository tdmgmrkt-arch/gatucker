# Schema.org / JSON-LD Audit — gatuckerpi.com
_Audited: 2026-07-02_

---

## Pages Audited

| Page | Blocks Found |
|------|-------------|
| `/` (homepage) | 1 — ProfessionalService |
| `/about` | 3 — ProfessionalService, Person, LocalBusiness |
| `/services` | 2 — ProfessionalService, ItemList |
| `/background-checks` | 2 — ProfessionalService, Service |
| `/investigations` | 2 — ProfessionalService, Service |
| `/consulting` | 2 — ProfessionalService, Service |
| `/risk-management` | 2 — ProfessionalService, Service |
| `/infidelity` | 2 — ProfessionalService, Service |
| `/faqs` | 2 — ProfessionalService, FAQPage |
| `/contact` | 2 — ProfessionalService, ContactPage |

**Format:** JSON-LD only. No Microdata or RDFa detected. @context is `https://schema.org` on all blocks. ✅

---

## ERRORS (Fix Required)

### E1 — GeoCoordinates block is invalid on all pages (Critical)
**Affected:** root layout, all pages  
**Location:** `ProfessionalService.geo`

```json
"geo": {
  "@type": "GeoCoordinates",
  "addressCountry": "US"
}
```

`GeoCoordinates` requires `latitude` and `longitude` (or at minimum `latitude`/`longitude`). `addressCountry` is not a valid property of `GeoCoordinates` — it belongs to `PostalAddress`. As a SAB without a public street address, the correct fix is to **remove the `geo` block entirely** (Google does not require it for SABs), or populate it with real lat/lng coordinates. The current block will be ignored and may trigger a Google Search Console warning.

**Fix:** Remove `geo` from the root layout's `organizationSchema`. If Greg is willing to share a service-area centroid coordinate, add real lat/lng.

---

### E2 — Duplicate `@id` collision on `/about` (Critical)
**Affected:** `/about`

Three blocks render on `/about`:
1. `ProfessionalService` with `@id: "https://gatuckerpi.com/#organization"` (from root layout)
2. `Person` with `@id: "https://gatuckerpi.com/about#greg-tucker"`
3. `LocalBusiness` with `@id: "https://gatuckerpi.com/about#localbusiness"`

Blocks 1 and 3 both describe the same entity (the business) but use different `@id` values and different `@type` values (`ProfessionalService` vs `LocalBusiness`). This creates two competing business entities in the graph. Google's structured data parser will see them as two separate organizations.

**Fix:** Remove the standalone `LocalBusiness` block from `/about/layout.tsx`. The root-layout `ProfessionalService` already covers the business entity. If you want the about page to reference the business, have the `Person` block's `worksFor` reference `@id: "https://gatuckerpi.com/#organization"` (it already does this correctly).

---

### E3 — `founder` on ProfessionalService lacks `@id` (Error)
**Affected:** root layout, all pages

```json
"founder": {
  "@type": "Person",
  "name": "Greg Tucker",
  "jobTitle": "Private Investigator"
}
```

The `founder` node has no `@id`, so it cannot be linked to the fully-specified `Person` entity on `/about`. The `Person` on `/about` has `@id: "https://gatuckerpi.com/about#greg-tucker"` and `worksFor` pointing back to the org — but the org's `founder` doesn't point to the same Person node. The graph is disconnected.

**Fix:** Add `"@id": "https://gatuckerpi.com/about#greg-tucker"` to the `founder` object in root layout.

---

### E4 — `hasCredential` on ProfessionalService omits license number (Error)
**Affected:** root layout (all pages inherit this)

The org-level `hasCredential` names the license as `"California Private Investigator License"` without the number. The `/about` Person block correctly includes `"California Private Investigator License #PI188351"`. Inconsistency between the two entities means parsers get conflicting data.

**Fix:** Update root layout `hasCredential.name` to `"California Private Investigator License #PI188351"`.

---

### E5 — `PostalAddress` is missing `streetAddress` and `postalCode` (Error — SAB caveat applies)
**Affected:** all pages

```json
"address": {
  "@type": "PostalAddress",
  "addressRegion": "CA",
  "addressCountry": "US"
}
```

Google expects at minimum `streetAddress` + `postalCode` + `addressLocality` for LocalBusiness-type entities to be eligible for rich results. For a SAB that hides its address, the recommended approach is to either: (a) omit `address` entirely and rely on `areaServed`, or (b) add `addressLocality` at minimum (e.g., the city Greg operates from).

**Fix:** Add `"addressLocality": "[City, e.g. Temecula]"` once confirmed, or remove the `address` block and rely solely on `areaServed`.

---

## WARNINGS (Recommended Fixes)

### W1 — `areaServed` is state-level only (all pages)
`"areaServed": { "@type": "State", "name": "California" }` is valid but weak for local SEO. Google's Local Knowledge Panel and map pack prioritize entities with city-level `areaServed`. For a PI serving Southern California, an array of city names substantially improves local relevance signals.

**Recommended fix (service pages):** Replace state-level `areaServed` on individual Service blocks with an array of target cities.

---

### W2 — `sameAs` missing LinkedIn and GBP (all pages)
Current `sameAs`: Facebook, Twitter/X, Instagram, Yelp.  
Missing: LinkedIn (high-trust signal for a professional service), Google Business Profile URL, BBB listing (if exists).

**Recommended addition to root layout:**
```json
"sameAs": [
  "https://www.facebook.com/gatuckerpi",
  "https://twitter.com/gatuckerpi",
  "https://www.instagram.com/gatuckerpi",
  "https://www.yelp.com/biz/ga-tucker-pi",
  "https://www.linkedin.com/in/[greg-tucker-slug]",
  "https://www.google.com/maps?cid=[GBP-CID]"
]
```

---

### W3 — `Person` entity missing `sameAs` (LinkedIn) on `/about`
The `Person` block for Greg has no `sameAs`. Adding his LinkedIn profile URL makes the Person node authoritative and eligible for Knowledge Panel association.

---

### W4 — Service blocks on `/investigations`, `/consulting`, `/risk-management` are sparse
These three Service blocks have only `name`, `description`, `url`, `provider`, `areaServed`, and `serviceType`. They lack `offers`, `hasOfferCatalog`, and `serviceOutput`. Compare to `/background-checks` and `/infidelity` which have richer `hasOfferCatalog` nesting. Inconsistency across service pages weakens overall entity coherence.

---

### W5 — `openingHoursSpecification.closes` is `"23:59"` not `"00:00"`
Schema.org specifies midnight closing as `"00:00"` (of the next day), not `"23:59"`. `"23:59"` is one minute short of 24-hour availability. While unlikely to cause a rich result failure, it is technically incorrect.

---

### W6 — `FAQPage` on `/faqs` — commercial site restriction (Info)
FAQPage rich results are restricted to government and healthcare sites since August 2023. This site is a commercial private investigator — Google will not render FAQ rich results. **However**, the FAQPage markup is still beneficial for AI/LLM citations (Perplexity, ChatGPT, Google AI Overviews). No action required to remove it; just do not invest further in expanding FAQ schema for Google rich result purposes.

---

### W7 — No `WebSite` block with `SearchAction` (sitelinks search box)
No `WebSite` entity exists anywhere on the site. Adding one to the root layout enables the Sitelinks Searchbox potential and properly declares the site's canonical URL to parsers.

---

### W8 — No `BreadcrumbList` on any page
No breadcrumb schema exists on any interior page. BreadcrumbList is a supported Google rich result type with no restrictions and is straightforward to implement in the existing layout pattern.

---

### W9 — No `AggregateRating` despite having testimonials
Three 5-star testimonials exist in `testimonials-section.tsx` (Tom, Jonathon, Ashley M.). These are hardcoded client-side components with no corresponding `Review` or `AggregateRating` schema. Google can render star ratings in search results for LocalBusiness-type entities when `AggregateRating` is present.

---

## Graph Connectivity Assessment

```
ProfessionalService (#organization)
  └─ founder → Person (no @id → DISCONNECTED)
  └─ hasCredential → EducationalOccupationalCredential (no license number)

Person (#greg-tucker) [/about only]
  └─ worksFor → ProfessionalService (#organization) ✅ connected
  └─ hasCredential → [license #PI188351, MS Forensic Psych, MS Criminology] ✅

LocalBusiness (#localbusiness) [/about only]
  └─ DUPLICATE ENTITY — conflicts with #organization ❌

Service blocks [per service page]
  └─ provider → ProfessionalService (#organization) ✅ connected
```

**Graph verdict:** Partial. The Person-to-Org link works one way (Person → Org via `worksFor`) but the Org → Person link (`founder`) is broken due to missing `@id`. The duplicate LocalBusiness entity on `/about` is the most structurally harmful issue.

---

## Missing Opportunities

| Opportunity | Priority | Pages | Notes |
|-------------|----------|-------|-------|
| Fix `founder` @id linkage | High | Root layout | Connects the graph |
| Remove duplicate LocalBusiness on /about | High | /about | Eliminates entity conflict |
| Fix invalid GeoCoordinates block | High | Root layout | Remove or add real lat/lng |
| AggregateRating (3 reviews, all 5-star) | High | Homepage + /about | Rich result eligible |
| City-level areaServed on service pages | Medium | All service pages | Local map pack relevance |
| sameAs: LinkedIn + GBP | Medium | Root layout | Trust signals |
| BreadcrumbList | Medium | All interior pages | Supported rich result |
| WebSite block | Low | Root layout | Sitelinks, canonical declaration |
| Enrich sparse Service blocks | Low | /investigations, /consulting, /risk-management | Parity with other service pages |

---

## Highest-Priority Addition: AggregateRating

The site already has three real 5-star testimonials in the codebase. Adding `AggregateRating` to the `ProfessionalService` block in the root layout will make the business eligible for star ratings in Google search results — the single highest-visibility gain available on this site right now.

Add this to the `organizationSchema` object in `/src/app/layout.tsx`:

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://gatuckerpi.com/#organization",
  "name": "G.A. Tucker PI",
  "alternateName": "G.A. Tucker Private Investigations",
  "url": "https://gatuckerpi.com",
  "logo": "https://gatuckerpi.com/logo.png",
  "image": "https://gatuckerpi.com/og-image.png",
  "description": "California's leading private investigator with over 27 years of experience. Confidential investigations, background checks, surveillance, and more.",
  "telephone": "+1-909-964-8976",
  "email": "info@gatuckerpi.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Temecula",
    "addressRegion": "CA",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "State",
    "name": "California"
  },
  "priceRange": "$$",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "00:00",
    "closes": "00:00"
  },
  "sameAs": [
    "https://www.facebook.com/gatuckerpi",
    "https://twitter.com/gatuckerpi",
    "https://www.instagram.com/gatuckerpi",
    "https://www.yelp.com/biz/ga-tucker-pi"
  ],
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "Professional License",
    "name": "California Private Investigator License #PI188351",
    "recognizedBy": {
      "@type": "Organization",
      "name": "State of California"
    },
    "validIn": {
      "@type": "State",
      "name": "California"
    }
  },
  "founder": {
    "@type": "Person",
    "@id": "https://gatuckerpi.com/about#greg-tucker",
    "name": "Greg Tucker",
    "jobTitle": "Private Investigator"
  },
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
  ],
  "knowsAbout": [
    "Private Investigation",
    "Background Checks",
    "Surveillance",
    "Infidelity Investigations",
    "Missing Persons",
    "Child Custody Investigations",
    "Risk Management",
    "Criminal Profiling",
    "Trial Consulting"
  ]
}
```

**Note on `addressLocality`:** Replace `"Temecula"` with the confirmed city once Greg's location is confirmed (it is currently TBD in CLIENT.md). The phone number prefix 909 is Inland Empire, consistent with Temecula/Riverside area, but do not publish the city in schema until confirmed.

**Note on `reviewCount`:** Google's guidelines require that `reviewCount` reflects the actual number of reviews on the page (not third-party reviews). These 3 testimonials are rendered on the homepage, so `reviewCount: 3` is compliant. If reviews are added to or removed from the page, this number must be kept in sync.
