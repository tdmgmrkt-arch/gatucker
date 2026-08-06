import type { Metadata } from "next";
import { LocationPage } from "../../../components/LocationPage";
import type { LocationPageProps } from "../../../components/LocationPage";

// ---------------------------------------------------------------------------
// Metadata — wired from content-drafts/locations/los-angeles-county-pasadena.md
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: "Pasadena Private Investigator | GA Tucker PI | CA #188351",
  description:
    "GA Tucker PI serves Pasadena, CA. Licensed PI based in Murrieta. Background checks, infidelity, litigation support for Pasadena and San Gabriel Valley. CA PI #188351.",
  alternates: {
    canonical: "https://gatuckerpi.com/locations/los-angeles-county/pasadena",
  },
  openGraph: {
    title: "Pasadena Private Investigator | GA Tucker PI | CA #188351",
    description:
      "Licensed CA PI serving Pasadena. Surveillance, background checks, infidelity investigations. Call 909-964-8976.",
    url: "https://gatuckerpi.com/locations/los-angeles-county/pasadena",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pasadena Private Investigator | GA Tucker PI | CA #188351",
    description: "Licensed CA PI Greg Tucker serves Pasadena. Call 909-964-8976.",
  },
};

// ---------------------------------------------------------------------------
// Schema
// ---------------------------------------------------------------------------

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://gatuckerpi.com/locations/los-angeles-county/pasadena#service",
  name: "G.A. Tucker PI — Pasadena",
  url: "https://gatuckerpi.com/locations/los-angeles-county/pasadena",
  telephone: "+1-909-964-8976",
  areaServed: {
    "@type": "City",
    name: "Pasadena",
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
    { "@type": "ListItem", position: 4, name: "Pasadena", item: "https://gatuckerpi.com/locations/los-angeles-county/pasadena" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What courthouse serves Pasadena?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Los Angeles Superior Court Pasadena Courthouse at 300 E. Walnut St. handles civil, family, and criminal matters for Pasadena and the San Gabriel Valley foothill communities including Arcadia, Monrovia, Azusa, and Covina.",
      },
    },
    {
      "@type": "Question",
      name: "How far is GA Tucker PI from Pasadena?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GA Tucker PI is based in Murrieta, approximately 75–90 miles from Pasadena via the I-15 North and I-10 West to the I-210. Drive time is typically 80–110 minutes depending on traffic. For background checks and remote research services, distance is not a factor — same database access and turnaround regardless of geography.",
      },
    },
    {
      "@type": "Question",
      name: "Does GA Tucker PI handle corporate or institutional investigations in Pasadena?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Pasadena's concentration of institutional employers and professional services firms creates demand for executive background research, due diligence investigation, and professional-conduct inquiries. GA Tucker PI handles these within the scope of licensed investigative practice.",
      },
    },
    {
      "@type": "Question",
      name: "Can GA Tucker PI work cases that cross from Pasadena into San Bernardino County?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Pasadena/Arcadia/Monrovia corridor sits at the LA/San Bernardino County border. Cases with elements on both sides — surveillance following a subject from Pasadena into Covina or Pomona — are handled as a single engagement.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a licensed PI and an online background check service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Licensed investigators access proprietary databases not available to consumers, covering more jurisdictions and record types. GA Tucker PI produces organized, sourced reports and can explain and follow up on findings — a service consumer platforms do not provide.",
      },
    },
    {
      "@type": "Question",
      name: "Is GA Tucker PI available for Pasadena cases that require testimony?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Greg Tucker can be retained as a witness and has provided testimony in civil and family law proceedings. If testimony is anticipated, discuss this during the initial engagement so documentation procedures align with that purpose from the outset.",
      },
    },
  ],
};

// ---------------------------------------------------------------------------
// Page data
// ---------------------------------------------------------------------------

