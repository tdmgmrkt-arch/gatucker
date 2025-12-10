"use client";

import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';
import { StickyCTAButton } from '../components/sticky-cta-button';
import { RequestServiceForm } from '../components/request-service-form';
import { Phone, Mail, Shield, CheckCircle, Search, MapPin, Clock, Users, Database, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const relatedServices = [
  { title: 'Background Checks', href: '/background-checks' },
  { title: 'Risk Management', href: '/risk-management' },
  { title: 'Consulting', href: '/consulting' },
  { title: 'Profiling', href: '/profiling' },
  { title: 'Infidelity Investigations', href: '/infidelity' },
  { title: 'General Investigations', href: '/investigations' },
  { title: 'Child Custody', href: '/child-custody' },
  { title: 'Missing Persons', href: '/missing-persons', current: true },
  { title: 'Hollywood Fixer', href: '/hollywood-fixer' },
];

export default function MissingPersonsPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
      >
        {/* Background Image - LCP optimized */}
        <Image
          src="/missing-persons-hero.webp"
          alt="Missing Persons Investigation Services"
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
              Missing Persons Investigations
            </h1>
            <p
              className="text-lg sm:text-xl text-[#EDEDED]/90 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Specialized expertise in locating missing persons using advanced investigative techniques, databases, and field investigation methods. Every moment counts when someone is missing.
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

                {/* Search Methods Widget */}
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
                    Search Methods
                  </h3>
                  <ul className="space-y-3">
                    {['Database Searches', 'Field Investigation', 'Digital Footprint', 'Witness Interviews', 'Public Records'].map((method) => (
                      <li key={method} className="flex items-center gap-2 text-[#EDEDED]/70 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <Search className="w-4 h-4 text-[#CEA53D] flex-shrink-0" />
                        {method}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Who We Find Widget */}
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
                    Who We Find
                  </h3>
                  <ul className="space-y-3">
                    {['Missing Family', 'Lost Friends', 'Runaways', 'Witnesses', 'Birth Parents'].map((person) => (
                      <li key={person} className="flex items-start gap-2 text-[#EDEDED]/70 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <Users className="w-4 h-4 text-[#CEA53D] flex-shrink-0 mt-0.5" />
                        {person}
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
                  Finding Missing Loved Ones
                </h2>
                <div className="space-y-4 text-[#EDEDED]/80" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <p className="leading-relaxed">
                    When someone goes missing, every moment is critical. Our experienced investigators specialize in locating missing persons using a combination of advanced database searches, field investigation, witness interviews, and proven investigative techniques.
                  </p>
                  <p className="leading-relaxed">
                    Whether you&apos;re searching for a runaway teen, estranged family member, birth parent, or someone who has simply lost touch, we have the expertise and resources to conduct a thorough, professional search. We work with families, attorneys, and law enforcement to bring missing persons home safely.
                  </p>
                </div>
              </motion.div>

              {/* Types of Missing Persons Cases */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-[#CEA53D]/10 to-black/40 border-2 border-[#CEA53D]/40 rounded-lg p-8"
              >
                <h2
                  className="text-3xl sm:text-4xl font-black uppercase text-[#CEA53D] mb-6"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  Types of Cases We Handle
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      title: 'Missing Children & Runaways',
                      description: 'Urgent investigation to locate missing minors, runaways, or children in custody disputes. We coordinate with law enforcement and prioritize child safety.',
                    },
                    {
                      title: 'Missing Adults',
                      description: 'Search for adults who have disappeared, lost contact with family, or whose whereabouts are unknown for safety or legal reasons.',
                    },
                    {
                      title: 'Family Reunification',
                      description: 'Locating biological parents, siblings, or other family members for adoption reunions, estate matters, or personal reasons.',
                    },
                    {
                      title: 'Lost Friends & Loved Ones',
                      description: 'Finding old friends, former classmates, or acquaintances who have lost touch over the years.',
                    },
                    {
                      title: 'Debtors & Witnesses',
                      description: 'Locating individuals who owe debts, need to be served legal documents, or are needed as witnesses in legal proceedings.',
                    },
                    {
                      title: 'Elderly & Vulnerable Adults',
                      description: 'Special care in locating missing seniors, individuals with dementia, or vulnerable adults who may be at risk.',
                    },
                  ].map((caseType, index) => (
                    <div
                      key={caseType.title}
                      className="bg-black/40 border-l-4 border-[#CEA53D] p-6"
                    >
                      <h3
                        className="text-lg font-bold text-[#EDEDED] mb-2"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {caseType.title}
                      </h3>
                      <p className="text-[#EDEDED]/70 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {caseType.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Our Investigation Methods */}
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
                  Our Investigation Methods
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: Database,
                      title: 'Database Searches',
                      description: 'Access to specialized databases for locating current addresses, phone numbers, employment, and public records.',
                    },
                    {
                      icon: Search,
                      title: 'Skip Tracing',
                      description: 'Advanced techniques to track individuals who have moved frequently or are actively avoiding being found.',
                    },
                    {
                      icon: Users,
                      title: 'Witness Interviews',
                      description: 'Speaking with friends, family, neighbors, and associates to gather information about whereabouts.',
                    },
                    {
                      icon: MapPin,
                      title: 'Field Investigation',
                      description: 'On-the-ground investigation including neighborhood canvassing and location verification.',
                    },
                    {
                      icon: Clock,
                      title: 'Digital Footprint Analysis',
                      description: 'Investigation of social media activity, online presence, and digital trails that may indicate location.',
                    },
                    {
                      icon: AlertCircle,
                      title: 'Law Enforcement Coordination',
                      description: 'When appropriate, we work with police departments and provide information to support official investigations.',
                    },
                  ].map((method, index) => (
                    <motion.div
                      key={method.title}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="bg-black/40 border-2 border-[#CEA53D]/30 rounded-lg p-6 hover:border-[#CEA53D]/60 transition-all"
                    >
                      <method.icon className="w-10 h-10 text-[#CEA53D] mb-4" />
                      <h3
                        className="text-lg font-bold text-[#EDEDED] mb-3"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {method.title}
                      </h3>
                      <p className="text-[#EDEDED]/70 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {method.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* What We Need From You */}
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
                  Information That Helps Us Locate Missing Persons
                </h2>
                <div className="bg-black/40 border-2 border-[#CEA53D]/30 rounded-lg p-8">
                  <p className="text-[#EDEDED]/80 mb-6 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    The more information you can provide, the faster and more effectively we can conduct the search. Useful information includes:
                  </p>
                  <ul className="grid md:grid-cols-2 gap-4">
                    {[
                      'Full name (including maiden name or aliases)',
                      'Date of birth and Social Security Number',
                      'Last known address and phone number',
                      'Physical description and recent photographs',
                      'Known associates, friends, and family members',
                      'Employment history and skills',
                      'Vehicles owned (make, model, license plate)',
                      'Social media accounts and online usernames',
                      'Hobbies, interests, and favorite locations',
                      'Medical conditions or special needs',
                      'Reasons for disappearance (if known)',
                      'Any recent communication or sightings',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#CEA53D] flex-shrink-0 mt-0.5" />
                        <span className="text-[#EDEDED]/80 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Contact Form Section */}
              <div id="contact">
                <RequestServiceForm defaultService="Missing Persons" />
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
                  Why Choose Our Missing Person Services
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      title: 'Rapid Response',
                      description: 'We understand the urgency of missing person cases and begin investigations immediately upon engagement.',
                    },
                    {
                      title: 'Nationwide Resources',
                      description: 'Our database access and investigative network extend across the United States, enabling searches anywhere.',
                    },
                    {
                      title: 'Compassionate Approach',
                      description: 'We handle every case with sensitivity and understanding, recognizing the emotional stress families experience.',
                    },
                    {
                      title: 'Proven Success Rate',
                      description: 'Decades of experience in locating missing persons, with numerous successful reunifications and recoveries.',
                    },
                    {
                      title: 'Legal Compliance',
                      description: 'All searches conducted legally and ethically, with respect for privacy laws and individual rights.',
                    },
                    {
                      title: 'Regular Updates',
                      description: 'We keep families informed throughout the investigation with regular progress reports and findings.',
                    },
                  ].map((reason, index) => (
                    <motion.div
                      key={reason.title}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
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

              {/* Important Note */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-[#CEA53D]/10 to-black/40 border-2 border-[#CEA53D]/40 rounded-lg p-8"
              >
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-8 h-8 text-[#CEA53D] flex-shrink-0 mt-1" />
                  <div>
                    <h3
                      className="text-2xl font-bold text-[#CEA53D] mb-4"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      Important: If You Suspect Danger or Foul Play
                    </h3>
                    <p className="text-[#EDEDED]/80 leading-relaxed mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                      If you believe someone is in immediate danger, has been abducted, or if foul play is suspected, please contact local law enforcement immediately by calling 911. While we work alongside police in many cases, emergency situations require immediate law enforcement response.
                    </p>
                    <p className="text-[#EDEDED]/80 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                      For non-emergency missing person cases, we can begin our investigation while you also file a police report. Our services complement law enforcement efforts and can provide additional resources to help bring your loved one home safely.
                    </p>
                  </div>
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
              Every Second Counts
            </h2>
            <p className="text-[#EDEDED]/80 text-lg mb-8 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              Don&apos;t wait. Contact us immediately to begin the search for your missing loved one. We&apos;re available 24/7 for urgent cases.
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
                &quot;When my sister went missing, GA Tucker found her within 72 hours. Their dedication, expertise, and compassion during such a difficult time meant everything to our family. We can&apos;t thank them enough for bringing her home safely.&quot;
              </p>
              <p className="text-[#CEA53D] font-bold" style={{ fontFamily: "'Inter', sans-serif" }}>
                - Grateful Family Member
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
