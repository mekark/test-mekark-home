"use client";

import { useEffect } from "react";
import { hasAnalyticsConsent } from "@/lib/cookie-consent";
import { useCookieConsent } from "@/components/cookie-consent/CookieConsentProvider";

const GTM_ID = "GTM-5SBMM86H";

/** Events that count as the visitor interacting with the page. */
const INTERACTION_EVENTS = [
  "scroll",
  "pointerdown",
  "touchstart",
  "keydown",
  "mousemove",
] as const;

/** Runs the callback once, on the visitor's first interaction (no timer fallback). */
function deferThirdPartyScripts(callback: () => void) {
  if (typeof window === "undefined") {
    return;
  }

  const run = () => {
    INTERACTION_EVENTS.forEach((event) =>
      window.removeEventListener(event, run),
    );
    callback();
  };

  INTERACTION_EVENTS.forEach((event) =>
    window.addEventListener(event, run, { once: true, passive: true }),
  );
}

function loadScript(
  id: string,
  src: string,
  attributes?: Record<string, string>,
  target: HTMLElement = document.head,
) {
  if (document.getElementById(id)) {
    return;
  }

  const script = document.createElement("script");
  script.id = id;
  script.async = true;
  script.src = src;

  if (attributes) {
    Object.entries(attributes).forEach(([key, value]) => {
      script.setAttribute(key, value);
    });
  }

  target.appendChild(script);
}

function loadGoogleTagManager() {
  if (typeof window === "undefined" || (window as Window & { __mekarkGtmLoaded?: boolean }).__mekarkGtmLoaded) {
    return;
  }

  const w = window as Window & {
    dataLayer?: Record<string, unknown>[];
    __mekarkGtmLoaded?: boolean;
  };

  w.dataLayer = w.dataLayer ?? [];
  w.dataLayer.push({
    "gtm.start": new Date().getTime(),
    event: "gtm.js",
  });
  w.dataLayer.push({
    event: "cookie_consent_update",
    analytics_consent: "granted",
  });

  loadScript(
    "mekark-gtm",
    `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`,
  );
  w.__mekarkGtmLoaded = true;
}

function GtmNoScript() {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}

/** Loads GTM without waiting for cookie consent (review / pre-launch). */
export function DirectSiteScripts() {
  useEffect(() => {
    deferThirdPartyScripts(() => {
      loadGoogleTagManager();
    });
  }, []);

  return <GtmNoScript />;
}

export function ConsentAwareScripts() {
  const { consent, isReady } = useCookieConsent();

  useEffect(() => {
    if (!isReady) {
      return;
    }

    deferThirdPartyScripts(() => {
      if (hasAnalyticsConsent(consent)) {
        loadGoogleTagManager();
      }
    });
  }, [consent, isReady]);

  if (!isReady || !hasAnalyticsConsent(consent)) {
    return null;
  }

  return <GtmNoScript />;
}
