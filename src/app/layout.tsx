import { Dancing_Script, Space_Mono } from "next/font/google";
import Script from "next/script";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://gatuckerpi.com"),
  title: {
    default: "G.A. Tucker PI | California Private Investigator | 27+ Years Experience",
    template: "%s | G.A. Tucker PI"
  },
  description: "California's leading private investigator with over 27 years of experience. Confidential investigations, background checks, surveillance, and more.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gatuckerpi.com",
    siteName: "G.A. Tucker PI",
    title: "G.A. Tucker PI | California Private Investigator",
    description: "Licensed California private investigator with 27+ years experience. Background checks, surveillance, infidelity investigations, and more. CA License #PI188351.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "G.A. Tucker PI - California Private Investigator"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "G.A. Tucker PI | California Private Investigator",
    description: "Licensed California PI with 27+ years experience. Background checks, surveillance, infidelity investigations. CA License #PI188351.",
    images: ["/og-image.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

// Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://gatuckerpi.com/#organization",
  name: "G.A. Tucker PI",
  alternateName: "G.A. Tucker Private Investigations",
  url: "https://gatuckerpi.com",
  logo: "https://gatuckerpi.com/logo.png",
  image: "https://gatuckerpi.com/og-image.png",
  description: "California's leading private investigator with over 27 years of experience. Confidential investigations, background checks, surveillance, and more.",
  telephone: "+1-909-964-8976",
  email: "info@gatuckerpi.com",
  address: {
    "@type": "PostalAddress",
    addressRegion: "CA",
    addressCountry: "US"
  },
  geo: {
    "@type": "GeoCoordinates",
    addressCountry: "US"
  },
  areaServed: {
    "@type": "State",
    name: "California"
  },
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59"
  },
  sameAs: [
    "https://www.facebook.com/gatuckerpi",
    "https://twitter.com/gatuckerpi",
    "https://www.instagram.com/gatuckerpi",
    "https://www.yelp.com/biz/ga-tucker-pi"
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "Professional License",
    name: "California Private Investigator License",
    recognizedBy: {
      "@type": "Organization",
      name: "State of California"
    },
    validIn: {
      "@type": "State",
      name: "California"
    }
  },
  founder: {
    "@type": "Person",
    name: "Greg Tucker",
    jobTitle: "Private Investigator"
  },
  knowsAbout: [
    "Private Investigation",
    "Background Checks",
    "Surveillance",
    "Infidelity Investigations",
    "Missing Persons",
    "Child Custody Investigations",
    "Risk Management",
    "Criminal Profiling",
    "Trial Consulting"
  ]
};

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-dancing-script",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

// ✅ Root Layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WZ38HCWF');`,
          }}
        />
        {/* End Google Tag Manager */}
        <meta name="google-site-verification" content="pzONJWnaDXpKm02ynxCvlOeza4l6lrt2tE4YD4cOEEY" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${dancingScript.variable} ${spaceMono.variable} antialiased`}
      >
        {children}

        {/* reCAPTCHA Enterprise */}
        <Script
          src="https://www.google.com/recaptcha/enterprise.js?render=6LdK8EssAAAAAB-R5wUOej0apHMJrN4VhixbkJke"
          strategy="afterInteractive"
        />

        {/* Google Analytics + Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4M0SQ0VYEM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4M0SQ0VYEM');
            gtag('config', 'AW-396350967');
          `}
        </Script>

        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1187663253533257');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1187663253533257&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* EqualWeb ADA Accessibility Widget */}
        <Script
          id="equalweb-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.interdeal = {
                "sitekey": "e8db0802a942cc77a0d754b2efdab90d",
                "Position": "left",
                "domains": {
                  "js": "https://cdn.equalweb.com/",
                  "acc": "https://access.equalweb.com/"
                },
                "Menulang": "EN",
                "btnStyle": {
                  "vPosition": ["50%", "80%"],
                  "scale": ["0.5", "0.5"],
                  "color": {
                    "main": "#af610e",
                    "second": "#ffffff"
                  },
                  "icon": {
                    "outline": false,
                    "type": 2,
                    "shape": "semicircle"
                  }
                }
              };
            `,
          }}
        />
        <Script
          id="equalweb-core"
          src="https://cdn.equalweb.com/core/5.1.2/accessibility.js"
          strategy="afterInteractive"
          integrity="sha512-PUyQFF3HFjRiVfjOiFFu+RTc0nGmLV5FN3CVw8zWFK6pVbWPAEKy9X2bTUn10GNu1EbxN56MuWu0P8ZHC6xv3Q=="
          crossOrigin="anonymous"
          data-cfasync="true"
        />

        {/* Google Ads Conversion Tracking */}
        <Script id="google-ads-conversion" strategy="afterInteractive">
          {`
            document.addEventListener('click', function(e) {
              if (e.target.closest('button') && e.target.closest('button').innerText.includes("REQUEST SERVICE")) {
                setTimeout(function () {
                  var textToTrack = "Request submitted successfully! We'll contact you soon.";
                  if (document.body.textContent.includes(textToTrack)) {
                    gtag('event', 'conversion', {'send_to': 'AW-396350967/F3CuCNuwrfEaEPer_7wB'});
                  }
                }, 3000);
              }
            });
          `}
        </Script>
      </body>
    </html>
  );
}
