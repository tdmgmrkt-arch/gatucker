import type { Metadata } from "next";
import dynamic from 'next/dynamic';
import NavbarShell from './components/navbar-shell';
import { HeroSection } from './components/hero-section';
import { ReviewsSection } from './components/reviews-section';
import { getGoogleReviews, formatRating, formatReviewCount } from '@/lib/google-reviews';

export const metadata: Metadata = {
  title: "G.A. Tucker PI | California Private Investigator | 27+ Years Experience",
  description: "California's leading private investigator with over 27 years of experience. Confidential investigations, background checks, surveillance, and more.",
};

// Lazy load below-fold components to reduce initial bundle size and TBT
const AboutSection = dynamic(() => import('./components/about-section').then(mod => ({ default: mod.AboutSection })), {
  loading: () => <div className="min-h-[400px]" />,
});
const ServicesSection = dynamic(() => import('./components/services-section').then(mod => ({ default: mod.ServicesSection })), {
  loading: () => <div className="min-h-[400px]" />,
});
const ThreeStepsSection = dynamic(() => import('./components/three-steps-section').then(mod => ({ default: mod.ThreeStepsSection })), {
  loading: () => <div className="min-h-[300px]" />,
});
const PricingSection = dynamic(() => import('./components/pricing-section').then(mod => ({ default: mod.PricingSection })), {
  loading: () => <div className="min-h-[400px]" />,
});
const StatsSection = dynamic(() => import('./components/stats-section').then(mod => ({ default: mod.StatsSection })), {
  loading: () => <div className="min-h-[200px]" />,
});
const AffiliationsSection = dynamic(() => import('./components/affiliations-section').then(mod => ({ default: mod.AffiliationsSection })), {
  loading: () => <div className="min-h-[200px]" />,
});
const CTASection = dynamic(() => import('./components/cta-section').then(mod => ({ default: mod.CTASection })), {
  loading: () => <div className="min-h-[400px]" />,
});
const Footer = dynamic(() => import('./components/footer').then(mod => ({ default: mod.Footer })), {
  loading: () => <div className="min-h-[200px]" />,
});
const StickyCTAButton = dynamic(() => import('./components/sticky-cta-button').then(mod => ({ default: mod.StickyCTAButton })));

export default async function App() {
  const reviewData = await getGoogleReviews();

  const rating = formatRating(reviewData.rating) ?? '4.9';
  const count = formatReviewCount(reviewData.userRatingCount) ?? '67';
  const reviews = reviewData.reviews;

  return (
    <div className="min-h-screen bg-[#0D0D0D] overflow-x-hidden">
      <NavbarShell />
      <HeroSection rating={rating} count={count} />
      <AboutSection />
      <ServicesSection />
      <ThreeStepsSection />
      <PricingSection />
      <StatsSection />
      <ReviewsSection
        rating={rating}
        count={count}
        reviews={reviews}
      />
      <AffiliationsSection />
      <CTASection />
      <Footer />
      <StickyCTAButton />
    </div>
  );
}
