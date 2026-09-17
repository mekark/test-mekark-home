import type { Metadata } from "next";
import { FmcgPage } from "@/components/industries/fmcg/FmcgPage";
import { FooterSection } from "@/components/footer/FooterSection";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "FMCG Manufacturing Facility Construction | Mekark",
  description:
    "Mekark builds turnkey FMCG manufacturing facilities with civil, structural, MEP, HVAC, hygienic interiors and warehousing across South India.",
  pathname: "/industries/fmcg",
});

export default function FmcgIndustryPage() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <FmcgPage />
      <FooterSection />
    </div>
  );
}
