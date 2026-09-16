import type { Metadata, Viewport } from "next";
import Script from "next/script";
import {
  Geist,
  Inter,
  Manrope,
  Montserrat,
  Montserrat_Alternates,
} from "next/font/google";
import { ArrowTop } from "@/components/ui/ArrowTop";
import { NavigationLoadingProvider } from "@/components/ui/NavigationLoadingProvider";
import { Navbar } from "@/components/navbar/Navbar";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
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
  title: "Mekark | End-to-End Industrial EPC Services & Project Solutions",
  description:
    "Mekark is an industrial EPC service provider with 18+ years of experience delivering factories, pre-engineered buildings & large-span structures end-to-end. Get in touch.",
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
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];
            w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5SBMM86H');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5SBMM86H"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>
        <NavigationLoadingProvider>
          <Navbar />
          {children}
          <ArrowTop />
        </NavigationLoadingProvider>
        <Script id="tawk-to" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            Tawk_API.customStyle = {
              visibility: {
                desktop: { position: 'br', xOffset: 32, yOffset: 20 },
                mobile: { position: 'br', xOffset: 20, yOffset: 20 }
              }
            };
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/69fd7e65427c251c368c1e92/1jo33bfff';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
