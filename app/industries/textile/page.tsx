import type { Metadata } from "next";
import { TextilePage } from "@/components/industries/textile/TextilePage";
import { FooterSection } from "@/components/footer/FooterSection";

export const metadata: Metadata = {
  title: "Textile Factory Building Contractor in South India | Mekark",
  description:
    "Mekark builds spinning mills, weaving sheds, garment factories, and dyeing plants with ISO-certified PEB and civil construction across South India.",
};

export default function TextileIndustryPage() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <TextilePage />
      <FooterSection />
    </div>
  );
}
