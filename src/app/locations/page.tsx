import type { Metadata } from "next";
import { pageMeta } from "@/lib/page-meta";
import { LocationsHub } from "./LocationsHub";

// ---------------------------------------------------------------------------
// Metadata — wired from content-drafts/locations/_hub.md
// ---------------------------------------------------------------------------

export const metadata: Metadata = pageMeta({
  path: "/locations",
  title: "California Private Investigator | Service Area | G.A. Tucker PI",
  description:
    "GA Tucker PI serves clients across Southern California and beyond. Licensed California PI (CA #188351) based in Murrieta. View service areas by county and city.",
});

// ---------------------------------------------------------------------------
// Schema
// ---------------------------------------------------------------------------

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Private Investigation",
  "@id": "https://gatuckerpi.com/locations#service",
  name: "G.A. Tucker PI — Service Areas",
  url: "https://gatuckerpi.com/locations",
  provider: { "@id": "https://gatuckerpi.com/#organization" },
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
