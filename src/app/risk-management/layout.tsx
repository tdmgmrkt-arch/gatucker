import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Risk Management Services | Threat Assessment | G.A. Tucker PI",
  description: "Professional risk assessment and mitigation strategies for businesses in California. Identify threats, protect resources, and safeguard your interests.",
};

export default function RiskManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
