"use client";

import DesignScale from "@/components/services/DesignScale";
import Cta from "@/components/services/solar/cta";
import EndToEnd from "@/components/services/solar/end-to-end";
import Faq from "@/components/services/solar/faq";
import SolarFooterCta from "@/components/services/solar/footer";
import Hero from "@/components/services/solar/hero";
import SolarHowWeDeliver from "@/components/services/solar/SolarHowWeDeliver";
import Why from "@/components/services/solar/why";
import { TrustedSectorsSection } from "@/components/trusted-sectors/TrustedSectorsSection";
import { ServiceEnquiryProvider } from "@/components/services/ServiceEnquiryProvider";
import { SOLAR_ENQUIRY_CONFIG } from "@/components/services/serviceEnquiryConfigs";

export function SolarPage() {
  return (
    <ServiceEnquiryProvider config={SOLAR_ENQUIRY_CONFIG}>
      <main className="solar-service-page flex flex-1 flex-col overflow-x-hidden bg-white">
        <DesignScale>
          <Hero />
          <EndToEnd />
        </DesignScale>
        <Why />
        <DesignScale>
          <Cta />
          <SolarHowWeDeliver />
          <TrustedSectorsSection variant="services" />
          <Faq />
          <SolarFooterCta />
        </DesignScale>
      </main>
    </ServiceEnquiryProvider>
  );
}
