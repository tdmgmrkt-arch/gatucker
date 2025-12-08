"use client";

import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';
import { StickyCTAButton } from '../components/sticky-cta-button';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Background Checks',
    description: 'Comprehensive background investigations including employment verification, criminal records, and personal history research using exclusive databases.',
    image: '/background_check_hero_bg.webp',
    href: '/background-checks',
  },
  {
    title: 'Risk Management',
    description: 'Professional risk assessment and mitigation strategies to identify threats, protect company resources, and safeguard your business interests.',
    image: '/risk-management-hero.webp',
    href: '/risk-management',
  },
  {
    title: 'Consulting',
    description: 'Expert consulting services for attorneys including trial preparation, jury selection, witness interviews, and comprehensive case analysis.',
    image: '/consulting-hero-background.webp',
    href: '/consulting',
  },
  {
    title: 'Profiling',
    description: 'Advanced behavioral analysis and criminal profiling services to identify patterns, assess threats, and support investigative efforts.',
    image: '/profilin-hero.webp',
    href: '/profiling',
  },
  {
    title: 'Infidelity Investigations',
    description: 'Discreet surveillance and investigative services to uncover the truth about suspected infidelity with court-admissible evidence.',
    image: '/infideliity-hero.webp',
    href: '/infidelity',
  },
  {
    title: 'General Investigations',
    description: 'Comprehensive investigative services for civil, commercial, and legal matters including process serving and court filing support.',
    image: '/invetigating-services-hero.webp',
    href: '/investigations',
  },
  {
    title: 'Child Custody',
    description: 'Thorough investigations to document parental fitness, living conditions, and child welfare for custody proceedings.',
    image: '/child-custody-hero.webp',
    href: '/child-custody',
  },
  {
    title: 'Missing Persons',
    description: 'Professional locate services using advanced databases, field investigations, and digital tracking to find missing individuals.',
    image: '/missing-persons-hero.webp',
    href: '/missing-persons',
  },
  {
    title: 'Hollywood Fixer',
    description: 'Elite discretionary services for high-profile clients, celebrities, and Fortune 500 companies requiring absolute confidentiality.',
    image: '/hollywood_fixer_background.webp',
    href: '/hollywood-fixer',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A]">
        <div className="max-w-6xl mx-auto text-center">
          <h1
            className="mb-6 font-black uppercase tracking-tight leading-tight"
            style={{
              fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
              fontSize: 'clamp(3rem, 8vw, 5rem)',
              color: '#FFFF',
            }}
          >
            Our Services
          </h1>
          <div
            className="h-1 w-32 bg-[#CEA53D] mx-auto mb-8"
            style={{
              boxShadow: '0 0 20px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 215, 0, 0.4)'
            }}
          ></div>
          <p
            className="text-[#EDEDED]/80 max-w-3xl mx-auto font-light"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.1rem',
              lineHeight: '1.8'
            }}
          >
            From background investigations to high-profile crisis management, GA Tucker PI offers comprehensive private investigation services tailored to your unique needs.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1A1A1A] via-[#0D0D0D] to-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-black border-2 border-[#CEA53D]/30 rounded-lg overflow-hidden hover:border-[#CEA53D]/70 transition-all duration-300 hover:scale-[1.02] flex flex-col"
                style={{
                  boxShadow: '0 0 20px rgba(255, 215, 0, 0.1)',
                }}
              >
                {/* Background Image */}
                <div
                  className="relative h-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${service.image}')`,
                  }}
                >
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90"></div>

                  {/* Title overlay */}
                  <div className="absolute inset-0 flex items-end p-6">
                    <h3
                      className="text-2xl font-black uppercase text-[#CEA53D] leading-tight"
                      style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        textShadow: '0 0 20px rgba(206, 165, 61, 0.5)',
                      }}
                    >
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <p
                    className="text-[#EDEDED]/80 leading-relaxed mb-6 flex-1"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.95rem',
                      lineHeight: '1.7',
                    }}
                  >
                    {service.description}
                  </p>

                  {/* Learn More Button */}
                  <Link href={service.href} className="mt-auto">
                    <button
                      className="w-full bg-black border-2 border-[#CEA53D] text-[#CEA53D] px-6 py-3 font-bold uppercase tracking-wider transition-all duration-300 hover:bg-[#CEA53D] hover:text-black flex items-center justify-center gap-2 group-hover:scale-105"
                      style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: '1rem',
                        boxShadow: '0 0 15px rgba(255, 215, 0, 0.3)',
                      }}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
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
              className="text-3xl sm:text-4xl font-black uppercase text-[#EDEDED] mb-6"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Ready to Get Started?
            </h2>
            <p
              className="text-[#EDEDED]/80 mb-8 max-w-2xl mx-auto"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.1rem', lineHeight: '1.8' }}
            >
              Contact us today for a free consultation. Our experienced investigators are ready to help you find the answers you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:909-964-8976" className="group">
                <button
                  className="relative bg-black border-4 border-[#CEA53D] text-[#CEA53D] px-8 py-4 font-black uppercase tracking-wider transition-all duration-300 hover:bg-[#CEA53D] hover:text-black hover:scale-105"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: '1.2rem',
                    boxShadow: '0 0 20px rgba(255, 215, 0, 0.5), inset 0 0 15px rgba(255, 215, 0, 0.15)',
                  }}
                >
                  Call 909-964-8976
                </button>
              </a>
              <a href="/request-service-form" className="group">
                <button
                  className="relative bg-[#CEA53D] border-4 border-[#CEA53D] text-black px-8 py-4 font-black uppercase tracking-wider transition-all duration-300 hover:bg-black hover:text-[#CEA53D] hover:scale-105"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: '1.2rem',
                    boxShadow: '0 0 20px rgba(255, 215, 0, 0.5), inset 0 0 15px rgba(255, 215, 0, 0.15)',
                  }}
                >
                  Request Service
                </button>
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
