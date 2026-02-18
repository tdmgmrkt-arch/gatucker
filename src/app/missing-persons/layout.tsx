import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Missing Persons Investigations | Locate People | G.A. Tucker PI",
  description: "Specialized missing persons investigations in California. Locate lost family members, runaways, or individuals using advanced investigative techniques.",
  openGraph: {
    title: "Missing Persons Investigations | G.A. Tucker PI",
    description: "Specialized missing persons investigations in California. Locate lost family members, runaways, or individuals.",
    url: "https://gatuckerpi.com/missing-persons",
    type: "website",
  },
};

// Service Schema for Missing Persons
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://gatuckerpi.com/missing-persons#service",
  name: "Missing Persons Investigations",
  description: "Specialized missing persons investigations in California. Locate lost family members, runaways, or individuals using advanced investigative techniques and databases.",
  url: "https://gatuckerpi.com/missing-persons",
  provider: {
    "@type": "ProfessionalService",
    "@id": "https://gatuckerpi.com/#organization",
    name: "G.A. Tucker PI"
  },
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
