import type { Metadata } from "next";
import { pageMeta } from "@/lib/page-meta";
import { LocationsHub } from "./LocationsHub";

// ---------------------------------------------------------------------------
// Metadata — wired from content-drafts/locations/_hub.md
// ---------------------------------------------------------------------------

export const metadata: Metadata = pageMeta({
  path: "/locations",
  title: "Service Area | California & Nevada | G.A. Tucker PI",
  description:
    "Murrieta-based investigations across Southern California, with travel when a case needs it. Licensed PI (PI188351). Call to discuss a case.",
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
