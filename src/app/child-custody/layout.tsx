import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Child Custody Private Investigator, Murrieta CA",
  description: "Licensed California PI documenting parenting practices, living conditions, and custody concerns for family court. Based in Murrieta. Free consultation.",
  alternates: {
    canonical: "https://gatuckerpi.com/child-custody",
  },
  openGraph: {
    title: "Child Custody Private Investigator, Murrieta CA | G.A. Tucker PI",
    description: "Objective documentation for California family court — parenting practices, living conditions, and child welfare concerns.",
    url: "https://gatuckerpi.com/child-custody",
    type: "website",
  },
};

// Service Schema for Child Custody
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://gatuckerpi.com/child-custody#service",
  name: "Child Custody Investigations",
  description: "Professional child custody investigations in California. Gather objective evidence for family court proceedings to protect your children's best interests.",
  url: "https://gatuckerpi.com/child-custody",
  provider: { "@id": "https://gatuckerpi.com/#organization" },
  areaServed: {
    "@type": "State",
    name: "California"
  },
  serviceType: "Child Custody Investigation"
};

export default function ChildCustodyLayout({
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
