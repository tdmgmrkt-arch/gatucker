import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Investigations | Civil & Criminal Cases | G.A. Tucker PI",
  description: "Comprehensive private investigation services for civil and criminal cases in California. Expert investigators with 27+ years of experience.",
};

export default function InvestigationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
