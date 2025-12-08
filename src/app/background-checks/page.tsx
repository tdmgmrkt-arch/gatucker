"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Shield, Users, FileCheck, Phone, Search, Eye, UserCheck, Mail, MapPin } from "lucide-react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { StickyCTAButton } from "../components/sticky-cta-button";
import { RequestServiceForm } from "../components/request-service-form";
import { FAQAccordion } from "../components/faq-accordion";

const relatedServices = [
  { title: 'Background Checks', href: '/background-checks' },
  { title: 'Risk Management', href: '/risk-management' },
  { title: 'Investigations', href: '/investigations' },
  { title: 'Consulting', href: '/consulting' },
  { title: 'Missing Persons', href: '/missing-persons' },
  { title: 'Profiling', href: '/profiling' },
  { title: 'Infidelity', href: '/infidelity' },
  { title: 'Child Custody', href: '/child-custody' },
];

const features = [
  {
    number: "01",
    title: "Provide Crucial Information",
    description: "Access to exclusive databases unavailable to the public",
    icon: FileCheck,
  },
  {
    number: "02",
    title: "Non-Disclosure Information",
    description: "Confidential handling of sensitive personal data",
    icon: Shield,
  },
  {
    number: "03",
    title: "Employment Background Checks",
    description: "Comprehensive pre-employment screening services",
    icon: Users,
  },
  {
    number: "04",
    title: "Criminal Background Checks",
    description: "Complete criminal history and record searches",
    icon: Search,
  },
];

const capabilities = [
  {
    icon: Search,
    title: "Criminal Records",
    description: "We are able to identify any and all criminal offenses through our database.",
  },
  {
    icon: Eye,
    title: "Social Media Check",
    description: "Our comprehensive background check covers all social media accounts that are public.",
  },
  {
    icon: UserCheck,
    title: "Locate Individuals",
    description: "Track down current addresses, phone numbers, and contact information for persons of interest.",
  },
];

const reviews = [
  {
    name: "Blake L.",
    date: "3/4/2025",
    text: "Greg was extremely helpful!",
  },
  {
    name: "Jon D.",
    date: "2/28/2025",
    text: "Very professional and intricate background checks for my business. Super important service, HIGH VALUE!",
  },
];

