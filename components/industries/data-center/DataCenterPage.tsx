"use client";

import DataCenterHero from "@/components/industries/data-center/hero/hero";
import CompleteDataCenter from "@/components/industries/data-center/complete-dc/complete-dc";
import DataCenterCta from "@/components/industries/data-center/cta/CTA";
import DataCenterSolutions from "@/components/industries/data-center/solutions-icons/SolutionsIcons";
import DataCenterProcess from "@/components/industries/data-center/process/process";
import DataCenterFaq from "@/components/industries/data-center/faq/faq";
import DataCenterFooterCta from "@/components/industries/data-center/footer/footer";
import { DATA_CENTER_ENQUIRY_CONFIG } from "@/components/industries/industryEnquiryConfigs";
import { ServiceEnquiryProvider } from "@/components/services/ServiceEnquiryProvider";

export function DataCenterPage() {
  return (
    <ServiceEnquiryProvider config={DATA_CENTER_ENQUIRY_CONFIG}>
      <main className="data-center-industry-page flex flex-1 flex-col overflow-x-clip bg-white">
        <DataCenterHero />
        <CompleteDataCenter />
        <DataCenterCta />
        <DataCenterSolutions />
        <DataCenterProcess />
        <DataCenterFaq />
        <DataCenterFooterCta />
      </main>
    </ServiceEnquiryProvider>
  );
}
