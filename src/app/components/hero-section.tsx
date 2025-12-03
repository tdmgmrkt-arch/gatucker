"use client";

import { motion } from "framer-motion";
import { ChevronDown, Phone, Shield } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Mobile Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="md:hidden absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "40% 35%", transform: "scale(1.05)" }}
        >
          <source src="/tuckervidheromobile1.webm" type="video/webm" />
        </video>
        {/* Desktop Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hidden md:block absolute inset-0 w-full h-full object-cover object-right-top"
        >
          <source src="/tuckervidhero3.webm" type="video/webm" />
        </video>
        {/* Warm-toned overlay for neon aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0a00]/40 via-[#0D0D0D]/30 to-[#0D0D0D]" />
      </div>

      {/* VHS Grain Overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.15] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='6.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          animation: "grain 8s steps(10) infinite",
        }}
      />

      {/* Background Glows (Bronze Tone) */}
      <div
        className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-[#3A2A0C]/8 rounded-full blur-[60px] z-0"
        style={{ animationDuration: "4s" }}
      />

      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-[#FF6B35]/15 rounded-full blur-[120px] z-0" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center w-full">
          {/* License Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="absolute top-25 left-1/2 -translate-x-1/2 md:relative md:top-auto md:left-auto md:translate-x-0 inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 mb-0 md:mb-6 bg-black/40 backdrop-blur-sm border-2 border-[#CEA53D]/40 rounded-sm"
            style={{
              boxShadow:
                "0 0 15px rgba(206,165,61,0.25), inset 0 0 10px rgba(206,165,61,0.1)",
            }}
          >
            <Shield
              className="w-4 h-4 sm:w-5 sm:h-5 text-[#CEA53D] flex-shrink-0"
              style={{ filter: "drop-shadow(0 0 3px #CEA53D)" }}
            />
            <span
              className="text-[#CEA53D] text-[0.65rem] sm:text-xs md:text-sm font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase"
              style={{
                fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
                textShadow:
                  "0 0 4px rgba(206,165,61,0.5), 0 0 8px rgba(206,165,61,0.3)",
              }}
            >
              California Licensed PI #188351
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="mb-6 leading-[0.95]">
              {/* Top Line */}
              <span
                className="block mb-2"
                style={{
                  fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
                  fontSize: "clamp(2rem, 5vw, 4rem)",
                  fontWeight: 900,
                  color: "#FFFF",
                  textShadow:
                    "0 0 10px rgba(255,165,0,0.4), 0 0 20px rgba(255,165,0,0.2), 2px 2px 0 rgba(0,0,0,0.6)",
                  letterSpacing: "0.05em",
                }}
              >
                HIRE CALIFORNIA&apos;S LEADING
              </span>

              {/* PRIVATE INVESTIGATOR */}
              <span
                className="block relative animate-neon-flicker"
                style={{
                  fontFamily: "'Bebas Neue', 'Anton', sans-serif",
                  fontSize: "clamp(3.5rem, 10vw, 8rem)",
                  fontWeight: 900,
                  color: "#CEA53D",
                  textShadow:
                    "0 0 3px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.7), 0 0 14px rgba(255, 255, 255, 0.5), 2px 2px 0 rgba(0,0,0,0.6)",
                  letterSpacing: "0.02em",
                  WebkitTextStroke: "1px rgba(0, 0, 0, 0.6)",
                  mixBlendMode: "normal", // FIXED: stops the yellow blending
                }}
              >
                PRIVATE INVESTIGATOR
              </span>
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6 sm:mb-10"
          >
            <p
              className="text-[#CEA53D]/90 text-sm md:text-base"
              style={{
                fontFamily: "var(--font-space-mono)",
                letterSpacing: "0.1em",
                textShadow: "0 0 3px rgba(255,165,0,0.3)",
              }}
            >
              DON&apos;T BE A SUCKER!
            </p>

            <p
              className="text-[#EB0A08] mb-2"
              style={{
                fontFamily: "var(--font-dancing-script)",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 700,
                textShadow:
                "0 0 6px rgba(255, 30, 30, 0.7), 0 0 12px rgba(255, 30, 30, 0.4), 1px 1px 0 rgba(0,0,0,0.6)",
                transform: "rotate(-3deg)",
              }}
            >
              Call Tucker!
            </p>
          </motion.div>

          {/* Phone Number */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8 sm:mb-12"
          >
            <a href="tel:909-345-1350" className="inline-block group">
              <div className="relative">
                <div
                  className="absolute -inset-4 bg-[#8B6C2F]/10 blur-2xl rounded-full animate-pulse"
                  style={{ animationDuration: "2s" }}
                />
                <span
                  className="relative block animate-neon-flicker-subtle group-hover:scale-105"
                  style={{
                    fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
                    fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                    fontWeight: 900,
                    color: "#FFFF",
                    textShadow:
                    "0 0 10px rgba(255,165,0,0.4), 0 0 20px rgba(255,165,0,0.2), 2px 2px 0 rgba(0,0,0,0.6)",
                    letterSpacing: "0.1em",
                    transition: "all 0.3s ease",
                  }}
                >
                  (909) 345-1350
                </span>
              </div>
            </a>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 px-4"
          >
            <a href="tel:909-345-1350" className="group relative inline-block w-full sm:w-auto max-w-sm">
              <div
                className="absolute -inset-1 bg-gradient-to-r from-[#8B6C2F] to-[#FFA500] blur-md opacity-70 group-hover:opacity-100 transition duration-300"
                style={{ animation: "pulse 2s infinite" }}
              />
              <button
                className="relative w-full px-8 sm:px-10 py-4 sm:py-4 bg-black border-4 border-[#CEA53D] font-black text-[#CEA53D] uppercase tracking-wider transition-all duration-300 group-hover:bg-[#CEA53D] group-hover:text-black group-hover:scale-105 touch-manipulation"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(1.1rem, 2.5vw, 1.8rem)",
                  boxShadow:
                    "0 0 15px rgba(130,100,35,0.3), inset 0 0 8px rgba(130,100,35,0.15)",
                  textShadow: "0 0 5px rgba(130,100,35,0.4)",
                }}
              >
                <Phone className="inline-block w-5 h-5 sm:w-6 sm:h-6 mr-2 mb-1" />
                CALL NOW!
              </button>
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-6 sm:bottom-12 left-1/2 -translate-x-1/2 cursor-pointer group touch-manipulation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            onClick={() =>
              document.getElementById("about")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex flex-col items-center gap-2"
            >
              <div
                className="w-6 h-10 border-2 border-[#CEA53D]/60 rounded-full flex items-start justify-center p-2 group-hover:border-[#CEA53D] transition-colors"
                style={{ boxShadow: "0 0 5px rgba(130,100,35,0.3)" }}
              >
                <motion.div
                  className="w-1.5 h-1.5 bg-[#CEA53D] rounded-full"
                  style={{ boxShadow: "0 0 5px rgba(130,100,35,0.4)" }}
                  animate={{ y: [0, 12, 0] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
              <ChevronDown
                className="w-5 h-5 text-[#CEA53D]/70 group-hover:text-[#CEA53D] transition-colors"
                style={{ filter: "drop-shadow(0 0 3px rgba(130,100,35,0.4))" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
