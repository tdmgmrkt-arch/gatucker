"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, Shield, MapPin, ChevronRight, ArrowRight } from "lucide-react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { StickyCTAButton } from "./sticky-cta-button";
import { RequestServiceForm } from "./request-service-form";
import { FAQAccordion } from "./faq-accordion";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface LocationService {
  title: string;
  description: string;
  href: string;
}

export interface LocationCourthouse {
  name: string;
  address: string;
}

export interface LocationFAQ {
  question: string;
  answer: string;
}

export interface LocationPageProps {
  /** Primary H1 — the exact text the seo-writer supplies */
  h1: string;
  /** Display name for the region, county, or city (used in section headings) */
  region: string;
  /** True for city-level pages; false for county/hub pages */
  isCity: boolean;
  /** County name — supplied on city pages for the breadcrumb / up-link */
  parentCounty?: {
    name: string;
    href: string;
  };
  /** Service links to surface on this page */
  services: LocationService[];
  /** Nearby courthouses (supply [] for non-city pages or if none relevant) */
  courthouses: LocationCourthouse[];
  /** 3–6 FAQs; triggers FAQPage JSON-LD in the parent page.tsx */
  faqs: LocationFAQ[];
  /**
   * Rich body copy blocks injected by seo-writer.
   * Each block has a heading and paragraphs array.
   * Supply [] for scaffolding phase — placeholder is rendered instead.
   */
  bodyContent: Array<{
    heading: string;
    paragraphs: string[];
  }>;
  /** JSON-LD object — fully assembled in the parent page.tsx, injected here */
  schema: Record<string, unknown>;
  /** Last-updated display string, e.g. "August 2026" */
  lastUpdated?: string;
  /** Hero background image path (from /public), e.g. "/riverside-county-hero.webp" */
  heroImage?: string;
  /** Alt text for hero image; falls back to a sensible default if omitted */
  heroImageAlt?: string;
}

// ---------------------------------------------------------------------------
// Shared style constants (match existing service pages)
// ---------------------------------------------------------------------------

const BG_DARK = "#0D0D0D";
const TEXT_LIGHT = "#EDEDED";

const headingStyle: React.CSSProperties = {
  fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
};

const bodyStyle: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
};

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function Breadcrumb({
  region,
  isCity,
  parentCounty,
}: {
  region: string;
  isCity: boolean;
  parentCounty?: LocationPageProps["parentCounty"];
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-2 text-sm mb-6"
      style={bodyStyle}
    >
      <Link
        href="/"
        className="text-[#EDEDED]/50 hover:text-[#CEA53D] transition-colors"
      >
        Home
      </Link>
      <ChevronRight className="w-3 h-3 text-[#EDEDED]/30 flex-shrink-0" />
      <Link
        href="/locations"
        className="text-[#EDEDED]/50 hover:text-[#CEA53D] transition-colors"
      >
        Locations
      </Link>
      {isCity && parentCounty && (
        <>
          <ChevronRight className="w-3 h-3 text-[#EDEDED]/30 flex-shrink-0" />
          <a
            href={parentCounty.href}
            className="text-[#EDEDED]/50 hover:text-[#CEA53D] transition-colors"
          >
            {parentCounty.name}
          </a>
        </>
      )}
      <ChevronRight className="w-3 h-3 text-[#EDEDED]/30 flex-shrink-0" />
      <span className="text-[#CEA53D]">{region}</span>
    </nav>
  );
}

function ServicesSidebar({ services }: { services: LocationService[] }) {
  return (
    <div className="bg-black/60 border-2 border-[#CEA53D]/30 rounded-lg p-5">
      <h3
        className="text-xl font-black uppercase text-[#CEA53D] mb-4 pb-3 border-b border-[#CEA53D]/30"
        style={headingStyle}
      >
        Our Services
      </h3>
      <nav className="space-y-1">
        {services.map((s) => (
          <a
            key={s.href}
            href={s.href}
            className="flex items-center gap-2 px-4 py-2.5 rounded transition-all text-sm text-[#EDEDED]/70 hover:text-[#CEA53D] hover:bg-[#CEA53D]/5 border-l-[3px] border-transparent hover:border-[#CEA53D]"
            style={bodyStyle}
          >
            {s.title}
          </a>
        ))}
      </nav>
    </div>
  );
}

