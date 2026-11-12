import type { Metadata } from "next";
import { pageMeta } from "@/lib/page-meta";

export const metadata: Metadata = pageMeta({
  path: "/infidelity",
  title: "California Private Investigator | Infidelity | G.A. Tucker PI",
  description:
    "Discreet and confidential infidelity investigations in California. Professional surveillance and evidence gathering for suspected cheating spouses.",
});

// Service Schema for Infidelity Investigations
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://gatuckerpi.com/infidelity#service",
  name: "Infidelity Investigations",
  description: "Discreet and confidential infidelity investigations in California. Professional surveillance and evidence gathering for suspected cheating spouses with court-admissible documentation.",
  url: "https://gatuckerpi.com/infidelity",
  provider: { "@id": "https://gatuckerpi.com/#organization" },
  areaServed: {
    "@type": "State",
    name: "California"
  },
  serviceType: "Infidelity Investigation",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "USD"
    }
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Infidelity Investigation Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Surveillance Services"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Evidence Gathering"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Court-Ready Documentation"
        }
      }
    ]
  }
};

export default function InfidelityLayout({
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
