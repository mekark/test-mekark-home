import type { Metadata } from "next";
import { ElectronicsPage } from "@/components/industries/electronics/ElectronicsPage";
import { FooterSection } from "@/components/footer/FooterSection";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Electronics Manufacturing Facility Construction | Mekark",
  description:
    "Mekark provides electronics manufacturing facility construction with industrial building, civil, MEP, cleanroom and turnkey EPC solutions.",
  pathname: "/industries/electronics",
});

export default function ElectronicsIndustryPage() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <ElectronicsPage />
      <FooterSection />
    </div>
  );
}
