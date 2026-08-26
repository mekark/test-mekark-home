import { Suspense } from "react";
import type { Metadata } from "next";
import { InstitutionalPage } from "@/components/institutional/InstitutionalPage";
import { EnquirySection } from "@/components/enquiry/EnquirySection";
import { FooterSection } from "@/components/footer/FooterSection";

export const metadata: Metadata = {
  title: "Institutional Construction — Auditoriums & Stadiums | Mekark",
  description:
    "Mekark delivers auditoriums, indoor sports stadiums, outdoor stadium structures, tensile roofing, and community halls across South India.",
};

export default function InstitutionalRoute() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <InstitutionalPage />
      <div id="institutional-enquiry" className="scroll-mt-24">
        <Suspense fallback={null}>
          <EnquirySection />
        </Suspense>
      </div>
      <FooterSection />
    </div>
  );
}
