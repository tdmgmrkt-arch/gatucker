import type { Metadata } from "next";
import { LocationPage } from "../../../components/LocationPage";
import type { LocationPageProps } from "../../../components/LocationPage";

// ---------------------------------------------------------------------------
// Metadata — wired from content-drafts/locations/riverside-county-murrieta.md
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: "Murrieta Private Investigator | GA Tucker PI | CA #188351",
  description:
    "Greg Tucker is a licensed private investigator based in Murrieta, CA. Background checks, infidelity, child custody, and more. CA PI #188351. Call 909-964-8976.",
  alternates: {
    canonical: "https://gatuckerpi.com/locations/riverside-county/murrieta",
  },
  openGraph: {
    title: "Murrieta Private Investigator | GA Tucker PI | CA #188351",
    description:
      "Licensed CA PI based in Murrieta. Background checks, surveillance, infidelity investigations. Call 909-964-8976.",
    url: "https://gatuckerpi.com/locations/riverside-county/murrieta",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Murrieta Private Investigator | GA Tucker PI | CA #188351",
    description: "Licensed CA PI Greg Tucker is based in Murrieta. Call 909-964-8976.",
  },
};

// ---------------------------------------------------------------------------
// Schema
// ---------------------------------------------------------------------------

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://gatuckerpi.com/locations/riverside-county/murrieta#service",
  name: "G.A. Tucker PI — Murrieta",
  url: "https://gatuckerpi.com/locations/riverside-county/murrieta",
  telephone: "+1-909-964-8976",
  areaServed: {
    "@type": "City",
    name: "Murrieta",
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: "Riverside County",
      containedInPlace: { "@type": "State", name: "California" },
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
    { "@type": "ListItem", position: 1, name: "Home", item: "https://gatuckerpi.com/" },
    { "@type": "ListItem", position: 2, name: "Locations", item: "https://gatuckerpi.com/locations" },
    { "@type": "ListItem", position: 3, name: "Riverside County", item: "https://gatuckerpi.com/locations/riverside-county" },
    { "@type": "ListItem", position: 4, name: "Murrieta", item: "https://gatuckerpi.com/locations/riverside-county/murrieta" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is GA Tucker PI actually based in Murrieta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Greg Tucker operates his practice from Murrieta, California. GA Tucker PI is not a national franchise or a remote-only operation. Greg is a local investigator who lives and works in Southwest Riverside County.",
      },
    },
    {
      "@type": "Question",
      name: "Which courthouse handles cases for Murrieta residents?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Southwest Justice Center in French Valley (38686 El Cerrito Road, Murrieta/French Valley area) handles family law, civil, and criminal matters for Murrieta and the southwest Riverside County communities. It is the relevant court for most Murrieta family law and civil litigation matters.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can GA Tucker PI start a case in Murrieta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Because Greg is based locally, there is no travel overhead or scheduling delay associated with geography. Consultation availability and case start timing depend on current caseload. Call 909-964-8976 to discuss your situation.",
      },
    },
    {
      "@type": "Question",
      name: "Does GA Tucker PI work with Murrieta family law attorneys?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Greg Tucker provides litigation support to attorneys practicing at the Southwest Justice Center and across Southwest Riverside County. He is available for consultation on case strategy as it relates to investigative findings.",
      },
    },
    {
      "@type": "Question",
      name: "How does GA Tucker PI charge for Murrieta cases?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pricing depends on the service type and scope. Background checks are the most straightforward — flat assignment with 1–2 business day turnaround. Surveillance is priced by the hour with a scope estimate provided before engagement. There are no surprise charges. Greg discusses costs transparently during the initial consultation.",
      },
    },
    {
      "@type": "Question",
      name: "Can a private investigator testify in Murrieta court?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Greg Tucker can be retained as a witness and has provided testimony in civil and family law proceedings. If testimony is anticipated, this should be discussed during the initial engagement so documentation procedures are aligned with that purpose from the outset.",
      },
    },
  ],
};

// ---------------------------------------------------------------------------
// Page data
// ---------------------------------------------------------------------------

