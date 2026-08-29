import { Suspense } from "react";
import type { Metadata } from "next";
import { LogisticsPage } from "@/components/industries/logistics/LogisticsPage";
import { EnquirySection } from "@/components/enquiry/EnquirySection";
import { FooterSection } from "@/components/footer/FooterSection";

export const metadata: Metadata = {
  title: "Pre-Engineered Warehouse Building Manufacturer | Mekark",
  description:
    "Mekark designs, fabricates & erects PEB warehouses, distribution centres & cold storage structures across South India. Get a free quote today.",
};

export default function LogisticsIndustryPage() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <LogisticsPage />
      <Suspense fallback={null}>
        <EnquirySection />
      </Suspense>
      <FooterSection />
    </div>
  );
}
