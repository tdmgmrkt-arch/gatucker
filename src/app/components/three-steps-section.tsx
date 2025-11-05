"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, MessageSquare, CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Contact Us",
    description: "Click the 'Contact Us' button or call us directly at 833 PI Serve or (909) 220-4006."
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "Describe Your Situation",
    description: "Provide a detailed description of your request and the specifics of your situation."
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "Get Expert Consultation",
    description: "Receive a professional consultation and expert advice tailored to your needs."
  }
];

export function ThreeStepsSection() {
  return (
    <section className="relative py-24 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] overflow-hidden">
      {/* Decorative gradient separator - top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#CEA53D]/30 to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#CEA53D]/10 to-transparent blur-sm" />

      {/* Decorative gradient separator - bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#CEA53D]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#CEA53D]/10 to-transparent blur-sm" />

      <div className="max-w-7xl mx-auto relative z-10">
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
              fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: '#FFFF',
            }}
          >
            3 Simple Steps
          </h2>
          <div className="h-1 w-32 bg-[#CEA53D] mx-auto my-5" style={{ boxShadow: '0 0 20px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 215, 0, 0.4)' }}></div>
          <p
            className="text-[#EDEDED]/80 max-w-2xl mx-auto font-light"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.1rem',
              lineHeight: '1.8'
            }}
          >
            To Hire a Private Investigator
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column: Image with Badge + CTA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="relative mb-8">
              <Image
                src="/27yearsexp.webp"
                alt="27 Years Experience Private Investigator"
                width={600}
                height={800}
                className="w-full h-auto rounded-xl"
              />
              {/* Experience Badge */}
              <div className="absolute top-0 left-1 md:top-0 md:left-1
               bg-black border-4 border-[#CEA53D] px-6 py-3 md:px-8 md:py-4 rounded-sm transform -rotate-2 hover:rotate-0 transition-all duration-300 hover:scale-105" style={{ boxShadow: '0 0 30px rgba(255, 215, 0, 0.6), inset 0 0 20px rgba(255, 215, 0, 0.2)' }}>
                <p className="text-[#FFFF] font-black tracking-wider uppercase text-sm md:text-base" style={{ fontFamily: "'Bebas Neue', sans-serif", textShadow: '0 0 10px rgba(255, 215, 0, 0.8)' }}>
                  27+ YEARS <br></br> EXPERIENCE
                </p>
              </div>
            </div>

            {/* CTA - Retro style button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center lg:text-left"
            >
              <div className="group relative inline-block">
                <button
                  className="relative px-10 py-4 bg-black border-4 border-[#CEA53D] font-black text-[#CEA53D] uppercase tracking-wider transition-all duration-300 hover:bg-[#CEA53D] hover:text-black hover:scale-105 flex items-center gap-2"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                    boxShadow: '0 0 30px rgba(255, 215, 0, 0.6), inset 0 0 20px rgba(255, 215, 0, 0.2)',
                  }}
                >
                  Request Consultation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Steps List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative group flex items-start gap-6"
                >
                  {/* Step Number Badge */}
                  <div
                    className="flex-shrink-0 w-16 h-16 border-4 border-[#CEA53D] bg-black text-[#CEA53D] rounded-sm flex items-center justify-center font-black text-2xl transform transition-transform duration-300 group-hover:scale-110"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      boxShadow: '0 0 20px rgba(255, 215, 0, 0.6), inset 0 0 15px rgba(255, 215, 0, 0.2)',
                      textShadow: '0 0 10px rgba(255, 215, 0, 0.8)'
                    }}
                  >
                    <span>{step.number}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-3 mb-3">
                      <step.icon className="w-6 h-6 text-[#CEA53D]" strokeWidth={2.5} />
                      <h3
                        className="text-[#EDEDED] font-black uppercase"
                        style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.75rem', letterSpacing: '0.02em' }}
                      >
                        {step.title}
                      </h3>
                    </div>
                    <p
                      className="text-[#EDEDED]/80 font-light leading-relaxed"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '1rem',
                        lineHeight: '1.7'
                      }}
                    >
                      {step.description}
                    </p>
                  </div>

                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-[32px] top-[80px] bottom-[-32px] w-[2px] bg-gradient-to-b from-[#CEA53D] to-[#CEA53D]/20" />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}