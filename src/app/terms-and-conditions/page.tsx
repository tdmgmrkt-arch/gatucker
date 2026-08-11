import Link from "next/link";
import { breadcrumbSchema } from "@/lib/schema";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { StickyCTAButton } from "../components/sticky-cta-button";

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([{ name: "Terms and Conditions", path: "/terms-and-conditions" }])
          ),
        }}
      />

      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-12 sm:pt-40 sm:pb-16 px-4 sm:px-6 lg:px-8 border-b border-[#CEA53D]/20">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#CEA53D]/40 to-transparent" />
        <div className="max-w-7xl mx-auto text-center">
          <h1
            className="mb-4 font-black uppercase leading-[0.95] text-white"
            style={{
              fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              letterSpacing: "-0.01em",
            }}
          >
            Terms and Conditions
          </h1>
          <p
            className="text-[#EDEDED]/60 text-sm"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Last updated: May 29, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div
          className="max-w-7xl mx-auto text-[#EDEDED]/85 leading-relaxed space-y-6"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem" }}
        >
          <p>
            Please read these Terms of Use (&ldquo;Terms&rdquo;, &ldquo;Terms of Use&rdquo;) carefully before using the{" "}
            <a href="https://gatuckerpi.com" className="text-[#CEA53D] hover:underline">
              https://gatuckerpi.com
            </a>{" "}
            website (the &ldquo;Service&rdquo;) operated by GA Tucker, Private Investigator (&ldquo;us&rdquo;, &ldquo;we&rdquo;, or &ldquo;our&rdquo;).
          </p>
          <p>
            Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.
          </p>
          <p>
            By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
          </p>

          <LegalHeading>Intellectual Property</LegalHeading>
          <p>
            The Service and its original content, features and functionality are and will remain the exclusive property of GA Tucker, Private Investigator and its licensors.
          </p>

          <LegalHeading>Links To Other Web Sites</LegalHeading>
          <p>
            Our Service may contain links to third-party web sites or services that are not owned or controlled by GA Tucker, Private Investigator.
          </p>
          <p>
            GA Tucker, Private Investigator has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that GA Tucker, Private Investigator shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
          </p>
          <p>
            We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.
          </p>

          <LegalHeading>Termination</LegalHeading>
          <p>
            We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
          </p>
          <p>
            All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
          </p>

          <LegalHeading>Disclaimer</LegalHeading>
          <p>
            Your use of the Service is at your sole risk. The Service is provided on an &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
          </p>

          <LegalHeading>Governing Law</LegalHeading>
          <p>
            These Terms shall be governed and construed in accordance with the laws of United States without regard to its conflict of law provisions.
          </p>
          <p>
            Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.
          </p>

          <LegalHeading>Changes</LegalHeading>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
          </p>
          <p>
            By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
          </p>

          <LegalHeading>Contact Us</LegalHeading>
          <p>
            If you have any questions about these Terms, please{" "}
            <Link href="/contact" className="text-[#CEA53D] hover:underline">
              contact us
            </Link>
            .
          </p>
        </div>
      </section>

      <StickyCTAButton />
      <Footer />
    </div>
  );
}

function LegalHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-[#CEA53D] uppercase tracking-wider pt-4 pb-1 border-b border-[#CEA53D]/20"
      style={{
        fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
        fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)",
        letterSpacing: "0.02em",
      }}
    >
      {children}
    </h2>
  );
}