const pageProps: LocationPageProps = {
  h1: "Murrieta Private Investigator — GA Tucker PI",
  region: "Murrieta",
  isCity: true,
  parentCounty: { name: "Riverside County", href: "/locations/riverside-county" },
  services: [
    { title: "Background Checks", description: "Personal and corporate background checks in Murrieta.", href: "/background-checks" },
    { title: "Infidelity Investigations", description: "Discreet surveillance throughout Murrieta and Southwest Riverside County.", href: "/infidelity" },
    { title: "Child Custody", description: "Objective evidence for Riverside County family court proceedings.", href: "/child-custody" },
    { title: "Missing Persons", description: "Locate individuals in the Murrieta / Temecula area and beyond.", href: "/missing-persons" },
    { title: "General Investigations", description: "Litigation support for Southwest Justice Center attorneys.", href: "/investigations" },
    { title: "Risk Management", description: "Security assessments for Murrieta businesses.", href: "/risk-management" },
  ],
  courthouses: [
    { name: "Southwest Justice Center", address: "38686 El Cerrito Rd, French Valley, CA 92596" },
  ],
  faqs: [
    {
      question: "Is GA Tucker PI actually based in Murrieta?",
      answer:
        "Yes. Greg Tucker operates his practice from Murrieta, California. GA Tucker PI is not a national franchise or a remote-only operation. Greg is a local investigator who lives and works in Southwest Riverside County.",
    },
    {
      question: "Which courthouse handles cases for Murrieta residents?",
      answer:
        "The Southwest Justice Center in French Valley (38686 El Cerrito Road, Murrieta/French Valley area) handles family law, civil, and criminal matters for Murrieta and the southwest Riverside County communities. It is the relevant court for most Murrieta family law and civil litigation matters.",
    },
    {
      question: "How quickly can GA Tucker PI start a case in Murrieta?",
      answer:
        "Because Greg is based locally, there is no travel overhead or scheduling delay associated with geography. Consultation availability and case start timing depend on current caseload. Call 909-964-8976 to discuss your situation.",
    },
    {
      question: "Does GA Tucker PI work with Murrieta family law attorneys?",
      answer:
        "Yes. Greg Tucker provides litigation support to attorneys practicing at the Southwest Justice Center and across Southwest Riverside County. He is available for consultation on case strategy as it relates to investigative findings.",
    },
    {
      question: "How does GA Tucker PI charge for Murrieta cases?",
      answer:
        "Pricing depends on the service type and scope. Background checks are the most straightforward — flat assignment with 1–2 business day turnaround. Surveillance is priced by the hour with a scope estimate provided before engagement. There are no surprise charges. Greg discusses costs transparently during the initial consultation.",
    },
    {
      question: "Can a private investigator testify in Murrieta court?",
      answer:
        "Greg Tucker can be retained as a witness and has provided testimony in civil and family law proceedings. If testimony is anticipated, this should be discussed during the initial engagement so documentation procedures are aligned with that purpose from the outset.",
    },
  ],
  bodyContent: [
    {
      heading: "Murrieta Private Investigator — GA Tucker PI",
      paragraphs: [
        "GA Tucker PI is based in Murrieta, California. Greg Tucker operates his practice from this city, and Murrieta clients get the full benefit of that: no travel overhead, same-day consultation availability, and an investigator who knows the streets, neighborhoods, subdivisions, and courthouses of Southwest Riverside County from years of working cases here.",
        "Greg Tucker holds California PI License #188351. He has conducted investigations across Murrieta and the surrounding Southwest Riverside County communities — Temecula, Wildomar, Menifee, Lake Elsinore, and Canyon Lake — with the Southwest Justice Center in French Valley serving as the relevant courthouse for most family law and civil matters in this area.",
      ],
    },
    {
      heading: "Murrieta as a Case Environment",
      paragraphs: [
        "Murrieta is one of the fastest-growing cities in California. It crossed 100,000 residents over a decade ago and continues to expand through master-planned communities along the I-15 and I-215 corridors. Jefferson Avenue, Murrieta Hot Springs Road, and the Clinton Keith Road corridor define the major arterials, and the city's residential grid of Copper Canyon, Bear Creek, and Greer Ranch neighborhoods creates predictable movement patterns that inform surveillance planning.",
        "The city's demographics skew toward families with children, two-income households, and homeowners — which maps directly to the most common case types GA Tucker PI receives: infidelity investigations, child custody documentation, background checks on new partners or business associates, and missing persons matters involving estranged family members.",
        "Murrieta also sits adjacent to the Southwest Justice Center (38686 El Cerrito Road, French Valley), which handles virtually all family law, civil limited and unlimited, and criminal matters for Southwest Riverside County. Attorneys and pro-per litigants working cases in that court engage GA Tucker PI for evidence development, subject research, and surveillance.",
      ],
    },
    {
      heading: "What a Murrieta Private Investigator Can Do for You",
      paragraphs: [
        "Infidelity Investigations: Suspicion of infidelity is difficult to live with and difficult to act on without facts. GA Tucker PI conducts discreet surveillance in Murrieta and Southwest Riverside County to document a subject's movements, meetings, and behavior. Evidence is captured via photo and video, organized into a dated timeline report, and delivered in a format usable in family court if the case proceeds to divorce or custody proceedings.",
        "Child Custody Investigations: Family law judges at the Southwest Justice Center base custody decisions on evidence presented in declarations and testimony. GA Tucker PI works with Murrieta parents and their family law attorneys to build the evidentiary record needed to support custody modification, enforcement, or opposing-party fitness challenges.",
        "Background Checks: Murrieta's growth has brought a steady stream of new residents, new business relationships, and new partnerships. GA Tucker PI conducts background checks using licensed investigative databases that return more complete and accurate results than consumer services.",
        "Missing Persons and Skip Traces: GA Tucker PI locates subjects using investigative databases, address-history analysis, and — when warranted — field work in Murrieta and surrounding communities.",
        "General Investigations and Litigation Support: Murrieta attorneys engage GA Tucker PI as a support resource for active cases. Services include witness locates, deposition preparation support, subject background research, and document retrieval from the Southwest Justice Center.",
      ],
    },
    {
      heading: "Murrieta Neighborhoods GA Tucker PI Knows",
      paragraphs: [
        "GA Tucker PI operates throughout Murrieta, including West Murrieta (Copper Canyon, Murrieta Hot Springs Road west of the I-15), Central Murrieta (Old Town Murrieta, the Madison Avenue commercial corridor), East Murrieta (Greer Ranch, Harveston, Spencer's Crossing), South Murrieta (neighborhoods approaching the Temecula border at Winchester Road and California Oaks Road), and North Murrieta (Murrieta Hot Springs, Warm Springs areas approaching the Wildomar border).",
      ],
    },
  ],
  schema,
  lastUpdated: "August 2026",
  heroImage: "/riverside-county-murrieta-hero.webp",
};

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function MurrietaPage() {
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
