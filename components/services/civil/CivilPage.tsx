"use client";

import CivilSolutions from "@/components/services/civil/CivilSolutions/CivilSolutions";
import ConstructionProcess from "@/components/services/civil/ConstructionProcess/ConstructionProcess";
import DesignScale from "@/components/services/civil/DesignScale/DesignScale";
import Faq from "@/components/services/civil/Faq/Faq";
import FooterCta from "@/components/services/civil/FooterCta/FooterCta";
import Hero from "@/components/services/civil/Hero/Hero";
import PlanningCta from "@/components/services/civil/PlanningCta/PlanningCta";
import TrustedSectors from "@/components/services/civil/TrustedSectors/TrustedSectors";
import WhyChooseMekark from "@/components/services/civil/WhyChooseMekark/WhyChooseMekark";
import WhyClientsChooseMekark from "@/components/services/civil/WhyClientsChooseMekark/WhyClientsChooseMekark";
import { ServiceEnquiryProvider } from "@/components/services/ServiceEnquiryProvider";
import { CIVIL_ENQUIRY_CONFIG } from "@/components/services/serviceEnquiryConfigs";

export function CivilPage() {
  return (
    <ServiceEnquiryProvider config={CIVIL_ENQUIRY_CONFIG}>
      <main className="civil-service-page flex flex-1 flex-col bg-white">
        <DesignScale>
          <Hero />
          <WhyChooseMekark />
          <WhyClientsChooseMekark />
          <CivilSolutions />
          <PlanningCta />
          <ConstructionProcess />
          <TrustedSectors />
          <Faq />
          <FooterCta />
        </DesignScale>
      </main>
    </ServiceEnquiryProvider>
  );
}
