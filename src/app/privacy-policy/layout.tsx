import type { Metadata } from "next";
import { pageMeta } from "@/lib/page-meta";

export const metadata: Metadata = {
  ...pageMeta({
    path: "/privacy-policy",
    title: "Privacy Policy | G.A. Tucker PI",
    description:
      "How G.A. Tucker PI collects and protects information on this site. Licensed California PI (PI188351). Contact the office with questions.",
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
