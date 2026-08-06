import type { Metadata } from "next";
import { LocationPage } from "../../components/LocationPage";
import type { LocationPageProps } from "../../components/LocationPage";

// ---------------------------------------------------------------------------
// Metadata — wired from content-drafts/locations/san-bernardino-county.md
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: "San Bernardino County Private Investigator | GA Tucker PI",
  description:
    "Licensed PI serving San Bernardino County from Murrieta, CA. Background checks, surveillance, litigation support across the Inland Empire. CA PI #188351.",
  alternates: {
    canonical: "https://gatuckerpi.com/locations/san-bernardino-county",
  },
  openGraph: {
    title: "San Bernardino County Private Investigator | GA Tucker PI",
    description:
      "Licensed CA PI serving San Bernardino County. Surveillance, background checks, infidelity investigations.",
    url: "https://gatuckerpi.com/locations/san-bernardino-county",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "San Bernardino County Private Investigator | GA Tucker PI",
    description: "Licensed CA PI Greg Tucker serves San Bernardino County. Call 909-964-8976.",
  },
};

// ---------------------------------------------------------------------------
// Schema
// ---------------------------------------------------------------------------

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://gatuckerpi.com/locations/san-bernardino-county#service",
  name: "G.A. Tucker PI — San Bernardino County",
  url: "https://gatuckerpi.com/locations/san-bernardino-county",
  telephone: "+1-909-964-8976",
  areaServed: {
    "@type": "AdministrativeArea",
    name: "San Bernardino County",
    containedInPlace: { "@type": "State", name: "California" },
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "Professional License",
    name: "California Private Investigator License #PI188351",
  },
  parentOrganization: { "@id": "https://gatuckerpi.com/#organization" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://gatuckerpi.com/" },
    { "@type": "ListItem", position: 2, name: "Locations", item: "https://gatuckerpi.com/locations" },
    { "@type": "ListItem", position: 3, name: "San Bernardino County", item: "https://gatuckerpi.com/locations/san-bernardino-county" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the main courthouse locations in San Bernardino County?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "San Bernardino County Superior Court operates multiple branches. The primary branches for western Inland Empire cases are the Rancho Cucamonga Courthouse (serving Rancho Cucamonga, Upland, Ontario, Fontana, and Rialto), the San Bernardino Justice Center and Historic Courthouse (county seat, complex and high-value cases), and the Ontario Courthouse (civil limited and criminal matters).",
      },
    },
    {
      "@type": "Question",
      name: "Does GA Tucker PI handle corporate investigations in San Bernardino County?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The county's logistics, warehousing, construction, and healthcare sectors generate significant corporate investigation demand. GA Tucker PI provides pre-hire screening, business partner profiling, due diligence investigation, and risk assessments for San Bernardino County businesses.",
      },
    },
    {
      "@type": "Question",
      name: "Can GA Tucker PI work cases in both Riverside and San Bernardino counties simultaneously?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Cases that cross the Riverside/San Bernardino county line — surveillance following a subject between Murrieta and Ontario, for example — are handled as a single engagement.",
      },
    },
    {
      "@type": "Question",
      name: "How is a licensed PI background check different from an online service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Licensed investigators access proprietary databases that consumer websites do not have. GA Tucker PI produces sourced, organized reports with findings across criminal records, civil court filings, address history, and known associates — and can interpret and follow up on what is found.",
      },
    },
    {
      "@type": "Question",
      name: "Is CA PI License #188351 valid throughout San Bernardino County?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A California PI license is valid statewide, with no county restrictions.",
      },
    },
    {
      "@type": "Question",
      name: "What types of cases are most common in San Bernardino County?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Based on GA Tucker PI's case experience, the most common request types from San Bernardino County clients are background checks (employment and personal), child custody documentation, skip traces on judgment debtors, and infidelity surveillance. Litigation support for civil attorneys has also grown with the county's population and business activity.",
      },
    },
  ],
};

