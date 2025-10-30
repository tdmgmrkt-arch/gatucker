"use client";

import { Phone, Mail, MapPin, Shield, Facebook, Twitter, Instagram } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback'; // Assuming you have this component

export function Footer() {
  return (
    <footer className="relative bg-[#0D0D0D] border-t border-[#E7AD41]/30 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-12">
          {/* Column 1: Logo, Company Info, & Socials */}
          <div className="md:col-span-1 lg:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="mb-4 w-48"> {/* Adjust width as needed for your logo */}
              {/* This is the placeholder for your logo image */}
              <ImageWithFallback 
                src="/gatuckernavlogo.png"
                alt="GA Tucker PI Logo"
                width={350}
                height={50}
                className="w-full h-auto"
              />
            </div>
            
            <p
              className="text-[#EDEDED]/70 mb-6 leading-relaxed text-sm max-w-sm"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              California&apos;s most trusted private investigation firm. Providing discreet, professional investigative services.
            </p>

            <div className="flex items-center gap-2 text-[#E7AD41] text-sm mb-6">
              <Shield className="w-4 h-4" />
              <span style={{ fontFamily: "'Inter', sans-serif" }}>
                California PI License #188351
              </span>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-auto">
              <a href="#" className="w-10 h-10 rounded-full bg-[#E7AD41]/10 flex items-center justify-center hover:bg-[#E7AD41]/20 transition-colors">
                <Facebook className="w-5 h-5 text-[#E7AD41]" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#E7AD41]/10 flex items-center justify-center hover:bg-[#E7AD41]/20 transition-colors">
                <Twitter className="w-5 h-5 text-[#E7AD41]" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#E7AD41]/10 flex items-center justify-center hover:bg-[#E7AD41]/20 transition-colors">
                <Instagram className="w-5 h-5 text-[#E7AD41]" />
              </a>
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
                { name: 'About', href: '#about' },
                { name: 'Services', href: '#services' },
                { name: 'Pricing', href: '#pricing' },
                { name: 'Testimonials', href: '#testimonials' },
                { name: 'Affiliations', href: '#affiliations' },
                { name: 'Privacy Policy', href: '#' },
                { name: 'Terms and Conditions', href: '#' },
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-[#EDEDED]/70 hover:text-[#E7AD41] transition-colors text-sm font-light"
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
                <Phone className="w-4 h-4 text-[#E7AD41] flex-shrink-0" />
                <a 
                  href="tel:909-345-1350"
                  className="text-[#EDEDED] hover:text-[#E7AD41] transition-colors text-sm font-light"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  (909) 345-1350
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E7AD41] flex-shrink-0" />
                <a 
                  href="mailto:greg@gatucker.com"
                  className="text-[#EDEDED] hover:text-[#E7AD41] transition-colors text-sm font-light"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  greg@gatucker.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E7AD41] flex-shrink-0 mt-1" />
                <p 
                  className="text-[#EDEDED] text-sm font-light"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Upland, CA 91786
                </p>
              </div>
            </div>

            <h4 
              className="mb-3 text-[#EDEDED] uppercase tracking-wider text-sm font-bold"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Newsletter
            </h4>
            <p className="text-[#EDEDED]/60 text-xs mb-3 font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
              Sign up to receive our latest news and updates.
            </p>
            <div className="flex gap-2 w-full">
              <Input 
                type="email"
                placeholder="Email Address"
                className="bg-[#1A1A1A] border-[#E7AD41]/20 text-[#EDEDED] placeholder:text-[#EDEDED]/40 text-sm"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
              <Button 
                className="bg-[#E7AD41] hover:bg-[#D79D31] text-[#0D0D0D] px-4"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#E7AD41]/20 text-center">
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