export default function BackgroundChecksPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] overflow-x-hidden">
      <Navbar />

      {/* Hero Section - Full Width */}
      <section
        className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/background_check_hero_bg.webp')",
        }}
      >
        {/* Dark Gradient Overlay (on top of background image) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90"></div>

        {/* Gradient Borders (above image + overlay) */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#CEA53D]/40 to-transparent z-10" />
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#CEA53D]/20 to-transparent blur-sm z-10" />

        {/* Background Glow (above overlay but behind content) */}
        <div
          className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-[#CEA53D]/10 rounded-full blur-[140px] animate-pulse z-10"
          style={{ animationDuration: "5s" }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="pt-20 text-center max-w-7xl mx-auto"
          >
            <h1
              className="mb-6 font-black uppercase tracking-tight leading-none"
              style={{
                fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
                fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
                color: "#FFF",
                textShadow: "0 0 40px rgba(206, 165, 61, 0.3)",
              }}
            >
              Background Check Investigator
            </h1>
            <div
              className="h-1 w-32 bg-[#CEA53D] mx-auto mb-8"
              style={{
                boxShadow: "0 0 15px rgba(255,215,0,0.7), 0 0 30px rgba(255,215,0,0.4)",
              }}
            />
            <p
              className="text-[#EDEDED]/90 text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Access exclusive databases and uncover crucial information unavailable to the public. Licensed, discreet, and thorough background investigations for individuals and corporations.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-[#CEA53D] text-sm md:text-base">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span style={{ fontFamily: "'Inter', sans-serif" }}>Licensed by CA</span>
              </div>
              <span className="text-[#CEA53D]/30">|</span>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span style={{ fontFamily: "'Inter', sans-serif" }}>24/7 Available</span>
              </div>
              <span className="text-[#CEA53D]/30">|</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span style={{ fontFamily: "'Inter', sans-serif" }}>Confidential</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section with Sidebar */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">

            {/* Sidebar - Left */}
            <aside className="lg:col-span-3">
              <div className="lg:sticky lg:top-24 space-y-6">

                {/* Related Services Widget */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-black/60 border-2 border-[#CEA53D]/30 rounded-lg p-5"
                  style={{ boxShadow: "0 0 20px rgba(206,165,61,0.1)" }}
                >
                  <h3
                    className="text-xl font-black uppercase text-[#CEA53D] mb-4 pb-3 border-b border-[#CEA53D]/30"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
                  >
                    Our Services
                  </h3>
                  <nav className="space-y-1">
                    {relatedServices.map((service) => (
                      <a
                        key={service.title}
                        href={service.href}
                        className={`block px-3 py-2.5 rounded transition-all duration-200 text-sm ${
                          service.title === 'Background Checks'
                            ? 'bg-[#CEA53D]/20 border-l-3 border-[#CEA53D] text-[#CEA53D] font-bold'
                            : 'text-[#EDEDED]/70 hover:text-[#CEA53D] hover:bg-[#CEA53D]/5 hover:border-l-3 hover:border-[#CEA53D]/50'
                        }`}
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {service.title}
                      </a>
                    ))}
                  </nav>
                </motion.div>

                {/* Quick Contact Widget */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border-2 border-[#CEA53D]/40 rounded-lg p-5"
                  style={{ boxShadow: "0 0 30px rgba(206,165,61,0.15)" }}
                >
                  <h3
                    className="text-lg font-black uppercase text-[#EDEDED] mb-4"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    Get Started Now
                  </h3>
                  <div className="space-y-4 mb-5">
                    <a
                      href="tel:909-964-8976"
                      className="flex items-center gap-3 text-[#CEA53D] hover:text-[#FFA500] transition-colors"
                    >
                      <Phone className="w-5 h-5 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-[#EDEDED]/60" style={{ fontFamily: "'Inter', sans-serif" }}>
                          Call 24/7
                        </p>
                        <p className="font-bold" style={{ fontFamily: "'Inter', sans-serif" }}>
                          909-964-8976
                        </p>
                      </div>
                    </a>
                    <a
                      href="mailto:gatuckerpi@gmail.com"
                      className="flex items-center gap-3 text-[#EDEDED]/80 hover:text-[#CEA53D] transition-colors"
                    >
                      <Mail className="w-5 h-5 flex-shrink-0 text-[#CEA53D]/70" />
                      <div>
                        <p className="text-xs text-[#EDEDED]/60" style={{ fontFamily: "'Inter', sans-serif" }}>
                          Email
                        </p>
                        <p className="text-sm font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                          gatuckerpi@gmail.com
                        </p>
                      </div>
                    </a>
                  </div>
                  <a
                    href="/request-service-form"
                    className="block w-full bg-black border-3 border-[#CEA53D] text-[#CEA53D] py-3 text-center font-black uppercase text-sm tracking-wider transition-all duration-300 hover:bg-[#CEA53D] hover:text-black"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      boxShadow: "0 0 15px rgba(255, 215, 0, 0.4)",
                    }}
                  >
                    Request Service
                  </a>
                </motion.div>

                {/* Check Types Widget */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-black/60 border-2 border-[#CEA53D]/30 rounded-lg p-5"
                >
                  <h3
                    className="text-xl font-black uppercase text-[#CEA53D] mb-4 pb-3 border-b border-[#CEA53D]/30"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    Check Types
                  </h3>
                  <ul className="space-y-3">
                    {['Personal', 'Employment', 'Criminal', 'Corporate'].map((type) => (
                      <li key={type} className="flex items-center gap-2 text-[#EDEDED]/70 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <CheckCircle2 className="w-4 h-4 text-[#CEA53D] flex-shrink-0" />
                        {type} Background Checks
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* What We Find Widget */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-black/60 border-2 border-[#CEA53D]/30 rounded-lg p-5"
                >
                  <h3
                    className="text-xl font-black uppercase text-[#CEA53D] mb-4 pb-3 border-b border-[#CEA53D]/30"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    What We Find
                  </h3>
                  <ul className="space-y-3">
                    {['Criminal Records', 'Employment History', 'Social Media Activity', 'Property Records', 'Court Documents'].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[#EDEDED]/70 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <Search className="w-4 h-4 text-[#CEA53D] flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* License Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-black border-3 border-[#CEA53D] rounded-lg p-4 text-center transform hover:scale-105 transition-transform duration-300"
                  style={{
                    boxShadow: "0 0 25px rgba(255,215,0,0.4), inset 0 0 15px rgba(255,215,0,0.1)",
                  }}
                >
                  <Shield className="w-10 h-10 text-[#CEA53D] mx-auto mb-2" />
                  <p
                    className="text-[#CEA53D] font-black tracking-wider uppercase text-sm mb-1"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      textShadow: "0 0 10px rgba(255,215,0,0.6)",
                    }}
                  >
                    Licensed PI
                  </p>
                  <p
                    className="text-[#EDEDED]/80 text-xs"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    CA License #188351
                  </p>
                </motion.div>

              </div>
            </aside>

            {/* Main Content - Right */}
            <main className="lg:col-span-9 space-y-16">

              {/* Overview Section with Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div>
                    <h2
                      className="text-3xl md:text-4xl font-black uppercase mb-4 leading-tight"
                      style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        color: "#EDEDED",
                      }}
                    >
                      Hire Southern California Background Check Investigator
                    </h2>
                    <div
                      className="h-1 w-24 bg-[#CEA53D] mb-6"
                      style={{
                        boxShadow: "0 0 15px rgba(255,215,0,0.7)",
                      }}
                    />
                    <p
                      className="text-[#EDEDED]/85 mb-4 leading-relaxed"
                      style={{ fontFamily: "'Inter', sans-serif", lineHeight: "1.8" }}
                    >
                      It is important to conduct background checks when pursuing the truth about someone&apos;s past as well as identifying criminal records, marriage certificates, vehicle registration, social media activity, along with the individuals the subject is affiliated with. This information is beneficial for building a defense, strengthening a case, and uncovering the truth.
                    </p>
                    <p
                      className="text-[#EDEDED]/85 leading-relaxed"
                      style={{ fontFamily: "'Inter', sans-serif", lineHeight: "1.8" }}
                    >
                      Private investigators such as GA Tucker PI have access to databases that provide information that is usually unavailable to the public. The biggest misconception we encounter is that individuals believe the information they pull from various websites will provide the same content as our resources.
                    </p>
                  </div>
                  <div className="relative">
                    <div
                      className="relative p-3 bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] rounded-xl border-2 border-[#CEA53D]/30"
                      style={{
                        boxShadow: "0 0 30px rgba(255,215,0,0.2)",
                      }}
                    >
                      <Image
                        src="/gatuckerbwport.png"
                        alt="Greg Tucker - Background Check Investigator"
                        width={600}
                        height={600}
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-[#CEA53D]/10 border-l-4 border-[#CEA53D] p-5 mt-8 rounded-r">
                  <p
                    className="text-[#CEA53D] font-bold text-lg flex items-center gap-2"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    Contact us for a full comprehensive background check.
                  </p>
                </div>
              </motion.div>

              {/* Features Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3
                  className="text-2xl md:text-3xl font-black uppercase text-[#EDEDED] mb-6"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  Why Choose Our Background Check Services
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.number}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group relative bg-gradient-to-br from-black/60 to-black/40 border-2 border-[#CEA53D]/30 rounded-lg p-6 hover:border-[#CEA53D]/70 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <span
                          className="text-4xl font-black text-[#CEA53D]/30 leading-none"
                          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                        >
                          {feature.number}
                        </span>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <feature.icon className="w-6 h-6 text-[#CEA53D]" />
                            <h4
                              className="text-[#EDEDED] font-bold text-lg"
                              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                            >
                              {feature.title}
                            </h4>
                          </div>
                          <p
                            className="text-[#EDEDED]/70 text-sm"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Capabilities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3
                  className="text-2xl md:text-3xl font-black uppercase text-[#EDEDED] mb-6"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  Our Capabilities
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {capabilities.map((capability, index) => (
                    <motion.div
                      key={capability.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-black/40 border-2 border-[#CEA53D]/30 rounded-lg p-6 text-center hover:border-[#CEA53D]/70 transition-all duration-300"
                    >
                      <div className="flex justify-center mb-4">
                        <div
                          className="w-14 h-14 rounded-full bg-[#CEA53D]/10 flex items-center justify-center"
                          style={{ boxShadow: "0 0 20px rgba(255,215,0,0.3)" }}
                        >
                          <capability.icon className="w-7 h-7 text-[#CEA53D]" />
                        </div>
                      </div>
                      <h4
                        className="text-[#CEA53D] text-lg font-bold uppercase mb-2"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {capability.title}
                      </h4>
                      <p
                        className="text-[#EDEDED]/75 text-sm"
                        style={{ fontFamily: "'Inter', sans-serif", lineHeight: "1.6" }}
                      >
                        {capability.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Employment and Personal Background Checks */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border-2 border-[#CEA53D]/30 rounded-xl p-8"
              >
                <h3
                  className="text-2xl md:text-3xl font-black uppercase text-[#EDEDED] mb-4"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  Employment and Personal Background Checks
                </h3>
                <p
                  className="text-[#EDEDED]/85 mb-6 leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif", lineHeight: "1.8" }}
                >
                  There is no standard or routine background check. The investigation should be tailored to your areas of concern, reasons for finding out more, and your overall needs. Whether you&apos;re hiring a new employee, looking for a nanny, or are about to make a new investment, a background check can ensure the safety of everyone involved.
                </p>
              </motion.div>

              {/* Contact Form Section */}
              <div id="contact">
                <RequestServiceForm defaultService="Background Checks" />
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* Additional Content - Full Width */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1A1A1A] via-[#0D0D0D] to-[#1A1A1A]">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* What Can Be Found */}
          <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3
                  className="text-2xl md:text-3xl font-black uppercase text-[#EDEDED] mb-6"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  What Can Be Found in a Background Check?
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-black/40 border-2 border-[#CEA53D]/30 rounded-lg p-6">
                    <h4
                      className="text-[#CEA53D] text-xl font-bold uppercase mb-4"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      Personal Background Check
                    </h4>
                    <ul className="space-y-2.5">
                      {[
                        'Address where individuals have lived at',
                        'Criminal records',
                        'Emails',
                        'Personal residencies',
                        'Phone numbers',
                        'Property'
                      ].map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2.5 text-[#EDEDED]/85 text-sm"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#CEA53D] flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-black/40 border-2 border-[#CEA53D]/30 rounded-lg p-6">
                    <h4
                      className="text-[#CEA53D] text-xl font-bold uppercase mb-4"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      Criminal Background Check
                    </h4>
                    <ul className="space-y-2.5">
                      {[
                        'Arrests',
                        'Convictions of felonies and misdemeanors',
                        'Court records (dockets, orders, decrees, judgements)',
                        'Incarceration records',
                        'Sex offenses',
                        'Warrants'
                      ].map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2.5 text-[#EDEDED]/85 text-sm"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#CEA53D] flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Personal Background Checks Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3
                  className="text-2xl md:text-3xl font-black uppercase text-[#EDEDED] mb-4"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  Completing Personal Background Checks
                </h3>
                <div className="bg-black/40 border-2 border-[#CEA53D]/30 rounded-lg p-6 space-y-4">
                  <p
                    className="text-[#EDEDED]/85 leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif", lineHeight: "1.8" }}
                  >
                    Are you or your loved one dating someone online and want to know more? Or do you just want more information about a person? Do you have an ex-business partner avoiding a court order judgment? GA Tucker PI is one of the top investigative firms that conduct personal background checks!
                  </p>
                  <p
                    className="text-[#EDEDED]/85 leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif", lineHeight: "1.8" }}
                  >
                    There are various reasons why a personal background check is needed. You might want to find a long-lost friend, find out who you are communicating with online or to see if your daughter is dating a criminal. At GA Tucker PI, a private investigator in Murrieta, CA provides a detailed and thorough background check to our clients. Unlike personal background checks that a person can get online through a national background agency, our information can only be obtained by licensed professionals. Therefore, the information we share is more accurate than self-service options.
                  </p>
                </div>
              </motion.div>

              {/* Corporate Background Checks */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3
                  className="text-2xl md:text-3xl font-black uppercase text-[#EDEDED] mb-4"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  Corporate Background Checks
                </h3>
                <p
                  className="text-[#EDEDED]/85 mb-6 leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif", lineHeight: "1.8" }}
                >
                  Whether your company is a small business or a national chain, GA Tucker PI provides comprehensive corporate background checks:
                </p>
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    {
                      title: 'Employees',
                      description: 'We offer customized pre-employment background checks compliant with state laws. We give peace of mind when employers are making hiring decisions.'
                    },
                    {
                      title: 'Business Associates',
                      description: 'We investigate litigation, business affiliations, judgments and liens, sexual offender records, licenses, corporate filings, real property, and more.'
                    },
                    {
                      title: 'Contractors/Professionals',
                      description: 'We will check for licenses, bonds, liens, judgments, malpractice, worker\'s compensation insurance, and litigation records.'
                    },
                    {
                      title: 'Debtors',
                      description: 'We are able to determine if your subject has multiple liens and judgments already filed. We check litigation records and lis pendens.'
                    }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-black/40 border-2 border-[#CEA53D]/30 rounded-lg p-5 hover:border-[#CEA53D]/70 transition-all duration-300"
                    >
                      <h4
                        className="text-[#CEA53D] text-lg font-bold uppercase mb-2"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {item.title}
                      </h4>
                      <p
                        className="text-[#EDEDED]/80 text-sm"
                        style={{ fontFamily: "'Inter', sans-serif", lineHeight: "1.6" }}
                      >
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Learn More / Legal Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3
                  className="text-2xl md:text-3xl font-black uppercase text-[#EDEDED] mb-4"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  Learn More About Background Checks
                </h3>
                <div className="bg-black/40 border-2 border-[#CEA53D]/30 rounded-lg p-6 space-y-5">
                  <p
                    className="text-[#EDEDED]/85 leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif", lineHeight: "1.8" }}
                  >
                    Under the Fair Credit Reporting Act (FCRA)*, criminal background checks cannot contain records of civil suits or arrests after seven years. Criminal convictions stay on a person&apos;s record indefinitely, but California doesn&apos;t allow employers to see convictions more than seven years old for most jobs.
                  </p>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-black/60 border-l-4 border-[#CEA53D] p-4">
                      <h4
                        className="text-[#CEA53D] font-bold mb-2 text-sm uppercase"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        SSN Validation
                      </h4>
                      <p
                        className="text-[#EDEDED]/75 text-sm leading-relaxed"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        Confirm a person&apos;s eligibility to work in the U.S. and verify name and address history.
                      </p>
                    </div>

                    <div className="bg-black/60 border-l-4 border-[#CEA53D] p-4">
                      <h4
                        className="text-[#CEA53D] font-bold mb-2 text-sm uppercase"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        Sex Offender Registry
                      </h4>
                      <p
                        className="text-[#EDEDED]/75 text-sm leading-relaxed"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        Access to all U.S. state, tribal, and territory sex offender registries.
                      </p>
                    </div>

                    <div className="bg-black/60 border-l-4 border-[#CEA53D] p-4">
                      <h4
                        className="text-[#CEA53D] font-bold mb-2 text-sm uppercase"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        Credit Report
                      </h4>
                      <p
                        className="text-[#EDEDED]/75 text-sm leading-relaxed"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        Employment credit checks with explicit written permission per FCRA guidelines.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Asset Search Callout */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-gradient-to-r from-[#CEA53D]/10 to-transparent border-l-4 border-[#CEA53D] p-6 rounded-r-lg">
                  <h3
                    className="text-xl md:text-2xl font-black uppercase text-[#EDEDED] mb-3"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    Asset Search Services Also Available
                  </h3>
                  <p
                    className="text-[#EDEDED]/85 leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif", lineHeight: "1.7" }}
                  >
                    GA Tucker PI also offers professional asset searches for our customers. For a FREE estimate from our fully licensed private investigator in San Diego, CA, call (909) 220-4006 today! We&apos;re here for you 24 hours a day, 7 days a week!
                  </p>
                </div>
              </motion.div>

              {/* Reviews */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3
                  className="text-2xl md:text-3xl font-black uppercase text-[#EDEDED] mb-6"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  Client Reviews
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {reviews.map((review, index) => (
                    <div
                      key={index}
                      className="bg-black/40 border-2 border-[#CEA53D]/30 rounded-lg p-5"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <p
                          className="text-[#CEA53D] font-bold"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {review.name}
                        </p>
                        <span className="text-[#EDEDED]/40">•</span>
                        <p
                          className="text-[#EDEDED]/60 text-sm"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {review.date}
                        </p>
                      </div>
                      <p
                        className="text-[#EDEDED]/85 italic leading-relaxed"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        &ldquo;{review.text}&rdquo;
                      </p>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-6">
                  <a
                    href="#"
                    className="text-[#CEA53D] hover:text-[#FFA500] font-bold uppercase transition-colors inline-flex items-center gap-2"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
                  >
                    Read More Reviews
                    <span>→</span>
                  </a>
                </div>
              </motion.div>

              {/* FAQs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3
                  className="text-2xl md:text-3xl font-black uppercase text-[#EDEDED] mb-6"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  Frequently Asked Questions
                </h3>
                <FAQAccordion faqs={[
                  {
                    question: 'How long do background checks take?',
                    answer: 'Background checks usually take one to two business days to pull. We begin by gathering information through our comprehensive check and then have our technical analyst dig further into the content to establish connections.'
                  },
                  {
                    question: 'What are the charges of this investigation?',
                    answer: 'Prices vary based on the details and conditions of each particular case. Contact us for a consultation.'
                  },
                  {
                    question: 'What are the benefits of choosing GA Tucker PI?',
                    answer: 'We work closely with all of our clients to provide the best service possible. We manage our client\'s hours and prioritize efficiency.'
                  }
                ]} />
              </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0D0D0D] via-[#1A1A1A] to-[#0D0D0D] border-t border-[#CEA53D]/30">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#CEA53D]/40 to-transparent" />

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center bg-black/80 border-2 border-[#CEA53D]/40 rounded-xl p-10"
            style={{ boxShadow: "0 0 40px rgba(206,165,61,0.2)" }}
          >
            <h3
              className="text-3xl md:text-5xl font-black uppercase text-[#EDEDED] mb-3"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Greg Tucker – Private Investigator California
            </h3>
            <p
              className="text-[#EB0A08] text-2xl md:text-3xl mb-6"
              style={{
                fontFamily: "var(--font-dancing-script)",
                fontWeight: 700,
                textShadow: "0 0 8px rgba(255, 30, 30, 0.7)",
              }}
            >
              Don&apos;t be a sucker – call Tucker
            </p>
            <p
              className="text-[#EDEDED]/80 mb-8 text-lg"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Your California Private Investigator
            </p>
            <a href="tel:909-964-8976" className="inline-block">
              <button
                className="bg-black border-4 border-[#CEA53D] text-[#CEA53D] px-12 py-5 font-black uppercase tracking-wider transition-all duration-300 hover:bg-[#CEA53D] hover:text-black hover:scale-105 active:scale-95"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "1.3rem",
                  boxShadow: "0 0 25px rgba(255, 215, 0, 0.5)",
                  textShadow: "0 0 10px rgba(255, 215, 0, 0.7)",
                }}
              >
                <Phone className="inline-block mr-3 mb-1" size={24} />
                909-964-8976
              </button>
            </a>
            <p
              className="text-[#EDEDED]/60 text-sm mt-4"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              24/7 Consultations Available
            </p>

            {/* Mini Testimonials */}
            <div className="grid md:grid-cols-3 gap-5 mt-10">
              {[
                {
                  name: 'Tom — Murrieta, CA',
                  text: 'Incredible attention to detail. Highly knowledgeable, Best representation ever.'
                },
                {
                  name: 'Jonathon — A Satisfied Client',
                  text: 'Quick and detailed information! Discreet and accurate investigation.'
                },
                {
                  name: 'Ashley M. — Local Attorney',
                  text: 'I use Greg Tucker on many of my cases. He is a professional and will go out of the way.'
                }
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-black/60 border-2 border-[#CEA53D]/20 rounded-lg p-5 text-left"
                >
                  <p
                    className="text-[#EDEDED]/75 italic mb-3 text-sm leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <p
                    className="text-[#CEA53D] font-bold text-xs"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {testimonial.name}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <StickyCTAButton />
    </div>
  );
}
