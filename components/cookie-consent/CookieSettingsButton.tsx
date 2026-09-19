"use client";

import { useOptionalCookieConsent } from "@/components/cookie-consent/CookieConsentProvider";
import { LEGAL_AND_COOKIE_CONSENT_ENABLED } from "@/lib/feature-flags";

export function CookieSettingsButton() {
  const consent = useOptionalCookieConsent();
  const disabled = !LEGAL_AND_COOKIE_CONSENT_ENABLED;

  if (!consent) {
    return null;
  }

  return (
    <li>
      <button
        type="button"
        disabled={disabled}
        aria-disabled={disabled}
        onClick={disabled ? undefined : consent.openPreferences}
        className={`text-sm text-white/55 ${
          disabled
            ? "cursor-not-allowed opacity-45"
            : "transition-colors hover:text-white/85"
        }`}
        title={disabled ? "Under review" : undefined}
      >
        Cookie Settings
      </button>
    </li>
  );
}
