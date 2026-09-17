import type { Metadata } from "next";
import { PebPage } from "@/components/services/peb/PebPage";
import { FooterSection } from "@/components/footer/FooterSection";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "PEB Manufacturer in Chennai | Pre Engineered Building | Mekark",
  description:
    "Leading PEB manufacturer in Chennai for industrial steel buildings, pre-engineered structures and turnkey PEB construction solutions.",
  pathname: "/services/peb",
});

export default function PebServicePage() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <PebPage />
      <FooterSection />
    </div>
  );
}
