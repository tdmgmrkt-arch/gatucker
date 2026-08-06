import type { Metadata } from "next";
import { LocationPage } from "../../../components/LocationPage";
import type { LocationPageProps } from "../../../components/LocationPage";

// ---------------------------------------------------------------------------
// Metadata — wired from content-drafts/locations/los-angeles-county-long-beach.md
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: "Long Beach Private Investigator | GA Tucker PI | CA #188351",
  description:
    "GA Tucker PI serves Long Beach, CA. Licensed PI based in Murrieta. Background checks, infidelity surveillance, child custody, litigation support. CA PI #188351.",
  alternates: {
    canonical: "https://gatuckerpi.com/locations/los-angeles-county/long-beach",
  },
  openGraph: {
    title: "Long Beach Private Investigator | GA Tucker PI | CA #188351",
    description:
      "Licensed CA PI serving Long Beach. Surveillance, background checks, infidelity investigations. Call 909-964-8976.",
    url: "https://gatuckerpi.com/locations/los-angeles-county/long-beach",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Long Beach Private Investigator | GA Tucker PI | CA #188351",
    description: "Licensed CA PI Greg Tucker serves Long Beach. Call 909-964-8976.",
  },
};

// ---------------------------------------------------------------------------
// Schema
// ---------------------------------------------------------------------------

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://gatuckerpi.com/locations/los-angeles-county/long-beach#service",
  name: "G.A. Tucker PI — Long Beach",
  url: "https://gatuckerpi.com/locations/los-angeles-county/long-beach",
  telephone: "+1-909-964-8976",
  areaServed: {
    "@type": "City",
    name: "Long Beach",
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: "Los Angeles County",
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
    { "@type": "ListItem", position: 3, name: "Los Angeles County", item: "https://gatuckerpi.com/locations/los-angeles-county" },
    { "@type": "ListItem", position: 4, name: "Long Beach", item: "https://gatuckerpi.com/locations/los-angeles-county/long-beach" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What courthouse handles family law matters in Long Beach?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Los Angeles Superior Court Long Beach Courthouse at 415 W. Ocean Blvd. handles family law, civil, and criminal matters for Long Beach and the South Bay corridor.",
      },
    },
    {
      "@type": "Question",
      name: "How far is GA Tucker PI from Long Beach?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GA Tucker PI is based in Murrieta, approximately 65–75 miles from Long Beach via the I-15 North and I-605 or I-5 corridor. Drive time is typically 75–100 minutes depending on traffic. For background checks and remote research, geography is irrelevant — GA Tucker PI delivers from Murrieta with the same turnaround as local assignments.",
      },
    },
    {
      "@type": "Question",
      name: "Does GA Tucker PI handle port-related or commercial investigations in Long Beach?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GA Tucker PI handles commercial investigations, insurance-related background work, and business entity profiling. For cases with a logistics or port-industry element, Greg can address the investigative components that fall within his licensed practice area.",
      },
    },
    {
      "@type": "Question",
      name: "Can GA Tucker PI work cases that cross from Long Beach into Orange County?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Cases that cross the LA/Orange County border — surveillance following a subject from Long Beach into Seal Beach or Huntington Beach, for example — are handled as a single engagement.",
      },
    },
    {
      "@type": "Question",
      name: "Is CA PI License #188351 valid in Los Angeles County?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A California PI license is valid statewide with no county restrictions.",
      },
    },
    {
      "@type": "Question",
      name: "What types of cases does GA Tucker PI most commonly handle from Long Beach?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Based on GA Tucker PI's case experience, the most common Long Beach-adjacent requests are background checks, infidelity surveillance, child custody documentation, and pre-trial litigation support for family law and civil attorneys.",
      },
    },
  ],
};

// ---------------------------------------------------------------------------
// Page data
// ---------------------------------------------------------------------------

