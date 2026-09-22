"use client";

import { LogisticsHeroBanner } from "@/components/industries/fmcg/logistics-hero";
import { OurSolutionsSection } from "@/components/industries/fmcg/our-solutions";
import {
  FmcgFacilityCtaSection,
  ManufacturingSolutionsSection,
  QuoteRequestBanner,
} from "@/components/industries/fmcg/fmcg-facility-cta";
import { ProjectExecutionProcessSection } from "@/components/industries/fmcg/project-execution-process";
import { FaqSection } from "@/components/industries/fmcg/faq";
import { FMCG_ENQUIRY_CONFIG } from "@/components/industries/industryEnquiryConfigs";
import DesignScale from "@/components/services/DesignScale";
import { ServiceEnquiryProvider } from "@/components/services/ServiceEnquiryProvider";

export function FmcgPage() {
  return (
    <ServiceEnquiryProvider config={FMCG_ENQUIRY_CONFIG}>
      <main className="fmcg-industry-page flex flex-1 flex-col overflow-x-clip bg-white">
        <DesignScale mode="ultrawide">
          <LogisticsHeroBanner />
          <OurSolutionsSection />
          <FmcgFacilityCtaSection />
          <ManufacturingSolutionsSection />
          <ProjectExecutionProcessSection />
          <FaqSection />
          <QuoteRequestBanner />
        </DesignScale>
      </main>
    </ServiceEnquiryProvider>
  );
}
