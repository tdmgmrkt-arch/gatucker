import type { Metadata } from "next";
import { LocationPage } from "../../../components/LocationPage";
import type { LocationPageProps } from "../../../components/LocationPage";

// ---------------------------------------------------------------------------
// Metadata — wired from content-drafts/locations/riverside-county-riverside.md
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: "Riverside CA Private Investigator | GA Tucker PI",
  description:
    "GA Tucker PI serves Riverside, CA. Licensed PI based in Murrieta, 45 min from Riverside County's courthouse hub. Background checks, surveillance. CA PI #188351.",
  alternates: {
    canonical: "https://gatuckerpi.com/locations/riverside-county/riverside",
  },
  openGraph: {
    title: "Riverside CA Private Investigator | GA Tucker PI",
    description:
      "Licensed CA PI serving Riverside. Surveillance, background checks, and more. Call 909-964-8976.",
    url: "https://gatuckerpi.com/locations/riverside-county/riverside",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Riverside CA Private Investigator | GA Tucker PI",
    description: "Licensed CA PI Greg Tucker serves the city of Riverside. Call 909-964-8976.",
  },
};

// ---------------------------------------------------------------------------
// Schema
// ---------------------------------------------------------------------------

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://gatuckerpi.com/locations/riverside-county/riverside#service",
  name: "G.A. Tucker PI — City of Riverside",
  url: "https://gatuckerpi.com/locations/riverside-county/riverside",
  telephone: "+1-909-964-8976",
  areaServed: {
    "@type": "City",
    name: "Riverside",
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
  parentOrganization: { "@id": "https://gatuckerpi.com/#organization" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://gatuckerpi.com/" },
    { "@type": "ListItem", position: 2, name: "Locations", item: "https://gatuckerpi.com/locations" },
    { "@type": "ListItem", position: 3, name: "Riverside County", item: "https://gatuckerpi.com/locations/riverside-county" },
    { "@type": "ListItem", position: 4, name: "Riverside", item: "https://gatuckerpi.com/locations/riverside-county/riverside" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How far is GA Tucker PI from Riverside?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GA Tucker PI is based in Murrieta, approximately 45 miles south of the city of Riverside via the I-15 North and I-215 North. Drive time is typically 45–65 minutes depending on traffic. For surveillance and in-person case work in Riverside, Greg accounts for travel in case planning.",
      },
    },
    {
      "@type": "Question",
      name: "What courthouse handles most civil and criminal matters for the city of Riverside?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Riverside Historic Courthouse and Hall of Justice, both on Main Street in downtown Riverside, handle the majority of significant civil and criminal matters for the city and surrounding western Riverside County. The Riverside County Family Law Court handles high-conflict family law matters.",
      },
    },
    {
      "@type": "Question",
      name: "Does GA Tucker PI provide litigation support to Riverside attorneys?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Civil and family law attorneys practicing at the Riverside courthouse complex regularly engage GA Tucker PI for pre-trial investigation, subject research, and evidence documentation. Greg provides attorney-ready findings and is available for case consultation.",
      },
    },
    {
      "@type": "Question",
      name: "Is UC Riverside relevant to any investigation types GA Tucker PI handles?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In some cases, yes. Landlord-tenant disputes, employment matters involving university personnel, and background checks on individuals associated with the university have come through GA Tucker PI's office. The Canyon Crest and surrounding neighborhoods adjacent to the university are part of GA Tucker PI's Riverside coverage area.",
      },
    },
    {
      "@type": "Question",
      name: "Can GA Tucker PI obtain records from the Riverside Historic Courthouse?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most civil case files at the Riverside Historic Courthouse are publicly accessible. GA Tucker PI can retrieve filed documents, verify case status, and identify related filings as part of a background or litigation-support assignment.",
      },
    },
    {
      "@type": "Question",
      name: "What does a Riverside private investigator investigation cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Costs depend on service type and scope. Background checks are straightforward with a defined turnaround. Surveillance is priced by the hour with scope estimate provided before engagement. Greg discusses all costs transparently during initial consultation. Call 909-964-8976.",
      },
    },
  ],
};

// ---------------------------------------------------------------------------
// Page data
// ---------------------------------------------------------------------------

