import Link from "next/link";
import type { Metadata } from "next";
import NavbarShell from "./components/navbar-shell";
import { Footer } from "./components/footer";

export const metadata: Metadata = {
  title: "Case Not Found — 404",
  description:
    "The page you were looking for went cold. Return to G.A. Tucker PI to explore California private investigator services or call (909) 964-8976.",
  robots: { index: false, follow: true },
};

const TOP_LINKS: Array<{ href: string; label: string; desc: string }> = [
  { href: "/", label: "Home", desc: "California's leading PI" },
  { href: "/investigations", label: "Investigations", desc: "Private investigation services" },
  { href: "/infidelity", label: "Infidelity", desc: "Discreet spousal surveillance" },
  { href: "/background-checks", label: "Background Checks", desc: "Employment & personal" },
  { href: "/child-custody", label: "Child Custody", desc: "Court-ready evidence" },
  { href: "/locations", label: "Locations", desc: "Areas we serve across CA" },
];

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] overflow-x-hidden flex flex-col">
      <NavbarShell />
      <main
        className="relative flex-grow bg-[#0D0D0D] text-[#EDEDED] overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24"
        aria-labelledby="notfound-heading"
      >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#CEA53D]/6 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#CEA53D]/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#CEA53D]/30 to-transparent" />

      <div className="relative z-10 max-w-4xl w-full text-center">
        {/* Eyebrow chip */}
        <div className="inline-flex items-center gap-2.5 mb-8 px-5 py-2 rounded-sm border border-[#CEA53D]/30 bg-[#CEA53D]/5 backdrop-blur-sm">
          <svg
            viewBox="0 0 20 20"
            className="h-4 w-4 text-[#CEA53D] fill-current"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clipRule="evenodd"
            />
          </svg>
          <span
            className="text-[#CEA53D] font-semibold text-xs uppercase tracking-widest"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            Case File Not Found
          </span>
        </div>

        {/* 404 headline */}
        <h1
          id="notfound-heading"
          className="font-black text-[#CEA53D] tracking-tight mb-2"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(6rem, 20vw, 12rem)",
            lineHeight: 0.9,
            textShadow:
              "0 0 20px rgba(206,165,61,0.4), 0 0 40px rgba(206,165,61,0.2)",
          }}
        >
          404
        </h1>

        {/* Subhead */}
        <p
          className="font-black uppercase text-[#EDEDED] mb-4"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
          }}
        >
          This Lead Went Cold
        </p>

        {/* Gold rule */}
        <div
          className="h-0.5 w-24 bg-[#CEA53D] mx-auto mb-6"
          style={{ boxShadow: "0 0 16px rgba(206,165,61,0.6)" }}
        />

        {/* Body copy */}
        <p
          className="text-[#EDEDED]/70 max-w-xl mx-auto mb-10 text-base sm:text-lg leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          The page you were looking for doesn&apos;t exist or was moved. Let&apos;s get you
          back on the trail — pick a service below, or call Tucker directly.
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 min-h-[48px] min-w-[200px] bg-[#CEA53D] text-black font-black uppercase tracking-wider text-sm hover:bg-[#CEA53D]/90 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#CEA53D] focus-visible:outline-offset-2"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              boxShadow: "0 0 20px rgba(206,165,61,0.35)",
            }}
          >
            Back to Home
          </Link>
          <a
            href="tel:909-964-8976"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 min-h-[48px] min-w-[200px] bg-black border-2 border-[#CEA53D] text-[#CEA53D] font-black uppercase tracking-wider text-sm hover:bg-[#CEA53D] hover:text-black transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#CEA53D]"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            aria-label="Call G.A. Tucker PI at 909-964-8976"
          >
            <svg
              viewBox="0 0 20 20"
              className="h-4 w-4 fill-current"
              aria-hidden="true"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            (909) 964-8976
          </a>
        </div>

        {/* Recovery links grid */}
        <div className="mb-6">
          <p
            className="text-[#CEA53D] uppercase tracking-widest text-xs font-semibold mb-6"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            — Or Reopen a Different Case File —
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-3xl mx-auto">
            {TOP_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex flex-col items-start text-left p-4 rounded-sm border border-[#CEA53D]/25 bg-black/40 hover:border-[#CEA53D]/70 hover:bg-[#CEA53D]/5 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#CEA53D]"
              >
                <span
                  className="text-[#EDEDED] font-bold text-sm uppercase tracking-wider mb-1 group-hover:text-[#CEA53D] transition-colors"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {link.label} →
                </span>
                <span
                  className="text-[#EDEDED]/60 text-xs"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {link.desc}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Contact fallback */}
        <p
          className="text-[#EDEDED]/50 text-xs mt-10"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Still can&apos;t find what you need?{" "}
          <Link
            href="/contact"
            className="text-[#CEA53D] hover:text-[#CEA53D]/80 underline underline-offset-2"
          >
            Contact us directly
          </Link>
          .
        </p>
      </div>
      </main>
      <Footer />
    </div>
  );
}
