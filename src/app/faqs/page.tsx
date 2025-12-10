"use client";

import { useState, useMemo } from 'react';
import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';
import { StickyCTAButton } from '../components/sticky-cta-button';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, Shield, Users, Heart, Brain, AlertTriangle, Scale, HelpCircle } from 'lucide-react';

// All FAQs organized by category
const faqCategories = [
  {
    id: 'general',
    name: 'General',
    icon: HelpCircle,
    faqs: [
      {
        question: 'Do you offer free estimates?',
        answer: 'Yes. At GA Tucker PI, you can receive a free estimate before hiring a private detective.',
      },
      {
        question: 'Are you licensed?',
        answer: 'Yes, GA Tucker PI is licensed by the state of California. Our license number is PI188351. You will work with a licensed private investigator when you hire us.',
      },
      {
        question: 'Do private investigators have to be licensed?',
        answer: 'Yes, a private investigator must be licensed in the state of California. Contact GA Tucker PI today.',
      },
      {
        question: 'Who hires private investigators?',
        answer: "There are many reasons why a person may hire a private investigator. Typically, a client will hire one when they are trying to obtain information that they aren't able to get on their own. Contact GA Tucker PI for more information today.",
      },
      {
        question: 'How long does it take to solve a particular case?',
        answer: 'The length of a case depends on many different factors. It also depends on the specifics of the case and the details involved. The length of an investigation can vary from a few days to several weeks or months. We recommend calling GA Tucker PI and speaking with a private detective to discuss the details.',
      },
      {
        question: 'Will my case be confidential?',
        answer: 'Yes, your case at GA Tucker PI will remain confidential. You can trust that your private detective will not share your personal information.',
      },
      {
        question: 'How do you charge?',
        answer: 'At GA Tucker PI, we collect money upfront after you hire a private investigator.',
      },
      {
        question: 'What are the benefits of choosing GA Tucker PI?',
        answer: "We work closely with all of our clients to provide the best service possible. We manage our client's hours and prioritize efficiency.",
      },
    ],
  },
  {
    id: 'background-checks',
    name: 'Background Checks',
    icon: Shield,
    faqs: [
      {
        question: 'How long do background checks take?',
        answer: 'Background checks usually take one to two business days to pull. We begin by gathering information through our comprehensive check and then have our technical analyst dig further into the content to establish connections.',
      },
      {
        question: 'What is included in a background check?',
        answer: 'Our comprehensive background checks include criminal records, social media analysis, address history, employment verification, and more. We use databases similar to those used by law enforcement to provide thorough results.',
      },
      {
        question: 'Can you do employment background checks?',
        answer: 'Yes, we provide comprehensive pre-employment screening services for businesses. This includes criminal history, work history verification, and other relevant checks to help you make informed hiring decisions.',
      },
    ],
  },
  {
    id: 'infidelity',
    name: 'Infidelity',
    icon: Heart,
    faqs: [
      {
        question: 'How long does an infidelity investigation typically take?',
        answer: "Investigation timelines vary based on your specific circumstances. Some cases require only a few days of surveillance, while others may need several weeks to establish patterns and gather conclusive evidence. We'll discuss the optimal timeline during your consultation.",
      },
      {
        question: 'Is the evidence you gather admissible in court?',
        answer: 'Yes. All our investigations are conducted legally and ethically. The evidence we gather meets legal standards and can be used in divorce proceedings, custody battles, or other legal matters. We can also provide expert testimony if required.',
      },
      {
        question: "Will my partner know they're being investigated?",
        answer: 'No. Our investigators are highly trained in discreet surveillance techniques. We use unmarked vehicles, maintain safe distances, and employ professional methods to ensure your partner remains unaware of the investigation.',
      },
      {
        question: "What happens if you don't find evidence of infidelity?",
        answer: "While we hope to provide you with peace of mind either way, if we don't find evidence of infidelity during the agreed-upon investigation period, we'll provide a full report of our findings. Many clients find relief in knowing the truth, regardless of the outcome.",
      },
      {
        question: 'How much does an infidelity investigation cost?',
        answer: 'Costs vary depending on the complexity and duration of the investigation. We offer customized packages to fit different budgets and needs. Contact us for a confidential consultation and detailed pricing information.',
      },
      {
        question: 'Can you investigate digital evidence like texts and emails?',
        answer: "We can guide you on legally obtaining digital evidence and analyze information you have legal access to. However, all digital investigations must comply with privacy laws and regulations. We'll advise you on legal methods during your consultation.",
      },
    ],
  },
  {
    id: 'profiling',
    name: 'Profiling',
    icon: Brain,
    faqs: [
      {
        question: 'What is criminal profiling?',
        answer: 'Criminal profiling is the process of analyzing crime scene evidence, victim information, and behavioral patterns to develop a psychological and demographic profile of an unknown offender. It helps narrow suspect pools and guide investigations.',
      },
      {
        question: 'How accurate is behavioral profiling?',
        answer: 'When conducted by experienced professionals using proven methodologies, behavioral profiling is a valuable investigative tool. While not infallible, it provides actionable insights that significantly aid investigations when combined with other evidence.',
      },
      {
        question: 'Can profiling be used in civil cases?',
        answer: 'Yes, profiling techniques are applicable to many civil matters including custody disputes, workplace investigations, threat assessments, and risk management. The behavioral analysis principles apply across various legal and security contexts.',
      },
      {
        question: 'How long does a profiling assessment take?',
        answer: 'Timeline varies based on case complexity, available information, and the scope of analysis required. Simple profiles may take a few days, while comprehensive assessments for complex cases can take several weeks.',
      },
      {
        question: 'Is profiling evidence admissible in court?',
        answer: "Expert testimony from qualified profilers is often admissible in court proceedings. Admissibility depends on the expert's qualifications, methodology used, and relevance to the case. We provide court-ready reports and testimony when needed.",
      },
      {
        question: 'What information is needed for a profile?',
        answer: 'The more information available, the more accurate the profile. This can include incident reports, communications, witness statements, surveillance footage, social media activity, and any other relevant behavioral evidence.',
      },
      {
        question: 'Do you handle cyberstalking cases?',
        answer: 'Yes, we specialize in cyberstalking and online harassment investigations. We can trace digital communications, identify anonymous harassers, and document patterns of behavior for legal action.',
      },
      {
        question: 'Can you help with workplace threat assessments?',
        answer: 'Absolutely. We provide comprehensive workplace violence threat assessments, evaluating concerning employee behavior and recommending appropriate security measures and interventions.',
      },
      {
        question: 'How confidential is the profiling process?',
        answer: 'We maintain strict confidentiality throughout all investigations and profiling work. Information is shared only with authorized parties, and we comply with all applicable privacy laws and professional standards.',
      },
    ],
  },
  {
    id: 'risk-management',
    name: 'Risk Management',
    icon: AlertTriangle,
    faqs: [
      {
        question: 'How would a private investigator assist with risk management?',
        answer: 'If a person or group of people threatens you or your business, private investigators can assess the threat to find out how credible it is and what you can do about it.',
      },
      {
        question: 'What types of threats do you assess?',
        answer: 'We assess actual threats, inherent threats, potential threats, and vulnerability risks. Our comprehensive approach helps identify security gaps before they become problems.',
      },
      {
        question: 'Do you work with businesses or individuals?',
        answer: 'We work with both. Our risk management services are tailored to meet the specific needs of corporations, small businesses, and private individuals facing potential threats.',
      },
    ],
  },
  {
    id: 'consulting',
    name: 'Attorney & Trial Consulting',
    icon: Scale,
    faqs: [
      {
        question: 'Should I hire a private investigator for my civil case?',
        answer: 'Private investigators can be invaluable for civil cases. We have worked on cases with attorneys all across Southern California and have formed business relationships due to our reliability and close rate.',
      },
      {
        question: 'What is trial consulting?',
        answer: 'Trial consulting involves using behavioral science methods to help attorneys present criminal and civil cases more effectively. This includes jury selection, witness preparation, and developing persuasive trial strategies.',
      },
      {
        question: 'What is jury consulting?',
        answer: 'Jury consulting helps attorneys select favorable jurors and understand how potential jurors will respond to case arguments. We use proven tools to predict juror behavior and develop winning trial strategies.',
      },
      {
        question: 'Do you offer mock trial services?',
        answer: 'Yes, we offer mock trial research where we test your case with simulated trials. We watch how mock jurors reach their verdict, so you learn which arguments work best before the actual trial.',
      },
      {
        question: 'Can you help with witness preparation?',
        answer: 'Absolutely. We train your witnesses to speak clearly and confidently at trial and depositions, enhancing the clarity and impact of their testimony.',
      },
    ],
  },
];

