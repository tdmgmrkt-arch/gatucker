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
  Home,
  Plane,
  Wallet,
  Scale,
  Lock,
  FileText,
  Brain,
  GraduationCap,
} from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const relatedServices = [
  { title: 'High-Net-Worth Child Custody', href: '/high-net-worth-child-custody', current: true },
  { title: 'Child Custody', href: '/child-custody' },
  { title: 'High-Profile Clients', href: '/high-profile-investigations' },
  { title: 'Forensic Behavioral Profiling', href: '/forensic-behavioral-profiling' },
  { title: 'Infidelity Investigations', href: '/infidelity' },
  { title: 'Consulting', href: '/consulting' },
  { title: 'Background Checks', href: '/background-checks' },
  { title: 'General Investigations', href: '/investigations' },
  { title: 'Missing Persons', href: '/missing-persons' },
  { title: 'Risk Management', href: '/risk-management' },
];

const whatWeDocument = [
  'Lifestyle and spending inconsistent with declared income',
  'Actual parenting time versus claimed parenting time',
  'Who is genuinely caring for the child day to day',
  'Household conditions across multiple residences',
  'Undisclosed cohabitants and unvetted household members',
  'Substance use or conduct raising supervision concerns',
  'Travel patterns and extended absences',
  'Proposed relocation and move-away circumstances',
];

const evidenceStandards = [
  'Timestamped, continuous documentation',
  'Written field reports with investigator declarations',
  'Chain-of-custody discipline on every file',
  'Observation from lawful vantage points only',
  'Nothing obtained by pretext, trespass, or device access',
];

const caseTypes = [
  {
    number: '01',
    title: 'Lifestyle vs. Declared Income',
    description:
      'When reported income and observable spending do not match, the gap matters to support calculations. We document what is visible and verifiable — travel, vehicles, residences, routine spending — and hand your attorney something a forensic accountant can build on.',
    icon: Wallet,
  },
  {
    number: '02',
    title: 'The Absent High-Earner',
    description:
      'A parent petitions for expanded custody, then travels three weeks a month. We document who is actually exercising the custodial time, whether care is delegated to staff, and how often the parent is present at all.',
    icon: Plane,
  },
  {
    number: '03',
    title: 'Household & Supervision',
    description:
      'High-asset families often maintain several residences and rotating household staff. We document observable conditions, who is present around the child, and whether anyone in the household warrants a background check.',
    icon: Home,
  },
  {
    number: '04',
    title: 'Relocation & Move-Away',
    description:
      'Move-away requests turn on facts: the real reason for the move, the receiving environment, and the practical effect on the existing parenting plan. We document the circumstances on the ground, in California or at the destination.',
    icon: Users,
  },
  {
    number: '05',
    title: 'Safety & Fitness Concerns',
    description:
      'Where there are credible concerns about substance use, untreated conduct, or an unvetted partner with access to the child, documentation needs to be factual, continuous, and defensible rather than anecdotal.',
    icon: AlertCircle,
  },
  {
    number: '06',
    title: 'Disputed Communications',
    description:
      'Custody matters generate enormous volumes of text and email. Forensic linguistic analysis examines authorship, context, and shifts in tone — useful when messages are presented out of context or authorship is contested.',
    icon: Brain,
  },
];

const discretionPoints = [
  {
    title: 'Confidentiality as a Working Constraint',
    description:
      'High-profile custody matters attract attention that can reach the children. Investigative activity is structured so that it does not create a story of its own — no conspicuous vehicles, no contact with the subject, no unnecessary parties with knowledge of the file.',
    icon: Lock,
  },
  {
    title: 'Sealed Records and Private Judges',
    description:
      'Many high-asset California families proceed under sealed records, protective orders, or before a privately compensated temporary judge. Reports are prepared to be filed under those conditions and shared only with counsel.',
    icon: Shield,
  },
  {
    title: 'Attorney-Directed Engagements',
    description:
      'Work is frequently retained through counsel rather than directly by the parent. That keeps the investigation inside the attorney relationship and keeps the client out of day-to-day contact with the file.',
    icon: Scale,
  },
];

