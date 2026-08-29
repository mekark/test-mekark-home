import { Suspense } from "react";
import type { Metadata } from "next";
import { MepPage } from "@/components/services/mep/MepPage";
import { EnquirySection } from "@/components/enquiry/EnquirySection";
import { FooterSection } from "@/components/footer/FooterSection";

export const metadata: Metadata = {
  title: "Industrial MEP Contractor in Chennai | Mekark",
  description:
    "Mekark is Chennai's leading industrial MEP contractor. Turnkey HVAC, electrical, plumbing & fire-fighting solutions for factories & plants. Get a free quote.",
};

export default function MepServicePage() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <MepPage />
      <Suspense fallback={null}>
        <EnquirySection />
      </Suspense>
      <FooterSection />
    </div>
  );
}
