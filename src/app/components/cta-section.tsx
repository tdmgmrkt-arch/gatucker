"use client";

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Shield } from 'lucide-react';

export function CTASection() {
  return (
    <section id="contact" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0D0D0D] via-[#1A1A1A] to-[#0D0D0D] overflow-hidden">
      {/* Background Spotlight/Glow - Subtle energy drawing attention to the center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E7AD41]/10 rounded-full blur-[100px] animate-pulse-slow" />
      
      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Headline */}
          <h2 
            className="mb-4 text-[#EDEDED] font-bold tracking-tight leading-tight"
            style={{ 
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(3rem, 6vw, 4.5rem)',
            }}
          >
            When You Seek The Truth,
            <br />
            <span className="text-[#E7AD41]">We&apos;re Here For You</span>
          </h2>
          <div className="h-1 w-24 bg-[#E7AD41] mx-auto mb-6"></div>

          {/* Subtext - Improved readability */}
          <p
            className="mb-12 text-[#EDEDED]/85 max-w-3xl mx-auto font-light"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.1rem',
              lineHeight: '1.8'
            }}
          >
            Confidential private investigation services are exactly that, <strong className="text-[#E7AD41]">&ldquo;CONFIDENTIAL&rdquo;</strong> our clients are the only persons privy to the information we obtain. As our client your anonymity is maintained throughout our investigations ensuring you peace of mind.
          </p>

          {/* CTA Buttons - Centered and prominent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            {/* Primary CTA with pulsing glow */}
            <div className="group relative">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#E7AD41] via-[#F5D68A] to-[#E7AD41] rounded-full blur-lg opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse" style={{ animationDuration: '3s' }} />
              <Button
                size="lg"
                className="relative bg-gradient-to-r from-[#E7AD41] via-[#F5D68A] to-[#E7AD41] hover:from-[#F5D68A] hover:via-[#E7AD41] hover:to-[#F5D68A] text-[#0D0D0D] px-12 py-7 text-lg font-bold rounded-full transition-all duration-500 shadow-2xl hover:shadow-[0_0_50px_rgba(231,173,65,0.8)] hover:scale-105"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Request Consultation
              </Button>
            </div>

            {/* Secondary CTA - Premium outline */}
            <a href="tel:909-345-1350" className="group">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#E7AD41]/40 to-[#E7AD41]/40 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500" />
                <Button
                  size="lg"
                  variant="outline"
                  className="relative border-2 border-[#E7AD41] text-[#E7AD41] hover:bg-[#E7AD41]/10 px-12 py-7 text-lg font-bold rounded-full transition-all duration-300 hover:scale-105 hover:border-[#F5D68A]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Call (909) 345-1350
                </Button>
              </div>
            </a>
          </motion.div>

          {/* License/Confidentiality Footer - Tightly integrated info block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="inline-flex items-center gap-4 mt-12 bg-[#2C2C2C]/60 border border-[#E7AD41]/30 rounded-full px-8 py-3"
          >
            <Shield className="w-5 h-5 text-[#E7AD41] flex-shrink-0" />
            <div className="flex text-center md:text-left flex-col md:flex-row gap-0 md:gap-4">
              <p 
                className="text-[#EDEDED] uppercase tracking-wider text-xs font-bold"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Confidentiality Guaranteed
              </p>
              <p 
                className="text-[#E7AD41] text-xs font-bold"
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