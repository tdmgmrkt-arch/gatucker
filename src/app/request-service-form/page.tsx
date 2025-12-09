import type { Metadata } from "next";
import { Navbar } from '../components/navbar';

export const metadata: Metadata = {
  title: "Request Service | Free Consultation | G.A. Tucker PI",
  description: "Request a free consultation with G.A. Tucker PI. Submit your inquiry for expert private investigation services in California.",
};
import { Footer } from '../components/footer';
import { StickyCTAButton } from '../components/sticky-cta-button';
import { RequestServiceForm } from '../components/request-service-form';

export default function RequestServicePage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] overflow-x-hidden">
      <Navbar />

      {/* Form Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0D0D0D] via-[#1A1A1A] to-[#0D0D0D]">
        <div className="max-w-4xl mx-auto">
          <RequestServiceForm />
        </div>
      </section>

      <Footer />
      <StickyCTAButton />
    </div>
  );
}
