import type { Metadata } from "next";
import { pageMeta } from "@/lib/page-meta";

export const metadata: Metadata = pageMeta({
  path: "/child-custody",
  title: "Murrieta Private Investigator | Child Custody | G.A. Tucker PI",
  description:
    "Licensed California PI documenting parenting practices, living conditions, and custody concerns for family court. Based in Murrieta. Free consultation.",
});

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
