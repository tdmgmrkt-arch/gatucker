import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';
import { StickyCTAButton } from '../components/sticky-cta-button';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HollywoodFixerPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] overflow-x-hidden">
      <Navbar />

      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1A1A1A] via-[#0D0D0D] to-[#1A1A1A]">
        {/* Decorative gradient lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#CEA53D]/40 to-transparent z-20" />
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#CEA53D]/20 to-transparent blur-sm z-20" />

        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1
              className="text-5xl md:text-7xl font-black uppercase text-[#EDEDED] mb-6"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                textShadow: "0 0 20px rgba(206,165,61,0.3)"
              }}
            >
              Hollywood&apos;s Preferred Fixer
            </h1>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Column */}
            <div className="order-2 lg:order-1">
              <div
                className="relative p-4 bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] rounded-xl shadow-2xl border-2 border-[#CEA53D]/30"
                style={{
                  boxShadow:
                    "0 0 30px rgba(255, 215, 0, 0.2), inset 0 0 20px rgba(255, 215, 0, 0.05)",
                }}
              >
                <div className="relative rounded-lg overflow-hidden">
                  <Image
                    src="/ga_tucker_hollywood_fixer.webp"
                    alt="Greg Tucker - Hollywood Fixer"
                    width={800}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Text Column */}
            <div className="order-1 lg:order-2">
              <p
                className="text-[#EDEDED]/85 font-light leading-relaxed text-lg"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  lineHeight: "1.9",
                }}
              >
                Greg Tucker is the trusted professional for representatives of top celebrities, high-profile Fortune 500 companies, and international corporations. Whether you have a high-profile case or simply need help with everyday challenges, Greg is prepared to serve you with professionalism and discretion.
              </p>

              <p
                className="text-[#EDEDED]/85 font-light leading-relaxed text-lg mt-6"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  lineHeight: "1.9",
                }}
              >
                Renowned for his discreet and ethical approach, he specializes in resolving sensitive issues with integrity and precision. His expertise allows clients to navigate complex situations while safeguarding their reputation.
              </p>

              <p
                className="text-[#EDEDED]/85 font-light leading-relaxed text-lg mt-6"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  lineHeight: "1.9",
                }}
              >
                Trusted across Hollywood, corporate America, and around the world, Greg Tucker is the premier fixer for those who require confidential and effective resolution of delicate matters.
              </p>

              {/* CTA */}
              <div className="mt-10">
                <a href="tel:909-345-1350" className="group relative inline-block">
                  <button
                    className="relative bg-black border-4 border-[#CEA53D] text-[#CEA53D] px-8 py-4 font-black uppercase tracking-wider transition-all duration-300 hover:bg-[#CEA53D] hover:text-black hover:scale-105"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      boxShadow:
                        "0 0 20px rgba(255, 215, 0, 0.5), inset 0 0 15px rgba(255, 215, 0, 0.15)",
                      textShadow: "0 0 8px rgba(255, 215, 0, 0.7)",
                    }}
                  >
                    Contact Greg Tucker
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <StickyCTAButton />
    </div>
  );
}
