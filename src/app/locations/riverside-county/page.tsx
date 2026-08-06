import type { Metadata } from "next";
import { LocationPage } from "../../components/LocationPage";
import type { LocationPageProps } from "../../components/LocationPage";

// ---------------------------------------------------------------------------
// Metadata — wired from content-drafts/locations/riverside-county.md
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: "Riverside County Private Investigator | GA Tucker PI",
  description:
    "GA Tucker PI is a licensed Riverside County private investigator based in Murrieta, CA. Background checks, surveillance, child custody, infidelity, and more. CA #188351.",
  alternates: {
    canonical: "https://gatuckerpi.com/locations/riverside-county",
  },
  openGraph: {
    title: "Riverside County Private Investigator | GA Tucker PI",
    description:
      "Licensed California PI serving all of Riverside County. Background checks, surveillance, infidelity, and more.",
    url: "https://gatuckerpi.com/locations/riverside-county",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Riverside County Private Investigator | GA Tucker PI",
    description:
      "Licensed CA PI Greg Tucker serves all of Riverside County. Call 909-964-8976.",
  },
};

// ---------------------------------------------------------------------------
// Schema
// ---------------------------------------------------------------------------

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://gatuckerpi.com/locations/riverside-county#service",
  name: "G.A. Tucker PI — Riverside County",
  url: "https://gatuckerpi.com/locations/riverside-county",
  telephone: "+1-909-964-8976",
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Riverside County",
    containedInPlace: {
      "@type": "State",
      name: "California",
    },
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "Professional License",
    name: "California Private Investigator License #PI188351",
  },
  parentOrganization: {
    "@id": "https://gatuckerpi.com/#organization",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://gatuckerpi.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Locations",
      item: "https://gatuckerpi.com/locations",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Riverside County",
      item: "https://gatuckerpi.com/locations/riverside-county",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the jurisdiction of the Southwest Justice Center in French Valley?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Southwest Justice Center serves the southwest region of Riverside County, including Murrieta, Temecula, Menifee, Wildomar, Lake Elsinore, Canyon Lake, and surrounding communities. It handles family law, civil limited and unlimited jurisdiction, small claims, and criminal matters for that region.",
      },
    },
    {
      "@type": "Question",
      name: "Can a private investigator obtain courthouse records in Riverside County?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most civil court filings in Riverside County Superior Court are accessible to the public and licensed investigators. GA Tucker PI can retrieve filed documents, verify case status, and identify related filings — including those across multiple Riverside County branches — as part of a background or litigation-support assignment.",
      },
    },
    {
      "@type": "Question",
      name: "Does GA Tucker PI work with family law attorneys in Riverside County?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. GA Tucker PI provides litigation support to family law attorneys practicing at the Southwest Justice Center and the Riverside courthouse. Services include subject surveillance, parenting behavior documentation, witness locates, and court-ready evidence packaging.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a surveillance case typically take in Riverside County?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Timeline depends on what the case requires. Establishing a movement pattern typically takes 3–5 observation periods. Greg will give an honest assessment during the initial consultation rather than committing to a timeline that doesn't reflect the specific circumstances.",
      },
    },
    {
      "@type": "Question",
      name: "Is GA Tucker PI licensed to work throughout Riverside County?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Greg Tucker holds California PI License #188351, which is valid statewide. There is no county restriction on a California PI license.",
      },
    },
    {
      "@type": "Question",
      name: "Can GA Tucker PI work cases that cross into San Diego or Orange counties?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Cases that cross county lines — surveillance that follows a subject from Temecula into San Diego County, for example — are handled as a single engagement. Greg coordinates coverage across county boundaries without requiring separate arrangements.",
      },
    },
  ],
};

// ---------------------------------------------------------------------------
// Page data
// ---------------------------------------------------------------------------

