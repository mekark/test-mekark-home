import type { Metadata } from "next";
import { TextilePage } from "@/components/industries/textile/TextilePage";
import { FooterSection } from "@/components/footer/FooterSection";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Textile Factory Construction Company in South India | Mekark",
  description:
    "Mekark provides turnkey textile factory construction for spinning mills, weaving, garment, dyeing and processing plants across South India.",
  pathname: "/industries/textile",
});

export default function TextileIndustryPage() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <TextilePage />
      <FooterSection />
    </div>
  );
}
