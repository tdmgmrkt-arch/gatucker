"use client";

import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';
import { StickyCTAButton } from '../components/sticky-cta-button';
import { RequestServiceForm } from '../components/request-service-form';
import { Phone, Mail, Shield, CheckCircle, Scale, Building, Home, FileText, Search, User, Gavel } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const relatedServices = [
  { title: 'Background Checks', href: '/background-checks' },
  { title: 'Risk Management', href: '/risk-management' },
  { title: 'Consulting', href: '/consulting' },
  { title: 'Profiling', href: '/profiling' },
  { title: 'Infidelity Investigations', href: '/infidelity' },
  { title: 'General Investigations', href: '/investigations', current: true },
  { title: 'Child Custody', href: '/child-custody' },
  { title: 'Missing Persons', href: '/missing-persons' },
  { title: 'Hollywood Fixer', href: '/hollywood-fixer' },
];

export default function InvestigationsPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
      >
        {/* Background Image - LCP optimized */}
        <Image
          src="/invetigating-services-hero.webp"
          alt="Investigation Services"
          fill
          priority
          fetchPriority="high"
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90"></div>

        {/* Top gradient border */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#CEA53D] to-transparent"></div>

        {/* Animated background glow */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(206, 165, 61, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(206, 165, 61, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(206, 165, 61, 0.15) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />

        <div className="relative max-w-7xl mx-auto">
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
              Investigation Services
            </h1>
            <p
              className="text-lg sm:text-xl text-[#EDEDED]/90 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Comprehensive investigative services covering civil, criminal, domestic, and legal matters. Professional, discreet, and effective solutions for all your investigation needs.
            </p>
          </motion.div>
        </div>

        {/* Bottom gradient border */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#CEA53D] to-transparent"></div>
      </section>

      {/* Main Content Grid */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0D0D0D] via-[#1A1A1A] to-[#0D0D0D]">
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
                >
                  <h3
                    className="text-xl font-black uppercase text-[#CEA53D] mb-4 pb-3 border-b border-[#CEA53D]/30"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    Our Services
                  </h3>
                  <nav className="space-y-1">
                    {relatedServices.map((service) => (
                      <a
                        key={service.title}
                        href={service.href}
                        className={`block px-4 py-2.5 rounded transition-all text-sm ${
                          service.current
                            ? 'bg-[#CEA53D]/20 border-l-3 border-[#CEA53D] text-[#CEA53D] font-bold'
                            : 'text-[#EDEDED]/70 hover:text-[#CEA53D] hover:bg-[#CEA53D]/5 border-l-3 border-transparent'
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
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-black/60 border-2 border-[#CEA53D]/30 rounded-lg p-5"
                >
                  <h3
                    className="text-xl font-black uppercase text-[#CEA53D] mb-4 pb-3 border-b border-[#CEA53D]/30"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    Quick Contact
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="tel:909-964-8976"
                      className="flex items-center gap-3 text-[#EDEDED]/80 hover:text-[#CEA53D] transition-colors group"
                    >
                      <Phone className="w-4 h-4 text-[#CEA53D]" />
                      <span className="text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                        909-964-8976
                      </span>
                    </a>
                    <a
                      href="mailto:gatuckerpi@gmail.com"
                      className="flex items-center gap-3 text-[#EDEDED]/80 hover:text-[#CEA53D] transition-colors group"
                    >
                      <Mail className="w-4 h-4 text-[#CEA53D]" />
                      <span className="text-sm break-all" style={{ fontFamily: "'Inter', sans-serif" }}>
                        gatuckerpi@gmail.com
                      </span>
                    </a>
                  </div>

                  <a
                    href="#contact"
                    className="mt-6 w-full bg-[#CEA53D] text-black px-4 py-3 font-black uppercase text-sm tracking-wider transition-all hover:bg-[#CEA53D]/90 active:scale-95 flex items-center justify-center gap-2"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      boxShadow: '0 0 20px rgba(206, 165, 61, 0.3)',
                    }}
                  >
                    Request Service
                  </a>
                </motion.div>

                {/* Investigation Types Widget */}
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
                    Services Offered
                  </h3>
                  <ul className="space-y-3">
                    {['Civil Investigations', 'Commercial Inquiries', 'Real Estate Research', 'Neighborhood Checks', 'Legal Support'].map((service) => (
                      <li key={service} className="flex items-center gap-2 text-[#EDEDED]/70 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <CheckCircle className="w-4 h-4 text-[#CEA53D] flex-shrink-0" />
                        {service}
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
                    {['Experienced Professionals', 'Legal Compliance', 'Detailed Reporting', 'Court-Ready Evidence', 'Confidential Service'].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[#EDEDED]/70 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <Shield className="w-4 h-4 text-[#CEA53D] flex-shrink-0 mt-0.5" />
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
                  className="bg-black/60 border-2 border-[#CEA53D]/30 rounded-lg p-5 text-center"
                >
                  <Shield className="w-12 h-12 text-[#CEA53D] mx-auto mb-3" />
                  <p className="text-[#EDEDED]/70 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
                    California PI License
                  </p>
                  <p className="text-[#CEA53D] font-bold text-sm mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                    #188351
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
                transition={{ duration: 0.6 }}
              >
                <h2
                  className="text-3xl sm:text-4xl font-black uppercase text-[#CEA53D] mb-6"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  Professional Investigation Services
                </h2>
                <div className="space-y-4 text-[#EDEDED]/80" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <p className="leading-relaxed">
                    GA Tucker Private Investigator offers comprehensive investigation services across multiple disciplines. With decades of experience and a proven track record, we provide professional, reliable, and discreet investigative solutions for individuals, attorneys, businesses, and organizations.
                  </p>
                  <p className="leading-relaxed">
                    Our team of licensed investigators utilizes the latest technology, proven methodologies, and extensive databases to uncover the truth and provide you with actionable intelligence. All investigations are conducted legally and ethically, ensuring results that stand up in court.
                  </p>
                </div>
              </motion.div>

              {/* Civil Investigations Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-[#CEA53D]/10 to-black/40 border-2 border-[#CEA53D]/40 rounded-lg p-8"
              >
                <div className="flex items-start gap-4 mb-6">
                  <Scale className="w-12 h-12 text-[#CEA53D] flex-shrink-0" />
                  <div>
                    <h2
                      className="text-3xl sm:text-4xl font-black uppercase text-[#CEA53D] mb-4"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      Civil Investigations
                    </h2>
                    <p className="text-[#EDEDED]/80 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Civil investigations support attorneys and individuals involved in litigation, insurance claims, and dispute resolution. We gather evidence, locate witnesses, and provide comprehensive documentation for civil proceedings.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  {[
                    {
                      title: 'Personal Injury Cases',
                      description: 'Surveillance and investigation to verify injury claims, document activities, and uncover fraud.',
                    },
                    {
                      title: 'Workers Compensation',
                      description: 'Investigation of suspected fraudulent claims with video documentation and activity monitoring.',
                    },
                    {
                      title: 'Insurance Fraud',
                      description: 'Comprehensive investigation of suspicious claims including surveillance, interviews, and background checks.',
                    },
                    {
                      title: 'Asset Searches',
                      description: 'Locate hidden assets, property, bank accounts, and income sources for litigation support.',
                    },
                    {
                      title: 'Witness Location',
                      description: 'Track down and interview key witnesses for depositions and court proceedings.',
                    },
                    {
                      title: 'Litigation Support',
                      description: 'Comprehensive investigative support for attorneys including evidence gathering and case development.',
                    },
                  ].map((service, index) => (
                    <div
                      key={service.title}
                      className="bg-black/40 border-l-4 border-[#CEA53D] p-5"
                    >
                      <h3
                        className="text-lg font-bold text-[#EDEDED] mb-2"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {service.title}
                      </h3>
                      <p className="text-[#EDEDED]/70 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {service.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Criminal Investigations Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <Gavel className="w-12 h-12 text-[#CEA53D] flex-shrink-0" />
                  <div>
                    <h2
                      className="text-3xl sm:text-4xl font-black uppercase text-[#CEA53D] mb-4"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      Criminal Investigations
                    </h2>
                    <p className="text-[#EDEDED]/80 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                      We assist defense attorneys, prosecutors, and individuals with comprehensive criminal investigations. Our work includes evidence gathering, witness interviews, alibi verification, and case development to support the criminal justice process.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      title: 'Defense Investigation',
                      description: 'Thorough investigation for criminal defense cases including witness interviews, evidence collection, and alibi verification. We work closely with defense attorneys to uncover exculpatory evidence and challenge prosecution claims.',
                    },
                    {
                      title: 'Cold Case Review',
                      description: 'Re-examination of unsolved cases using fresh perspectives, new investigative techniques, and updated technology. We review evidence, re-interview witnesses, and pursue new leads.',
                    },
                    {
                      title: 'Evidence Analysis',
                      description: 'Comprehensive review and analysis of physical evidence, documents, and digital data. We identify inconsistencies, missing elements, and alternative interpretations.',
                    },
                    {
                      title: 'Witness Credibility Assessment',
                      description: 'Background investigation of prosecution witnesses, identification of bias or motive to lie, and documentation of prior inconsistent statements.',
                    },
                  ].map((service, index) => (
                    <div
                      key={service.title}
                      className="bg-black/40 border-2 border-[#CEA53D]/30 rounded-lg p-6"
                    >
                      <h3
                        className="text-xl font-bold text-[#EDEDED] mb-3"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {service.title}
                      </h3>
                      <p className="text-[#EDEDED]/70 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {service.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Domestic Investigations Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-[#CEA53D]/10 to-black/40 border-2 border-[#CEA53D]/40 rounded-lg p-8"
              >
                <div className="flex items-start gap-4 mb-6">
                  <Home className="w-12 h-12 text-[#CEA53D] flex-shrink-0" />
                  <div>
                    <h2
                      className="text-3xl sm:text-4xl font-black uppercase text-[#CEA53D] mb-4"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      Domestic Investigations
                    </h2>
                    <p className="text-[#EDEDED]/80 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Sensitive investigations related to family matters, relationships, and domestic concerns. We handle these delicate situations with discretion, compassion, and professionalism.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  {[
                    {
                      title: 'Marital Infidelity',
                      description: 'Discreet surveillance and investigation to confirm or dispel suspicions of spousal infidelity.',
                      icon: Search,
                    },
                    {
                      title: 'Child Custody Support',
                      description: 'Documentation of parenting practices, living conditions, and fitness for custody proceedings.',
                      icon: User,
                    },
                    {
                      title: 'Alimony/Support Verification',
                      description: 'Investigation of cohabitation, employment, and lifestyle to support modification requests.',
                      icon: FileText,
                    },
                    {
                      title: 'Parental Alienation',
                      description: 'Documentation of attempts to damage child-parent relationships through manipulation or interference.',
                      icon: CheckCircle,
                    },
                  ].map((service, index) => (
                    <div
                      key={service.title}
                      className="bg-black/40 border-2 border-[#CEA53D]/30 rounded-lg p-6 hover:border-[#CEA53D]/60 transition-all"
                    >
                      <service.icon className="w-10 h-10 text-[#CEA53D] mb-4" />
                      <h3
                        className="text-lg font-bold text-[#EDEDED] mb-3"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {service.title}
                      </h3>
                      <p className="text-[#EDEDED]/70 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {service.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Legal/Process Server Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <Building className="w-12 h-12 text-[#CEA53D] flex-shrink-0" />
                  <div>
                    <h2
                      className="text-3xl sm:text-4xl font-black uppercase text-[#CEA53D] mb-4"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      Legal Services & Process Serving
                    </h2>
                    <p className="text-[#EDEDED]/80 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Professional legal support services including process serving, document delivery, and court filing assistance. We ensure proper service of process and maintain detailed records for legal compliance.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-black/40 border-2 border-[#CEA53D]/30 rounded-lg p-6">
                    <h3
                      className="text-xl font-bold text-[#EDEDED] mb-4"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      Process Serving Services
                    </h3>
                    <ul className="space-y-3">
                      {[
                        'Summons and complaints',
                        'Subpoenas (civil and criminal)',
                        'Restraining orders and protective orders',
                        'Eviction notices',
                        'Divorce and family law documents',
                        'Small claims paperwork',
                        'Business and contract documents',
                        'Rush and same-day service available',
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-[#CEA53D] flex-shrink-0 mt-0.5" />
                          <span className="text-[#EDEDED]/80" style={{ fontFamily: "'Inter', sans-serif" }}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-black/40 border-2 border-[#CEA53D]/30 rounded-lg p-6">
                    <h3
                      className="text-xl font-bold text-[#EDEDED] mb-4"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      Skip Tracing for Service
                    </h3>
                    <p className="text-[#EDEDED]/70 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                      When individuals cannot be located at known addresses, we employ advanced skip tracing techniques to locate defendants, witnesses, or other parties who need to be served. Our investigators use database searches, surveillance, and field investigation to find evasive individuals and ensure proper service.
                    </p>
                  </div>

                  <div className="bg-black/40 border-2 border-[#CEA53D]/30 rounded-lg p-6">
                    <h3
                      className="text-xl font-bold text-[#EDEDED] mb-4"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      Court Filing Assistance
                    </h3>
                    <p className="text-[#EDEDED]/70 leading-relaxed mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                      We assist attorneys and self-represented litigants with court filing services, ensuring documents are properly filed with the appropriate court, deadlines are met, and proof of filing is provided.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form Section */}
              <div id="contact">
                <RequestServiceForm defaultService="Investigations" />
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* Additional Content - Full Width */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1A1A1A] via-[#0D0D0D] to-[#1A1A1A]">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Why Choose Us Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2
                  className="text-3xl sm:text-4xl font-black uppercase text-[#CEA53D] mb-8"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  Why Choose GA Tucker PI
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: 'Licensed & Experienced',
                      description: 'California licensed private investigator with decades of experience across all investigation types.',
                    },
                    {
                      title: 'Court-Admissible Evidence',
                      description: 'Professional documentation and reports that meet legal standards for court proceedings.',
                    },
                    {
                      title: 'Discretion Guaranteed',
                      description: 'Complete confidentiality and discreet operations to protect your privacy and case integrity.',
                    },
                    {
                      title: 'Advanced Technology',
                      description: 'Latest investigative tools, databases, and surveillance equipment for superior results.',
                    },
                    {
                      title: 'Ethical Practices',
                      description: 'All investigations conducted legally and ethically, adhering to professional standards.',
                    },
                    {
                      title: 'Comprehensive Reporting',
                      description: 'Detailed written reports with photos, videos, and documentation of all findings.',
                    },
                  ].map((reason, index) => (
                    <motion.div
                      key={reason.title}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="flex items-start gap-4 bg-black/40 border-2 border-[#CEA53D]/30 rounded-lg p-5 hover:border-[#CEA53D]/60 transition-all"
                    >
                      <CheckCircle className="w-6 h-6 text-[#CEA53D] flex-shrink-0 mt-1" />
                      <div>
                        <h3
                          className="text-lg font-bold text-[#EDEDED] mb-2"
                          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                        >
                          {reason.title}
                        </h3>
                        <p className="text-[#EDEDED]/70 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {reason.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0D0D0D] via-[#1A1A1A] to-[#0D0D0D] border-t border-[#CEA53D]/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-4xl sm:text-5xl font-black uppercase text-[#EDEDED] mb-6"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                textShadow: '0 0 30px rgba(206, 165, 61, 0.3)',
              }}
            >
              Ready to Start Your Investigation?
            </h2>
            <p className="text-[#EDEDED]/80 text-lg mb-8 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              Contact us today for a confidential consultation about your investigation needs. We&apos;re here to help you find the truth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:909-964-8976"
                className="bg-[#CEA53D] text-black px-8 py-4 font-black uppercase text-sm tracking-wider transition-all hover:bg-[#CEA53D]/90 active:scale-95 inline-flex items-center gap-3"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  boxShadow: '0 0 30px rgba(206, 165, 61, 0.4)',
                }}
              >
                <Phone className="w-5 h-5" />
                Call 909-964-8976
              </a>
              <a
                href="mailto:gatuckerpi@gmail.com"
                className="bg-black border-2 border-[#CEA53D] text-[#CEA53D] px-8 py-4 font-black uppercase text-sm tracking-wider transition-all hover:bg-[#CEA53D] hover:text-black active:scale-95 inline-flex items-center gap-3"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>

            {/* Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-16 bg-black/40 border-2 border-[#CEA53D]/30 rounded-lg p-8"
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#CEA53D] text-xl">★</span>
                ))}
              </div>
              <p
                className="text-[#EDEDED]/80 italic text-lg mb-4 leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                &quot;GA Tucker&apos;s investigation was thorough, professional, and exactly what we needed for our case. The detailed reports and evidence gathering were exceptional. Highly recommended for anyone needing a reliable investigator.&quot;
              </p>
              <p className="text-[#CEA53D] font-bold" style={{ fontFamily: "'Inter', sans-serif" }}>
                - Attorney Client
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <StickyCTAButton />
    </div>
  );
}
