import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Investigations | Civil & Criminal Cases | G.A. Tucker PI",
  description: "Comprehensive private investigation services for civil and criminal cases in California. Expert investigators with 27+ years of experience.",
  openGraph: {
    title: "Private Investigations | G.A. Tucker PI",
    description: "Comprehensive private investigation services for civil and criminal cases in California. 27+ years of experience.",
    url: "https://gatuckerpi.com/investigations",
    type: "website",
  },
};

// Service Schema for Investigations
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://gatuckerpi.com/investigations#service",
  name: "Private Investigation Services",
  description: "Comprehensive private investigation services for civil and criminal cases in California. Expert investigators with 27+ years of experience.",
  url: "https://gatuckerpi.com/investigations",
  provider: {
    "@type": "ProfessionalService",
    "@id": "https://gatuckerpi.com/#organization",
    name: "G.A. Tucker PI"
  },
  areaServed: {
    "@type": "State",
    name: "California"
  },
  serviceType: "Private Investigation"
};

export default function InvestigationsLayout({
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
