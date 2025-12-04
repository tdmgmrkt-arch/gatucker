"use client";

import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';
import { StickyCTAButton } from '../components/sticky-cta-button';
import { FAQAccordion } from '../components/faq-accordion';
import { motion } from 'framer-motion';

export default function FAQsPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A]">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="mb-6 font-black uppercase tracking-tight leading-tight"
            style={{
              fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
              fontSize: 'clamp(3rem, 8vw, 5rem)',
              color: '#FFFF',
            }}
          >
            Frequently Asked Questions
          </h1>
          <div
            className="h-1 w-32 bg-[#CEA53D] mx-auto mb-8"
            style={{
              boxShadow: '0 0 20px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 215, 0, 0.4)'
            }}
          ></div>
          <p
            className="text-[#EDEDED]/80 max-w-2xl mx-auto font-light"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.1rem',
              lineHeight: '1.8'
            }}
          >
            Find answers to common questions about our private investigation services, licensing, confidentiality, and more.
          </p>
        </div>
      </section>

      {/* FAQ Content Section */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1A1A1A] via-[#0D0D0D] to-[#1A1A1A]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FAQAccordion faqs={[
              {
                question: 'Do you offer free estimates?',
                answer: 'Yes. At GA Tucker PI, you can receive a free estimate before hiring a private detective.',
              },
              {
                question: 'Are you licensed?',
                answer: 'Yes, GA Tucker PI is licensed by the state of California. Our license number is PI188351. You will work with a licensed private investigator when you hire us.',
              },
              {
                question: 'Do private investigators have to be licensed?',
                answer: 'Yes, a private investigator must be licensed in the state of California. Contact GA Tucker PI today.',
              },
              {
                question: 'Who hires private investigators?',
                answer: 'There are many reasons why a person may hire a private investigator. Typically, a client will hire one when they are trying to obtain information that they aren\'t able to get on their own. Contact GA Tucker PI for more information today.',
              },
              {
                question: 'How long does it take to solve a particular case?',
                answer: 'The length of a case depends on many different factors. It also depends on the specifics of the case and the details involved. According to Facts.net, the length of an investigation can vary from a few days to several weeks or months. We recommend calling GA Tucker PI and speaking with a private detective to discuss the details.',
              },
              {
                question: 'Will my case be confidential?',
                answer: 'Yes, your case at GA Tucker PI will remain confidential. You can trust that your private detective will not share your personal information.',
              },
              {
                question: 'How do you charge?',
                answer: 'At GA Tucker PI, we collect money upfront after you hire a private investigator.',
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
              className="text-3xl sm:text-4xl font-black uppercase text-[#EDEDED] mb-6"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Still Have Questions?
            </h2>
            <p
              className="text-[#EDEDED]/80 mb-8 max-w-2xl mx-auto"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.1rem', lineHeight: '1.8' }}
            >
              Our team is here to answer any additional questions you may have about our services. Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:909-345-1350" className="group">
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
