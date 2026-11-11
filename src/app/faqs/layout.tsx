import type { Metadata } from "next";
import { faqPageSchema } from "@/lib/schema";
import { allFaqs } from "./data";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://gatuckerpi.com/faqs",
  },
  title: "Private Investigator FAQs",
  description: "Frequently asked questions about private investigation services. Learn about surveillance, background checks, infidelity investigations, and more from G.A. Tucker PI.",
  openGraph: {
    title: "FAQs | G.A. Tucker PI - California Private Investigator",
    description: "Find answers to common questions about private investigation services, licensing, confidentiality, and more.",
    url: "https://gatuckerpi.com/faqs",
    type: "website",
  },
};

const faqSchema = {
  ...faqPageSchema(allFaqs),
  "@id": "https://gatuckerpi.com/faqs#faqpage",
};

export default function FAQsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
