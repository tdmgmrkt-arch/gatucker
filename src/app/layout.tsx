import type { Metadata } from "next";
import { Geist, Geist_Mono, Dancing_Script, Space_Mono } from "next/font/google";
import "./globals.css";

// ✅ Load fonts properly
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-dancing-script",
});

// ✅ Add a Courier-style font (Space Mono)
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "Call Tucker | Private Investigator",
  description: "California's leading private investigator — retro-inspired site design.",
};

// ✅ Root Layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${dancingScript.variable}
          ${spaceMono.variable}
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
