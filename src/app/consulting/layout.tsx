import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consulting Services | Jury & Trial Consultation | G.A. Tucker PI",
  description: "Expert consulting services for attorneys including trial preparation, jury selection, witness interviews, and comprehensive case analysis in California.",
};

export default function ConsultingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
