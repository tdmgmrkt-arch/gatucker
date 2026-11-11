import type { Metadata } from "next";
import { pageMeta } from "@/lib/page-meta";

export const metadata: Metadata = pageMeta({
  path: "/missing-persons",
  title: "California Private Investigator | Missing Persons",
  description:
    "Specialized missing persons investigations in California. Locate lost family members, runaways, or individuals using advanced investigative techniques.",
});

// Service Schema for Missing Persons
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://gatuckerpi.com/missing-persons#service",
  name: "Missing Persons Investigations",
  description: "Specialized missing persons investigations in California. Locate lost family members, runaways, or individuals using advanced investigative techniques and databases.",
  url: "https://gatuckerpi.com/missing-persons",
  provider: { "@id": "https://gatuckerpi.com/#organization" },
  areaServed: {
    "@type": "State",
    name: "California"
  },
  serviceType: "Missing Persons Investigation"
};

export default function MissingPersonsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  );
}
