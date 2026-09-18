import {
  FIND_SERVICES,
  NAV_ITEMS,
} from "@/components/navbar/nav-data";

export const PROJECT_AREAS = [
  "Select area",
  "10,000 - 20,000 Sq.ft",
  "20,000 - 30,000 Sq.ft",
  "30,000 - 50,000 Sq.ft",
  "50,000+ Sq.ft",
] as const;

export const CIVIL_PROJECT_AREAS = [
  "Select area",
  "10,000 - 20,000 Sq.ft",
  "20,000 - 30,000 Sq.ft",
  "30,000 - 50,000 Sq.ft",
  "Above 50,000+ Sq.ft",
] as const;

export const PEB_PROJECT_AREAS = [
  "Select area",
  "10,000 - 20,000 Sq.ft",
  "20,000 - 30,000 Sq.ft",
  "30,000 - 50,000 Sq.ft",
  "Above 50,000+ Sq.ft",
] as const;

export const MULTI_STOREY_PROJECT_AREAS = [
  "Select area",
  "10,000 - 20,000 Sq.ft",
  "20,000 - 30,000 Sq.ft",
  "30,000 - 50,000 Sq.ft",
  "Above 50,000+ Sq.ft",
] as const;

export const MEP_PROJECT_AREAS = [
  "Select area",
  "10,000 - 20,000 Sq.ft",
  "20,000 - 30,000 Sq.ft",
  "30,000 - 50,000 Sq.ft",
  "Above 50,000+ Sq.ft",
] as const;

export const SOLAR_PROJECT_AREAS = [
  "Select area",
  "10,000 - 20,000 Sq.ft",
  "20,000 - 30,000 Sq.ft",
  "30,000 - 50,000 Sq.ft",
  "Above 50,000+ Sq.ft",
] as const;

/** Tensile structures are typically smaller canopy / roofing footprints. */
export const TENSILE_PROJECT_AREAS = [
  "Select area",
  "1,000 - 5,000 Sq.ft",
  "5,000 - 10,000 Sq.ft",
  "Above 10,000 Sq.ft",
] as const;

const INDUSTRY_LINKS = [
  ...(NAV_ITEMS.find((item) => item.label === "Industries We Serve")?.children ??
    []),
  { label: "Institutional", href: "/institutional" },
];

export const SERVICE_LINKS = FIND_SERVICES.map((service) => ({
  ...service,
  label: service.label === "EOT" ? "EOT Crane" : service.label,
}));

export const INDUSTRY_TYPES = [
  "Select industry type",
  ...INDUSTRY_LINKS.map((industry) => industry.label),
] as const;

export const PROJECT_TIMELINES = [
  "Select timeline",
  "Immediately",
  "Within 1 Month",
  "Within 3 Months",
  "Planning for Future",
] as const;

export const PROJECT_BUDGETS = [
  "Select budget",
  "Below ₹50 Lakhs",
  "₹50 Lakhs – ₹1 Crore",
  "₹1 Crore – ₹5 Crores",
  "Above ₹5 Crores",
] as const;

export const SERVICE_TYPES = [
  "Select service",
  ...SERVICE_LINKS.map((service) => service.label),
] as const;

export function resolveIndustryValue(
  industrySlug: string | null,
  industryLabel: string | null,
) {
  return (
    INDUSTRY_LINKS.find(
      (option) =>
        option.href.split("/").pop() === industrySlug ||
        option.label.toLowerCase() === (industryLabel ?? "").toLowerCase(),
    )?.label ?? ""
  );
}

export function resolveServiceValue(
  serviceSlug: string | null,
  serviceLabel: string | null,
) {
  const matched = FIND_SERVICES.find(
    (option) =>
      option.slug === serviceSlug ||
      option.label.toLowerCase() === (serviceLabel ?? "").toLowerCase(),
  );

  return (
    SERVICE_LINKS.find(
      (option) =>
        option.slug === serviceSlug ||
        option.label.toLowerCase() === (serviceLabel ?? "").toLowerCase() ||
        option.slug === matched?.slug,
    )?.label ?? ""
  );
}

export function buildSolutionPrefill(
  industryLabel: string | null,
  serviceLabel: string | null,
) {
  const parts = [
    industryLabel ? `Industry: ${industryLabel}` : null,
    serviceLabel ? `Service: ${serviceLabel}` : null,
  ].filter(Boolean);

  return parts.length ? `${parts.join(" · ")}.` : "";
}

export function normalizePhone(value: string) {
  return value.replace(/\D/g, "").slice(0, 10);
}

export function isValidPhone(phone: string) {
  return /^\d{10}$/.test(phone);
}

export function getEnquirySource() {
  try {
    return sessionStorage.getItem("enquiry_source") ?? "";
  } catch {
    return "";
  }
}

export function clearEnquirySource() {
  try {
    sessionStorage.removeItem("enquiry_source");
  } catch {
    // Storage can be unavailable in privacy-restricted browsers.
  }
}
