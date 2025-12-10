"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

export function IntroVideo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Thumbnail Button */}
      <div className="relative z-10 -mt-16 sm:-mt-20 mb-8 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto w-full max-w-xs sm:max-w-sm"
        >
          {/* Thumbnail with play button */}
          <button
            onClick={() => setIsOpen(true)}
            className="group relative w-full aspect-video rounded-lg overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#CEA53D]/50"
            style={{
              boxShadow: "0 0 40px rgba(206,165,61,0.3), 0 4px 20px rgba(0,0,0,0.5)",
            }}
            aria-label="Play introduction video"
          >
            {/* Video poster/thumbnail - first frame */}
            <video
              className="absolute inset-0 w-full h-full object-cover"
              preload="metadata"
              muted
              playsInline
            >
              <source src="/TuckerIntorVideo.mp4#t=0.5" type="video/mp4" />
            </video>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />

            {/* Gold border glow on hover */}
            <div
              className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                boxShadow: "inset 0 0 0 2px rgba(206,165,61,0.6)",
              }}
            />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#CEA53D]/90 group-hover:bg-[#CEA53D] group-hover:scale-110 transition-all duration-300 flex items-center justify-center"
                style={{
                  boxShadow: "0 0 30px rgba(206,165,61,0.5)",
                }}
              >
                <Play className="w-7 h-7 sm:w-8 sm:h-8 text-black ml-1" fill="currentColor" />
              </div>
            </div>

            {/* Label */}
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
              <p
                className="text-[#CEA53D] text-xs sm:text-sm uppercase tracking-widest text-center"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                }}
              >
                Watch Introduction
              </p>
            </div>
          </button>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#CEA53D]/20 hover:bg-[#CEA53D]/40 transition-colors flex items-center justify-center"
              aria-label="Close video"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-[#CEA53D]" />
            </button>

            {/* Video container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Gold frame */}
              <div
                className="relative p-1 sm:p-1.5 bg-gradient-to-br from-[#CEA53D] via-[#8B6C2F] to-[#CEA53D] rounded-sm"
                style={{
                  boxShadow: "0 0 60px rgba(206,165,61,0.4)",
                }}
              >
                <div className="relative bg-black rounded-sm overflow-hidden">
                  <video
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-auto aspect-video"
                  >
                    <source src="/TuckerIntorVideo.mp4" type="video/mp4" />
                    <track kind="captions" srcLang="en" label="English captions" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
