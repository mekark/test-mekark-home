"use client";

import DesignScale from "@/components/services/DesignScale";
import BuildingSolutions from "@/components/services/multi-storey/BuildingSolutions";
import FAQ from "@/components/services/multi-storey/FAQ";
import Hero from "@/components/services/multi-storey/Hero";
import HowWeDeliver from "@/components/services/multi-storey/HowWeDeliver";
import ProjectDelivery from "@/components/services/multi-storey/ProjectDelivery";
import ReadyToBuild from "@/components/services/multi-storey/ReadyToBuild";
import Solutions from "@/components/services/multi-storey/Solutions";
import TrustedSectors from "@/components/services/multi-storey/TrustedSectors";
import WhyChooseMekark from "@/components/services/multi-storey/WhyChooseMekark";
import { ServiceEnquiryProvider } from "@/components/services/ServiceEnquiryProvider";
import { MULTI_STOREY_ENQUIRY_CONFIG } from "@/components/services/serviceEnquiryConfigs";

export function MultiStoreyPage() {
  return (
    <ServiceEnquiryProvider config={MULTI_STOREY_ENQUIRY_CONFIG}>
      <main className="multi-storey-service-page flex flex-1 flex-col bg-white">
        <DesignScale>
          <Hero />
          <Solutions />
          <WhyChooseMekark />
          <BuildingSolutions />
          <ProjectDelivery />
          <HowWeDeliver />
          <TrustedSectors />
          <FAQ />
          <ReadyToBuild />
        </DesignScale>
      </main>
    </ServiceEnquiryProvider>
  );
}
