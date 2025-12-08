"use client";

import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

export function CTASection() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0D0D0D] via-[#1A1A1A] to-[#0D0D0D] overflow-hidden"
      style={{
        backgroundImage: "url('/greg-tucker-home-cta.bg.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Background Overlay for Readability */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Background Spotlight/Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#CEA53D]/10 rounded-full blur-[100px] animate-pulse-slow" />
      
      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Headline */}
          <h2
            className="mb-6 font-black uppercase tracking-tight leading-tight"
            style={{
              fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              color: '#FFFF',
            }}
          >
            YOUR CASE. OUR CONFIDENCE.
          </h2>

          <div
            className="h-1 w-40 bg-[#CEA53D] mx-auto mb-8"
            style={{
              boxShadow:
                '0 0 20px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 215, 0, 0.4)',
            }}
          ></div>

          {/* Subtext */}
          <p
            className="mb-12 text-[#EDEDED]/85 max-w-4xl mx-auto font-light"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.1rem',
              lineHeight: '1.8',
            }}
          >
            Confidential private investigation services are exactly that,{' '}
            <strong className="text-[#CEA53D]">&ldquo;CONFIDENTIAL&rdquo;</strong>{' '}
            our clients are the only persons privy to the information we obtain.
            As our client your anonymity is maintained throughout our
            investigations ensuring you peace of mind.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            {/* Primary CTA */}
            <a href="/request-service-form" className="group relative">
              <button
                className="relative px-10 py-4 bg-black border-4 border-[#CEA53D] font-black text-[#FFFF] uppercase tracking-wider transition-all duration-300 hover:bg-[#CEA53D] hover:text-black hover:scale-105"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                  boxShadow:
                    '0 0 25px rgba(255, 165, 0, 0.5), inset 0 0 15px rgba(255, 165, 0, 0.15)',
                }}
              >
                Request Consultation
              </button>
            </a>

            {/* Secondary CTA */}
            <a href="tel:909-964-8976" className="group">
              <button
                className="relative px-10 py-4 bg-transparent border-4 border-[#FFFF] font-black text-[#FFFF] uppercase tracking-wider transition-all duration-300 hover:bg-[#CEA53D] hover:text-black hover:scale-105"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                  boxShadow:
                    '0 0 25px rgba(255, 165, 0, 0.5), inset 0 0 15px rgba(255, 165, 0, 0.15)',
                }}
              >
                Call 909-964-8976
              </button>
            </a>
          </motion.div>

          {/* Footer Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="inline-flex items-center gap-4 mt-12 bg-[#2C2C2C]/60 border border-[#CEA53D]/30 rounded-full px-8 py-3"
          >
            <Shield className="w-5 h-5 text-[#CEA53D] flex-shrink-0" />
            <div className="flex text-center md:text-left flex-col md:flex-row gap-0 md:gap-4">
              <p
                className="text-[#EDEDED] uppercase tracking-wider text-xs font-bold"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Confidentiality Guaranteed
              </p>
              <p
                className="text-[#CEA53D] text-xs font-bold"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                License #PI188351
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
