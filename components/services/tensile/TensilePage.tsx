"use client";

import DesignScale from "@/components/services/DesignScale";
import Hero from "@/components/services/tensile/Hero/hero";
import Frame169 from "@/components/services/tensile/Frame169/hero";
import WhyChooseMekark from "@/components/services/tensile/WhyChooseMekark/why";
import Frame170 from "@/components/services/tensile/Frame170/frame170";
import Frame191 from "@/components/services/tensile/Frame191/frame191";
import Frame171 from "@/components/services/tensile/Frame171/frame171";
import Frame172 from "@/components/services/tensile/Frame172/frame172";
import Frame188 from "@/components/services/tensile/Frame188/frame188";
import Section from "@/components/services/tensile/Section/section";
import { TensileEnquiryProvider } from "@/components/services/tensile/TensileEnquiryProvider";

export function TensilePage() {
  return (
    <TensileEnquiryProvider>
      <main className="tensile-service-page flex flex-1 flex-col overflow-x-clip bg-white">
        <DesignScale>
          <Hero />
          <Frame169 />
          <WhyChooseMekark />
          <Frame170 />
          <Frame191 />
          <Frame171 />
          <Frame172 />
          <Frame188 />
          <Section />
        </DesignScale>
      </main>
    </TensileEnquiryProvider>
  );
}