const pageProps: LocationPageProps = {
  h1: "Riverside, California Private Investigator — GA Tucker PI",
  region: "Riverside",
  isCity: true,
  parentCounty: { name: "Riverside County", href: "/locations/riverside-county" },
  services: [
    { title: "Background Checks", description: "Personal and corporate background checks in Riverside.", href: "/background-checks" },
    { title: "Infidelity Investigations", description: "Discreet surveillance throughout the city of Riverside.", href: "/infidelity" },
    { title: "Child Custody", description: "Objective evidence for Riverside County Superior Court.", href: "/child-custody" },
    { title: "Missing Persons", description: "Locate individuals in Riverside and the greater Inland Empire.", href: "/missing-persons" },
    { title: "Litigation Support", description: "Pre-trial support for attorneys at the Riverside courthouse complex.", href: "/investigations" },
    { title: "Risk Management", description: "Security and risk assessments for Riverside businesses.", href: "/risk-management" },
  ],
  courthouses: [
    { name: "Riverside Historic Courthouse", address: "4050 Main St, Riverside, CA 92501" },
    { name: "Robert Presley Hall of Justice", address: "4100 Main St, Riverside, CA 92501" },
    { name: "Riverside County Family Law Court", address: "4175 Main St, Riverside, CA 92501" },
  ],
  faqs: [
    {
      question: "How far is GA Tucker PI from Riverside?",
      answer:
        "GA Tucker PI is based in Murrieta, approximately 45 miles south of the city of Riverside via the I-15 North and I-215 North. Drive time is typically 45–65 minutes depending on traffic. For surveillance and in-person case work in Riverside, Greg accounts for travel in case planning.",
    },
    {
      question: "What courthouse handles most civil and criminal matters for the city of Riverside?",
      answer:
        "The Riverside Historic Courthouse and Hall of Justice, both on Main Street in downtown Riverside, handle the majority of significant civil and criminal matters for the city and surrounding western Riverside County. The Riverside County Family Law Court handles high-conflict family law matters.",
    },
    {
      question: "Does GA Tucker PI provide litigation support to Riverside attorneys?",
      answer:
        "Yes. Civil and family law attorneys practicing at the Riverside courthouse complex regularly engage GA Tucker PI for pre-trial investigation, subject research, and evidence documentation. Greg provides attorney-ready findings and is available for case consultation.",
    },
    {
      question: "Is UC Riverside relevant to any investigation types GA Tucker PI handles?",
      answer:
        "In some cases, yes. Landlord-tenant disputes, employment matters involving university personnel, and background checks on individuals associated with the university have come through GA Tucker PI's office. The Canyon Crest and surrounding neighborhoods adjacent to the university are part of GA Tucker PI's Riverside coverage area.",
    },
    {
      question: "Can GA Tucker PI obtain records from the Riverside Historic Courthouse?",
      answer:
        "Most civil case files at the Riverside Historic Courthouse are publicly accessible. GA Tucker PI can retrieve filed documents, verify case status, and identify related filings as part of a background or litigation-support assignment.",
    },
    {
      question: "What does a Riverside private investigator investigation cost?",
      answer:
        "Costs depend on service type and scope. Background checks are straightforward with a defined turnaround. Surveillance is priced by the hour with scope estimate provided before engagement. Greg discusses all costs transparently during initial consultation. Call 909-964-8976.",
    },
  ],
  bodyContent: [
    {
      heading: "Riverside, California Private Investigator — GA Tucker PI",
      paragraphs: [
        "GA Tucker PI is a California-licensed private investigator (CA PI #188351) based in Murrieta, approximately 45 miles south of the city of Riverside. Greg Tucker serves clients in Riverside — the county seat — and the surrounding communities including Moreno Valley, Corona, Jurupa Valley, Norco, and Eastvale.",
        "Riverside is the administrative center of Riverside County. The county's main courthouse complex sits here, and cases with significant legal stakes — complex civil litigation, felony criminal matters, high-asset divorce, and major custody disputes — often end up in Riverside's courthouses regardless of where the parties live. GA Tucker PI provides investigative support for those cases from its Murrieta headquarters.",
      ],
    },
    {
      heading: "Riverside's Courthouse Complex",
      paragraphs: [
        "Riverside Historic Courthouse (4050 Main Street, Riverside): One of California's oldest functioning courthouses, handling civil and administrative matters. A landmark building in the heart of downtown Riverside, it is the courthouse most commonly associated with complex civil litigation in Riverside County.",
        "Hall of Justice (4100 Main Street, Riverside): Adjacent to the Historic Courthouse, the Hall of Justice handles felony criminal arraignments, preliminary hearings, and jury trials. Defense attorneys, civil litigants with related criminal proceedings, and attorneys seeking post-conviction records work with GA Tucker PI for investigative support at this courthouse.",
        "Riverside County Family Law Court (Riverside): High-conflict and high-asset family law matters frequently come before Riverside family law judges rather than the Southwest Justice Center, particularly when the parties have complex assets, prior orders from multiple jurisdictions, or cases that have been transferred or consolidated.",
      ],
    },
    {
      heading: "Why Riverside Cases Come to GA Tucker PI",
      paragraphs: [
        "Riverside's position as the county seat means that attorneys and clients from across Riverside County — including those from Murrieta, Temecula, Palm Springs, and Hemet — may have their cases adjudicated here. GA Tucker PI's familiarity with the county's geography and court procedures is directly applicable, even when the courthouse is in the city of Riverside rather than the southwest.",
        "Additionally, the city of Riverside itself has a diverse population of approximately 320,000 across neighborhoods including the Eastside, Wood Streets, Orangecrest, Canyon Crest, La Sierra, Arlington, and Victoria. Cases originating within city limits are as common as cases where Riverside is simply the courthouse venue.",
      ],
    },
    {
      heading: "Services GA Tucker PI Provides in Riverside",
      paragraphs: [
        "Background Checks: GA Tucker PI conducts comprehensive background investigations for Riverside clients using licensed investigative databases. Results include criminal records, civil court filings, address history, property ownership, and known associates. Turnaround is typically 1–2 business days.",
        "Infidelity Investigations: GA Tucker PI plans and conducts discreet surveillance in Riverside based on the subject's actual movement geography and schedule patterns. The city's mix of dense residential neighborhoods, university district (UC Riverside is located here), and suburban corridors requires approach planning specific to the case.",
        "Child Custody Investigations: Riverside family law judges base contested custody decisions on documented evidence. GA Tucker PI develops the evidentiary record Riverside parents and their attorneys need — custody schedule documentation, parenting fitness observation, living environment assessment, and third-party influence documentation.",
        "Litigation Support for Riverside Attorneys: Civil attorneys working the Riverside Historic Courthouse and Hall of Justice engage GA Tucker PI for pre-trial research, witness locates, subject background analysis, and process service coordination. Greg delivers attorney-ready reports on a timeline the case requires.",
        "Missing Persons and Skip Traces: The city of Riverside's population and its position on the I-215 and SR-91 corridor make it a common location where subjects surface after leaving other parts of Southern California. GA Tucker PI conducts targeted locates using investigative database access and, when warranted, in-person field inquiry.",
      ],
    },
  ],
  schema,
  lastUpdated: "August 2026",
  heroImage: "/riverside-county-riverside-hero.webp",
};

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function RiversidePage() {
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
