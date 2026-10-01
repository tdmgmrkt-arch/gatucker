"use client";

import { breadcrumbSchema, faqPageSchema } from '@/lib/schema';
import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';
import { StickyCTAButton } from '../components/sticky-cta-button';
import { RequestServiceForm } from '../components/request-service-form';
import { FAQAccordion } from '../components/faq-accordion';
import {
  Phone,
  Mail,
  Shield,
  CheckCircle,
  AlertCircle,
  Users,
  Brain,
  Search,
  MessageSquare,
  FileText,
  Scale,
  Building2,
  GraduationCap,
} from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const relatedServices = [
  { title: 'Forensic Behavioral Profiling', href: '/forensic-behavioral-profiling', current: true },
  { title: 'Profiling', href: '/profiling' },
  { title: 'Consulting', href: '/consulting' },
  { title: 'Background Checks', href: '/background-checks' },
  { title: 'Risk Management', href: '/risk-management' },
  { title: 'General Investigations', href: '/investigations' },
  { title: 'Infidelity Investigations', href: '/infidelity' },
  { title: 'Child Custody', href: '/child-custody' },
  { title: 'High-Net-Worth Child Custody', href: '/high-net-worth-child-custody' },
  { title: 'Missing Persons', href: '/missing-persons' },
  { title: 'High-Profile Clients', href: '/high-profile-investigations' },
];

const analysisTypes = [
  'Behavioral Profiling',
  'Forensic Linguistics',
  'Authorship Analysis',
  'Threat Communication Review',
];

const materialsReviewed = [
  'Text messages & emails',
  'Letters & anonymous notes',
  'Social-media communications',
  'Contracts & written statements',
  'Interview & call transcripts',
];

const profilingQuestions = [
  'What behavior appears consistent or inconsistent with the known facts?',
  'What may have motivated a person’s actions?',
  'What behavioral patterns may help identify investigative leads?',
  'How might a person respond under particular circumstances?',
  'Are there indications of deception, concealment, coercion, intimidation, or manipulation?',
  'What additional information or evidence should investigators seek?',
  'How can behavior be evaluated within the broader context of the case?',
];

const linguisticMaterials = [
  'Text messages, emails, letters, and social-media communications',
  'Threatening, harassing, or extortionate messages',
  'Anonymous communications and disputed authorship',
  'Contracts, policies, statements, and other written documents',
  'Recorded conversations, interviews, and transcripts',
  'Ambiguous or disputed wording',
  'Alleged admissions, denials, or contradictory statements',
  'Communication patterns that reveal shifts in tone, intent, or relationship dynamics',
  'Whether a statement’s meaning changes when viewed in its complete context',
];

const linguisticFeatures = [
  'Vocabulary',
  'Grammar',
  'Syntax',
  'Phrasing',
  'Punctuation',
  'Tone',
  'Discourse structure',
  'Authorship indicators',
  'What is omitted',
];

const combinedFramework = [
  {
    number: '01',
    title: 'The Language Used',
    description: 'What was said, written, implied, or deliberately left out of a communication.',
    icon: MessageSquare,
  },
  {
    number: '02',
    title: 'The Communication Pattern',
    description: 'How the person communicated before, during, and after the relevant event.',
    icon: FileText,
  },
  {
    number: '03',
    title: 'The Behavioral Context',
    description: 'What actions, movements, and decisions accompanied the communication.',
    icon: Brain,
  },
  {
    number: '04',
    title: 'The Circumstances',
    description: 'What relationships, conflicts, pressures, or opportunities existed at the time.',
    icon: Users,
  },
  {
    number: '05',
    title: 'The Evidence',
    description: 'Whether available records support or contradict the behavioral interpretation.',
    icon: Search,
  },
  {
    number: '06',
    title: 'The Investigative Value',
    description: 'What additional evidence, documents, or witnesses should be located next.',
    icon: Shield,
  },
];

const whoItServes = [
  {
    title: 'Attorneys',
    icon: Scale,
    description:
      'Case preparation support — evaluating disputed communications, developing deposition and cross-examination questions, and identifying what additional evidence a claim or defense still needs.',
  },
  {
    title: 'Corporations',
    icon: Building2,
    description:
      'Internal concerns involving threatening messages, workplace complaints, anonymous communications, policy language disputes, and conduct that may require documentation before action is taken.',
  },
  {
    title: 'Private Individuals',
    icon: Users,
    description:
      'Harassment, stalking, extortion, custody, and family matters where communications need to be understood, preserved, and presented correctly.',
  },
];

