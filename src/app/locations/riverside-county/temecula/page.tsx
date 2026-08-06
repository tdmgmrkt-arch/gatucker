import type { Metadata } from "next";
import { LocationPage } from "../../../components/LocationPage";
import type { LocationPageProps } from "../../../components/LocationPage";

// ---------------------------------------------------------------------------
// Metadata — wired from content-drafts/locations/riverside-county-temecula.md
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: "Temecula Private Investigator | GA Tucker PI | Murrieta",
  description:
    "GA Tucker PI serves Temecula, CA. Licensed private investigator based in nearby Murrieta. Background checks, infidelity, child custody. CA PI #188351.",
  alternates: {
    canonical: "https://gatuckerpi.com/locations/riverside-county/temecula",
  },
  openGraph: {
    title: "Temecula Private Investigator | GA Tucker PI | Murrieta",
    description:
      "Licensed CA PI serving Temecula. Surveillance, background checks, infidelity investigations. Call 909-964-8976.",
    url: "https://gatuckerpi.com/locations/riverside-county/temecula",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Temecula Private Investigator | GA Tucker PI | Murrieta",
    description: "Licensed CA PI Greg Tucker serves Temecula. Call 909-964-8976.",
  },
};

// ---------------------------------------------------------------------------
// Schema
// ---------------------------------------------------------------------------

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://gatuckerpi.com/locations/riverside-county/temecula#service",
  name: "G.A. Tucker PI — Temecula",
  url: "https://gatuckerpi.com/locations/riverside-county/temecula",
  telephone: "+1-909-964-8976",
  areaServed: {
    "@type": "City",
    name: "Temecula",
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
    { "@type": "ListItem", position: 4, name: "Temecula", item: "https://gatuckerpi.com/locations/riverside-county/temecula" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which court handles Temecula cases?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Temecula is served by the Southwest Justice Center (French Valley). The court handles family law, civil limited and unlimited jurisdiction, and criminal matters for the southwest Riverside County communities including Temecula, Murrieta, Wildomar, Menifee, and Lake Elsinore.",
      },
    },
    {
      "@type": "Question",
      name: "How far is GA Tucker PI from Temecula?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GA Tucker PI is based in Murrieta, which shares a border with Temecula. The drive between the cities is typically 10–15 minutes. For GA Tucker PI, Temecula is effectively a home-market city with no travel overhead.",
      },
    },
    {
      "@type": "Question",
      name: "Does GA Tucker PI handle wine country estate or property-related investigations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Cases involving Temecula wine country property disputes, estate matters, or business relationships tied to the wine industry have been handled by GA Tucker PI. The geographic familiarity with the Rancho California Road and De Portola Road corridor is directly applicable.",
      },
    },
    {
      "@type": "Question",
      name: "Can GA Tucker PI conduct surveillance in rural Temecula areas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, with appropriate planning. Rural wine country surveillance requires different techniques than suburban residential work — longer distances, less traffic cover, different approach timing. Greg plans coverage to fit the geography.",
      },
    },
    {
      "@type": "Question",
      name: "What is the typical cost of a Temecula private investigator engagement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Background checks are typically the lowest-cost service, completed in 1–2 business days. Surveillance is priced by hour with a scope estimate before engagement. Greg discusses costs transparently during the initial consultation. Call 909-964-8976 for specifics.",
      },
    },
    {
      "@type": "Question",
      name: "Does GA Tucker PI work with Temecula family law attorneys?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Greg Tucker provides litigation support to family law attorneys practicing at the Southwest Justice Center. He is available for case consultation and provides attorney-ready documentation of investigative findings.",
      },
    },
  ],
};

// ---------------------------------------------------------------------------
// Page data
// ---------------------------------------------------------------------------

