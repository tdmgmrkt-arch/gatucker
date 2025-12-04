"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Shield, Users, FileCheck, Phone, Search, Eye, UserCheck, Mail, AlertTriangle, FileText, Lock } from "lucide-react";
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
    title: "Identify Risk",
    description: "A risk management plan helps companies identify risk",
    icon: Search,
  },
  {
    number: "02",
    title: "Fiscally Prudent",
    description: "Having a risk management plan is fiscally prudent",
    icon: FileCheck,
  },
  {
    number: "03",
    title: "Protect Resources",
    description: "A risk management plan protects a company's resources",
    icon: Shield,
  },
  {
    number: "04",
    title: "Improve Brand",
    description: "A risk management plan improves a company's brand",
    icon: Users,
  },
];

const capabilities = [
  {
    icon: AlertTriangle,
    title: "Potential Threat",
    description: "By doing a risk management investigation, you will be able to find out about the potential threats to your company and can take better action.",
  },
  {
    icon: FileText,
    title: "Collect All Evidence",
    description: "We utilize our sophisticated databases to collect any and all evidence.",
  },
  {
    icon: Lock,
    title: "Record of Activities",
    description: "All evidence and activities will be recorded and organized to strengthen the case.",
  },
];

const threatTypes = [
  "Actual threats",
  "Inherent threats",
  "Potential threats",
  "Vulnerability risks",
];

const whyChoose = [
  "99% success rate solving cases",
  "100% confidential",
  "Expert surveillance agents and technical analysts",
  "Over 15 years experience",
];

const reviews = [
  {
    name: "John M.",
    date: "3/24/2025",
    text: "Greg Tucker is a lifesaver! When my company faced a serious threat, his investigative skills uncovered the truth and saved us from potential disaster. His professionalism, discretion, and relentless dedication made all the difference. If you need a private investigator who delivers real results, Greg Tucker is the one to call. Highly recommended!",
  },
  {
    name: "Robert D.",
    date: "3/21/2025",
    text: "Mr. Greg Tucker has been A great help in finding information needed to support an investigation on finances related to my wife Who passed in 2024. Thank you, Greg for all of your help sincerely, Robert Door",
  },
];

