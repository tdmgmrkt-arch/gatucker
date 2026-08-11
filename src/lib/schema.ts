/**
 * Schema.org JSON-LD helpers — keep drop-in schema consistent site-wide.
 */

const BASE_URL = "https://gatuckerpi.com";

export type BreadcrumbItem = { name: string; path: string };

/**
 * Build a BreadcrumbList JSON-LD object.
 * Pass items in order from root → current page. "Home" is prepended automatically.
 *
 * @example
 * breadcrumbSchema([{ name: 'Infidelity Investigations', path: '/infidelity' }])
 */
export function breadcrumbSchema(items: BreadcrumbItem[]) {
  const full: BreadcrumbItem[] = [{ name: "Home", path: "/" }, ...items];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: full.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

/**
 * Build a FAQPage JSON-LD object from question/answer pairs.
 */
export type FaqItem = { question: string; answer: string };

export function faqPageSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}
