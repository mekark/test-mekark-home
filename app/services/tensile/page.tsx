import type { Metadata } from "next";
import { TensilePage } from "@/components/services/tensile/TensilePage";
import { FooterSection } from "@/components/footer/FooterSection";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Tensile Structure Manufacturer in Chennai | Mekark",
  description:
    "Leading tensile structure company in Chennai offering tensile roofing, fabric structures, car parking, canopies, PTFE and ETFE structures.",
  pathname: "/services/tensile",
});

export default function TensileServicePage() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <TensilePage />
      <FooterSection />
    </div>
  );
}
