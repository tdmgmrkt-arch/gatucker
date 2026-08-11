import type { Metadata } from "next";
import { LocationPage } from "../../components/LocationPage";
import type { LocationPageProps } from "../../components/LocationPage";

// ---------------------------------------------------------------------------
// IMPORTANT — Nevada licensing constraint (do NOT modify this block)
// Greg Tucker is a California-licensed PI only (#PI188351).
// This page must NOT claim in-state Nevada PI services or Nevada licensure.
// Framing: California PI handling cross-border matters that originate in or
// connect to Las Vegas. All active in-state Nevada investigations are
// coordinated with licensed Nevada partner investigators.
// areaServed = matter-origin geography, NOT a service jurisdiction claim.
// validIn: California stays explicit on the credential — do NOT remove.
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Metadata — wired from content-drafts/locations/las-vegas.md
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: "Las Vegas PI Services | California PI for Vegas Matters",
  description:
    "California PI Greg Tucker handles cross-border cases involving Las Vegas — background checks, skip traces, CA-side surveillance, and litigation support. CA PI #188351.",
  alternates: {
    canonical: "https://gatuckerpi.com/locations/las-vegas",
  },
  openGraph: {
    title: "Las Vegas PI Services | California PI for Vegas Matters",
    description:
      "California-licensed PI handling cross-border matters connected to Las Vegas. CA License #PI188351. Confidential consultation available.",
    url: "https://gatuckerpi.com/locations/las-vegas",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Las Vegas PI Services | California PI for Vegas Matters",
    description: "California-licensed PI Greg Tucker assists with Las Vegas cross-border matters. Call 909-964-8976.",
  },
};

// ---------------------------------------------------------------------------
// Schema — areaServed is the matter-origin geography, NOT a service location.
// Do NOT add Nevada to the license or jurisdiction fields.
// validIn: California is explicit and must remain.
// ---------------------------------------------------------------------------

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://gatuckerpi.com/locations/las-vegas#service",
  name: "G.A. Tucker PI — Las Vegas Cross-Border Cases",
  url: "https://gatuckerpi.com/locations/las-vegas",
  telephone: "+1-909-964-8976",
  // areaServed here indicates matter-origin geography, not claimed service jurisdiction.
  // Scope note lives in the page body copy — City schema does not support `description`.
  areaServed: {
    "@type": "City",
    name: "Las Vegas",
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "Professional License",
    // Explicitly California only — no Nevada claim
    name: "California Private Investigator License #PI188351",
    validIn: { "@type": "State", name: "California" },
  },
  parentOrganization: { "@id": "https://gatuckerpi.com/#organization" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://gatuckerpi.com/" },
    { "@type": "ListItem", position: 2, name: "Locations", item: "https://gatuckerpi.com/locations" },
    { "@type": "ListItem", position: 3, name: "Las Vegas", item: "https://gatuckerpi.com/locations/las-vegas" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can GA Tucker PI conduct surveillance in Las Vegas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GA Tucker PI is a California-licensed PI. In-state Nevada surveillance that requires a Nevada PI license is coordinated with licensed Nevada partner investigators. California-side surveillance — work conducted within California's borders — is within GA Tucker PI's direct scope.",
      },
    },
    {
      "@type": "Question",
      name: "Can GA Tucker PI run a background check on a Las Vegas subject?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Licensed investigative databases are national in scope. GA Tucker PI researches Las Vegas and Clark County subjects with the same database access used for California subjects. There is no state restriction on background research.",
      },
    },
    {
      "@type": "Question",
      name: "Can GA Tucker PI help a California attorney whose client's ex-spouse moved to Las Vegas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. For California-side investigative work — documenting conduct before departure, confirming address history, researching Nevada assets through public records, locating the subject's current Nevada address — GA Tucker PI provides these services directly. For in-state Nevada work that requires Nevada PI licensure, coordination with licensed Nevada partners is available.",
      },
    },
    {
      "@type": "Question",
      name: "What is Nevada's PI licensing requirement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nevada requires private investigators conducting active investigations within the state to hold a Nevada PI license issued by the Private Investigator Licensing Board (PILB). Background research, public records analysis, and remote investigation of Nevada subjects using licensed databases does not require Nevada licensure.",
      },
    },
    {
      "@type": "Question",
      name: "Does GA Tucker PI coordinate with Nevada-licensed PIs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. For cases requiring in-state Nevada investigative activity, GA Tucker PI coordinates with licensed Nevada partner investigators. This arrangement allows clients to work with GA Tucker PI as a single point of contact while ensuring Nevada-regulated work is conducted by appropriately licensed professionals.",
      },
    },
    {
      "@type": "Question",
      name: "Can a California judgment be enforced against a debtor who moved to Las Vegas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Enforcement of a California judgment against a Nevada-resident debtor involves California collection procedures and, for Nevada-based assets and enforcement, Nevada legal process. GA Tucker PI provides the investigative support — locating the debtor, confirming current address and assets — on the California-accessible side of that process. Legal strategy for cross-state collection should be discussed with an attorney.",
      },
    },
  ],
};

