"use client";

import { motion } from 'framer-motion';
import { Button } from '@/app/components/ui/button';
import {
  Shield,
  Clock,
  Lock,
  CheckCircle2,
  Search,
  Users,
  FileText,
  Phone,
  MapPin,
  Star,
  ChevronDown
} from 'lucide-react';
import { Navbar } from '@/app/components/navbar';
import { Footer } from '@/app/components/footer';
import { useState } from 'react';

export default function BackgroundChecksPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#0D0D0D] overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] w-full overflow-hidden pt-24">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/95 via-[#0D0D0D]/90 to-[#0D0D0D]" />
        </div>

        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#E7AD41]/10 rounded-full blur-[150px] z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#F5D68A]/10 rounded-full blur-[120px] z-0" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-4xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-[#E7AD41]/10 backdrop-blur-sm border border-[#E7AD41]/30 rounded-full"
            >
              <Search className="w-4 h-4 text-[#E7AD41]" />
              <span className="text-[#E7AD41] text-sm font-semibold tracking-wider uppercase">
                Background Check Services
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-6 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                fontWeight: 700,
                lineHeight: 1.1
              }}
            >
              Hire Southern California <br />
              <span className="text-[#F5D68A]">Background Check</span> Investigator
            </motion.h1>

            {/* Subheading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-10 flex flex-wrap items-center gap-6"
            >
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#E7AD41]" />
                <span className="text-[#EDEDED]/90 text-sm font-medium">24/7 Consultations</span>
              </div>
              <div className="hidden md:block w-1 h-1 bg-[#E7AD41] rounded-full" />
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#E7AD41]" />
                <span className="text-[#EDEDED]/90 text-sm font-medium">Licensed by State of CA</span>
              </div>
              <div className="hidden md:block w-1 h-1 bg-[#E7AD41] rounded-full" />
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-[#E7AD41]" />
                <span className="text-[#EDEDED]/90 text-sm font-medium">Confidentiality Guaranteed</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#E7AD41] via-[#F5D68A] to-[#E7AD41] rounded-full blur opacity-50 group-hover:opacity-100 transition duration-300" />
                <Button
                  size="lg"
                  className="relative bg-gradient-to-r from-[#E7AD41] to-[#D79D31] hover:from-[#F5D68A] hover:to-[#E7AD41] text-[#0D0D0D] px-10 py-6 text-base font-bold transition-all duration-300 rounded-full shadow-lg"
                >
                  Request Consultation
                </Button>
              </div>

              <a href="tel:909-345-1350" className="group relative">
                <Button
                  size="lg"
                  variant="outline"
                  className="relative border-2 border-[#E7AD41]/60 bg-[#0D0D0D]/50 backdrop-blur-sm text-[#E7AD41] hover:border-[#E7AD41] hover:bg-[#E7AD41]/10 px-10 py-6 text-base font-bold transition-all duration-300 rounded-full"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  909-964-8976
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="relative">
        {/* Introduction Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A]">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="prose prose-invert max-w-none"
                >
                  <p className="text-[#EDEDED]/80 text-lg leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                    It is important to conduct background checks when pursuing the truth about someone&apos;s past as well as identifying criminal records, marriage certificates, vehicle registration, social media activity, along with the individuals the subject is affiliated with. This information is beneficial for building a defense, strengthening a case, and uncovering the truth.
                  </p>
                  <p className="text-[#EDEDED]/80 text-lg leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Private investigators such as GA Tucker PI have access to databases that provide information that is usually unavailable to the public. The biggest misconception we encounter is that individuals believe the information they pull from various websites will provide the same content as our resources. This is incorrect, these websites provide customers with information that is already disclosed to the public and oftentimes do not provide any valuable information at all.
                  </p>

                  <div className="p-6 bg-gradient-to-br from-[#E7AD41]/10 to-[#D79D31]/5 border border-[#E7AD41]/20 rounded-xl">
                    <p className="text-[#F5D68A] text-xl font-bold mb-0" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                      Contact us for a full comprehensive background check.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Related Services Sidebar */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="sticky top-28"
                >
                  <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#E7AD41]/20 rounded-2xl p-8">
                    <h3 className="text-[#F5D68A] text-2xl font-bold mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                      Related Services
                    </h3>
                    <ul className="space-y-3">
                      {[
                        'Background Checks',
                        'Risk Management',
                        'Investigations',
                        'Consulting',
                        'Missing Persons',
                        'Profiling',
                        'Infidelity',
                        'Child Custody'
                      ].map((service, index) => (
                        <li key={index}>
                          <a
                            href="#"
                            className="flex items-center gap-3 text-[#EDEDED]/70 hover:text-[#E7AD41] transition-colors py-2 group"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#E7AD41] flex-shrink-0" />
                            <span className="text-sm font-medium">{service}</span>
                          </a>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 pt-8 border-t border-[#E7AD41]/20">
                      <p className="text-[#EDEDED]/60 text-sm mb-4">Need immediate assistance?</p>
                      <a href="tel:909-345-1350" className="group relative inline-block w-full">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#E7AD41] to-[#D79D31] rounded-lg blur opacity-30 group-hover:opacity-60 transition" />
                        <Button className="relative w-full bg-gradient-to-r from-[#E7AD41] to-[#D79D31] hover:from-[#F5D68A] hover:to-[#E7AD41] text-[#0D0D0D] font-bold">
                          <Phone className="w-4 h-4 mr-2" />
                          Call Now
                        </Button>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D]">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { number: '01', title: 'Provide Crucial Information', icon: FileText },
                { number: '02', title: 'Non-Disclosure Information', icon: Lock },
                { number: '03', title: 'Employment Background Checks', icon: Users },
                { number: '04', title: 'Criminal Background Checks', icon: Shield }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative p-8 bg-gradient-to-br from-[#1A1A1A]/60 to-[#0D0D0D]/60 border border-[#E7AD41]/20 rounded-2xl hover:border-[#E7AD41]/40 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#E7AD41]/0 to-[#E7AD41]/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

                  <div className="relative">
                    <span className="text-[#E7AD41]/30 text-6xl font-bold block mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                      {benefit.number}
                    </span>
                    <benefit.icon className="w-10 h-10 text-[#E7AD41] mb-4" />
                    <h4 className="text-[#EDEDED] text-xl font-bold" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                      {benefit.title}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Employment & Personal Background Checks */}
        <section className="py-20 px-6 bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A]">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-[#F5D68A] text-4xl font-bold mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  Employment and Personal Background Checks
                </h2>
                <p className="text-[#EDEDED]/80 text-lg leading-relaxed mb-6">
                  There is no standard or routine background check. The investigation should be tailored to your areas of concern, reasons for finding out more, and your overall needs.
                </p>
                <p className="text-[#EDEDED]/80 text-lg leading-relaxed mb-8">
                  Whether you&apos;re hiring a new employee, looking for a nanny, or are about to make a new investment, a background check can ensure the safety of everyone involved.
                </p>

                <div className="grid sm:grid-cols-3 gap-6">
                  {[
                    { icon: Shield, title: 'Criminal Records', desc: 'Identify any and all criminal offenses' },
                    { icon: Users, title: 'Social Media Check', desc: 'Covers all public social media accounts' },
                    { icon: MapPin, title: 'Locate Individuals', desc: 'Track down individuals quickly' }
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#E7AD41]/20 to-[#D79D31]/10 flex items-center justify-center">
                        <item.icon className="w-8 h-8 text-[#E7AD41]" />
                      </div>
                      <h4 className="text-[#EDEDED] font-bold mb-2 text-sm">{item.title}</h4>
                      <p className="text-[#EDEDED]/60 text-xs">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#E7AD41]/30 rounded-2xl p-8 shadow-2xl">
                  <h3 className="text-[#F5D68A] text-2xl font-bold mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                    Request Consultation Now
                  </h3>

                  <form className="space-y-5">
                    <div>
                      <label className="block text-[#EDEDED] text-sm font-medium mb-2">Full Name</label>
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#E7AD41]/20 rounded-lg text-[#EDEDED] placeholder:text-[#EDEDED]/30 focus:border-[#E7AD41] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[#EDEDED] text-sm font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="(XXX) XXX-XXXX"
                        className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#E7AD41]/20 rounded-lg text-[#EDEDED] placeholder:text-[#EDEDED]/30 focus:border-[#E7AD41] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[#EDEDED] text-sm font-medium mb-2">Email Address</label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#E7AD41]/20 rounded-lg text-[#EDEDED] placeholder:text-[#EDEDED]/30 focus:border-[#E7AD41] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[#EDEDED] text-sm font-medium mb-2">Interested Service</label>
                      <select className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#E7AD41]/20 rounded-lg text-[#EDEDED] focus:border-[#E7AD41] focus:outline-none transition-colors">
                        <option>Background Checks</option>
                        <option>Employment Background Check</option>
                        <option>Criminal Background Check</option>
                        <option>Personal Background Check</option>
                        <option>Corporate Background Check</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[#EDEDED] text-sm font-medium mb-2">Message</label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about your needs..."
                        className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#E7AD41]/20 rounded-lg text-[#EDEDED] placeholder:text-[#EDEDED]/30 focus:border-[#E7AD41] focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <div className="group relative">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#E7AD41] to-[#D79D31] rounded-lg blur opacity-30 group-hover:opacity-60 transition" />
                      <Button
                        type="submit"
                        className="relative w-full bg-gradient-to-r from-[#E7AD41] to-[#D79D31] hover:from-[#F5D68A] hover:to-[#E7AD41] text-[#0D0D0D] py-6 text-base font-bold"
                      >
                        SEND MESSAGE
                      </Button>
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Personal Background Checks Details */}
        <section className="py-20 px-6 bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D]">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[#F5D68A] text-4xl font-bold mb-8 text-center" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                Completing Personal Background Checks
              </h2>

              <div className="prose prose-invert prose-lg max-w-none">
                <p className="text-[#EDEDED]/80 leading-relaxed mb-6">
                  Are you or your loved one dating someone online and want to know more? Or do you just want more information about a person? Do you have an ex-business partner avoiding a court order judgment? GA Tucker PI is one of the top investigative firms that conduct personal background checks!
                </p>

                <p className="text-[#EDEDED]/80 leading-relaxed mb-6">
                  There are various reasons why a personal background check is needed. You might want to find a long-lost friend, find out who you are communicating with online or to see if your daughter is dating a criminal. At GA Tucker PI, a private investigator in Murrieta, CA provides a detailed and thorough background check to our clients.
                </p>

                <p className="text-[#EDEDED]/80 leading-relaxed">
                  Unlike personal background checks that a person can get online through a national background agency, our information can only be obtained by licensed professionals. Therefore, the information we share is more accurate than self-service options.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-20 px-6 bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-[#F5D68A] text-4xl font-bold mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                Reviews
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {[
                { name: 'Blake L.', date: '3/4/2025', review: 'Greg was extremely helpful!', rating: 5 },
                { name: 'Jon D.', date: '2/28/2025', review: 'Very professional and intricate background checks for my business. Super important service, HIGH VALUE!', rating: 5 }
              ].map((review, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#1A1A1A]/80 to-[#0D0D0D]/80 border border-[#E7AD41]/20 rounded-2xl p-8"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-[#EDEDED] font-bold text-lg">{review.name}</h4>
                      <p className="text-[#EDEDED]/50 text-sm">{review.date}</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#E7AD41] text-[#E7AD41]" />
                      ))}
                    </div>
                  </div>
                  <p className="text-[#EDEDED]/80 leading-relaxed">{review.review}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Button variant="outline" className="border-[#E7AD41]/60 text-[#E7AD41] hover:bg-[#E7AD41]/10">
                Read More Reviews
              </Button>
            </div>
          </div>
        </section>

        {/* What Can Be Found */}
        <section className="py-20 px-6 bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-[#F5D68A] text-4xl font-bold mb-8" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                What Can Be Found in a Background Check?
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#1A1A1A]/60 to-[#0D0D0D]/60 border border-[#E7AD41]/20 rounded-2xl p-8"
              >
                <h3 className="text-[#E7AD41] text-2xl font-bold mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  Personal Background Check
                </h3>
                <ul className="space-y-3">
                  {[
                    'Address where individuals have lived at',
                    'Criminal records',
                    'Emails',
                    'Personal residencies',
                    'Phone numbers',
                    'Property'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E7AD41] flex-shrink-0 mt-0.5" />
                      <span className="text-[#EDEDED]/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#1A1A1A]/60 to-[#0D0D0D]/60 border border-[#E7AD41]/20 rounded-2xl p-8"
              >
                <h3 className="text-[#E7AD41] text-2xl font-bold mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  Criminal Background Check
                </h3>
                <ul className="space-y-3">
                  {[
                    'Arrests',
                    'Convictions of felonies and misdemeanors',
                    'Court records (e.g. dockets, orders, decrees, judgements, etc.)',
                    'Incarceration records',
                    'Sex offenses',
                    'Warrants'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#E7AD41] flex-shrink-0 mt-0.5" />
                      <span className="text-[#EDEDED]/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Legal Information (FCRA) */}
        <section className="py-20 px-6 bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A]">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[#F5D68A] text-4xl font-bold mb-8" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                Learn More About Personal Background Checks
              </h2>

              <div className="space-y-6 text-[#EDEDED]/80 leading-relaxed">
                <p>
                  Under the Fair Credit Reporting Act (FCRA)*, criminal background checks cannot contain records of civil suits or arrests after seven years. Criminal convictions stay on a person&apos;s record indefinitely, but California doesn&apos;t allow employers to see convictions more than seven years old for most jobs.
                </p>

                <div className="grid gap-6">
                  {[
                    {
                      title: 'SSN Validation',
                      content: "Social security number validation is used by employers to confirm a person's eligibility to work in the U.S. This type of screening report will show the name and address history associated with a given social security number."
                    },
                    {
                      title: 'Sex Offender Registry',
                      content: 'All U.S. states are required to maintain a sex offender registry, which is public information. There is also a national sex offender registry, which includes all state, tribal, and territory registries.'
                    },
                    {
                      title: 'Credit Report',
                      content: 'An employer can only check your credit report if you give them explicit, written permission. Employers can see bankruptcy, accounts placed for collection, and loan information.'
                    },
                    {
                      title: 'Driving Records',
                      content: "Each state has its own rules and regulations about driving records — some allow employers to check records as far back as 10 years, while others only allow three years."
                    }
                  ].map((item, index) => (
                    <div key={index} className="bg-gradient-to-br from-[#1A1A1A]/40 to-[#0D0D0D]/40 border border-[#E7AD41]/10 rounded-xl p-6">
                      <h4 className="text-[#E7AD41] font-bold mb-2">{item.title}</h4>
                      <p className="text-[#EDEDED]/70 text-sm">{item.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Corporate Background Checks */}
        <section className="py-20 px-6 bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-[#F5D68A] text-4xl font-bold mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                Corporate Background Checks
              </h2>
              <p className="text-[#EDEDED]/80 text-lg">
                Whether your company is a small business or a national chain, GA Tucker PI provides comprehensive corporate background checks:
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Employees',
                  desc: 'Customized pre-employment background checks compliant with state laws'
                },
                {
                  title: 'Business Associates',
                  desc: 'Investigate litigation, affiliations, judgments and liens, licenses'
                },
                {
                  title: 'Contractors/Professionals',
                  desc: 'Check licenses, bonds, liens, judgments, malpractice insurance'
                },
                {
                  title: 'Debtors',
                  desc: 'Determine if subject has multiple liens and judgments already filed'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#1A1A1A]/60 to-[#0D0D0D]/60 border border-[#E7AD41]/20 rounded-xl p-6 hover:border-[#E7AD41]/40 transition-all"
                >
                  <h4 className="text-[#E7AD41] font-bold text-lg mb-3">{item.title}</h4>
                  <p className="text-[#EDEDED]/70 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 p-8 bg-gradient-to-br from-[#E7AD41]/10 to-[#D79D31]/5 border border-[#E7AD41]/30 rounded-2xl text-center"
            >
              <h3 className="text-[#F5D68A] text-2xl font-bold mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                Asset Search Services Also Available
              </h3>
              <p className="text-[#EDEDED]/80 mb-6">
                GA Tucker PI also offers professional asset searches for our customers. For a FREE estimate from our fully licensed private investigator in San Diego, CA, call (909) 220-4006 today! We&apos;re here for you 24 hours a day, 7 days a week!
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 px-6 bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A]">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-[#F5D68A] text-4xl font-bold mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                FAQs About Background Checks
              </h2>
            </motion.div>

            <div className="space-y-4">
              {[
                {
                  question: 'How long do background checks take?',
                  answer: 'Background checks usually take one to two business days to pull. We begin by gathering information through our comprehensive check and then have our technical analyst dig further into the content to establish connections.'
                },
                {
                  question: 'What are the charges of this investigation?',
                  answer: 'Prices vary based on the details and conditions of each particular case. Contact us for a consultation.'
                },
                {
                  question: 'What are the benefits of choosing GA Tucker PI?',
                  answer: "We work closely with all of our clients to provide the best service possible. We manage our client's hours and prioritize efficiency."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#1A1A1A]/80 to-[#0D0D0D]/80 border border-[#E7AD41]/20 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-[#E7AD41]/5 transition-colors"
                  >
                    <span className="text-[#EDEDED] font-bold text-lg pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#E7AD41] flex-shrink-0 transition-transform ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-[#EDEDED]/70 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-6 bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D]">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[#F5D68A] text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                Greg Tucker – Private Investigator California
              </h2>
              <p className="text-[#E7AD41] text-xl mb-8 italic" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                Don&apos;t be a sucker – call Tucker, your California Private Investigator
              </p>
              <p className="text-[#EDEDED]/80 text-lg mb-12">
                Submit Contact Form or Call Our California Private Investigator — (909)345-1398
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <div className="group relative">
                  <div className="absolute -inset-1.5 bg-gradient-to-r from-[#E7AD41] via-[#F5D68A] to-[#E7AD41] rounded-full blur-lg opacity-60 group-hover:opacity-100 transition animate-pulse" style={{ animationDuration: '3s' }} />
                  <Button
                    size="lg"
                    className="relative bg-gradient-to-r from-[#E7AD41] via-[#F5D68A] to-[#E7AD41] hover:from-[#F5D68A] hover:via-[#E7AD41] hover:to-[#F5D68A] text-[#0D0D0D] px-12 py-7 text-lg font-bold transition-all duration-500 rounded-full shadow-2xl"
                  >
                    24/7 CONSULTATION, TRY IT NOW
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
