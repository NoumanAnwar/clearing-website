import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import FooterSections from "./components/FooterSections";
import WhatsappButton from "./components/WhatsappButton";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 🔥 FULL SEO-OPTIMIZED METADATA
export const metadata: Metadata = {
  title: "Clearing & Forwarding Services in Pakistan | Customs Clearance Karachi",
  description:
    "Professional customs clearing and forwarding company in Pakistan. We provide fast GD filing, import/export clearance, freight forwarding, documentation, and logistics services at Karachi Port & Port Qasim.",
  keywords: [
    "customs clearing agent pakistan",
    "clearing and forwarding karachi",
    "freight forwarder pakistan",
    "customs clearance karachi port",
    "import export clearance pakistan",
    "logistics company pakistan",
    "karachi customs agent",
    "port qasim clearing agent"
  ],
  robots: "index, follow",
  authors: [{ name: "Your Company Name" }],
  creator: "Your Company Name",
  publisher: "Your Company Name",

  // SOCIAL SHARE OPTIMIZATION
  openGraph: {
    title: "Leading Clearing & Forwarding Company in Pakistan",
    description:
      "Fast & reliable customs clearance, freight forwarding, and logistics services across Karachi Port & Port Qasim.",
    url: "https://yourdomain.com",
    siteName: "Clearing & Forwarding Pakistan",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Clearing & Forwarding Pakistan",
      },
    ],
    locale: "en_PK",
    type: "website",
  },

  // TWITTER CARD (X)
  twitter: {
    card: "summary_large_image",
    title: "Clearing & Forwarding Services in Pakistan",
    description:
      "Reliable customs clearing & forwarding solutions for Karachi Port and Port Qasim.",
    images: ["https://yourdomain.com/og-image.jpg"],
  },

  // BASIC SETTINGS
  alternates: {
    canonical: "https://yourdomain.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* 📌 Structured Data for Local Business (SEO Boost) */}
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap');

            /* Example classes for different weights */
            .orbitron-400 { font-family: "Orbitron", sans-serif; font-weight: 400; font-style: normal; }
            .orbitron-500 { font-family: "Orbitron", sans-serif; font-weight: 500; font-style: normal; }
            .orbitron-600 { font-family: "Orbitron", sans-serif; font-weight: 600; font-style: normal; }
            .orbitron-700 { font-family: "Orbitron", sans-serif; font-weight: 700; font-style: normal; }
            .orbitron-800 { font-family: "Orbitron", sans-serif; font-weight: 800; font-style: normal; }
            .orbitron-900 { font-family: "Orbitron", sans-serif; font-weight: 900; font-style: normal; }
          `}
        </style>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Your Clearing & Forwarding Company",
              description:
                "Expert customs clearing and forwarding services in Pakistan including GD filing, freight forwarding, and logistics.",
              url: "https://yourdomain.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Your Street Address",
                addressLocality: "Karachi",
                addressCountry: "PK",
              },
              telephone: "+92-300-0000000",
              areaServed: {
                "@type": "Country",
                name: "Pakistan",
              },
              sameAs: [
                "https://facebook.com/yourpage",
                "https://linkedin.com/yourcompany",
              ],
            }),
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-800`}
      >
        <Navbar/>
        {children}
        <WhatsappButton/>
        <FooterSections/>
      </body>
    </html>
  );
}