const pageProps: LocationPageProps = {
  h1: "Riverside County Private Investigator — GA Tucker PI",
  region: "Riverside County",
  isCity: false,
  services: [
    {
      title: "Background Checks",
      description: "Comprehensive checks for individuals and businesses in Riverside County.",
      href: "/background-checks",
    },
    {
      title: "Infidelity Investigations",
      description: "Discreet surveillance and documentation across Southwest Riverside County.",
      href: "/infidelity",
    },
    {
      title: "Child Custody",
      description: "Objective evidence for Riverside County family court.",
      href: "/child-custody",
    },
    {
      title: "Missing Persons",
      description: "Locate individuals throughout Riverside County and beyond.",
      href: "/missing-persons",
    },
    {
      title: "General Investigations",
      description: "Litigation support and witness locates for Riverside County attorneys.",
      href: "/investigations",
    },
    {
      title: "Profiling & Risk Management",
      description: "Due diligence and threat assessments for corporate clients.",
      href: "/risk-management",
    },
  ],
  courthouses: [],
  faqs: [
    {
      question: "What is the jurisdiction of the Southwest Justice Center in French Valley?",
      answer:
        "The Southwest Justice Center serves the southwest region of Riverside County, including Murrieta, Temecula, Menifee, Wildomar, Lake Elsinore, Canyon Lake, and surrounding communities. It handles family law, civil limited and unlimited jurisdiction, small claims, and criminal matters for that region.",
    },
    {
      question: "Can a private investigator obtain courthouse records in Riverside County?",
      answer:
        "Most civil court filings in Riverside County Superior Court are accessible to the public and licensed investigators. GA Tucker PI can retrieve filed documents, verify case status, and identify related filings — including those across multiple Riverside County branches — as part of a background or litigation-support assignment.",
    },
    {
      question: "Does GA Tucker PI work with family law attorneys in Riverside County?",
      answer:
        "Yes. GA Tucker PI provides litigation support to family law attorneys practicing at the Southwest Justice Center and the Riverside courthouse. Services include subject surveillance, parenting behavior documentation, witness locates, and court-ready evidence packaging.",
    },
    {
      question: "How long does a surveillance case typically take in Riverside County?",
      answer:
        "Timeline depends on what the case requires. Establishing a movement pattern typically takes 3–5 observation periods. Greg will give an honest assessment during the initial consultation rather than committing to a timeline that doesn't reflect the specific circumstances.",
    },
    {
      question: "Is GA Tucker PI licensed to work throughout Riverside County?",
      answer:
        "Yes. Greg Tucker holds California PI License #188351, which is valid statewide. There is no county restriction on a California PI license.",
    },
    {
      question: "Can GA Tucker PI work cases that cross into San Diego or Orange counties?",
      answer:
        "Yes. Cases that cross county lines — surveillance that follows a subject from Temecula into San Diego County, for example — are handled as a single engagement. Greg coordinates coverage across county boundaries without requiring separate arrangements.",
    },
  ],
  bodyContent: [
    {
      heading: "Why Riverside County Cases Require Local Knowledge",
      paragraphs: [
        "Riverside County is California's fourth-largest county by population and the largest by land area in the contiguous United States. A PI without local familiarity will spend investigative hours — and your budget — just navigating geography and courthouse logistics.",
        "GA Tucker PI's Murrieta headquarters puts Greg within 10 minutes of the Southwest Justice Center in French Valley. He knows which branch handles which case types, how records requests work across the county's court divisions, and the travel times between communities that matter for surveillance planning.",
        "The county's geographic diversity also shapes case work. Southwest Riverside County — Murrieta, Temecula, Wildomar, Menifee, Lake Elsinore, Canyon Lake — is dense residential territory with heavy family law and infidelity case volume. The city of Riverside and surrounding communities generate more corporate, litigation-support, and missing-persons matters. The Coachella Valley brings a distinct mix of seasonal residents, second-home disputes, and estates work.",
      ],
    },
    {
      heading: "Riverside County Courts GA Tucker PI Works With",
      paragraphs: [
        "Southwest Justice Center (French Valley): Handles the bulk of family law, civil, and criminal matters for southwest Riverside County. Most GA Tucker PI clients in Murrieta, Temecula, Menifee, and Lake Elsinore will have matters in front of this court.",
        "Riverside Historic Courthouse and Hall of Justice (City of Riverside): The county seat. Handles complex civil litigation, felony criminal matters, and appellate proceedings. Attorneys working cases at the Hall of Justice often engage GA Tucker PI for surveillance, subject locates, and background research on witnesses or defendants.",
        "Indio Courthouse (Indio): Serves the Coachella Valley. Relevant for cases involving Palm Springs, Indio, Rancho Mirage, Palm Desert, and the eastern desert communities.",
        "Banning Courthouse (Banning): Covers the pass area communities including Beaumont, Banning, and Hemet-area overflow.",
      ],
    },
    {
      heading: "Services GA Tucker PI Provides in Riverside County",
      paragraphs: [
        "Background Checks: GA Tucker PI accesses licensed investigative databases unavailable to the public to build comprehensive subject profiles — criminal records, address history, employment history, property ownership, court filings, and known associates. Turnaround is typically 1–2 business days.",
        "Infidelity Investigations: Southwest Riverside County's residential density creates predictable movement patterns that make surveillance work tractable. GA Tucker PI conducts discreet surveillance, documents subject movements and interactions, and delivers court-ready photo and video evidence.",
        "Child Custody Investigations: Riverside County Superior Court family law judges require evidence, not allegations. GA Tucker PI documents parenting fitness, schedule violations, exposure to unsafe environments, and third-party influence. Evidence gathered is prepared for direct use in family court proceedings.",
        "Missing Persons: Riverside County's geography — sprawling residential areas, desert communities, and access corridors to Los Angeles and San Diego — means missing persons cases can go in multiple directions quickly. GA Tucker PI conducts targeted locates using investigative databases, social media analysis, and ground-level inquiry.",
        "General Investigations and Litigation Support: California attorneys with Riverside County cases engage GA Tucker PI for witness locates, process service assistance, document gathering, and case background research. Greg provides organized, attorney-ready reports that support deposition preparation and trial strategy.",
        "Profiling and Risk Management: For corporate clients, employers, or high-net-worth individuals with Riverside County exposure, GA Tucker PI builds comprehensive subject profiles and threat assessments. Due diligence investigations prior to business transactions or hiring decisions have prevented significant losses for clients who engaged before signing.",
      ],
    },
    {
      heading: "What Does a Riverside County Private Investigator Cost?",
      paragraphs: [
        "Case costs vary based on the service type, geographic complexity, and hours required. Background checks — which do not require physical surveillance — are among the most cost-effective services, typically completed in 1–2 business days. Surveillance cases are priced based on hours and travel, and GA Tucker PI will discuss estimated scope during an initial consultation before any work begins.",
        "GA Tucker PI does not publish flat-rate pricing because cases are not flat. What Greg commits to: transparent estimates before engagement, no surprise billing, and organized invoicing that reflects actual hours and deliverables.",
      ],
    },
    {
      heading: "How Does GA Tucker PI Handle Sensitive Cases in Riverside County?",
      paragraphs: [
        "Confidentiality is fundamental to the practice. GA Tucker PI does not share case details with third parties, does not discuss client identities, and does not use identifying case information in marketing. Evidence reports are delivered directly to the client or their attorney. All case files are maintained with strict confidentiality throughout and after the engagement.",
      ],
    },
  ],
  schema,
  lastUpdated: "August 2026",
};

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function RiversideCountyPage() {
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
