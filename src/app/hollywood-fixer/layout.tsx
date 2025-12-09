import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hollywood Fixer | Celebrity & Corporate Investigations | G.A. Tucker PI",
  description: "Discreet crisis management and investigations for celebrities, executives, and Fortune 500 companies. Trusted Hollywood fixer with absolute confidentiality.",
};

export default function HollywoodFixerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
