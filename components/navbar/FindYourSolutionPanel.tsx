"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  FIND_INDUSTRIES,
  FIND_SERVICES,
  buildSolutionHref,
  type SolutionOption,
} from "@/components/navbar/nav-data";

const EASE = [0.22, 1, 0.36, 1] as const;

type Step = 1 | 2;

type FindYourSolutionPanelProps = {
  step: Step;
  industry: SolutionOption | null;
  service: SolutionOption | null;
  onSelectIndustry: (option: SolutionOption) => void;
  onSelectService: (option: SolutionOption) => void;
  onBack: () => void;
  onClose: () => void;
  onRedirect: (href: string) => void;
};

function StepTrack({
  step,
  hasService,
}: {
  step: Step;
  hasService: boolean;
}) {
  const steps = [
    { index: 1, label: "Industry", active: step === 1, done: step > 1 },
    { index: 2, label: "Service", active: step === 2, done: hasService },
  ] as const;

  return (
    <div className="flex items-center gap-0">
      {steps.map((item, i) => (
        <div key={item.label} className="flex items-center">
          <div className="flex items-center gap-2.5">
            <span
              className={`relative flex size-8 items-center justify-center font-[family-name:var(--font-manrope)] text-[12px] font-bold transition-colors ${
                item.active || item.done
                  ? "bg-mekark-red text-white"
                  : "bg-white/8 text-white/35"
              }`}
            >
              {item.done ? (
                <svg width="13" height="13" viewBox="0 0 12 12" fill="none" aria-hidden>
                  <path
                    d="M2.5 6.2L4.8 8.5L9.5 3.5"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                `0${item.index}`
              )}
            </span>
            <span
              className={`font-[family-name:var(--font-manrope)] text-[11px] font-semibold tracking-[0.16em] uppercase ${
                item.active ? "text-mekark-white" : "text-white/35"
              }`}
            >
              {item.label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <span
              aria-hidden
              className={`mx-4 h-px w-10 sm:w-16 ${
                step > 1 ? "bg-mekark-red/70" : "bg-white/15"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

function ChoiceCard({
  label,
  index,
  selected,
  onClick,
}: {
  label: string;
  index: number;
  selected?: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.985 }}
      className={`group relative flex min-h-[88px] flex-col justify-between overflow-hidden border p-4 text-left transition-colors duration-200 ${
        selected
          ? "border-mekark-red bg-mekark-red text-white"
          : "border-white/12 bg-white/[0.04] hover:border-white/30 hover:bg-white/[0.07]"
      }`}
    >
      <span
        aria-hidden
        className={`font-[family-name:var(--font-manrope)] text-[10px] font-semibold tracking-[0.18em] ${
          selected ? "text-white/70" : "text-white/30"
        }`}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <span
        className={`pr-6 font-[family-name:var(--font-manrope)] text-[15px] leading-snug font-semibold tracking-[-0.01em] ${
          selected ? "text-white" : "text-white/85 group-hover:text-mekark-white"
        }`}
      >
        {label}
      </span>
      <span
        aria-hidden
        className={`absolute right-3 bottom-3 transition-all duration-200 ${
          selected
            ? "translate-x-0 opacity-100"
            : "translate-x-[-4px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
        }`}
      >
        <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
          <path
            d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={selected ? "text-white" : "text-mekark-red"}
          />
        </svg>
      </span>
      {!selected && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-mekark-red transition-transform duration-300 group-hover:scale-x-100"
        />
      )}
    </motion.button>
  );
}

export function FindYourSolutionPanel({
  step,
  industry,
  service,
  onSelectIndustry,
  onSelectService,
  onBack,
  onClose,
  onRedirect,
}: FindYourSolutionPanelProps) {
  const resultHref =
    industry && service ? buildSolutionHref(industry, service) : null;
  const options = step === 1 ? FIND_INDUSTRIES : FIND_SERVICES;

  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-[#070707]/78 backdrop-blur-[20px]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(237,28,36,0.14),_transparent_45%)]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-mekark-red to-transparent"
      />

      <div className="relative mx-auto max-w-[1440px] px-5 py-9 sm:px-8 lg:px-12 lg:py-11">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-6 border-b border-white/10 pb-7 lg:mb-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <div className="mb-3 flex items-center gap-3">
              <span aria-hidden className="h-px w-8 bg-mekark-red" />
              <p className="font-[family-name:var(--font-manrope)] text-[11px] font-semibold tracking-[0.28em] text-mekark-red uppercase">
                Solution matcher
              </p>
            </div>
            <h3 className="font-[family-name:var(--font-manrope)] text-[30px] leading-[1.05] font-semibold tracking-[-0.03em] text-mekark-white sm:text-[36px] lg:text-[42px]">
              Find your solution
            </h3>
            <p className="mt-3 max-w-md font-[family-name:var(--font-manrope)] text-[14px] leading-relaxed text-white/50">
              {step === 1
                ? "Start with your industry. We’ll match Mekark capabilities to your build."
                : `Now choose the service best suited for ${industry?.label ?? "your industry"}.`}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 lg:gap-6">
            <StepTrack step={step} hasService={Boolean(service)} />
            <button
              type="button"
              onClick={onClose}
              className="flex size-10 items-center justify-center border border-white/15 bg-white/[0.03] text-white/65 transition-colors hover:border-white/35 hover:bg-white/[0.06] hover:text-white"
              aria-label="Close"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path
                  d="M3 3L11 11M11 3L3 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Path chips */}
        <div className="mb-6 flex flex-wrap items-center gap-2">
          <span className="font-[family-name:var(--font-manrope)] text-[11px] tracking-[0.14em] text-white/35 uppercase">
            Path
          </span>
          <span className="border border-white/12 bg-white/[0.04] px-3 py-1.5 font-[family-name:var(--font-manrope)] text-[12px] font-medium text-white/80">
            {industry?.label ?? "Select industry"}
          </span>
          <span aria-hidden className="text-mekark-red">
            /
          </span>
          <span
            className={`border px-3 py-1.5 font-[family-name:var(--font-manrope)] text-[12px] font-medium ${
              service
                ? "border-mekark-red/50 bg-mekark-red/10 text-mekark-white"
                : "border-white/12 bg-white/[0.04] text-white/40"
            }`}
          >
            {service?.label ?? "Select service"}
          </span>
          {step === 2 && (
            <button
              type="button"
              onClick={onBack}
              className="ml-1 font-[family-name:var(--font-manrope)] text-[12px] font-medium text-white/45 underline-offset-4 transition-colors hover:text-mekark-red hover:underline"
            >
              Change industry
            </button>
          )}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step === 1 ? "industry" : "service"}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: EASE }}
          >
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {options.map((option, index) => (
                <ChoiceCard
                  key={option.slug}
                  index={index}
                  label={option.label}
                  selected={
                    step === 1
                      ? industry?.slug === option.slug
                      : service?.slug === option.slug
                  }
                  onClick={() =>
                    step === 1
                      ? onSelectIndustry(option)
                      : onSelectService(option)
                  }
                />
              ))}
            </div>

            {step === 2 && resultHref && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: EASE, delay: 0.05 }}
                className="mt-8 flex flex-col gap-4 border border-white/10 bg-white/[0.03] p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5"
              >
                <div>
                  <p className="font-[family-name:var(--font-manrope)] text-[11px] font-semibold tracking-[0.18em] text-mekark-red uppercase">
                    Match ready
                  </p>
                  <p className="mt-1.5 font-[family-name:var(--font-manrope)] text-[16px] font-semibold text-mekark-white">
                    {industry?.label}
                    <span className="mx-2 font-normal text-mekark-red">→</span>
                    {service?.label}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onRedirect(resultHref)}
                  className="inline-flex items-center justify-center gap-2.5 bg-mekark-red px-6 py-3.5 font-[family-name:var(--font-manrope)] text-[13px] font-semibold tracking-wide text-white transition-colors hover:bg-[#c4161d]"
                >
                  Continue to enquiry
                  <svg width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden>
                    <path
                      d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
