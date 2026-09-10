"use client";

import { motion } from 'framer-motion';
import { Clock, FileText, Star } from 'lucide-react';

const BEBAS = "'Bebas Neue', 'Arial Black', sans-serif";
const INTER = "'Inter', sans-serif";
const GOLD_GLOW = '0 0 20px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 215, 0, 0.4)';

const HOURLY_SERVICES = [
  'Surveillance',
  'Locating a person',
  'Civil investigations',
  'Criminal investigations',
  'Other cases requiring ongoing investigative services',
];

const PACKAGE_CASES = [
  'Infidelity investigations',
  'Child custody investigations',
  'Missing-person investigations',
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2
            className="mb-4 font-black uppercase tracking-tight leading-tight"
            style={{
              fontFamily: BEBAS,
              fontSize: 'clamp(1.85rem, 3.6vw, 2.75rem)',
              color: '#FFFF',
            }}
          >
            Investigation Services and Pricing
          </h2>
          <div className="h-1 w-32 bg-[#CEA53D] mx-auto my-5" style={{ boxShadow: GOLD_GLOW }}></div>
          <p
            className="text-[#EDEDED]/80 max-w-2xl mx-auto font-light"
            style={{ fontFamily: INTER, fontSize: '1.1rem', lineHeight: '1.8' }}
          >
            Clear and Transparent Pricing for Your Peace of Mind
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-black/90 backdrop-blur-sm border-2 border-[#CEA53D]/30 rounded-xl p-6 md:p-10 relative"
          style={{ boxShadow: '0 0 30px rgba(255, 215, 0, 0.25), inset 0 0 50px rgba(255, 215, 0, 0.05)' }}
        >
          {/* Zone 1 — the two options. Equal-height panels so unequal copy can't leave a void. */}
          <div className="grid md:grid-cols-2 gap-5 items-stretch">
            <div className="bg-[#CEA53D]/[0.04] rounded-lg p-6 md:p-7">
              <div className="flex items-center gap-4 mb-6 md:min-h-[3.5rem]">
                <div className="w-12 h-12 rounded-full bg-[#CEA53D]/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#CEA53D]" strokeWidth={2.5} />
                </div>
                <h3
                  className="uppercase tracking-tight leading-none flex items-baseline gap-3 flex-wrap"
                  style={{ fontFamily: BEBAS, fontSize: 'clamp(1.25rem, 2.4vw, 2rem)', color: '#FFFF' }}
                >
                  Hourly Rate
                  <span className="text-[#CEA53D] whitespace-nowrap" style={{ fontSize: 'clamp(1.4rem, 2.8vw, 2.25rem)' }}>
                    $375
                    <span className="text-[#EDEDED]/55 ml-2.5 tracking-wide" style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.15rem)' }}>
                      per hour
                    </span>
                  </span>
                </h3>
              </div>

              <p className="text-[#EDEDED]/70 leading-relaxed mb-4 font-light" style={{ fontFamily: INTER }}>
                Our hourly rate is available for ongoing investigations that require continuous effort, such as:
              </p>

              <ul className="space-y-2 text-[#EDEDED]/80 text-sm md:text-base font-light">
                {HOURLY_SERVICES.map((service) => (
                  <li key={service} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 mt-2 bg-[#CEA53D] rounded-full flex-shrink-0" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#CEA53D]/[0.04] rounded-lg p-6 md:p-7">
              <div className="flex items-center gap-4 mb-6 md:min-h-[3.5rem]">
                <div className="w-12 h-12 rounded-full bg-[#CEA53D]/10 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-[#CEA53D]" strokeWidth={2.5} />
                </div>
                <h3
                  className="uppercase tracking-tight leading-none flex items-baseline gap-3 flex-wrap"
                  style={{ fontFamily: BEBAS, fontSize: 'clamp(1.25rem, 2.4vw, 2rem)', color: '#FFFF' }}
                >
                  Flat-Fee Packages
                  <span className="text-[#CEA53D]/85 whitespace-nowrap" style={{ fontSize: 'clamp(0.95rem, 1.65vw, 1.35rem)' }}>
                    Custom Quote
                  </span>
                </h3>
              </div>

              <p className="text-[#EDEDED]/70 leading-relaxed mb-4 font-light" style={{ fontFamily: INTER }}>
                For short-term, research-intensive, or commonly requested cases, we may offer a flat-fee package. Flat-rate pricing provides greater cost clarity and predictability from the outset.
              </p>

              <p className="text-[#EDEDED]/70 leading-relaxed mb-4 font-light" style={{ fontFamily: INTER }}>
                Discounted package rates may be available for certain common types of cases, including:
              </p>

              <ul className="space-y-2 text-[#EDEDED]/80 text-sm md:text-base font-light">
                {PACKAGE_CASES.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 mt-2 bg-[#CEA53D] rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Zone 2 — details that apply to both options, same 50/50 spine */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 pt-9 border-t border-[#CEA53D]/20"
          >
            <div className="grid md:grid-cols-2 gap-6 md:gap-12">
              <p className="text-[#EDEDED]/75 leading-relaxed font-light" style={{ fontFamily: INTER }}>
                Because the scope and circumstances of every case are different, package availability and pricing will depend on your specific needs. Please inquire about the available packages and let us know which pricing option you prefer: hourly billing or a flat-fee package.
              </p>
              <p className="text-[#EDEDED]/75 leading-relaxed font-light" style={{ fontFamily: INTER }}>
                Every case begins with a professional consultation. This allows us to understand your situation, determine the appropriate investigative approach, and provide an accurate quote.
              </p>
            </div>

            <p className="mt-7 pt-6 border-t border-[#CEA53D]/10 max-w-[90%] text-[#EDEDED]/75 leading-relaxed font-light" style={{ fontFamily: INTER }}>
              <Star className="inline w-4 h-4 mr-2 align-[-0.15em] text-[#CEA53D]" />
              <span className="text-[#CEA53D] font-medium">Veterans:</span> Please mention your military service when discussing your case with an investigator. Discounts or special considerations may be available.
            </p>
          </motion.div>

          {/* Zone 3 — rationale, same 50/50 spine */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 pt-9 border-t border-[#CEA53D]/20"
          >
            <h3
              className="text-center uppercase tracking-[0.08em] leading-none"
              style={{ fontFamily: BEBAS, fontSize: 'clamp(1.35rem, 2.4vw, 1.75rem)', color: '#FFFF' }}
            >
              Choose Experience&mdash;Not Just Price
            </h3>
            <div className="h-1 w-24 bg-[#CEA53D] mx-auto mt-4 mb-9" style={{ boxShadow: GOLD_GLOW }}></div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-12 text-[0.95rem] text-[#EDEDED]/70 leading-relaxed font-light" style={{ fontFamily: INTER }}>
              <div className="space-y-4">
                <p>
                  When hiring a professional, the lowest price is not always the best value. Experience, education, sound judgment, and specialized training can make a significant difference in the outcome of your case.
                </p>
                <p>
                  Consider hiring an attorney: when your freedom is at stake, you would look beyond the hourly rate and evaluate the attorney&rsquo;s qualifications, experience, and ability to handle your case effectively.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  The same principle applies when hiring a private investigator. An inexperienced investigator may overlook important details, mishandle evidence, or lack the knowledge required to manage a complex investigation.
                </p>
                <p>
                  When you hire Greg Tucker, you are hiring a professional with a proven track record, extensive education, and specialized qualifications. As a <span className="text-[#CEA53D] font-semibold">Forensic Behavioral Scientist</span>, Greg also brings a deeper understanding of human behavior to his investigative work.
                </p>
              </div>
            </div>

            <p
              className="mt-9 pt-8 border-t border-[#CEA53D]/10 text-center text-[#EDEDED]/85 font-light leading-relaxed"
              style={{ fontFamily: INTER, fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)' }}
            >
              The goal is not simply to find the least expensive investigator. It is to hire <span className="text-[#CEA53D] font-medium">the right investigator</span>&mdash;someone with the skill, care, and attention necessary to handle your case properly.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
