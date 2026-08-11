import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | G.A. Tucker PI",
  description: "How G.A. Tucker PI collects, uses, and protects your personal information on gatuckerpi.com. Last updated May 29, 2025.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | G.A. Tucker PI",
    description: "How G.A. Tucker PI collects, uses, and protects your personal information.",
    url: "https://gatuckerpi.com/privacy-policy",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
