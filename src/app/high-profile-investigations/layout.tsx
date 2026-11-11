import type { Metadata } from "next";
import { pageMeta } from "@/lib/page-meta";

export const metadata: Metadata = pageMeta({
  path: "/high-profile-investigations",
  title: "California High-Profile Investigations | G.A. Tucker PI",
  description:
    "Confidential investigations for executives and high-net-worth clients. Licensed PI (PI188351) in Murrieta. Call to discuss a case.",
});

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