export default function RiskManagementPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] overflow-x-hidden">
      <Navbar />

      {/* Hero Section - Full Width with Background Image */}
      <section
        className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/risk-management-hero.webp')",
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
            className="pt-20 text-center max-w-6xl mx-auto"
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
              Risk Management Services
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
              Professional risk management investigators identify potential deficiencies and vulnerabilities in security and safety without disturbing your company&apos;s day-to-day activities.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-[#CEA53D] text-sm md:text-base">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span style={{ fontFamily: "'Inter', sans-serif" }}>Licensed by CA</span>
              </div>
              <span className="text-[#CEA53D]/30">|</span>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span style={{ fontFamily: "'Inter', sans-serif" }}>24/7 Consultations</span>
              </div>
              <span className="text-[#CEA53D]/30">|</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span style={{ fontFamily: "'Inter', sans-serif" }}>Confidentiality Guaranteed</span>
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
                          service.title === 'Risk Management'
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
                      href="tel:909-345-1350"
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
                      href="mailto:greg@gatucker.com"
                      className="flex items-center gap-3 text-[#EDEDED]/80 hover:text-[#CEA53D] transition-colors"
                    >
                      <Mail className="w-5 h-5 flex-shrink-0 text-[#CEA53D]/70" />
                      <div>
                        <p className="text-xs text-[#EDEDED]/60" style={{ fontFamily: "'Inter', sans-serif" }}>
                          Email
                        </p>
                        <p className="text-sm font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                          greg@gatucker.com
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

                {/* Risk Types Widget */}
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
                    Risk Types
                  </h3>
                  <ul className="space-y-3">
                    {threatTypes.map((type) => (
                      <li key={type} className="flex items-center gap-2 text-[#EDEDED]/70 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <AlertTriangle className="w-4 h-4 text-[#CEA53D] flex-shrink-0" />
                        {type}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Why Choose Us Widget */}
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
                    Why Choose Us
                  </h3>
                  <ul className="space-y-3">
                    {whyChoose.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[#EDEDED]/70 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <CheckCircle2 className="w-4 h-4 text-[#CEA53D] flex-shrink-0 mt-0.5" />
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

              {/* Overview Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2
                  className="text-3xl md:text-4xl font-black uppercase mb-4 leading-tight"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    color: "#EDEDED",
                  }}
                >
                  Hire Risk Management Expert Investigator
                </h2>
                <div
                  className="h-1 w-24 bg-[#CEA53D] mb-6"
                  style={{
                    boxShadow: "0 0 15px rgba(255,215,0,0.7)",
                  }}
                />
                <div className="space-y-4">
                  <p
                    className="text-[#EDEDED]/85 leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif", lineHeight: "1.8" }}
                  >
                    The identification and assessment of risks is a form of private investigation. Often one of the most difficult activities for an organization to perform independently, risk management investigations are best outsourced to an experienced private investigations team.
                  </p>
                  <p
                    className="text-[#EDEDED]/85 leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif", lineHeight: "1.8" }}
                  >
                    Professional risk management investigators are able to identify potential deficiencies and vulnerabilities in security and safety without disturbing the work and efficiency of your company&apos;s day-to-day activities.
                  </p>
                  <div className="bg-[#CEA53D]/10 border-l-4 border-[#CEA53D] p-5 rounded-r">
                    <p
                      className="text-[#CEA53D] font-bold text-lg flex items-center gap-2"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                      Hire GA Tucker PI for expert risk management services in Southern California. Call for a FREE same-day estimate.
                    </p>
                  </div>
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
                  Why Risk Management Matters
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

              {/* Get Professional Solutions + Contact Form */}
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
                  Get Professional Risk Management Solutions
                </h3>
                <p
                  className="text-[#EDEDED]/85 mb-6 leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif", lineHeight: "1.8" }}
                >
                  Risk management investigations make it possible for businesses to uncover threats that are focused on them, their operations, and their future.
                </p>
              </motion.div>

              {/* Contact Form Section */}
              <div id="contact">
                <RequestServiceForm defaultService="Risk Management" />
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* Additional Content - Full Width */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1A1A1A] via-[#0D0D0D] to-[#1A1A1A]">
        <div className="max-w-6xl mx-auto space-y-16">
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
                  Our Approach
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

              {/* Assessing Threats */}
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
                  Assessing Threats to Your Workplace
                </h3>
                <div className="bg-black/40 border-2 border-[#CEA53D]/30 rounded-lg p-6 space-y-4">
                  <p
                    className="text-[#EDEDED]/85 leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif", lineHeight: "1.8" }}
                  >
                    We employ a team of veteran law enforcement professionals who specialize in threat assessment. With our extensive experience, we provide customized service modules to adapt to a multitude of workplace and school violence prevention needs. We are committed to developing a prevention program to protect the interests of our corporate and educational clients, their employees, students, and facilities.
                  </p>

                  <div className="bg-black/60 border-l-4 border-[#CEA53D] p-5 rounded-r mt-6">
                    <h4
                      className="text-[#CEA53D] font-bold mb-3 uppercase text-sm"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      Choose GA Tucker PI to assess threats such as:
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {threatTypes.map((threat, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2.5 text-[#EDEDED]/85 text-sm"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#CEA53D] flex-shrink-0" />
                          {threat}
                        </li>
                      ))}
                    </ul>
                  </div>
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
                  Reviews
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

              {/* What is a Threat Assessment */}
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
                  What is a Threat Assessment?
                </h3>
                <div className="bg-black/40 border-2 border-[#CEA53D]/30 rounded-lg p-6 space-y-4">
                  <p
                    className="text-[#EDEDED]/85 leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif", lineHeight: "1.8" }}
                  >
                    A threat assessment is the evaluation and assessment of the intentions of people who could pose a threat to an organization, how they might cause harm, and their ability and motivation to carry out the task. Our team of investigators is willing to assist in resolving your situation.
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-black/60 border-l-4 border-[#CEA53D] p-4">
                      <h4
                        className="text-[#CEA53D] font-bold mb-2 text-sm uppercase"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        When Things Get Down and Dirty
                      </h4>
                      <p
                        className="text-[#EDEDED]/75 text-sm leading-relaxed"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        Anytime there is a perceived or potential threat, the threat assessment team should be involved immediately.
                      </p>
                    </div>

                    <div className="bg-black/60 border-l-4 border-[#CEA53D] p-4">
                      <h4
                        className="text-[#CEA53D] font-bold mb-2 text-sm uppercase"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        Collect All Evidence
                      </h4>
                      <p
                        className="text-[#EDEDED]/75 text-sm leading-relaxed"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        We utilize our sophisticated databases to collect any and all evidence.
                      </p>
                    </div>

                    <div className="bg-black/60 border-l-4 border-[#CEA53D] p-4">
                      <h4
                        className="text-[#CEA53D] font-bold mb-2 text-sm uppercase"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        Record of Activities
                      </h4>
                      <p
                        className="text-[#EDEDED]/75 text-sm leading-relaxed"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        All evidence and activities will be recorded and organized to strengthen the case.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Why Choose GA Tucker PI */}
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
                  Why Choose GA Tucker PI?
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {whyChoose.map((item, index) => (
                    <div
                      key={index}
                      className="bg-black/40 border-2 border-[#CEA53D]/30 rounded-lg p-5 flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-6 h-6 text-[#CEA53D] flex-shrink-0" />
                      <p
                        className="text-[#EDEDED]/85 font-medium"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
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
                  FAQs About Risk Management
                </h3>
                <FAQAccordion faqs={[
                  {
                    question: 'How would a private investigator assist with risk management?',
                    answer: 'If a person or group of people threatens you or your business, private investigators can assess the threat to find out how credible it is and what you can do about it.'
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
              className="text-[#EDEDED]/80 mb-3 text-lg"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Your California Private Investigator
            </p>
            <p
              className="text-[#CEA53D] mb-8 font-medium"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Submit Contact Form or Call Our California Private Investigator — (909)602-1930
            </p>
            <a href="tel:909-345-1350" className="inline-block">
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
                24/7 CONSULTATION
              </button>
            </a>
            <p
              className="text-[#EDEDED]/60 text-sm mt-4 uppercase tracking-wide font-bold"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Try It Now
            </p>

            {/* Testimonial */}
            <div className="mt-10">
              <h4
                className="text-[#CEA53D] text-xl font-black uppercase mb-6"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                See What Our Clients Have to Say About Us
              </h4>
              <div className="bg-black/60 border-2 border-[#CEA53D]/20 rounded-lg p-6 max-w-2xl mx-auto">
                <p
                  className="text-[#EDEDED]/75 italic mb-4 leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  &ldquo;Incredible attention to detail. Highly knowledgeable, Best representation ever. Excellent service, very caring and professional staff. I would recommend it to anyone in search of an investigator.&rdquo;
                </p>
                <p
                  className="text-[#CEA53D] font-bold"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Tom — Murrieta, CA
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <StickyCTAButton />
    </div>
  );
}
