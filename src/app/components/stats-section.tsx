"use client";

import { motion } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Award, Target, UserCheck, Timer } from 'lucide-react';

const stats = [
  {
    icon: Target,
    number: "95%",
    title: "Success Rate"
  },
  {
    icon: Award,
    number: "20+",
    title: "Years Experience"
  },
  {
    icon: UserCheck,
    number: "500+",
    title: "Cases Solved"
  },
  {
    icon: Timer,
    number: "24/7",
    title: "Availability"
  }
];

export function StatsSection() {
  return (
    <section className="relative py-24 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="relative p-2 md:p-4 bg-[#2C2C2C] rounded-2xl shadow-2xl">
              <div className="relative rounded-xl overflow-hidden group">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBjb25zdWx0YXRpb24lMjBkZXNrfGVufDF8fHx8MTc2MDEyMjA1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="California Private Investigator Consultation"
                  className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                />
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 rounded-full bg-[#E7AD41] opacity-5 -z-10 animate-pulse-slow"></div>
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
              className="mb-3 text-[#EDEDED] font-bold tracking-tight leading-tight"
              style={{ 
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              }}
            >
              Our Investigators Can Help You With Your <span className="text-[#E7AD41]">Trust Issues</span>
            </h2>
            <div className="h-1 w-24 bg-[#E7AD41] my-4"></div>
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
                  className="bg-[#2C2C2C]/50 backdrop-blur-sm border border-[#2C2C2C] rounded-xl p-6 hover:border-[#E7AD41] transition-colors duration-300"
                >
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <stat.icon className="w-6 h-6 text-[#E7AD41]" strokeWidth={2.5} />
                    <div 
                      className="text-[#E7AD41] font-bold"
                      style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', lineHeight: '1' }}
                    >
                      {stat.number}
                    </div>
                  </div>
                  <p className="text-[#EDEDED]/70 text-center uppercase tracking-wider text-xs font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
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
              className="bg-[#2C2C2C]/50 border border-[#E7AD41]/20 rounded-xl p-6 md:p-8"
            >
              <p
                className="text-[#EDEDED] italic leading-relaxed text-sm md:text-base font-light"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                &ldquo;Confidential private investigation services are exactly that, <span className="text-[#E7AD41]">CONFIDENTIAL</span>. Our clients are the only persons privy to the information we obtain. As our client, your anonymity is maintained throughout our investigations, ensuring you peace of mind.&rdquo;
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}