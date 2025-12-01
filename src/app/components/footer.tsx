"use client";

import { Phone, Mail, MapPin, Shield, Facebook, Twitter, Instagram } from 'lucide-react';
import { Input } from './ui/input';
import { ImageWithFallback } from './figma/ImageWithFallback'; // Assuming you have this component

export function Footer() {
  return (
    <footer className="relative bg-[#0D0D0D] border-t border-[#CEA53D]/30 py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-16 mb-10 sm:mb-12">
          {/* Column 1: Logo, Company Info, & Socials */}
          <div className="md:col-span-1 lg:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
            <a href="/" className="mb-4 w-48 cursor-pointer hover:opacity-80 transition-opacity"> {/* Adjust width as needed for your logo */}
              {/* This is the placeholder for your logo image */}
              <ImageWithFallback
                src="/gatuckernavlogo.png"
                alt="GA Tucker PI Logo"
                width={350}
                height={50}
                className="w-full h-auto"
              />
            </a>
            
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
          <div className="md:col-span-1 lg:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
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
                { name: 'Pricing', href: '#pricing' },
                { name: 'Testimonials', href: '#testimonials' },
                
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-[#EDEDED]/70 hover:text-[#CEA53D] transition-colors text-sm font-light"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Contact and Newsletter */}
          <div className="lg:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 
              className="mb-4 text-[#EDEDED] uppercase tracking-wider text-sm font-bold"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Contact Us
            </h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#CEA53D] flex-shrink-0" />
                <a 
                  href="tel:909-345-1350"
                  className="text-[#EDEDED] hover:text-[#CEA53D] transition-colors text-sm font-light"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  (909) 345-1350
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#CEA53D] flex-shrink-0" />
                <a 
                  href="mailto:greg@gatucker.com"
                  className="text-[#EDEDED] hover:text-[#CEA53D] transition-colors text-sm font-light"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  greg@gatucker.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#CEA53D] flex-shrink-0 mt-1" />
                <p 
                  className="text-[#EDEDED] text-sm font-light"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Southern California
                </p>
              </div>
              {/* Social Links - Retro square style */}
            <div className="flex gap-4 mt-auto">
              <a href="#" className="w-11 h-11 sm:w-10 sm:h-10 rounded-sm bg-black border-2 border-[#CEA53D]/30 flex items-center justify-center hover:border-[#CEA53D] hover:bg-[#CEA53D]/10 active:scale-95 transition-all touch-manipulation">
                <Facebook className="w-5 h-5 text-[#CEA53D]" />
              </a>
              <a href="#" className="w-11 h-11 sm:w-10 sm:h-10 rounded-sm bg-black border-2 border-[#CEA53D]/30 flex items-center justify-center hover:border-[#CEA53D] hover:bg-[#CEA53D]/10 active:scale-95 transition-all touch-manipulation">
                <Twitter className="w-5 h-5 text-[#CEA53D]" />
              </a>
              <a href="#" className="w-11 h-11 sm:w-10 sm:h-10 rounded-sm bg-black border-2 border-[#CEA53D]/30 flex items-center justify-center hover:border-[#CEA53D] hover:bg-[#CEA53D]/10 active:scale-95 transition-all touch-manipulation">
                <Instagram className="w-5 h-5 text-[#CEA53D]" />
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