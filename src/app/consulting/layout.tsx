import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consulting Services | Jury & Trial Consultation | G.A. Tucker PI",
  description: "Expert consulting services for attorneys including trial preparation, jury selection, witness interviews, and comprehensive case analysis in California.",
  openGraph: {
    title: "Trial & Jury Consulting | G.A. Tucker PI",
    description: "Expert consulting services for attorneys including trial preparation, jury selection, and witness interviews.",
    url: "https://gatuckerpi.com/consulting",
    type: "website",
  },
};

// Service Schema for Consulting
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://gatuckerpi.com/consulting#service",
  name: "Trial & Jury Consulting Services",
  description: "Expert consulting services for attorneys including trial preparation, jury selection, witness interviews, and comprehensive case analysis in California.",
  url: "https://gatuckerpi.com/consulting",
  provider: {
    "@type": "ProfessionalService",
    "@id": "https://gatuckerpi.com/#organization",
    name: "G.A. Tucker PI"
  },
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
