import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "California Private Investigator | Greg Tucker",
  description: "Meet Greg Tucker - Licensed California PI with 27+ years of experience, Master's degrees in Forensic Psychology and Criminology. CA License #PI188351.",
  openGraph: {
    title: "About Greg Tucker | California Private Investigator",
    description: "Licensed California PI with 27+ years of experience, Master's degrees in Forensic Psychology and Criminology. CA License #PI188351.",
    url: "https://gatuckerpi.com/about",
    type: "profile",
  },
};

// Person Schema for Greg Tucker
const gregTuckerSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://gatuckerpi.com/about#greg-tucker",
  name: "Greg Tucker",
  jobTitle: "Private Investigator",
  description: "Licensed California Private Investigator with over 27 years of experience. Holds Master's degrees in Forensic Psychology and Criminology.",
  worksFor: { "@id": "https://gatuckerpi.com/#organization" },
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Professional License",
      name: "California Private Investigator License #PI188351",
      recognizedBy: {
        "@type": "Organization",
        name: "State of California"
      }
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: "Master's Degree in Forensic Psychology"
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: "Master's Degree in Criminology"
    }
  ],
  knowsAbout: [
    "Private Investigation",
    "Criminal Profiling",
    "Forensic Psychology",
    "Criminology",
    "Surveillance",
    "Background Checks"
  ],
  telephone: "+1-909-964-8976",
  url: "https://gatuckerpi.com/about"
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gregTuckerSchema) }}
      />
      {children}
    </>
  );
}
