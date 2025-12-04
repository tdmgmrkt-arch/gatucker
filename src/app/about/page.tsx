"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, CheckCircle2, FileCheck, Shield, BookOpen, UserCheck, Users, Briefcase } from "lucide-react"; 
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { StickyCTAButton } from "../components/sticky-cta-button";

// --- Data for Greg's Education Credentials ---
const education = [
  {
    university: "Alliant International University",
    degree: "Master of Science - MS, Forensic Psychology",
    logoSrc: "/alliant_international_university.webp",
  },
  {
    university: "Washington University School of Law - St. Louis",
    degree: "Master's degree, Legal Studies, General",
    logoSrc: "/washington_university_in_st_louis.webp",
  },
  {
    university: "Kaplan University",
    degree: "Master of Science - MS, Criminology",
    logoSrc: "/kaplan.university.webp",
  },
  {
    university: "Azusa Pacific University",
    degree: "Bachelor of Arts - BA, International/Global Studies",
    logoSrc: "/azusa_pacific_university_logo.webp",
  },
];

// --- Data for Professional Experience ---
const experience = [
  {
    title: "US Army Veteran",
    description: "Leadership & field discipline",
    icon: Shield,
    logoSrc: "/250px-Mark_of_the_United_States.webp",
  },
  {
    title: "Former Lieutenant",
    description: "Texas Department of Criminal Justice",
    icon: Users,
    logoSrc: "/texadepartmentcj-logo.webp",
  },
  {
    title: "Senior Parole/Probation Officer",
    description: "Florida Department of Corrections",
    icon: UserCheck,
    logoSrc: "/FDClogo-blue-outline.webp",
  },
  {
    title: "27+ Years of Experience",
    description: "Trusted investigative leadership",
    icon: Briefcase,
    // Using a different icon path for a generic experience badge to avoid repetition
    logoSrc: "/californialicensedinvestigators.webp", 
  },
];

// --- Data for Licenses & Affiliations ---
const affiliations = [
  {
    title: "Licensed Private Investigator (CA)",
    description: "California PI License #188351",
    icon: FileCheck,
    logoSrc: "/1200px-CalBarSeal.svg.webp", 
  },
  {
    title: "Expert Witness",
    description: "Recognized in civil & criminal courts",
    icon: CheckCircle2,
    logoSrc: "/california.lawyers.association.webp",
  },
  {
    title: "World Association of Detectives",
    description: "International Professional Member",
    icon: Award, 
    logoSrc: "/worldassocaitiondetectives.webp",
  },
  {
    title: "CA Licensed Investigators Association",
    description: "Dedicated to professional standards",
    icon: Award, 
    logoSrc: "/californialicensedinvestigators.webp",
  },
];


