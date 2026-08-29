import type { Metadata } from "next";
import { DataCenterPage } from "@/components/industries/data-center/DataCenterPage";
import { FooterSection } from "@/components/footer/FooterSection";

export const metadata: Metadata = {
  title: "Data Centre Construction Company in South India | Mekark",
  description:
    "Mekark builds turnkey hyperscale, colocation, and modular data centres with Tier III/IV compliant facilities and precision cooling across South India.",
};

export default function DataCenterIndustryPage() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <DataCenterPage />
      <FooterSection />
    </div>
  );
}
