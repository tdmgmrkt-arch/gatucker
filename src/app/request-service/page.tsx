import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';
import { StickyCTAButton } from '../components/sticky-cta-button';
import { RequestServiceForm } from '../components/request-service-form';

export default function RequestServicePage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A]">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="mb-6 font-black uppercase tracking-tight leading-tight"
            style={{
              fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
              fontSize: 'clamp(3rem, 8vw, 5rem)',
              color: '#FFFF',
            }}
          >
            Request Service
          </h1>
          <div
            className="h-1 w-32 bg-[#CEA53D] mx-auto mb-8"
            style={{
              boxShadow: '0 0 20px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 215, 0, 0.4)'
            }}
          ></div>
          <p
            className="text-[#EDEDED]/80 max-w-2xl mx-auto font-light mb-4"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.1rem',
              lineHeight: '1.8'
            }}
          >
            Take the first step towards finding the truth. Fill out the form below and one of our experienced investigators will contact you to discuss your case.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="relative py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D]">
        <div className="max-w-4xl mx-auto">
          <RequestServiceForm />
        </div>
      </section>

      <Footer />
      <StickyCTAButton />
    </div>
  );
}
