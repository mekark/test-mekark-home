import { PROJECT_AREAS } from "@/components/enquiry/enquiry-form-shared";
import {
  AUTOMATION_ENQUIRY_CONFIG,
  DATA_CENTER_ENQUIRY_CONFIG,
  ELECTRONICS_ENQUIRY_CONFIG,
  FMCG_ENQUIRY_CONFIG,
  FOOD_AND_BEVERAGE_ENQUIRY_CONFIG,
  INSTITUTIONAL_ENQUIRY_CONFIG,
  LOGISTICS_ENQUIRY_CONFIG,
  PHARMA_ENQUIRY_CONFIG,
  TEXTILE_ENQUIRY_CONFIG,
} from "@/components/industries/industryEnquiryConfigs";
import {
  CIVIL_ENQUIRY_CONFIG,
  MEP_ENQUIRY_CONFIG,
  MULTI_STOREY_ENQUIRY_CONFIG,
  PEB_ENQUIRY_CONFIG,
  SOLAR_ENQUIRY_CONFIG,
  TENSILE_ENQUIRY_CONFIG,
} from "@/components/services/serviceEnquiryConfigs";
import type { ServiceEnquiryConfig } from "@/components/services/ServiceEnquiryProvider";

export type FormHeroBackdrop = {
  /** Main full-bleed hero image (sky / scene). */
  primary: string;
  /** Optional foreground layer (building / facility cutout). */
  secondary?: string;
};

export const INDUSTRY_ENQUIRY_BY_SLUG: Record<string, ServiceEnquiryConfig> = {
  "logistics-and-warehouse": LOGISTICS_ENQUIRY_CONFIG,
  textile: TEXTILE_ENQUIRY_CONFIG,
  electronics: ELECTRONICS_ENQUIRY_CONFIG,
  "food-and-beverage": FOOD_AND_BEVERAGE_ENQUIRY_CONFIG,
  fmcg: FMCG_ENQUIRY_CONFIG,
  pharma: PHARMA_ENQUIRY_CONFIG,
  automation: AUTOMATION_ENQUIRY_CONFIG,
  "data-center": DATA_CENTER_ENQUIRY_CONFIG,
};

export const SERVICE_ENQUIRY_BY_SLUG: Record<string, ServiceEnquiryConfig> = {
  civil: CIVIL_ENQUIRY_CONFIG,
  peb: PEB_ENQUIRY_CONFIG,
  "multi-storey": MULTI_STOREY_ENQUIRY_CONFIG,
  mep: MEP_ENQUIRY_CONFIG,
  solar: SOLAR_ENQUIRY_CONFIG,
  tensile: TENSILE_ENQUIRY_CONFIG,
};

/**
 * Exact parent-page hero assets for form-route backdrops.
 * Keys must match the URL slug (`/services/{slug}/form`, `/industries/{slug}/form`).
 */
export const FORM_HERO_BACKDROP_BY_SLUG: Record<string, FormHeroBackdrop> = {
  // Services — match each service hero composition
  civil: {
    primary: "/images/services/civil/hero/bg.webp",
    secondary: "/images/services/civil/hero/building.webp",
  },
  peb: {
    primary: "/images/services/peb/hero/building.webp",
    secondary: "/images/services/peb/hero/layer.webp",
  },
  "multi-storey": {
    primary: "/images/services/multi-storey/hero/sky-bg.webp",
    secondary: "/images/services/multi-storey/hero/building-layer.webp",
  },
  mep: {
    primary: "/images/services/mep/hero/remove-1.webp",
    secondary: "/images/services/mep/hero/layer-1.webp",
  },
  solar: {
    primary: "/images/services/solar/hero/remove-the-building-1.webp",
    secondary: "/images/services/solar/hero/remove-the-building-2.webp",
  },
  tensile: {
    primary: "/images/services/tensile/hero/hero-bg.webp",
  },
  // Industries
  "logistics-and-warehouse": {
    primary:
      "/images/industries/logistics/hero/aerial-view-warehouse-facility.webp",
  },
  textile: {
    primary: "/images/industries/textile/hero/herobg.webp",
  },
  electronics: {
    primary: "/images/industries/electronics/hero/hero-background.webp",
  },
  "food-and-beverage": {
    primary:
      "/images/industries/food-and-beverage/hero/094b340e4341865b579a5b936db8b1f86325cefd.webp",
  },
  fmcg: {
    primary: "/images/industries/fmcg/logistics-hero/hero-bg.webp",
  },
  pharma: {
    primary: "/images/industries/pharma/hero/hero.webp",
  },
  automation: {
    primary: "/images/industries/automation/hero-background.webp",
  },
  "data-center": {
    primary: "/images/industries/data-center/hero/hero.webp",
  },
  institutional: {
    primary: "/images/institutional/home.webp",
  },
};

export function getIndustryEnquiryConfig(
  slug: string,
): ServiceEnquiryConfig | undefined {
  return INDUSTRY_ENQUIRY_BY_SLUG[slug];
}

export function getServiceEnquiryConfig(
  slug: string,
): ServiceEnquiryConfig | undefined {
  return SERVICE_ENQUIRY_BY_SLUG[slug];
}

export function getFormHeroBackdrop(
  slug: string,
): FormHeroBackdrop | undefined {
  return FORM_HERO_BACKDROP_BY_SLUG[slug];
}

/** Generic enquiry form used by site-wide "get a quote" links. */
export const GENERAL_ENQUIRY_CONFIG: ServiceEnquiryConfig = {
  serviceSlug: "general",
  serviceLabel: "Mekark",
  pagePath: "/",
  formSourcePage: "/enquiry/form",
  title: "Start Your Industrial Project",
  description:
    "Partner with Mekark for high-quality, fast-track, and cost-efficient industrial construction solutions.",
  projectAreas: PROJECT_AREAS,
  highlights: [
    "300+ industrial projects delivered",
    "18+ years of structural expertise",
    "98% on-time project execution",
  ],
  defaultService: "",
  defaultIndustry: "",
};

export { INSTITUTIONAL_ENQUIRY_CONFIG };
