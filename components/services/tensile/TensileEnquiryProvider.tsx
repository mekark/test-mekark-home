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
import { TENSILE_PROJECT_AREAS } from "@/components/enquiry/enquiry-form-shared";
import {
  trackServiceFormSubmit,
  trackServiceFormView,
} from "@/lib/analytics";

const TENSILE_SERVICE_SLUG = "tensile";
const TENSILE_SERVICE_LABEL = "Tensile";
const TENSILE_FORM_SOURCE_PAGE = "/services/tensile/form";
const TENSILE_FORM_HASH = "form";
const TENSILE_PAGE_PATH = "/services/tensile";

type TensileEnquiryContextValue = {
  openEnquiry: () => void;
  closeEnquiry: () => void;
  isOpen: boolean;
};

const TensileEnquiryContext = createContext<TensileEnquiryContextValue | null>(
  null,
);

function useTensileEnquiryContext() {
  const context = useContext(TensileEnquiryContext);

  if (!context) {
    throw new Error(
      "Tensile enquiry components must be used within TensileEnquiryProvider.",
    );
  }

  return context;
}

export function useTensileEnquiry() {
  return useTensileEnquiryContext();
}

function setFormHash() {
  if (typeof window === "undefined") {
    return;
  }

  const nextUrl = `${window.location.pathname}${window.location.search}#${TENSILE_FORM_HASH}`;
  window.history.replaceState(null, "", nextUrl);
}

function clearFormHash() {
  if (typeof window === "undefined") {
    return;
  }

  const nextUrl = `${window.location.pathname}${window.location.search}`;
  window.history.replaceState(null, "", nextUrl);
}

export function TensileEnquiryProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const openEnquiry = useCallback(() => {
    setIsOpen(true);
    setFormHash();
    trackServiceFormView(TENSILE_SERVICE_SLUG, TENSILE_FORM_SOURCE_PAGE);
  }, []);

  const closeEnquiry = useCallback(() => {
    setIsOpen(false);
    clearFormHash();
  }, []);

  useEffect(() => {
    if (pathname !== TENSILE_PAGE_PATH) {
      setIsOpen(false);
    }
  }, [pathname]);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.pathname !== TENSILE_PAGE_PATH) {
        return;
      }

      if (window.location.hash === `#${TENSILE_FORM_HASH}`) {
        setIsOpen(true);
        trackServiceFormView(TENSILE_SERVICE_SLUG, TENSILE_FORM_SOURCE_PAGE);
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
    <TensileEnquiryContext.Provider value={value}>
      {children}
      <ServiceEnquiryModal
        isOpen={isOpen}
        onClose={closeEnquiry}
        title="Get a Free Tensile Structure Quote"
        serviceLabel={TENSILE_SERVICE_LABEL}
        serviceSlug={TENSILE_SERVICE_SLUG}
        sourcePage={TENSILE_FORM_SOURCE_PAGE}
        description="Share your project details and our tensile structure team will get back to you with a tailored proposal."
        submitLabel="Request Project Proposal"
        projectAreas={TENSILE_PROJECT_AREAS}
        highlights={[
          "200+ tensile projects delivered across South India",
          "18+ years of PTFE & ETFE fabric expertise",
          "ISO 9001:2015 certified contractor",
        ]}
        onSubmit={() =>
          trackServiceFormSubmit(TENSILE_SERVICE_SLUG, TENSILE_FORM_SOURCE_PAGE)
        }
      />
    </TensileEnquiryContext.Provider>
  );
}

export function TensileEnquiryTrigger({
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { openEnquiry } = useTensileEnquiryContext();

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
