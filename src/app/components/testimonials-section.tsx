"use client";

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: "Tom",
    initials: "T",
    case: "Satisfied Client",
    rating: 5,
    text: "Incredible attention to detail. Highly knowledgeable, Best representation ever. Excellent service, very caring and professional staff. I would recommend it to anyone in search of an investigator.",
    location: "Murrieta, CA"
  },
  {
    name: "Jonathon",
    initials: "J",
    case: "A Satisfied Client",
    rating: 5,
    text: "I was given quick and detailed information! I recommend G.A. Tucker P.I. Investigative Services to anyone who needs a discreet and accurate investigation.",
    location: "California"
  },
  {
    name: "Ashley M.",
    initials: "AM",
    case: "Local Attorney",
    rating: 5,
    text: "I am a local attorney and own my own Law Firm. I use Greg Tucker on many of my cases. He is a professional and will go out of the way for my clients. His reports are factual and detailed.",
    location: "California"
  }
];

export function TestimonialsSection() {
  return (
    <section className="relative py-24 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative gradient separator - top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E7AD41]/30 to-transparent z-30" />
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E7AD41]/10 to-transparent blur-sm z-30" />

      {/* Decorative gradient separator - bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E7AD41]/30 to-transparent z-30" />
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E7AD41]/10 to-transparent blur-sm z-30" />

      {/* Background Image with Next.js Image */}
      <div className="absolute inset-0 z-0">
  <Image
    src="/testimonialsbg.webp"
    alt="Testimonials Background"
    fill
    className="object-cover object-center brightness-[0.6]" // darken slightly for text contrast
    quality={90}
    priority={false}
  />

  {/* Optimized gradient overlay for better text contrast */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/70 via-[#0D0D0D]/80 to-[#0D0D0D]/95 mix-blend-multiply z-10" />
</div>

      {/* Enhanced Glow Effects for depth */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#E7AD41]/6 rounded-full blur-[140px] z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-[#F5D68A]/6 rounded-full blur-[140px] z-10" />

      {/* Decorative quote patterns */}
      <div className="absolute top-10 left-10 text-[#E7AD41]/5 z-10">
        <Quote className="w-32 h-32" strokeWidth={1} />
      </div>
      <div className="absolute bottom-10 right-10 text-[#E7AD41]/5 z-10 rotate-180">
        <Quote className="w-32 h-32" strokeWidth={1} />
      </div>

      <div className="max-w-7xl mx-auto relative z-20">
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
            Client <span className="text-[#E7AD41]">Testimonials</span>
          </h2>
          <div className="h-1 w-24 bg-[#E7AD41] mx-auto my-4"></div>
          <p 
            className="text-[#EDEDED]/70 max-w-2xl mx-auto font-light"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.1rem' }}
          >
            Real cases, real results, real peace of mind
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative h-full flex flex-col"
            >
              <div className="relative h-full bg-gradient-to-br from-[#1A1A1A]/95 to-[#0D0D0D]/95 backdrop-blur-md border border-[#E7AD41]/20 rounded-3xl p-8 md:p-10 lg:p-12 hover:border-[#E7AD41]/60 transition-all duration-500 overflow-hidden shadow-2xl hover:shadow-[0_25px_70px_rgba(231,173,65,0.25)] flex flex-col hover:scale-[1.02]">

                {/* Large decorative quote - top left */}
                <div className="absolute -top-6 -left-6 text-[#E7AD41]/10 group-hover:text-[#E7AD41]/20 transition-colors duration-500">
                  <Quote className="w-32 h-32 md:w-40 md:h-40" strokeWidth={1.5} />
                </div>

                {/* Rating stars - top right */}
                <div className="relative z-10 flex justify-end gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#E7AD41] text-[#E7AD41] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                  ))}
                </div>

                {/* Testimonial Text - ENLARGED */}
                <p
                  className="relative z-10 mb-8 text-[#EDEDED] leading-relaxed font-normal flex-grow"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(1.15rem, 2vw, 1.35rem)',
                    lineHeight: '1.7'
                  }}
                >
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Client Info with Avatar */}
                <div className="relative z-10 flex items-center gap-4 pt-6 border-t border-[#E7AD41]/30">
                  {/* Avatar with initials in gold frame */}
                  <div className="flex-shrink-0 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#E7AD41] via-[#F5D68A] to-[#E7AD41] rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#E7AD41]/20 to-[#D79D31]/20 border-2 border-[#E7AD41] flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
                      <span
                        className="text-[#E7AD41] font-bold"
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: 'clamp(1.25rem, 2vw, 1.5rem)'
                        }}
                      >
                        {testimonial.initials}
                      </span>
                    </div>
                  </div>

                  {/* Name and details */}
                  <div className="flex-grow">
                    <p
                      className="text-[#EDEDED] font-bold mb-1"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 'clamp(1.1rem, 2vw, 1.25rem)'
                      }}
                    >
                      {testimonial.name}
                    </p>
                    <p
                      className="text-[#E7AD41] text-sm uppercase tracking-wider font-semibold mb-1"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {testimonial.case}
                    </p>
                    <p
                      className="text-[#EDEDED]/60 text-xs font-light"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {testimonial.location}
                    </p>
                  </div>
                </div>

                {/* Hover glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E7AD41]/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}