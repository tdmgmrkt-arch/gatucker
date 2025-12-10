import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs | G.A. Tucker PI | California Private Investigator",
  description: "Frequently asked questions about private investigation services. Learn about surveillance, background checks, infidelity investigations, and more from G.A. Tucker PI.",
};

export default function FAQsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
