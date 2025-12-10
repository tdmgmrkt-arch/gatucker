import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact G.A. Tucker PI | California Private Investigator",
  description: "Contact Greg Tucker, licensed California private investigator with 27+ years experience. Available 24/7 for confidential consultations. Call 909-964-8976.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
