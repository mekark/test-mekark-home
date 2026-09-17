"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import { ServiceEnquiryModal } from "@/components/enquiry/ServiceEnquiryModal";
import {
  trackServiceFormSubmit,
  trackServiceFormView,
} from "@/lib/analytics";

/** Set to true to re-enable the civil page popup enquiry form. */
const CIVIL_ENQUIRY_POPUP_ENABLED = false;

const CIVIL_SERVICE_SLUG = "civil";
const CIVIL_SERVICE_LABEL = "Civil";
const CIVIL_FORM_SOURCE_PAGE = "/services/civil/form";
const CIVIL_FORM_HASH = "form";

type CivilEnquiryContextValue = {
  openEnquiry: () => void;
  closeEnquiry: () => void;
  isOpen: boolean;
};

const CivilEnquiryContext = createContext<CivilEnquiryContextValue | null>(null);

function useCivilEnquiryContext() {
  const context = useContext(CivilEnquiryContext);

  if (!context) {
    throw new Error(
      "Civil enquiry components must be used within CivilEnquiryProvider.",
    );
  }

  return context;
}

export function useCivilEnquiry() {
  return useCivilEnquiryContext();
}

function setFormHash() {
  if (typeof window === "undefined") {
    return;
  }

  const nextUrl = `${window.location.pathname}${window.location.search}#${CIVIL_FORM_HASH}`;
  window.history.replaceState(null, "", nextUrl);
}

function clearFormHash() {
  if (typeof window === "undefined") {
    return;
  }

  const nextUrl = `${window.location.pathname}${window.location.search}`;
  window.history.replaceState(null, "", nextUrl);
}

export function CivilEnquiryProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const openEnquiry = useCallback(() => {
    if (!CIVIL_ENQUIRY_POPUP_ENABLED) {
      return;
    }

    setIsOpen(true);
    setFormHash();
    trackServiceFormView(CIVIL_SERVICE_SLUG, CIVIL_FORM_SOURCE_PAGE);
  }, []);

  const closeEnquiry = useCallback(() => {
    setIsOpen(false);
    clearFormHash();
  }, []);

  useEffect(() => {
    if (!CIVIL_ENQUIRY_POPUP_ENABLED) {
      return;
    }

    if (pathname !== "/services/civil") {
      setIsOpen(false);
      return;
    }

    if (window.location.hash === `#${CIVIL_FORM_HASH}`) {
      setIsOpen(true);
      trackServiceFormView(CIVIL_SERVICE_SLUG, CIVIL_FORM_SOURCE_PAGE);
    }
  }, [pathname]);

  useEffect(() => {
    if (!CIVIL_ENQUIRY_POPUP_ENABLED) {
      return;
    }

    const handleHashChange = () => {
      if (window.location.pathname !== "/services/civil") {
        return;
      }

      if (window.location.hash === `#${CIVIL_FORM_HASH}`) {
        setIsOpen(true);
        trackServiceFormView(CIVIL_SERVICE_SLUG, CIVIL_FORM_SOURCE_PAGE);
        return;
      }

      setIsOpen(false);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const value = useMemo(
    () => ({
      openEnquiry,
      closeEnquiry,
      isOpen,
    }),
    [closeEnquiry, isOpen, openEnquiry],
  );

  return (
    <CivilEnquiryContext.Provider value={value}>
      {children}
      {CIVIL_ENQUIRY_POPUP_ENABLED ? (
        <ServiceEnquiryModal
          isOpen={isOpen}
          onClose={closeEnquiry}
          title="Get a Free Civil Construction Quote"
          serviceLabel={CIVIL_SERVICE_LABEL}
          serviceSlug={CIVIL_SERVICE_SLUG}
          sourcePage={CIVIL_FORM_SOURCE_PAGE}
          description="Share your project details and our civil construction team will get back to you with a tailored proposal."
          submitLabel="Get My Free Quote"
          highlights={[
            "200+ commercial & industrial projects delivered",
            "18+ years of civil & RCC expertise",
            "ISO 9001:2015 certified contractor",
          ]}
          onSubmit={() =>
            trackServiceFormSubmit(CIVIL_SERVICE_SLUG, CIVIL_FORM_SOURCE_PAGE)
          }
        />
      ) : null}
    </CivilEnquiryContext.Provider>
  );
}

export function CivilEnquiryTrigger({
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { openEnquiry } = useCivilEnquiryContext();

  return (
    <button
      type="button"
      className={className}
      onClick={openEnquiry}
      {...props}
    >
      {children}
    </button>
  );
}
