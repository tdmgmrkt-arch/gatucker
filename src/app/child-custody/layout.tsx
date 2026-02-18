import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Child Custody Investigations | Family Court Evidence | G.A. Tucker PI",
  description: "Professional child custody investigations in California. Gather objective evidence for family court proceedings to protect your children's best interests.",
  openGraph: {
    title: "Child Custody Investigations | G.A. Tucker PI",
    description: "Professional child custody investigations in California. Gather objective evidence for family court proceedings.",
    url: "https://gatuckerpi.com/child-custody",
    type: "website",
  },
};

// Service Schema for Child Custody
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://gatuckerpi.com/child-custody#service",
  name: "Child Custody Investigations",
  description: "Professional child custody investigations in California. Gather objective evidence for family court proceedings to protect your children's best interests.",
  url: "https://gatuckerpi.com/child-custody",
  provider: {
    "@type": "ProfessionalService",
    "@id": "https://gatuckerpi.com/#organization",
    name: "G.A. Tucker PI"
  },
  areaServed: {
    "@type": "State",
    name: "California"
  },
  serviceType: "Child Custody Investigation"
};

export default function ChildCustodyLayout({
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
