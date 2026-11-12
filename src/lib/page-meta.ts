import type { Metadata } from "next";

type PageMetaInput = {
  path: string;
  title: string;
  description: string;
};

/**
 * Document title, meta description, Open Graph, and Twitter tags are the same
 * strings. Titles are absolute so the root `%s | G.A. Tucker PI` template
 * cannot append a second brand suffix. Titles stay at 65 characters or fewer.
 * Descriptions stay at 170 or fewer.
 */
export function pageMeta({ path, title, description }: PageMetaInput): Metadata {
  if (title.length > 65) {
    throw new Error(`Title is ${title.length} characters for ${path}: ${title}`);
  }
  if (description.length > 170) {
    throw new Error(`Description is ${description.length} characters for ${path}: ${description}`);
  }

  const url = path === "/" ? "https://gatuckerpi.com/" : `https://gatuckerpi.com${path}`;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
