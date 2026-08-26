import { Suspense } from "react";
import type { Metadata } from "next";
import { LifeAtMekarkPage } from "@/components/about/life-at-mekark/LifeAtMekarkPage";
import { EnquirySection } from "@/components/enquiry/EnquirySection";
import { FooterSection } from "@/components/footer/FooterSection";

export const metadata: Metadata = {
  title: "Life at Mekark — Mekark",
  description:
    "A glimpse into the people, moments, and everyday hustle that make Mekark what it is — explore our culture, team moments, and what makes working here special.",
};

export default function LifeAtMekarkRoute() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <LifeAtMekarkPage />
      <Suspense fallback={null}>
        <EnquirySection />
      </Suspense>
      <FooterSection />
    </div>
  );
}
