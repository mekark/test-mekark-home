"use client";

import DesignScale from "@/components/services/DesignScale";
import BuildCTA from "@/components/services/peb/BuildCTA";
import EndToEndPEB from "@/components/services/peb/EndToEndPEB";
import FAQ from "@/components/services/peb/FAQ";
import Hero from "@/components/services/peb/Hero";
import OurPEBSolutions from "@/components/services/peb/OurPEBSolutions";
import TrustedSectors from "@/components/services/peb/TrustedSectors";
import WhyChooseMekark from "@/components/services/peb/WhyChooseMekark";
import { ServiceEnquiryProvider } from "@/components/services/ServiceEnquiryProvider";
import { PEB_ENQUIRY_CONFIG } from "@/components/services/serviceEnquiryConfigs";

export function PebPage() {
  return (
    <ServiceEnquiryProvider config={PEB_ENQUIRY_CONFIG}>
      <main className="peb-service-page m-0 flex w-full flex-col bg-white p-0">
        <DesignScale>
          <Hero />
          <EndToEndPEB />
          <WhyChooseMekark />
          <OurPEBSolutions />
          <TrustedSectors />
          <FAQ />
          <BuildCTA />
        </DesignScale>
      </main>
    </ServiceEnquiryProvider>
  );
}
