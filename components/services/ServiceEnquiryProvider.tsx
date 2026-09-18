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

export type ServiceEnquiryConfig = {
  serviceSlug: string;
  serviceLabel: string;
  pagePath: string;
  formSourcePage: string;
  title: string;
  description: string;
  projectAreas: readonly string[];
  highlights: readonly string[];
  submitLabel?: string;
  defaultService?: string;
  defaultIndustry?: string;
  lockService?: boolean;
  lockIndustry?: boolean;
};

type ServiceEnquiryContextValue = {
  openEnquiry: () => void;
  closeEnquiry: () => void;
  isOpen: boolean;
};

const ServiceEnquiryContext = createContext<ServiceEnquiryContextValue | null>(
  null,
);

const FORM_HASH = "form";

function useServiceEnquiryContext() {
  const context = useContext(ServiceEnquiryContext);

  if (!context) {
    throw new Error(
      "Service enquiry components must be used within ServiceEnquiryProvider.",
    );
  }

  return context;
}

export function useServiceEnquiry() {
  return useServiceEnquiryContext();
}

function setFormHash() {
  if (typeof window === "undefined") {
    return;
  }

  const nextUrl = `${window.location.pathname}${window.location.search}#${FORM_HASH}`;
  window.history.replaceState(null, "", nextUrl);
}

function clearFormHash() {
  if (typeof window === "undefined") {
    return;
  }

  const nextUrl = `${window.location.pathname}${window.location.search}`;
  window.history.replaceState(null, "", nextUrl);
}

export function ServiceEnquiryProvider({
  config,
  children,
}: {
  config: ServiceEnquiryConfig;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const openEnquiry = useCallback(() => {
    setIsOpen(true);
    setFormHash();
    trackServiceFormView(config.serviceSlug, config.formSourcePage);
  }, [config.formSourcePage, config.serviceSlug]);

  const closeEnquiry = useCallback(() => {
    setIsOpen(false);
    clearFormHash();
  }, []);

  useEffect(() => {
    if (pathname !== config.pagePath) {
      setIsOpen(false);
    }
  }, [config.pagePath, pathname]);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.pathname !== config.pagePath) {
        return;
      }

      if (window.location.hash === `#${FORM_HASH}`) {
        setIsOpen(true);
        trackServiceFormView(config.serviceSlug, config.formSourcePage);
        return;
      }

      setIsOpen(false);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [config.formSourcePage, config.pagePath, config.serviceSlug]);

  const value = useMemo(
    () => ({
      openEnquiry,
      closeEnquiry,
      isOpen,
    }),
    [closeEnquiry, isOpen, openEnquiry],
  );

  return (
    <ServiceEnquiryContext.Provider value={value}>
      {children}
      <ServiceEnquiryModal
        isOpen={isOpen}
        onClose={closeEnquiry}
        title={config.title}
        serviceLabel={config.serviceLabel}
        serviceSlug={config.serviceSlug}
        sourcePage={config.formSourcePage}
        description={config.description}
        submitLabel={config.submitLabel ?? "Request Project Proposal"}
        projectAreas={config.projectAreas}
        highlights={config.highlights}
        defaultService={
          config.defaultService ??
          (config.defaultIndustry ? "" : config.serviceLabel)
        }
        defaultIndustry={config.defaultIndustry}
        lockService={config.lockService ?? false}
        lockIndustry={config.lockIndustry ?? false}
        onSubmit={() =>
          trackServiceFormSubmit(config.serviceSlug, config.formSourcePage)
        }
      />
    </ServiceEnquiryContext.Provider>
  );
}

export function ServiceEnquiryTrigger({
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { openEnquiry } = useServiceEnquiryContext();

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