const pageProps: LocationPageProps = {
  h1: "Temecula Private Investigator — GA Tucker PI",
  region: "Temecula",
  isCity: true,
  parentCounty: { name: "Riverside County", href: "/locations/riverside-county" },
  services: [
    { title: "Background Checks", description: "Personal and corporate background checks in Temecula.", href: "/background-checks" },
    { title: "Infidelity Investigations", description: "Discreet surveillance in Temecula and surrounding wine country.", href: "/infidelity" },
    { title: "Child Custody", description: "Objective evidence for Riverside County family court.", href: "/child-custody" },
    { title: "Missing Persons", description: "Locate individuals in the Temecula Valley area.", href: "/missing-persons" },
    { title: "Litigation Support", description: "Court-ready evidence for Southwest Justice Center attorneys.", href: "/investigations" },
    { title: "Risk Management", description: "Security assessments for Temecula businesses.", href: "/risk-management" },
  ],
  courthouses: [
    { name: "Southwest Justice Center", address: "38686 El Cerrito Rd, French Valley, CA 92596" },
  ],
  faqs: [
    {
      question: "Which court handles Temecula cases?",
      answer:
        "Temecula is served by the Southwest Justice Center (French Valley). The court handles family law, civil limited and unlimited jurisdiction, and criminal matters for the southwest Riverside County communities including Temecula, Murrieta, Wildomar, Menifee, and Lake Elsinore.",
    },
    {
      question: "How far is GA Tucker PI from Temecula?",
      answer:
        "GA Tucker PI is based in Murrieta, which shares a border with Temecula. The drive between the cities is typically 10–15 minutes. For GA Tucker PI, Temecula is effectively a home-market city with no travel overhead.",
    },
    {
      question: "Does GA Tucker PI handle wine country estate or property-related investigations?",
      answer:
        "Yes. Cases involving Temecula wine country property disputes, estate matters, or business relationships tied to the wine industry have been handled by GA Tucker PI. The geographic familiarity with the Rancho California Road and De Portola Road corridor is directly applicable.",
    },
    {
      question: "Can GA Tucker PI conduct surveillance in rural Temecula areas?",
      answer:
        "Yes, with appropriate planning. Rural wine country surveillance requires different techniques than suburban residential work — longer distances, less traffic cover, different approach timing. Greg plans coverage to fit the geography.",
    },
    {
      question: "What is the typical cost of a Temecula private investigator engagement?",
      answer:
        "Background checks are typically the lowest-cost service, completed in 1–2 business days. Surveillance is priced by hour with a scope estimate before engagement. Greg discusses costs transparently during the initial consultation. Call 909-964-8976 for specifics.",
    },
    {
      question: "Does GA Tucker PI work with Temecula family law attorneys?",
      answer:
        "Yes. Greg Tucker provides litigation support to family law attorneys practicing at the Southwest Justice Center. He is available for case consultation and provides attorney-ready documentation of investigative findings.",
    },
  ],
  bodyContent: [
    {
      heading: "Temecula Private Investigator — GA Tucker PI",
      paragraphs: [
        "GA Tucker PI is a licensed California private investigator (CA PI #188351) based in Murrieta, immediately north of Temecula. Greg Tucker serves Temecula clients across the full range of investigative services — infidelity surveillance, child custody documentation, background checks, missing persons, and litigation support.",
        "The Murrieta-Temecula border is geographic, not operational. For GA Tucker PI, these two cities function as a single service corridor. There is no travel overhead, no delay, and no scheduling friction associated with a Temecula address.",
      ],
    },
    {
      heading: "Temecula's Case Environment",
      paragraphs: [
        "Temecula is a city of roughly 120,000 residents, organized into distinct communities along the I-15 and through the wine country to the west. The demographic mix — growing families in new subdivisions on the east side, higher-net-worth households in wine country estates, and a commercial core around Old Town — shapes the types of cases that come to GA Tucker PI from Temecula addresses.",
        "Family law matters make up a substantial portion of GA Tucker PI's Temecula caseload. The Southwest Justice Center in French Valley serves Temecula, and Greg has familiarity with the courthouse's procedures and the local family law bar that practices there.",
        "The wine country corridor — Rancho California Road west toward Pechanga and Butterfield Stage Road — creates a distinct geography for surveillance work, with rural roads, limited traffic cover, and long sight lines that require planning different from dense residential surveillance.",
      ],
    },
    {
      heading: "Services GA Tucker PI Provides in Temecula",
      paragraphs: [
        "Infidelity Investigations: Temecula's geography — a mix of dense residential subdivisions and open wine country roads — requires surveillance planning that accounts for both environments. GA Tucker PI conducts discreet observation and documentation of subject movements, meetings, and behavior. Evidence is captured in photo and video, organized into a dated report, and prepared for use in divorce or custody proceedings if the case continues to court.",
        "Child Custody Investigations: The Southwest Justice Center handles Temecula's family law matters. GA Tucker PI provides documentation of parenting conduct, custody schedule adherence, living environment conditions, and third-party exposure for Temecula parents and their attorneys.",
        "Background Checks: GA Tucker PI conducts background investigations using licensed databases for Temecula clients seeking information on partners, employees, business associates, or opposing parties in litigation.",
        "Missing Persons and Skip Traces: For Temecula clients seeking to locate estranged family members, judgment debtors, or subjects who have departed the area, GA Tucker PI conducts targeted locates using investigative databases and field inquiry.",
        "Litigation Support: Civil attorneys handling Temecula-area cases engage GA Tucker PI for witness locates, subject background research, and court-ready documentation.",
      ],
    },
    {
      heading: "Temecula Neighborhoods GA Tucker PI Covers",
      paragraphs: [
        "GA Tucker PI operates throughout Temecula, including Old Town Temecula (commercial core, historic district), Redhawk / Vail Ranch (southeast Temecula residential communities), Harveston (master-planned community on the Murrieta border), Wolf Creek / Morgan Hill (south Temecula family communities), De Portola Wine Country (rural west Temecula estate corridor), Paloma del Sol / Temeku Hills (golf and residential communities), Pechanga area (resort and adjacent residential), and Meadowview (mid-city residential).",
      ],
    },
  ],
  schema,
  lastUpdated: "August 2026",
};

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function TemeculaPage() {
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
