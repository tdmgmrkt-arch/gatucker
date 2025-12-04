"use client";

import { motion } from 'framer-motion';
// Imported all lucide icons used for categories and items
import { Search, Shield, Brain, ArrowRight, FileText, Briefcase, Heart, Users, Scale, Target } from 'lucide-react'; 
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

// --- COMPLETE SERVICE LIST DATA ---
// Categorizing the services directly into lists for the new UI structure
const serviceGroups = [
    { 
        title: "Digital & Information Services", 
        icon: Search,
        services: [
            "Surveillance", 
            "Background Checks", 
            "Personal Background Checks", 
            "Corporate Background Checks", 
            "Cyberbullying", 
            "Forensic Linguistics", 
            "Behavioral Analysis Consulting"
        ]
    },
    { 
        title: "Corporate & Domestic Cases", 
        icon: Briefcase,
        services: [
            "Risk Management", 
            "Threat Assessment", 
            "Child Custody", 
            "Infidelity", 
            "Counter Intelligence", 
            "Asset Searches", 
            "Stalking Consulting Services"
        ]
    },
    { 
        title: "Criminal & Legal Support", 
        icon: Scale,
        services: [
            "Attorney Services", 
            "Trial Services", 
            "Jury Consulting", 
            "Profiling", 
            "Missing Persons", 
            "Civil Investigations", 
            "Criminal Investigations", 
            "Domestic Investigations", 
            "Process Server"
        ]
    },
];

export function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="relative overflow-hidden" style={{ padding: "clamp(4rem, 10vw, 8rem) clamp(1rem, 4vw, 2rem)" }}>
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

      {/* Enhanced Glow Effects - Fluid sizing */}
      <div className="absolute top-1/4 left-0 w-[min(700px,80vw)] h-[min(700px,80vw)] bg-[#CEA53D]/8 rounded-full blur-[150px] z-10" />
      <div className="absolute bottom-1/4 right-0 w-[min(700px,80vw)] h-[min(700px,80vw)] bg-[#FFA500]/8 rounded-full blur-[150px] z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(500px,60vw)] h-[min(500px,60vw)] bg-[#CEA53D]/5 rounded-full blur-[120px] z-10" />

      <div className="relative mx-auto z-20" style={{ maxWidth: "min(100%, 80rem)" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2
            className="mb-4 font-black uppercase tracking-tight leading-tight"
            style={{
              fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: '#FFFF',
            }}
          >
            Our <span className="text-[#FFFF]">Services</span>
          </h2>
          <div className="h-1 w-32 bg-[#CEA53D] mx-auto my-5" style={{ boxShadow: '0 0 20px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 215, 0, 0.4)' }}></div>
          <p
            className="text-[#CEA53D] text-sm uppercase tracking-[0.2em] max-w-3xl mx-auto mb-3 font-bold"
            style={{
              fontFamily: "'Inter', sans-serif",
              textShadow: '0 0 15px rgba(255, 215, 0, 0.5)'
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
        <div className="grid lg:grid-cols-3" style={{ gap: "clamp(1.5rem, 3vw, 2rem)", marginBottom: "clamp(2rem, 5vw, 4rem)" }}>
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
              <div className="relative h-full bg-black/90 border-2 border-[#CEA53D]/30 rounded-xl p-8 md:p-10 hover:border-[#CEA53D] transition-all duration-500 overflow-hidden shadow-lg hover:shadow-[0_0_50px_rgba(255,215,0,0.4)] group-hover:scale-[1.02]" style={{ boxShadow: '0 0 25px rgba(255, 215, 0, 0.2), inset 0 0 40px rgba(255, 215, 0, 0.05)' }}>
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#CEA53D]/0 to-[#CEA53D]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

                {/* Animated corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#CEA53D]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="mb-6 w-16 h-16 rounded-sm bg-black border-2 border-[#CEA53D]/30 flex items-center justify-center group-hover:border-[#CEA53D] transition-all duration-300 group-hover:scale-110" style={{ boxShadow: '0 0 15px rgba(255, 215, 0, 0.3)' }}>
                    <service.icon className="w-8 h-8 text-[#CEA53D]" strokeWidth={2.5} />
                  </div>
                  <p
                    className="text-[#CEA53D] text-xs uppercase tracking-[0.2em] mb-3 font-bold"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      textShadow: '0 0 15px rgba(231, 173, 65, 0.3)'
                    }}
                  >
                    {service.category}
                  </p>
                  <h3
                    className="mb-5 text-[#EDEDED] font-black uppercase group-hover:text-[#CEA53D] transition-colors"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: '1.75rem',
                      lineHeight: '1.3',
                      letterSpacing: '0.02em'
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
                    className="text-[#CEA53D] text-sm flex items-center gap-2 uppercase tracking-wider font-bold group-hover:text-[#F0C674] transition-colors"
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

        {/* All Services Grid - UPGRADED TO CATEGORIZED GRID */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-black/90 backdrop-blur-sm border-2 border-[#CEA53D]/30 rounded-xl p-10 md:p-12 shadow-2xl"
          style={{ boxShadow: '0 0 30px rgba(255, 215, 0, 0.25), inset 0 0 50px rgba(255, 215, 0, 0.05)' }}
        >
          <h3
            className="mb-8 text-[#EDEDED] text-center font-black uppercase tracking-tight"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', letterSpacing: '0.05em' }}
          >
            Complete Service List
          </h3>
          
          <div className="grid md:grid-cols-3" style={{ gap: "clamp(1.5rem, 4vw, 3rem)" }}>
            
            {serviceGroups.map((group, groupIndex) => (
                <div key={group.title}>
                    <h4 className="text-[#CEA53D] uppercase tracking-[0.15em] mb-4 text-sm font-bold flex items-center gap-2 border-b border-[#CEA53D]/20 pb-2">
                        <group.icon className="w-4 h-4" strokeWidth={2.5} />
                        {group.title}
                    </h4>
                    <ul className="space-y-1">
                        {group.services.map((service, serviceIndex) => (
                            <motion.li
                                key={service}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                // Stagger delay based on group index and service index
                                transition={{ duration: 0.3, delay: (groupIndex * 0.1) + (serviceIndex * 0.03) }}
                                className="flex items-center gap-3 text-[#EDEDED]/85 hover:text-[#CEA53D] transition-all duration-300 group text-sm cursor-pointer py-1.5 px-3 rounded-lg hover:bg-[#CEA53D]/5 hover:pl-5"
                            >
                                <div className="w-1.5 h-1.5 bg-[#CEA53D] rounded-full group-hover:scale-150 transition-transform shadow-[0_0_8px_rgba(231,173,65,0.6)]" />
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
            ))}

          </div>
        </motion.div>
      </div>
    </section>
  );
}