import type { Metadata } from "next";
import { MultiStoreyPage } from "@/components/services/multi-storey/MultiStoreyPage";
import { FooterSection } from "@/components/footer/FooterSection";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Multi Storey Steel Building Construction Company | Mekark",
  description:
    "Build commercial and industrial multi storey steel buildings with Mekark. End-to-end design, fabrication, construction and turnkey solutions.",
  pathname: "/services/multi-storey",
});

export default function MultiStoreyServicePage() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <MultiStoreyPage />
      <FooterSection />
    </div>
  );
}
