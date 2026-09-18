"use client";

import {
  ServiceEnquiryProvider,
  ServiceEnquiryTrigger,
  useServiceEnquiry,
} from "@/components/services/ServiceEnquiryProvider";
import { TENSILE_ENQUIRY_CONFIG } from "@/components/services/serviceEnquiryConfigs";
import type { ButtonHTMLAttributes, ReactNode } from "react";

export function TensileEnquiryProvider({ children }: { children: ReactNode }) {
  return (
    <ServiceEnquiryProvider config={TENSILE_ENQUIRY_CONFIG}>
      {children}
    </ServiceEnquiryProvider>
  );
}

export function useTensileEnquiry() {
  return useServiceEnquiry();
}

export function TensileEnquiryTrigger(
  props: ButtonHTMLAttributes<HTMLButtonElement>,
) {
  return <ServiceEnquiryTrigger {...props} />;
}
