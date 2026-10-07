import type { Metadata, Viewport } from "next";

import { ConsentAwareScripts, DirectSiteScripts } from "@/components/cookie-consent/ConsentAwareScripts";
import { CookieConsentBanner } from "@/components/cookie-consent/CookieConsentBanner";
import { CookieConsentProvider } from "@/components/cookie-consent/CookieConsentProvider";
import { ArrowTop } from "@/components/ui/ArrowTop";
import { MotionProvider } from "@/components/ui/MotionProvider";
import { NavigationLoadingProvider } from "@/components/ui/NavigationLoadingProvider";
import { Navbar } from "@/components/navbar/Navbar";
import { PageTitleSync } from "@/components/seo/PageTitleSync";
import { LEGAL_AND_COOKIE_CONSENT_ENABLED } from "@/lib/feature-flags";
import { manrope } from "@/lib/fonts";
import "./globals.css";

export const viewport: Viewport = {

  width: "device-width",

  initialScale: 1,

};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mekark.com"),
  title: {
    absolute:
      "Industrial EPC Contractor & Turnkey Construction Company | Mekark",
  },
  description:
    "Mekark is a turnkey industrial EPC solutions provider delivering end-to-end design, engineering, construction, PEB, MEP and industrial infrastructure solutions across India.",
  icons: {
    icon: "/images/LogoMekark.webp",
    apple: "/images/LogoMekark.webp",
  },
  verification: {
    google: "rAR_zUhuNvAl7JlZMsxLNFSyu6LjvFxhoRmk9LWLOnI",
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
      className={`${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CookieConsentProvider>
          {LEGAL_AND_COOKIE_CONSENT_ENABLED ? (
            <ConsentAwareScripts />
          ) : (
            <DirectSiteScripts />
          )}
          <MotionProvider>
            <NavigationLoadingProvider>
              <PageTitleSync />
              <Navbar />
              {children}
              <ArrowTop />
            </NavigationLoadingProvider>
            {LEGAL_AND_COOKIE_CONSENT_ENABLED ? <CookieConsentBanner /> : null}
          </MotionProvider>
        </CookieConsentProvider>
      </body>
    </html>
  );
}