// ---------------------------------------------------------------------------
// Page data — body content mirrors content-drafts/locations/las-vegas.md
// All framing preserved: California-side work only, no Nevada licensure claims.
// ---------------------------------------------------------------------------

const pageProps: LocationPageProps = {
  h1: "California Private Investigator Serving Las Vegas Matters — GA Tucker PI",
  region: "Las Vegas",
  isCity: false, // Treated as standalone — not a California county city
  services: [
    {
      title: "Background Checks & Records Research",
      description:
        "National-scope database access covers Las Vegas and Clark County subjects — criminal history, civil filings, address history, property records. Same turnaround as California cases.",
      href: "/background-checks",
    },
    {
      title: "Skip Traces on Las Vegas Subjects",
      description:
        "Locate subjects believed to be in Las Vegas or traveling the California–Nevada corridor using database analysis and address confirmation methods.",
      href: "/missing-persons",
    },
    {
      title: "California-Side Surveillance",
      description:
        "Document subject departures from California addresses, confirm activities on the California side of the border, and establish travel patterns — all within GA Tucker PI's licensed practice area.",
      href: "/investigations",
    },
    {
      title: "Litigation Support for California Attorneys",
      description:
        "Pre-trial research, subject profiling, and evidence documentation for California attorneys with Nevada-connected defendants or witnesses.",
      href: "/investigations",
    },
    {
      title: "Profiling & Due Diligence on Nevada Entities",
      description:
        "Nevada Secretary of State filings, Nevada court records, property records, and national database research on Las Vegas-based businesses or individuals.",
      href: "/profiling",
    },
    {
      title: "Risk Management",
      description:
        "Risk assessments for California individuals and businesses with Las Vegas-connected transactions or relationships.",
      href: "/risk-management",
    },
  ],
  // No Nevada courthouses listed — Greg is not a Nevada PI
  courthouses: [],
  faqs: [
    {
      question: "Can GA Tucker PI conduct surveillance in Las Vegas?",
      answer:
        "GA Tucker PI is a California-licensed PI. In-state Nevada surveillance that requires a Nevada PI license is coordinated with licensed Nevada partner investigators. California-side surveillance — work conducted within California's borders — is within GA Tucker PI's direct scope.",
    },
    {
      question: "Can GA Tucker PI run a background check on a Las Vegas subject?",
      answer:
        "Yes. Licensed investigative databases are national in scope. GA Tucker PI researches Las Vegas and Clark County subjects with the same database access used for California subjects. There is no state restriction on background research.",
    },
    {
      question: "Can GA Tucker PI help a California attorney whose client's ex-spouse moved to Las Vegas?",
      answer:
        "Yes. For California-side investigative work — documenting conduct before departure, confirming address history, researching Nevada assets through public records, locating the subject's current Nevada address — GA Tucker PI provides these services directly. For in-state Nevada work that requires Nevada PI licensure, coordination with licensed Nevada partners is available.",
    },
    {
      question: "What is Nevada's PI licensing requirement?",
      answer:
        "Nevada requires private investigators conducting active investigations within the state to hold a Nevada PI license issued by the Private Investigator Licensing Board (PILB). Background research, public records analysis, and remote investigation of Nevada subjects using licensed databases does not require Nevada licensure.",
    },
    {
      question: "Does GA Tucker PI coordinate with Nevada-licensed PIs?",
      answer:
        "Yes. For cases requiring in-state Nevada investigative activity, GA Tucker PI coordinates with licensed Nevada partner investigators. This arrangement allows clients to work with GA Tucker PI as a single point of contact while ensuring Nevada-regulated work is conducted by appropriately licensed professionals.",
    },
    {
      question: "Can a California judgment be enforced against a debtor who moved to Las Vegas?",
      answer:
        "Enforcement of a California judgment against a Nevada-resident debtor involves California collection procedures and, for Nevada-based assets and enforcement, Nevada legal process. GA Tucker PI provides the investigative support — locating the debtor, confirming current address and assets — on the California-accessible side of that process. Legal strategy for cross-state collection should be discussed with an attorney.",
    },
  ],
  bodyContent: [
    {
      heading: "California Private Investigator for Las Vegas-Connected Cases",
      paragraphs: [
        "GA Tucker PI is a California-licensed private investigator (CA PI #188351) based in Murrieta, CA. Greg Tucker serves California attorneys and clients with cases that have a Las Vegas or Clark County, Nevada component — specifically for the California-side investigative work, cross-border research, and litigation support that these cases require.",
        "GA Tucker PI is a California PI. Greg Tucker is licensed under California Business and Professions Code, Bureau of Security and Investigative Services. In-state Nevada investigations that require a Nevada PI license are coordinated with licensed Nevada partner investigators. What GA Tucker PI provides directly is the California-side work — and for many cases with Las Vegas involvement, that is where the most critical investigative activity happens.",
      ],
    },
    {
      heading: "What Types of Cases Involve Las Vegas and California?",
      paragraphs: [
        "Las Vegas and Southern California are connected by Interstate 15 — approximately 270 miles from Murrieta to the Las Vegas Strip. The corridor is among the most traveled in the western United States. That proximity creates a predictable set of case types where California-based clients and attorneys have Las Vegas-connected facts.",
        "California subjects who travel to or relocate toward Las Vegas: A subject of an infidelity surveillance case, a judgment debtor, a parent violating a California custody order, or a missing family member may be located in or moving between Southern California and Las Vegas. The California-side portion of those cases — surveillance staging before or after a Las Vegas visit, California-address confirmation, California court records — is within GA Tucker PI's direct scope.",
        "California divorce and family law cases with Nevada-based assets or parties: California attorneys handling high-asset divorce cases sometimes encounter spouses who hold Nevada real estate, Nevada business entities, or Nevada financial accounts. Background research on those assets and entities using public records is available to GA Tucker PI without requiring Nevada licensure.",
        "California creditors with Nevada-based judgment debtors: A California civil judgment against a debtor who has moved to Las Vegas requires locating the debtor, confirming their current address, and documenting asset information to support collection proceedings. GA Tucker PI conducts the background research and skip trace components; in-state Nevada process and asset work is coordinated with licensed Nevada resources.",
        "California litigation with Nevada witnesses or defendants: California attorneys preparing cases for trial sometimes need background information on witnesses or defendants based in Nevada. GA Tucker PI provides subject profiling, criminal history research, and public records analysis regardless of where the subject currently lives.",
      ],
    },
    {
      heading: "What GA Tucker PI Provides Directly for Las Vegas-Connected Cases",
      paragraphs: [
        "Background Checks and Records Research: Licensed investigative databases are not state-limited. GA Tucker PI researches Las Vegas and Clark County subjects using the same database access applied to California subjects. This includes criminal history (Nevada and national), civil court filings, address history, property records, vehicle registration, and known associates. Turnaround is typically 1–2 business days.",
        "Skip Traces on Las Vegas Subjects: Locating a subject who is believed to be in Las Vegas — or who travels between California and Nevada — uses database analysis and address confirmation methods that do not require physical presence in Nevada.",
        "California-Side Surveillance: For cases involving subjects who depart California for Las Vegas — surveillance targets, custody violators, subjects of fraud investigations — the California-side surveillance work occurs entirely within GA Tucker PI's licensed practice area. When in-state Nevada surveillance is necessary, that component is coordinated with licensed Nevada partner investigators.",
        "Litigation Support for California Attorneys with Nevada-Based Defendants: California civil and family law attorneys with Nevada-connected cases engage GA Tucker PI for pre-trial research, subject profiling, and evidence documentation on the California-accessible portions of their cases.",
        "Profiling and Due Diligence on Nevada Entities: California clients considering transactions with Las Vegas-based businesses or individuals use GA Tucker PI for pre-transaction profiling — Nevada Secretary of State filings, Nevada court records, property records, and national database research on principals. This work is available without Nevada PI licensure as it relies on public records and licensed investigative database access.",
      ],
    },
    {
      heading: "What GA Tucker PI Does Not Do for Las Vegas Cases",
      paragraphs: [
        "GA Tucker PI does not conduct in-state Nevada investigations that require a Nevada PI license without coordinating with a licensed Nevada partner. Nevada's Private Investigator Licensing Board (PILB) licenses investigators who conduct active surveillance, in-person subject contact, and related activities within Nevada's borders.",
        "GA Tucker PI is direct about this because the legal distinction matters. Engaging an unlicensed investigator to conduct Nevada-regulated investigative activities creates problems for both the investigator and the client — including potential evidence admissibility issues and regulatory exposure.",
        "For cases where in-state Nevada PI work is necessary, GA Tucker PI coordinates with licensed Nevada partner investigators. The California-side work, records research, and litigation support remain under GA Tucker PI's direct control.",
      ],
    },
    {
      heading: "The I-15 Corridor: Southern California to Las Vegas",
      paragraphs: [
        "GA Tucker PI's Murrieta location places it at the southern end of the I-15, the primary route connecting Southern California and Las Vegas. Cases involving subjects traveling this corridor — residents of Murrieta, Temecula, the Inland Empire, or the broader Southern California region making regular trips to Las Vegas — are cases where GA Tucker PI's geographic position is directly relevant to the California-side surveillance and documentation work.",
      ],
    },
  ],
  schema,
  lastUpdated: "August 2026",
  heroImage: "/las-vegas-hero.webp",
};

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function LasVegasPage() {
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
