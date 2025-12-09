import type { Metadata } from "next";
import { Navbar } from './components/navbar';

export const metadata: Metadata = {
  title: "G.A. Tucker PI | California Private Investigator | 27+ Years Experience",
  description: "California's leading private investigator with over 27 years of experience. Confidential investigations, background checks, surveillance, and more.",
};
import { HeroSection } from './components/hero-section';
import { AboutSection } from './components/about-section';
import { ServicesSection } from './components/services-section';
import { ThreeStepsSection } from './components/three-steps-section';
import { PricingSection } from './components/pricing-section';
import { StatsSection } from './components/stats-section';
import { TestimonialsSection } from './components/testimonials-section';
import { AffiliationsSection } from './components/affiliations-section';
import { CTASection } from './components/cta-section';
import { Footer } from './components/footer';
import { StickyCTAButton } from './components/sticky-cta-button';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ThreeStepsSection />
      <PricingSection />
      <StatsSection />
      <TestimonialsSection />
      <AffiliationsSection />
      <CTASection />
      <Footer />
      <StickyCTAButton />
    </div>
  );
}
