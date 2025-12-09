import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Investigation Services | California PI Services | G.A. Tucker PI",
  description: "Comprehensive private investigation services in California including background checks, surveillance, missing persons, infidelity investigations, and more.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
