"use client";

import { ServiceFooterCta } from "@/components/services/ServiceFooterCta";
import { useTensileEnquiry } from "@/components/services/tensile/TensileEnquiryProvider";

export default function Section() {
  const { openEnquiry } = useTensileEnquiry();

  return (
    <ServiceFooterCta
      title="Ready to Start Your Tensile Structure Project?"
      subtitle="Talk to Mekark's tensile team today for a free consultation and project quote."
      onQuoteClick={openEnquiry}
      scaledCanvas
      subtitleSingleLine
    />
  );
}
