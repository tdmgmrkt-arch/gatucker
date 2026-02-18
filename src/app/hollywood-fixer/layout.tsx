import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hollywood Fixer | Celebrity & Corporate Investigations | G.A. Tucker PI",
  description: "Discreet crisis management and investigations for celebrities, executives, and Fortune 500 companies. Trusted Hollywood fixer with absolute confidentiality.",
  openGraph: {
    title: "Hollywood Fixer | G.A. Tucker PI",
    description: "Discreet crisis management and investigations for celebrities, executives, and Fortune 500 companies.",
    url: "https://gatuckerpi.com/hollywood-fixer",
    type: "website",
  },
};

// Service Schema for Hollywood Fixer
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://gatuckerpi.com/hollywood-fixer#service",
  name: "Hollywood Fixer Services",
  description: "Discreet crisis management and investigations for celebrities, executives, and Fortune 500 companies. Trusted Hollywood fixer with absolute confidentiality.",
  url: "https://gatuckerpi.com/hollywood-fixer",
  provider: {
    "@type": "ProfessionalService",
    "@id": "https://gatuckerpi.com/#organization",
    name: "G.A. Tucker PI"
  },
  areaServed: {
    "@type": "State",
    name: "California"
  },
  serviceType: "Crisis Management"
};

export default function HollywoodFixerLayout({
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
