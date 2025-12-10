"use client";

import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';
import { StickyCTAButton } from '../components/sticky-cta-button';
import { RequestServiceForm } from '../components/request-service-form';
import { Phone, Mail, Shield, CheckCircle, Heart, Camera, FileText, AlertCircle, Home, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const relatedServices = [
  { title: 'Background Checks', href: '/background-checks' },
  { title: 'Risk Management', href: '/risk-management' },
  { title: 'Consulting', href: '/consulting' },
  { title: 'Profiling', href: '/profiling' },
  { title: 'Infidelity Investigations', href: '/infidelity' },
  { title: 'General Investigations', href: '/investigations' },
  { title: 'Child Custody', href: '/child-custody', current: true },
  { title: 'Missing Persons', href: '/missing-persons' },
  { title: 'Hollywood Fixer', href: '/hollywood-fixer' },
];

export default function ChildCustodyPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
      >
        {/* Background Image - LCP optimized */}
        <Image
          src="/child-custody-hero.webp"
          alt="Child Custody Investigation Services"
          fill
          priority
          fetchPriority="high"
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/85 to-black/90"></div>

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
              Child Custody Investigations
            </h1>
            <p
              className="text-lg sm:text-xl text-[#EDEDED]/90 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Protecting children&apos;s best interests through comprehensive custody investigations. Professional documentation and evidence gathering for family court proceedings.
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

                {/* Investigation Areas Widget */}
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
                    Investigation Areas
                  </h3>
                  <ul className="space-y-3">
                    {['Parental Fitness', 'Living Conditions', 'Child Welfare', 'Substance Abuse', 'Lifestyle Assessment'].map((area) => (
                      <li key={area} className="flex items-center gap-2 text-[#EDEDED]/70 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <CheckCircle className="w-4 h-4 text-[#CEA53D] flex-shrink-0" />
                        {area}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Evidence Types Widget */}
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
                    Evidence We Collect
                  </h3>
                  <ul className="space-y-3">
                    {['Photo/Video Evidence', 'Witness Statements', 'Activity Logs', 'Background Reports', 'Court Documents'].map((evidence) => (
                      <li key={evidence} className="flex items-start gap-2 text-[#EDEDED]/70 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <Camera className="w-4 h-4 text-[#CEA53D] flex-shrink-0 mt-0.5" />
                        {evidence}
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
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div>
                    <h2
                      className="text-3xl md:text-4xl font-black uppercase mb-4 leading-tight"
                      style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        background: "linear-gradient(135deg, #CEA53D 0%, #F0D78C 50%, #CEA53D 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        textShadow: "none",
                      }}
                    >
                      Professional Custody Investigations
                    </h2>
                    <div
                      className="h-1 w-24 bg-[#CEA53D] mb-6"
                      style={{ boxShadow: "0 0 15px rgba(255, 215, 0, 0.6)" }}
                    ></div>
                    <p
                      className="text-[#EDEDED]/80 leading-relaxed mb-4"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Child custody cases are among the most emotionally challenging legal matters families face. Our investigators provide objective, professional documentation of parenting practices, living conditions, and child welfare concerns to support your custody case.
                    </p>
                    <p
                      className="text-[#EDEDED]/80 leading-relaxed"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      We understand that children&apos;s wellbeing is paramount. Our investigations focus on gathering factual evidence that demonstrates each parent&apos;s fitness, living environment, and ability to provide a safe, nurturing home for the child.
                    </p>
                  </div>
                  <div className="relative">
                    <div
                      className="relative p-3 bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] rounded-xl border-2 border-[#CEA53D]/30 overflow-hidden"
                      style={{
                        boxShadow: "0 0 30px rgba(255,215,0,0.2)",
                      }}
                    >
                      <div className="relative w-full rounded-lg overflow-hidden" style={{ aspectRatio: "4/5" }}>
                        <Image
                          src="/julia_profile_2.webp"
                          alt="Julia Tucker - Child Custody Specialist"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* What We Investigate */}
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
                  Areas of Investigation
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: Home,
                      title: 'Living Conditions',
                      description: 'Documentation of home environment, safety, cleanliness, and appropriateness for children.',
                    },
                    {
                      icon: Users,
                      title: 'Parenting Practices',
                      description: 'Observation of parent-child interactions, supervision, and quality of care provided.',
                    },
                    {
                      icon: Camera,
                      title: 'Daily Routine',
                      description: 'Monitoring daily activities, school involvement, and time spent with children.',
                    },
                    {
                      icon: AlertCircle,
                      title: 'Safety Concerns',
                      description: 'Investigation of substance abuse, dangerous associates, or unsafe situations.',
                    },
                    {
                      icon: FileText,
                      title: 'Lifestyle Documentation',
                      description: 'Recording activities, associates, and behaviors that impact child welfare.',
                    },
                    {
                      icon: Heart,
                      title: 'Child Welfare',
                      description: 'Assessing overall physical, emotional, and developmental wellbeing of children.',
                    },
                  ].map((area, index) => (
                    <motion.div
                      key={area.title}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="bg-black/40 border-2 border-[#CEA53D]/30 rounded-lg p-6 hover:border-[#CEA53D]/60 transition-all"
                    >
                      <area.icon className="w-10 h-10 text-[#CEA53D] mb-4" />
                      <h3
                        className="text-lg font-bold text-[#EDEDED] mb-3"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {area.title}
                      </h3>
                      <p className="text-[#EDEDED]/70 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {area.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Common Custody Issues */}
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
                  Common Custody Concerns
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      title: 'Substance Abuse',
                      description: 'Documentation of drug or alcohol use that affects parenting ability or creates unsafe environments for children.',
                    },
                    {
                      title: 'Neglect or Abuse',
                      description: 'Investigation of physical, emotional, or educational neglect. Evidence of abuse is reported to appropriate authorities.',
                    },
                    {
                      title: 'Parental Alienation',
                      description: 'Documentation of attempts to damage the child\'s relationship with the other parent through manipulation or interference.',
                    },
                    {
                      title: 'Unsafe Associates',
                      description: 'Investigation of individuals in the home who may pose risks to children, including criminal backgrounds or inappropriate behavior.',
                    },
                    {
                      title: 'Violation of Court Orders',
                      description: 'Documentation of custody order violations, denied visitation, or interference with parenting time.',
                    },
                    {
                      title: 'Relocation Concerns',
                      description: 'Investigation when a parent plans to move with the child, affecting custody arrangements and the other parent\'s access.',
                    },
                  ].map((concern, index) => (
                    <motion.div
                      key={concern.title}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="bg-black/40 border-l-4 border-[#CEA53D] p-6"
                    >
                      <h3
                        className="text-lg font-bold text-[#EDEDED] mb-2"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {concern.title}
                      </h3>
                      <p className="text-[#EDEDED]/70 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {concern.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Our Investigation Process */}
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
                  Our Investigation Process
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      number: '01',
                      title: 'Consultation',
                      description: 'We meet with you to understand your concerns, review court orders, and develop an investigation plan tailored to your case needs.',
                    },
                    {
                      number: '02',
                      title: 'Surveillance',
                      description: 'Discreet monitoring of the subject parent\'s activities, interactions with the child, and living situation over an appropriate time period.',
                    },
                    {
                      number: '03',
                      title: 'Documentation',
                      description: 'Comprehensive photographic and video evidence, detailed activity logs, and witness interviews when applicable.',
                    },
                    {
                      number: '04',
                      title: 'Reporting',
                      description: 'Professional written report with timeline, evidence, and findings suitable for court proceedings and attorney review.',
                    },
                  ].map((step, index) => (
                    <div
                      key={step.number}
                      className="bg-black/40 border-2 border-[#CEA53D]/30 rounded-lg p-6"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className="text-5xl font-black text-[#CEA53D]/30"
                          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                        >
                          {step.number}
                        </div>
                        <div>
                          <h3
                            className="text-xl font-bold text-[#EDEDED] mb-3"
                            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                          >
                            {step.title}
                          </h3>
                          <p className="text-[#EDEDED]/70 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Contact Form Section */}
              <div id="contact">
                <RequestServiceForm defaultService="Child Custody" />
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
                  Why Choose Our Services
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      title: 'Child-Focused Approach',
                      description: 'Our primary concern is always the safety and wellbeing of the children involved. We conduct investigations with sensitivity to the family situation.',
                    },
                    {
                      title: 'Court-Ready Evidence',
                      description: 'All documentation meets legal standards for family court proceedings. We provide detailed reports with photographic and video evidence.',
                    },
                    {
                      title: 'Complete Discretion',
                      description: 'We conduct surveillance discreetly to avoid alerting the subject or creating additional family conflict.',
                    },
                    {
                      title: 'Experienced Investigators',
                      description: 'Our team has extensive experience in custody investigations and understands family law requirements and court expectations.',
                    },
                    {
                      title: 'Objective Documentation',
                      description: 'We provide factual, unbiased reporting of our findings, allowing the court to make informed decisions about custody arrangements.',
                    },
                    {
                      title: 'Attorney Collaboration',
                      description: 'We work closely with your legal team to ensure investigations support your case strategy and provide needed evidence.',
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
              Protect Your Children&apos;s Future
            </h2>
            <p className="text-[#EDEDED]/80 text-lg mb-8 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              Contact us today for a confidential consultation about your child custody investigation needs. We&apos;re here to help you protect what matters most.
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
                &quot;GA Tucker&apos;s investigation provided crucial evidence for my custody case. Their professionalism and attention to detail gave me the documentation I needed to protect my children. I&apos;m forever grateful for their help during this difficult time.&quot;
              </p>
              <p className="text-[#CEA53D] font-bold" style={{ fontFamily: "'Inter', sans-serif" }}>
                - Satisfied Parent
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
