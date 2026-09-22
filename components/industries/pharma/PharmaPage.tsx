"use client";

import PharmaHero from "@/components/industries/pharma/hero/hero";
import CompletePharma from "@/components/industries/pharma/complete-pharma/complete-pharma";
import PharmaCta from "@/components/industries/pharma/cta/CTA";
import PharmaSolutionsIcons from "@/components/industries/pharma/solutions-icons/SolutionsIcons";
import PharmaProcess from "@/components/industries/pharma/process/process";
import PharmaFaq from "@/components/industries/pharma/faq/faq";
import PharmaFooterCta from "@/components/industries/pharma/footer/footer";
import { PHARMA_ENQUIRY_CONFIG } from "@/components/industries/industryEnquiryConfigs";
import DesignScale from "@/components/services/DesignScale";
import { ServiceEnquiryProvider } from "@/components/services/ServiceEnquiryProvider";

export function PharmaPage() {
  return (
    <ServiceEnquiryProvider config={PHARMA_ENQUIRY_CONFIG}>
      <main className="pharma-industry-page flex flex-1 flex-col overflow-x-clip bg-white">
        <DesignScale mode="ultrawide">
          <PharmaHero />
          <CompletePharma />
          <PharmaCta />
          <PharmaSolutionsIcons />
          <PharmaProcess />
          <PharmaFaq />
          <PharmaFooterCta />
        </DesignScale>
      </main>
    </ServiceEnquiryProvider>
  );
}
