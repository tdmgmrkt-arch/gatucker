"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Shield, Users, FileCheck, Phone, Search, Scale, FileText, Lock, Mail, Award, Target, Brain } from "lucide-react";
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

const reasonsToHire = [
  "99% success rate",
  "Confidentiality guaranteed",
  "Granted best defense",
  "Over 27 years of experience",
  "Professionalism",
  "Specificity and priority",
];

const capabilities = [
  {
    icon: Scale,
    title: "Attorney Relations",
    description: "We work directly with attorneys and ensure our commitment to providing the information needed to solidify a good defense.",
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

const trialCapabilities = [
  {
    icon: Brain,
    title: "Trial Consulting",
    description: "We use forensic behavioral science techniques to aid attorneys in the presentation of a criminal trial or civil lawsuit.",
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

const juryConsiderations = [
  "Does your proposed strategy work?",
  "Does your story have themes and a plot that resonate?",
  "Is your presentation understandable and compelling?",
  "Which potential jurors are most likely to become your advocates in deliberations?",
  "What tools do those jurors need to evaluate, understand, and advocate for your case?",
];

const researchServices = [
  {
    title: "Mock Trial Research",
    description: "Simulated in-person or online trial presentations that assess which arguments are persuasive by uncovering jurors' decision-making processes as they forge consensus on specific verdict questions during deliberations.",
  },
  {
    title: "Mock Arbitration Research",
    description: "Simulated in-person or online mock arbitrations and bench trials featuring experienced arbitrators and judges to provide insights into the persuasiveness of your case themes, arguments, and presentations.",
  },
  {
    title: "Focus Group Research",
    description: "Facilitated in person or online discussions with mock jurors that provide insights into trial jurors' likely reactions to key issues, case themes, and arguments.",
  },
  {
    title: "Jury Selection",
    description: "Assistance tracking and interpreting juror comments and comparative analysis of questionnaire answers, enabling data-driven recommendations to be offered in real time.",
  },
  {
    title: "Voir Dire Strategy",
    description: "Development of voir dire questions that effectively identify dangerous jurors and provide an opportunity for them to express a bias that may support a challenge for cause.",
  },
  {
    title: "Juror Questionnaires",
    description: "Artful development of supplemental juror questionnaires that identify the most dangerous jurors without exposing favorable jurors.",
  },
  {
    title: "Community Attitude Survey",
    description: "Telephone and online surveys designed to identify public impressions of the parties, assess reactions to the positions of the parties, and uncover preexisting attitudes within your likely venire.",
  },
  {
    title: "Witness Preparation",
    description: "Enhances the clarity and confidence of fact and expert witness testimony at trial and depositions through communication skills training and strategic recommendations.",
  },
];

const reviews = [
  {
    name: "Robert L",
    date: "2/15/2025",
    text: "In my opinion GATucker accomplished what I needed and he did so in a very professional way and I would suggest that if you ever need a PI, hire Mr. Tucker!",
  },
  {
    name: "APRIL MESA DOEVAISA M",
    date: "3/24/2025",
    text: "Outstanding Service and Expertise from Tucker Private Investigations!!! I cannot recommend Tucker Private Investigations highly enough.",
  },
];

export default function ConsultingPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] overflow-x-hidden">
      <Navbar />

      {/* Hero Section - Full Width with Background Image */}
      <section
        className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/consulting-hero-background.webp')",
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
              Consulting and Attorney Services
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
              Our investigative team has the educational background, experience, and necessary skills that are extremely beneficial for attorney support, trial consulting, and jury selection.
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
                          service.title === 'Consulting'
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

                {/* Services Offered Widget */}
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
                    {['Attorney Support', 'Trial Consulting', 'Jury Consulting', 'Expert Witness', 'Case Analysis'].map((service) => (
                      <li key={service} className="flex items-center gap-2 text-[#EDEDED]/70 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <Scale className="w-4 h-4 text-[#CEA53D] flex-shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Why Choose Widget */}
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
                    {reasonsToHire.map((reason) => (
                      <li key={reason} className="flex items-start gap-2 text-[#EDEDED]/70 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <CheckCircle2 className="w-4 h-4 text-[#CEA53D] flex-shrink-0 mt-0.5" />
                        {reason}
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
                  Hire Private Investigators for Local Law Firms
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
                    Due to an attorney&apos;s profession, they are constantly handling multitudes of clients. Each case is unique and needs to be handled with specificity and priority, which can be difficult when the caseload is high. Cases consist of hundreds of documents that require observation, witnesses that require interviews, as well as an emphasis on case law. Since the nature of being an attorney is often accommodated with the responsibility of accomplishing demanding tasks.
                  </p>
                  <p
                    className="text-[#EDEDED]/85 leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif", lineHeight: "1.8" }}
                  >
                    Many attorneys reach out to private investigators with the aim of providing support in the investigation. The investigative team at GA Tucker PI has the educational background, experience, and necessary skills that are extremely beneficial in regard to attorney support. Our team of private investigators is eager and committed to providing our clients with exceptional attorney support to ensure our clients are granted the best defense possible.
                  </p>
                  <div className="bg-[#CEA53D]/10 border-l-4 border-[#CEA53D] p-5 rounded-r">
                    <p
                      className="text-[#CEA53D] font-bold text-lg flex items-center gap-2"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                      Call today for a FREE estimate on our attorney consulting services.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Reasons to Hire */}
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
                  Reasons to Hire GA Tucker PI
                </h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {reasonsToHire.map((reason, index) => (
                    <div
                      key={index}
                      className="bg-black/40 border-2 border-[#CEA53D]/30 rounded-lg p-5 flex items-center gap-3 hover:border-[#CEA53D]/70 transition-all duration-300"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#CEA53D] flex-shrink-0" />
                      <p
                        className="text-[#EDEDED]/85 font-medium text-sm"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {reason}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Private Investigators Working With Attorneys + Contact Form */}
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
                  Private Investigators Working With Attorneys
                </h3>
                <p
                  className="text-[#EDEDED]/85 mb-6 leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif", lineHeight: "1.8" }}
                >
                  Attorney support means finding and reviewing necessary intelligence documents in order to prepare dossiers on the relevant subjects in the case. Private investigators have access to verified databases similar to that of law enforcement that allow them to build comprehensive background checks on relevant subjects. They are experienced in bringing crucial context to a subject&apos;s background check—reviewing items such as criminal history, work history, and address history. These facts are placed in context to the investigation, and private investigators provide recommendations based on facts found.
                </p>

              </motion.div>

              {/* Contact Form Section */}
              <div id="contact">
                <RequestServiceForm defaultService="Consulting" />
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* Additional Content - Full Width */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1A1A1A] via-[#0D0D0D] to-[#1A1A1A]">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Attorney Relations Capabilities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
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

              {/* Trial Consulting */}
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
                  Trial Consulting in Southern California
                </h3>
                <div className="bg-black/40 border-2 border-[#CEA53D]/30 rounded-lg p-6 space-y-4">
                  <p
                    className="text-[#EDEDED]/85 leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif", lineHeight: "1.8" }}
                  >
                    GA Tucker PI can provide insight into how jurors will perceive key issues, evidence, and testimony, enabling you to select the jurors most likely to become your advocates in deliberations.
                  </p>
                  <p
                    className="text-[#EDEDED]/85 leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif", lineHeight: "1.8" }}
                  >
                    This is accomplished by using our proven forensic behavioral science techniques that uncover the factors that motivate jurors&apos; decision-making, create and test persuasion strategies, and ultimately provide you with the strategies that will spark jurors to lean toward your client. On trial day, your case will be solid, persuasive, and powerful.
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

              {/* Experienced Trial Consultants */}
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
                  Experienced Trial Consultants
                </h3>
                <div className="bg-black/40 border-2 border-[#CEA53D]/30 rounded-lg p-6 mb-6">
                  <p
                    className="text-[#EDEDED]/85 leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif", lineHeight: "1.8" }}
                  >
                    Our trial consultants provide the expertise and the tools necessary to ensure a seamless presentation of evidence during trial. We will work with you remotely or on-site to organize your trial database including documents, photos, demonstratives, deposition transcripts and video clips, and advise on the best and most efficient methods for courtroom presentation.
                  </p>
                </div>

                {/* Trial Capabilities */}
                <div className="grid md:grid-cols-3 gap-6">
                  {trialCapabilities.map((capability, index) => (
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

              {/* California Jury Consultants */}
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
                  California Jury Consultants
                </h3>
                <div className="bg-black/40 border-2 border-[#CEA53D]/30 rounded-lg p-6 space-y-4">
                  <p
                    className="text-[#EDEDED]/85 leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif", lineHeight: "1.8" }}
                  >
                    At GA Tucker PI, we provide insight into how jurors will perceive key issues, evidence, and testimony, enabling you to select the jurors most likely to become your advocates in deliberations.
                  </p>
                  <p
                    className="text-[#EDEDED]/85 leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif", lineHeight: "1.8" }}
                  >
                    There&apos;s a reason our clients trust us. We help them validate their strategy, story, and witnesses. Using our proven years of trial experience, we uncover the factors that motivate jurors&apos; decision-making, create and test persuasion strategies, and ultimately provide you with the strategies that will spark jurors to lean toward your client. On trial day, your case will be solid, persuasive, and powerful.
                  </p>
                  <div className="bg-[#CEA53D]/10 border-l-4 border-[#CEA53D] p-5 rounded-r">
                    <p
                      className="text-[#CEA53D] font-bold"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Contact us today for a FREE estimate on our jury consultation services in Southern California. You&apos;ll get experienced analysis and advice from a true professional.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Why Hire Us */}
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
                  Why Hire Us for Our Consultation Services?
                </h3>
                <div className="bg-black/40 border-2 border-[#CEA53D]/30 rounded-lg p-6">
                  <p
                    className="text-[#EDEDED]/85 mb-4 leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif", lineHeight: "1.8" }}
                  >
                    We help you motivate jurors to see the case your way. Our jury consultants use a variety of tools to help you understand how jurors will receive and process your case. The following are our jury selection considerations:
                  </p>
                  <ul className="space-y-3">
                    {juryConsiderations.map((consideration, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-[#EDEDED]/85"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#CEA53D] flex-shrink-0 mt-0.5" />
                        {consideration}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Serving All of Southern California */}
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
                  Serving All of Southern California
                </h3>
                <div className="bg-black/40 border-2 border-[#CEA53D]/30 rounded-lg p-6 mb-6">
                  <p
                    className="text-[#EDEDED]/85 leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif", lineHeight: "1.8" }}
                  >
                    Our jury consultants make substantive contributions to your litigation strategies by relying on a combination of rigorous forensic behavioral science methods, social science methods, decades of practical experience, communication theory, jury psychology, information processing theory, group dynamics, which examines attitudes and beliefs that motivate jurors&apos; decision-making.
                  </p>
                  <p
                    className="text-[#EDEDED]/85 mt-4 leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif", lineHeight: "1.8" }}
                  >
                    Validation of your trial strategy requires jury research to maximize the chances your client will win. This research includes both qualitative and quantitative analyses that steer you toward effective trial strategies.
                  </p>
                </div>

                {/* Research Services Grid */}
                <div className="grid md:grid-cols-2 gap-5">
                  {researchServices.map((service, index) => (
                    <div
                      key={index}
                      className="bg-black/40 border-2 border-[#CEA53D]/30 rounded-lg p-5 hover:border-[#CEA53D]/70 transition-all duration-300"
                    >
                      <h4
                        className="text-[#CEA53D] text-lg font-bold mb-2"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {service.title}
                      </h4>
                      <p
                        className="text-[#EDEDED]/80 text-sm"
                        style={{ fontFamily: "'Inter', sans-serif", lineHeight: "1.6" }}
                      >
                        {service.description}
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
                  FAQs About Consulting Services
                </h3>
                <FAQAccordion faqs={[
                  {
                    question: 'Should I hire a private investigator for my civil case?',
                    answer: 'We have worked on cases with attorneys all across Southern California and have formed business relationships due to our reliability and close rate.'
                  },
                  {
                    question: 'Should I hire a private investigator for my trial consulting?',
                    answer: 'We have worked on cases with attorneys all across Southern California and have formed business relationships due to our reliability and close rate.'
                  },
                  {
                    question: 'Should I hire a private investigator for my jury consulting?',
                    answer: 'We have worked on cases with attorneys all across Southern California and have formed business relationships due to our reliability and close rate.'
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

            {/* Testimonials */}
            <div className="mt-10">
              <h4
                className="text-[#CEA53D] text-xl font-black uppercase mb-6"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                See What Our Clients Have to Say About Us
              </h4>
              <div className="grid md:grid-cols-2 gap-5">
                {[
                  {
                    name: 'Tom — Murrieta, CA',
                    text: 'Incredible attention to detail. Highly knowledgeable, Best representation ever. Excellent service, very caring and professional staff. I would recommend it to anyone in search of an investigator.'
                  },
                  {
                    name: 'Jonathon — A Satisfied Client',
                    text: 'I was given quick and detailed information! I recommend G.A. Tucker P.I. Investigative Services to anyone who needs a discreet and accurate investigation.'
                  }
                ].map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-black/60 border-2 border-[#CEA53D]/20 rounded-lg p-6 text-left"
                  >
                    <p
                      className="text-[#EDEDED]/75 italic mb-4 leading-relaxed"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                    <p
                      className="text-[#CEA53D] font-bold text-sm"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {testimonial.name}
                    </p>
                  </div>
                ))}
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
