import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | G.A. Tucker PI",
  description: "Terms of use for the G.A. Tucker PI website. Please read carefully before using gatuckerpi.com. Last updated May 29, 2025.",
  alternates: { canonical: "/terms-and-conditions" },
  openGraph: {
    title: "Terms and Conditions | G.A. Tucker PI",
    description: "Terms of use for the G.A. Tucker PI website.",
    url: "https://gatuckerpi.com/terms-and-conditions",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
