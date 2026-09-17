import type { Metadata } from "next";
import { LogisticsPage } from "@/components/industries/logistics/LogisticsPage";
import { FooterSection } from "@/components/footer/FooterSection";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Warehouse Construction Company in Chennai | Mekark",
  description:
    "Mekark is a warehouse construction company in Chennai offering turnkey warehouse, industrial, logistics and PEB building construction solutions.",
  pathname: "/industries/logistics-and-warehouse",
});

export default function LogisticsIndustryPage() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <LogisticsPage />
      <FooterSection />
    </div>
  );
}
