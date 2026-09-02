"use client";

import DesignScale from "@/components/services/DesignScale";
import CtaBanner from "@/components/services/mep/CtaBanner";
import EndToEnd from "@/components/services/mep/EndToEnd";
import FaqSection from "@/components/services/mep/FaqSection";
import Hero from "@/components/services/mep/Hero";
import HowWeDeliver from "@/components/services/mep/HowWeDeliver";
import IndustrialMepSolutions from "@/components/services/mep/IndustrialMepSolutions";
import ReadyToStart from "@/components/services/mep/ReadyToStart";
import TrustedSectors from "@/components/services/mep/TrustedSectors";
import WhyChooseMekark from "@/components/services/mep/WhyChooseMekark";

export function MepPage() {
  return (
    <main className="mep-service-page flex flex-1 flex-col overflow-x-hidden bg-white">
      <DesignScale>
        <Hero />
        <EndToEnd />
        <WhyChooseMekark />
        <IndustrialMepSolutions />
        <CtaBanner />
        <HowWeDeliver />
        <TrustedSectors />
        <FaqSection />
        <ReadyToStart />
      </DesignScale>
    </main>
  );
}
