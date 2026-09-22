import {
  CIVIL_PROJECT_AREAS,
  MEP_PROJECT_AREAS,
  MULTI_STOREY_PROJECT_AREAS,
  PEB_PROJECT_AREAS,
  SOLAR_PROJECT_AREAS,
  TENSILE_PROJECT_AREAS,
} from "@/components/enquiry/enquiry-form-shared";
import type { ServiceEnquiryConfig } from "@/components/services/ServiceEnquiryProvider";

export const CIVIL_ENQUIRY_CONFIG: ServiceEnquiryConfig = {
  serviceSlug: "civil",
  serviceLabel: "Civil",
  pagePath: "/services/civil",
  formSourcePage: "/services/civil/form",
  title: "Get a Free Civil Construction Quote",
  description:
    "Share your project details and our civil construction team will get back to you with a tailored proposal.",
  projectAreas: CIVIL_PROJECT_AREAS,
  defaultService: "Civil",
  lockService: true,
  highlights: [
    "200+ commercial & industrial projects delivered",
    "18+ years of civil & RCC expertise",
    "ISO 9001:2015 certified contractor",
  ],
};

export const PEB_ENQUIRY_CONFIG: ServiceEnquiryConfig = {
  serviceSlug: "peb",
  serviceLabel: "PEB",
  pagePath: "/services/peb",
  formSourcePage: "/services/peb/form",
  title: "Get a Free PEB Quote",
  description:
    "Share your project details and our PEB engineering team will get back to you with a tailored proposal.",
  projectAreas: PEB_PROJECT_AREAS,
  defaultService: "PEB",
  lockService: true,
  highlights: [
    "200+ PEB projects delivered across South India",
    "18+ years of pre-engineered building expertise",
    "ISO 9001:2015 certified manufacturer",
  ],
};

export const MULTI_STOREY_ENQUIRY_CONFIG: ServiceEnquiryConfig = {
  serviceSlug: "multi-storey",
  serviceLabel: "Multi Storey",
  pagePath: "/services/multi-storey",
  formSourcePage: "/services/multi-storey/form",
  title: "Get a Free Multi Storey Quote",
  description:
    "Share your project details and our multi-storey construction team will get back to you with a tailored proposal.",
  projectAreas: MULTI_STOREY_PROJECT_AREAS,
  defaultService: "Multi Storey",
  lockService: true,
  highlights: [
    "200+ multi-storey projects delivered",
    "18+ years of structural engineering expertise",
    "ISO 9001:2015 certified contractor",
  ],
};

export const MEP_ENQUIRY_CONFIG: ServiceEnquiryConfig = {
  serviceSlug: "mep",
  serviceLabel: "MEP",
  pagePath: "/services/mep",
  formSourcePage: "/services/mep/form",
  title: "Get a Free MEP Quote",
  description:
    "Share your project details and our MEP contracting team will get back to you with a tailored proposal.",
  projectAreas: MEP_PROJECT_AREAS,
  defaultService: "MEP",
  lockService: true,
  highlights: [
    "200+ industrial MEP projects delivered",
    "18+ years of turnkey MEP expertise",
    "ISO 9001:2015 certified contractor",
  ],
};

export const SOLAR_ENQUIRY_CONFIG: ServiceEnquiryConfig = {
  serviceSlug: "solar",
  serviceLabel: "Solar",
  pagePath: "/services/solar",
  formSourcePage: "/services/solar/form",
  title: "Get a Free Solar Quote",
  description:
    "Share your project details and our solar installation team will get back to you with a tailored proposal.",
  projectAreas: SOLAR_PROJECT_AREAS,
  defaultService: "Solar",
  lockService: true,
  highlights: [
    "200+ commercial solar projects delivered",
    "18+ years of solar EPC expertise",
    "ISO 9001:2015 certified contractor",
  ],
};

export const TENSILE_ENQUIRY_CONFIG: ServiceEnquiryConfig = {
  serviceSlug: "tensile",
  serviceLabel: "Tensile",
  pagePath: "/services/tensile",
  formSourcePage: "/services/tensile/form",
  title: "Get a Free Tensile Structure Quote",
  description:
    "Share your project details and our tensile structure team will get back to you with a tailored proposal.",
  projectAreas: TENSILE_PROJECT_AREAS,
  defaultService: "Tensile",
  lockService: true,
  highlights: [
    "200+ tensile projects delivered across South India",
    "18+ years of PTFE & ETFE fabric expertise",
    "ISO 9001:2015 certified contractor",
  ],
};
