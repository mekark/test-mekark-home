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
