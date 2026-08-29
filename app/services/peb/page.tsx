import { Suspense } from "react";
import type { Metadata } from "next";
import { PebPage } from "@/components/services/peb/PebPage";
import { EnquirySection } from "@/components/enquiry/EnquirySection";
import { FooterSection } from "@/components/footer/FooterSection";

export const metadata: Metadata = {
  title: "PEB Contractor & Manufacturer in Tamil Nadu | Mekark",
  description:
    "Mekark is Tamil Nadu's leading PEB contractor & manufacturer. Turnkey steel building solutions for factories, warehouses & industrial plants. Get a free quote.",
};

export default function PebServicePage() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <PebPage />
      <Suspense fallback={null}>
        <EnquirySection />
      </Suspense>
      <FooterSection />
    </div>
  );
}
