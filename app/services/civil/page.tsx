import type { Metadata } from "next";
import { CivilPage } from "@/components/services/civil/CivilPage";
import { FooterSection } from "@/components/footer/FooterSection";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Industrial Civil Construction Company in Chennai | Mekark",
  description:
    "Industrial civil construction company in Chennai specializing in factory civil works, RCC, foundations, concrete structures and industrial projects.",
  pathname: "/services/civil",
});

export default function CivilServicePage() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <CivilPage />
      <FooterSection />
    </div>
  );
}
