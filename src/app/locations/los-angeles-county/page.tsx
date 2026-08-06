import type { Metadata } from "next";
import { LocationPage } from "../../components/LocationPage";
import type { LocationPageProps } from "../../components/LocationPage";

// ---------------------------------------------------------------------------
// Metadata — wired from content-drafts/locations/los-angeles-county.md
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: "Los Angeles County Private Investigator | GA Tucker PI",
  description:
    "GA Tucker PI provides licensed PI services across Los Angeles County. Based in Murrieta, CA. Background checks, surveillance, litigation support. CA PI #188351.",
  alternates: {
    canonical: "https://gatuckerpi.com/locations/los-angeles-county",
  },
  openGraph: {
    title: "Los Angeles County Private Investigator | GA Tucker PI",
    description:
      "Licensed CA PI serving Los Angeles County. Background checks, surveillance, infidelity, and more.",
    url: "https://gatuckerpi.com/locations/los-angeles-county",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Los Angeles County Private Investigator | GA Tucker PI",
    description: "Licensed CA PI Greg Tucker serves LA County. Call 909-964-8976.",
  },
};

// ---------------------------------------------------------------------------
// Schema
// ---------------------------------------------------------------------------

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://gatuckerpi.com/locations/los-angeles-county#service",
  name: "G.A. Tucker PI — Los Angeles County",
  url: "https://gatuckerpi.com/locations/los-angeles-county",
  telephone: "+1-909-964-8976",
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Los Angeles County",
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
    { "@type": "ListItem", position: 3, name: "Los Angeles County", item: "https://gatuckerpi.com/locations/los-angeles-county" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What types of cases does GA Tucker PI handle in Los Angeles County?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GA Tucker PI handles background checks, infidelity surveillance, child custody documentation, skip traces, witness locates, general civil litigation support, and corporate profiling. Cases with a Los Angeles County component — whether the subject lives there, a court is located there, or the facts of the case occurred there — qualify.",
      },
    },
    {
      "@type": "Question",
      name: "Does GA Tucker PI work with Los Angeles attorneys?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Family law and civil litigation attorneys in Los Angeles County engage GA Tucker PI for pre-trial investigation, subject surveillance, and evidence documentation. Reports are prepared in attorney-ready format and Greg is available for consultation on case strategy as it relates to investigative findings.",
      },
    },
    {
      "@type": "Question",
      name: "How does GA Tucker PI handle traffic and logistics for LA County surveillance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Surveillance in Los Angeles County is scheduled with traffic reality in mind. Greg does not commit to observation windows that are logistically impossible. When cases require extended presence in the county, scheduling is discussed upfront and built into the case scope.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a California PI restriction on working in Los Angeles County?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. California PI License #188351 is valid statewide. GA Tucker PI is licensed and authorized to conduct investigations throughout Los Angeles County.",
      },
    },
    {
      "@type": "Question",
      name: "Can GA Tucker PI obtain records from Los Angeles Superior Court?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most civil case records at Los Angeles Superior Court are publicly accessible. GA Tucker PI can retrieve filed documents, verify case status, and identify related filings across the county's multiple courthouses as part of a litigation-support or background assignment.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a licensed PI background check and an online service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Licensed investigators access databases unavailable to the public — they produce more complete and accurate results than consumer background check websites. GA Tucker PI provides sourced, organized reports rather than a raw data dump, and can explain and follow up on findings in a way a self-service platform cannot.",
      },
    },
  ],
};

// ---------------------------------------------------------------------------
// Page data
// ---------------------------------------------------------------------------

