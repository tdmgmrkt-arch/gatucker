import type { Metadata } from "next";
import { pageMeta } from "@/lib/page-meta";

export const metadata: Metadata = pageMeta({
  path: "/contact",
  title: "California Private Investigator | Contact | G.A. Tucker PI",
  description:
    "Contact Greg Tucker, licensed California private investigator with 27+ years experience. Available 24/7 for confidential consultations. Call 909-964-8976.",
});

// ContactPage Schema
const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://gatuckerpi.com/contact#contactpage",
  name: "Contact G.A. Tucker PI",
  description: "Contact Greg Tucker, licensed California private investigator. Available 24/7 for confidential consultations.",
  url: "https://gatuckerpi.com/contact",
  mainEntity: { "@id": "https://gatuckerpi.com/#organization" }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      {children}
    </>
  );
}
