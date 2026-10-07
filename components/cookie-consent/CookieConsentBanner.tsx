"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useCookieConsent } from "@/components/cookie-consent/CookieConsentProvider";
import { LEGAL_AND_COOKIE_CONSENT_ENABLED } from "@/lib/feature-flags";

function CookieIcon({ className }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={className}
    >
      <path
        d="M12 2C8.5 2 6 4.2 6 7.5c0 .8.2 1.6.5 2.3C5.4 11.2 4 13.4 4 16c0 3.3 3.6 6 8 6s8-2.7 8-6c0-2.6-1.4-4.8-2.5-6.2.3-.7.5-1.5.5-2.3C18 4.2 15.5 2 12 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="10" r="1" fill="currentColor" />
      <circle cx="14" cy="9" r="1" fill="currentColor" />
      <circle cx="12" cy="14" r="1" fill="currentColor" />
    </svg>
  );
}

function ToggleSwitch({
  id,
  checked,
  disabled,
  onChange,
  size = "sm",
}: {
  id: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
  size?: "sm" | "md";
}) {
  const isMd = size === "md";

  return (
    <button
      id={id}
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={`relative inline-flex shrink-0 items-center rounded-full transition-colors ${
        isMd ? "h-6 w-11" : "h-5 w-9"
      } ${checked ? "bg-[#ed1c24]" : "bg-[#d4d4d4]"} ${
        disabled ? "cursor-not-allowed opacity-55" : "cursor-pointer"
      }`}
    >
      <span
        className={`inline-block rounded-full bg-white shadow-sm transition-transform ${
          isMd ? "size-4" : "size-3.5"
        } ${checked ? (isMd ? "translate-x-[22px]" : "translate-x-[18px]") : "translate-x-0.5"}`}
      />
    </button>
  );
}

function PreferenceRow({
  id,
  label,
  checked,
  disabled,
  onChange,
}: {
  id: string;
  label: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-3 py-2 lg:hidden">
      <label htmlFor={id} className="text-xs font-semibold text-[#222]">
        {label}
      </label>
      <ToggleSwitch
        id={id}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
    </div>
  );
}

