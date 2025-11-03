"use client";

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ChevronDown, Phone, Shield } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-left-top"
          style={{ objectPosition: 'left top' }}
        >
          <source src="/Call Tucker!2.mp4" type="video/mp4" />
        </video>
        {/* Warm-toned overlay for neon aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0a00]/60 via-[#0D0D0D]/50 to-[#0D0D0D]" />
      </div>

      {/* VHS Grain Overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.15] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='6.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          animation: 'grain 8s steps(10) infinite'
        }}
      />

      {/* Neon Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-[#FFD700]/20 rounded-full blur-[150px] z-0 animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-[#FF6B35]/15 rounded-full blur-[120px] z-0" />

      {/* Content - Retro Neon Style */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="max-w-7xl mx-auto text-center">
          {/* License Badge - Retro Style */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-3 px-5 py-2 mb-6 bg-black/40 backdrop-blur-sm border-2 border-[#FFD700]/40 rounded-sm"
            style={{
              boxShadow: '0 0 20px rgba(255, 215, 0, 0.3), inset 0 0 20px rgba(255, 215, 0, 0.1)'
            }}
          >
            <Shield className="w-5 h-5 text-[#FFD700]" style={{ filter: 'drop-shadow(0 0 4px #FFD700)' }} />
            <span
              className="text-[#FFD700] text-xs md:text-sm font-bold tracking-[0.2em] uppercase"
              style={{
                fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
                textShadow: '0 0 10px rgba(255, 215, 0, 0.8), 0 0 20px rgba(255, 215, 0, 0.5)'
              }}
            >
              California Licensed PI #188351
            </span>
          </motion.div>

          {/* Main Headline - Bold Retro Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="mb-6 leading-[0.95]">
              {/* Top Line - Warm Yellow */}
              <span
                className="block mb-2"
                style={{
                  fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
                  fontSize: 'clamp(2rem, 5vw, 4rem)',
                  fontWeight: 900,
                  color: '#FFA500',
                  textShadow: '0 0 20px rgba(255, 165, 0, 0.8), 0 0 40px rgba(255, 165, 0, 0.4), 3px 3px 0 rgba(0,0,0,0.8)',
                  letterSpacing: '0.05em'
                }}
              >
                HIRE CALIFORNIA&apos;S LEADING
              </span>

              {/* Main Focus - PRIVATE INVESTIGATOR with Neon Flicker */}
              <span
                className="block relative animate-neon-flicker"
                style={{
                  fontFamily: "'Bebas Neue', 'Anton', sans-serif",
                  fontSize: 'clamp(3.5rem, 10vw, 8rem)',
                  fontWeight: 900,
                  color: '#FFD700',
                  textShadow: '0 0 30px rgba(255, 215, 0, 1), 0 0 60px rgba(255, 215, 0, 0.8), 0 0 90px rgba(255, 215, 0, 0.5), 4px 4px 0 rgba(0,0,0,0.9)',
                  letterSpacing: '0.02em',
                  WebkitTextStroke: '2px rgba(255, 215, 0, 0.3)'
                }}
              >
                PRIVATE INVESTIGATOR
              </span>
            </h1>
          </motion.div>

          {/* Call Tucker! - Script Font Tagline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-10"
          >
            <p
              className="text-[#FF6B35] mb-2"
              style={{
                fontFamily: "'Brush Script MT', cursive",
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 700,
                textShadow: '0 0 20px rgba(255, 107, 53, 0.9), 0 0 40px rgba(255, 107, 53, 0.6), 2px 2px 0 rgba(0,0,0,0.7)',
                transform: 'rotate(-3deg)'
              }}
            >
              Call Tucker!
            </p>
            <p
              className="text-[#FFA500]/90 text-sm md:text-base"
              style={{
                fontFamily: "'Courier New', monospace",
                letterSpacing: '0.1em',
                textShadow: '0 0 8px rgba(255, 165, 0, 0.6)'
              }}
            >
              Don&apos;t be a sucker — Get the truth!
            </p>
          </motion.div>

          {/* Phone Number - Neon Glow with Flicker */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <a
              href="tel:909-345-1350"
              className="inline-block group"
            >
              <div className="relative">
                <div
                  className="absolute -inset-4 bg-[#FFD700]/20 blur-2xl rounded-full animate-pulse"
                  style={{ animationDuration: '2s' }}
                />
                <span
                  className="relative block animate-neon-flicker-subtle group-hover:scale-105"
                  style={{
                    fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
                    fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                    fontWeight: 900,
                    color: '#FFD700',
                    textShadow: '0 0 20px rgba(255, 215, 0, 1), 0 0 40px rgba(255, 215, 0, 0.8), 0 0 60px rgba(255, 215, 0, 0.5), 3px 3px 0 rgba(0,0,0,0.8)',
                    letterSpacing: '0.1em',
                    transition: 'all 0.3s ease'
                  }}
                >
                  (909) 345-1350
                </span>
              </div>
            </a>
          </motion.div>

          {/* CTA Button - Retro Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <a
              href="tel:909-345-1350"
              className="group relative inline-block"
            >
              <div
                className="absolute -inset-1 bg-gradient-to-r from-[#FFD700] to-[#FFA500] blur-md opacity-75 group-hover:opacity-100 transition duration-300"
                style={{ animation: 'pulse 2s infinite' }}
              />
              <button
                className="relative px-10 py-4 bg-black border-4 border-[#FFD700] font-black text-[#FFD700] uppercase tracking-wider transition-all duration-300 group-hover:bg-[#FFD700] group-hover:text-black group-hover:scale-105"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
                  boxShadow: '0 0 30px rgba(255, 215, 0, 0.6), inset 0 0 20px rgba(255, 215, 0, 0.2)',
                  textShadow: '0 0 10px rgba(255, 215, 0, 0.8)'
                }}
              >
                <Phone className="inline-block w-6 h-6 mr-2 mb-1" />
                CALL NOW!
              </button>
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer group"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2"
            >
              <div
                className="w-6 h-10 border-2 border-[#FFD700]/60 rounded-full flex items-start justify-center p-2 group-hover:border-[#FFD700] transition-colors"
                style={{ boxShadow: '0 0 10px rgba(255, 215, 0, 0.4)' }}
              >
                <motion.div
                  className="w-1.5 h-1.5 bg-[#FFD700] rounded-full"
                  style={{ boxShadow: '0 0 8px rgba(255, 215, 0, 0.8)' }}
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
              <ChevronDown
                className="w-5 h-5 text-[#FFD700]/70 group-hover:text-[#FFD700] transition-colors"
                style={{ filter: 'drop-shadow(0 0 4px rgba(255, 215, 0, 0.6))' }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
