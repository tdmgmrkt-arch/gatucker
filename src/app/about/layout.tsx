import type { Metadata } from "next";
import { pageMeta } from "@/lib/page-meta";
import { gregTuckerSchema } from "@/lib/schema";

export const metadata: Metadata = pageMeta({
  path: "/about",
  title: "Greg Tucker, Murrieta Private Investigator | G.A. Tucker PI",
  description:
    "Meet Greg Tucker, a Murrieta investigator with 27+ years of experience. Licensed California PI (PI188351). Call the office.",
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gregTuckerSchema) }}
      />
      {children}
    </>
  );
}
