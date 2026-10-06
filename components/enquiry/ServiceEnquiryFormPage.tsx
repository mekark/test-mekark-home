"use client";

import { useEffect, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { EnquiryFormCore } from "@/components/enquiry/EnquiryFormCore";
import type { FormHeroBackdrop } from "@/components/enquiry/enquiryConfigRegistry";
import type { ServiceEnquiryConfig } from "@/components/services/ServiceEnquiryProvider";
import {
  trackEnquiryFormSubmit,
  trackEnquiryFormView,
} from "@/lib/analytics";
import modalStyles from "./service-enquiry-modal.module.css";
import pageStyles from "./service-enquiry-form-page.module.css";

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M4 4l8 8M12 4l-8 8"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

const DEFAULT_HIGHLIGHTS = [
  "300+ industrial projects delivered",
  "18+ years of structural expertise",
  "98% on-time project execution",
] as const;

export function ServiceEnquiryFormPage({
  config,
  heroBackdrop,
}: {
  config: ServiceEnquiryConfig;
  heroBackdrop?: FormHeroBackdrop;
}) {
  const router = useRouter();
  const highlights = config.highlights?.length
    ? config.highlights
    : DEFAULT_HIGHLIGHTS;
  const submitLabel = config.submitLabel ?? "Request Project Proposal";
  const defaultService =
    config.defaultService ??
    (config.defaultIndustry ? "" : config.serviceLabel);
  const description: ReactNode = config.description;

  useEffect(() => {
    trackEnquiryFormView({
      serviceSlug: config.serviceSlug,
      pagePath: config.pagePath,
      formSourcePage: config.formSourcePage,
    });
  }, [config.formSourcePage, config.pagePath, config.serviceSlug]);

  const handleClose = () => {
    router.push(config.pagePath);
  };

  return (
    <div className={pageStyles.page}>
      {heroBackdrop ? (
        <div className={pageStyles.heroBackdrop} aria-hidden>
          <Image
            key={heroBackdrop.primary}
            src={heroBackdrop.primary}
            alt=""
            fill
            priority
            className={pageStyles.heroBackdropImage}
            sizes="100vw"
          />
          {heroBackdrop.secondary ? (
            <Image
              key={heroBackdrop.secondary}
              src={heroBackdrop.secondary}
              alt=""
              fill
              priority
              className={pageStyles.heroBackdropSecondary}
              sizes="100vw"
            />
          ) : null}
          <div className={pageStyles.heroBackdropScrim} />
        </div>
      ) : null}

      <div className={`${modalStyles.sheet} ${pageStyles.sheet}`}>
        <aside className={`${modalStyles.sidebar} ${pageStyles.sidebarPlain}`}>
          <div className={modalStyles.sidebarContent}>
            <div>
              <p className={modalStyles.eyebrow}>{config.serviceLabel}</p>
              <h1
                id={`${config.serviceSlug}-enquiry-title`}
                className={modalStyles.sidebarTitle}
              >
                {config.title}
              </h1>
              {description ? (
                <p className={modalStyles.sidebarDescription}>{description}</p>
              ) : null}
            </div>

            <ul className={modalStyles.highlights}>
              {highlights.map((item) => (
                <li key={item} className={modalStyles.highlightItem}>
                  <span className={modalStyles.highlightIcon}>
                    <Image
                      src="/images/enquiry/SVG.svg"
                      alt=""
                      width={12}
                      height={9}
                      aria-hidden
                    />
                  </span>
                  <span className={modalStyles.highlightText}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div className={`${modalStyles.formPanel} ${pageStyles.formPanel}`}>
          <div className={modalStyles.mobileHeader}>
            <div className="min-w-0 pr-2">
              <p className={modalStyles.eyebrow}>{config.serviceLabel}</p>
              <h1 className="mt-1 text-[1.2rem] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#111]">
                {config.title}
              </h1>
              {description ? (
                <p className="mt-1.5 text-[0.875rem] leading-[1.55] text-[#555]">
                  {description}
                </p>
              ) : null}
            </div>

            <Link
              href={config.pagePath}
              aria-label="Back"
              className={modalStyles.closeButton}
            >
              <CloseIcon />
            </Link>
          </div>

          <div className={modalStyles.desktopFormHeader}>
            <div className="min-w-0">
              <p className={modalStyles.formHeaderTitle}>Project enquiry</p>
              <p className={modalStyles.formHeaderSubtitle}>
                Fill in your details and our{" "}
                {config.serviceLabel.toLowerCase()} team will respond within one
                business day.
              </p>
            </div>

            <button
              type="button"
              aria-label="Back"
              onClick={handleClose}
              className={modalStyles.closeButton}
            >
              <CloseIcon />
            </button>
          </div>

          <div className={`${modalStyles.formScroll} ${pageStyles.formScroll}`}>
            <EnquiryFormCore
              formId={`${config.serviceSlug}-enquiry-form`}
              defaultService={defaultService}
              defaultIndustry={config.defaultIndustry}
              defaultMessage={config.prefillMessage}
              sourcePage={config.formSourcePage}
              lockService={config.lockService ?? false}
              lockIndustry={config.lockIndustry ?? false}
              variant="modal"
              submitLabel={submitLabel}
              projectAreas={config.projectAreas}
              onTrackSubmit={() =>
                trackEnquiryFormSubmit({
                  serviceSlug: config.serviceSlug,
                  pagePath: config.pagePath,
                  formSourcePage: config.formSourcePage,
                })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
