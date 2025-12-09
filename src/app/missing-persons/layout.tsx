import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Missing Persons Investigations | Locate People | G.A. Tucker PI",
  description: "Specialized missing persons investigations in California. Locate lost family members, runaways, or individuals using advanced investigative techniques.",
};

export default function MissingPersonsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
