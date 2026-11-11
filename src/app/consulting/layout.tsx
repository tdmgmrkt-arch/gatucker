import type { Metadata } from "next";
import { pageMeta } from "@/lib/page-meta";

export const metadata: Metadata = pageMeta({
  path: "/consulting",
  title: "California Private Investigator | Trial Consulting",
  description:
    "Expert consulting services for attorneys including trial preparation, jury selection, witness interviews, and comprehensive case analysis in California.",
});

// Service Schema for Consulting
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://gatuckerpi.com/consulting#service",
  name: "Trial & Jury Consulting Services",
  description: "Expert consulting services for attorneys including trial preparation, jury selection, witness interviews, and comprehensive case analysis in California.",
  url: "https://gatuckerpi.com/consulting",
  provider: { "@id": "https://gatuckerpi.com/#organization" },
  areaServed: {
    "@type": "State",
    name: "California"
  },
  serviceType: "Legal Consulting"
};

export default function ConsultingLayout({
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