const credentials = [
  {
    title: 'MS, Forensic Psychology',
    detail: 'Alliant International University',
  },
  {
    title: 'MS, Criminology',
    detail: 'Kaplan University',
  },
  {
    title: 'Master’s, Legal Studies',
    detail: 'Washington University School of Law — St. Louis',
  },
  {
    title: 'California PI License #188351',
    detail: 'Licensed private investigator with 27+ years of field experience',
  },
];

const faqs = [
  {
    question: 'What is a forensic behavioral profiler?',
    answer:
      'A forensic behavioral profiler systematically examines behavior, actions, decision-making patterns, relationships, and circumstances connected to an investigation or legal matter. The work is not guesswork about personality. It evaluates documented facts and identifies behavioral patterns that may explain what happened, what motivated it, and what investigators should look for next. Greg A. Tucker performs this analysis as a California licensed private investigator (#188351) holding a Master of Science in Forensic Psychology and a Master of Science in Criminology.',
  },
  {
    question: 'What is forensic behavioral science?',
    answer:
      'Forensic behavioral science is the application of behavioral analysis to legal, investigative, and evidentiary questions. It draws on criminology, forensic psychology, and investigative practice to evaluate how people act, communicate, and make decisions under specific circumstances. In a case setting it is used to organize information, test whether behavior is consistent with the known facts, and identify investigative possibilities that documents alone do not reveal.',
  },
  {
    question: 'What is forensic linguistics?',
    answer:
      'Forensic linguistics is the application of language analysis to legal, investigative, and evidentiary matters. Written and spoken language carries information about authorship, meaning, intent, context, and the relationship between the people communicating. A forensic linguist examines vocabulary, grammar, syntax, phrasing, punctuation, tone, discourse structure, authorship indicators, and what has been omitted, always within the full context of the communication.',
  },
  {
    question: 'Can forensic linguistic analysis identify who wrote an anonymous message?',
    answer:
      'Linguistic analysis can identify features that are consistent or inconsistent with a suspected author, and it can narrow a pool of candidates or support a request for further investigation. It is not a fingerprint. Responsible practice treats authorship findings as investigative indicators that should be corroborated with device records, account data, witness information, and other evidence rather than presented as conclusive proof on their own.',
  },
  {
    question: 'Is behavioral profiling the same as a psychological evaluation?',
    answer:
      'No. Behavioral profiling examines conduct, communications, and case facts. It is not a clinical mental-health evaluation, a diagnosis, or a competency assessment, and it is not offered as one. Where a case requires a licensed clinical evaluation of a specific individual, that is a separate service performed by a licensed clinician. Profiling is an investigative and analytical service, not a diagnostic one.',
  },
  {
    question: 'Is behavioral profiling a substitute for physical evidence?',
    answer:
      'No, and it should never be presented that way. Profiling does not replace physical evidence, laboratory testing, digital forensics, or legal judgment. Its value is in organizing information, identifying investigative possibilities, and providing a reasoned perspective grounded in documented behavior and verified case facts.',
  },
  {
    question: 'What materials do you need to begin an analysis?',
    answer:
      'The more complete the record, the more reliable the analysis. Useful materials include full message threads rather than excerpts, original files with metadata where available, incident and police reports, witness statements, interview or call transcripts, relevant contracts or policies, and a timeline of events. Partial screenshots are often the single biggest limitation on what an analysis can responsibly conclude.',
  },
  {
    question: 'Can this analysis be used in court?',
    answer:
      'Findings are documented in written reports suitable for attorney review, and expert testimony may be available depending on the subject matter, the methodology applied, and the qualifications relevant to that specific issue. Admissibility is determined by the court, not by the analyst. Any opinion offered is limited to what the available materials actually support.',
  },
  {
    question: 'How much does forensic behavioral profiling cost?',
    answer:
      'Hourly work is billed at the firm standard rate of $375 per hour, and flat-fee packages are available for defined scopes of work. Because case materials vary widely in volume and complexity, pricing is confirmed after an initial consultation establishes what needs to be reviewed.',
  },
  {
    question: 'Do you work with attorneys throughout California?',
    answer:
      'Yes. G.A. Tucker PI Investigative Services LLC is licensed statewide in California and works with attorneys, corporations, and private individuals across Riverside County, Los Angeles County, San Bernardino County, and the Bay Area. Document and communication analysis can frequently be performed remotely once materials are securely provided.',
  },
];

export default function ForensicBehavioralProfilingPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Services', path: '/services' },
              {
                name: 'Forensic Behavioral Profiling & Forensic Linguistics',
                path: '/forensic-behavioral-profiling',
              },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
        {/* Background Image - LCP optimized */}
        <Image
          src="/profilin-hero.webp"
          alt="Forensic behavioral profiling and forensic linguistics in California"
          fill
          priority
          fetchPriority="high"
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90"></div>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#CEA53D] to-transparent"></div>

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
            className="pt-20 text-center max-w-7xl mx-auto"
          >
            <p
              className="mb-4 text-[#CEA53D] uppercase tracking-[0.2em] text-sm font-bold"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Forensic Behavioral Science
            </p>
            <h1
              className="mb-6 font-black uppercase tracking-tight leading-[1.05] text-balance"
              style={{
                fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
                fontSize: 'clamp(1.875rem, 4vw, 3.75rem)',
                color: '#FFF',
                textShadow: '0 0 40px rgba(206, 165, 61, 0.3)',
              }}
            >
              Forensic Behavioral Profiling &amp; Forensic Linguistics in California
            </h1>
            <p
              className="text-base sm:text-lg text-[#EDEDED]/90 max-w-4xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Greg A. Tucker is a California licensed private investigator and forensic behavioral
              profiler. He applies forensic behavioral science and forensic linguistic analysis to
              help attorneys, corporations, and private individuals understand the communications
              and circumstances connected to a case.
            </p>
          </motion.div>
        </div>

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
                  <h2
                    className="text-xl font-black uppercase text-[#CEA53D] mb-4 pb-3 border-b border-[#CEA53D]/30"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    Our Services
                  </h2>
                  <nav className="space-y-1">
                    {relatedServices.map((service) => (
                      <Link
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
                      </Link>
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
                  <h2
                    className="text-xl font-black uppercase text-[#CEA53D] mb-4 pb-3 border-b border-[#CEA53D]/30"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    Quick Contact
                  </h2>
                  <div className="space-y-3">
                    <a
                      href="tel:909-964-8976"
                      className="flex items-center gap-3 text-[#EDEDED]/80 hover:text-[#CEA53D] transition-colors"
                    >
                      <Phone className="w-4 h-4 text-[#CEA53D]" />
                      <span className="text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                        909-964-8976
                      </span>
                    </a>
                    <a
                      href="mailto:gatuckerpi@gmail.com"
                      className="flex items-center gap-3 text-[#EDEDED]/80 hover:text-[#CEA53D] transition-colors"
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
                    Discuss Your Case
                  </a>
                </motion.div>

                {/* Analysis Types Widget */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-black/60 border-2 border-[#CEA53D]/30 rounded-lg p-5"
                >
                  <h2
                    className="text-xl font-black uppercase text-[#CEA53D] mb-4 pb-3 border-b border-[#CEA53D]/30"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    Analysis Types
                  </h2>
                  <ul className="space-y-3">
                    {analysisTypes.map((type) => (
                      <li
                        key={type}
                        className="flex items-start gap-2 text-[#EDEDED]/70 text-sm"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        <CheckCircle className="w-4 h-4 text-[#CEA53D] flex-shrink-0 mt-0.5" />
                        {type}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Materials Reviewed Widget */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-black/60 border-2 border-[#CEA53D]/30 rounded-lg p-5"
                >
                  <h2
                    className="text-xl font-black uppercase text-[#CEA53D] mb-4 pb-3 border-b border-[#CEA53D]/30"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    Materials Reviewed
                  </h2>
                  <ul className="space-y-3">
                    {materialsReviewed.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-[#EDEDED]/70 text-sm"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
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
                  <p
                    className="text-[#CEA53D] font-bold text-sm mt-1"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    #188351
                  </p>
                </motion.div>
              </div>
            </aside>

            {/* Main Content - Right */}
            <main className="lg:col-span-9 space-y-16">
              {/* Intro */}
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
                  Understanding Behavior, Communication, and Evidence
                </h2>
                <div
                  className="space-y-4 text-[#EDEDED]/80"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <p className="leading-relaxed">
                    Most disputed cases turn on two questions: what the person actually did, and what
                    the person actually said. Forensic behavioral profiling addresses the first.
                    Forensic linguistics addresses the second. Applied together by a licensed
                    investigator, they turn a pile of screenshots, statements, and timelines into
                    something a legal team can reason about and act on.
                  </p>
                  <p className="leading-relaxed">
                    Greg A. Tucker works these two disciplines as one service, because in practice
                    each one tells you where to look in the other. A behavioral pattern points to
                    what matters in the messages. A shift in the language points to what matters in
                    the conduct.
                  </p>
                </div>
              </motion.div>

              {/* What Is Forensic Behavioral Profiling */}
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
                  What Is Forensic Behavioral Profiling?
                </h2>
                <div
                  className="space-y-4 text-[#EDEDED]/80"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <p className="leading-relaxed">
                    Forensic behavioral profiling is the systematic examination of behavior, actions,
                    decision-making patterns, relationships, and circumstances that may be relevant
                    to an investigation or legal matter. A profiler does not simply make assumptions
                    about a person. The process evaluates available facts and identifies behavioral
                    patterns that may help answer important questions.
                  </p>
                </div>

                <div className="mt-8 bg-black/40 border-2 border-[#CEA53D]/30 rounded-lg p-6 sm:p-8">
                  <h3
                    className="text-xl sm:text-2xl font-bold text-[#EDEDED] mb-5"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    Questions a Behavioral Profile Helps Answer
                  </h3>
                  <ul className="space-y-4">
                    {profilingQuestions.map((question) => (
                      <li key={question} className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-[#CEA53D] flex-shrink-0 mt-0.5" />
                        <span
                          className="text-[#EDEDED]/80 leading-relaxed"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {question}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* What Profiling Is Not */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-[#CEA53D]/10 to-black/40 border-2 border-[#CEA53D]/40 rounded-lg p-6 sm:p-8"
              >
                <h2
                  className="text-3xl sm:text-4xl font-black uppercase text-[#CEA53D] mb-6"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  What Behavioral Profiling Is Not
                </h2>
                <div
                  className="space-y-4 text-[#EDEDED]/80"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <p className="leading-relaxed">
                    Behavioral profiling is not mind reading, and it should not be presented as a
                    substitute for physical evidence, laboratory testing, or legal judgment. It is
                    also not a clinical mental-health evaluation or a diagnosis of any individual.
                  </p>
                  <p className="leading-relaxed">
                    Its value is in helping organize information, identify investigative
                    possibilities, and provide a reasoned perspective based on documented behavior
                    and case facts. Any analyst who promises more than that is selling something
                    other than forensic behavioral science.
                  </p>
                </div>
              </motion.div>

              {/* What Is Forensic Linguistics */}
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
                  What Is Forensic Linguistics?
                </h2>
                <div
                  className="space-y-4 text-[#EDEDED]/80"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <p className="leading-relaxed">
                    Forensic linguistics is the application of language analysis to legal,
                    investigative, and evidentiary matters. Written and spoken language can contain
                    valuable information about authorship, meaning, intent, context, communication
                    patterns, and the relationship between individuals.
                  </p>
                </div>

                <div className="mt-8">
                  <h3
                    className="text-xl sm:text-2xl font-bold text-[#EDEDED] mb-5"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    When Forensic Linguistic Analysis Helps
                  </h3>
                  <ul className="grid md:grid-cols-2 gap-4">
                    {linguisticMaterials.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#CEA53D] flex-shrink-0 mt-0.5" />
                        <span
                          className="text-[#EDEDED]/80 leading-relaxed"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 bg-black/40 border-2 border-[#CEA53D]/30 rounded-lg p-6 sm:p-8">
                  <h3
                    className="text-xl sm:text-2xl font-bold text-[#EDEDED] mb-4"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    What the Analysis Examines
                  </h3>
                  <p
                    className="text-[#EDEDED]/80 leading-relaxed mb-5"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    A forensic linguist examines language objectively and within context:
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {linguisticFeatures.map((feature) => (
                      <span
                        key={feature}
                        className="px-4 py-2 bg-[#CEA53D]/10 border border-[#CEA53D]/40 rounded text-[#EDEDED]/80 text-sm"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <p
                    className="text-[#EDEDED]/80 leading-relaxed mt-6"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    The purpose is not to declare someone truthful or untruthful based solely on
                    writing style. Linguistic analysis identifies features of a communication that
                    may warrant further investigation or clarification.
                  </p>
                </div>
              </motion.div>

              {/* Contact Form Section */}
              <div id="contact">
                <RequestServiceForm defaultService="Forensic Behavioral Profiling" />
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* Additional Content - Full Width */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1A1A1A] via-[#0D0D0D] to-[#1A1A1A]">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* How They Work Together */}
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
              How Behavioral Profiling and Forensic Linguistics Work Together
            </h2>
            <p
              className="text-[#EDEDED]/80 leading-relaxed mb-8 max-w-4xl"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              When a case involves disputed communications or unclear motives, the two disciplines
              produce a more complete perspective than either one alone. A combined analysis
              considers six things:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {combinedFramework.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="relative bg-black/40 border-2 border-[#CEA53D]/30 rounded-lg p-6 hover:border-[#CEA53D]/60 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <item.icon className="w-10 h-10 text-[#CEA53D]" />
                    </div>
                    <div>
                      <div
                        className="text-5xl font-black text-[#CEA53D]/20 mb-2"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {item.number}
                      </div>
                      <h3
                        className="text-xl font-bold text-[#EDEDED] mb-3"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-[#EDEDED]/70 text-sm leading-relaxed"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <p
              className="text-[#EDEDED]/80 leading-relaxed mt-8 max-w-4xl"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Used appropriately, these methods help attorneys prepare cases, help corporations
              evaluate internal concerns, and help private individuals understand how to preserve and
              present relevant information.
            </p>
          </motion.div>

          {/* Who It Serves */}
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
              Who Uses These Services
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {whoItServes.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-black/40 border-2 border-[#CEA53D]/30 rounded-lg p-6 hover:border-[#CEA53D]/60 transition-all"
                >
                  <item.icon className="w-10 h-10 text-[#CEA53D] mb-4" />
                  <h3
                    className="text-xl font-bold text-[#EDEDED] mb-3"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-[#EDEDED]/70 text-sm leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Practical Investigative Perspective */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#CEA53D]/10 to-black/40 border-2 border-[#CEA53D]/40 rounded-lg p-6 sm:p-8"
          >
            <h2
              className="text-3xl sm:text-4xl font-black uppercase text-[#CEA53D] mb-6"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              A Practical Investigative Perspective
            </h2>
            <div
              className="space-y-4 text-[#EDEDED]/80"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <p className="leading-relaxed">
                Because Greg Tucker is also a licensed private investigator, his behavioral analysis
                stays connected to practical investigative work. That combination helps clients move
                beyond theory by identifying possible sources of evidence, relevant witnesses,
                investigative questions, and appropriate methods for documenting information.
              </p>
              <p className="leading-relaxed">
                The combination is uncommon by its nature. Behavioral analysts rarely hold a private
                investigator&apos;s license. Private investigators rarely hold a graduate degree in
                forensic psychology. Greg A. Tucker holds California PI license #188351 and a Master
                of Science in Forensic Psychology, and works both sides of the same case.
              </p>
              <p className="leading-relaxed">
                That is why attorneys, corporations, and private individuals bring him files that
                need more than surveillance — matters where the behavior and the communications have
                to be read together before anyone decides what the evidence actually shows.
              </p>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {credentials.map((credential) => (
                <div
                  key={credential.title}
                  className="flex items-start gap-3 bg-black/40 border border-[#CEA53D]/30 rounded-lg p-4"
                >
                  <GraduationCap className="w-5 h-5 text-[#CEA53D] flex-shrink-0 mt-0.5" />
                  <div>
                    <p
                      className="text-[#EDEDED] font-bold text-sm"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {credential.title}
                    </p>
                    <p
                      className="text-[#EDEDED]/60 text-xs mt-1"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {credential.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p
              className="text-[#EDEDED]/70 text-sm leading-relaxed mt-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Greg A. Tucker holds graduate degrees in forensic psychology, criminology, and legal
              studies and is a US Army veteran. He is a licensed private investigator, not a licensed
              clinical psychologist, and does not provide psychological evaluations, diagnoses, or
              treatment. Read more{' '}
              <Link href="/about" className="text-[#CEA53D] underline hover:text-[#CEA53D]/80">
                about Greg Tucker
              </Link>{' '}
              or review{' '}
              <Link href="/consulting" className="text-[#CEA53D] underline hover:text-[#CEA53D]/80">
                attorney consulting services
              </Link>
              .
            </p>
          </motion.div>

          {/* FAQs */}
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
              Forensic Behavioral Profiling FAQs
            </h2>
            <FAQAccordion faqs={faqs} />
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
              Discuss Your Case
            </h2>
            <p
              className="text-[#EDEDED]/80 text-lg mb-8 leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Contact G.A. Tucker PI Investigative Services to discuss your case and learn how
              forensic behavioral profiling or forensic linguistic analysis may assist your
              investigation.
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
          </motion.div>
        </div>
      </section>

      <Footer />
      <StickyCTAButton />
    </div>
  );
}
