import type { Metadata } from "next";
import { pageMeta } from "@/lib/page-meta";

export const metadata: Metadata = pageMeta({
  path: "/services",
  title: "California Private Investigator | Services | G.A. Tucker PI",
  description:
    "Comprehensive private investigation services in California including background checks, surveillance, missing persons, infidelity investigations, and more.",
});

// Services Schema
const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": "https://gatuckerpi.com/services#servicelist",
  name: "Private Investigation Services",
  description: "Comprehensive private investigation services offered by G.A. Tucker PI in California",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "Background Checks",
        description: "Comprehensive background check services including criminal records, employment verification, and personal history research.",
        url: "https://gatuckerpi.com/background-checks",
        provider: { "@id": "https://gatuckerpi.com/#organization" }
      }
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "Infidelity Investigations",
        description: "Discreet and confidential infidelity investigations with professional surveillance and evidence gathering.",
        url: "https://gatuckerpi.com/infidelity",
        provider: { "@id": "https://gatuckerpi.com/#organization" }
      }
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "Missing Persons",
        description: "Professional missing persons investigations to locate individuals using advanced search techniques.",
        url: "https://gatuckerpi.com/missing-persons",
        provider: { "@id": "https://gatuckerpi.com/#organization" }
      }
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Service",
        name: "Child Custody Investigations",
        description: "Thorough child custody investigations to protect the best interests of children.",
        url: "https://gatuckerpi.com/child-custody",
        provider: { "@id": "https://gatuckerpi.com/#organization" }
      }
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Service",
        name: "Risk Management",
        description: "Comprehensive threat assessment and risk management services for individuals and businesses.",
        url: "https://gatuckerpi.com/risk-management",
        provider: { "@id": "https://gatuckerpi.com/#organization" }
      }
    },
    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "Service",
        name: "Forensic Behavioral Profiling",
        description: "Expert criminal profiling and behavioral analysis services.",
        url: "https://gatuckerpi.com/forensic-behavioral-profiling",
        provider: { "@id": "https://gatuckerpi.com/#organization" }
      }
    },
    {
      "@type": "ListItem",
      position: 7,
      item: {
        "@type": "Service",
        name: "Trial Consulting",
        description: "Professional trial consulting including jury selection and witness preparation.",
        url: "https://gatuckerpi.com/consulting",
        provider: { "@id": "https://gatuckerpi.com/#organization" }
      }
    }
  ]
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      {children}
    </>
  );
}
