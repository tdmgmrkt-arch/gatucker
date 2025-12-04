"use client";

import { motion } from 'framer-motion';
import Image from 'next/image'; // <-- Must be imported for Image component
// Note: Import all required lucide icons 
import { Award, Shield, Scale, Users, GraduationCap, Globe, Heart, Building, Medal, BookOpen, FileCheck } from 'lucide-react'; 

// Combined data list with added logoSrc
const combinedAffiliationsData = [
  {
    icon: Scale,
    name: "California Lawyers Association",
    description: "Legal Affiliation",
    logoSrc: "/california.lawyers.association.webp", // Added path
  },
  {
    icon: Shield,
    name: "Florida Department of Corrections",
    description: "Prior Law Enforcement",
    logoSrc: "/FDClogo-blue-outline.webp", // Added path
  },
  {
    icon: Users,
    name: "California Association of Licensed Investigators",
    description: "Professional PI Membership",
    logoSrc: "/californialicensedinvestigators.webp", // Added path
  },
  {
    icon: Medal,
    name: "Texas DOC",
    description: "Investigator Leadership",
    logoSrc: "/texadepartmentcj-logo.webp", // Added path
  },
  {
    icon: Globe,
    name: "World Association of Detectives",
    description: "Global PI Network",
    logoSrc: "/worldassocaitiondetectives.webp", // Added path
  },
  {
    icon: Award,
    name: "U.S. Army Veteran",
    description: "Service Background",
    logoSrc: "/250px-Mark_of_the_United_States.webp", // Added path
  },
  {
    icon: Heart,
    name: "Forensic Mental Health Association of CA",
    description: "Credentialed Partner",
    logoSrc: "/fmhaca_logo.webp", // Hypothetical new logo path
  },
  {
    icon: GraduationCap,
    name: "Washington University School of Law -St Louis",
    description: "Academic Credential",
    logoSrc: "/washington_university_in_st_louis.webp", // Added path
  },
  {
    icon: Building,
    name: "Azusa Pacific University",
    description: "Psychology Background",
    logoSrc: "/azusa_pacific_university_logo.webp", // Added path
  },
  {
    icon: BookOpen,
    name: "Criminology & Forensics",
    description: "Professional Expertise",
    logoSrc: "/californialicensedinvestigators.webp", // Hypothetical new logo path
  }
];

// Re-categorize the data to fit the 3-column structure (Academic, Experience, Affiliations)
const educationCategory = combinedAffiliationsData.filter(item => 
    item.description.includes("Academic Credential") || 
    item.description.includes("Psychology Background") || 
    item.description.includes("Professional Expertise")
);

const experienceCategory = combinedAffiliationsData.filter(item => 
    item.description.includes("Service Background") || 
    item.description.includes("Prior Law Enforcement") || 
    item.description.includes("Investigator Leadership")
);

const affiliationsCategory = combinedAffiliationsData.filter(item => 
    item.description.includes("Legal Affiliation") || 
    item.description.includes("Professional PI Membership") || 
    item.description.includes("Global PI Network") ||
    item.description.includes("Credentialed Partner")
);


export function AffiliationsSection() {
    
  return (
    <section className="relative py-24 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
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
            Professional Credentials & Affiliations
          </h2>
          <div className="h-1 w-32 bg-[#CEA53D] mx-auto my-5" style={{ boxShadow: '0 0 20px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 215, 0, 0.4)' }}></div>
        </motion.div>

        {/* UNIFIED CREDENTIALS & AFFILIATIONS SECTION (FULL WIDTH) - Matching AboutPage Style */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 p-6 rounded-xl bg-black/50 border border-[#CEA53D]/30 shadow-lg"
            style={{
                boxShadow: "0 0 30px rgba(255,215,0,0.1), inset 0 0 15px rgba(255,215,0,0.05)",
            }}
        >
            <div className="grid md:grid-cols-3 gap-8">
                
                {/* 1. Academic Excellence */}
                <div>
                    <h3 className="flex items-center text-[#CEA53D] text-sm font-bold uppercase tracking-wider mb-4 border-b border-[#CEA53D]/20 pb-2">
                        <GraduationCap className="w-4 h-4 mr-2" strokeWidth={2.5} /> Academic Excellence
                    </h3>
                    <div className="space-y-4">
                        {educationCategory.map((item, index) => (
                            <div key={item.name} className="flex items-start group">
                                {/* IMAGE IMPLEMENTATION HERE */}
                                <Image
                                    src={item.logoSrc}
                                    alt={`${item.name} logo`}
                                    width={40}
                                    height={40}
                                    className="w-8 h-8 md:w-10 md:h-10 object-contain flex-shrink-0 mr-3 rounded-full p-0.5 bg-white/10 group-hover:scale-105 transition-transform duration-300"
                                />
                                <div>
                                    <p className="text-[#EDEDED] font-semibold text-sm leading-tight group-hover:text-[#F0C674]">
                                        {item.name}
                                    </p>
                                    <p className="text-[#EDEDED]/70 text-xs font-light">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 2. Professional Experience (Military/LE) */}
                <div>
                    <h3 className="flex items-center text-[#CEA53D] text-sm font-bold uppercase tracking-wider mb-4 border-b border-[#CEA53D]/20 pb-2">
                        <Shield className="w-4 h-4 mr-2" strokeWidth={2.5} /> Professional Experience
                    </h3>
                    <div className="space-y-4">
                        {experienceCategory.map((item, index) => (
                            <div key={item.name} className="flex items-start group">
                                {/* IMAGE IMPLEMENTATION HERE */}
                                <Image
                                    src={item.logoSrc}
                                    alt={`${item.name} logo`}
                                    width={40}
                                    height={40}
                                    className="w-8 h-8 md:w-10 md:h-10 object-contain flex-shrink-0 mr-3 rounded-full p-0.5 bg-white/10 group-hover:scale-105 transition-transform duration-300"
                                />
                                <div>
                                    <p className="text-[#EDEDED] font-semibold text-sm leading-tight group-hover:text-[#F0C674]">
                                        {item.name}
                                    </p>
                                    <p className="text-[#EDEDED]/70 text-xs font-light">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3. Licenses & Affiliations (Legal/Pro) */}
                <div>
                    <h3 className="flex items-center text-[#CEA53D] text-sm font-bold uppercase tracking-wider mb-4 border-b border-[#CEA53D]/20 pb-2">
                        <FileCheck className="w-4 h-4 mr-2" strokeWidth={2.5} /> Licenses & Affiliations
                    </h3>
                    <div className="space-y-4">
                        {affiliationsCategory.map((item, index) => (
                            <div key={item.name} className="flex items-start group">
                                {/* IMAGE IMPLEMENTATION HERE */}
                                <Image
                                    src={item.logoSrc}
                                    alt={`${item.name} logo`}
                                    width={40}
                                    height={40}
                                    className="w-8 h-8 md:w-10 md:h-10 object-contain flex-shrink-0 mr-3 rounded-full p-0.5 bg-white/10 group-hover:scale-105 transition-transform duration-300"
                                />
                                <div>
                                    <p className="text-[#EDEDED] font-semibold text-sm leading-tight group-hover:text-[#F0C674]">
                                        {item.name}
                                    </p>
                                    <p className="text-[#EDEDED]/70 text-xs font-light">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
        {/* END UNIFIED CREDENTIALS SECTION */}
      </div>
    </section>
  );
}