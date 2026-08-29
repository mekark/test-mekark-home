"use client";

import BuildingSolutions from "@/components/services/multi-storey/BuildingSolutions";
import FAQ from "@/components/services/multi-storey/FAQ";
import Hero from "@/components/services/multi-storey/Hero";
import HowWeDeliver from "@/components/services/multi-storey/HowWeDeliver";
import ProjectDelivery from "@/components/services/multi-storey/ProjectDelivery";
import ReadyToBuild from "@/components/services/multi-storey/ReadyToBuild";
import Solutions from "@/components/services/multi-storey/Solutions";
import TrustedSectors from "@/components/services/multi-storey/TrustedSectors";
import WhyChooseMekark from "@/components/services/multi-storey/WhyChooseMekark";

export function MultiStoreyPage() {
  return (
    <main className="multi-storey-service-page flex flex-1 flex-col bg-white">
      <Hero />
      <Solutions />
      <WhyChooseMekark />
      <BuildingSolutions />
      <ProjectDelivery />
      <HowWeDeliver />
      <TrustedSectors />
      <FAQ />
      <ReadyToBuild />
    </main>
  );
}
