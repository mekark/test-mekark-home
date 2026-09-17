import type { Metadata } from "next";
import { DataCenterPage } from "@/components/industries/data-center/DataCenterPage";
import { FooterSection } from "@/components/footer/FooterSection";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Data Centre Construction Company in South India | Mekark",
  description:
    "Mekark builds turnkey data centres across South India with civil, structural, MEP, precision cooling, power and white-space infrastructure.",
  pathname: "/industries/data-center",
});

export default function DataCenterIndustryPage() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <DataCenterPage />
      <FooterSection />
    </div>
  );
}
