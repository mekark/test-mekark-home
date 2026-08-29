import type { Metadata } from "next";
import { FoodAndBeveragePage } from "@/components/industries/food-and-beverage/FoodAndBeveragePage";
import { FooterSection } from "@/components/footer/FooterSection";

export const metadata: Metadata = {
  title:
    "Food & Beverage Manufacturing Facility Construction in South India | Mekark",
  description:
    "Mekark builds turnkey food processing plants, beverage bottling facilities, dairy units, and HACCP-compliant cold storage infrastructure across South India.",
};

export default function FoodAndBeverageIndustryPage() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <FoodAndBeveragePage />
      <FooterSection />
    </div>
  );
}
