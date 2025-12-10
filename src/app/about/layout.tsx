import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "California Private Investigator | Greg Tucker",
  description: "Meet Greg Tucker - Licensed California PI with 27+ years of experience, Master's degrees in Forensic Psychology and Criminology. CA License #PI188351.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
