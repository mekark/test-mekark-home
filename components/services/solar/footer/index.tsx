"use client";

import { ServiceFooterCta } from "@/components/services/ServiceFooterCta";
import { useServiceEnquiry } from "@/components/services/ServiceEnquiryProvider";

export default function SolarFooterCta() {
  const { openEnquiry } = useServiceEnquiry();

  return (
    <ServiceFooterCta
      title="Ready to Start Your Commercial Solar Project?"
      subtitle="Talk to Mekark's solar team today for a free consultation and project quote."
      onQuoteClick={openEnquiry}
      scaledCanvas
      subtitleSingleLine
    />
  );
}
