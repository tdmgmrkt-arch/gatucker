import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Background Check Services | Employment & Personal Checks | G.A. Tucker PI",
  description: "Comprehensive background check services in California. Employment verification, criminal records, personal history research using exclusive databases.",
};

export default function BackgroundChecksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
