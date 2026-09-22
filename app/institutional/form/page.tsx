import type { Metadata } from "next";
import { ServiceEnquiryFormPage } from "@/components/enquiry/ServiceEnquiryFormPage";
import {
  getFormHeroBackdrop,
  INSTITUTIONAL_ENQUIRY_CONFIG,
} from "@/components/enquiry/enquiryConfigRegistry";
import { FooterSection } from "@/components/footer/FooterSection";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = createPageMetadata({
  title: `${INSTITUTIONAL_ENQUIRY_CONFIG.title} | Mekark`,
  description: INSTITUTIONAL_ENQUIRY_CONFIG.description,
  pathname: INSTITUTIONAL_ENQUIRY_CONFIG.formSourcePage,
});

export default function InstitutionalEnquiryFormPage() {
  return (
    <div className="flex flex-1 flex-col bg-white">
      <ServiceEnquiryFormPage
        config={INSTITUTIONAL_ENQUIRY_CONFIG}
        heroBackdrop={getFormHeroBackdrop("institutional")}
      />
      <div className="hidden sm:block">
        <FooterSection />
      </div>
    </div>
  );
}
