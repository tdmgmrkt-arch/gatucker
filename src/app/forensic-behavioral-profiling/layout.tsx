import type { Metadata } from "next";
import { pageMeta } from "@/lib/page-meta";

export const metadata: Metadata = pageMeta({
  path: "/forensic-behavioral-profiling",
  title: "California Private Investigator | Profiling | G.A. Tucker PI",
  description:
    "Forensic behavioral profiling and forensic linguistics for attorneys, corporations, and individuals. Greg A. Tucker, licensed CA PI, MS forensic psychology.",
});

// Service schema — nested entity references are pure @id pointers (no @type),
// otherwise they declare a second, address-less LocalBusiness node.
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://gatuckerpi.com/forensic-behavioral-profiling#service",
  name: "Forensic Behavioral Profiling & Forensic Linguistics",
  alternateName: [
    "Forensic Behavioral Science",
    "Forensic Behavioral Profiler",
    "Forensic Linguistic Analysis",
  ],
  description:
    "Forensic behavioral profiling and forensic linguistic analysis combined with licensed private investigation. Greg A. Tucker examines behavior, communications, and case facts to help attorneys, corporations, and private individuals identify investigative leads and evaluate disputed communications.",
  url: "https://gatuckerpi.com/forensic-behavioral-profiling",
  provider: { "@id": "https://gatuckerpi.com/#organization" },
  areaServed: {
    "@type": "State",
    name: "California",
  },
  serviceType: "Forensic Behavioral Profiling",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Forensic Behavioral & Linguistic Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Forensic Behavioral Profiling",
          description:
            "Systematic examination of behavior, actions, decision-making patterns, relationships, and circumstances relevant to an investigation or legal matter.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Forensic Linguistic Analysis",
          description:
            "Analysis of written and spoken language for authorship indicators, meaning, context, communication patterns, and disputed wording.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Threatening & Anonymous Communication Analysis",
          description:
            "Examination of threatening, harassing, extortionate, or anonymous messages to support investigation and documentation.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Investigative Lead Development",
          description:
            "Identification of possible evidence sources, relevant witnesses, investigative questions, and methods for documenting information.",
        },
      },
    ],
  },
};

export default function ForensicBehavioralProfilingLayout({
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
