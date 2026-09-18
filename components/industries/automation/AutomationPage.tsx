"use client";

import LogisticsHeroBanner from "@/components/industries/automation/LogisticsHeroBanner";
import OurSolutionsSection from "@/components/industries/automation/OurSolutionsSection";
import WhyMekarkSection from "@/components/industries/automation/WhyMekarkSection";
import AutomationFacilitiesSection from "@/components/industries/automation/AutomationFacilitiesSection";
import AutomationFacilityProcessSection from "@/components/industries/automation/AutomationFacilityProcessSection";
import AutomationFaqSection from "@/components/industries/automation/AutomationFaqSection";
import AutomationQuoteCtaSection from "@/components/industries/automation/AutomationQuoteCtaSection";
import { AUTOMATION_ENQUIRY_CONFIG } from "@/components/industries/industryEnquiryConfigs";
import { ServiceEnquiryProvider } from "@/components/services/ServiceEnquiryProvider";

export function AutomationPage() {
  return (
    <ServiceEnquiryProvider config={AUTOMATION_ENQUIRY_CONFIG}>
      <main className="automation-industry-page flex flex-1 flex-col overflow-x-clip bg-white">
        <LogisticsHeroBanner />
        <OurSolutionsSection />
        <WhyMekarkSection />
        <AutomationFacilitiesSection />
        <AutomationFacilityProcessSection />
        <AutomationFaqSection />
        <AutomationQuoteCtaSection />
      </main>
    </ServiceEnquiryProvider>
  );
}