const pageProps: LocationPageProps = {
  h1: "Pasadena Private Investigator — GA Tucker PI",
  region: "Pasadena",
  isCity: true,
  parentCounty: { name: "Los Angeles County", href: "/locations/los-angeles-county" },
  services: [
    { title: "Background Checks", description: "Personal and corporate background checks in Pasadena.", href: "/background-checks" },
    { title: "Infidelity Investigations", description: "Discreet surveillance in Pasadena and the San Gabriel Valley.", href: "/infidelity" },
    { title: "Child Custody", description: "Objective evidence for Pasadena / LA County family court.", href: "/child-custody" },
    { title: "Missing Persons", description: "Locate individuals in Pasadena and surrounding foothill communities.", href: "/missing-persons" },
    { title: "Litigation Support", description: "Pre-trial support for Pasadena Courthouse attorneys.", href: "/investigations" },
    { title: "Corporate Profiling", description: "Due diligence and risk management for Pasadena businesses.", href: "/profiling" },
  ],
  courthouses: [
    { name: "Pasadena Courthouse", address: "300 E. Walnut St, Pasadena, CA 91101" },
  ],
  faqs: [
    {
      question: "What courthouse serves Pasadena?",
      answer:
        "The Los Angeles Superior Court Pasadena Courthouse at 300 E. Walnut St. handles civil, family, and criminal matters for Pasadena and the San Gabriel Valley foothill communities including Arcadia, Monrovia, Azusa, and Covina.",
    },
    {
      question: "How far is GA Tucker PI from Pasadena?",
      answer:
        "GA Tucker PI is based in Murrieta, approximately 75–90 miles from Pasadena via the I-15 North and I-10 West to the I-210. Drive time is typically 80–110 minutes depending on traffic. For background checks and remote research services, distance is not a factor — same database access and turnaround regardless of geography.",
    },
    {
      question: "Does GA Tucker PI handle corporate or institutional investigations in Pasadena?",
      answer:
        "Yes. Pasadena's concentration of institutional employers and professional services firms creates demand for executive background research, due diligence investigation, and professional-conduct inquiries. GA Tucker PI handles these within the scope of licensed investigative practice.",
    },
    {
      question: "Can GA Tucker PI work cases that cross from Pasadena into San Bernardino County?",
      answer:
        "Yes. The Pasadena/Arcadia/Monrovia corridor sits at the LA/San Bernardino County border. Cases with elements on both sides — surveillance following a subject from Pasadena into Covina or Pomona — are handled as a single engagement.",
    },
    {
      question: "What is the difference between a licensed PI and an online background check service?",
      answer:
        "Licensed investigators access proprietary databases not available to consumers, covering more jurisdictions and record types. GA Tucker PI produces organized, sourced reports and can explain and follow up on findings — a service consumer platforms do not provide.",
    },
    {
      question: "Is GA Tucker PI available for Pasadena cases that require testimony?",
      answer:
        "Greg Tucker can be retained as a witness and has provided testimony in civil and family law proceedings. If testimony is anticipated, discuss this during the initial engagement so documentation procedures align with that purpose from the outset.",
    },
  ],
  bodyContent: [
    {
      heading: "Pasadena Private Investigator — GA Tucker PI",
      paragraphs: [
        "GA Tucker PI is a California-licensed private investigator (CA PI #188351) based in Murrieta, CA. Greg Tucker serves clients in Pasadena and the broader San Gabriel Valley foothill corridor — individuals with personal investigation needs, attorneys practicing at the Pasadena courthouse, and corporate clients who require professional investigative services in one of Los Angeles County's most economically significant communities.",
        "Pasadena is home to approximately 140,000 residents across neighborhoods from Bungalow Heaven to San Marino-adjacent estates. The city hosts Caltech, Jet Propulsion Laboratory, and a significant arts and cultural economy. Its Foothill proximity places it at the edge of the San Bernardino County border, and cases with elements in both LA and San Bernardino counties are not uncommon.",
      ],
    },
    {
      heading: "Pasadena's Investigative Environment",
      paragraphs: [
        "Pasadena presents several distinct case environments. The older, established residential neighborhoods — San Rafael Hills, Hastings Ranch, Altadena (unincorporated), and the historic core around Orange Grove Boulevard — produce family law and estate-related investigation needs. The Caltech and JPL presence generates corporate and intellectual property-adjacent background check requests. The mix of high-net-worth households and institutional employment creates a case profile that differs from the denser urban environments elsewhere in LA County.",
        "The Pasadena Courthouse serves the foothill communities of the San Gabriel Valley, including Pasadena, Arcadia, Monrovia, Azusa, Covina, and adjacent communities. GA Tucker PI's familiarity with the LA Superior Court system, combined with background check and surveillance capabilities, supports attorneys and clients working this area.",
      ],
    },
    {
      heading: "Services GA Tucker PI Provides in Pasadena",
      paragraphs: [
        "Background Checks: GA Tucker PI conducts comprehensive background investigations using licensed databases for Pasadena clients. The Pasadena client base skews toward more complex subjects — individuals with histories spanning multiple states, business entities with layered ownership, and professionals whose public-record profiles require deeper analysis. Common requests include due diligence on business transactions, employment screening for professional roles, and opposing-party research for civil litigation. Turnaround is typically 1–2 business days.",
        "Infidelity Investigations: GA Tucker PI conducts planned, discreet surveillance in Pasadena calibrated to the subject's actual environment. The city's mix of historic residential neighborhoods, institutional campuses, and the Old Pasadena commercial district all present different surveillance considerations.",
        "Child Custody Investigations: Pasadena family law matters are adjudicated at the Pasadena Courthouse. GA Tucker PI develops custody documentation for Pasadena parents and their attorneys — parenting schedule adherence, environmental observations, third-party exposure, and fitness assessments.",
        "Litigation Support for Pasadena Attorneys: Civil attorneys working the Pasadena Courthouse engage GA Tucker PI for pre-trial investigative support — witness locates, subject background analysis, deposition preparation research, and evidence documentation.",
        "Corporate Profiling and Due Diligence: Pasadena's institutional base — Caltech, JPL, and a concentration of established professional services firms — creates demand for corporate investigation services. GA Tucker PI provides pre-transaction due diligence, executive background research, and professional-conduct investigations.",
        "Missing Persons and Skip Traces: For Pasadena clients seeking to locate subjects who have departed the area, GA Tucker PI conducts targeted locates using investigative databases and field inquiry when warranted.",
      ],
    },
    {
      heading: "Pasadena and San Gabriel Valley Areas GA Tucker PI Covers",
      paragraphs: [
        "GA Tucker PI covers the full Pasadena footprint and adjacent San Gabriel Valley communities, including Old Pasadena / Civic Center (historic commercial core), Bungalow Heaven (historic residential neighborhood), San Rafael Hills (northeast Pasadena residential), Hastings Ranch (east Pasadena family community), Altadena (unincorporated LA County, north of Pasadena), San Marino (adjacent high-net-worth community), Arcadia (San Gabriel Valley adjacent, same courthouse jurisdiction), Monrovia / Duarte (foothill communities on the LA/San Bernardino border), and Azusa / Covina / West Covina (San Gabriel Valley corridor).",
      ],
    },
  ],
  schema,
  lastUpdated: "August 2026",
};

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function PasadenaPage() {
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
