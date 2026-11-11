import type { Metadata } from "next";
import { pageMeta } from "@/lib/page-meta";

export const metadata: Metadata = pageMeta({
  path: "/high-net-worth-child-custody",
  title: "California HNW Child Custody Investigations | GA Tucker PI",
  description:
    "Custody documentation for complex assets and multiple households. Licensed California PI (PI188351). Call for a consultation.",
});

// Service schema — nested entity references stay pure @id pointers (no @type),
// or they declare a second, address-less LocalBusiness node.
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://gatuckerpi.com/high-net-worth-child-custody#service",
  name: "High-Net-Worth Child Custody Investigations",
  alternateName: [
    "High-Asset Custody Investigations",
    "Complex Child Custody Investigations",
    "High-Profile Divorce Custody Investigations",
  ],
  description:
    "Confidential child custody investigations for high-asset and high-profile California families. Documentation of lifestyle and spending relevant to support, actual versus claimed parenting time, household conditions across multiple residences, relocation matters, and safety concerns — prepared for family law attorneys.",
  url: "https://gatuckerpi.com/high-net-worth-child-custody",
  provider: { "@id": "https://gatuckerpi.com/#organization" },
  areaServed: {
    "@type": "State",
    name: "California",
  },
  serviceType: "Child Custody Investigation",
  audience: {
    "@type": "Audience",
    audienceType:
      "Family law attorneys, high-net-worth parents, executives, and public figures in California custody proceedings",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "High-Asset Custody Investigation Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Lifestyle & Spending Documentation",
          description:
            "Observable lifestyle, spending, and travel documentation relevant to support calculations and disclosure disputes.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Parenting-Time Verification",
          description:
            "Documentation of who is actually exercising custodial time when a parent travels frequently or delegates care to staff.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Household & Residence Assessment",
          description:
            "Observable conditions, supervision, and third parties present across multiple residences.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Relocation & Move-Away Investigations",
          description:
            "Factual documentation supporting or opposing a proposed move-away in California family court.",
        },
      },
    ],
  },
};

export default function HighNetWorthChildCustodyLayout({
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
