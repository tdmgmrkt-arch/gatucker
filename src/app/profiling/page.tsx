"use client";

import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';
import { StickyCTAButton } from '../components/sticky-cta-button';
import { RequestServiceForm } from '../components/request-service-form';
import { FAQAccordion } from '../components/faq-accordion';
import { Phone, Mail, Shield, CheckCircle, AlertCircle, Users, Brain, Search, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const relatedServices = [
  { title: 'Background Checks', href: '/background-checks' },
  { title: 'Risk Management', href: '/risk-management' },
  { title: 'Consulting', href: '/consulting' },
  { title: 'Profiling', href: '/profiling', current: true },
  { title: 'Infidelity Investigations', href: '/infidelity' },
  { title: 'General Investigations', href: '/investigations' },
  { title: 'Child Custody', href: '/child-custody' },
  { title: 'Missing Persons', href: '/missing-persons' },
  { title: 'Hollywood Fixer', href: '/hollywood-fixer' },
];

export default function ProfilingPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/profilin-hero.webp')" }}
      >
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
              Profiling Services
            </h1>
            <p
              className="text-lg sm:text-xl text-[#EDEDED]/90 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Expert behavioral analysis, criminal profiling, and threat assessment services to understand patterns, predict behavior, and protect what matters most.
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
                      href="tel:909-345-1350"
                      className="flex items-center gap-3 text-[#EDEDED]/80 hover:text-[#CEA53D] transition-colors group"
                    >
                      <Phone className="w-4 h-4 text-[#CEA53D]" />
                      <span className="text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                        909-964-8976
                      </span>
                    </a>
                    <a
                      href="mailto:greg@gatucker.com"
                      className="flex items-center gap-3 text-[#EDEDED]/80 hover:text-[#CEA53D] transition-colors group"
                    >
                      <Mail className="w-4 h-4 text-[#CEA53D]" />
                      <span className="text-sm break-all" style={{ fontFamily: "'Inter', sans-serif" }}>
                        greg@gatucker.com
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

                {/* Service Types Widget */}
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
                    Profiling Types
                  </h3>
                  <ul className="space-y-3">
                    {['Behavioral', 'Criminal', 'Personality', 'Psychological'].map((type) => (
                      <li key={type} className="flex items-center gap-2 text-[#EDEDED]/70 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <CheckCircle className="w-4 h-4 text-[#CEA53D] flex-shrink-0" />
                        {type} Profiling
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Key Capabilities Widget */}
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
                    Key Capabilities
                  </h3>
                  <ul className="space-y-3">
                    {['Threat Assessment', 'Pattern Recognition', 'Expert Testimony', 'Cyberbullying Investigations', 'Stalker Profiling'].map((capability) => (
                      <li key={capability} className="flex items-start gap-2 text-[#EDEDED]/70 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <Shield className="w-4 h-4 text-[#CEA53D] flex-shrink-0 mt-0.5" />
                        {capability}
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
              {/* What is Profiling Section */}
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
                  What is Profiling?
                </h2>
                <div className="space-y-4 text-[#EDEDED]/80" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <p className="leading-relaxed">
                    Profiling involves analyzing behavioral patterns, psychological characteristics, and evidence to understand and predict human behavior. Our expert profilers use advanced techniques to create comprehensive assessments that aid in investigations, risk management, and security planning.
                  </p>
                  <p className="leading-relaxed">
                    Whether you need behavioral analysis for corporate security, criminal profiling for legal cases, or threat assessment for personal protection, our team provides detailed, actionable insights backed by extensive experience and proven methodologies.
                  </p>
                </div>
              </motion.div>

              {/* Features Grid - 4 Types of Profiling */}
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    number: '01',
                    title: 'Behavioral Profiling',
                    description: 'Analysis of behavior patterns to predict future actions and identify potential threats or deceptive conduct.',
                    icon: Brain,
                  },
                  {
                    number: '02',
                    title: 'Criminal Profiling',
                    description: 'Comprehensive assessment of criminal behavior patterns, motivations, and likely characteristics to aid investigations.',
                    icon: Search,
                  },
                  {
                    number: '03',
                    title: 'Personality Profiling',
                    description: 'In-depth analysis of personality traits, tendencies, and psychological characteristics for various applications.',
                    icon: Users,
                  },
                  {
                    number: '04',
                    title: 'Psychological Profiling',
                    description: 'Expert evaluation of psychological factors, mental states, and emotional patterns affecting behavior.',
                    icon: AlertCircle,
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={feature.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative bg-black/40 border-2 border-[#CEA53D]/30 rounded-lg p-6 hover:border-[#CEA53D]/60 transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <feature.icon className="w-10 h-10 text-[#CEA53D]" />
                      </div>
                      <div>
                        <div
                          className="text-5xl font-black text-[#CEA53D]/20 mb-2"
                          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                        >
                          {feature.number}
                        </div>
                        <h3
                          className="text-xl font-bold text-[#EDEDED] mb-3"
                          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                        >
                          {feature.title}
                        </h3>
                        <p className="text-[#EDEDED]/70 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Contact Form Section */}
              <div id="contact">
                <RequestServiceForm defaultService="Profiling" />
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* Additional Content - Full Width */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1A1A1A] via-[#0D0D0D] to-[#1A1A1A]">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Cyberbullying Section */}
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
                  Cyberbullying Investigations
                </h2>
                <div className="space-y-6">
                  <p className="text-[#EDEDED]/80 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Cyberbullying is a serious issue affecting individuals of all ages. Our investigators specialize in tracking down cyberbullies through advanced digital forensics and online investigation techniques.
                  </p>

                  <div className="bg-black/40 border-2 border-[#CEA53D]/30 rounded-lg p-6">
                    <h3
                      className="text-xl font-bold text-[#EDEDED] mb-4"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      IP Address Tracing
                    </h3>
                    <p className="text-[#EDEDED]/70 leading-relaxed mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                      We use sophisticated tools to trace IP addresses and identify the source of harassing messages, threatening emails, or malicious online activity. Our methods are legally sound and admissible in court proceedings.
                    </p>
                  </div>

                  <div className="bg-black/40 border-2 border-[#CEA53D]/30 rounded-lg p-6">
                    <h3
                      className="text-xl font-bold text-[#EDEDED] mb-4"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      Social Media Tracing
                    </h3>
                    <p className="text-[#EDEDED]/70 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Our team excels at tracking digital footprints across social media platforms, forums, and online communities to identify perpetrators. We gather evidence of cyberbullying, harassment, and online threats for legal action.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Standing Up to Bullying */}
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
                  Standing Up to Bullying
                </h2>
                <p className="text-[#EDEDED]/80 leading-relaxed mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Don&apos;t let cyberbullies hide behind anonymity. Our investigators will uncover their identity and gather the evidence you need to take legal action. We work with law enforcement, schools, and legal teams to stop harassment and protect victims.
                </p>
                <p className="text-[#EDEDED]/80 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Whether you&apos;re dealing with online harassment, defamation, or threats, we provide comprehensive investigation services to document the abuse and identify the perpetrators.
                </p>
              </motion.div>

              {/* Stalking Consulting Services */}
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
                  Stalking Consulting Services
                </h2>
                <div className="space-y-6">
                  <p className="text-[#EDEDED]/80 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Stalking is a serious crime that can escalate into dangerous situations. Our experts provide consulting services to help victims understand stalker behavior, develop safety plans, and gather evidence for legal protection.
                  </p>

                  <h3
                    className="text-2xl font-bold text-[#EDEDED] mt-8 mb-4"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    Types of Stalkers We Profile
                  </h3>

                  <div className="space-y-4">
                    {[
                      {
                        title: 'Rejected Stalker',
                        description: 'Former intimate partners who refuse to accept the end of a relationship and pursue their victims relentlessly.',
                      },
                      {
                        title: 'Resentful Stalker',
                        description: 'Individuals motivated by a desire for revenge, often believing they have been wronged or humiliated.',
                      },
                      {
                        title: 'Intimacy Seeking Stalker',
                        description: 'People who believe they are destined to be with their victim, despite no prior relationship.',
                      },
                      {
                        title: 'Incompetent Stalker',
                        description: 'Socially awkward individuals who lack understanding of appropriate social boundaries.',
                      },
                      {
                        title: 'Predatory Stalker',
                        description: 'The most dangerous type, planning sexual assault or other violent crimes against their victims.',
                      },
                    ].map((stalkerType, index) => (
                      <div
                        key={stalkerType.title}
                        className="bg-black/40 border-l-4 border-[#CEA53D] p-5"
                      >
                        <h4
                          className="text-lg font-bold text-[#CEA53D] mb-2"
                          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                        >
                          {stalkerType.title}
                        </h4>
                        <p className="text-[#EDEDED]/70 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {stalkerType.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Psychological Effects Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-black/40 border-2 border-[#CEA53D]/30 rounded-lg p-8"
              >
                <h2
                  className="text-3xl sm:text-4xl font-black uppercase text-[#CEA53D] mb-6"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  Understanding Psychological Effects
                </h2>
                <p className="text-[#EDEDED]/80 leading-relaxed mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Stalking victims often experience severe psychological trauma including anxiety, depression, PTSD, and constant fear. Our consultants help document these effects for restraining orders and criminal prosecutions.
                </p>
                <p className="text-[#EDEDED]/80 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  We work with mental health professionals and legal teams to create comprehensive profiles that demonstrate the impact of stalking behavior and support victims in obtaining protective measures.
                </p>
              </motion.div>

              {/* Surveillance Section */}
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
                  Advanced Surveillance Techniques
                </h2>
                <p className="text-[#EDEDED]/80 leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Our profiling services often incorporate surveillance to observe and document behavioral patterns in real-world settings. This combination provides the most comprehensive understanding of subject behavior.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-black/40 border-2 border-[#CEA53D]/30 rounded-lg p-6">
                    <Lock className="w-8 h-8 text-[#CEA53D] mb-4" />
                    <h3
                      className="text-lg font-bold text-[#EDEDED] mb-3"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      Covert Observation
                    </h3>
                    <p className="text-[#EDEDED]/70 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Discreet monitoring to observe natural behavior patterns without alerting the subject.
                    </p>
                  </div>
                  <div className="bg-black/40 border-2 border-[#CEA53D]/30 rounded-lg p-6">
                    <Search className="w-8 h-8 text-[#CEA53D] mb-4" />
                    <h3
                      className="text-lg font-bold text-[#EDEDED] mb-3"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      Pattern Documentation
                    </h3>
                    <p className="text-[#EDEDED]/70 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Detailed recording of routine activities, contacts, and behavioral patterns over time.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Counterintelligence Section */}
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
                  Counterintelligence Profiling
                </h2>
                <div className="space-y-6">
                  <p className="text-[#EDEDED]/80 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Protect your organization from insider threats with our counterintelligence profiling services. We identify behavioral indicators of espionage, data theft, and corporate sabotage.
                  </p>
                  <div className="bg-black/40 border-2 border-[#CEA53D]/30 rounded-lg p-6">
                    <h3
                      className="text-xl font-bold text-[#EDEDED] mb-4"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      Insider Threat Detection
                    </h3>
                    <ul className="space-y-3">
                      {[
                        'Behavioral anomaly identification',
                        'Access pattern analysis',
                        'Communication monitoring indicators',
                        'Financial stress assessment',
                        'Loyalty and motivation evaluation',
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-[#CEA53D] flex-shrink-0 mt-0.5" />
                          <span className="text-[#EDEDED]/70" style={{ fontFamily: "'Inter', sans-serif" }}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Behavior Analysis Section */}
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
                  Comprehensive Behavior Analysis
                </h2>
                <div className="space-y-6">
                  <p className="text-[#EDEDED]/80 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Our behavior analysis services go beyond surface observations to understand the underlying motivations, triggers, and patterns that drive human behavior in various contexts.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      'Interview Analysis',
                      'Statement Verification',
                      'Deception Detection',
                      'Risk Assessment',
                      'Threat Evaluation',
                      'Crisis Prediction',
                    ].map((service, index) => (
                      <div
                        key={service}
                        className="bg-black/40 border-2 border-[#CEA53D]/30 rounded-lg p-5 text-center hover:border-[#CEA53D]/60 transition-all"
                      >
                        <Brain className="w-8 h-8 text-[#CEA53D] mx-auto mb-3" />
                        <h3
                          className="text-lg font-bold text-[#EDEDED]"
                          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                        >
                          {service}
                        </h3>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Forensic Linguistics Section */}
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
                  Forensic Linguistics
                </h2>
                <div className="space-y-4">
                  <p className="text-[#EDEDED]/80 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Forensic linguistics analyzes language patterns to identify authorship, detect deception, and understand communication intent. This specialized profiling technique is invaluable in cases involving:
                  </p>
                  <ul className="grid md:grid-cols-2 gap-4">
                    {[
                      'Anonymous threatening letters',
                      'Ransom notes and extortion messages',
                      'Disputed document authorship',
                      'Online harassment communications',
                      'Plagiarism and intellectual property theft',
                      'Contract dispute analysis',
                    ].map((application, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#CEA53D] flex-shrink-0 mt-0.5" />
                        <span className="text-[#EDEDED]/80" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {application}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[#EDEDED]/80 leading-relaxed mt-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Our linguistic experts analyze vocabulary, syntax, grammar patterns, and stylistic choices to create detailed profiles and attribution reports that stand up to legal scrutiny.
                  </p>
                </div>
              </motion.div>

              {/* FAQs Section */}
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
                  Frequently Asked Questions
                </h2>
                <FAQAccordion faqs={[
                  {
                    question: 'What is criminal profiling?',
                    answer: 'Criminal profiling is the process of analyzing crime scene evidence, victim information, and behavioral patterns to develop a psychological and demographic profile of an unknown offender. It helps narrow suspect pools and guide investigations.',
                  },
                  {
                    question: 'How accurate is behavioral profiling?',
                    answer: 'When conducted by experienced professionals using proven methodologies, behavioral profiling is a valuable investigative tool. While not infallible, it provides actionable insights that significantly aid investigations when combined with other evidence.',
                  },
                  {
                    question: 'Can profiling be used in civil cases?',
                    answer: 'Yes, profiling techniques are applicable to many civil matters including custody disputes, workplace investigations, threat assessments, and risk management. The behavioral analysis principles apply across various legal and security contexts.',
                  },
                  {
                    question: 'How long does a profiling assessment take?',
                    answer: 'Timeline varies based on case complexity, available information, and the scope of analysis required. Simple profiles may take a few days, while comprehensive assessments for complex cases can take several weeks.',
                  },
                  {
                    question: 'Is profiling evidence admissible in court?',
                    answer: 'Expert testimony from qualified profilers is often admissible in court proceedings. Admissibility depends on the expert\'s qualifications, methodology used, and relevance to the case. We provide court-ready reports and testimony when needed.',
                  },
                  {
                    question: 'What information is needed for a profile?',
                    answer: 'The more information available, the more accurate the profile. This can include incident reports, communications, witness statements, surveillance footage, social media activity, and any other relevant behavioral evidence.',
                  },
                  {
                    question: 'Do you handle cyberstalking cases?',
                    answer: 'Yes, we specialize in cyberstalking and online harassment investigations. We can trace digital communications, identify anonymous harassers, and document patterns of behavior for legal action.',
                  },
                  {
                    question: 'Can you help with workplace threat assessments?',
                    answer: 'Absolutely. We provide comprehensive workplace violence threat assessments, evaluating concerning employee behavior and recommending appropriate security measures and interventions.',
                  },
                  {
                    question: 'How confidential is the profiling process?',
                    answer: 'We maintain strict confidentiality throughout all investigations and profiling work. Information is shared only with authorized parties, and we comply with all applicable privacy laws and professional standards.',
                  },
                ]} />
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
              Ready to Get Started?
            </h2>
            <p className="text-[#EDEDED]/80 text-lg mb-8 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              Contact us today for a confidential consultation about your profiling needs. Our expert team is ready to provide the insights you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:909-345-1350"
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
                href="mailto:greg@gatucker.com"
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
                &quot;GA Tucker&apos;s profiling expertise was instrumental in our case. Their detailed behavioral analysis provided insights that helped us understand the situation and take appropriate action. Professional, thorough, and reliable.&quot;
              </p>
              <p className="text-[#CEA53D] font-bold" style={{ fontFamily: "'Inter', sans-serif" }}>
                - Legal Team, Major Law Firm
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
