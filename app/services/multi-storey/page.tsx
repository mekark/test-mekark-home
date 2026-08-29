import { Suspense } from "react";
import type { Metadata } from "next";
import { MultiStoreyPage } from "@/components/services/multi-storey/MultiStoreyPage";
import { EnquirySection } from "@/components/enquiry/EnquirySection";
import { FooterSection } from "@/components/footer/FooterSection";

export const metadata: Metadata = {
  title: "Multi-Storey Building Manufacturer in Chennai | Mekark",
  description:
    "Mekark is Chennai's trusted multi-storey steel building manufacturer. Turnkey PEB construction for factories, offices & warehouses. Get a free quote.",
};

export default function MultiStoreyServicePage() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <MultiStoreyPage />
      <Suspense fallback={null}>
        <EnquirySection />
      </Suspense>
      <FooterSection />
    </div>
  );
}
