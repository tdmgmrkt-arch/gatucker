import type { Metadata } from "next";
import { pageMeta } from "@/lib/page-meta";

export const metadata: Metadata = pageMeta({
  path: "/investigations",
  title: "California Civil & Criminal Investigations | G.A. Tucker PI",
  description:
    "Civil and criminal case investigations with 27+ years of experience. Licensed California PI (PI188351). Call to discuss a case.",
});

// Service Schema for Investigations
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://gatuckerpi.com/investigations#service",
  name: "Private Investigation Services",
  description: "Comprehensive private investigation services for civil and criminal cases in California. Expert investigators with 27+ years of experience.",
  url: "https://gatuckerpi.com/investigations",
  provider: { "@id": "https://gatuckerpi.com/#organization" },
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
