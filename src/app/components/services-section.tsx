"use client";

import { motion } from 'framer-motion';
import { Search, Shield, Brain, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

const featuredServices = [
  {
    icon: Search,
    title: "Background Checks",
    description: "GA Tucker PI can conduct background checks on individuals to identify criminal records, vehicle registration, social media activity, marriage history, and more.",
    category: "Digital Investigation Tools"
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Risk management allows you to identify potential deficiencies and vulnerabilities in security and safety in your business. Call today and we can identify any potential threats or risks.",
    category: "Threat Assessment"
  },
  {
    icon: Brain,
    title: "Investigations",
    description: "Our professional investigative services at GA Tucker PI include civil investigations, criminal investigations, domestic investigations, and legal process server capabilities.",
    category: "Criminal and Behavioral Casework"
  }
];

const allServices = [
  "Surveillance",
  "Background Checks",
  "Personal Background Checks",
  "Corporate Background Checks",
  "Risk Management",
  "Threat Assessment",
  "Child Custody",
  "Infidelity",
  "Attorney Services",
  "Trial Services",
  "Jury Consulting",
  "Profiling",
  "Missing Persons",
  "Civil Investigations",
  "Criminal Investigations",
  "Domestic Investigations",
  "Cyberbullying",
  "Stalking Consulting Services",
  "Forensic Linguistics",
  "Behavioral Analysis Consulting",
  "Counter Intelligence",
  "Process Server",
  "Asset Searches"
];

export function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-32 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image with Next.js Image */}
      <div className="absolute inset-0 z-0">
  <Image
    src="/servicesbg.webp"
    alt="Services Background"
    fill
    className="object-cover object-center brightness-[0.65]"
    quality={90}
    priority={false}
  />

  {/* Optimized gradient for better text contrast */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/70 via-[#0D0D0D]/80 to-[#0D0D0D]/95 mix-blend-multiply z-10" />
</div>

      {/* Enhanced Glow Effects */}
      <div className="absolute top-1/4 left-0 w-[700px] h-[700px] bg-[#E7AD41]/8 rounded-full blur-[150px] z-10" />
      <div className="absolute bottom-1/4 right-0 w-[700px] h-[700px] bg-[#D79D31]/8 rounded-full blur-[150px] z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#E7AD41]/5 rounded-full blur-[120px] z-10" />

      <div className="relative max-w-7xl mx-auto z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 
            className="mb-3 text-[#EDEDED] font-bold tracking-tight leading-tight"
            style={{ 
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            }}
          >
            <span className="text-[#E7AD41]">Services</span>
          </h2>
          <div className="h-1 w-24 bg-[#E7AD41] mx-auto my-4"></div>
          <p
            className="text-[#E7AD41] text-sm uppercase tracking-[0.2em] max-w-3xl mx-auto mb-3"
            style={{
              fontFamily: "'Inter', sans-serif",
              textShadow: '0 0 20px rgba(231, 173, 65, 0.4)'
            }}
          >
            Browse Our California Private Investigator Services
          </p>
          <p
            className="text-[#EDEDED]/80 max-w-2xl mx-auto font-light leading-relaxed"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.05rem',
              lineHeight: '1.8'
            }}
          >
            These are our most common services. Please contact us for inquiries about other investigative needs.
          </p>
        </motion.div>

        {/* Featured Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div className="relative h-full bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#2C2C2C] rounded-2xl p-8 md:p-10 hover:border-[#E7AD41]/50 transition-all duration-500 overflow-hidden shadow-lg hover:shadow-[0_20px_60px_rgba(231,173,65,0.15)] group-hover:scale-[1.02]">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E7AD41]/0 to-[#E7AD41]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                {/* Animated corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#E7AD41]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="mb-6 w-16 h-16 rounded-xl bg-gradient-to-br from-[#E7AD41]/10 to-[#D79D31]/10 flex items-center justify-center group-hover:from-[#E7AD41]/20 group-hover:to-[#D79D31]/20 transition-all duration-300 group-hover:scale-110">
                    <service.icon className="w-8 h-8 text-[#E7AD41]" strokeWidth={2.5} />
                  </div>
                  <p
                    className="text-[#E7AD41] text-xs uppercase tracking-[0.2em] mb-3 font-bold"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      textShadow: '0 0 15px rgba(231, 173, 65, 0.3)'
                    }}
                  >
                    {service.category}
                  </p>
                  <h3
                    className="mb-5 text-[#EDEDED] font-bold group-hover:text-[#F0C674] transition-colors"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: '1.75rem',
                      lineHeight: '1.3'
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="mb-6 text-[#EDEDED]/85 font-light"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '1rem',
                      lineHeight: '1.75'
                    }}
                  >
                    {service.description}
                  </p>
                  <motion.div
                    className="text-[#E7AD41] text-sm flex items-center gap-2 uppercase tracking-wider font-bold group-hover:text-[#F0C674] transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    animate={{ x: hoveredIndex === index ? 8 : 0 }}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* All Services Grid - Updated for tighter layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-[#1A1A1A]/80 to-[#0D0D0D]/80 backdrop-blur-sm border border-[#E7AD41]/20 rounded-2xl p-10 md:p-12 shadow-2xl"
        >
          <h3 
            className="mb-8 text-[#EDEDED] text-center font-bold tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}
          >
            Complete Service List
          </h3>
          {/* Grouped lists for visual balance and hierarchy */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Group 1: General & Digital */}
            <div>
              <h4 className="text-[#E7AD41] uppercase tracking-[0.15em] mb-4 text-sm font-bold flex items-center gap-2">
                <div className="w-8 h-0.5 bg-gradient-to-r from-[#E7AD41] to-transparent" />
                General & Digital
              </h4>
              <ul className="space-y-2">
                {["Surveillance", "Background Checks", "Personal Background Checks", "Corporate Background Checks", "Cyberbullying", "Forensic Linguistics", "Behavioral Analysis Consulting"].map((service, index) => (
                  <motion.li
                    key={service}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.02 }}
                    className="flex items-center gap-3 text-[#EDEDED]/85 hover:text-[#E7AD41] transition-all duration-300 group text-sm cursor-pointer py-2 px-3 rounded-lg hover:bg-[#E7AD41]/5 hover:pl-5"
                  >
                    <div className="w-1.5 h-1.5 bg-[#E7AD41] rounded-full group-hover:scale-150 transition-transform shadow-[0_0_8px_rgba(231,173,65,0.6)]" />
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        lineHeight: '1.6'
                      }}
                      className="font-medium"
                    >
                      {service}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            {/* Group 2: Corporate & Domestic */}
            <div>
              <h4 className="text-[#E7AD41] uppercase tracking-[0.15em] mb-4 text-sm font-bold flex items-center gap-2">
                <div className="w-8 h-0.5 bg-gradient-to-r from-[#E7AD41] to-transparent" />
                Corporate & Domestic
              </h4>
              <ul className="space-y-2">
                {["Risk Management", "Threat Assessment", "Child Custody", "Infidelity", "Counter Intelligence", "Asset Searches", "Stalking Consulting Services"].map((service, index) => (
                  <motion.li
                    key={service}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.02 }}
                    className="flex items-center gap-3 text-[#EDEDED]/85 hover:text-[#E7AD41] transition-all duration-300 group text-sm cursor-pointer py-2 px-3 rounded-lg hover:bg-[#E7AD41]/5 hover:pl-5"
                  >
                    <div className="w-1.5 h-1.5 bg-[#E7AD41] rounded-full group-hover:scale-150 transition-transform shadow-[0_0_8px_rgba(231,173,65,0.6)]" />
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        lineHeight: '1.6'
                      }}
                      className="font-medium"
                    >
                      {service}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Group 3: Legal & Criminal */}
            <div>
              <h4 className="text-[#E7AD41] uppercase tracking-[0.15em] mb-4 text-sm font-bold flex items-center gap-2">
                <div className="w-8 h-0.5 bg-gradient-to-r from-[#E7AD41] to-transparent" />
                Legal & Criminal
              </h4>
              <ul className="space-y-2">
                {["Attorney Services", "Trial Services", "Jury Consulting", "Profiling", "Missing Persons", "Civil Investigations", "Criminal Investigations", "Domestic Investigations", "Process Server"].map((service, index) => (
                  <motion.li
                    key={service}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.02 }}
                    className="flex items-center gap-3 text-[#EDEDED]/85 hover:text-[#E7AD41] transition-all duration-300 group text-sm cursor-pointer py-2 px-3 rounded-lg hover:bg-[#E7AD41]/5 hover:pl-5"
                  >
                    <div className="w-1.5 h-1.5 bg-[#E7AD41] rounded-full group-hover:scale-150 transition-transform shadow-[0_0_8px_rgba(231,173,65,0.6)]" />
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        lineHeight: '1.6'
                      }}
                      className="font-medium"
                    >
                      {service}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}