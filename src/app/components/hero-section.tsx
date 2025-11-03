"use client";

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ChevronDown, Shield, Clock, Lock, ArrowRight, Phone } from 'lucide-react';

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
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Call Tucker!.mp4" type="video/mp4" />
        </video>
        {/* Darker gradient overlay for better text readability on video */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/85 via-[#0D0D0D]/70 to-[#0D0D0D]" />
      </div>

      {/* Premium Spotlight Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#E7AD41]/20 rounded-full blur-[180px] z-0 animate-pulse" style={{ animationDuration: '5s' }} />
      <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-[#F5D68A]/15 rounded-full blur-[120px] z-0" />
      <div className="absolute bottom-1/3 left-1/3 w-[500px] h-[500px] bg-[#D79D31]/12 rounded-full blur-[120px] z-0" />

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#E7AD41]/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Overhead Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-[#E7AD41]/10 backdrop-blur-sm border border-[#E7AD41]/30 rounded-full"
          >
            <Shield className="w-4 h-4 text-[#E7AD41]" />
            <span className="text-[#E7AD41] text-sm font-semibold tracking-wider uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
              California Licensed PI #188351
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1
              className="mb-8 tracking-tight leading-[1.05]"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(2.8rem, 7vw, 6.5rem)',
                fontWeight: 700
              }}
            >
              <span className="block text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                Hire California&apos;s
              </span>
              <span className="block relative text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] my-2">
                Leading Private
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E7AD41] to-transparent opacity-60"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
              </span>
              <span className="block relative mt-2">
                <span className="relative bg-gradient-to-r from-[#E7AD41] via-[#F5D68A] to-[#E7AD41] bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%] drop-shadow-[0_0_30px_rgba(231,173,65,0.5)]" style={{ WebkitTextStroke: '1px rgba(231,173,65,0.3)' }}>
                  Investigator
                </span>
              </span>
            </h1>
          </motion.div>

          <motion.div
            className="mb-10 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#E7AD41]" />
                <span className="text-[#EDEDED]/90 text-sm md:text-base font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                  24/7 Consultations
                </span>
              </div>
              <div className="hidden md:block w-1 h-1 bg-[#E7AD41] rounded-full" />
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#E7AD41]" />
                <span className="text-[#EDEDED]/90 text-sm md:text-base font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                  State Licensed
                </span>
              </div>
              <div className="hidden md:block w-1 h-1 bg-[#E7AD41] rounded-full" />
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-[#E7AD41]" />
                <span className="text-[#EDEDED]/90 text-sm md:text-base font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                  100% Confidential
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            {/* Premium Primary CTA */}
            <div className="group relative">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#E7AD41] via-[#F5D68A] to-[#E7AD41] rounded-full blur-lg opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse" style={{ animationDuration: '3s' }} />
              <Button
                size="lg"
                className="relative bg-gradient-to-r from-[#E7AD41] via-[#F5D68A] to-[#E7AD41] hover:from-[#F5D68A] hover:via-[#E7AD41] hover:to-[#F5D68A] text-[#0D0D0D] px-14 py-7 text-lg font-bold transition-all duration-500 rounded-full shadow-2xl hover:shadow-[0_0_50px_rgba(231,173,65,0.8)] hover:scale-105"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: '0.3px'
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Request Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </div>

            {/* Premium Secondary CTA */}
            <a href="tel:909-345-1350" className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#E7AD41]/50 to-[#D79D31]/50 rounded-full blur opacity-0 group-hover:opacity-70 transition duration-300" />
              <Button
                size="lg"
                variant="outline"
                className="relative border-2 border-[#E7AD41]/60 bg-[#0D0D0D]/50 backdrop-blur-sm text-[#E7AD41] hover:border-[#E7AD41] hover:bg-[#E7AD41]/10 px-12 py-7 text-lg font-bold transition-all duration-300 rounded-full shadow-lg hover:shadow-[0_0_30px_rgba(231,173,65,0.4)]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: '0.3px'
                }}
              >
                <Phone className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                (909) 345-1350
              </Button>
            </a>
          </motion.div>

          {/* Scroll Indicator - Enhanced */}
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
              <span className="text-[#E7AD41]/70 text-xs uppercase tracking-wider font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>
                Scroll
              </span>
              <div className="w-6 h-10 border-2 border-[#E7AD41]/50 rounded-full flex items-start justify-center p-2 group-hover:border-[#E7AD41] transition-colors">
                <motion.div
                  className="w-1.5 h-1.5 bg-[#E7AD41] rounded-full"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
              <ChevronDown className="w-4 h-4 text-[#E7AD41]/70 group-hover:text-[#E7AD41] transition-colors" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
