"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Phone, Mail, Clock, MapPin, Facebook, Twitter, Instagram, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';
import { StickyCTAButton } from '../components/sticky-cta-button';
import { RequestServiceForm } from '../components/request-service-form';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', phone: '', email: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] overflow-x-hidden">
      <Navbar />

      {/* Hero Section with Dark Alley Background */}
      <section className="relative" style={{ paddingTop: "clamp(6rem, 12vw, 8rem)", paddingBottom: "clamp(2rem, 4vw, 3rem)", paddingInline: "clamp(1rem, 4vw, 2rem)" }}>
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/dark-alley.webp"
            alt="Dark alley background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/95 via-[#0D0D0D]/70 to-[#0D0D0D]" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto" style={{ maxWidth: "min(100%, 72rem)" }}>
          <div className="flex flex-col lg:flex-row items-center justify-between" style={{ gap: "clamp(2rem, 4vw, 3rem)" }}>
            {/* Left: Tagline Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-shrink-0"
            >
              <Image
                src="/dontbeasucker.webp"
                alt="Don't Be A Sucker - Call Tucker!"
                width={400}
                height={200}
                className="w-full max-w-sm"
                loading="lazy"
              />
            </motion.div>

            {/* Right: Contact Cards Grid */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4 w-full max-w-lg"
            >
              {/* Main Phone */}
              <a
                href="tel:909-964-8976"
                className="group p-4 bg-black/80 border border-[#CEA53D]/30 rounded-lg hover:border-[#CEA53D] transition-all"
              >
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#CEA53D]" />
                  <div>
                    <p className="text-[#EDEDED]/70 text-xs uppercase">Main</p>
                    <p className="text-[#CEA53D] font-bold text-sm">(909) 964-8976</p>
                  </div>
                </div>
              </a>

              {/* Toll Free */}
              <a
                href="tel:833-747-3783"
                className="group p-4 bg-black/80 border border-[#CEA53D]/30 rounded-lg hover:border-[#CEA53D] transition-all"
              >
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#CEA53D]" />
                  <div>
                    <p className="text-[#EDEDED]/70 text-xs uppercase">Toll Free</p>
                    <p className="text-[#CEA53D] font-bold text-sm">(833) 747-3783</p>
                  </div>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:gatuckerpi@gmail.com"
                className="group p-4 bg-black/80 border border-[#CEA53D]/30 rounded-lg hover:border-[#CEA53D] transition-all"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#CEA53D]" />
                  <div>
                    <p className="text-[#EDEDED]/70 text-xs uppercase">Email</p>
                    <p className="text-[#CEA53D] font-bold text-xs">gatuckerpi@gmail.com</p>
                  </div>
                </div>
              </a>

              {/* 24/7 */}
              <div className="p-4 bg-black/80 border border-[#CEA53D]/30 rounded-lg">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#CEA53D]" />
                  <div>
                    <p className="text-[#EDEDED]/70 text-xs uppercase">Availability</p>
                    <p className="text-[#CEA53D] font-bold text-sm">24/7</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Service Area & Social Icons Row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-8 border-t border-[#CEA53D]/20"
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#CEA53D]" />
              <span className="text-[#EDEDED] text-sm">
                <strong className="text-[#CEA53D]">Service Area:</strong> All of California &amp; Nationwide
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[#EDEDED]/60 text-xs uppercase tracking-wider">Follow Us:</span>
              <div className="flex gap-2">
                <a href="https://facebook.com/161146941379347" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook" className="w-9 h-9 rounded bg-black border border-[#CEA53D]/30 flex items-center justify-center hover:border-[#CEA53D] hover:bg-[#CEA53D]/10 transition-all">
                  <Facebook className="w-4 h-4 text-[#CEA53D]" aria-hidden="true" />
                </a>
                <a href="https://twitter.com/ginvestigative" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Twitter" className="w-9 h-9 rounded bg-black border border-[#CEA53D]/30 flex items-center justify-center hover:border-[#CEA53D] hover:bg-[#CEA53D]/10 transition-all">
                  <Twitter className="w-4 h-4 text-[#CEA53D]" aria-hidden="true" />
                </a>
                <a href="https://instagram.com/gatuckerpi" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" className="w-9 h-9 rounded bg-black border border-[#CEA53D]/30 flex items-center justify-center hover:border-[#CEA53D] hover:bg-[#CEA53D]/10 transition-all">
                  <Instagram className="w-4 h-4 text-[#CEA53D]" aria-hidden="true" />
                </a>
                <a href="https://yelp.com/biz/g-a-tucker-p-i-investigative-services-murrieta" target="_blank" rel="noopener noreferrer" aria-label="View us on Yelp" className="w-9 h-9 rounded bg-black border border-[#CEA53D]/30 flex items-center justify-center hover:border-[#CEA53D] hover:bg-[#CEA53D]/10 transition-all">
                  <svg className="w-4 h-4 text-[#CEA53D]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 0 1 1.596-.206 9.194 9.194 0 0 1 2.364 3.252 1.073 1.073 0 0 1-.694 1.459zm-3.965 5.985a1.072 1.072 0 0 1-.865 1.262 9.2 9.2 0 0 1-3.955-.085 1.072 1.072 0 0 1-.736-1.387l1.796-4.885c.347-.94 1.63-.89 1.937.076l1.823 5.019zm-8.847-1.837l2.83-4.358c.564-.868-.272-1.922-1.262-1.59l-5.034 1.68a1.073 1.073 0 0 1-1.324-.776 9.2 9.2 0 0 1 .243-3.97 1.072 1.072 0 0 1 1.535-.584l4.449 2.497c.866.486.79 1.756-.114 2.131l-4.557 1.89a1.073 1.073 0 0 0-.485 1.591 9.19 9.19 0 0 0 2.824 2.763c.497.313 1.14.127 1.405-.357l2.49-4.917zm.712-8.498l4.89 1.797c.94.346.89 1.63-.076 1.936l-5.018 1.823a1.072 1.072 0 0 1-1.262-.866 9.2 9.2 0 0 1 .085-3.954 1.073 1.073 0 0 1 1.38-.736z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Forms Section */}
      <section className="relative bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A]" style={{ padding: "clamp(2rem, 5vw, 3rem) clamp(1rem, 4vw, 2rem)" }}>
        <div className="mx-auto" style={{ maxWidth: "min(100%, 72rem)" }}>
          <div className="grid lg:grid-cols-[3fr_7fr] items-start" style={{ gap: "clamp(1.5rem, 3vw, 2.5rem)" }}>
            {/* Quick Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-black/90 border-2 border-[#CEA53D]/30 rounded-xl p-6 md:p-8"
              style={{ boxShadow: '0 0 30px rgba(255, 215, 0, 0.25), inset 0 0 50px rgba(255, 215, 0, 0.05)' }}
            >
              <h2
                className="text-2xl font-black uppercase text-[#EDEDED] mb-2"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Message Us
              </h2>
              <p className="text-[#EDEDED]/60 text-sm mb-6">
                Complete form and we&apos;ll contact you asap.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <span className="text-[#FFFF] uppercase tracking-wider text-sm font-bold mb-2 ml-2 block" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Full Name <span className="text-[#EB0A08]">*</span>
                  </span>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-black border-2 border-[#CEA53D]/30 rounded-lg px-3 py-2 text-[#EDEDED] text-sm placeholder:text-[#EDEDED]/40 focus:border-[#CEA53D] focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <span className="text-[#FFFF] uppercase tracking-wider text-sm font-bold mb-2 ml-2 block" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Phone Number <span className="text-[#EB0A08]">*</span>
                  </span>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-black border-2 border-[#CEA53D]/30 rounded-lg px-3 py-2 text-[#EDEDED] text-sm placeholder:text-[#EDEDED]/40 focus:border-[#CEA53D] focus:outline-none transition-colors"
                    placeholder="(000) 000-0000"
                  />
                </div>
                <div>
                  <span className="text-[#FFFF] uppercase tracking-wider text-sm font-bold mb-2  ml-2 block" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Email Address<span className="text-[#EB0A08]">*</span>
                  </span>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-black border-2 border-[#CEA53D]/30 rounded-lg px-3 py-2 text-[#EDEDED] text-sm placeholder:text-[#EDEDED]/40 focus:border-[#CEA53D] focus:outline-none transition-colors"
                    placeholder="example@example.com"
                  />
                </div>
                <div>
                  <span className="text-[#FFFF] uppercase tracking-wider text-sm font-bold mb-2 ml-2 block" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Message 
                  </span>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full bg-black border-2 border-[#CEA53D]/30 rounded-lg px-3 py-2 text-[#EDEDED] text-sm placeholder:text-[#EDEDED]/40 focus:border-[#CEA53D] focus:outline-none transition-colors resize-none lg:min-h-[420px]"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-black border-2 border-[#CEA53D] font-black text-[#CEA53D] uppercase tracking-wider transition-all duration-300 hover:bg-[#CEA53D] hover:text-black disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    boxShadow: '0 0 20px rgba(255, 215, 0, 0.4)',
                  }}
                >
                  {isSubmitting ? (
                    <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                  ) : (
                    <><Send className="w-4 h-4" /> Send Message</>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-3 border border-[#CEA53D] rounded-lg bg-[#CEA53D]/10 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#CEA53D]" />
                    <p className="text-[#CEA53D] text-sm">Message sent!</p>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-3 border border-[#EB0A08] rounded-lg bg-[#EB0A08]/10 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-[#EB0A08]" />
                    <p className="text-[#EB0A08] text-sm">Something went wrong.</p>
                  </div>
                )}
              </form>
            </motion.div>

            {/* Request Service Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <RequestServiceForm />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <StickyCTAButton />
    </div>
  );
}
