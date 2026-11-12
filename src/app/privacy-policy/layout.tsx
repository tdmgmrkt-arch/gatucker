import type { Metadata } from "next";
import { pageMeta } from "@/lib/page-meta";

export const metadata: Metadata = {
  ...pageMeta({
    path: "/privacy-policy",
    title: "Privacy Policy | G.A. Tucker PI",
    description:
    "How G.A. Tucker PI collects, uses, and protects your personal information on gatuckerpi.com. Last updated May 29, 2025.",
  }),
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
