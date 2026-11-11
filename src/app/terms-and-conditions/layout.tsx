import type { Metadata } from "next";
import { pageMeta } from "@/lib/page-meta";

export const metadata: Metadata = {
  ...pageMeta({
    path: "/terms-and-conditions",
    title: "Terms and Conditions | G.A. Tucker PI",
    description:
      "Terms for using the G.A. Tucker PI website. Licensed California PI (PI188351) in Murrieta. Contact the office with questions.",
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
