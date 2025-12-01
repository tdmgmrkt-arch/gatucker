"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          className="bg-black/40 border-2 border-[#CEA53D]/30 rounded-lg overflow-hidden hover:border-[#CEA53D]/60 transition-all"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 group"
          >
            <h3
              className="text-lg font-bold text-[#CEA53D] group-hover:text-[#CEA53D]/90 transition-colors"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              {faq.question}
            </h3>
            <ChevronDown
              className={`w-5 h-5 text-[#CEA53D] flex-shrink-0 transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>

          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 pt-2">
                  <p
                    className="text-[#EDEDED]/70 leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
