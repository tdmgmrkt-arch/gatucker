import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Child Custody Investigations | Family Court Evidence | G.A. Tucker PI",
  description: "Professional child custody investigations in California. Gather objective evidence for family court proceedings to protect your children's best interests.",
};

export default function ChildCustodyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
