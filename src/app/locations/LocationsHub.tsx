"use client";

import { motion } from "framer-motion";
import { MapPin, ChevronRight, ArrowRight } from "lucide-react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { StickyCTAButton } from "../components/sticky-cta-button";

// ---------------------------------------------------------------------------
// Data — wired from content-drafts/locations/_hub.md (Phase 2)
// ---------------------------------------------------------------------------

const counties = [
  {
    name: "Riverside County",
    href: "/locations/riverside-county",
    description:
      "GA Tucker PI's home territory. Greg Tucker has operated in Riverside County for years, with deep familiarity with local courts from Murrieta north to the city of Riverside.",
    cities: [
      { name: "Murrieta", href: "/locations/riverside-county/murrieta" },
      { name: "Temecula", href: "/locations/riverside-county/temecula" },
      { name: "Riverside", href: "/locations/riverside-county/riverside" },
    ],
  },
  {
    name: "Los Angeles County",
    href: "/locations/los-angeles-county",
    description:
      "GA Tucker PI accepts cases across LA County, with regular work in Long Beach and Pasadena. One of the most complex court systems in the country — navigated professionally.",
    cities: [
      { name: "Long Beach", href: "/locations/los-angeles-county/long-beach" },
      { name: "Pasadena", href: "/locations/los-angeles-county/pasadena" },
    ],
  },
  {
    name: "San Bernardino County",
    href: "/locations/san-bernardino-county",
    description:
      "The Inland Empire's second county. GA Tucker PI covers the western population centers via the I-15 corridor, with Rancho Cucamonga as the primary anchor city.",
    cities: [
      {
        name: "Rancho Cucamonga",
        href: "/locations/san-bernardino-county/rancho-cucamonga",
      },
    ],
  },
];