// Flatten all FAQs for search
const allFaqs = faqCategories.flatMap(category =>
  category.faqs.map(faq => ({ ...faq, category: category.name, categoryId: category.id }))
);

export default function FAQsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
                setOpenIndex(null);
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
                setOpenIndex(null);
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
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setOpenIndex(null);
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
                      const Icon = cat?.icon || HelpCircle;
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
                  <motion.div
                    key={`${faq.categoryId}-${index}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    className="bg-black/40 border-2 border-[#CEA53D]/30 rounded-lg overflow-hidden hover:border-[#CEA53D]/60 transition-all"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-5 py-4 flex items-start justify-between text-left gap-3 group"
                    >
                      <div className="flex-1">
                        {/* Category Badge - only show in search results */}
                        {searchQuery && !activeCategory && (
                          <span
                            className="inline-block text-xs uppercase tracking-wider text-[#CEA53D]/70 mb-2 px-2 py-1 bg-[#CEA53D]/10 rounded"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                          >
                            {faq.category}
                          </span>
                        )}
                        <h3
                          className="text-base font-bold text-[#CEA53D] group-hover:text-[#CEA53D]/90 transition-colors leading-tight"
                          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                        >
                          {faq.question}
                        </h3>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-[#CEA53D] flex-shrink-0 mt-0.5 transition-transform duration-300 ${
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
                          <div className="px-5 pb-4 pt-1">
                            <p
                              className="text-[#EDEDED]/70 leading-relaxed text-sm"
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
            </>
          ) : (
            // All categories - show grouped by category with headers
            <div className="space-y-12">
              {faqCategories.map((category) => {
                const Icon = category.icon;
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
                      {category.faqs.map((faq, faqIndex) => {
                        const globalIndex = allFaqs.findIndex(
                          f => f.categoryId === category.id && f.question === faq.question
                        );
                        return (
                          <motion.div
                            key={`${category.id}-${faqIndex}`}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: faqIndex * 0.05 }}
                            className="bg-black/40 border-2 border-[#CEA53D]/30 rounded-lg overflow-hidden hover:border-[#CEA53D]/60 transition-all"
                          >
                            <button
                              onClick={() => toggleFAQ(globalIndex)}
                              className="w-full px-5 py-4 flex items-start justify-between text-left gap-3 group"
                            >
                              <h3
                                className="text-base font-bold text-[#CEA53D] group-hover:text-[#CEA53D]/90 transition-colors leading-tight flex-1"
                                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                              >
                                {faq.question}
                              </h3>
                              <ChevronDown
                                className={`w-5 h-5 text-[#CEA53D] flex-shrink-0 mt-0.5 transition-transform duration-300 ${
                                  openIndex === globalIndex ? 'rotate-180' : ''
                                }`}
                              />
                            </button>

                            <AnimatePresence>
                              {openIndex === globalIndex && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden"
                                >
                                  <div className="px-5 pb-4 pt-1">
                                    <p
                                      className="text-[#EDEDED]/70 leading-relaxed text-sm"
                                      style={{ fontFamily: "'Inter', sans-serif" }}
                                    >
                                      {faq.answer}
                                    </p>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        );
                      })}
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