// ---------------------------------------------------------------------------
// Page data
// ---------------------------------------------------------------------------

const pageProps: LocationPageProps = {
  h1: "San Bernardino County Private Investigator — GA Tucker PI",
  region: "San Bernardino County",
  isCity: false,
  services: [
    { title: "Background Checks", description: "Individual and corporate checks across San Bernardino County.", href: "/background-checks" },
    { title: "Infidelity Investigations", description: "Discreet surveillance throughout the Inland Empire.", href: "/infidelity" },
    { title: "Child Custody", description: "Court-ready evidence for San Bernardino County family court.", href: "/child-custody" },
    { title: "Missing Persons", description: "Locate individuals throughout San Bernardino County.", href: "/missing-persons" },
    { title: "Litigation Support", description: "Pre-trial investigative support for Inland Empire attorneys.", href: "/investigations" },
    { title: "Corporate & Risk Management", description: "Due diligence and risk assessments for Inland Empire businesses.", href: "/risk-management" },
  ],
  courthouses: [],
  faqs: [
    {
      question: "What are the main courthouse locations in San Bernardino County?",
      answer:
        "San Bernardino County Superior Court operates multiple branches. The primary branches for western Inland Empire cases are the Rancho Cucamonga Courthouse (serving Rancho Cucamonga, Upland, Ontario, Fontana, and Rialto), the San Bernardino Justice Center and Historic Courthouse (county seat, complex and high-value cases), and the Ontario Courthouse (civil limited and criminal matters).",
    },
    {
      question: "Does GA Tucker PI handle corporate investigations in San Bernardino County?",
      answer:
        "Yes. The county's logistics, warehousing, construction, and healthcare sectors generate significant corporate investigation demand. GA Tucker PI provides pre-hire screening, business partner profiling, due diligence investigation, and risk assessments for San Bernardino County businesses.",
    },
    {
      question: "Can GA Tucker PI work cases in both Riverside and San Bernardino counties simultaneously?",
      answer:
        "Yes. Cases that cross the Riverside/San Bernardino county line — surveillance following a subject between Murrieta and Ontario, for example — are handled as a single engagement.",
    },
    {
      question: "How is a licensed PI background check different from an online service?",
      answer:
        "Licensed investigators access proprietary databases that consumer websites do not have. GA Tucker PI produces sourced, organized reports with findings across criminal records, civil court filings, address history, and known associates — and can interpret and follow up on what is found.",
    },
    {
      question: "Is CA PI License #188351 valid throughout San Bernardino County?",
      answer:
        "Yes. A California PI license is valid statewide, with no county restrictions.",
    },
    {
      question: "What types of cases are most common in San Bernardino County?",
      answer:
        "Based on GA Tucker PI's case experience, the most common request types from San Bernardino County clients are background checks (employment and personal), child custody documentation, skip traces on judgment debtors, and infidelity surveillance. Litigation support for civil attorneys has also grown with the county's population and business activity.",
    },
  ],
  bodyContent: [
    {
      heading: "San Bernardino County Private Investigator — GA Tucker PI",
      paragraphs: [
        "San Bernardino County is the largest county in the contiguous United States by land area — covering over 20,000 square miles from the Inland Empire's dense western corridor to the Mojave Desert. GA Tucker PI is a California-licensed private investigator (CA PI #188351) based in Murrieta, Riverside County, and serves clients with cases rooted in San Bernardino County's populated western cities including Rancho Cucamonga, Ontario, Fontana, Rialto, Colton, and San Bernardino.",
        "The I-15 corridor connects GA Tucker PI's Murrieta base directly to the western Inland Empire, making San Bernardino County an efficient extension of the firm's core service geography.",
      ],
    },
    {
      heading: "San Bernardino County's Investigative Environment",
      paragraphs: [
        "The western Inland Empire sits at the intersection of several of Southern California's largest freight, commuter, and residential growth corridors. San Bernardino County's western cities — Rancho Cucamonga, Ontario, Fontana, Rialto, San Bernardino city — are among the fastest-growing in California. Rapid population growth brings a proportionate increase in family law cases, civil disputes, employment matters, and corporate transactions that benefit from independent investigative support.",
        "The county's court system is organized into multiple branches covering distinct geographic regions. GA Tucker PI works primarily with the western branch courts — Rancho Cucamonga, San Bernardino, and Ontario — and can coordinate coverage in the Victor Valley (Victorville courthouse) and the high desert communities when cases require it.",
        "San Bernardino County also has a significant logistics and warehousing industry presence, concentrated around the Ontario International Airport and the I-10/I-15 interchange. Corporate investigations, employment dispute matters, and insurance fraud cases in this sector represent a meaningful portion of GA Tucker PI's county workload.",
      ],
    },
    {
      heading: "San Bernardino County Courts GA Tucker PI Works With",
      paragraphs: [
        "Rancho Cucamonga Courthouse (Rancho Cucamonga): The Rancho Cucamonga Branch of San Bernardino County Superior Court serves the western Inland Empire including Rancho Cucamonga, Upland, Ontario, Fontana, and Rialto. Handles civil, family, and criminal matters.",
        "San Bernardino Justice Center and Historic Courthouse (San Bernardino): The county seat. The main complex handles unlimited civil jurisdiction, felony criminal matters, and administrative proceedings for the broader county.",
        "Ontario Courthouse (Ontario): Handles civil limited jurisdiction and criminal matters for the Ontario area. Useful for cases involving logistics-industry defendants or Ontario-area residents.",
        "Victorville Courthouse (Victorville): Serves the Victor Valley high desert communities — Victorville, Hesperia, Apple Valley, Adelanto. GA Tucker PI can cover cases in this area with coordination.",
      ],
    },
    {
      heading: "Services GA Tucker PI Provides in San Bernardino County",
      paragraphs: [
        "Background Checks: San Bernardino County's rapid population growth means that many residents have histories in other states or other California counties. GA Tucker PI's investigative database access consolidates records from multiple jurisdictions into a single report. Turnaround is typically 1–2 business days.",
        "Infidelity Investigations: The western Inland Empire's suburban layout — long residential streets, clear neighborhood boundaries, predictable commute routes — creates surveillance conditions that differ from dense urban environments. GA Tucker PI plans infidelity investigations to match the subject's actual movement geography.",
        "Child Custody Investigations: San Bernardino County family courts require credible evidence to support custody modification or enforcement requests. GA Tucker PI documents parenting conduct, schedule violations, and environmental concerns, organizing findings for presentation at the Rancho Cucamonga or San Bernardino courthouse.",
        "Missing Persons and Skip Traces: San Bernardino County's transient population — particularly in the high desert communities and along the I-15 corridor — produces a steady volume of skip trace and missing-persons work.",
        "General Investigations and Litigation Support: Civil and family law attorneys practicing in San Bernardino County Superior Court engage GA Tucker PI for pre-trial research, witness locates, surveillance documentation, and report preparation.",
        "Corporate and Risk Management Investigations: San Bernardino County's logistics, warehousing, construction, and healthcare sectors all produce due-diligence and risk-management investigation needs. GA Tucker PI provides pre-transaction profiling, executive background research, and operational risk assessments.",
      ],
    },
    {
      heading: "What Is the Drive Time from Murrieta to Rancho Cucamonga?",
      paragraphs: [
        "Murrieta to Rancho Cucamonga is approximately 45–55 miles north on I-15, typically 45–65 minutes depending on traffic. The I-15 corridor is a direct route, making the western Inland Empire cities of San Bernardino County among the most accessible from GA Tucker PI's headquarters.",
      ],
    },
  ],
  schema,
  lastUpdated: "August 2026",
};

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function SanBernardinoCountyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <LocationPage {...pageProps} />
    </>
  );
}
