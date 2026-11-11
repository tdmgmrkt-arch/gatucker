import type { Metadata } from "next";
import { pageMeta } from "@/lib/page-meta";
import { gregTuckerSchema } from "@/lib/schema";

export const metadata: Metadata = pageMeta({
  path: "/about",
  title: "Murrieta Private Investigator | Greg Tucker",
  description:
    "Meet Greg Tucker - Licensed California PI with 27+ years of experience, Master's degrees in Forensic Psychology and Criminology. CA License #PI188351.",
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
