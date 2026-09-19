export const COOKIE_CONSENT_STORAGE_KEY = "mekark-cookie-consent";
export const COOKIE_CONSENT_VERSION = 1;

export type CookieConsentPreferences = {
  version: number;
  updatedAt: string;
  analytics: boolean;
  functional: boolean;
};

export function getDefaultConsent(
  analytics: boolean,
  functional: boolean,
): CookieConsentPreferences {
  return {
    version: COOKIE_CONSENT_VERSION,
    updatedAt: new Date().toISOString(),
    analytics,
    functional,
  };
}

export function readCookieConsent(): CookieConsentPreferences | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const raw = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    if (!raw) {
      return null;
    }

    const parsed = JSON.parse(raw) as CookieConsentPreferences;
    if (parsed.version !== COOKIE_CONSENT_VERSION) {
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
}

export function writeCookieConsent(preferences: CookieConsentPreferences) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(
    COOKIE_CONSENT_STORAGE_KEY,
    JSON.stringify(preferences),
  );
}

export function hasAnalyticsConsent(
  preferences: CookieConsentPreferences | null,
): boolean {
  return preferences?.analytics === true;
}

export function hasFunctionalConsent(
  preferences: CookieConsentPreferences | null,
): boolean {
  return preferences?.functional === true;
}
