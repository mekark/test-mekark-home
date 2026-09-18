"use client";

import { ServiceFooterCta } from "@/components/services/ServiceFooterCta";
import { useServiceEnquiry } from "@/components/services/ServiceEnquiryProvider";

export default function ReadyToStart() {
  const { openEnquiry } = useServiceEnquiry();

  return (
    <ServiceFooterCta
      id="contact"
      title="Ready to Start Your Industrial MEP Project?"
      subtitle="Talk to Mekark's MEP expert today"
      onQuoteClick={openEnquiry}
      scaledCanvas
    />
  );
}
