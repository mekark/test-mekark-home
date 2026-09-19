"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  getDefaultConsent,
  readCookieConsent,
  writeCookieConsent,
  type CookieConsentPreferences,
} from "@/lib/cookie-consent";
import { LEGAL_AND_COOKIE_CONSENT_ENABLED } from "@/lib/feature-flags";

type CookieConsentContextValue = {
  consent: CookieConsentPreferences | null;
  isReady: boolean;
  showBanner: boolean;
  showPreferences: boolean;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  savePreferences: (analytics: boolean, functional: boolean) => void;
  openPreferences: () => void;
  closePreferences: () => void;
  dismissBanner: () => void;
};

const CookieConsentContext = createContext<CookieConsentContextValue | null>(
  null,
);

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error(
      "useCookieConsent must be used within CookieConsentProvider.",
    );
  }
  return context;
}

export function useOptionalCookieConsent() {
  return useContext(CookieConsentContext);
}

function persistConsent(analytics: boolean, functional: boolean) {
  const next = getDefaultConsent(analytics, functional);
  writeCookieConsent(next);
  return next;
}

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<CookieConsentPreferences | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    const stored = readCookieConsent();
    setConsent(stored);
    setShowBanner(LEGAL_AND_COOKIE_CONSENT_ENABLED && stored === null);
    setIsReady(true);
  }, []);

  const acceptAll = useCallback(() => {
    if (!LEGAL_AND_COOKIE_CONSENT_ENABLED) {
      return;
    }

    const next = persistConsent(true, true);
    setConsent(next);
    setShowBanner(false);
    setShowPreferences(false);
  }, []);

  const rejectNonEssential = useCallback(() => {
    if (!LEGAL_AND_COOKIE_CONSENT_ENABLED) {
      return;
    }

    const next = persistConsent(false, false);
    setConsent(next);
    setShowBanner(false);
    setShowPreferences(false);
  }, []);

  const savePreferences = useCallback((analytics: boolean, functional: boolean) => {
    if (!LEGAL_AND_COOKIE_CONSENT_ENABLED) {
      return;
    }

    const next = persistConsent(analytics, functional);
    setConsent(next);
    setShowBanner(false);
    setShowPreferences(false);
  }, []);

  const openPreferences = useCallback(() => {
    if (!LEGAL_AND_COOKIE_CONSENT_ENABLED) {
      return;
    }

    setShowPreferences(true);
    setShowBanner(true);
  }, []);

  const closePreferences = useCallback(() => {
    if (!LEGAL_AND_COOKIE_CONSENT_ENABLED) {
      return;
    }

    setShowPreferences(false);
    if (consent !== null) {
      setShowBanner(false);
    }
  }, [consent]);

  const dismissBanner = useCallback(() => {
    if (!LEGAL_AND_COOKIE_CONSENT_ENABLED) {
      return;
    }

    if (consent !== null) {
      setShowBanner(false);
      setShowPreferences(false);
    }
  }, [consent]);

  const value = useMemo(
    () => ({
      consent,
      isReady,
      showBanner,
      showPreferences,
      acceptAll,
      rejectNonEssential,
      savePreferences,
      openPreferences,
      closePreferences,
      dismissBanner,
    }),
    [
      acceptAll,
      closePreferences,
      consent,
      dismissBanner,
      isReady,
      openPreferences,
      rejectNonEssential,
      savePreferences,
      showBanner,
      showPreferences,
    ],
  );

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
}
