import FoodBeverageHero from "@/components/industries/food-and-beverage/hero/hero";
import FoodBeverageSolutions from "@/components/industries/food-and-beverage/complete-food-beverage/complete-food-beverage";
import FoodBeverageCta from "@/components/industries/food-and-beverage/cta/CTA";
import FoodBeverageFacilities from "@/components/industries/food-and-beverage/solutions/Solutions";
import FoodBeverageProcess from "@/components/industries/food-and-beverage/process/process";
import FoodBeverageFaq from "@/components/industries/food-and-beverage/faq/faq";
import FoodBeverageFooterCta from "@/components/industries/food-and-beverage/footer/footer";

export function FoodAndBeveragePage() {
  return (
    <main className="food-and-beverage-industry-page flex flex-1 flex-col overflow-x-clip bg-white">
      <FoodBeverageHero />
      <FoodBeverageSolutions />
      <FoodBeverageCta />
      <FoodBeverageFacilities />
      <FoodBeverageProcess />
      <FoodBeverageFaq />
      <FoodBeverageFooterCta />
    </main>
  );
}