const standaloneLocations = [
  {
    name: "San Francisco",
    href: "/locations/san-francisco",
    description:
      "GA Tucker PI holds a California PI license valid statewide. Remote-capable services for Bay Area clients are available immediately; in-person investigation in San Francisco is available when the case warrants it.",
  },
  {
    name: "Las Vegas",
    href: "/locations/las-vegas",
    description:
      "Greg Tucker is a California-licensed PI. For matters that originate in California but involve subjects or evidence in Las Vegas, GA Tucker PI provides California-side investigation, records research, and litigation support.",
  },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function LocationsHub() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: "#0D0D0D" }}>
      <Navbar />

      {/* Hero */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#CEA53D] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#CEA53D] to-transparent" />

        <div className="relative max-w-7xl mx-auto pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-[#CEA53D]/40 rounded-full bg-black/40">
              <MapPin className="w-4 h-4 text-[#CEA53D]" />
              <span
                className="text-[#CEA53D] text-xs uppercase tracking-widest"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Where We Work
              </span>
            </div>

            <h1
              className="mb-6 font-black uppercase tracking-tight leading-none"
              style={{
                fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
                fontSize: "clamp(2.2rem, 5.5vw, 5rem)",
                color: "#EDEDED",
                textShadow: "0 0 40px rgba(206, 165, 61, 0.3)",
              }}
            >
              Private Investigator Service Area — Southern California and Beyond
            </h1>

            <p
              className="text-lg sm:text-xl text-[#EDEDED]/80 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              GA Tucker PI is a licensed California private investigator (CA PI #188351) based
              in Murrieta, CA. Greg Tucker serves clients throughout Southern California, the
              greater Los Angeles metro, the Inland Empire, and select locations statewide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Counties + Cities Grid */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0D0D0D] via-[#1A1A1A] to-[#0D0D0D]">
        <div className="max-w-7xl mx-auto space-y-16">

          {/* County cards */}
          <div>
            <h2
              className="text-3xl sm:text-4xl font-black uppercase text-[#CEA53D] mb-8"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Counties We Serve
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {counties.map((county, i) => (
                <motion.div
                  key={county.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-black/60 border-2 border-[#CEA53D]/30 rounded-lg p-6 hover:border-[#CEA53D]/60 transition-all group"
                >
                  <a href={county.href} className="block mb-4">
                    <h3
                      className="text-xl font-black uppercase text-[#EDEDED] group-hover:text-[#CEA53D] transition-colors flex items-center justify-between"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      {county.name}
                      <ArrowRight className="w-4 h-4 text-[#CEA53D]/40 group-hover:text-[#CEA53D] group-hover:translate-x-1 transition-all" />
                    </h3>
                  </a>
                  <p
                    className="text-[#EDEDED]/60 text-sm leading-relaxed mb-4"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {county.description}
                  </p>
                  <div className="border-t border-[#CEA53D]/20 pt-4 space-y-1">
                    {county.cities.map((city) => (
                      <a
                        key={city.href}
                        href={city.href}
                        className="flex items-center gap-2 text-sm text-[#EDEDED]/50 hover:text-[#CEA53D] transition-colors py-1"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        <ChevronRight className="w-3 h-3 flex-shrink-0" />
                        {city.name}
                      </a>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Standalone cities */}
          <div>
            <h2
              className="text-3xl sm:text-4xl font-black uppercase text-[#CEA53D] mb-8"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Additional Locations
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {standaloneLocations.map((loc, i) => (
                <motion.a
                  key={loc.href}
                  href={loc.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-black/60 border-2 border-[#CEA53D]/30 rounded-lg p-6 hover:border-[#CEA53D]/60 transition-all group flex items-start justify-between"
                >
                  <div>
                    <h3
                      className="text-xl font-black uppercase text-[#EDEDED] group-hover:text-[#CEA53D] transition-colors mb-2"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      {loc.name}
                    </h3>
                    <p
                      className="text-[#EDEDED]/60 text-sm leading-relaxed"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {loc.description}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#CEA53D]/40 group-hover:text-[#CEA53D] group-hover:translate-x-1 transition-all flex-shrink-0 mt-1 ml-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* How service area affects your case */}
          <div className="space-y-8">
            <h2
              className="text-3xl sm:text-4xl font-black uppercase text-[#CEA53D]"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              How Service Area Affects Your Case
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  label: "Surveillance",
                  body: "Proximity matters. The further from Murrieta, the more a case may involve travel time and coordinated logistics. Greg will discuss this during your initial consultation so there are no surprises.",
                },
                {
                  label: "Background Checks & Skip Traces",
                  body: "Geography is largely irrelevant. Subjects anywhere in the United States can be researched using licensed investigative databases. Turnaround is typically 1–2 business days.",
                },
                {
                  label: "Court-Related Work",
                  body: "GA Tucker PI is familiar with courthouse procedures in Riverside County Superior Court, Los Angeles Superior Court, and San Bernardino County Superior Court.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-black/40 border border-[#CEA53D]/20 rounded-lg p-5"
                >
                  <p
                    className="text-[#CEA53D] font-bold text-sm uppercase tracking-wide mb-2"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="text-[#EDEDED]/70 text-sm leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-[#CEA53D]/30"
        style={{ backgroundColor: "#0D0D0D" }}
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
                fontFamily: "'Bebas Neue', sans-serif",
                textShadow: "0 0 30px rgba(206, 165, 61, 0.3)",
              }}
            >
              Don&apos;t See Your City?
            </h2>
            <p
              className="text-[#EDEDED]/80 text-lg mb-8 leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Greg Tucker takes cases throughout California and handles select
              cross-border matters. Call for a confidential consultation.
            </p>
            <a
              href="/contact"
              className="bg-[#CEA53D] text-black px-10 py-4 font-black uppercase text-sm tracking-wider transition-all hover:bg-[#CEA53D]/90 active:scale-95 inline-flex items-center gap-3 min-h-[44px]"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                boxShadow: "0 0 30px rgba(206, 165, 61, 0.4)",
              }}
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <StickyCTAButton />
    </div>
  );
}
