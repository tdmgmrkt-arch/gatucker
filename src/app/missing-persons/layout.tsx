import type { Metadata } from "next";
import { pageMeta } from "@/lib/page-meta";

export const metadata: Metadata = pageMeta({
  path: "/missing-persons",
  title: "California Missing Persons Investigator | G.A. Tucker PI",
  description:
    "Help locating a missing family member or a person who is hard to find. Licensed PI (PI188351) in Murrieta. Call to discuss a case.",
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
