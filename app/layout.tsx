import type { Metadata } from "next";
import { Geist, Inter, Manrope, Montserrat } from "next/font/google";
import { ArrowTop } from "@/components/ui/ArrowTop";
import { Navbar } from "@/components/navbar/Navbar";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "800"],
});

const inter = Inter({
  variable: "--font-inter-family",
  subsets: ["latin"],
  weight: ["500"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400"],
});

const geistMono = Geist({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mekark — Engineered for Scale, Built for Performance",
  description:
    "Mekark is an engineering-led industrial EPC partner delivering integrated design, manufacturing, and construction solutions for complex industrial infrastructure.",
  icons: {
    icon: "/images/LogoMekark.png",
    apple: "/images/LogoMekark.png",
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
      className={`${manrope.variable} ${inter.variable} ${montserrat.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <ArrowTop />
      </body>
    </html>
  );
}
