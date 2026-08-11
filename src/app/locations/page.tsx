import type { Metadata } from "next";
import { LocationsHub } from "./LocationsHub";

// ---------------------------------------------------------------------------
// Metadata — wired from content-drafts/locations/_hub.md
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: "Service Area | GA Tucker PI | California PI",
  description:
    "GA Tucker PI serves clients across Southern California and beyond. Licensed California PI (CA #188351) based in Murrieta. View service areas by county and city.",
  alternates: {
    canonical: "https://gatuckerpi.com/locations",
  },
  openGraph: {
    title: "Service Area | GA Tucker PI | California PI",
    description:
      "Licensed California PI Greg Tucker serves Riverside County, LA County, San Bernardino County, San Francisco, and cross-border matters from Las Vegas.",
    url: "https://gatuckerpi.com/locations",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Service Area | GA Tucker PI | California PI",
    description:
      "Licensed California PI Greg Tucker serves Riverside County, LA County, San Bernardino County, and more.",
  },
};

// ---------------------------------------------------------------------------
// Schema
// ---------------------------------------------------------------------------

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://gatuckerpi.com/locations#service",
  name: "G.A. Tucker PI — Service Areas",
  url: "https://gatuckerpi.com/locations",
  telephone: "+1-909-964-8976",
  parentOrganization: { "@id": "https://gatuckerpi.com/#organization" },
  areaServed: [
    { "@type": "State", name: "California" },
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "Professional License",
    name: "California Private Investigator License #PI188351",
    credentialID: "PI188351",
  },
};

// ---------------------------------------------------------------------------
// BreadcrumbList
// ---------------------------------------------------------------------------

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
      name: "Service Areas",
      item: "https://gatuckerpi.com/locations",
    },
  ],
};

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function LocationsPage() {
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
      <LocationsHub />
    </>
  );
}