export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] overflow-x-hidden">
      <Navbar />

      <section
        id="about"
        className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1A1A1A] via-[#0D0D0D] to-[#1A1A1A] overflow-hidden"
      >
        {/* Gradient Borders */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#CEA53D]/40 to-transparent z-20" />
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#CEA53D]/20 to-transparent blur-sm z-20" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#CEA53D]/40 to-transparent z-20" />
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#CEA53D]/20 to-transparent blur-sm z-20" />

        {/* Background Glow */}
        <div
          className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-[#CEA53D]/10 rounded-full blur-[140px] animate-pulse"
          style={{ animationDuration: "5s" }}
        />
        <div className="absolute bottom-1/3 left-0 w-[600px] h-[600px] bg-[#FFA500]/8 rounded-full blur-[140px]" />

        <div className="pt-30 max-w-7xl mx-auto relative z-10">
          {/* ---------- GREG SECTION (TWO COLUMNS) ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-12"
          >
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div
                className="relative p-3 md:p-4 bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] rounded-xl shadow-2xl border-2 border-[#CEA53D]/30"
                style={{
                  boxShadow:
                    "0 0 30px rgba(255,215,0,0.2), inset 0 0 20px rgba(255,215,0,0.05)",
                }}
              >
                <div className="relative rounded-2xl overflow-hidden group">
                  <Image
                    src="/gatuckerbwport.png"
                    alt="Greg Tucker - Private Investigator"
                    width={800}
                    height={800}
                    className="w-full h-auto object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <div>
                      <h3
                        className="text-white text-xl font-bold mb-1"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        Greg Tucker
                      </h3>
                      <p
                        className="text-[#CEA53D] text-sm font-bold uppercase"
                        style={{
                          fontFamily: "'Bebas Neue', sans-serif",
                          letterSpacing: "0.1em",
                          textShadow:
                            "0 0 10px rgba(255,215,0,0.8)",
                        }}
                      >
                        Licensed Private Investigator
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* License Badge */}
              <div
                className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 md:-bottom-6 md:-right-6 bg-black border-3 sm:border-4 border-[#CEA53D] px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-sm transform rotate-2 hover:rotate-0 transition-all duration-300 hover:scale-105"
                style={{
                  boxShadow:
                    "0 0 30px rgba(255,215,0,0.6), inset 0 0 20px rgba(255,215,0,0.2)",
                }}
              >
                <p
                  className="text-[#CEA53D] font-black tracking-wider uppercase text-xs sm:text-sm md:text-base whitespace-nowrap"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    textShadow: "0 0 10px rgba(255,215,0,0.8)",
                  }}
                >
                  License #188351
                </p>
              </div>

              {/* Don't Be a Sucker Badge */}
              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 md:-top-15 md:-left-6 bg-gradient-to-r from-[#000000] to-[#000000] p-1.5 sm:p-2 md:p-3 rounded-xl shadow-[0_10px_40px_rgba(231,173,65,0.3)] transform -rotate-2 hover:rotate-0 transition-all duration-300 hover:scale-105">
                <Image
                  src="/dontbeasucker.webp"
                  alt="Don't be a sucker"
                  width={300}
                  height={150}
                  className="w-32 sm:w-48 md:w-64 h-auto object-contain rounded-lg"
                />
              </div>
            </motion.div>

            {/* Right Text/Bio */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <h2
                className="mb-4 font-black uppercase tracking-tight leading-tight"
                style={{
                  fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
                  fontSize: "clamp(2.5rem,5vw,4rem)",
                  color: "#FFF",
                }}
              >
                About Greg Tucker
              </h2>

              <p
                className="mb-3 text-[#CEA53D] text-xs md:text-sm uppercase font-bold"
                style={{
                  fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
                  letterSpacing: "0.15em",
                  textShadow:
                    "0 0 15px rgba(255,215,0,0.8), 0 0 30px rgba(255,215,0,0.5)",
                }}
              >
                OWNER, CEO AND LEAD INVESTIGATOR
              </p>

              <div
                className="h-1 w-32 bg-[#CEA53D] my-5"
                style={{
                  boxShadow:
                    "0 0 15px rgba(255,215,0,0.7), 0 0 30px rgba(255,215,0,0.4)",
                }}
              ></div>

              <p
                className="mb-8 text-[#EDEDED]/85 font-light"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                }}
              >
                Greg Tucker serves as Owner and CEO of GA Tucker PI Investigative Services LLC.
                A U.S. Army Veteran, former Lieutenant for the Texas Department of Criminal Justice,
                and Senior Parole/Probation Officer for the Florida Department of Corrections,
                Greg is the Private Investigator California trusts.
                </p>

                <p
                className="mb-8 text-[#EDEDED]/85 font-light"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                }}
              >
                
                Holding three master&apos;s degrees in Criminology, Legal Studies, and Forensic Behavioral Science,
                Greg combines 27 years of investigative experience with academic expertise to lead
                one of California&apos;s most trusted investigation firms.
              </p>
            </motion.div>
          </motion.div>

          {/* UNIFIED CREDENTIALS & AFFILIATIONS SECTION (FULL WIDTH) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            // Removed lg:col-span-2 or similar, making it full width (default block behavior)
            className="mt-12 p-6 rounded-xl bg-black/50 border border-[#CEA53D]/30 shadow-lg"
            style={{
                boxShadow: "0 0 30px rgba(255,215,0,0.1), inset 0 0 15px rgba(255,215,0,0.05)",
            }}
          >
            <div className="grid md:grid-cols-3 gap-8">
                
                {/* 1. Academic Excellence */}
                <div>
                    <h3 className="flex items-center text-[#CEA53D] text-sm font-bold uppercase tracking-wider mb-4 border-b border-[#CEA53D]/20 pb-2">
                        <BookOpen className="w-4 h-4 mr-2" strokeWidth={2.5} /> Academic Excellence
                    </h3>
                    <div className="space-y-4">
                        {education.map((item, index) => (
                            <div key={index} className="flex items-start group">
                                <Image
                                    src={item.logoSrc}
                                    alt={`${item.university} logo`}
                                    width={40}
                                    height={40}
                                    className="w-8 h-8 md:w-10 md:h-10 object-contain flex-shrink-0 mr-3 rounded-full p-0.5 bg-white/10 group-hover:scale-105 transition-transform duration-300"
                                />
                                <div>
                                    <p className="text-[#EDEDED] font-semibold text-sm leading-tight group-hover:text-[#F0C674]">
                                        {item.degree}
                                    </p>
                                    <p className="text-[#EDEDED]/70 text-xs font-light">
                                        {item.university}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 2. Professional Experience */}
                <div>
                    <h3 className="flex items-center text-[#CEA53D] text-sm font-bold uppercase tracking-wider mb-4 border-b border-[#CEA53D]/20 pb-2">
                        <Shield className="w-4 h-4 mr-2" strokeWidth={2.5} /> Professional Experience
                    </h3>
                    <div className="space-y-4">
                        {experience.map((item, index) => (
                            <div key={index} className="flex items-start group">
                                <Image
                                    src={item.logoSrc}
                                    alt={`${item.title} logo`}
                                    width={40}
                                    height={40}
                                    className="w-8 h-8 md:w-10 md:h-10 object-contain flex-shrink-0 mr-3 rounded-full p-0.5 bg-white/10 group-hover:scale-105 transition-transform duration-300"
                                />
                                <div>
                                    <p className="text-[#EDEDED] font-semibold text-sm leading-tight group-hover:text-[#F0C674]">
                                        {item.title}
                                    </p>
                                    <p className="text-[#EDEDED]/70 text-xs font-light">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3. Licenses & Affiliations */}
                <div>
                    <h3 className="flex items-center text-[#CEA53D] text-sm font-bold uppercase tracking-wider mb-4 border-b border-[#CEA53D]/20 pb-2">
                        <FileCheck className="w-4 h-4 mr-2" strokeWidth={2.5} /> Licenses & Affiliations
                    </h3>
                    <div className="space-y-4">
                        {affiliations.map((item, index) => (
                            <div key={index} className="flex items-start group">
                                <Image
                                    src={item.logoSrc}
                                    alt={`${item.title} logo`}
                                    width={40}
                                    height={40}
                                    className="w-8 h-8 md:w-10 md:h-10 object-contain flex-shrink-0 mr-3 rounded-full p-0.5 bg-white/10 group-hover:scale-105 transition-transform duration-300"
                                />
                                <div>
                                    <p className="text-[#EDEDED] font-semibold text-sm leading-tight group-hover:text-[#F0C674]">
                                        {item.title}
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

          {/* ---------- Signature & Quote ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-black/80 border-2 border-[#CEA53D]/30 rounded-xl p-5 sm:p-6 md:p-8 mt-12 sm:mt-16 md:mt-20"
            style={{
              boxShadow:
                "0 0 25px rgba(255,215,0,0.2), inset 0 0 30px rgba(255,215,0,0.05)",
            }}
          >
            <p
              className="text-[#EDEDED] italic leading-relaxed text-base sm:text-lg md:text-xl font-light text-center md:text-left"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              &ldquo;At GA Tucker PI, we stand for truth, integrity, and results.
              Every case deserves our full attention—and that&apos;s exactly what we deliver.&rdquo;
            </p>

            <div className="grid grid-cols-[auto_1fr] items-center gap-3 pt-5 justify-start">
              <div className="flex justify-start">
                <Image
                  src="/gatuckersignaturethumbnail.webp"
                  alt="G.A. Tucker Portrait"
                  width={70}
                  height={70}
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>

              <div className="flex flex-col items-start leading-none">
                <Image
                  src="/greg-tucker-signature-.webp"
                  alt="Greg Tucker Signature"
                  width={180}
                  height={45}
                  className="h-auto relative mb-0"
                />
                <p className="text-[#CEA53D] font-semibold tracking-wider uppercase text-xs md:text-sm mt-1">
                  CEO AND LEAD INVESTIGATOR
                </p>
              </div>
            </div>
          </motion.div>

          {/* ---------- JULIA SECTION (No Change) ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center mt-16 sm:mt-20 md:mt-24"
          >
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-1"
            >
              <h2
                className="mb-4 font-black uppercase tracking-tight leading-tight"
                style={{
                  fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
                  fontSize: "clamp(2.5rem,5vw,4rem)",
                  color: "#FFF",
                }}
              >
                About Julia Tucker
              </h2>

              <p
                className="mb-3 text-[#CEA53D] text-xs md:text-sm uppercase font-bold"
                style={{
                  fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
                  letterSpacing: "0.15em",
                  textShadow:
                    "0 0 15px rgba(255,215,0,0.8), 0 0 30px rgba(255,215,0,0.5)",
                }}
              >
                CO-OWNER & COO
              </p>

              <div
                className="h-1 w-32 bg-[#CEA53D] my-5"
                style={{
                  boxShadow:
                    "0 0 15px rgba(255,215,0,0.7), 0 0 30px rgba(255,215,0,0.4)",
                }}
              ></div>

              <p
                className="mb-8 text-[#EDEDED]/85 font-light"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                }}
              >
                Julia Tucker serves as Co-Owner and COO of GA Tucker PI Investigative Services LLC.
                A dedicated advocate for children&apos;s well-being, she brings over 17 years of experience
                as a licensed school psychologist. With master&apos;s degrees in Education and Child Psychology,
                Julia specializes in supporting investigations involving missing children, domestic disputes,
                and child custody cases. Her compassion and expertise ensure that each case is approached with
                empathy, professionalism, and insight.
              </p>
            </motion.div>

            {/* Right: Julia Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2"
            >
              <div
                className="relative p-3 md:p-4 bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] rounded-xl shadow-2xl border-2 border-[#CEA53D]/30"
                style={{
                  boxShadow:
                    "0 0 30px rgba(255,215,0,0.2), inset 0 0 20px rgba(255,215,0,0.05)",
                }}
              >
                <div className="relative rounded-2xl overflow-hidden group">
                  <Image
                    src="/julia_profile.webp"
                    alt="Julia Tucker - Co-Owner & COO"
                    width={800}
                    height={800}
                    className="w-full h-auto object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <div>
                      <h3
                        className="text-white text-xl font-bold mb-1"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        Julia Tucker
                      </h3>
                      <p
                        className="text-[#CEA53D] text-sm font-bold uppercase"
                        style={{
                          fontFamily: "'Bebas Neue', sans-serif",
                          letterSpacing: "0.1em",
                          textShadow: "0 0 10px rgba(255,215,0,0.8)",
                        }}
                      >
                        Co-Owner & COO
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ---------- GREG & JULIA AS A TEAM SECTION (No Change) ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 sm:mt-20 md:mt-24"
          >
            <div className="text-center mb-12">
              <h2
                className="mb-4 font-black uppercase tracking-tight leading-tight"
                style={{
                  fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
                  fontSize: "clamp(2.5rem,5vw,4rem)",
                  color: "#FFF",
                }}
              >
                A Family-Oriented Partnership
              </h2>
              <div
                className="h-1 w-32 bg-[#CEA53D] mx-auto"
                style={{
                  boxShadow:
                    "0 0 15px rgba(255,215,0,0.7), 0 0 30px rgba(255,215,0,0.4)",
                }}
              ></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-center">
              {/* Left: Team Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative order-2 lg:order-1"
              >
                <div
                  className="relative p-3 md:p-4 bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] rounded-xl shadow-2xl border-2 border-[#CEA53D]/30"
                  style={{
                    boxShadow:
                      "0 0 30px rgba(255,215,0,0.2), inset 0 0 20px rgba(255,215,0,0.05)",
                  }}
                >
                  <div className="relative rounded-2xl overflow-hidden group">
                    <Image
                      src="/greg_and_julia.webp"
                      alt="Greg and Julia Tucker - Partners in Life and Business"
                      width={800}
                      height={800}
                      className="w-full h-auto object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                      <div>
                        <h3
                          className="text-white text-xl font-bold mb-1"
                          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                        >
                          Greg & Julia Tucker
                        </h3>
                        <p
                          className="text-[#CEA53D] text-sm font-bold uppercase"
                          style={{
                            fontFamily: "'Bebas Neue', sans-serif",
                            letterSpacing: "0.1em",
                            textShadow: "0 0 10px rgba(255,215,0,0.8)",
                          }}
                        >
                          28 Years of Partnership
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right: Team Biography */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-1 lg:order-2"
              >
                <p
                  className="mb-6 text-[#EDEDED]/85 font-light"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1.1rem",
                    lineHeight: "1.8",
                  }}
                >
                  Greg and Julia Tucker bring nearly three decades of partnership and family-centered values to GA Tucker PI Investigative Services LLC. As Owner and CEO, Greg draws on his experience as a US Army Veteran, his work in the criminal justice system, and his **three master’s degrees** (in Criminology, Legal Studies, and Forensic Behavioral Science) to lead the firm with integrity and expertise—particularly in complex cases such as missing persons and child custody matters.
                </p>

                <p
                  className="mb-6 text-[#EDEDED]/85 font-light"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1.1rem",
                    lineHeight: "1.8",
                  }}
                >
                  Julia, the firm’s Co-Owner and COO, adds more than 17 years as a licensed school psychologist, supported by dual master’s degrees in education and child psychology and a paralegal certification. Her background makes her a strong advocate for children and families, and she plays an active role in investigations involving missing children and domestic issues.
                </p>

                <p
                  className="mb-6 text-[#EDEDED]/85 font-light"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1.1rem",
                    lineHeight: "1.8",
                  }}
                >
                  Together, Greg and Julia combine professional skill with a deep commitment to supporting families, using both their expertise and personal experience to make a meaningful impact in the community.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <StickyCTAButton />
    </div>
  );
}