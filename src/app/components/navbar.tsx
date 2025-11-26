"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  FileText,
  Users, // Used for About GA Tucker PI
  MessageSquare,
  ArrowRight,
  BookOpen, // Used for Blog
  Search, // Background Checks
  Shield, // Risk Management
  Fingerprint, // Investigations
  Brain, // Consulting
  Target, // Missing Persons
  UserCheck, // Profiling
  Heart, // Infidelity
  Award, // Child Custody - chosen for its 'decision' aspect
  Mail, // For email in Contact
  MapPin, // For location in Contact
  Star, // Hollywood Fixer
} from 'lucide-react';
import Image from 'next/image';

// --- Navigation Data ---
const services = [
  { title: 'Background Checks', description: 'Comprehensive checks for individuals and corporations.', href: '/background-checks', icon: Search },
  { title: 'Risk Management', description: 'Proactive identification of security vulnerabilities.', href: '/risk-management', icon: Shield },
  { title: 'Investigations', description: 'Civil, criminal, domestic, and legal process support.', href: '/investigations', icon: Fingerprint },
  { title: 'Consulting', description: 'Expert guidance for complex behavioral and forensic cases.', href: '/consulting', icon: Brain },
  { title: 'Missing Persons', description: 'Specialized resources for locating individuals.', href: '/missing-persons', icon: Target },
  { title: 'Profiling', description: 'Behavioral analysis for legal strategies and insights.', href: '/profiling', icon: UserCheck },
  { title: 'Infidelity', description: 'Discreet and sensitive domestic relationship investigations.', href: '/infidelity', icon: Heart },
  { title: 'Child Custody', description: 'Objective evidence for family court proceedings.', href: '/child-custody', icon: Award },
];

const about = [
  { title: 'About GA Tucker PI', description: 'Our history, mission, and commitment to excellence.', href: '/about', icon: Users },
  { title: 'Hollywood Fixer', description: 'Trusted professional for celebrities and Fortune 500 companies.', href: '/hollywood-fixer', icon: Star },
  { title: 'Blog', description: 'Insights, case studies, and industry updates.', href: '/blog', icon: BookOpen },
  { title: 'FAQs', description: 'Answers to common questions about our services.', href: '/faqs', icon: MessageSquare },
];

const contact = [
  { title: 'Contact GA TUCKER PI', description: 'Get in touch for immediate assistance.', href: '/contact', icon: Phone },
  { title: 'Request Service Form', description: 'Submit a detailed inquiry for expert assessment.', href: '/request-service-form', icon: FileText },
];

const navItems = [
    { name: 'Investigative Services', dropdown: services, panel: 'services' },
    { name: 'About', dropdown: about, panel: 'about' },
    { name: 'Contact', dropdown: contact, panel: 'contact' },
];

const dropdownVariants = {
    open: { opacity: 1, maxHeight: "100vh", y: 0, transition: { duration: 0.3, ease: "easeOut" } },
    closed: { opacity: 0, maxHeight: 0, y: -10, transition: { duration: 0.3, ease: "easeIn" } },
};