const pageProps: LocationPageProps = {
  h1: "Long Beach Private Investigator — GA Tucker PI",
  region: "Long Beach",
  isCity: true,
  parentCounty: { name: "Los Angeles County", href: "/locations/los-angeles-county" },
  services: [
    { title: "Background Checks", description: "Personal and corporate background checks in Long Beach.", href: "/background-checks" },
    { title: "Infidelity Investigations", description: "Discreet surveillance in Long Beach and surrounding areas.", href: "/infidelity" },
    { title: "Child Custody", description: "Objective evidence for LA County family court proceedings.", href: "/child-custody" },
    { title: "Missing Persons", description: "Locate individuals in the Long Beach / South Bay area.", href: "/missing-persons" },
    { title: "Litigation Support", description: "Court-ready investigative support for Long Beach Courthouse attorneys.", href: "/investigations" },
    { title: "Risk Management", description: "Security assessments for Long Beach port and commercial clients.", href: "/risk-management" },
  ],
  courthouses: [
    { name: "Long Beach Courthouse", address: "415 W. Ocean Blvd, Long Beach, CA 90802" },
  ],
  faqs: [
    {
      question: "What courthouse handles family law matters in Long Beach?",
      answer:
        "The Los Angeles Superior Court Long Beach Courthouse at 415 W. Ocean Blvd. handles family law, civil, and criminal matters for Long Beach and the South Bay corridor.",
    },
    {
      question: "How far is GA Tucker PI from Long Beach?",
      answer:
        "GA Tucker PI is based in Murrieta, approximately 65–75 miles from Long Beach via the I-15 North and I-605 or I-5 corridor. Drive time is typically 75–100 minutes depending on traffic. For background checks and remote research, geography is irrelevant — GA Tucker PI delivers from Murrieta with the same turnaround as local assignments.",
    },
    {
      question: "Does GA Tucker PI handle port-related or commercial investigations in Long Beach?",
      answer:
        "GA Tucker PI handles commercial investigations, insurance-related background work, and business entity profiling. For cases with a logistics or port-industry element, Greg can address the investigative components that fall within his licensed practice area.",
    },
    {
      question: "Can GA Tucker PI work cases that cross from Long Beach into Orange County?",
      answer:
        "Yes. Cases that cross the LA/Orange County border — surveillance following a subject from Long Beach into Seal Beach or Huntington Beach, for example — are handled as a single engagement.",
    },
    {
      question: "Is CA PI License #188351 valid in Los Angeles County?",
      answer:
        "Yes. A California PI license is valid statewide with no county restrictions.",
    },
    {
      question: "What types of cases does GA Tucker PI most commonly handle from Long Beach?",
      answer:
        "Based on GA Tucker PI's case experience, the most common Long Beach-adjacent requests are background checks, infidelity surveillance, child custody documentation, and pre-trial litigation support for family law and civil attorneys.",
    },
  ],
  bodyContent: [
    {
      heading: "Long Beach Private Investigator — GA Tucker PI",
      paragraphs: [
        "GA Tucker PI is a California-licensed private investigator (CA PI #188351) based in Murrieta, CA. Greg Tucker serves clients in Long Beach and throughout the South Bay corridor of Los Angeles County — individuals, families, and attorneys who need professional investigative work conducted legally, discreetly, and to a standard that produces usable evidence.",
        "Long Beach is the second-largest city in Los Angeles County, with a population approaching 470,000 across diverse neighborhoods from Belmont Shore to Signal Hill, Bixby Knolls to the Port area. GA Tucker PI handles cases in Long Beach in the same manner as cases in Murrieta: deliberate planning, documented results, and direct communication throughout.",
      ],
    },
    {
      heading: "Long Beach as a Case Environment",
      paragraphs: [
        "Long Beach presents a varied investigative environment. The port area, with its industrial scale and complex logistics operations, generates a distinct category of insurance, fraud, and commercial investigation. The residential neighborhoods — Naples, Belmont Shore, Alamitos Heights, Bixby Knolls, Los Altos, Lakewood Village — produce the family law, infidelity, and background check cases most common across Southern California.",
        "Long Beach also has a substantial concentration of attorneys. The Long Beach Courthouse handles a high volume of family law, civil, and criminal matters, and attorneys practicing there regularly engage outside investigators for pre-trial support.",
        "Long Beach is roughly 65–75 miles from GA Tucker PI's Murrieta headquarters via the I-15 North and I-605 North to the I-405 West. Travel time planning is discussed as part of every in-person case engagement.",
      ],
    },
    {
      heading: "Services GA Tucker PI Provides in Long Beach",
      paragraphs: [
        "Background Checks: GA Tucker PI accesses licensed investigative databases to produce comprehensive background reports on Long Beach subjects. Reports include criminal history (California and national), civil court filings, address history, employment verification data, property records, and known associates. Turnaround is typically 1–2 business days.",
        "Infidelity Investigations: GA Tucker PI conducts planned, discreet surveillance in Long Beach to document subject movements, meetings, and conduct. Long Beach's urban density, beach community layout, and port-area industrial zones all present distinct surveillance environments. Greg plans coverage to the subject's actual geography rather than applying a generic approach.",
        "Child Custody Investigations: The Long Beach Courthouse family law division handles custody matters for Long Beach and surrounding South Bay communities. GA Tucker PI documents parenting conduct, schedule compliance, living environment conditions, and third-party exposure for Long Beach parents and their family law attorneys.",
        "Missing Persons and Skip Traces: Long Beach's port proximity, transient population, and position as a transit hub means that subjects of skip traces and missing persons matters frequently surface in or pass through the city.",
        "Litigation Support for Long Beach Attorneys: Civil and family law attorneys practicing at the Long Beach Courthouse engage GA Tucker PI for pre-trial investigative support — witness locates, subject background analysis, deposition preparation research, and evidence documentation.",
      ],
    },
    {
      heading: "Long Beach Neighborhoods GA Tucker PI Covers",
      paragraphs: [
        "GA Tucker PI operates throughout Long Beach, including Belmont Shore / Naples (harbor-adjacent residential), Alamitos Heights (established single-family residential), Bixby Knolls (north Long Beach mixed residential and commercial), Los Altos (east Long Beach family community), Signal Hill (independent city within Long Beach footprint), Lakewood Village (north-central residential), Port / Wrigley (industrial and working-class residential), Downtown Long Beach (commercial core, courthouse district), and East Long Beach (toward the LA/Orange County border at Seal Beach).",
      ],
    },
  ],
  schema,
  lastUpdated: "August 2026",
};

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function LongBeachPage() {
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
