import { Suspense } from "react";
import type { Metadata } from "next";
import { TensilePage } from "@/components/services/tensile/TensilePage";
import { EnquirySection } from "@/components/enquiry/EnquirySection";
import { FooterSection } from "@/components/footer/FooterSection";

export const metadata: Metadata = {
  title: "Tensile Structure Contractor in South India | Mekark",
  description:
    "Mekark designs, fabricates & installs PTFE/ETFE tensile structures across South India, car parking sheds, canopies, domes & stadium roofing. Get a free quote.",
};

export default function TensileServicePage() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <TensilePage />
      <Suspense fallback={null}>
        <EnquirySection />
      </Suspense>
      <FooterSection />
    </div>
  );
}
