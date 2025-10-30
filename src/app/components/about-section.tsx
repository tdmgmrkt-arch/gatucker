"use client";

import { motion } from 'framer-motion';
import { CheckCircle2, Shield, Award, FileCheck } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const credentials = [
  {
    icon: Shield,
    title: "Former Law Enforcement Officer",
    description: "Professionally certified investigator"
  },
  {
    icon: FileCheck,
    title: "Licensed by State of CA",
    description: "California PI License #188351"
  },
  {
    icon: CheckCircle2,
    title: "Privacy Always Remains",
    description: "Your information is safe"
  },
  {
    icon: Award,
    title: "Findings Are Private",
    description: "Confidentiality guaranteed"
  }
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-32 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1A1A1A] via-[#0D0D0D] to-[#1A1A1A] overflow-hidden">
      {/* Decorative gradient separator - top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E7AD41]/30 to-transparent z-20" />
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E7AD41]/10 to-transparent blur-sm z-20" />

      {/* Decorative gradient separator - bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E7AD41]/30 to-transparent z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E7AD41]/10 to-transparent blur-sm z-20" />

      {/* Background Effects */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#E7AD41]/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-[#D79D31]/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Image with dynamic frame */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative p-3 md:p-4 bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] rounded-3xl shadow-2xl border border-[#E7AD41]/20">
              <div className="relative rounded-2xl overflow-hidden group">
                <ImageWithFallback
                  src="/gatuckerintoimg.webp"
                  alt="Greg Tucker - Licensed Private Investigator"
                  className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div>
                    <h3 className="text-white text-xl font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>Greg Tucker</h3>
                    <p className="text-[#E7AD41] text-sm font-semibold">Licensed Private Investigator</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-gradient-to-r from-[#E7AD41] to-[#D79D31] px-6 py-3 md:px-8 md:py-4 rounded-xl shadow-[0_10px_40px_rgba(231,173,65,0.3)] transform rotate-2 hover:rotate-0 transition-all duration-300 hover:scale-105">
              <p className="text-[#0D0D0D] font-bold tracking-wide text-sm md:text-base">
                License #188351
              </p>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h2 
              className="mb-3 text-[#EDEDED] font-bold tracking-tight leading-tight"
              style={{ 
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              }}
            >
              Introducing <span className="text-[#E7AD41]">G.A. Tucker PI</span>
            </h2>
            <p
              className="mb-2 text-[#E7AD41] text-sm uppercase tracking-[0.2em]"
              style={{
                fontFamily: "'Inter', sans-serif",
                textShadow: '0 0 20px rgba(231, 173, 65, 0.4)'
              }}
            >
              CEO AND LEAD INVESTIGATOR
            </p>
            <div className="h-1 w-24 bg-[#E7AD41] my-5 shadow-[0_0_10px_rgba(231,173,65,0.5)]"></div>
            <p
              className="mb-8 text-[#EDEDED]/85 font-light"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '1.1rem',
                lineHeight: '1.8'
              }}
            >
              G.A. Tucker P.I. Investigative Services L.L.C&apos;s investigative team uses both experience and education
              to effectively solve investigative issues in an effective and professional manner. Get in touch with our
              team to hire a private detective in Los Angeles, CA.
            </p>
            <blockquote className="mb-10 pl-6 border-l-4 border-[#E7AD41] bg-[#E7AD41]/5 py-5 rounded-r-xl shadow-[0_0_20px_rgba(231,173,65,0.1)]">
              <p
                className="text-[#E7AD41] font-medium"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                  lineHeight: '1.6',
                  textShadow: '0 0 15px rgba(231, 173, 65, 0.3)'
                }}
              >
                &ldquo;Don&apos;t be a sucker &ndash; call Tucker, your California Private Investigator&rdquo;
              </p>
            </blockquote>

            {/* Credentials Grid */}
            <div className="grid sm:grid-cols-2 gap-y-6 gap-x-8 mt-8">
              {credentials.map((cred, index) => (
                <motion.div
                  key={cred.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="group relative flex items-start p-5 bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] rounded-xl backdrop-filter backdrop-blur-sm border border-[#2C2C2C] hover:border-[#E7AD41]/50 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#E7AD41]/10 to-[#D79D31]/10 flex items-center justify-center group-hover:from-[#E7AD41]/20 group-hover:to-[#D79D31]/20 transition-colors mr-4">
                    <cred.icon className="w-6 h-6 text-[#E7AD41]" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4
                      className="text-[#EDEDED] font-bold mb-2 tracking-wide group-hover:text-[#F0C674] transition-colors"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '1.05rem',
                        lineHeight: '1.4'
                      }}
                    >
                      {cred.title}
                    </h4>
                    <p
                      className="text-[#EDEDED]/80 text-sm font-light"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        lineHeight: '1.6'
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
      </div>
    </section>
  );
}