const faqs = [
  {
    question: 'What makes a high-net-worth custody case different from a standard one?',
    answer:
      'Scale, complexity, and exposure. High-asset families often hold multiple residences, employ household staff, travel constantly, and hold income in forms that are not visible on a pay stub. Custody questions that are simple elsewhere — where does the child actually sleep, who is actually providing care, what is the real household environment — require sustained documentation across several locations. These cases also carry reputational exposure that an ordinary custody matter does not, which changes how the investigation has to be conducted.',
  },
  {
    question: 'Can a private investigator help me win custody?',
    answer:
      'No investigator can promise an outcome, and you should be cautious of one who does. California family courts decide custody on the best interest of the child, and a judge weighs the entire record. What an investigator can do is replace assertion with documentation: timestamped observation, written field reports, and verifiable facts your attorney can put in front of the court. Good evidence strengthens a case. It does not guarantee a result.',
  },
  {
    question: 'Will the evidence actually be admissible in California family court?',
    answer:
      'Admissibility is decided by the court, and it depends on how the evidence was obtained and how it is presented. Documentation gathered from lawful vantage points, recorded continuously, logged with chain-of-custody discipline, and supported by an investigator declaration is positioned to be used. Material obtained through trespass, pretext, device access, or recording a confidential conversation without consent creates a serious problem under California law and can damage the case that it was meant to help. We do not do that work.',
  },
  {
    question: 'Can you investigate hidden assets?',
    answer:
      'We document what is observable and verifiable — lifestyle, spending patterns, vehicles, residences, travel, and business activity visible in the field or in public and licensed records. That often reveals a gap between reported income and actual lifestyle. Tracing the money itself through accounts and entities is forensic accounting, and the strongest results come from an investigator and a forensic accountant working the same file from both ends. We work alongside the accountant your attorney retains.',
  },
  {
    question: 'Do you work directly with my family law attorney?',
    answer:
      'Yes, and in high-asset matters that is usually the better structure. Many engagements are retained through counsel. Working attorney-directed keeps the investigation aligned with the legal strategy, keeps findings inside the attorney relationship, and means reports are prepared in the form counsel actually needs for a declaration or hearing.',
  },
  {
    question: 'How do you protect confidentiality in a high-profile case?',
    answer:
      'Investigative work is structured so it does not become its own event. Surveillance is conducted without contact with the subject, files are limited to the smallest number of people who need access, reports go to counsel rather than through intermediaries, and nothing about the engagement is published, referenced, or used as a case study. G.A. Tucker PI does not name clients.',
  },
  {
    question: 'What does a high-asset custody investigation cost?',
    answer:
      'Hourly work is billed at the firm standard rate of $375 per hour, and flat-fee packages are available for defined scopes. Multi-residence or multi-jurisdiction matters require more field hours than a single-location case, so scope is set after an initial consultation. Discounted package rates may be available for child custody matters depending on the specifics. Initial consultations are free.',
  },
  {
    question: 'Do you handle cases outside Southern California?',
    answer:
      'G.A. Tucker PI is licensed statewide in California (PI #188351) and works throughout the state, including Riverside, Los Angeles, San Bernardino, and Orange counties and the Bay Area. Private investigator licensing is state-specific, so matters requiring field work in another state are coordinated with a licensed investigator in that jurisdiction.',
  },
  {
    question: 'Will my spouse find out I hired an investigator?',
    answer:
      'Surveillance is conducted without contact, from lawful public vantage points, and in a way designed not to be noticed. No investigator can promise that an opposing party will never become aware of an investigation, and if the matter reaches a hearing the documentation itself will be disclosed through the normal process. What we control is that the work is conducted discreetly and that the file is not exposed before your attorney chooses to use it.',
  },
  {
    question: 'How quickly can you start?',
    answer:
      'Most matters can begin within a few days of the consultation and signed engagement. Time-sensitive situations — an imminent hearing, a suspected relocation, or an immediate safety concern — should be raised on the call so the schedule can be adjusted. Call 909-964-8976 directly for anything urgent.',
  },
];

export default function HighNetWorthChildCustodyPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Child Custody Investigations', path: '/child-custody' },
              {
                name: 'High-Net-Worth Child Custody',
                path: '/high-net-worth-child-custody',
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
          src="/child-custody-hero.webp"
          alt="High-net-worth child custody investigations in California"
          fill
          priority
          fetchPriority="high"
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/85 to-black/90"></div>
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
              Confidential · Attorney-Directed
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
              High-Net-Worth Child Custody Investigations in California
            </h1>
            <p
              className="text-base sm:text-lg text-[#EDEDED]/90 max-w-4xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              When a custody dispute involves significant assets, multiple residences, or public
              visibility, the facts are harder to establish and the consequences of getting them
              wrong are larger. G.A. Tucker PI documents what is actually happening, discreetly, in
              a form your family law attorney can file.
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
                    Confidential Line
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
                  <p
                    className="text-[#EDEDED]/60 text-xs leading-relaxed mt-4"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    For sensitive custody matters, calling is preferred over email or the form.
                  </p>

                  <a
                    href="#contact"
                    className="mt-5 w-full bg-[#CEA53D] text-black px-4 py-3 font-black uppercase text-sm tracking-wider transition-all hover:bg-[#CEA53D]/90 active:scale-95 flex items-center justify-center gap-2"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      boxShadow: '0 0 20px rgba(206, 165, 61, 0.3)',
                    }}
                  >
                    Request Consultation
                  </a>
                </motion.div>

                {/* What We Document Widget */}
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
                    What We Document
                  </h2>
                  <ul className="space-y-3">
                    {whatWeDocument.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-[#EDEDED]/70 text-sm"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        <CheckCircle className="w-4 h-4 text-[#CEA53D] flex-shrink-0 mt-0.5" />
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
                  transition={{ duration: 0.6, delay: 0.4 }}
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
              {/* Why These Cases Are Different */}
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
                  Why High-Asset Custody Cases Are Different
                </h2>
                <div
                  className="space-y-4 text-[#EDEDED]/80"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <p className="leading-relaxed">
                    In an ordinary custody matter, the basic facts are usually easy to establish.
                    There is one household per parent, income appears on a pay stub, and the parent
                    asking for time is the parent providing the care.
                  </p>
                  <p className="leading-relaxed">
                    High-asset cases break all three assumptions. A family may hold three residences
                    in two counties. Income may sit inside entities rather than on a W-2. The parent
                    petitioning for expanded custody may travel twenty days a month while household
                    staff provide the actual day-to-day care. Establishing what is really happening
                    takes sustained field work across multiple locations, not a single afternoon of
                    surveillance.
                  </p>
                  <p className="leading-relaxed">
                    These matters also carry exposure that ordinary cases do not. Where a parent is
                    an executive, a public figure, or simply well known locally, a clumsy
                    investigation becomes its own problem — and the people it reaches first are
                    usually the children. The work has to be invisible.
                  </p>
                </div>
              </motion.div>

              {/* Case Types Grid */}
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
                  What We Investigate
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {caseTypes.map((item, index) => (
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
          {/* Discretion */}
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
              Discretion at This Level
            </h2>
            <p
              className="text-[#EDEDED]/80 leading-relaxed mb-8 max-w-4xl"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              In a high-profile custody matter, confidentiality is not a courtesy. It is a working
              constraint that shapes how every hour of the investigation is conducted.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {discretionPoints.map((item, index) => (
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

          {/* Evidence That Holds Up */}
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
              Evidence That Holds Up — and the Promise We Won&apos;t Make
            </h2>
            <div
              className="space-y-4 text-[#EDEDED]/80"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <p className="leading-relaxed">
                California family courts decide custody on the best interest of the child, weighing
                the whole record. No investigator can promise you an outcome, and you should be
                wary of one who does. What an investigator can do is replace assertion with
                documentation — and in a contested custody matter, that difference is substantial.
              </p>
              <p className="leading-relaxed">
                Evidence is only useful if it survives contact with opposing counsel. Every
                engagement is run to that standard:
              </p>
              <ul className="grid sm:grid-cols-2 gap-4 mt-6">
                {evidenceStandards.map((item) => (
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
              <p className="leading-relaxed mt-6">
                Material obtained by trespass, pretext, device access, or recording a confidential
                conversation without consent creates a serious problem under California law — and
                it tends to damage the case it was meant to help. We decline that work, and we will
                tell you so on the first call.
              </p>
            </div>
          </motion.div>

          {/* Working With Your Attorney */}
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
              Working With Your Family Law Attorney
            </h2>
            <div
              className="space-y-4 text-[#EDEDED]/80 max-w-4xl"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <p className="leading-relaxed">
                Most high-asset custody engagements are retained through counsel rather than
                directly by a parent, and that is usually the right structure. It keeps the
                investigation aligned with the legal strategy, keeps findings inside the attorney
                relationship, and means reports arrive in the form counsel actually needs for a
                declaration, a custody evaluation, or a hearing.
              </p>
              <p className="leading-relaxed">
                Greg A. Tucker also provides{' '}
                <Link href="/consulting" className="text-[#CEA53D] underline hover:text-[#CEA53D]/80">
                  case consulting and expert-witness support
                </Link>{' '}
                for attorneys, and{' '}
                <Link
                  href="/forensic-behavioral-profiling"
                  className="text-[#CEA53D] underline hover:text-[#CEA53D]/80"
                >
                  forensic behavioral profiling and forensic linguistic analysis
                </Link>{' '}
                where a custody file turns on disputed communications, contested authorship, or
                behavior that needs to be evaluated in context rather than taken at face value.
              </p>
              <p className="leading-relaxed">
                If you are a family law attorney evaluating an investigator for a high-asset file,
                call directly and describe the matter. You will get a straight answer about whether
                the documentation you need is obtainable, and what it will realistically take.
              </p>
            </div>
          </motion.div>

          {/* Who You Are Hiring */}
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
              Who You Are Actually Hiring
            </h2>
            <div
              className="space-y-4 text-[#EDEDED]/80"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <p className="leading-relaxed">
                G.A. Tucker PI is a small firm by design. Greg A. Tucker works the files personally
                rather than assigning them out, which is the practical reason the work stays
                discreet in matters where discretion is the whole point.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                {[
                  {
                    title: 'California PI License #188351',
                    detail: '27+ years of investigative experience; US Army veteran',
                  },
                  {
                    title: 'MS Forensic Psychology · MS Criminology',
                    detail: "Plus a master's in Legal Studies — Washington University School of Law",
                  },
                  {
                    title: 'Behavioral & Linguistic Analysis',
                    detail: 'Applied to disputed communications and contested conduct in custody files',
                  },
                  {
                    title: 'Julia Tucker, Co-Owner & COO',
                    detail:
                      'Background in child psychology and education with a paralegal certification; active on matters involving children',
                  },
                ].map((credential) => (
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
                G.A. Tucker PI provides investigative services. We do not provide legal advice,
                psychological evaluations, or custody recommendations to the court — those are the
                roles of your attorney and any court-appointed evaluator. Read more{' '}
                <Link href="/about" className="text-[#CEA53D] underline hover:text-[#CEA53D]/80">
                  about Greg and Julia Tucker
                </Link>
                , or see our{' '}
                <Link href="/child-custody" className="text-[#CEA53D] underline hover:text-[#CEA53D]/80">
                  standard child custody investigation services
                </Link>
                .
              </p>
            </div>
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
              High-Asset Custody FAQs
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
              Speak With Greg Directly
            </h2>
            <p
              className="text-[#EDEDED]/80 text-lg mb-8 leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Initial consultations are confidential and free. Describe the matter and you will get
              a straight assessment of what can be documented and what it will take — whether you
              are a parent or the attorney handling the file.
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
            <p
              className="text-[#EDEDED]/50 text-xs mt-8 leading-relaxed max-w-2xl mx-auto"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <FileText className="w-3 h-3 inline mr-1 -mt-0.5" />
              G.A. Tucker PI does not publish client names, case details, or testimonials from
              custody matters.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
      <StickyCTAButton />
    </div>
  );
}
