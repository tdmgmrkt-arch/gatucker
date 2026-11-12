import type { Metadata } from "next";
import { pageMeta } from "@/lib/page-meta";

export const metadata: Metadata = {
  ...pageMeta({
    path: "/terms-and-conditions",
    title: "Terms and Conditions | G.A. Tucker PI",
    description:
    "Terms of use for the G.A. Tucker PI website. Please read carefully before using gatuckerpi.com. Last updated May 29, 2025.",
  }),
  robots: { index: true, follow: true },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
