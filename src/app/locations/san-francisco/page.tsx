import type { Metadata } from "next";
import { LocationPage } from "../../components/LocationPage";
import type { LocationPageProps } from "../../components/LocationPage";

// ---------------------------------------------------------------------------
// Metadata — wired from content-drafts/locations/san-francisco.md
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: "San Francisco Private Investigator | GA Tucker PI | CA #188351",
  description:
    "CA-licensed PI Greg Tucker serves San Francisco clients. Background checks, skip traces, records research, and in-person investigations. CA PI #188351. Based in Murrieta.",
  alternates: {
    canonical: "https://gatuckerpi.com/locations/san-francisco",
  },
  openGraph: {
    title: "San Francisco Private Investigator | GA Tucker PI | CA #188351",
    description:
      "Licensed CA PI serving San Francisco. Surveillance, background checks, civil and domestic investigations. Call 909-964-8976.",
    url: "https://gatuckerpi.com/locations/san-francisco",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "San Francisco Private Investigator | GA Tucker PI | CA #188351",
    description: "Licensed CA PI Greg Tucker serves San Francisco. Call 909-964-8976.",
  },
};

// ---------------------------------------------------------------------------
// Schema
// ---------------------------------------------------------------------------

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://gatuckerpi.com/locations/san-francisco#service",
  name: "G.A. Tucker PI — San Francisco",
  url: "https://gatuckerpi.com/locations/san-francisco",
  telephone: "+1-909-964-8976",
  areaServed: {
    "@type": "City",
    name: "San Francisco",
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
    { "@type": "ListItem", position: 3, name: "San Francisco", item: "https://gatuckerpi.com/locations/san-francisco" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is GA Tucker PI licensed to work in San Francisco?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Greg Tucker holds California PI License #188351, which is valid throughout the state of California, including San Francisco County. There is no geographic restriction on a California PI license within state lines.",
      },
    },
    {
      "@type": "Question",
      name: "What types of San Francisco cases does GA Tucker PI handle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GA Tucker PI handles background checks, skip traces, records research, and litigation support remotely from Murrieta for San Francisco clients. In-person surveillance, custody documentation, and subject-contact work in San Francisco are available when the case scope warrants travel.",
      },
    },
    {
      "@type": "Question",
      name: "How does billing work for San Francisco cases that require travel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Travel requirements, estimated costs, and scheduling are discussed during the initial consultation before any engagement begins. GA Tucker PI does not charge travel costs without prior client agreement. Remote-capable services have no travel component.",
      },
    },
    {
      "@type": "Question",
      name: "Does GA Tucker PI work with San Francisco family law attorneys?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Family law attorneys in San Francisco whose cases have a Southern California component, or who need investigative support for San Francisco-based matters from a licensed California PI, can engage GA Tucker PI. Greg provides attorney-ready documentation and is available for case consultation.",
      },
    },
    {
      "@type": "Question",
      name: "What courthouse handles San Francisco family law matters?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "San Francisco Superior Court at the Civic Center Courthouse (400 McAllister St.) handles family law, civil, and criminal matters for San Francisco County.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can GA Tucker PI provide a background check for a San Francisco subject?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard background check turnaround is 1–2 business days regardless of the subject's location. San Francisco subjects are researched with the same database access as Southern California subjects.",
      },
    },
  ],
};

// ---------------------------------------------------------------------------
// Page data
// ---------------------------------------------------------------------------

