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
      <body
        className={`${dancingScript.variable} ${spaceMono.variable} antialiased`}
      >
        {children}

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