function QuickContactSidebar() {
  return (
    <div className="bg-black/60 border-2 border-[#CEA53D]/30 rounded-lg p-5">
      <h3
        className="text-xl font-black uppercase text-[#CEA53D] mb-4 pb-3 border-b border-[#CEA53D]/30"
        style={headingStyle}
      >
        Quick Contact
      </h3>
      <div className="space-y-3">
        <a
          href="tel:909-964-8976"
          className="flex items-center gap-3 text-[#EDEDED]/80 hover:text-[#CEA53D] transition-colors"
        >
          <Phone className="w-4 h-4 text-[#CEA53D] flex-shrink-0" />
          <span className="text-sm" style={bodyStyle}>
            909-964-8976
          </span>
        </a>
        <a
          href="mailto:gatuckerpi@gmail.com"
          className="flex items-center gap-3 text-[#EDEDED]/80 hover:text-[#CEA53D] transition-colors"
        >
          <Mail className="w-4 h-4 text-[#CEA53D] flex-shrink-0" />
          <span className="text-sm break-all" style={bodyStyle}>
            gatuckerpi@gmail.com
          </span>
        </a>
      </div>
      <a
        href="#contact"
        className="mt-6 w-full bg-[#CEA53D] text-black px-4 py-3 font-black uppercase text-sm tracking-wider transition-all hover:bg-[#CEA53D]/90 active:scale-95 flex items-center justify-center gap-2 min-h-[44px]"
        style={{
          ...headingStyle,
          boxShadow: "0 0 20px rgba(206, 165, 61, 0.3)",
        }}
      >
        Request Service
      </a>
    </div>
  );
}

