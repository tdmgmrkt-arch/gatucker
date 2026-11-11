import type { Metadata } from "next";
import { pageMeta } from "@/lib/page-meta";

export const metadata: Metadata = pageMeta({
  path: "/risk-management",
  title: "California Risk & Threat Assessment | G.A. Tucker PI",
  description:
    "Threat assessment and risk reviews for California families and businesses. Licensed PI (PI188351). Call for a consultation.",
});

// Service Schema for Risk Management
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://gatuckerpi.com/risk-management#service",
  name: "Risk Management Services",
  description: "Professional risk assessment and mitigation strategies for businesses in California. Identify threats, protect resources, and safeguard your interests.",
  url: "https://gatuckerpi.com/risk-management",
  provider: { "@id": "https://gatuckerpi.com/#organization" },
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
