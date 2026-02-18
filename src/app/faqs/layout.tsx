import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs | G.A. Tucker PI | California Private Investigator",
  description: "Frequently asked questions about private investigation services. Learn about surveillance, background checks, infidelity investigations, and more from G.A. Tucker PI.",
  openGraph: {
    title: "FAQs | G.A. Tucker PI - California Private Investigator",
    description: "Find answers to common questions about private investigation services, licensing, confidentiality, and more.",
    url: "https://gatuckerpi.com/faqs",
    type: "website",
  },
};

// FAQPage Schema
const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://gatuckerpi.com/faqs#faqpage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you offer free estimates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. At GA Tucker PI, you can receive a free estimate before hiring a private detective."
      }
    },
    {
      "@type": "Question",
      name: "Are you licensed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, GA Tucker PI is licensed by the state of California. Our license number is PI188351. You will work with a licensed private investigator when you hire us."
      }
    },
    {
      "@type": "Question",
      name: "How long does it take to solve a particular case?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The length of a case depends on many different factors. The length of an investigation can vary from a few days to several weeks or months."
      }
    },
    {
      "@type": "Question",
      name: "Will my case be confidential?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, your case at GA Tucker PI will remain confidential. You can trust that your private detective will not share your personal information."
      }
    },
    {
      "@type": "Question",
      name: "How long do background checks take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Background checks usually take one to two business days to pull. We begin by gathering information through our comprehensive check and then have our technical analyst dig further into the content."
      }
    },
    {
      "@type": "Question",
      name: "What is included in a background check?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our comprehensive background checks include criminal records, social media analysis, address history, employment verification, and more."
      }
    },
    {
      "@type": "Question",
      name: "How long does an infidelity investigation typically take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Investigation timelines vary based on your specific circumstances. Some cases require only a few days of surveillance, while others may need several weeks."
      }
    },
    {
      "@type": "Question",
      name: "Is the evidence you gather admissible in court?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All our investigations are conducted legally and ethically. The evidence we gather meets legal standards and can be used in divorce proceedings, custody battles, or other legal matters."
      }
    },
    {
      "@type": "Question",
      name: "What is trial consulting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trial consulting involves using behavioral science methods to help attorneys present criminal and civil cases more effectively. This includes jury selection, witness preparation, and developing persuasive trial strategies."
      }
    },
    {
      "@type": "Question",
      name: "How would a private investigator assist with risk management?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If a person or group of people threatens you or your business, private investigators can assess the threat to find out how credible it is and what you can do about it."
      }
    }
  ]
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
      {children}
    </>
  );
}
