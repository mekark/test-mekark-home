import { Suspense } from "react";
import type { Metadata } from "next";
import { CivilPage } from "@/components/services/civil/CivilPage";
import { EnquirySection } from "@/components/enquiry/EnquirySection";
import { FooterSection } from "@/components/footer/FooterSection";

export const metadata: Metadata = {
  title: "Civil Construction Company in Chennai | Mekark",
  description:
    "Mekark is Chennai's leading civil construction & RCC contractor. Turnkey solutions for factories, warehouses & commercial buildings. Get a free quote.",
};

export default function CivilServicePage() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <CivilPage />
      <Suspense fallback={null}>
        <EnquirySection />
      </Suspense>
      <FooterSection />
    </div>
  );
}