const pageProps: LocationPageProps = {
  h1: "San Francisco Private Investigator — GA Tucker PI",
  region: "San Francisco",
  isCity: true,
  // No parentCounty — SF is a standalone city-county, listed independently
  services: [
    { title: "Background Checks", description: "Remote background checks on San Francisco subjects, same database access as Southern California cases.", href: "/background-checks" },
    { title: "Skip Traces", description: "Locate subjects in San Francisco and the Bay Area using licensed investigative databases.", href: "/missing-persons" },
    { title: "Records Research", description: "California court records, Secretary of State filings, and public-record research for Bay Area cases.", href: "/investigations" },
    { title: "Infidelity Investigations", description: "In-person surveillance in San Francisco available when case scope warrants travel.", href: "/infidelity" },
    { title: "Child Custody", description: "Custody documentation for San Francisco parents prepared for SF Superior Court.", href: "/child-custody" },
    { title: "Profiling & Risk Management", description: "Subject profiling and due diligence for Bay Area attorneys and corporate clients.", href: "/profiling" },
  ],
  courthouses: [
    { name: "San Francisco Superior Court — Civic Center Courthouse", address: "400 McAllister St, San Francisco, CA 94102" },
    { name: "SF Hall of Justice", address: "850 Bryant St, San Francisco, CA 94103" },
  ],
  faqs: [
    {
      question: "Is GA Tucker PI licensed to work in San Francisco?",
      answer:
        "Yes. Greg Tucker holds California PI License #188351, which is valid throughout the state of California, including San Francisco County. There is no geographic restriction on a California PI license within state lines.",
    },
    {
      question: "What types of San Francisco cases does GA Tucker PI handle?",
      answer:
        "GA Tucker PI handles background checks, skip traces, records research, and litigation support remotely from Murrieta for San Francisco clients. In-person surveillance, custody documentation, and subject-contact work in San Francisco are available when the case scope warrants travel.",
    },
    {
      question: "How does billing work for San Francisco cases that require travel?",
      answer:
        "Travel requirements, estimated costs, and scheduling are discussed during the initial consultation before any engagement begins. GA Tucker PI does not charge travel costs without prior client agreement. Remote-capable services have no travel component.",
    },
    {
      question: "Does GA Tucker PI work with San Francisco family law attorneys?",
      answer:
        "Yes. Family law attorneys in San Francisco whose cases have a Southern California component, or who need investigative support for San Francisco-based matters from a licensed California PI, can engage GA Tucker PI. Greg provides attorney-ready documentation and is available for case consultation.",
    },
    {
      question: "What courthouse handles San Francisco family law matters?",
      answer:
        "San Francisco Superior Court at the Civic Center Courthouse (400 McAllister St.) handles family law, civil, and criminal matters for San Francisco County.",
    },
    {
      question: "How quickly can GA Tucker PI provide a background check for a San Francisco subject?",
      answer:
        "Standard background check turnaround is 1–2 business days regardless of the subject's location. San Francisco subjects are researched with the same database access as Southern California subjects.",
    },
  ],
  bodyContent: [
    {
      heading: "San Francisco Private Investigator — GA Tucker PI",
      paragraphs: [
        "GA Tucker PI is a California-licensed private investigator (CA PI #188351) based in Murrieta, in Southern California. Greg Tucker serves San Francisco clients and Bay Area attorneys for investigative matters that can be handled remotely and, when the case requires in-person presence, through direct travel to San Francisco.",
        "A California PI license is valid statewide. GA Tucker PI is authorized to conduct investigations anywhere in California. For San Francisco clients who need professional investigative services and cannot find a Northern California PI with the right expertise or availability, GA Tucker PI is a legitimate statewide option.",
      ],
    },
    {
      heading: "What GA Tucker PI Offers San Francisco Clients",
      paragraphs: [
        "Not every investigation requires a PI based in the same city. The question is whether the work can be done effectively — and for a significant portion of investigative services, it can.",
        "Background Checks: Licensed investigative databases are not geography-dependent. GA Tucker PI accesses the same databases for a San Francisco subject as for a Murrieta subject. A comprehensive background report — criminal history, civil court filings, address history, employment data, property records, known associates — is available for any subject in the United States within 1–2 business days.",
        "Skip Traces and Subject Locates: Locating a subject — finding their current address, phone number, or associated contacts — relies on database access, not physical proximity. GA Tucker PI conducts skip traces for San Francisco attorneys and creditors seeking judgment debtors, family members seeking estranged relatives, and clients who need to establish where a subject currently resides.",
        "Records Research and Document Retrieval: California Superior Court records, Secretary of State filings, property records, and other public-record sources can be requested and, in many cases, accessed remotely.",
        "Litigation Support for San Francisco Attorneys: California attorneys with cases involving Southern California-based defendants, witnesses, or evidence regularly work with GA Tucker PI. For San Francisco attorneys whose cases have a Southern California component — a witness located in Murrieta or Riverside, a defendant living in San Bernardino County — GA Tucker PI is the on-the-ground resource.",
        "Profiling and Risk Management: Subject profiling — compiling a comprehensive picture of an individual or business entity — does not require physical presence in San Francisco. GA Tucker PI builds profiles from licensed database access and public records research, delivered in a report format usable by Bay Area attorneys and corporate clients.",
      ],
    },
    {
      heading: "In-Person Investigation in San Francisco",
      paragraphs: [
        "When a case requires physical surveillance or in-person inquiry in San Francisco, GA Tucker PI travels. Surveillance cases, in-person witness interviews, and physical evidence documentation in the Bay Area are available when the case warrants the engagement.",
        "Travel requirements, scheduling, and logistics are discussed during initial consultation before any commitment is made. GA Tucker PI does not charge travel fees without prior client agreement.",
        "Infidelity Investigations in San Francisco: Physical surveillance requires in-person presence. GA Tucker PI accepts San Francisco infidelity investigation engagements when the case scope justifies travel. San Francisco's dense urban environment — from the Sunset District to SOMA, from Nob Hill to the Mission — requires urban surveillance planning different from Southern California suburban work.",
        "Child Custody Investigations in San Francisco: Child custody documentation for San Francisco clients requires physical presence for observation work. GA Tucker PI accepts these engagements when the scope and timeline are appropriate for in-person travel. Reports are prepared for use at San Francisco Superior Court.",
      ],
    },
    {
      heading: "Why a Southern California PI for a San Francisco Case?",
      paragraphs: [
        "Several scenarios create this dynamic: a San Francisco attorney has a case involving Southern California witnesses, defendants, or evidence; a Bay Area client has a matter that originated in Southern California — an ex-spouse who relocated to Murrieta, a business partner operating in Riverside County; a San Francisco client needs background research on a subject with California records, and Northern California PI options with the right expertise or availability are limited.",
        "GA Tucker PI does not claim to be the right fit for every San Francisco case. Greg will tell you during the initial consultation if a locally-based Bay Area PI would serve the case better. What GA Tucker PI offers is a licensed, experienced California investigator who works professionally and delivers documented results.",
      ],
    },
  ],
  schema,
  lastUpdated: "August 2026",
};

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function SanFranciscoPage() {
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
