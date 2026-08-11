import Link from "next/link";
import { breadcrumbSchema } from "@/lib/schema";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { StickyCTAButton } from "../components/sticky-cta-button";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([{ name: "Privacy Policy", path: "/privacy-policy" }])
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
            Privacy Policy
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
            GA Tucker, Private Investigator (&ldquo;us&rdquo;, &ldquo;we&rdquo;, or &ldquo;our&rdquo;) operates the GA Tucker, Private Investigator website (the &ldquo;Service&rdquo;).
          </p>
          <p>
            This page informs you of our policies regarding the collection, use and disclosure of Personal Information when you use our Service.
          </p>
          <p>
            We will not use or share your information with anyone except as described in this Privacy Policy.
          </p>
          <p>
            We use your Personal Information for providing and improving the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our{" "}
            <Link href="/terms-and-conditions" className="text-[#CEA53D] hover:underline">
              Terms and Conditions
            </Link>
            , accessible at{" "}
            <a href="https://gatuckerpi.com" className="text-[#CEA53D] hover:underline">
              https://gatuckerpi.com
            </a>
            .
          </p>

          <LegalHeading>Information Collection And Use</LegalHeading>
          <p>
            While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information (&ldquo;Personal Information&rdquo;) may include, but is not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[#EDEDED]/85">
            <li>Name</li>
            <li>Email address</li>
            <li>Telephone number</li>
          </ul>

          <LegalHeading>Log Data</LegalHeading>
          <p>
            We collect information that your browser sends whenever you visit our Service (&ldquo;Log Data&rdquo;). This Log Data may include information such as your computer&rsquo;s Internet Protocol (&ldquo;IP&rdquo;) address, browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages and other statistics.
          </p>

          <LegalHeading>Cookies</LegalHeading>
          <p>
            Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer&rsquo;s hard drive.
          </p>
          <p>
            We use &ldquo;cookies&rdquo; to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
          </p>

          <LegalHeading>Service Providers</LegalHeading>
          <p>
            We may employ third party companies and individuals to facilitate our Service, to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.
          </p>
          <p>
            These third parties have access to your Personal Information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
          </p>

          <LegalHeading>Security</LegalHeading>
          <p>
            The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
          </p>

          <LegalHeading>Links To Other Sites</LegalHeading>
          <p>
            Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party&rsquo;s site. We strongly advise you to review the Privacy Policy of every site you visit.
          </p>
          <p>
            We have no control over, and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
          </p>

          <LegalHeading>Children&rsquo;s Privacy</LegalHeading>
          <p>
            Our Service does not address anyone under the age of 18 (&ldquo;Children&rdquo;).
          </p>
          <p>
            We do not knowingly collect personally identifiable information from children under 18. If you are a parent or guardian and you are aware that your child has provided us with Personal Information, please contact us. If we discover that a child under 18 has provided us with Personal Information, we will delete such information from our servers immediately.
          </p>

          <LegalHeading>Compliance With Laws</LegalHeading>
          <p>
            We will disclose your Personal Information where required to do so by law or subpoena.
          </p>

          <LegalHeading>Changes To This Privacy Policy</LegalHeading>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </p>
          <p>
            You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
          </p>

          <LegalHeading>Contact Us</LegalHeading>
          <p>
            If you have any questions about this Privacy Policy, please{" "}
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
