import type { Metadata } from "next";
import { FmcgPage } from "@/components/industries/fmcg/FmcgPage";
import { FooterSection } from "@/components/footer/FooterSection";

export const metadata: Metadata = {
  title: "FMCG Manufacturing Facility Construction in South India | Mekark",
  description:
    "Mekark builds turnkey FMCG manufacturing plants, warehousing, and hygienic production facilities for packaged food, personal care, and home care across South India.",
};

export default function FmcgIndustryPage() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <FmcgPage />
      <FooterSection />
    </div>
  );
}
