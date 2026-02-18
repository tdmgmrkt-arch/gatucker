import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Infidelity Investigations | Cheating Spouse Surveillance | G.A. Tucker PI",
  description: "Discreet and confidential infidelity investigations in California. Professional surveillance and evidence gathering for suspected cheating spouses.",
  openGraph: {
    title: "Infidelity Investigations | G.A. Tucker PI",
    description: "Discreet and confidential infidelity investigations in California. Professional surveillance and evidence gathering.",
    url: "https://gatuckerpi.com/infidelity",
    type: "website",
  },
};

// Service Schema for Infidelity Investigations
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://gatuckerpi.com/infidelity#service",
  name: "Infidelity Investigations",
  description: "Discreet and confidential infidelity investigations in California. Professional surveillance and evidence gathering for suspected cheating spouses with court-admissible documentation.",
  url: "https://gatuckerpi.com/infidelity",
  provider: {
    "@type": "ProfessionalService",
    "@id": "https://gatuckerpi.com/#organization",
    name: "G.A. Tucker PI"
  },
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
