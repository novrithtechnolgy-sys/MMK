import type { Metadata } from "next";
import {Poppins, Unbounded } from "next/font/google";
import Footer from "./components/Footer";
import "./globals.css";
import Script from "next/script";
import CookieButton from "./components/CookieButton";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["200","300","400","500","600","700","800","900"],
});



export const metadata = {
  metadataBase: new URL("https://marketmykeys.com"),

  title: {
    default: "MarketMyKeys | Real Estate Photography & Cinematic Tours",
    template: "%s",
  },

  description:
    "Premium real estate photography, interior photography, drone imaging, and cinematic video tours in Sri Lanka.",

  keywords: [
    "real estate photography sri lanka",
    "interior photography",
    "drone photography sri lanka",
    "cinematic real estate videos",
    "property photography sri lanka",
  ],

  openGraph: {
    type: "website",
    url: "https://marketmykeys.com",
    siteName: "MarketMyKeys",
    title: "MarketMyKeys — Real Estate Photography & Cinematic Videos",
    description:
      "High-end real estate visuals including photos, drone shots, 360 tours, and cinematic walkthroughs.",
    images: [
      {
        url: "https://res.cloudinary.com/dgm9hbcb1/image/upload/v1765015733/zobsdm9fl4lia5svioqy.png",
        width: 1200,
        height: 630,
        alt: "MarketMyKeys Real Estate Photography",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "MarketMyKeys | Real Estate Photography",
    description:
      "Capture your property with premium real estate photography & video tours.",
    images: ["https://res.cloudinary.com/dgm9hbcb1/image/upload/v1765015733/zobsdm9fl4lia5svioqy.png"],
  },

  icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon" },
    { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      {/* Load Termly client-side only */}
      <Script
        strategy="afterInteractive"
        src="https://app.termly.io/embed.min.js"
        data-auto-block="off"
        data-website-uuid="7ab46f4c-621c-4de7-b860-bc69e2a9d53b"
      />
      </head>
      <body
        className={`${poppins.variable} ${unbounded.variable} antialiased`}
      >
        {children}
      </body>
      <Footer />
      {/* ✅ Hidden trigger Termly needs */}
        <a href="#" className="termly-display-preferences hidden">
          Consent Preferences
        </a>
    </html>
  );
}
