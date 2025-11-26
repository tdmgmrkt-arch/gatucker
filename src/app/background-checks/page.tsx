import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';
import { StickyCTAButton } from '../components/sticky-cta-button';

export default function BackgroundChecksPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] overflow-x-hidden">
      <Navbar />

      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1A1A1A] via-[#0D0D0D] to-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <h1
            className="text-4xl md:text-6xl font-black uppercase text-[#EDEDED] mb-6"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            Background Checks
          </h1>
          <p className="text-[#EDEDED]/70 text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
            Content coming soon...
          </p>
        </div>
      </section>

      <Footer />
      <StickyCTAButton />
    </div>
  );
}