function PreferenceCardDesktop({
  id,
  label,
  description,
  badge,
  checked,
  disabled,
  onChange,
}: {
  id: string;
  label: string;
  description: string;
  badge?: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <div
      className={`hidden rounded-xl border p-3.5 lg:block ${
        checked
          ? "border-[#ed1c24]/20 bg-[#fff8f8]"
          : "border-[#ececec] bg-[#fafafa]"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <label htmlFor={id} className="text-sm font-bold text-[#111]">
              {label}
            </label>
            {badge && (
              <span className="rounded-full bg-[#111] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
                {badge}
              </span>
            )}
          </div>
          <p className="mt-1 text-xs leading-5 text-[#666]">{description}</p>
        </div>
        <ToggleSwitch
          id={id}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          size="md"
        />
      </div>
    </div>
  );
}

const btnPrimary =
  "rounded-full bg-[#ed1c24] px-3.5 py-1.5 text-xs font-bold text-white shadow-[0_4px_12px_rgba(237,28,36,0.25)] transition-all hover:bg-[#d40810] lg:px-5 lg:py-2 lg:text-sm lg:shadow-[0_6px_18px_rgba(237,28,36,0.28)]";

const btnSecondary =
  "rounded-full border border-[#ddd] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#333] transition-colors hover:border-[#ccc] hover:bg-[#f7f7f7] lg:px-5 lg:py-2 lg:text-sm";

const btnGhost =
  "rounded-full px-2 py-1.5 text-xs font-semibold text-[#666] transition-colors hover:text-[#111] lg:px-3 lg:py-2 lg:text-sm";

const btnDisabled =
  "cursor-not-allowed opacity-50 pointer-events-none";

export function CookieConsentBanner() {
  const previewOnly = !LEGAL_AND_COOKIE_CONSENT_ENABLED;
  const {
    consent,
    isReady,
    showBanner,
    showPreferences,
    acceptAll,
    rejectNonEssential,
    savePreferences,
    openPreferences,
    closePreferences,
  } = useCookieConsent();

  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);
  const [functionalEnabled, setFunctionalEnabled] = useState(true);

  useEffect(() => {
    if (showPreferences && consent) {
      setAnalyticsEnabled(consent.analytics);
      setFunctionalEnabled(consent.functional);
    }
  }, [consent, showPreferences]);

  if (!isReady || !showBanner) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        role="dialog"
        aria-labelledby="cookie-consent-title"
        aria-describedby="cookie-consent-description"
        aria-modal={showPreferences}
        initial={{ y: 16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 16, opacity: 0 }}
        transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
        className="fixed bottom-3 left-3 z-[100] w-[calc(100%-1.5rem)] max-w-[420px] sm:bottom-5 sm:left-5 lg:bottom-6 lg:left-1/2 lg:w-[min(calc(100%-3rem),56rem)] lg:max-w-none lg:-translate-x-1/2"
      >
        <div className="overflow-hidden rounded-2xl border border-[#e8e8e8] bg-white/95 shadow-[0_12px_40px_rgba(0,0,0,0.16)] backdrop-blur-md lg:rounded-[20px] lg:shadow-[0_20px_60px_rgba(0,0,0,0.14)]">
          <div className="h-0.5 bg-gradient-to-r from-[#8b0c11] via-[#ed1c24] to-[#8b0c11] lg:h-1" />
          {previewOnly ? (
            <p className="bg-[#fff8f8] px-3.5 py-1.5 text-center text-[10px] font-semibold uppercase tracking-[0.12em] text-[#ed1c24] lg:px-5 lg:text-[11px]">
              Preview — under review
            </p>
          ) : null}

          {!showPreferences ? (
            <div className="p-3.5 sm:p-4 lg:flex lg:items-center lg:justify-between lg:gap-8 lg:p-5">
              <div className="lg:flex lg:min-w-0 lg:flex-1 lg:items-center lg:gap-4">
                <div className="mb-3 hidden size-11 shrink-0 items-center justify-center rounded-xl bg-[#ed1c24]/10 text-[#ed1c24] lg:flex">
                  <CookieIcon />
                </div>

                <div className="min-w-0">
                  <p
                    id="cookie-consent-title"
                    className="text-xs font-bold text-[#111] sm:text-[13px] lg:text-base lg:tracking-[-0.01em]"
                  >
                    We use cookies
                  </p>
                  <p
                    id="cookie-consent-description"
                    className="mt-1 text-[11px] leading-4 text-[#666] sm:text-xs sm:leading-5 lg:mt-0.5 lg:text-sm lg:leading-6 lg:text-[#555]"
                  >
                    <span className="lg:hidden">
                      For site performance, analytics, and live chat.{" "}
                    </span>
                    <span className="hidden lg:inline">
                      We use cookies for site performance, analytics, and live
                      chat support.{" "}
                    </span>
                    {previewOnly ? (
                      <span className="cursor-not-allowed font-semibold text-[#ed1c24]/70">
                        Learn more
                      </span>
                    ) : (
                      <Link
                        href="/resources/cookie-policy"
                        className="font-semibold text-[#ed1c24] hover:underline"
                      >
                        Learn more
                      </Link>
                    )}
                  </p>
                </div>
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-2 lg:mt-0 lg:shrink-0 lg:gap-2.5">
                <button
                  type="button"
                  disabled={previewOnly}
                  onClick={openPreferences}
                  className={`${btnGhost} order-3 lg:order-1 ${previewOnly ? btnDisabled : ""}`}
                >
                  Settings
                </button>
                <button
                  type="button"
                  disabled={previewOnly}
                  onClick={rejectNonEssential}
                  className={`${btnSecondary} order-2 ${previewOnly ? btnDisabled : ""}`}
                >
                  Reject
                </button>
                <button
                  type="button"
                  disabled={previewOnly}
                  onClick={acceptAll}
                  className={`${btnPrimary} order-1 lg:order-3 ${previewOnly ? btnDisabled : ""}`}
                >
                  Accept all
                </button>
              </div>
            </div>
          ) : (
            <div className="p-3.5 sm:p-4 lg:p-5">
              <div className="flex items-center justify-between gap-3 lg:mb-4">
                <div className="flex items-center gap-3">
                  <div className="hidden size-10 items-center justify-center rounded-xl bg-[#ed1c24]/10 text-[#ed1c24] lg:flex">
                    <CookieIcon />
                  </div>
                  <p className="text-xs font-bold text-[#111] lg:text-base">
                    Cookie settings
                  </p>
                </div>
                <button
                  type="button"
                  onClick={closePreferences}
                  className="text-[11px] font-semibold text-[#888] hover:text-[#111] lg:text-sm"
                >
                  Close
                </button>
              </div>

              <div className="mt-1 divide-y divide-[#efefef] lg:mt-0 lg:divide-none">
                <PreferenceRow
                  id="cookie-necessary-mobile"
                  label="Necessary"
                  checked
                  disabled
                  onChange={() => undefined}
                />
                <PreferenceRow
                  id="cookie-analytics-mobile"
                  label="Analytics"
                  checked={analyticsEnabled}
                  onChange={setAnalyticsEnabled}
                />
                <PreferenceRow
                  id="cookie-functional-mobile"
                  label="Live chat"
                  checked={functionalEnabled}
                  onChange={setFunctionalEnabled}
                />
              </div>

              <div className="mt-3 hidden gap-3 lg:grid lg:grid-cols-3">
                <PreferenceCardDesktop
                  id="cookie-necessary"
                  label="Necessary"
                  badge="Always on"
                  description="Required for core site functionality and consent storage."
                  checked
                  disabled
                  onChange={() => undefined}
                />
                <PreferenceCardDesktop
                  id="cookie-analytics"
                  label="Analytics"
                  description="Helps us measure enquiries and improve the site via GTM."
                  checked={analyticsEnabled}
                  onChange={setAnalyticsEnabled}
                />
                <PreferenceCardDesktop
                  id="cookie-functional"
                  label="Live chat"
                  description="Enables Tawk.to support while you browse."
                  checked={functionalEnabled}
                  onChange={setFunctionalEnabled}
                />
              </div>

              <div className="mt-3 flex gap-2 lg:mt-5 lg:justify-end">
                <button
                  type="button"
                  onClick={() =>
                    savePreferences(analyticsEnabled, functionalEnabled)
                  }
                  className={`${btnPrimary} flex-1 lg:flex-none`}
                >
                  Save preferences
                </button>
                <button
                  type="button"
                  onClick={acceptAll}
                  className={`${btnSecondary} flex-1 lg:flex-none`}
                >
                  Accept all
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