// --- Navbar Component ---
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleDropdown = (name: string | null) => {
    if (window.innerWidth >= 768) {
      setActiveDropdown(name);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-500">
      {/* Premium glass background with double border */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/95 to-[#0D0D0D]/90 backdrop-filter backdrop-blur-2xl" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#CEA53D]/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#CEA53D]/20 to-transparent blur-sm" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative">
        <div className="flex justify-between items-center h-20 sm:h-24">
          {/* Premium Logo */}
          <motion.a
            href="/"
            className="flex-shrink-0 relative group"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <Image
                src="/galogotest3.png"
                alt="G.A. Tucker PI Logo"
                width={140}
                height={100}
                className="h-auto w-[100px] sm:w-[120px] md:w-[140px] transition-all duration-300 group-hover:brightness-110"
              />
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 bg-[#CEA53D]/0 group-hover:bg-[#CEA53D]/5 rounded-lg transition-all duration-300 blur-xl" />
            </div>
          </motion.a>

          {/* Premium Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <div
                key={item.name}
                className="relative h-24 flex items-center"
                onMouseEnter={() => handleDropdown(item.name)}
                onMouseLeave={() => handleDropdown(null)}
              >
                <motion.button
                  className="relative px-5 py-2 text-white hover:text-[#CEA53D] transition-all duration-300 font-medium tracking-wide text-sm group"
                  style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '0.5px' }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <span className="relative z-10 flex items-center">
                    {item.name}
                    <ChevronDown
                      className={`ml-1.5 h-3.5 w-3.5 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : 'rotate-0'}`}
                      strokeWidth={2.5}
                    />
                  </span>

                  {/* Elegant underline */}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-transparent via-[#CEA53D] to-transparent group-hover:w-3/4 transition-all duration-500" />

                  {/* Subtle background glow */}
                  <span className="absolute inset-0 bg-[#CEA53D]/0 group-hover:bg-[#CEA53D]/5 rounded-lg transition-all duration-300 blur-sm" />
                </motion.button>

                {/* Vertical divider */}
                {index < navItems.length - 1 && (
                  <div className="h-4 w-px bg-gradient-to-b from-transparent via-[#CEA53D]/20 to-transparent mx-1" />
                )}
              </div>
            ))}
            
            {/* Retro CTA Button */}
            <motion.div
              className="ml-6 pl-6 border-l border-[#CEA53D]/20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <a href="/request-service" className="group relative inline-block">
                <button
                  className="relative bg-black border-3 border-[#CEA53D] text-[#CEA53D] px-6 py-2 font-black uppercase tracking-wider text-xs transition-all duration-300 hover:bg-[#CEA53D] hover:text-black hover:scale-105"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    boxShadow:
                    "0 0 15px rgba(130,100,35,0.3), inset 0 0 8px rgba(130,100,35,0.15)",
                    textShadow: "0 0 5px rgba(130,100,35,0.4)",
                    
                  }}
                >
                  Get Consultation
                </button>
              </a>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-white hover:bg-transparent hover:text-[#CEA53D] focus:outline-none touch-manipulation min-w-[44px] min-h-[44px]"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </Button>
          </div>
        </div>
      </div>

      {/* --- Mega Dropdown Panel (Desktop) --- */}
      {activeDropdown && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={dropdownVariants}
          className="absolute left-0 w-full z-40 hidden md:block"
          onMouseEnter={() => handleDropdown(activeDropdown)}
          onMouseLeave={() => handleDropdown(null)}
        >
          {/* Premium layered background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/98 to-[#0D0D0D]/95 backdrop-blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#CEA53D]/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#CEA53D]/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-transparent via-[#CEA53D]/20 to-transparent blur-md" />

          <div className="relative p-12">
            <div className="max-w-7xl mx-auto grid grid-cols-12 gap-12">

            {/* Investigative Services Mega Panel */}
            {activeDropdown === 'Investigative Services' && (
                <>
                    <div className="col-span-8 grid grid-cols-2 gap-6">
                        {services.map((item) => (
                            <a
                                key={item.title}
                                href={item.href}
                                className="group relative flex items-start p-6 rounded-xl transition-all duration-500 border border-[#CEA53D]/10 hover:border-[#CEA53D]/30 bg-gradient-to-br from-[#1A1A1A]/40 to-[#0D0D0D]/40 hover:from-[#1A1A1A]/60 hover:to-[#0D0D0D]/60"
                            >
                                {/* Hover glow effect */}
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#CEA53D]/0 to-[#CEA53D]/0 group-hover:from-[#CEA53D]/5 group-hover:to-transparent transition-all duration-500" />

                                <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-[#CEA53D]/10 to-[#FFA500]/5 flex items-center justify-center flex-shrink-0 mr-5 group-hover:from-[#CEA53D]/20 group-hover:to-[#FFA500]/10 transition-all duration-300 group-hover:scale-110 shadow-lg">
                                    <item.icon className="w-6 h-6 text-[#CEA53D] group-hover:text-[#CEA53D] transition-colors" strokeWidth={2.5}/>
                                </div>
                                <div className="relative">
                                    <h4 className="text-[#EDEDED] text-lg font-bold mb-1.5 group-hover:text-[#CEA53D] transition-colors" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                                        {item.title}
                                    </h4>
                                    <p className="text-[#EDEDED]/60 text-sm font-light leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                                        {item.description}
                                    </p>
                                </div>

                                {/* Arrow indicator */}
                                <ArrowRight className="absolute top-6 right-6 w-4 h-4 text-[#CEA53D]/0 group-hover:text-[#CEA53D]/60 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1" />
                            </a>
                        ))}
                    </div>
                    <div className="col-span-4 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A]/60 to-[#0D0D0D]/60 backdrop-blur-sm" />
                        <div className="absolute inset-0 border border-[#CEA53D]/30 rounded-2xl" />
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#CEA53D]/10 rounded-full blur-3xl" />

                        <div className="relative p-10 flex flex-col items-center justify-center text-center h-full">
                            <div className="mb-6 relative">
                                <div className="absolute inset-0 bg-[#CEA53D]/20 blur-2xl rounded-full" />
                                <Image
                                    src="/teamphoto.png"
                                    alt="G.A. Tucker PI Logo"
                                    width={275}
                                    height={75}
                                    className="h-auto relative"
                                />
                            </div>
                            <p className="text-[#EDEDED]/70 text-sm mb-8 max-w-xs leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                            Our team combines experience with cutting-edge techniques to deliver results you can trust when it matters most.
                            </p>
                            <a href="/services" className="group relative">
                                <button
                                    className="relative bg-black border-3 border-[#CEA53D] text-[#CEA53D] px-8 py-3 font-black uppercase tracking-wider text-xs transition-all duration-300 hover:bg-[#CEA53D] hover:text-black hover:scale-105 flex items-center gap-2"
                                    style={{
                                        fontFamily: "'Bebas Neue', sans-serif",
                                        boxShadow: '0 0 20px rgba(255, 215, 0, 0.5), inset 0 0 15px rgba(255, 215, 0, 0.15)',
                                        textShadow: '0 0 8px rgba(255, 215, 0, 0.7)'
                                    }}
                                >
                                    View All Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </a>
                        </div>
                    </div>
                </>
            )}

            {/* About Mega Panel with Branded CTA */}
            {activeDropdown === 'About' && (
                <>
                    <div className="col-span-8 grid grid-cols-2 gap-6">
                        {about.map((item) => (
                            <a
                                key={item.title}
                                href={item.href}
                                className="group relative flex items-start p-6 rounded-xl transition-all duration-500 border border-[#CEA53D]/10 hover:border-[#CEA53D]/30 bg-gradient-to-br from-[#1A1A1A]/40 to-[#0D0D0D]/40 hover:from-[#1A1A1A]/60 hover:to-[#0D0D0D]/60"
                            >
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#CEA53D]/0 to-[#CEA53D]/0 group-hover:from-[#CEA53D]/5 group-hover:to-transparent transition-all duration-500" />

                                <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-[#CEA53D]/10 to-[#FFA500]/5 flex items-center justify-center flex-shrink-0 mr-5 group-hover:from-[#CEA53D]/20 group-hover:to-[#FFA500]/10 transition-all duration-300 group-hover:scale-110 shadow-lg">
                                    <item.icon className="w-6 h-6 text-[#CEA53D] group-hover:text-[#CEA53D] transition-colors" strokeWidth={2.5}/>
                                </div>
                                <div className="relative">
                                    <h4 className="text-[#EDEDED] text-lg font-bold mb-1.5 group-hover:text-[#CEA53D] transition-colors" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                                        {item.title}
                                    </h4>
                                    <p className="text-[#EDEDED]/60 text-sm font-light leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                                        {item.description}
                                    </p>
                                </div>

                                <ArrowRight className="absolute top-6 right-6 w-4 h-4 text-[#CEA53D]/0 group-hover:text-[#CEA53D]/60 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1" />
                            </a>
                        ))}
                    </div>
                    <div className="col-span-4 relative overflow-hidden rounded-2xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A]/60 to-[#0D0D0D]/60 backdrop-blur-sm" />
                        <div className="absolute inset-0 border border-[#CEA53D]/30 rounded-2xl" />
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#CEA53D]/10 rounded-full blur-3xl" />

                        <div className="relative p-10 flex flex-col items-center justify-center text-center h-full">
                            <div className="mb-6 relative">
                                <div className="absolute inset-0 bg-[#CEA53D]/20 blur-2xl rounded-full" />
                                <Image
                                    src="/galogotest3.png"
                                    alt="G.A. Tucker PI Logo"
                                    width={190}
                                    height={50}
                                    className="h-auto relative"
                                />
                            </div>
                            
                            <p className="text-[#EDEDED]/70 text-sm mb-8 max-w-xs leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                                Committed to integrity, confidentiality, and unparalleled investigative results.
                            </p>
                            <a href="/about" className="group relative">
                                <button
                                    className="relative bg-black border-3 border-[#CEA53D] text-[#CEA53D] px-8 py-3 font-black uppercase tracking-wider text-xs transition-all duration-300 hover:bg-[#CEA53D] hover:text-black hover:scale-105 flex items-center gap-2"
                                    style={{
                                        fontFamily: "'Bebas Neue', sans-serif",
                                        boxShadow: '0 0 20px rgba(255, 215, 0, 0.5), inset 0 0 15px rgba(255, 215, 0, 0.15)',
                                        textShadow: '0 0 8px rgba(255, 215, 0, 0.7)'
                                    }}
                                >
                                    Discover Our Story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </a>
                        </div>
                    </div>
                </>
            )}
            
            {/* Contact Mega Panel with CTA */}
            {activeDropdown === 'Contact' && (
                <>
                    <div className="col-span-8 grid grid-cols-2 gap-6">
                        {contact.map((item) => (
                            <a
                                key={item.title}
                                href={item.href}
                                className="group relative flex items-start p-6 rounded-xl transition-all duration-500 border border-[#CEA53D]/10 hover:border-[#CEA53D]/30 bg-gradient-to-br from-[#1A1A1A]/40 to-[#0D0D0D]/40 hover:from-[#1A1A1A]/60 hover:to-[#0D0D0D]/60"
                            >
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#CEA53D]/0 to-[#CEA53D]/0 group-hover:from-[#CEA53D]/5 group-hover:to-transparent transition-all duration-500" />

                                <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-[#CEA53D]/10 to-[#FFA500]/5 flex items-center justify-center flex-shrink-0 mr-5 group-hover:from-[#CEA53D]/20 group-hover:to-[#FFA500]/10 transition-all duration-300 group-hover:scale-110 shadow-lg">
                                    <item.icon className="w-6 h-6 text-[#CEA53D] group-hover:text-[#FFA500] transition-colors" strokeWidth={2.5}/>
                                </div>
                                <div className="relative">
                                    <h4 className="text-[#EDEDED] text-lg font-bold mb-1.5 group-hover:text-[#CEA53D] transition-colors" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                                        {item.title}
                                    </h4>
                                    <p className="text-[#EDEDED]/60 text-sm font-light leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                                        {item.description}
                                    </p>
                                </div>

                                <ArrowRight className="absolute top-6 right-6 w-4 h-4 text-[#CEA53D]/0 group-hover:text-[#CEA53D]/60 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1" />
                            </a>
                        ))}
                         <a
                            href="mailto:info@gatuckerpi.com"
                            className="group relative flex items-start p-6 rounded-xl transition-all duration-500 border border-[#CEA53D]/10 hover:border-[#CEA53D]/30 bg-gradient-to-br from-[#1A1A1A]/40 to-[#0D0D0D]/40 hover:from-[#1A1A1A]/60 hover:to-[#0D0D0D]/60"
                        >
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#CEA53D]/0 to-[#CEA53D]/0 group-hover:from-[#CEA53D]/5 group-hover:to-transparent transition-all duration-500" />

                            <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-[#CEA53D]/10 to-[#FFA500]/5 flex items-center justify-center flex-shrink-0 mr-5 group-hover:from-[#CEA53D]/20 group-hover:to-[#FFA500]/10 transition-all duration-300 group-hover:scale-110 shadow-lg">
                                <Mail className="w-6 h-6 text-[#CEA53D] group-hover:text-[#CEA53D] transition-colors" strokeWidth={2.5}/>
                            </div>
                            <div className="relative">
                                <h4 className="text-[#EDEDED] text-lg font-bold mb-1.5 group-hover:text-[#CEA53D] transition-colors" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                                    Email Us
                                </h4>
                                <p className="text-[#EDEDED]/60 text-sm font-light leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                                    info@gatuckerpi.com
                                </p>
                            </div>

                            <ArrowRight className="absolute top-6 right-6 w-4 h-4 text-[#CEA53D]/0 group-hover:text-[#CEA53D]/60 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1" />
                        </a>
                        <a
                            href="#"
                            className="group relative flex items-start p-6 rounded-xl transition-all duration-500 border border-[#CEA53D]/10 hover:border-[#CEA53D]/30 bg-gradient-to-br from-[#1A1A1A]/40 to-[#0D0D0D]/40 hover:from-[#1A1A1A]/60 hover:to-[#0D0D0D]/60"
                        >
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#CEA53D]/0 to-[#CEA53D]/0 group-hover:from-[#CEA53D]/5 group-hover:to-transparent transition-all duration-500" />

                            <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-[#CEA53D]/10 to-[#FFA500]/5 flex items-center justify-center flex-shrink-0 mr-5 group-hover:from-[#CEA53D]/20 group-hover:to-[#FFA500]/10 transition-all duration-300 group-hover:scale-110 shadow-lg">
                                <MapPin className="w-6 h-6 text-[#CEA53D] group-hover:text-[#FFA500] transition-colors" strokeWidth={2.5}/>
                            </div>
                            <div className="relative">
                                <h4 className="text-[#EDEDED] text-lg font-bold mb-1.5 group-hover:text-[#CEA53D] transition-colors" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                                    Our Location
                                </h4>
                                <p className="text-[#EDEDED]/60 text-sm font-light leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                                    Serving all of California
                                </p>
                            </div>

                            <ArrowRight className="absolute top-6 right-6 w-4 h-4 text-[#CEA53D]/0 group-hover:text-[#CEA53D]/60 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1" />
                        </a>
                    </div>
                    <div className="col-span-4 relative overflow-hidden rounded-2xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A]/60 to-[#0D0D0D]/60 backdrop-blur-sm" />
                        <div className="absolute inset-0 border border-[#CEA53D]/30 rounded-2xl" />
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#CEA53D]/10 rounded-full blur-3xl" />

                        <div className="relative p-10 flex flex-col items-center justify-center text-center h-full">
                            
                            {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-10"
          >
            <p
              className="text-[#CEA53D]/90 text-sm md:text-base"
              style={{
                fontFamily: "var(--font-space-mono)",
                letterSpacing: "0.1em",
                textShadow: "0 0 3px rgba(255,165,0,0.3)",
              }}
            >
              DON&apos;T BE A SUCKER!
            </p>

            <p
              className="text-[#EB0A08] mb-2"
              style={{
                fontFamily: "var(--font-dancing-script)",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 700,
                textShadow:
                "0 0 6px rgba(255, 30, 30, 0.7), 0 0 12px rgba(255, 30, 30, 0.4), 1px 1px 0 rgba(0,0,0,0.6)",
                transform: "rotate(-3deg)",
              }}
            >
              Call Tucker!
            </p>
          </motion.div>
                            <a href="tel:909-345-1350" className="group relative">
                                <button
                                    className="relative bg-black border-3 border-[#CEA53D] text-[#CEA53D] px-8 py-3 font-black uppercase tracking-wider text-xs transition-all duration-300 hover:bg-[#CEA53D] hover:text-black hover:scale-105 flex items-center gap-2"
                                    style={{
                                        fontFamily: "'Bebas Neue', sans-serif",
                                        boxShadow: '0 0 20px rgba(255, 215, 0, 0.5), inset 0 0 15px rgba(255, 215, 0, 0.15)',
                                    }}
                                >
                                    <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" /> (909) 345-1350
                                </button>
                            </a>
                        </div>
                    </div>
                </>
            )}
            </div>
          </div>
        </motion.div>
      )}

      {/* Mobile Menu */}
      <motion.div
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={dropdownVariants}
        className="md:hidden overflow-hidden bg-[#0D0D0D] border-t border-[#CEA53D]/10 shadow-xl"
      >
        <div className="px-5 pt-4 pb-6 space-y-5 max-h-[calc(100vh-80px)] overflow-y-auto">
            {navItems.map((item) => (
                <div key={item.name} className="border-b border-[#2C2C2C] pb-4">
                    <h3 className="text-[#CEA53D] font-bold uppercase tracking-wider text-sm mb-3 pt-2">{item.name}</h3>
                    <div className="space-y-2 pl-3">
                        {item.dropdown.map((subItem) => (
                            <a
                                key={subItem.title}
                                href={subItem.href}
                                onClick={() => setIsOpen(false)}
                                className="block text-[#EDEDED] hover:text-[#CEA53D] active:text-[#CEA53D] transition-colors duration-300 font-light py-2.5 text-base touch-manipulation"
                                style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                                {subItem.title}
                            </a>
                        ))}
                    </div>
                </div>
            ))}
            <div className="pt-4">
                <button
                    onClick={() => setIsOpen(false)}
                    className="w-full bg-black border-4 border-[#CEA53D] text-[#CEA53D] py-4 font-black uppercase tracking-wider transition-all duration-300 hover:bg-[#CEA53D] hover:text-black active:scale-95 touch-manipulation"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      boxShadow: '0 0 25px rgba(255, 215, 0, 0.5), inset 0 0 15px rgba(255, 215, 0, 0.15)',
                      textShadow: '0 0 8px rgba(255, 215, 0, 0.7)'
                    }}
                >
                    Get Consultation
                </button>
            </div>
        </div>
      </motion.div>
    </nav>
  );
}