import { PROJECT_AREAS } from "@/components/enquiry/enquiry-form-shared";
import type { ServiceEnquiryConfig } from "@/components/services/ServiceEnquiryProvider";

const INDUSTRY_HIGHLIGHTS = [
  "200+ industrial projects delivered",
  "18+ years of EPC expertise",
  "ISO 9001:2015 certified contractor",
] as const;

function createIndustryEnquiryConfig({
  slug,
  label,
  title,
  description,
}: {
  slug: string;
  label: string;
  title: string;
  description: string;
}): ServiceEnquiryConfig {
  return {
    serviceSlug: slug,
    serviceLabel: label,
    pagePath: `/industries/${slug}`,
    formSourcePage: `/industries/${slug}/form`,
    title,
    description,
    projectAreas: PROJECT_AREAS,
    highlights: INDUSTRY_HIGHLIGHTS,
    defaultIndustry: label,
    lockIndustry: true,
    lockService: false,
  };
}

export const LOGISTICS_ENQUIRY_CONFIG = createIndustryEnquiryConfig({
  slug: "logistics-and-warehouse",
  label: "Logistics & Warehouse",
  title: "Get a Free Logistics & Warehouse Quote",
  description:
    "Share your warehouse or logistics facility details and our team will get back to you with a tailored proposal.",
});

export const TEXTILE_ENQUIRY_CONFIG = createIndustryEnquiryConfig({
  slug: "textile",
  label: "Textile",
  title: "Get a Free Textile Facility Quote",
  description:
    "Share your textile manufacturing facility details and our team will get back to you with a tailored proposal.",
});

export const ELECTRONICS_ENQUIRY_CONFIG = createIndustryEnquiryConfig({
  slug: "electronics",
  label: "Electronics",
  title: "Get a Free Electronics Facility Quote",
  description:
    "Share your electronics manufacturing facility details and our team will get back to you with a tailored proposal.",
});

export const FOOD_AND_BEVERAGE_ENQUIRY_CONFIG = createIndustryEnquiryConfig({
  slug: "food-and-beverage",
  label: "Food & Beverage",
  title: "Get a Free Food & Beverage Facility Quote",
  description:
    "Share your food and beverage facility details and our team will get back to you with a tailored proposal.",
});

export const FMCG_ENQUIRY_CONFIG = createIndustryEnquiryConfig({
  slug: "fmcg",
  label: "FMCG",
  title: "Get a Free FMCG Facility Quote",
  description:
    "Share your FMCG manufacturing facility details and our team will get back to you with a tailored proposal.",
});

export const PHARMA_ENQUIRY_CONFIG = createIndustryEnquiryConfig({
  slug: "pharma",
  label: "Pharma",
  title: "Get a Free Pharma Facility Quote",
  description:
    "Share your pharma facility details and our team will get back to you with a tailored proposal.",
});

export const AUTOMATION_ENQUIRY_CONFIG = createIndustryEnquiryConfig({
  slug: "automation",
  label: "Automation",
  title: "Get a Free Automation Facility Quote",
  description:
    "Share your automation manufacturing facility details and our team will get back to you with a tailored proposal.",
});

export const DATA_CENTER_ENQUIRY_CONFIG = createIndustryEnquiryConfig({
  slug: "data-center",
  label: "Data Center",
  title: "Get a Free Data Center Quote",
  description:
    "Share your data center facility details and our team will get back to you with a tailored proposal.",
});
