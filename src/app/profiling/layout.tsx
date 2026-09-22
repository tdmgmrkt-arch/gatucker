import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Behavioral Profiling & Forensic Psychology",
  description: "Professional behavioral profiling and forensic psychology services for legal strategies and insights. Expert analysis by a licensed California PI.",
  openGraph: {
    title: "Behavioral Profiling & Forensic Psychology | G.A. Tucker PI",
    description: "Professional behavioral profiling and forensic psychology services. Expert analysis by a licensed California PI.",
    url: "https://gatuckerpi.com/profiling",
    type: "website",
  },
};

// Service Schema for Profiling
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://gatuckerpi.com/profiling#service",
  name: "Behavioral Profiling Services",
  description: "Professional behavioral profiling and forensic psychology services for legal strategies and insights. Expert analysis by a licensed California PI with Master's degrees in Forensic Psychology and Criminology.",
  url: "https://gatuckerpi.com/profiling",
  provider: { "@id": "https://gatuckerpi.com/#organization" },
  areaServed: {
    "@type": "State",
    name: "California"
  },
  serviceType: "Behavioral Profiling"
};

export default function ProfilingLayout({
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