const pageProps: LocationPageProps = {
  h1: "Los Angeles County Private Investigator — GA Tucker PI",
  region: "Los Angeles County",
  isCity: false,
  services: [
    { title: "Background Checks", description: "Individual and corporate checks across LA County.", href: "/background-checks" },
    { title: "Infidelity Investigations", description: "Discreet surveillance throughout Los Angeles County.", href: "/infidelity" },
    { title: "Child Custody", description: "Court-ready evidence for LA County family court.", href: "/child-custody" },
    { title: "Missing Persons", description: "Locate individuals throughout Los Angeles County.", href: "/missing-persons" },
    { title: "Litigation Support", description: "Expert investigative support for LA County attorneys.", href: "/investigations" },
    { title: "Corporate Profiling", description: "Due diligence and risk management for LA County businesses.", href: "/profiling" },
    { title: "Risk Management", description: "Security assessments for LA County businesses.", href: "/risk-management" },
  ],
  courthouses: [],
  faqs: [
    {
      question: "What types of cases does GA Tucker PI handle in Los Angeles County?",
      answer:
        "GA Tucker PI handles background checks, infidelity surveillance, child custody documentation, skip traces, witness locates, general civil litigation support, and corporate profiling. Cases with a Los Angeles County component — whether the subject lives there, a court is located there, or the facts of the case occurred there — qualify.",
    },
    {
      question: "Does GA Tucker PI work with Los Angeles attorneys?",
      answer:
        "Yes. Family law and civil litigation attorneys in Los Angeles County engage GA Tucker PI for pre-trial investigation, subject surveillance, and evidence documentation. Reports are prepared in attorney-ready format and Greg is available for consultation on case strategy as it relates to investigative findings.",
    },
    {
      question: "How does GA Tucker PI handle traffic and logistics for LA County surveillance?",
      answer:
        "Surveillance in Los Angeles County is scheduled with traffic reality in mind. Greg does not commit to observation windows that are logistically impossible. When cases require extended presence in the county, scheduling is discussed upfront and built into the case scope.",
    },
    {
      question: "Is there a California PI restriction on working in Los Angeles County?",
      answer:
        "No. California PI License #188351 is valid statewide. GA Tucker PI is licensed and authorized to conduct investigations throughout Los Angeles County.",
    },
    {
      question: "Can GA Tucker PI obtain records from Los Angeles Superior Court?",
      answer:
        "Most civil case records at Los Angeles Superior Court are publicly accessible. GA Tucker PI can retrieve filed documents, verify case status, and identify related filings across the county's multiple courthouses as part of a litigation-support or background assignment.",
    },
    {
      question: "What is the difference between a licensed PI background check and an online service?",
      answer:
        "Licensed investigators access databases unavailable to the public — they produce more complete and accurate results than consumer background check websites. GA Tucker PI provides sourced, organized reports rather than a raw data dump, and can explain and follow up on findings in a way a self-service platform cannot.",
    },
  ],
  bodyContent: [
    {
      heading: "Los Angeles County Private Investigator — GA Tucker PI",
      paragraphs: [
        "Los Angeles County has 10 million residents, 88 incorporated cities, and one of the most complex court systems in the United States. GA Tucker PI is a California-licensed private investigator (CA PI #188351) based in Murrieta who serves clients with cases rooted in or touching Los Angeles County — individual clients, family law attorneys, civil litigators, and corporate clients who need professional investigative work without navigating the county's complexity on their own.",
        "GA Tucker PI provides services across LA County, with established case work in Long Beach, Pasadena, and the communities served by the major courthouse districts along the I-110 and I-210 corridors.",
      ],
    },
    {
      heading: "Los Angeles County's Investigative Landscape",
      paragraphs: [
        "LA County is not a monolithic environment. The courthouse districts, population density, traffic patterns, and case type mix vary dramatically by sub-region. An investigator who treats all of LA County the same produces average results.",
        "The urban core — downtown LA, Hollywood, Koreatown — is surveillance-intensive territory with parking constraints, camera density, and fast-moving subjects. Cases here often involve entertainment industry clients, civil fraud, and skip traces on subjects who blend into dense residential and commercial environments.",
        "The South Bay and Long Beach corridor — along the 405 and I-710 — carries a high volume of port-related commercial disputes, insurance investigations, and working-class family law matters with cross-county elements.",
        "The foothill and San Gabriel Valley communities — Pasadena, Arcadia, Monrovia, Covina — sit at the edge of LA County adjacent to San Bernardino County and generate significant civil litigation, employment dispute, and corporate investigation work.",
      ],
    },
    {
      heading: "Los Angeles County Courts GA Tucker PI Works With",
      paragraphs: [
        "Stanley Mosk Courthouse (Downtown Los Angeles): The main civil courthouse. Handles unlimited civil jurisdiction cases, complex litigation, and administrative proceedings. Attorneys working high-value civil cases here engage GA Tucker PI for subject research, witness locates, and background documentation.",
        "Clara Shortridge Foltz Criminal Justice Center (Downtown Los Angeles): The main criminal courthouse for the county, handling felony arraignments, preliminary hearings, and trials.",
        "Los Angeles Superior Court — Long Beach Courthouse (Long Beach): Serves the South Bay and Long Beach area for civil, family, and criminal matters. High volume family law court.",
        "Los Angeles Superior Court — Pasadena Courthouse (Pasadena): Serves the Foothill communities and the San Gabriel Valley. Civil and family law jurisdiction.",
        "Airport Courthouse (Los Angeles, near LAX): Handles civil and criminal matters for the West Side and LAX vicinity communities.",
      ],
    },
    {
      heading: "Services GA Tucker PI Provides in Los Angeles County",
      paragraphs: [
        "Background Checks: GA Tucker PI uses licensed investigative databases to produce comprehensive background reports on individuals and entities. Los Angeles County's sheer population means that subjects often have histories spanning multiple California counties, previous out-of-state residences, and records distributed across multiple court systems. Turnaround is typically 1–2 business days.",
        "Infidelity Investigations: Infidelity investigations in LA County require adaptation. Greg plans surveillance to match the subject's environment — not a generic approach — so that evidence gathered is clean, legally compliant, and court-ready.",
        "Child Custody Investigations: Los Angeles family courts respond to documented evidence. GA Tucker PI photographs and videos parenting conduct, confirms or disproves schedule adherence, and identifies third-party exposure that may be relevant to custody determinations.",
        "Missing Persons and Skip Traces: Los Angeles County's population and transience make it one of the more common locations where persons of interest — ex-spouses, debtors, missing family members — eventually surface.",
        "Litigation Support: LA County attorneys handling civil litigation engage GA Tucker PI for pre-trial background research, witness identification, document gathering, and deposition preparation support.",
        "Corporate Profiling and Risk Management: Companies operating in Los Angeles County face complex due-diligence requirements. GA Tucker PI provides pre-transaction subject profiles, executive background research, and threat assessments for corporate clients.",
      ],
    },
    {
      heading: "How Far Is GA Tucker PI from Los Angeles?",
      paragraphs: [
        "GA Tucker PI is based in Murrieta, approximately 65–80 miles from downtown Los Angeles depending on the route (I-15 to I-10, or I-15 to I-215 to SR-60). Drive time varies from 75 minutes to over 2 hours depending on traffic conditions.",
        "For LA County cases, Greg coordinates scheduling around traffic windows or, for background research and remote-capable services, works entirely from the Murrieta office. For surveillance that requires Los Angeles presence, timing and logistics are discussed during initial consultation.",
      ],
    },
  ],
  schema,
  lastUpdated: "August 2026",
  heroImage: "/los-angeles-county-hero.webp",
};

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function LosAngelesCountyPage() {
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
