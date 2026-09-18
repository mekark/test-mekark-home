"use client";

import TextileHero from "@/components/industries/textile/HeroSection";
import TextileBuildSection from "@/components/industries/textile/BuildSection";
import TextileWhyMekark from "@/components/industries/textile/WhyMekarkSection";
import TextileManufacturingFacilities from "@/components/industries/textile/ManufacturingFacilitiesSection";
import TextileExecutionProcess from "@/components/industries/textile/ExecutionProcessSection";
import TextileFaq from "@/components/industries/textile/Faq";
import TextileFooterCta from "@/components/industries/textile/FooterCta";
import { TEXTILE_ENQUIRY_CONFIG } from "@/components/industries/industryEnquiryConfigs";
import { ServiceEnquiryProvider } from "@/components/services/ServiceEnquiryProvider";

export function TextilePage() {
  return (
    <ServiceEnquiryProvider config={TEXTILE_ENQUIRY_CONFIG}>
      <main className="textile-industry-page flex flex-1 flex-col overflow-x-clip bg-white">
        <TextileHero />
        <TextileBuildSection />
        <TextileWhyMekark />
        <TextileManufacturingFacilities />
        <TextileExecutionProcess />
        <TextileFaq />
        <TextileFooterCta />
      </main>
    </ServiceEnquiryProvider>
  );
}
