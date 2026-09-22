"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";

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

export function ServiceEnquiryProvider({
  config,
  children,
}: {
  config: ServiceEnquiryConfig;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const openEnquiry = useCallback(() => {
    router.push(config.formSourcePage);
  }, [config.formSourcePage, router]);

  const closeEnquiry = useCallback(() => {
    router.push(config.pagePath);
  }, [config.pagePath, router]);

  // Migrate legacy `#form` hash links to the dedicated form route.
  useEffect(() => {
    if (pathname !== config.pagePath) {
      return;
    }

    if (typeof window === "undefined") {
      return;
    }

    if (window.location.hash === `#${FORM_HASH}`) {
      router.replace(config.formSourcePage);
    }
  }, [config.formSourcePage, config.pagePath, pathname, router]);

  const value = useMemo(
    () => ({
      openEnquiry,
      closeEnquiry,
      isOpen: false,
    }),
    [closeEnquiry, openEnquiry],
  );

  return (
    <ServiceEnquiryContext.Provider value={value}>
      {children}
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
