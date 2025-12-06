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
    window.location.href = '/request-service-form';
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="hidden md:block fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8"
        >
          <div className="group relative">
            {/* Retro thick border button */}
            <button
              onClick={handleClick}
              className="relative flex items-center gap-2 sm:gap-3 bg-black border-3 sm:border-4 border-[#CEA53D] text-[#CEA53D] px-4 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 font-black uppercase tracking-wider transition-all duration-300 hover:bg-[#CEA53D] hover:text-black hover:scale-105 active:scale-95 shadow-2xl touch-manipulation"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(0.8rem, 2vw, 1.2rem)',
                boxShadow: '0 0 30px rgba(255, 215, 0, 0.6), inset 0 0 20px rgba(255, 215, 0, 0.2)',

              }}
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform duration-300" />
              <span className="whitespace-nowrap text-xs sm:text-sm md:text-base">Get Consultation</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
