"use client";

import type { ReactNode } from "react";
import { INSTITUTIONAL_ENQUIRY_CONFIG } from "@/components/industries/industryEnquiryConfigs";
import { ServiceEnquiryProvider } from "@/components/services/ServiceEnquiryProvider";

export function InstitutionalEnquiryProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ServiceEnquiryProvider config={INSTITUTIONAL_ENQUIRY_CONFIG}>
      {children}
    </ServiceEnquiryProvider>
  );
}
