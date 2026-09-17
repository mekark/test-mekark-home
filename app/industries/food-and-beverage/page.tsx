import type { Metadata } from "next";
import { FoodAndBeveragePage } from "@/components/industries/food-and-beverage/FoodAndBeveragePage";
import { FooterSection } from "@/components/footer/FooterSection";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Food & Beverage Facility Construction Company | Mekark",
  description:
    "Mekark builds turnkey food and beverage facilities with food processing, cold storage, HVAC, MEP and hygienic infrastructure across South India.",
  pathname: "/industries/food-and-beverage",
});

export default function FoodAndBeverageIndustryPage() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <FoodAndBeveragePage />
      <FooterSection />
    </div>
  );
}
