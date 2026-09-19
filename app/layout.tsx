import type { Metadata, Viewport } from "next";
import {
  Geist,
  Inter,
  Manrope,
  Montserrat,
  Montserrat_Alternates,
} from "next/font/google";
import { ConsentAwareScripts, DirectSiteScripts } from "@/components/cookie-consent/ConsentAwareScripts";
import { CookieConsentBanner } from "@/components/cookie-consent/CookieConsentBanner";
import { CookieConsentProvider } from "@/components/cookie-consent/CookieConsentProvider";
import { ArrowTop } from "@/components/ui/ArrowTop";
import { NavigationLoadingProvider } from "@/components/ui/NavigationLoadingProvider";
import { Navbar } from "@/components/navbar/Navbar";
import { LEGAL_AND_COOKIE_CONSENT_ENABLED } from "@/lib/feature-flags";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter-family",
  subsets: ["latin"],
  weight: ["500"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const montserratAlternates = Montserrat_Alternates({
  variable: "--font-montserrat-alternates",
  subsets: ["latin"],
  weight: ["800"],
});

const geistMono = Geist({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mekark.com"),
  title: "Industrial EPC Contractor & Turnkey Construction Company | Mekark",
  description:
    "Mekark is a turnkey industrial EPC solutions provider delivering end-to-end design, engineering, construction, PEB, MEP and industrial infrastructure solutions across India.",
  icons: {
    icon: "/images/LogoMekark.webp",
    apple: "/images/LogoMekark.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${manrope.variable} ${inter.variable} ${montserrat.variable} ${montserratAlternates.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CookieConsentProvider>
          {LEGAL_AND_COOKIE_CONSENT_ENABLED ? (
            <ConsentAwareScripts />
          ) : (
            <DirectSiteScripts />
          )}
          <NavigationLoadingProvider>
            <Navbar />
            {children}
            <ArrowTop />
          </NavigationLoadingProvider>
          {LEGAL_AND_COOKIE_CONSENT_ENABLED ? <CookieConsentBanner /> : null}
        </CookieConsentProvider>
      </body>
    </html>
  );
}
