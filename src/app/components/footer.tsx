"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Shield, Facebook, Twitter, Instagram } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Footer() {
  return (
    <footer className="relative bg-[#0D0D0D] border-t border-[#CEA53D]/30" style={{ padding: "clamp(3rem, 6vw, 4rem) clamp(1rem, 4vw, 2rem)" }}>
      <div className="mx-auto" style={{ maxWidth: "min(100%, 80rem)" }}>
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "clamp(2rem, 4vw, 4rem)", marginBottom: "clamp(2rem, 4vw, 3rem)" }}>
          {/* Column 1: Logo, Company Info, & Socials */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="mb-4 w-48 cursor-pointer hover:opacity-80 transition-opacity"> {/* Adjust width as needed for your logo */}
              {/* This is the placeholder for your logo image */}
              <ImageWithFallback
                src="/gatuckernavlogo.png"
                alt="GA Tucker PI Logo"
                width={350}
                height={50}
                className="w-full h-auto"
              />
            </Link>
            
            <p
              className="text-[#EDEDED]/70 mb-6 leading-relaxed text-sm max-w-sm"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              California&apos;s most trusted private investigation firm. Providing discreet, professional investigative services.
            </p>

            <div className="flex items-center gap-2 text-[#CEA53D] text-sm mb-6">
              <Shield className="w-4 h-4" />
              <span style={{ fontFamily: "'Inter', sans-serif" }}>
                California PI License #188351
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="flex flex-col items-center text-center">
            <h4 
              className="mb-4 text-[#EDEDED] uppercase tracking-wider text-sm font-bold"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'About', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Pricing', href: '/#pricing' },
                { name: 'Testimonials', href: '/#testimonials' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#EDEDED]/70 hover:text-[#CEA53D] transition-colors text-sm font-light"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Contact and Newsletter */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <h4 
              className="mb-4 text-[#EDEDED] uppercase tracking-wider text-sm font-bold"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Contact Us
            </h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-center md:justify-end gap-2">
                <Phone className="w-4 h-4 text-[#CEA53D] flex-shrink-0" />
                <a
                  href="tel:909-964-8976"
                  className="text-[#EDEDED] hover:text-[#CEA53D] transition-colors text-sm font-light"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  909-964-8976
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2">
                <Mail className="w-4 h-4 text-[#CEA53D] flex-shrink-0" />
                <a
                  href="mailto:gatuckerpi@gmail.com"
                  className="text-[#EDEDED] hover:text-[#CEA53D] transition-colors text-sm font-light"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  gatuckerpi@gmail.com
                </a>
              </div>
              <div className="flex items-start justify-center md:justify-end gap-2">
                <MapPin className="w-4 h-4 text-[#CEA53D] flex-shrink-0 mt-1" />
                <p
                  className="text-[#EDEDED] text-sm font-light"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Southern California
                </p>
              </div>
              {/* Social Links - Retro square style */}
            <div className="flex gap-4 mt-auto justify-center md:justify-end">
              <a href="https://facebook.com/161146941379347" target="_blank" rel="noopener noreferrer" className="w-11 h-11 sm:w-10 sm:h-10 rounded-sm bg-black border-2 border-[#CEA53D]/30 flex items-center justify-center hover:border-[#CEA53D] hover:bg-[#CEA53D]/10 active:scale-95 transition-all touch-manipulation">
                <Facebook className="w-5 h-5 text-[#CEA53D]" />
              </a>
              <a href="https://twitter.com/ginvestigative" target="_blank" rel="noopener noreferrer" className="w-11 h-11 sm:w-10 sm:h-10 rounded-sm bg-black border-2 border-[#CEA53D]/30 flex items-center justify-center hover:border-[#CEA53D] hover:bg-[#CEA53D]/10 active:scale-95 transition-all touch-manipulation">
                <Twitter className="w-5 h-5 text-[#CEA53D]" />
              </a>
              <a href="https://instagram.com/gatuckerpi" target="_blank" rel="noopener noreferrer" className="w-11 h-11 sm:w-10 sm:h-10 rounded-sm bg-black border-2 border-[#CEA53D]/30 flex items-center justify-center hover:border-[#CEA53D] hover:bg-[#CEA53D]/10 active:scale-95 transition-all touch-manipulation">
                <Instagram className="w-5 h-5 text-[#CEA53D]" />
              </a>
              <a href="https://yelp.com/biz/g-a-tucker-p-i-investigative-services-murrieta" target="_blank" rel="noopener noreferrer" className="w-11 h-11 sm:w-10 sm:h-10 rounded-sm bg-black border-2 border-[#CEA53D]/30 flex items-center justify-center hover:border-[#CEA53D] hover:bg-[#CEA53D]/10 active:scale-95 transition-all touch-manipulation">
                <svg className="w-5 h-5 text-[#CEA53D]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 0 1 1.596-.206 9.194 9.194 0 0 1 2.364 3.252 1.073 1.073 0 0 1-.694 1.459zm-3.965 5.985a1.072 1.072 0 0 1-.865 1.262 9.2 9.2 0 0 1-3.955-.085 1.072 1.072 0 0 1-.736-1.387l1.796-4.885c.347-.94 1.63-.89 1.937.076l1.823 5.019zm-8.847-1.837l2.83-4.358c.564-.868-.272-1.922-1.262-1.59l-5.034 1.68a1.073 1.073 0 0 1-1.324-.776 9.2 9.2 0 0 1 .243-3.97 1.072 1.072 0 0 1 1.535-.584l4.449 2.497c.866.486.79 1.756-.114 2.131l-4.557 1.89a1.073 1.073 0 0 0-.485 1.591 9.19 9.19 0 0 0 2.824 2.763c.497.313 1.14.127 1.405-.357l2.49-4.917zm.712-8.498l4.89 1.797c.94.346.89 1.63-.076 1.936l-5.018 1.823a1.072 1.072 0 0 1-1.262-.866 9.2 9.2 0 0 1 .085-3.954 1.073 1.073 0 0 1 1.38-.736z"/>
                </svg>
              </a>
            </div>
            </div>

            
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#CEA53D]/20 text-center">
          <p 
            className="text-[#EDEDED]/50 text-sm mb-4 md:mb-0 font-light"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Copyright © 2025 GA Tucker, Private Investigator | Powered by Avatar Website Design
          </p>
        </div>
      </div>
    </footer>
  );
}