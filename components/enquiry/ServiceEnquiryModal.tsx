"use client";

import { useEffect, useRef, type ReactNode } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { EnquiryFormCore } from "@/components/enquiry/EnquiryFormCore";
import modalStyles from "./service-enquiry-modal.module.css";

const DEFAULT_HIGHLIGHTS = [
  "200+ industrial projects delivered",
  "18+ years of structural expertise",
  "98% on-time project execution",
] as const;

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

type ServiceEnquiryModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  formTitle?: string;
  serviceLabel: string;
  serviceSlug: string;
  sourcePage: string;
  description?: ReactNode;
  highlights?: readonly string[];
  submitLabel?: string;
  projectAreas?: readonly string[];
  defaultService?: string;
  defaultIndustry?: string;
  lockService?: boolean;
  lockIndustry?: boolean;
  onSubmit?: () => void;
};

export function ServiceEnquiryModal({
  isOpen,
  onClose,
  title,
  serviceLabel,
  serviceSlug,
  sourcePage,
  description,
  highlights = DEFAULT_HIGHLIGHTS,
  submitLabel = "Request Project Proposal",
  projectAreas,
  defaultService,
  defaultIndustry,
  lockService = true,
  lockIndustry = false,
  onSubmit,
}: ServiceEnquiryModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-[300] flex min-h-0 items-end justify-center overflow-hidden p-0 sm:items-center sm:p-4 lg:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="presentation"
        >
          <button
            type="button"
            aria-label="Close enquiry form"
            className={`absolute inset-0 ${modalStyles.overlay}`}
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={`${serviceSlug}-enquiry-title`}
            className={`relative z-[1] ${modalStyles.sheet}`}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={modalStyles.dragHandle} aria-hidden />

            <aside className={modalStyles.sidebar}>
              <Image
                src="/images/enquiry/homeabout 1.webp"
                alt="Mekark industrial construction project"
                fill
                className={modalStyles.sidebarBackground}
                sizes="320px"
              />
              <div className={modalStyles.sidebarOverlay} aria-hidden />

              <div className={modalStyles.sidebarContent}>
                <div>
                  <p className={modalStyles.eyebrow}>{serviceLabel}</p>
                  <h2
                    id={`${serviceSlug}-enquiry-title`}
                    className={modalStyles.sidebarTitle}
                  >
                    {title}
                  </h2>
                  {description ? (
                    <p className={modalStyles.sidebarDescription}>
                      {description}
                    </p>
                  ) : null}
                </div>

                <ul className={modalStyles.highlights}>
                  {highlights.map((item) => (
                    <li key={item} className={modalStyles.highlightItem}>
                      <span className={modalStyles.highlightIcon}>
                        <Image
                          src="/images/enquiry/SVG.svg"
                          alt="Checkmark icon"
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

            <div className={modalStyles.formPanel}>
              <div className={modalStyles.mobileHeader}>
                <div className="min-w-0 pr-2">
                  <p className={modalStyles.eyebrow}>{serviceLabel}</p>
                  <h2 className="mt-1 text-[1.2rem] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#111]">
                    {title}
                  </h2>
                  {description ? (
                    <p className="mt-1.5 text-[0.875rem] leading-[1.55] text-[#555]">
                      {description}
                    </p>
                  ) : null}
                </div>

                <button
                  ref={closeButtonRef}
                  type="button"
                  aria-label="Close"
                  onClick={onClose}
                  className={modalStyles.closeButton}
                >
                  <CloseIcon />
                </button>
              </div>

              <div className={modalStyles.desktopFormHeader}>
                <div className="min-w-0">
                  <p className={modalStyles.formHeaderTitle}>
                    Project enquiry
                  </p>
                  <p className={modalStyles.formHeaderSubtitle}>
                    Fill in your details and our {serviceLabel.toLowerCase()}{" "}
                    team will respond within one business day.
                  </p>
                </div>

                <button
                  type="button"
                  aria-label="Close"
                  onClick={onClose}
                  className={modalStyles.closeButton}
                >
                  <CloseIcon />
                </button>
              </div>

              <div className={modalStyles.formScroll}>
                <EnquiryFormCore
                  formId={`${serviceSlug}-enquiry-form`}
                  defaultService={defaultService ?? (lockService ? serviceLabel : "")}
                  defaultIndustry={defaultIndustry}
                  sourcePage={sourcePage}
                  lockService={lockService}
                  lockIndustry={lockIndustry}
                  variant="modal"
                  submitLabel={submitLabel}
                  projectAreas={projectAreas}
                  onSubmitSuccess={onClose}
                  onTrackSubmit={onSubmit}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
