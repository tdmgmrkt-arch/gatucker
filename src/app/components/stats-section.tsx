"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Target, UserCheck, Timer } from "lucide-react";

const stats = [
  { icon: Target, number: "95%", title: "Success Rate" },
  { icon: Award, number: "20+", title: "Years Experience" },
  { icon: UserCheck, number: "500+", title: "Cases Solved" },
  { icon: Timer, number: "24/7", title: "Availability" },
];

export function StatsSection() {
  return (
    <section className="relative py-24 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* ✅ Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/dark-alley.webp"
            alt="Testimonials Background"
            fill
            className="object-cover object-center brightness-[0.6]"
            quality={90}
            priority={false}
          />
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/70 via-[#0D0D0D]/80 to-[#0D0D0D]/95 mix-blend-multiply z-10" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
          {/* Left: Noir Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative"
          >
            <div
              className="relative p-3 md:p-4 bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] rounded-xl shadow-2xl border-2 border-[#CEA53D]/30"
              style={{
                boxShadow:
                  "0 0 30px rgba(255, 215, 0, 0.2), inset 0 0 20px rgba(255, 215, 0, 0.05)",
              }}
            >
              <div className="relative rounded-2xl overflow-hidden group">
                <Image
                  src="/ga.tucker.chasing.truth.webp"
                  alt="California Private Investigator Consultation"
                  width={800}
                  height={800}
                  className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
                />
                {/* Noir Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/40 group-hover:from-black/60 group-hover:via-black/50 group-hover:to-black/30 transition-all duration-700"></div>
              </div>
            </div>

            {/* Gold Glow Behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 rounded-full bg-[#CEA53D] opacity-5 -z-10 animate-pulse-slow"></div>
          </motion.div>

          {/* Right: Stats & Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h2
              className="mb-4 font-black uppercase tracking-tight leading-tight"
              style={{
                fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                color: "#FFF",
              }}
            >
              CHASING TRUTH
            </h2>

            <div
              className="h-1 w-32 bg-[#CEA53D] my-5"
              style={{
                boxShadow:
                  "0 0 20px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 215, 0, 0.4)",
              }}
            ></div>

            <p
              className="mb-10 text-[#EDEDED]/70 uppercase tracking-[0.2em] text-sm"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              We Specialize in Attorney and Legal Services
            </p>

            {/* Stats Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="bg-black/80 backdrop-blur-sm border-2 border-[#CEA53D]/30 rounded-xl p-6 hover:border-[#CEA53D] transition-colors duration-300"
                  style={{
                    boxShadow:
                      "0 0 20px rgba(255, 215, 0, 0.15), inset 0 0 30px rgba(255, 215, 0, 0.05)",
                  }}
                >
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <stat.icon
                      className="w-6 h-6 text-[#CEA53D]"
                      strokeWidth={2.5}
                    />
                    <div
                      className="text-[#CEA53D] font-bold"
                      style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: "2.5rem",
                        lineHeight: "1",
                      }}
                    >
                      {stat.number}
                    </div>
                  </div>
                  <p
                    className="text-[#EDEDED]/70 text-center uppercase tracking-wider text-xs font-light"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {stat.title}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Confidentiality Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-black/80 border-2 border-[#CEA53D]/30 rounded-xl p-6 md:p-8"
              style={{
                boxShadow:
                  "0 0 25px rgba(255, 215, 0, 0.2), inset 0 0 30px rgba(255, 215, 0, 0.05)",
              }}
            >
              <p
                className="text-[#EDEDED] italic leading-relaxed text-sm md:text-base font-light"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                &ldquo;Confidential private investigation services are exactly
                that, <span className="text-[#CEA53D]">CONFIDENTIAL</span>. Our
                clients are the only persons privy to the information we obtain.
                As our client, your anonymity is maintained throughout our
                investigations, ensuring you peace of mind.&rdquo;
              </p>

              <div className="grid grid-cols-[auto_1fr] items-center gap-3 pt-5">
                {/* Left Column: Thumbnail Image */}
                <div className="flex justify-center md:justify-start">
                  <Image
                    src="/gatuckersignaturethumbnail.webp"
                    alt="G.A. Tucker Portrait"
                    width={70}
                    height={70}
                    className="rounded-lg shadow-lg object-cover"
                  />
                </div>

                {/* Right Column: Signature and Title */}
                <div className="flex flex-col justify-center leading-none">
                  <Image
                    src="/greg-tucker-signature-.webp"
                    alt="G.A. Tucker PI Signature"
                    width={180}
                    height={45}
                    className="h-auto relative mb-0"
                  />
                  <p className="text-[#CEA53D] font-semibold tracking-wider uppercase text-xs md:text-sm mt-1">
                    CEO AND LEAD INVESTIGATOR
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