function LicenseBadgeSidebar() {
  return (
    <div className="bg-black/60 border-2 border-[#CEA53D]/30 rounded-lg p-5 text-center">
      <Shield className="w-12 h-12 text-[#CEA53D] mx-auto mb-3" />
      <p className="text-[#EDEDED]/70 text-xs" style={bodyStyle}>
        California PI License
      </p>
      <p className="text-[#CEA53D] font-bold text-sm mt-1" style={bodyStyle}>
        #188351
      </p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export function LocationPage({
  h1,
  region,
  isCity,
  parentCounty,
  services,
  courthouses,
  faqs,
  bodyContent,
  schema: _schema, // consumed by parent page.tsx for JSON-LD injection
  lastUpdated,
  heroImage,
  heroImageAlt,
}: LocationPageProps) {
  const isContentReady = bodyContent.length > 0;

  return (
    <div className={`min-h-screen bg-[${BG_DARK}] overflow-x-hidden`} style={{ backgroundColor: BG_DARK }}>
      {/* JSON-LD injected server-side in parent page.tsx — see schema prop */}
      <Navbar />

      {/* ------------------------------------------------------------------ */}
      {/* Hero Section                                                        */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-[#0D0D0D] to-[#0D0D0D]">
        {heroImage && (
          <>
            <Image
              src={heroImage}
              alt={heroImageAlt || `${region} — GA Tucker PI service area`}
              fill
              priority
              fetchPriority="high"
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/75 to-black/95" />
          </>
        )}

        {/* Gold gradient borders */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#CEA53D] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#CEA53D] to-transparent" />

        {/* Subtle ambient glow */}
        <motion.div
          className="absolute inset-0 opacity-10 pointer-events-none"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(206, 165, 61, 0.2) 0%, transparent 60%)",
              "radial-gradient(circle at 80% 50%, rgba(206, 165, 61, 0.2) 0%, transparent 60%)",
              "radial-gradient(circle at 20% 50%, rgba(206, 165, 61, 0.2) 0%, transparent 60%)",
            ],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative max-w-7xl mx-auto pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* MapPin badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-[#CEA53D]/40 rounded-full bg-black/40">
              <MapPin className="w-4 h-4 text-[#CEA53D]" />
              <span
                className="text-[#CEA53D] text-xs uppercase tracking-widest"
                style={headingStyle}
              >
                {isCity ? "City Service Area" : "County Service Area"}
              </span>
            </div>

            <h1
              className="mb-6 font-black uppercase tracking-tight leading-none"
              style={{
                ...headingStyle,
                fontSize: "clamp(2.2rem, 5.5vw, 5rem)",
                color: TEXT_LIGHT,
                textShadow: "0 0 40px rgba(206, 165, 61, 0.3)",
              }}
            >
              {h1}
            </h1>

            {lastUpdated && (
              <p
                className="text-[#EDEDED]/40 text-xs uppercase tracking-wider mb-4"
                style={bodyStyle}
              >
                Last Updated: {lastUpdated}
              </p>
            )}

            <p
              className="text-lg sm:text-xl text-[#EDEDED]/80 max-w-3xl mx-auto leading-relaxed"
              style={bodyStyle}
            >
              {/* CONTENT: hero_subtitle from content-drafts/locations/{slug}.md */}
              Licensed California private investigator Greg A. Tucker serves {region} with
              discreet, professional investigations. CA License #PI188351.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Main Content Grid                                                   */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0D0D0D] via-[#1A1A1A] to-[#0D0D0D]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">

            {/* Sidebar */}
            <aside className="lg:col-span-3">
              <div className="lg:sticky lg:top-24 space-y-6">
                <ServicesSidebar services={services} />
                <QuickContactSidebar />
                <LicenseBadgeSidebar />
              </div>
            </aside>

            {/* Main */}
            <main className="lg:col-span-9 space-y-16">

              {/* Breadcrumb */}
              <Breadcrumb region={region} isCity={isCity} parentCounty={parentCounty} />

              {/* Body copy blocks (seo-writer content) */}
              {isContentReady ? (
                bodyContent.map((block, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <h2
                      className="text-3xl sm:text-4xl font-black uppercase text-[#CEA53D] mb-6"
                      style={headingStyle}
                    >
                      {block.heading}
                    </h2>
                    <div className="space-y-4 text-[#EDEDED]/80" style={bodyStyle}>
                      {block.paragraphs.map((p, j) => (
                        <p key={j} className="leading-relaxed">
                          {p}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))
              ) : (
                /* -------------------------------------------------------- */
                /* PLACEHOLDER — remove once bodyContent is wired in        */
                /* -------------------------------------------------------- */
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="border-2 border-dashed border-[#CEA53D]/30 rounded-lg p-8 bg-black/20"
                >
                  <p
                    className="text-[#CEA53D]/60 text-sm uppercase tracking-wider font-bold mb-3"
                    style={headingStyle}
                  >
                    Content Placeholder
                  </p>
                  <p className="text-[#EDEDED]/40 text-sm leading-relaxed" style={bodyStyle}>
                    {/* CONTENT: body sections from content-drafts/locations/{slug}.md */}
                    Body copy for <strong className="text-[#EDEDED]/60">{region}</strong> drops
                    in here from the seo-writer content draft. Each section renders as a
                    separate block with an H2 heading + paragraphs.
                  </p>
                </motion.div>
              )}

              {/* ---------------------------------------------------------- */}
              {/* Services offered in this area                              */}
              {/* ---------------------------------------------------------- */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-[#CEA53D]/10 to-black/40 border-2 border-[#CEA53D]/40 rounded-lg p-8"
              >
                <h2
                  className="text-3xl sm:text-4xl font-black uppercase text-[#CEA53D] mb-6"
                  style={headingStyle}
                >
                  Investigation Services in {region}
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {services.map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      className="group flex items-start gap-4 bg-black/40 border-l-4 border-[#CEA53D]/60 p-4 hover:border-[#CEA53D] hover:bg-[#CEA53D]/5 transition-all"
                    >
                      <div className="flex-1">
                        <h3
                          className="text-base font-bold text-[#EDEDED] group-hover:text-[#CEA53D] transition-colors mb-1"
                          style={headingStyle}
                        >
                          {s.title}
                        </h3>
                        <p
                          className="text-[#EDEDED]/60 text-xs leading-relaxed"
                          style={bodyStyle}
                        >
                          {s.description}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#CEA53D]/40 group-hover:text-[#CEA53D] flex-shrink-0 mt-1 transition-colors" />
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* ---------------------------------------------------------- */}
              {/* Courthouses (city pages only)                              */}
              {/* ---------------------------------------------------------- */}
              {courthouses.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2
                    className="text-3xl sm:text-4xl font-black uppercase text-[#CEA53D] mb-6"
                    style={headingStyle}
                  >
                    Local Courthouses &amp; Legal Venues
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {courthouses.map((c) => (
                      <div
                        key={c.name}
                        className="flex items-start gap-3 bg-black/40 border border-[#CEA53D]/20 rounded-lg p-4"
                      >
                        <MapPin className="w-5 h-5 text-[#CEA53D] flex-shrink-0 mt-0.5" />
                        <div>
                          <p
                            className="text-[#EDEDED] font-bold text-sm"
                            style={bodyStyle}
                          >
                            {c.name}
                          </p>
                          <p
                            className="text-[#EDEDED]/50 text-xs mt-0.5"
                            style={bodyStyle}
                          >
                            {c.address}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* ---------------------------------------------------------- */}
              {/* Contact Form                                               */}
              {/* ---------------------------------------------------------- */}
              <div id="contact">
                <RequestServiceForm defaultService="General Inquiry" />
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* FAQs — full width                                                  */}
      {/* ------------------------------------------------------------------ */}
      {faqs.length > 0 && (
        <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1A1A1A] via-[#0D0D0D] to-[#1A1A1A]">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-3xl sm:text-4xl font-black uppercase text-[#CEA53D] mb-8"
                style={headingStyle}
              >
                Frequently Asked Questions
              </h2>
              <FAQAccordion faqs={faqs} />
            </motion.div>
          </div>
        </section>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* Final CTA                                                          */}
      {/* ------------------------------------------------------------------ */}
      <section
        className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-[#CEA53D]/30"
        style={{ backgroundColor: BG_DARK }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-4xl sm:text-5xl font-black uppercase text-[#EDEDED] mb-6"
              style={{
                ...headingStyle,
                textShadow: "0 0 30px rgba(206, 165, 61, 0.3)",
              }}
            >
              {/* CONTENT: cta_headline from content-drafts/locations/{slug}.md */}
              Get the Truth in {region}
            </h2>
            <p
              className="text-[#EDEDED]/80 text-lg mb-8 leading-relaxed"
              style={bodyStyle}
            >
              {/* CONTENT: cta_body from content-drafts/locations/{slug}.md */}
              Contact Greg A. Tucker for a confidential consultation. California PI License
              #PI188351. Available 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:909-964-8976"
                className="bg-[#CEA53D] text-black px-8 py-4 font-black uppercase text-sm tracking-wider transition-all hover:bg-[#CEA53D]/90 active:scale-95 inline-flex items-center gap-3 min-h-[44px]"
                style={{
                  ...headingStyle,
                  boxShadow: "0 0 30px rgba(206, 165, 61, 0.4)",
                }}
              >
                <Phone className="w-5 h-5" />
                Call 909-964-8976
              </a>
              <a
                href="/contact"
                className="bg-black border-2 border-[#CEA53D] text-[#CEA53D] px-8 py-4 font-black uppercase text-sm tracking-wider transition-all hover:bg-[#CEA53D] hover:text-black active:scale-95 inline-flex items-center gap-3 min-h-[44px]"
                style={headingStyle}
              >
                <Mail className="w-5 h-5" />
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <StickyCTAButton />
    </div>
  );
}
