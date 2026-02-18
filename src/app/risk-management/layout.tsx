import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Risk Management Services | Threat Assessment | G.A. Tucker PI",
  description: "Professional risk assessment and mitigation strategies for businesses in California. Identify threats, protect resources, and safeguard your interests.",
  openGraph: {
    title: "Risk Management & Threat Assessment | G.A. Tucker PI",
    description: "Professional risk assessment and mitigation strategies for businesses in California. Identify threats and protect your interests.",
    url: "https://gatuckerpi.com/risk-management",
    type: "website",
  },
};

// Service Schema for Risk Management
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://gatuckerpi.com/risk-management#service",
  name: "Risk Management Services",
  description: "Professional risk assessment and mitigation strategies for businesses in California. Identify threats, protect resources, and safeguard your interests.",
  url: "https://gatuckerpi.com/risk-management",
  provider: {
    "@type": "ProfessionalService",
    "@id": "https://gatuckerpi.com/#organization",
    name: "G.A. Tucker PI"
  },
  areaServed: {
    "@type": "State",
    name: "California"
  },
  serviceType: "Risk Management"
};

export default function RiskManagementLayout({
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
