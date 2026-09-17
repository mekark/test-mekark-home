import type { Metadata } from "next";
import { PharmaPage } from "@/components/industries/pharma/PharmaPage";
import { FooterSection } from "@/components/footer/FooterSection";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Pharmaceutical Manufacturing Facility Construction | Mekark",
  description:
    "Mekark builds turnkey pharmaceutical manufacturing facilities with cleanrooms, sterile plants, API units, MEP, HVAC and cold-chain infrastructure.",
  pathname: "/industries/pharma",
});

export default function PharmaIndustryPage() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <PharmaPage />
      <FooterSection />
    </div>
  );
}
