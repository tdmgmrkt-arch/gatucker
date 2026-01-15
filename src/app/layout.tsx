import { Dancing_Script, Space_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

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
        <meta name="google-site-verification" content="pzONJWnaDXpKm02ynxCvlOeza4l6lrt2tE4YD4cOEEY" />
      </head>
      <body
        className={`${dancingScript.variable} ${spaceMono.variable} antialiased`}
      >
        {children}

        {/* reCAPTCHA Enterprise */}
        <Script
          src="https://www.google.com/recaptcha/enterprise.js?render=6LcMW0QsAAAAAH5CNz1Xt0yG2GSgfHqBpqK90N11"
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
      </body>
    </html>
  );
}
