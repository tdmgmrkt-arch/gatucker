import type { Metadata } from "next";
import { pageMeta } from "@/lib/page-meta";
import { faqPageSchema } from "@/lib/schema";
import { allFaqs } from "./data";

export const metadata: Metadata = pageMeta({
  path: "/faqs",
  title: "California Private Investigator FAQs | G.A. Tucker PI",
  description:
    "Answers on licensing, confidentiality, fees, and what an investigation includes. Licensed PI (PI188351). Call with a question.",
});

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
