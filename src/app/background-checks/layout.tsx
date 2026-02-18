import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Background Check Services | Employment & Personal Checks | G.A. Tucker PI",
  description: "Comprehensive background check services in California. Employment verification, criminal records, personal history research using exclusive databases.",
  openGraph: {
    title: "Background Check Services | G.A. Tucker PI",
    description: "Comprehensive background check services in California. Employment verification, criminal records, personal history research.",
    url: "https://gatuckerpi.com/background-checks",
    type: "website",
  },
};

// Service Schema for Background Checks
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://gatuckerpi.com/background-checks#service",
  name: "Background Check Services",
  description: "Comprehensive background check services in California including employment verification, criminal records search, personal history research, and social media analysis using exclusive databases.",
  url: "https://gatuckerpi.com/background-checks",
  provider: {
    "@type": "ProfessionalService",
    "@id": "https://gatuckerpi.com/#organization",
    name: "G.A. Tucker PI"
  },
  areaServed: {
    "@type": "State",
    name: "California"
  },
  serviceType: "Background Check Investigation",
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
    name: "Background Check Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Employment Background Checks"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Criminal Records Search"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Personal History Research"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Social Media Analysis"
        }
      }
    ]
  }
};

export default function BackgroundChecksLayout({
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
