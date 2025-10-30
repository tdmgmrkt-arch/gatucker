"use client";

import { motion } from 'framer-motion';
import { Phone, MessageSquare, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

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
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E7AD41]/30 to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E7AD41]/10 to-transparent blur-sm" />

      {/* Decorative gradient separator - bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E7AD41]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E7AD41]/10 to-transparent blur-sm" />

      <div className="max-w-7xl mx-auto relative z-10">
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
            <span className="text-[#E7AD41]">3 Simple Steps</span>
          </h2>
          <div className="h-1 w-24 bg-[#E7AD41] mx-auto my-4 shadow-[0_0_10px_rgba(231,173,65,0.5)]"></div>
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

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-[60px] left-[50%] right-[-50%] h-[2px] bg-gradient-to-r from-[#E7AD41] to-[#E7AD41]/20 transform -translate-x-1/2 -translate-y-1/2 z-0" />
              )}
              
              <div className="relative bg-[#2C2C2C]/50 border border-[#2C2C2C] rounded-2xl p-6 md:p-8 hover:border-[#E7AD41] transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl h-full flex flex-col justify-between">
                <div className="flex justify-between items-start mb-6">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#E7AD41]/10 flex items-center justify-center group-hover:bg-[#E7AD41]/20 transition-colors">
                    <step.icon className="w-6 h-6 text-[#E7AD41]" strokeWidth={2.5} />
                  </div>
                  {/* Step Number */}
                  <div 
                    className="flex-shrink-0 w-10 h-10 border-2 border-[#E7AD41] text-[#E7AD41] rounded-full flex items-center justify-center font-bold text-sm transform transition-transform duration-300 group-hover:scale-110"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <span>{step.number}</span>
                  </div>
                </div>

                <div>
                  {/* Title */}
                  <h3 
                    className="mb-2 text-[#EDEDED] font-semibold"
                    style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem' }}
                  >
                    {step.title}
                  </h3>
                  {/* Description */}
                  <p
                    className="text-[#EDEDED]/80 font-light"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      lineHeight: '1.7'
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA - Standardized premium button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="group relative inline-block">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-[#E7AD41] via-[#F5D68A] to-[#E7AD41] rounded-full blur-lg opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse" style={{ animationDuration: '3s' }} />
            <Button
              size="lg"
              className="relative bg-gradient-to-r from-[#E7AD41] via-[#F5D68A] to-[#E7AD41] hover:from-[#F5D68A] hover:via-[#E7AD41] hover:to-[#F5D68A] text-[#0D0D0D] px-12 py-6 rounded-full transition-all duration-500 shadow-2xl hover:shadow-[0_0_50px_rgba(231,173,65,0.8)] hover:scale-105 font-bold"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Request Consultation <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}