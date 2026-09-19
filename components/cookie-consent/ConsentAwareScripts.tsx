"use client";

import { useEffect } from "react";
import {
  hasAnalyticsConsent,
  hasFunctionalConsent,
} from "@/lib/cookie-consent";
import { useCookieConsent } from "@/components/cookie-consent/CookieConsentProvider";

const GTM_ID = "GTM-5SBMM86H";
const TAWK_SRC =
  "https://embed.tawk.to/69fd7e65427c251c368c1e92/1jo33bfff";

/** Fallback if the user never scrolls or interacts. */
const THIRD_PARTY_DEFER_TIMEOUT_MS = 4000;

/** Delay after window load before loading scripts when load fires first. */
const THIRD_PARTY_POST_LOAD_DELAY_MS = 1500;

function deferThirdPartyScripts(callback: () => void) {
  if (typeof window === "undefined") {
    return;
  }

  let ran = false;
  const timeouts: number[] = [];

  const cleanup = () => {
    window.removeEventListener("load", onLoad);
    window.removeEventListener("scroll", run);
    window.removeEventListener("pointerdown", run);
    window.removeEventListener("keydown", run);
    timeouts.forEach((timeoutId) => window.clearTimeout(timeoutId));
  };

  const run = () => {
    if (ran) {
      return;
    }
    ran = true;
    cleanup();
    callback();
  };

  const onLoad = () => {
    timeouts.push(window.setTimeout(run, THIRD_PARTY_POST_LOAD_DELAY_MS));
  };

  if (document.readyState === "complete") {
    timeouts.push(window.setTimeout(run, THIRD_PARTY_POST_LOAD_DELAY_MS));
  } else {
    window.addEventListener("load", onLoad, { once: true, passive: true });
  }

  timeouts.push(window.setTimeout(run, THIRD_PARTY_DEFER_TIMEOUT_MS));

  window.addEventListener("scroll", run, { once: true, passive: true });
  window.addEventListener("pointerdown", run, { once: true, passive: true });
  window.addEventListener("keydown", run, { once: true, passive: true });
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

function loadTawkTo() {
  if (typeof window === "undefined" || (window as Window & { __mekarkTawkLoaded?: boolean }).__mekarkTawkLoaded) {
    return;
  }

  const w = window as Window & {
    Tawk_API?: Record<string, unknown>;
    Tawk_LoadStart?: Date;
    __mekarkTawkLoaded?: boolean;
  };

  w.Tawk_API = w.Tawk_API ?? {};
  w.Tawk_LoadStart = new Date();
  w.Tawk_API.customStyle = {
    visibility: {
      desktop: { position: "br", xOffset: 32, yOffset: 20 },
      mobile: { position: "br", xOffset: 20, yOffset: 20 },
    },
  };

  loadScript(
    "mekark-tawk",
    TAWK_SRC,
    {
      charset: "UTF-8",
      crossorigin: "*",
    },
    document.body,
  );
  w.__mekarkTawkLoaded = true;
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

/** Loads GTM and Tawk without waiting for cookie consent (review / pre-launch). */
export function DirectSiteScripts() {
  useEffect(() => {
    deferThirdPartyScripts(() => {
      loadGoogleTagManager();
      loadTawkTo();
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

      if (hasFunctionalConsent(consent)) {
        loadTawkTo();
      }
    });
  }, [consent, isReady]);

  if (!isReady || !hasAnalyticsConsent(consent)) {
    return null;
  }

  return <GtmNoScript />;
}
