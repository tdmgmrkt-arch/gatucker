import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discreet High-Profile Investigations",
  description: "Licensed California PI for confidential investigations, high-asset custody matters, and risk management serving executives and high-net-worth clients.",
  openGraph: {
    title: "Discreet Investigations for High-Profile Clients | G.A. Tucker PI",
    description: "Confidential, court-admissible investigative work for entertainment industry, corporate leadership, and HNW clients — handled by a licensed California investigator.",
    url: "https://gatuckerpi.com/high-profile-investigations",
    type: "website",
  },
  alternates: {
    canonical: "/high-profile-investigations",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://gatuckerpi.com/high-profile-investigations#service",
  name: "High-Profile Client Investigations",
  description: "Confidential investigations and risk management for celebrities, executives, athletes, and Fortune 500 clients. Licensed, ethical, and court-admissible work performed by a California Private Investigator (#PI188351).",
  url: "https://gatuckerpi.com/high-profile-investigations",
  provider: { "@id": "https://gatuckerpi.com/#organization" },
  areaServed: {
    "@type": "State",
    name: "California"
  },
  serviceType: "Private Investigation"
};

export default function HighProfileInvestigationsLayout({
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
