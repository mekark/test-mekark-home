"use client";

import ElectronicsHero from "@/components/industries/electronics/HeroSection";
import ElectronicsSolutions from "@/components/industries/electronics/OurSolutionsSection";
import ElectronicsCta from "@/components/industries/electronics/CtaSection";
import ElectronicsFacilities from "@/components/industries/electronics/FacilityConstructionSection";
import ElectronicsExecutionProcess from "@/components/industries/electronics/ExecutionProcessSection";
import ElectronicsFaq from "@/components/industries/electronics/Faq";
import ElectronicsFooterCta from "@/components/industries/electronics/FooterCta";
import { ELECTRONICS_ENQUIRY_CONFIG } from "@/components/industries/industryEnquiryConfigs";
import DesignScale from "@/components/services/DesignScale";
import { ServiceEnquiryProvider } from "@/components/services/ServiceEnquiryProvider";

export function ElectronicsPage() {
  return (
    <ServiceEnquiryProvider config={ELECTRONICS_ENQUIRY_CONFIG}>
      <main className="electronics-industry-page flex flex-1 flex-col overflow-x-clip bg-white">
        <DesignScale mode="ultrawide">
          <ElectronicsHero />
          <ElectronicsSolutions />
          <ElectronicsCta />
          <ElectronicsFacilities />
          <ElectronicsExecutionProcess />
          <ElectronicsFaq />
          <ElectronicsFooterCta />
        </DesignScale>
      </main>
    </ServiceEnquiryProvider>
  );
}
