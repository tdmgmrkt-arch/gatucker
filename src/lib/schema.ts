/**
 * Schema.org JSON-LD helpers — keep drop-in schema consistent site-wide.
 */

const BASE_URL = "https://gatuckerpi.com";

export type BreadcrumbItem = { name: string; path: string };

/**
 * Build a BreadcrumbList JSON-LD object.
 * Pass items in order from root → current page. "Home" is prepended automatically.
 *
 * @example
 * breadcrumbSchema([{ name: 'Infidelity Investigations', path: '/infidelity' }])
 */
export function breadcrumbSchema(items: BreadcrumbItem[]) {
  const full: BreadcrumbItem[] = [{ name: "Home", path: "/" }, ...items];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: full.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

/**
 * Build a FAQPage JSON-LD object from question/answer pairs.
 */
export type FaqItem = { question: string; answer: string };

export function faqPageSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

const GREG_ID = "https://gatuckerpi.com/about#greg-tucker";
const JULIA_ID = "https://gatuckerpi.com/about#julia-tucker";
const ORG_ID = "https://gatuckerpi.com/#organization";

/**
 * Degrees copied from the education list on /about. Do not add credentials
 * that are not printed on that page.
 */
const gregDegrees: { name: string; school: string }[] = [
  {
    name: "Master of Science - MS, Forensic Psychology",
    school: "Alliant International University",
  },
  {
    name: "Master's degree, Legal Studies, General",
    school: "Washington University School of Law - St. Louis",
  },
  {
    name: "Master of Science - MS, Criminology",
    school: "Kaplan University",
  },
  {
    name: "Bachelor of Arts - BA, International/Global Studies",
    school: "Azusa Pacific University",
  },
];

/** Canonical Person node for Greg. Blog posts and Organization.founder reference GREG_ID. */
export const gregTuckerSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": GREG_ID,
  name: "Greg A. Tucker",
  alternateName: "Greg Tucker",
  jobTitle: "Owner, CEO and Lead Investigator",
  description:
    "Owner and CEO of GA Tucker PI Investigative Services LLC. U.S. Army veteran, former Lieutenant for the Texas Department of Criminal Justice, and former Senior Parole/Probation Officer for the Florida Department of Corrections. Holds master's degrees in Forensic Psychology, Criminology, and Legal Studies, and a Bachelor of Arts in International/Global Studies, with 27+ years of investigative experience. California BSIS Private Investigator License #PI188351.",
  image: "https://gatuckerpi.com/gatuckerbwport.png",
  url: "https://gatuckerpi.com/about#greg-tucker",
  telephone: "+1-909-964-8976",
  worksFor: { "@id": ORG_ID },
  alumniOf: gregDegrees.map((degree) => ({
    "@type": "CollegeOrUniversity",
    name: degree.school,
  })),
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Professional License",
      name: "California Private Investigator License #PI188351",
      credentialID: "PI188351",
      recognizedBy: {
        "@type": "Organization",
        name: "California Bureau of Security and Investigative Services",
      },
    },
    ...gregDegrees.map((degree) => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: degree.name,
      recognizedBy: {
        "@type": "CollegeOrUniversity",
        name: degree.school,
      },
    })),
  ],
  knowsAbout: [
    "Private Investigation",
    "Criminal Profiling",
    "Forensic Psychology",
    "Criminology",
    "Legal Studies",
    "Surveillance",
    "Background Checks",
  ],
};

/**
 * Facts are limited to the Julia Tucker section on /about:
 * Co-Owner and COO, 17+ years with children and families, child psychology
 * and education, paralegal certification, missing-child / domestic / custody work.
 */
export const juliaTuckerSchema = {
  "@type": "Person",
  "@id": JULIA_ID,
  name: "Julia Tucker",
  jobTitle: "Co-Owner and COO",
  description:
    "Co-Owner and COO of GA Tucker PI Investigative Services LLC. More than 17 years working with children and families, a background in child psychology and education, and a paralegal certification. Supports investigations involving missing children, domestic disputes, and child custody cases.",
  image: "https://gatuckerpi.com/julia_profile.webp",
  url: "https://gatuckerpi.com/about#julia-tucker",
  worksFor: { "@id": ORG_ID },
};
