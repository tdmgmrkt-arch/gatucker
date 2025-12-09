import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Infidelity Investigations | Cheating Spouse Surveillance | G.A. Tucker PI",
  description: "Discreet and confidential infidelity investigations in California. Professional surveillance and evidence gathering for suspected cheating spouses.",
};

export default function InfidelityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
