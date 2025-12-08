"use client";

import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';
import { StickyCTAButton } from '../components/sticky-cta-button';
import { RequestServiceForm } from '../components/request-service-form';
import { FAQAccordion } from '../components/faq-accordion';
import { Phone, Mail, Shield, CheckCircle, AlertTriangle, Camera, Eye, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const relatedServices = [
  { title: 'Background Checks', href: '/background-checks' },
  { title: 'Risk Management', href: '/risk-management' },
  { title: 'Consulting', href: '/consulting' },
  { title: 'Profiling', href: '/profiling' },
  { title: 'Infidelity Investigations', href: '/infidelity', current: true },
  { title: 'General Investigations', href: '/investigations' },
  { title: 'Child Custody', href: '/child-custody' },
  { title: 'Missing Persons', href: '/missing-persons' },
  { title: 'Hollywood Fixer', href: '/hollywood-fixer' },
];

export default function InfidelityPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/infideliity-hero.webp')" }}
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
              Infidelity Investigations
            </h1>
            <p
              className="text-lg sm:text-xl text-[#EDEDED]/90 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Discreet, professional investigations to uncover the truth about suspected infidelity. We provide the evidence you need with compassion and confidentiality.
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

                {/* Investigation Methods Widget */}
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
                    Our Methods
                  </h3>
                  <ul className="space-y-3">
                    {['Surveillance', 'Digital Forensics', 'GPS Tracking', 'Background Checks', 'Social Media Analysis'].map((method) => (
                      <li key={method} className="flex items-center gap-2 text-[#EDEDED]/70 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <Camera className="w-4 h-4 text-[#CEA53D] flex-shrink-0" />
                        {method}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* What We Provide Widget */}
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
                    What We Provide
                  </h3>
                  <ul className="space-y-3">
                    {['Photo Evidence', 'Video Documentation', 'Detailed Reports', 'Timeline Analysis', 'Court-Ready Evidence'].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[#EDEDED]/70 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <FileText className="w-4 h-4 text-[#CEA53D] flex-shrink-0 mt-0.5" />
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
                  Professional Infidelity Investigations
                </h2>
                <div className="space-y-4 text-[#EDEDED]/80" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <p className="leading-relaxed">
                    Suspecting a partner of infidelity is one of the most emotionally challenging situations anyone can face. Our experienced investigators handle these sensitive cases with the utmost discretion and professionalism, providing you with the truth you need to make informed decisions about your relationship and future.
                  </p>
                  <p className="leading-relaxed">
                    We utilize advanced surveillance techniques, digital forensics, and investigative methods to uncover evidence of infidelity. Our services are conducted legally and ethically, ensuring that any evidence gathered is admissible in court proceedings if needed.
                  </p>
                </div>
              </motion.div>

              {/* Signs of Infidelity Section */}
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
                  Common Signs of Infidelity
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    'Unexplained absences or changes in routine',
                    'Increased secrecy with phone and devices',
                    'Sudden changes in appearance or grooming',
                    'Defensive or evasive behavior when questioned',
                    'Decreased emotional intimacy and communication',
                    'Unexplained expenses or financial discrepancies',
                    'Working late more frequently without explanation',
                    'Loss of interest in family activities',
                    'Increased arguments or emotional distance',
                    'New passwords and privacy concerns',
                  ].map((sign, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="flex items-start gap-3 bg-black/40 border-l-3 border-[#CEA53D]/60 p-4"
                    >
                      <AlertTriangle className="w-5 h-5 text-[#CEA53D] flex-shrink-0 mt-0.5" />
                      <span className="text-[#EDEDED]/80 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {sign}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Our Investigation Services */}
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
                  Our Investigation Services
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: Camera,
                      title: 'Surveillance',
                      description: 'Discreet monitoring and documentation of your partner\'s activities and movements.',
                    },
                    {
                      icon: Eye,
                      title: 'Activity Tracking',
                      description: 'Comprehensive tracking of patterns, locations, and contacts over extended periods.',
                    },
                    {
                      icon: FileText,
                      title: 'Detailed Reports',
                      description: 'Complete documentation with photos, videos, and timeline evidence for legal proceedings.',
                    },
                  ].map((service, index) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-black/40 border-2 border-[#CEA53D]/30 rounded-lg p-6 hover:border-[#CEA53D]/60 transition-all"
                    >
                      <service.icon className="w-10 h-10 text-[#CEA53D] mb-4" />
                      <h3
                        className="text-xl font-bold text-[#EDEDED] mb-3"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {service.title}
                      </h3>
                      <p className="text-[#EDEDED]/70 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {service.description}
                      </p>
                    </motion.div>
                  ))}
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
                  What We Investigate
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      title: 'Physical Surveillance',
                      description: 'Following and documenting your partner\'s movements, destinations, and interactions with others.',
                    },
                    {
                      title: 'Digital Footprints',
                      description: 'Legal investigation of online activities, social media patterns, and digital communications.',
                    },
                    {
                      title: 'Financial Investigation',
                      description: 'Uncovering unexplained expenses, secret accounts, or financial evidence of infidelity.',
                    },
                    {
                      title: 'Background Checks',
                      description: 'Investigating suspected third parties involved in the affair for comprehensive understanding.',
                    },
                  ].map((item, index) => (
                    <div
                      key={item.title}
                      className="bg-black/40 border-l-4 border-[#CEA53D] p-5"
                    >
                      <h3
                        className="text-lg font-bold text-[#EDEDED] mb-2"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-[#EDEDED]/70 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Contact Form Section */}
              <div id="contact">
                <RequestServiceForm defaultService="Infidelity" />
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
                <div className="space-y-4">
                  {[
                    {
                      title: 'Complete Discretion',
                      description: 'We understand the sensitive nature of infidelity investigations and maintain absolute confidentiality throughout the entire process.',
                    },
                    {
                      title: 'Experienced Investigators',
                      description: 'Our team has decades of combined experience in surveillance and relationship investigations, ensuring professional, effective results.',
                    },
                    {
                      title: 'Legal Compliance',
                      description: 'All investigations are conducted within legal boundaries, ensuring evidence is admissible in divorce or custody proceedings.',
                    },
                    {
                      title: 'Compassionate Approach',
                      description: 'We recognize the emotional difficulty of these investigations and provide support with empathy and understanding.',
                    },
                    {
                      title: 'Detailed Documentation',
                      description: 'Comprehensive reports with photographic and video evidence, timestamps, and detailed activity logs.',
                    },
                    {
                      title: 'Flexible Packages',
                      description: 'Customized investigation plans tailored to your specific situation, timeline, and budget requirements.',
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
                    question: 'How long does an infidelity investigation typically take?',
                    answer: 'Investigation timelines vary based on your specific circumstances. Some cases require only a few days of surveillance, while others may need several weeks to establish patterns and gather conclusive evidence. We\'ll discuss the optimal timeline during your consultation.',
                  },
                  {
                    question: 'Is the evidence you gather admissible in court?',
                    answer: 'Yes. All our investigations are conducted legally and ethically. The evidence we gather meets legal standards and can be used in divorce proceedings, custody battles, or other legal matters. We can also provide expert testimony if required.',
                  },
                  {
                    question: 'Will my partner know they\'re being investigated?',
                    answer: 'No. Our investigators are highly trained in discreet surveillance techniques. We use unmarked vehicles, maintain safe distances, and employ professional methods to ensure your partner remains unaware of the investigation.',
                  },
                  {
                    question: 'What happens if you don\'t find evidence of infidelity?',
                    answer: 'While we hope to provide you with peace of mind either way, if we don\'t find evidence of infidelity during the agreed-upon investigation period, we\'ll provide a full report of our findings. Many clients find relief in knowing the truth, regardless of the outcome.',
                  },
                  {
                    question: 'How much does an infidelity investigation cost?',
                    answer: 'Costs vary depending on the complexity and duration of the investigation. We offer customized packages to fit different budgets and needs. Contact us for a confidential consultation and detailed pricing information.',
                  },
                  {
                    question: 'Can you investigate digital evidence like texts and emails?',
                    answer: 'We can guide you on legally obtaining digital evidence and analyze information you have legal access to. However, all digital investigations must comply with privacy laws and regulations. We\'ll advise you on legal methods during your consultation.',
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
              Get the Truth You Deserve
            </h2>
            <p className="text-[#EDEDED]/80 text-lg mb-8 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              Don&apos;t live with uncertainty. Contact us today for a confidential consultation about your infidelity investigation needs.
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
                &quot;GA Tucker handled my case with complete professionalism and discretion. The evidence they gathered gave me the clarity I needed to move forward with my life. I can&apos;t thank them enough for their compassionate approach during such a difficult time.&quot;
              </p>
              <p className="text-[#CEA53D] font-bold" style={{ fontFamily: "'Inter', sans-serif" }}>
                - Satisfied Client
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
