type DataLayerEvent = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: DataLayerEvent[];
  }
}

export function pushAnalyticsEvent(event: DataLayerEvent) {
  if (typeof window === "undefined") {
    return;
  }

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(event);
}

export function trackServiceFormView(serviceSlug: string, sourcePage: string) {
  pushAnalyticsEvent({
    event: "service_form_view",
    service: serviceSlug,
    page_path: sourcePage,
  });
}

export function trackServiceFormSubmit(serviceSlug: string, sourcePage: string) {
  pushAnalyticsEvent({
    event: "service_form_submit",
    service: serviceSlug,
    page_path: sourcePage,
  });
}

export function trackIndustryFormView(industrySlug: string, sourcePage: string) {
  pushAnalyticsEvent({
    event: "industry_form_view",
    industry: industrySlug,
    page_path: sourcePage,
  });
}

export function trackIndustryFormSubmit(
  industrySlug: string,
  sourcePage: string,
) {
  pushAnalyticsEvent({
    event: "industry_form_submit",
    industry: industrySlug,
    page_path: sourcePage,
  });
}

export function trackInstitutionalFormView(sourcePage: string) {
  pushAnalyticsEvent({
    event: "institutional_form_view",
    page_path: sourcePage,
  });
}

export function trackInstitutionalFormSubmit(sourcePage: string) {
  pushAnalyticsEvent({
    event: "institutional_form_submit",
    page_path: sourcePage,
  });
}

type EnquiryFormTrackTarget = {
  serviceSlug: string;
  pagePath: string;
  formSourcePage: string;
};

function resolveEnquiryFormKind(
  pagePath: string,
): "service" | "industry" | "institutional" {
  if (pagePath.startsWith("/institutional")) {
    return "institutional";
  }
  if (pagePath.startsWith("/industries/")) {
    return "industry";
  }
  return "service";
}

/** Fires the correct view event for service / industry / institutional forms. */
export function trackEnquiryFormView(target: EnquiryFormTrackTarget) {
  const kind = resolveEnquiryFormKind(target.pagePath);

  if (kind === "institutional") {
    trackInstitutionalFormView(target.formSourcePage);
    return;
  }

  if (kind === "industry") {
    trackIndustryFormView(target.serviceSlug, target.formSourcePage);
    return;
  }

  trackServiceFormView(target.serviceSlug, target.formSourcePage);
}

/** Fires the correct submit event for service / industry / institutional forms. */
export function trackEnquiryFormSubmit(target: EnquiryFormTrackTarget) {
  const kind = resolveEnquiryFormKind(target.pagePath);

  if (kind === "institutional") {
    trackInstitutionalFormSubmit(target.formSourcePage);
    return;
  }

  if (kind === "industry") {
    trackIndustryFormSubmit(target.serviceSlug, target.formSourcePage);
    return;
  }

  trackServiceFormSubmit(target.serviceSlug, target.formSourcePage);
}
