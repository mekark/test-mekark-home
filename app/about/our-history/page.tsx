import { Suspense } from "react";
import type { Metadata } from "next";
import { OurHistoryPage } from "@/components/about/history/OurHistoryPage";
import { EnquirySection } from "@/components/enquiry/EnquirySection";
import { FooterSection } from "@/components/footer/FooterSection";

export const metadata: Metadata = {
  title: "Our History — Mekark",
  description:
    "From a small fabrication unit in 1998 to a 1500+ member EPC turnkey solutions provider — the story of three generations building Mekark together.",
};

export default function OurHistoryRoute() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <OurHistoryPage />
      <Suspense fallback={null}>
        <EnquirySection />
      </Suspense>
      <FooterSection />
    </div>
  );
}
