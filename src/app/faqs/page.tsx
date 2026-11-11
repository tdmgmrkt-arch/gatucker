"use client";

import { useState, useMemo } from 'react';
import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';
import { StickyCTAButton } from '../components/sticky-cta-button';
import { motion } from 'framer-motion';
import { Search, ChevronDown, Shield, Heart, Brain, AlertTriangle, Scale, HelpCircle } from 'lucide-react';
import { faqCategories, allFaqs } from './data';
import { LICENSE_LOOKUP_URL } from '@/lib/business';
import { VerifyLicenseLink } from '../components/verify-license-link';

const categoryIcons: Record<string, typeof HelpCircle> = {
  general: HelpCircle,
  'background-checks': Shield,
  infidelity: Heart,
  profiling: Brain,
  'risk-management': AlertTriangle,
  consulting: Scale,
};

function FaqAnswer({ text }: { text: string }) {
  const marker = `Verify license: ${LICENSE_LOOKUP_URL}`;
  if (!text.includes(marker)) return text;
  const [before, after] = text.split(marker);
  return (
    <>
      {before}
      <VerifyLicenseLink className="text-[#CEA53D]" />
      {after}
    </>
  );
}

function FaqDetails({
  question,
  answer,
  category,
}: {
  question: string;
  answer: string;
  category?: string;
}) {
  return (
    <details className="bg-black/40 border-2 border-[#CEA53D]/30 rounded-lg overflow-hidden hover:border-[#CEA53D]/60 transition-all group">
      <summary className="w-full px-5 py-4 flex items-start justify-between text-left gap-3 cursor-pointer list-none [&::-webkit-details-marker]:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#CEA53D]">
        <div className="flex-1">
          {category && (
            <span
              className="inline-block text-xs uppercase tracking-wider text-[#CEA53D]/70 mb-2 px-2 py-1 bg-[#CEA53D]/10 rounded"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {category}
            </span>
          )}
          <h3
            className="text-base font-bold text-[#CEA53D] group-hover:text-[#CEA53D]/90 transition-colors leading-tight"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            {question}
          </h3>
        </div>
        <ChevronDown className="w-5 h-5 text-[#CEA53D] flex-shrink-0 mt-0.5 transition-transform duration-300 group-open:rotate-180" />
      </summary>
      <div className="px-5 pb-4 pt-1">
        <p
          className="text-[#EDEDED]/70 leading-relaxed text-sm"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <FaqAnswer text={answer} />
        </p>
      </div>
    </details>
  );
}

