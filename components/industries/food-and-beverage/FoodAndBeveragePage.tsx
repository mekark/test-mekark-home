"use client";

import FoodBeverageHero from "@/components/industries/food-and-beverage/hero/hero";
import FoodBeverageSolutions from "@/components/industries/food-and-beverage/complete-food-beverage/complete-food-beverage";
import FoodBeverageCta from "@/components/industries/food-and-beverage/cta/CTA";
import FoodBeverageFacilities from "@/components/industries/food-and-beverage/solutions/Solutions";
import FoodBeverageProcess from "@/components/industries/food-and-beverage/process/process";
import FoodBeverageFaq from "@/components/industries/food-and-beverage/faq/faq";
import FoodBeverageFooterCta from "@/components/industries/food-and-beverage/footer/footer";
import { FOOD_AND_BEVERAGE_ENQUIRY_CONFIG } from "@/components/industries/industryEnquiryConfigs";
import DesignScale from "@/components/services/DesignScale";
import { ServiceEnquiryProvider } from "@/components/services/ServiceEnquiryProvider";

export function FoodAndBeveragePage() {
  return (
    <ServiceEnquiryProvider config={FOOD_AND_BEVERAGE_ENQUIRY_CONFIG}>
      <main className="food-and-beverage-industry-page flex flex-1 flex-col overflow-x-clip bg-white">
        <DesignScale mode="ultrawide">
          <FoodBeverageHero />
          <FoodBeverageSolutions />
          <FoodBeverageCta />
          <FoodBeverageFacilities />
          <FoodBeverageProcess />
          <FoodBeverageFaq />
          <FoodBeverageFooterCta />
        </DesignScale>
      </main>
    </ServiceEnquiryProvider>
  );
}
