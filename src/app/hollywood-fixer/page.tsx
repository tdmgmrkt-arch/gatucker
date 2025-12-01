"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, CheckCircle2, Eye, Lock, Shield, Users } from "lucide-react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { StickyCTAButton } from "../components/sticky-cta-button";

const credentials = [
  {
    icon: Lock,
    title: "Absolute Discretion",
    description: "100% confidential handling of sensitive matters",
  },
  {
    icon: Shield,
    title: "Crisis Management",
    description: "Rapid response to high-stakes situations",
  },
  {
    icon: Eye,
    title: "Risk Assessment",
    description: "Proactive threat identification & mitigation",
  },
  {
    icon: Users,
    title: "Celebrity & Corporate Clientele",
    description: "Trusted by A-list talent and Fortune 500 executives",
  },
];

export default function HollywoodFixerPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] overflow-x-hidden">
      <Navbar />

      <section
        id="hollywood-fixer"
        className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          backgroundImage: "url('/hollywood_fixer_background.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80 z-0" />
        {/* Gradient Borders */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#CEA53D]/40 to-transparent z-20" />
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#CEA53D]/20 to-transparent blur-sm z-20" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#CEA53D]/40 to-transparent z-20" />
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#CEA53D]/20 to-transparent blur-sm z-20" />

        {/* Background Glow */}
        <div
          className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-[#CEA53D]/10 rounded-full blur-[140px] animate-pulse"
          style={{ animationDuration: "5s" }}
        />
        <div className="absolute bottom-1/3 left-0 w-[600px] h-[600px] bg-[#FFA500]/8 rounded-full blur-[140px]" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Main Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24"
          >
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
                    "0 0 30px rgba(255,215,0,0.2), inset 0 0 20px rgba(255,215,0,0.05)",
                }}
              >
                <div className="relative rounded-2xl overflow-hidden group">
                  <Image
                    src="/ga_tucker_hollywood_fixer.webp"
                    alt="Greg Tucker - Hollywood Fixer"
                    width={800}
                    height={800}
                    className="w-full h-auto object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
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
                          textShadow: "0 0 10px rgba(255,215,0,0.8)",
                        }}
                      >
                        Hollywood&apos;s Preferred Fixer
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
                    "0 0 30px rgba(255,215,0,0.6), inset 0 0 20px rgba(255,215,0,0.2)",
                }}
              >
                <p
                  className="text-[#CEA53D] font-black tracking-wider uppercase text-xs sm:text-sm md:text-base whitespace-nowrap"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    textShadow: "0 0 10px rgba(255,215,0,0.8)",
                  }}
                >
                  License #188351
                </p>
              </div>
            </motion.div>

            {/* Right Text */}
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
                  fontSize: "clamp(2.5rem,5vw,4rem)",
                  color: "#FFF",
                }}
              >
                Hollywood&apos;s Preferred Fixer
              </h2>

              <p
                className="mb-3 text-[#CEA53D] text-xs md:text-sm uppercase font-bold"
                style={{
                  fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
                  letterSpacing: "0.15em",
                  textShadow:
                    "0 0 15px rgba(255,215,0,0.8), 0 0 30px rgba(255,215,0,0.5)",
                }}
              >
                DISCREET PROFESSIONAL FOR HIGH-PROFILE CLIENTS
              </p>

              <div
                className="h-1 w-32 bg-[#CEA53D] my-5"
                style={{
                  boxShadow:
                    "0 0 15px rgba(255,215,0,0.7), 0 0 30px rgba(255,215,0,0.4)",
                }}
              ></div>

              <p
                className="mb-6 text-[#EDEDED]/85 font-light"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                }}
              >
                Greg Tucker is the trusted professional for representatives of top celebrities, high-profile Fortune 500 companies, and international corporations. Whether you have a high-profile case or simply need help with everyday challenges, Greg is prepared to serve you with professionalism and discretion.
              </p>

              <p
                className="mb-6 text-[#EDEDED]/85 font-light"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                }}
              >
                Renowned for his discreet and ethical approach, he specializes in resolving sensitive issues with integrity and precision. His expertise allows clients to navigate complex situations while safeguarding their reputation.
              </p>

              <p
                className="mb-8 text-[#EDEDED]/85 font-light"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                }}
              >
                Trusted across Hollywood, corporate America, and around the world, Greg Tucker is the premier fixer for those who require confidential and effective resolution of delicate matters.
              </p>

              {/* Credentials Grid */}
              <div className="grid sm:grid-cols-2 gap-y-6 gap-x-8 mt-8">
                {credentials.map((cred, index) => (
                  <motion.div
                    key={cred.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="group relative flex items-start p-5 bg-black/40 rounded-sm backdrop-filter backdrop-blur-sm border-2 border-[#CEA53D]/30 hover:border-[#CEA53D]/70 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                    style={{
                      boxShadow: "0 0 20px rgba(255,215,0,0.1)",
                    }}
                  >
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-sm bg-black border-2 border-[#CEA53D]/50 flex items-center justify-center group-hover:border-[#CEA53D] transition-colors mr-4"
                      style={{
                        boxShadow: "0 0 15px rgba(255,215,0,0.3)",
                      }}
                    >
                      <cred.icon
                        className="w-6 h-6 text-[#CEA53D]"
                        strokeWidth={2.5}
                        style={{
                          filter: "drop-shadow(0 0 4px rgba(255,215,0,0.8))",
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
          </motion.div>

          {/* Quote Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-black/80 border-2 border-[#CEA53D]/30 rounded-xl p-5 sm:p-6 md:p-8 mt-12 sm:mt-16"
            style={{
              boxShadow:
                "0 0 25px rgba(255,215,0,0.2), inset 0 0 30px rgba(255,215,0,0.05)",
            }}
          >
            <p
              className="text-[#EDEDED] italic leading-relaxed text-base sm:text-lg md:text-xl font-light text-center md:text-left"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              &ldquo;When reputation and privacy are on the line, you need someone who understands the stakes and knows how to deliver results without compromise. That&apos;s what I do.&rdquo;
            </p>

            <div className="grid grid-cols-[auto_1fr] items-center gap-3 pt-5 justify-start">
              <div className="flex justify-start">
                <Image
                  src="/gatuckersignaturethumbnail.webp"
                  alt="G.A. Tucker Portrait"
                  width={70}
                  height={70}
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>

              <div className="flex flex-col items-start leading-none">
                <Image
                  src="/greg-tucker-signature-.webp"
                  alt="Greg Tucker Signature"
                  width={180}
                  height={45}
                  className="h-auto relative mb-0"
                />
                <p className="text-[#CEA53D] font-semibold tracking-wider uppercase text-xs md:text-sm mt-1">
                  Hollywood&apos;s Preferred Fixer
                </p>
              </div>
            </div>
          </motion.div>

          {/* Additional Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 sm:mt-20"
          >
            <h3
              className="text-3xl md:text-4xl font-black uppercase text-[#EDEDED] mb-8 text-center"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                textShadow: "0 0 15px rgba(206,165,61,0.3)",
              }}
            >
              What Sets Greg Apart
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-black/40 border-2 border-[#CEA53D]/30 rounded-xl p-6 text-center hover:border-[#CEA53D]/70 transition-all duration-300">
                <h4
                  className="text-[#CEA53D] text-xl font-bold uppercase mb-3"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  Elite Discretion
                </h4>
                <p
                  className="text-[#EDEDED]/80 font-light"
                  style={{ fontFamily: "'Inter', sans-serif", lineHeight: "1.7" }}
                >
                  Every case is handled with the utmost confidentiality. Your privacy is paramount, and no detail is ever disclosed without your explicit consent.
                </p>
              </div>

              <div className="bg-black/40 border-2 border-[#CEA53D]/30 rounded-xl p-6 text-center hover:border-[#CEA53D]/70 transition-all duration-300">
                <h4
                  className="text-[#CEA53D] text-xl font-bold uppercase mb-3"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  Proven Results
                </h4>
                <p
                  className="text-[#EDEDED]/80 font-light"
                  style={{ fontFamily: "'Inter', sans-serif", lineHeight: "1.7" }}
                >
                  With decades of experience serving high-profile clients, Greg delivers effective solutions that protect reputations and resolve sensitive matters swiftly.
                </p>
              </div>

              <div className="bg-black/40 border-2 border-[#CEA53D]/30 rounded-xl p-6 text-center hover:border-[#CEA53D]/70 transition-all duration-300">
                <h4
                  className="text-[#CEA53D] text-xl font-bold uppercase mb-3"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  24/7 Availability
                </h4>
                <p
                  className="text-[#EDEDED]/80 font-light"
                  style={{ fontFamily: "'Inter', sans-serif", lineHeight: "1.7" }}
                >
                  Crisis doesn&apos;t wait for business hours. Greg is available around the clock to respond to urgent situations and provide immediate guidance.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <a href="tel:909-345-1350" className="group relative inline-block">
              <button
                className="relative bg-black border-4 border-[#CEA53D] text-[#CEA53D] px-10 py-5 font-black uppercase tracking-wider transition-all duration-300 hover:bg-[#CEA53D] hover:text-black hover:scale-105"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "1.2rem",
                  boxShadow:
                    "0 0 20px rgba(255, 215, 0, 0.5), inset 0 0 15px rgba(255, 215, 0, 0.15)",
                  textShadow: "0 0 8px rgba(255, 215, 0, 0.7)",
                }}
              >
                Contact Greg Tucker - Confidential Consultation
              </button>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <StickyCTAButton />
    </div>
  );
}
