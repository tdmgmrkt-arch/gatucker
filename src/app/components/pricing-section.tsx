"use client";

import { motion } from 'framer-motion';
import { Clock, FileText, Star } from 'lucide-react';

export function PricingSection() {
  return (
    <section className="relative py-24 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 
            className="mb-3 text-[#EDEDED] font-bold tracking-tight leading-tight"
            style={{ 
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            }}
          >
            <span className="text-[#E7AD41]">Pricing</span>
          </h2>
          <div className="h-1 w-24 bg-[#E7AD41] mx-auto my-4"></div>
          <p 
            className="text-[#EDEDED]/70 max-w-2xl mx-auto font-light"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.1rem' }}
          >
            Clear and Transparent Pricing for Your Peace of Mind
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#2C2C2C]/50 backdrop-blur-sm border border-[#2C2C2C] rounded-2xl p-8 md:p-12 lg:p-16 relative"
        >
          {/* Main Pricing Grid */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            {/* Hourly Rate */}
            <div className="text-center md:text-left relative">
              <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#E7AD41]/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#E7AD41]" strokeWidth={2.5} />
                </div>
                <h3 
                  className="text-[#EDEDED] font-semibold tracking-tight"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.75rem' }}
                >
                  Hourly Rate
                </h3>
              </div>
              
              <div className="mb-4 flex flex-col items-center md:items-start">
                <span 
                  className="text-[#E7AD41] font-bold"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: '4.5rem', lineHeight: '1' }}
                >
                  $211
                </span>
                <span className="text-[#EDEDED]/70 text-lg font-light" style={{ fontFamily: "'Inter', sans-serif" }}>/hour</span>
              </div>
              
              <p className="text-[#EDEDED]/70 leading-relaxed mb-4 text-center md:text-left" style={{ fontFamily: "'Inter', sans-serif" }}>
                Applicable for ongoing services that require continuous effort, such as:
              </p>
              
              <ul className="space-y-2 text-[#EDEDED]/80 text-sm md:text-base font-light pl-6 relative">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#E7AD41] rounded-full flex-shrink-0" />
                  Surveillance
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#E7AD41] rounded-full flex-shrink-0" />
                  Locating a person
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#E7AD41] rounded-full flex-shrink-0" />
                  Civil investigations
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#E7AD41] rounded-full flex-shrink-0" />
                  Criminal investigations
                </li>
              </ul>
            </div>

            {/* Flat Fee */}
            <div className="text-center md:text-left border-t md:border-t-0 md:border-l border-[#E7AD41]/20 pt-10 md:pt-0 md:pl-10 relative">
              <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#E7AD41]/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-[#E7AD41]" strokeWidth={2.5} />
                </div>
                <h3 
                  className="text-[#EDEDED] font-semibold tracking-tight"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.75rem' }}
                >
                  Flat Fee
                </h3>
              </div>
              
              <p className="text-[#EDEDED]/70 leading-relaxed mb-6 font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                For short-term or research-intensive cases, a flat fee will be charged to meet your specific needs. This provides clarity and predictability on your total cost upfront.
              </p>
              
              <p className="text-[#EDEDED]/80 font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                Every service begins with a professional **consultation**. This allows us to assess your unique situation and provide a precise quote for a successful resolution.
              </p>
            </div>
          </div>

          {/* Veterans Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 pt-8 border-t border-[#E7AD41]/20 text-center"
          >
            <div className="inline-flex items-center justify-center gap-3 bg-[#E7AD41]/10 border border-[#E7AD41]/30 rounded-full px-6 py-3">
              <Star className="w-5 h-5 text-[#E7AD41] flex-shrink-0" />
              <p className="text-[#EDEDED] text-sm md:text-base font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                <span className="text-[#E7AD41] font-bold">Veterans:</span> Please inform us of your service when discussing your case with an investigator.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-[#EDEDED]/60 italic font-light" style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem' }}>
            Each case is unique, and our costs are tailored to the specific needs of your investigation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}