export default function FAQsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Filter FAQs based on search and category
  const filteredFaqs = useMemo(() => {
    let results = allFaqs;

    // Filter by category
    if (activeCategory) {
      results = results.filter(faq => faq.categoryId === activeCategory);
    }

    // Filter by search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      results = results.filter(
        faq =>
          faq.question.toLowerCase().includes(query) ||
          faq.answer.toLowerCase().includes(query)
      );
    }

    return results;
  }, [searchQuery, activeCategory]);


  // Get count for each category based on search
  const getCategoryCount = (categoryId: string) => {
    if (!searchQuery.trim()) {
      return faqCategories.find(c => c.id === categoryId)?.faqs.length || 0;
    }
    const query = searchQuery.toLowerCase();
    return allFaqs.filter(
      faq =>
        faq.categoryId === categoryId &&
        (faq.question.toLowerCase().includes(query) || faq.answer.toLowerCase().includes(query))
    ).length;
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A]">
        <div className="max-w-8xl mx-auto text-center">
          <h1
            className="mb-6 font-black uppercase tracking-tight leading-tight"
            style={{
              fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
              fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
              color: '#FFFF',
            }}
          >
            Frequently Asked Questions
          </h1>
          <div
            className="h-1 w-32 bg-[#CEA53D] mx-auto mb-8"
            style={{
              boxShadow: '0 0 20px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 215, 0, 0.4)'
            }}
          ></div>
          <p
            className="text-[#EDEDED]/80 max-w-2xl mx-auto font-light mb-8"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.1rem',
              lineHeight: '1.8'
            }}
          >
            Find answers to common questions about our private investigation services, licensing, confidentiality, and more.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#CEA53D]" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
              className="w-full bg-black/60 border-2 border-[#CEA53D]/30 rounded-lg pl-12 pr-4 py-4 text-[#EDEDED] placeholder:text-[#EDEDED]/40 focus:border-[#CEA53D] focus:outline-none transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            />
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="relative px-4 sm:px-6 lg:px-8 bg-[#1A1A1A] border-y border-[#CEA53D]/20">
        <div className="max-w-8xl mx-auto">
          <div className="flex flex-wrap justify-center py-4 gap-2">
            <button
              onClick={() => {
                setActiveCategory(null);
              }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg whitespace-nowrap transition-all text-sm font-medium ${
                activeCategory === null
                  ? 'bg-[#CEA53D] text-black'
                  : 'bg-black/40 text-[#EDEDED]/70 hover:text-[#CEA53D] border border-[#CEA53D]/20 hover:border-[#CEA53D]/50'
              }`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <HelpCircle className="w-4 h-4" />
              All ({searchQuery ? filteredFaqs.length : allFaqs.length})
            </button>
            {faqCategories.map((category) => {
              const count = getCategoryCount(category.id);
              const Icon = categoryIcons[category.id];
              return (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                  }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg whitespace-nowrap transition-all text-sm font-medium ${
                    activeCategory === category.id
                      ? 'bg-[#CEA53D] text-black'
                      : 'bg-black/40 text-[#EDEDED]/70 hover:text-[#CEA53D] border border-[#CEA53D]/20 hover:border-[#CEA53D]/50'
                  } ${count === 0 && searchQuery ? 'opacity-50' : ''}`}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  disabled={count === 0 && !!searchQuery}
                >
                  <Icon className="w-4 h-4" />
                  {category.name} ({count})
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Content Section */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1A1A1A] via-[#0D0D0D] to-[#1A1A1A]">
        <div className="max-w-6xl mx-auto">
          {filteredFaqs.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <Search className="w-16 h-16 text-[#CEA53D]/30 mx-auto mb-4" />
              <h3
                className="text-xl font-bold text-[#EDEDED] mb-2"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                No Results Found
              </h3>
              <p
                className="text-[#EDEDED]/60"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Try adjusting your search or browse by category
              </p>
            </motion.div>
          ) : activeCategory || searchQuery ? (
            // Single category selected or search active - show with title
            <>
              {/* Category Title */}
              {activeCategory && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-8 text-center"
                >
                  <h2
                    className="text-2xl md:text-3xl font-black uppercase text-[#EDEDED] inline-flex items-center gap-3"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {(() => {
                      const cat = faqCategories.find(c => c.id === activeCategory);
                      const Icon = (cat && categoryIcons[cat.id]) || HelpCircle;
                      return (
                        <>
                          <Icon className="w-7 h-7 text-[#CEA53D]" />
                          {cat?.name} FAQs
                        </>
                      );
                    })()}
                  </h2>
                  <div
                    className="h-1 w-24 bg-[#CEA53D] mx-auto mt-4"
                    style={{
                      boxShadow: '0 0 15px rgba(255, 215, 0, 0.6)'
                    }}
                  ></div>
                </motion.div>
              )}
              {searchQuery && !activeCategory && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-8 text-center"
                >
                  <h2
                    className="text-2xl md:text-3xl font-black uppercase text-[#EDEDED] inline-flex items-center gap-3"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    <Search className="w-7 h-7 text-[#CEA53D]" />
                    Search Results
                  </h2>
                  <p
                    className="text-[#EDEDED]/60 mt-2"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {filteredFaqs.length} result{filteredFaqs.length !== 1 ? 's' : ''} for &ldquo;{searchQuery}&rdquo;
                  </p>
                </motion.div>
              )}
              {/* Two-column grid */}
              <div className="grid md:grid-cols-2 gap-4">
                {filteredFaqs.map((faq, index) => (
                  <FaqDetails
                    key={`${faq.categoryId}-${index}`}
                    question={faq.question}
                    answer={faq.answer}
                    category={searchQuery && !activeCategory ? faq.category : undefined}
                  />
                ))}
              </div>
            </>
          ) : (
            // All categories - show grouped by category with headers
            <div className="space-y-12">
              {faqCategories.map((category) => {
                const Icon = categoryIcons[category.id];
                return (
                  <div key={category.id}>
                    {/* Category Header */}
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="mb-6"
                    >
                      <h2
                        className="text-xl md:text-2xl font-black uppercase text-[#EDEDED] inline-flex items-center gap-3"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        <Icon className="w-6 h-6 text-[#CEA53D]" />
                        {category.name} FAQs
                      </h2>
                      <div
                        className="h-0.5 w-16 bg-[#CEA53D] mt-3"
                        style={{
                          boxShadow: '0 0 10px rgba(255, 215, 0, 0.5)'
                        }}
                      ></div>
                    </motion.div>
                    {/* Two-column grid for this category */}
                    <div className="grid md:grid-cols-2 gap-4">
                      {category.faqs.map((faq, faqIndex) => (
                        <FaqDetails
                          key={`${category.id}-${faqIndex}`}
                          question={faq.question}
                          answer={faq.answer}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Results Count */}
          {filteredFaqs.length > 0 && (activeCategory || searchQuery) && (
            <p
              className="text-center text-[#EDEDED]/50 text-sm mt-8"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Showing {filteredFaqs.length} of {allFaqs.length} questions
            </p>
          )}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0D0D0D] via-[#1A1A1A] to-[#0D0D0D] border-t border-[#CEA53D]/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-3xl sm:text-4xl font-black uppercase text-[#EDEDED] mb-6"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Still Have Questions?
            </h2>
            <p
              className="text-[#EDEDED]/80 mb-8 max-w-2xl mx-auto"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.1rem', lineHeight: '1.8' }}
            >
              Our team is here to answer any additional questions you may have about our services. Visit our <a href="/contact" className="text-[#CEA53D] hover:underline">contact page</a> or call today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:909-964-8976" className="group">
                <button
                  className="relative bg-black border-4 border-[#CEA53D] text-[#CEA53D] px-8 py-4 font-black uppercase tracking-wider transition-all duration-300 hover:bg-[#CEA53D] hover:text-black hover:scale-105"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: '1.2rem',
                    boxShadow: '0 0 20px rgba(255, 215, 0, 0.5), inset 0 0 15px rgba(255, 215, 0, 0.15)',
                  }}
                >
                  Call 909-964-8976
                </button>
              </a>
              <a href="/request-service-form" className="group">
                <button
                  className="relative bg-[#CEA53D] border-4 border-[#CEA53D] text-black px-8 py-4 font-black uppercase tracking-wider transition-all duration-300 hover:bg-black hover:text-[#CEA53D] hover:scale-105"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: '1.2rem',
                    boxShadow: '0 0 20px rgba(255, 215, 0, 0.5), inset 0 0 15px rgba(255, 215, 0, 0.15)',
                  }}
                >
                  Request Service
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <StickyCTAButton />
    </div>
  );
}
