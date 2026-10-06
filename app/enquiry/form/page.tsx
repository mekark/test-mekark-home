import type { Metadata } from "next";
import { ServiceEnquiryFormPage } from "@/components/enquiry/ServiceEnquiryFormPage";
import { GENERAL_ENQUIRY_CONFIG } from "@/components/enquiry/enquiryConfigRegistry";
import {
  buildSolutionPrefill,
  resolveIndustryValue,
  resolveServiceValue,
} from "@/components/enquiry/enquiry-form-shared";
import { FooterSection } from "@/components/footer/FooterSection";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = createPageMetadata({
  title: `${GENERAL_ENQUIRY_CONFIG.title} | Mekark`,
  description: GENERAL_ENQUIRY_CONFIG.description,
  pathname: GENERAL_ENQUIRY_CONFIG.formSourcePage,
});

type SearchParams = Record<string, string | string[] | undefined>;

function first(value: string | string[] | undefined) {
  return (Array.isArray(value) ? value[0] : value) ?? null;
}

export default async function GeneralEnquiryFormPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;
  const industryLabel = first(params.industryLabel);
  const serviceLabel = first(params.serviceLabel);
  const industry = resolveIndustryValue(first(params.industry), industryLabel);
  const service = resolveServiceValue(first(params.service), serviceLabel);

  const config = {
    ...GENERAL_ENQUIRY_CONFIG,
    defaultIndustry: industry,
    defaultService: service,
    lockIndustry: Boolean(industry),
    lockService: Boolean(service),
    prefillMessage: buildSolutionPrefill(industryLabel, serviceLabel),
  };

  return (
    <div className="flex flex-1 flex-col bg-white">
      <ServiceEnquiryFormPage config={config} />
      <div className="hidden sm:block">
        <FooterSection />
      </div>
    </div>
  );
}
