"use client";

import { motion } from 'framer-motion';
import { Award, Shield, Scale, Users, GraduationCap, Globe, Heart, Building, Medal, BookOpen } from 'lucide-react';

const affiliations = [
  {
    icon: Scale,
    name: "California Lawyers Association",
    description: "Legal Affiliation"
  },
  {
    icon: Shield,
    name: "Florida Department of Corrections",
    description: "Prior Law Enforcement"
  },
  {
    icon: Users,
    name: "California Association of Licensed Investigators",
    description: "Professional PI Membership"
  },
  {
    icon: Medal,
    name: "Investigator Leadership",
    description: "Texas DOC"
  },
  {
    icon: Globe,
    name: "World Association of Detectives",
    description: "Global PI Network"
  },
  {
    icon: Award,
    name: "U.S. Army Veteran",
    description: "Service Background"
  },
  {
    icon: Heart,
    name: "Forensic Mental Health Association of CA",
    description: "Credentialed Partner"
  },
  {
    icon: GraduationCap,
    name: "Washington University School of Law",
    description: "Academic Credential"
  },
  {
    icon: Building,
    name: "Azusa Pacific University",
    description: "Psychology Background"
  },
  {
    icon: BookOpen,
    name: "Criminology & Forensics",
    description: "Professional Expertise"
  }
];

export function AffiliationsSection() {
  return (
    <section className="relative py-24 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] overflow-hidden">
      <div className="max-w-7xl mx-auto">
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
            Professional Affiliations
          </h2>
          <div className="h-1 w-32 bg-[#CEA53D] mx-auto my-5" style={{ boxShadow: '0 0 20px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 215, 0, 0.4)' }}></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-black/90 backdrop-blur-sm border-2 border-[#CEA53D]/30 rounded-xl p-8 md:p-12 relative"
          style={{ boxShadow: '0 0 30px rgba(255, 215, 0, 0.25), inset 0 0 50px rgba(255, 215, 0, 0.05)' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-12">
            {affiliations.map((affiliation, index) => (
              <motion.div
                key={affiliation.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-black border-2 border-[#CEA53D]/30 flex items-center justify-center transition-all group-hover:border-[#CEA53D]" style={{ boxShadow: '0 0 15px rgba(255, 215, 0, 0.2)' }}>
                  <affiliation.icon className="w-6 h-6 text-[#CEA53D]" strokeWidth={2.5} />
                </div>
                <div>
                  <h4 
                    className="text-[#EDEDED] font-semibold text-base md:text-lg mb-1"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {affiliation.name}
                  </h4>
                  <p 
                    className="text-[#EDEDED]/60 text-sm font-light"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {affiliation.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}