"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Shield, Award, FileCheck } from "lucide-react";
import Image from "next/image";

const credentials = [
  {
    icon: Shield,
    title: "Former Law Enforcement Officer",
    description: "Professionally certified investigator",
  },
  {
    icon: FileCheck,
    title: "Licensed by State of CA",
    description: "California PI License #188351",
  },
  {
    icon: CheckCircle2,
    title: "Privacy Always Remains",
    description: "Your information is safe",
  },
  {
    icon: Award,
    title: "Findings Are Private",
    description: "Confidentiality guaranteed",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-[#1A1A1A] via-[#0D0D0D] to-[#1A1A1A] overflow-hidden"
      style={{ padding: "clamp(4rem, 10vw, 8rem) clamp(1rem, 4vw, 2rem)" }}
    >
      {/* Decorative gradient lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#CEA53D]/40 to-transparent z-20" />
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#CEA53D]/20 to-transparent blur-sm z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#CEA53D]/40 to-transparent z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#CEA53D]/20 to-transparent blur-sm z-20" />

      {/* Background glow - fluid sizing */}
      <div
        className="absolute top-1/3 right-0 w-[min(600px,70vw)] h-[min(600px,70vw)] bg-[#CEA53D]/10 rounded-full blur-[140px] animate-pulse"
        style={{ animationDuration: "5s" }}
      />
      <div className="absolute bottom-1/3 left-0 w-[min(600px,70vw)] h-[min(600px,70vw)] bg-[#FFA500]/8 rounded-full blur-[140px]" />

      <div className="mx-auto relative z-10" style={{ maxWidth: "min(100%, 80rem)" }}>
        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 items-center" style={{ gap: "clamp(2rem, 5vw, 5rem)" }}>
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
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
                  src="/gatuckerbwport.png"
                  alt="Greg Tucker - Licensed Private Investigator"
                  width={800}
                  height={800}
                  className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div>
                    <h3
                      className="text-white text-xl font-bold mb-1"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      Greg Tucker
                    </h3>
                    <p
                      className="text-[#CEA53D] text-sm font-bold uppercase"
                      style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        letterSpacing: "0.1em",
                        textShadow:
                          "0 0 10px rgba(255, 215, 0, 0.8)",
                      }}
                    >
                      Licensed Private Investigator
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* License Badge */}
            <div
              className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 md:-bottom-6 md:-right-6 bg-black border-3 sm:border-4 border-[#CEA53D] px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-sm transform rotate-2 hover:rotate-0 transition-all duration-300 hover:scale-105"
              style={{
                boxShadow:
                  "0 0 30px rgba(255, 215, 0, 0.6), inset 0 0 20px rgba(255, 215, 0, 0.2)",
              }}
            >
              <p
                className="text-[#CEA53D] font-black tracking-wider uppercase text-xs sm:text-sm md:text-base whitespace-nowrap"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  textShadow:
                    "0 0 10px rgba(255, 215, 0, 0.8)",
                }}
              >
                License #188351
              </p>
            </div>

            {/* Don't Be a Sucker Badge */}
            <div className="absolute top-3 -left-3 sm:-top-4 sm:-left-4 md:-top-15 md:-left-6 bg-gradient-to-r from-[#000000] to-[#000000] p-1.5 sm:p-2 md:p-3 rounded-xl shadow-[0_10px_40px_rgba(231,173,65,0.3)] transform -rotate-2 hover:rotate-0 transition-all duration-300 hover:scale-105">
              <Image
                src="/dontbeasucker.webp"
                alt="Don't be a sucker"
                width={300}
                height={150}
                className="w-32 sm:w-48 md:w-64 h-auto object-contain rounded-lg"
              />
            </div>
          </motion.div>

          {/* Right Column Text */}
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
              Introducing G.A. Tucker PI
            </h2>

            <p
              className="mb-3 text-[#CEA53D] text-xs md:text-sm uppercase font-bold"
              style={{
                fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
                letterSpacing: "0.15em",
                textShadow:
                  "0 0 15px rgba(255, 215, 0, 0.8), 0 0 30px rgba(255, 215, 0, 0.5)",
              }}
            >
              CEO AND LEAD INVESTIGATOR
            </p>

            <div
              className="h-1 w-32 bg-[#CEA53D] my-5"
              style={{
                boxShadow:
                  "0 0 15px rgba(255, 215, 0, 0.7), 0 0 30px rgba(255, 215, 0, 0.4)",
              }}
            ></div>

            <p
              className="mb-8 text-[#EDEDED]/85 font-light"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(0.95rem, 0.9rem + 0.5vw, 1.1rem)",
                lineHeight: "1.8",
              }}
            >
              G.A. Tucker P.I. Investigative Services L.L.C&apos;s investigative
              team uses both experience and education to effectively solve
              investigative issues in an effective and professional manner. Get
              in touch with our team to hire a private detective in Los Angeles,
              CA.
            </p>

            {/* Credentials */}
            <div className="grid sm:grid-cols-2 mt-8" style={{ gap: "clamp(1rem, 2vw, 1.5rem) clamp(1.5rem, 3vw, 2rem)" }}>
              {credentials.map((cred, index) => (
                <motion.div
                  key={cred.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="group relative flex items-start p-5 bg-black/40 rounded-sm backdrop-filter backdrop-blur-sm border-2 border-[#CEA53D]/30 hover:border-[#CEA53D]/70 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                  style={{
                    boxShadow: "0 0 20px rgba(255, 215, 0, 0.1)",
                  }}
                >
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-sm bg-black border-2 border-[#CEA53D]/50 flex items-center justify-center group-hover:border-[#CEA53D] transition-colors mr-4"
                    style={{
                      boxShadow: "0 0 15px rgba(255, 215, 0, 0.3)",
                    }}
                  >
                    <cred.icon
                      className="w-6 h-6 text-[#CEA53D]"
                      strokeWidth={2.5}
                      style={{
                        filter:
                          "drop-shadow(0 0 4px rgba(255, 215, 0, 0.8))",
                      }}
                    />
                  </div>
                  <div>
                    <h4
                      className="text-[#EDEDED] font-bold mb-2 tracking-wide group-hover:text-[#F0C674] transition-colors"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "1.05rem",
                        lineHeight: "1.4",
                      }}
                    >
                      {cred.title}
                    </h4>
                    <p
                      className="text-[#EDEDED]/80 text-sm font-light"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        lineHeight: "1.6",
                      }}
                    >
                      {cred.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ---------- QUOTE BLOCK (Styled Like Confidentiality Note) ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-black/80 border-2 border-[#CEA53D]/30 rounded-xl p-5 sm:p-6 md:p-8 mt-12 sm:mt-16"
          style={{
            boxShadow:
              "0 0 25px rgba(255, 215, 0, 0.2), inset 0 0 30px rgba(255, 215, 0, 0.05)",
          }}
        >
          <p
            className="text-[#EDEDED] italic leading-relaxed text-base sm:text-lg md:text-xl font-light text-center md:text-left"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            &ldquo;No matter what problem you face, you have found an investigation
            agency that can help you.&rdquo;
          </p>

          <div className="grid grid-cols-[auto_1fr] items-center gap-3 pt-5 justify-start">
            {/* Left: Portrait */}
            <div className="flex justify-start">
              <Image
                src="/gatuckersignaturethumbnail.webp"
                alt="G.A. Tucker Portrait"
                width={70}
                height={70}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>

            {/* Right: Signature & Title */}
            <div className="flex flex-col items-start leading-none">
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
      </div>
    </section>
  );
}
