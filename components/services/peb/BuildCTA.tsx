"use client";

import { ServiceFooterCta } from "@/components/services/ServiceFooterCta";
import { useServiceEnquiry } from "@/components/services/ServiceEnquiryProvider";

export default function BuildCTA() {
  const { openEnquiry } = useServiceEnquiry();

  return (
    <ServiceFooterCta
      id="contact"
      title="Ready to Build Faster, Smarter, Better"
      subtitle="Talk to Mekark's PEB expert today ."
      onQuoteClick={openEnquiry}
      scaledCanvas
    />
  );
}
