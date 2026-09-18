"use client";

import { ServiceFooterCta } from "@/components/services/ServiceFooterCta";
import { useServiceEnquiry } from "@/components/services/ServiceEnquiryProvider";

export default function ReadyToBuild() {
  const { openEnquiry } = useServiceEnquiry();

  return (
    <ServiceFooterCta
      id="contact"
      compactCopy
      title="Ready to Build Faster, Smarter, Better"
      subtitle="Talk to Mekark's Multi-Storey Building expert today."
      onQuoteClick={openEnquiry}
      scaledCanvas
    />
  );
}
