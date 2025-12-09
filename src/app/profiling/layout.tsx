import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Behavioral Profiling Services | Forensic Psychology | G.A. Tucker PI",
  description: "Professional behavioral profiling and forensic psychology services for legal strategies and insights. Expert analysis by a licensed California PI.",
};

export default function ProfilingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
