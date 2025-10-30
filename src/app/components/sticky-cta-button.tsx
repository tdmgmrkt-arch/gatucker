"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone } from 'lucide-react';

export function StickyCTAButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleClick = () => {
    // Scroll to contact section or open contact modal
    const ctaSection = document.querySelector('#contact');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8"
        >
          <div className="group relative">
            {/* Pulsing glow effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#E7AD41] via-[#F5D68A] to-[#E7AD41] rounded-full blur-lg opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse" style={{ animationDuration: '3s' }} />

            {/* Button */}
            <button
              onClick={handleClick}
              className="relative flex items-center gap-3 bg-gradient-to-r from-[#E7AD41] via-[#F5D68A] to-[#E7AD41] hover:from-[#F5D68A] hover:via-[#E7AD41] hover:to-[#F5D68A] text-[#0D0D0D] px-6 py-4 md:px-8 md:py-5 font-bold transition-all duration-500 rounded-full shadow-2xl hover:shadow-[0_0_50px_rgba(231,173,65,0.8)] hover:scale-105"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <Phone className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-sm md:text-base whitespace-nowrap">Request Consultation</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
