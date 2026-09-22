"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  SERVICE_BODY_TEXT_CLASS,
  SERVICE_BODY_TEXT_CLASS_SCALED,
} from "@/components/services/serviceTypography";
import { SERVICE_SECTION_HEADLINE_CLASS } from "@/lib/sectionLayout";

const easeOut = [0.22, 1, 0.36, 1] as const;

/** Large-desktop headline only — for CSS-scaled canvases (Civil DesignScale). */
const SCALED_SECTION_HEADLINE_CLASS =
  "text-[28px] leading-[1.2] font-bold tracking-[-1px] sm:text-[42px] sm:tracking-[-1.33px] lg:text-[53.33px] lg:leading-[65.33px]";

export type HowWeDeliverStep = {
  title: string;
  body: string;
  icon?: string;
};

export type HowWeDeliverMobileTypography = {
  headlineClass?: string;
  stepLabelClass?: string;
  stepTitleClass?: string;
  stepBodyClass?: string;
};

type HowWeDeliverStepsProps = {
  title: string;
  steps: readonly HowWeDeliverStep[];
  arrowSrc?: string;
  desktopFrom?: "sm" | "lg" | "xl";
  desktopCols?: 5 | 6;
  iconBoxClassName?: string;
  /**
   * When true, skip PEB iMac (`xl:`) shrinks — parent uses CSS scale
   * (Civil DesignScale) so typography stays at the 1920 Figma size.
   */
  scaledCanvas?: boolean;
  /** Font for step titles (defaults to Manrope). */
  accentFontClass?: string;
  /** Font for step numbers (defaults to Montserrat). */
  numberFontClass?: string;
  /** Optional mobile-only typography overrides (below `desktopFrom` breakpoint). */
  mobileTypography?: HowWeDeliverMobileTypography;
};

function breakpointClasses(desktopFrom: "sm" | "lg" | "xl") {
  if (desktopFrom === "xl") {
    return { mobile: "xl:hidden", desktop: "hidden xl:grid" };
  }
  if (desktopFrom === "lg") {
    return { mobile: "lg:hidden", desktop: "hidden lg:grid" };
  }
  return { mobile: "sm:hidden", desktop: "hidden sm:grid" };
}

function desktopHeadlineVisibility(desktopFrom: "sm" | "lg" | "xl") {
  if (desktopFrom === "xl") return "hidden xl:block";
  if (desktopFrom === "lg") return "hidden lg:block";
  return "hidden sm:block";
}

function desktopColClass(cols: 5 | 6, scaledCanvas: boolean) {
  if (scaledCanvas) {
    return cols === 6
      ? "sm:grid-cols-2 lg:grid-cols-6"
      : "sm:grid-cols-2 lg:grid-cols-5";
  }
  return cols === 6
    ? "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
    : "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5";
}

export default function HowWeDeliverSteps({
  title,
  steps,
  arrowSrc = "/images/services/multi-storey/frame212/icons/arrow-step.svg",
  desktopFrom = "sm",
  desktopCols = 5,
  iconBoxClassName = "bg-lavenderblush",
  scaledCanvas = false,
  accentFontClass = "font-manrope",
  numberFontClass = "font-montserrat",
  mobileTypography,
}: HowWeDeliverStepsProps) {
  const { mobile, desktop } = breakpointClasses(desktopFrom);
  const bodyClass = scaledCanvas
    ? SERVICE_BODY_TEXT_CLASS_SCALED
    : SERVICE_BODY_TEXT_CLASS;
  const headlineClass = scaledCanvas
    ? SCALED_SECTION_HEADLINE_CLASS
    : SERVICE_SECTION_HEADLINE_CLASS;
  const headlineSpacing = scaledCanvas
    ? "mx-auto mb-10 text-center sm:mb-12 lg:mb-[53px]"
    : "mx-auto mb-10 text-center sm:mb-12 lg:mb-[53px] xl:mb-10 2xl:mb-[53px]";
  const desktopGridSpacing = scaledCanvas
    ? "mx-auto w-full max-w-[1413px] gap-8 overflow-visible sm:gap-10"
    : "mx-auto w-full max-w-[1413px] gap-8 overflow-visible sm:gap-10 xl:max-w-[1060px] xl:gap-6 2xl:max-w-[1413px] 2xl:gap-10";
  const iconBoxClass = scaledCanvas
    ? "relative mb-9 h-[107px] w-[107px] rounded-[21.33px] bg-lavenderblush"
    : "relative mb-9 h-[107px] w-[107px] rounded-[21.33px] bg-lavenderblush xl:mb-6 xl:h-20 xl:w-20 xl:rounded-2xl 2xl:mb-9 2xl:h-[107px] 2xl:w-[107px] 2xl:rounded-[21.33px]";
  const iconInnerClass = scaledCanvas
    ? "absolute top-1/2 left-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2"
    : "absolute top-1/2 left-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 xl:h-8 xl:w-8 2xl:h-10 2xl:w-10";
  const stepTitleClass = scaledCanvas
    ? `${accentFontClass} text-[17px] leading-[21.33px] font-bold text-darkslategray sm:text-[18.67px]`
    : `${accentFontClass} text-[17px] leading-[21.33px] font-bold text-darkslategray sm:text-[18.67px] xl:text-[15px] xl:leading-[20px] 2xl:text-[18.67px] 2xl:leading-[21.33px]`;
  const stepBodySpacing = scaledCanvas ? "mt-3" : "mt-3 xl:mt-2 2xl:mt-3";
  const arrowClass = scaledCanvas
    ? "absolute top-[60px] left-[145px] hidden h-5 w-[67px] lg:block"
    : "absolute top-10 left-[88px] hidden h-4 w-12 xl:block 2xl:top-[60px] 2xl:left-[145px] 2xl:h-5 2xl:w-[67px]";
  const fallbackNumClass = scaledCanvas
    ? `flex h-full w-full items-center justify-center ${numberFontClass} text-[15px] font-bold text-red`
    : `flex h-full w-full items-center justify-center ${numberFontClass} text-[15px] font-bold text-red xl:text-[13px] 2xl:text-[15px]`;
  const mobileStepLabelClass =
    mobileTypography?.stepLabelClass ??
    `${numberFontClass} text-[12px] font-bold tracking-[1.5px] text-red`;
  const mobileStepTitleClass =
    mobileTypography?.stepTitleClass ??
    `${accentFontClass} text-[16px] leading-[21px] font-bold text-darkslategray`;
  const mobileStepBodyClass = mobileTypography?.stepBodyClass ?? bodyClass;

  return (
    <>
      {mobileTypography?.headlineClass ? (
        <>
          <motion.h2
            className={`${headlineSpacing} ${mobileTypography.headlineClass} ${mobile}`}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: easeOut }}
          >
            {title}
          </motion.h2>
          <motion.h2
            className={`${headlineSpacing} ${headlineClass} ${desktopHeadlineVisibility(desktopFrom)}`}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: easeOut }}
          >
            {title}
          </motion.h2>
        </>
      ) : (
        <motion.h2
          className={`${headlineSpacing} ${headlineClass}`}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: easeOut }}
        >
          {title}
        </motion.h2>
      )}

      <ol className={`relative mx-auto max-w-[420px] list-none ${mobile}`}>
        <span
          className="pointer-events-none absolute top-5 bottom-5 left-[27px] w-px bg-[#f0c8cb]"
          aria-hidden
        />

        {steps.map((step, index) => {
          const num = String(index + 1).padStart(2, "0");
          return (
            <motion.li
              key={step.title}
              className="relative grid grid-cols-[56px_1fr] gap-x-3 pb-8 last:pb-0"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.45,
                ease: easeOut,
                delay: 0.04 * index,
              }}
            >
              <div className="relative z-[1] flex flex-col items-center">
                <div
                  className={`flex size-[56px] items-center justify-center rounded-[16px] ring-4 ring-white ${iconBoxClassName}`}
                >
                  {step.icon ? (
                    <div className="relative size-7">
                      <Image
                        src={step.icon}
                        alt={`${step.title} icon`}
                        fill
                        sizes="28px"
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <span className={`${numberFontClass} text-[13px] font-bold text-red`}>
                      {num}
                    </span>
                  )}
                </div>
              </div>

              <div className="min-w-0 pt-1">
                <span className={`mb-1.5 block ${mobileStepLabelClass}`}>
                  STEP {num}
                </span>
                <h3 className={mobileStepTitleClass}>{step.title}</h3>
                <p className={`mt-1.5 ${mobileStepBodyClass}`}>{step.body}</p>
              </div>
            </motion.li>
          );
        })}
      </ol>

      <div
        className={`${desktopGridSpacing} ${desktop} ${desktopColClass(desktopCols, scaledCanvas)}`}
      >
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            className="relative min-w-0"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.5,
              ease: easeOut,
              delay: 0.05 * index,
            }}
          >
            <div className={iconBoxClass}>
              <div className={iconInnerClass}>
                {step.icon ? (
                  <Image
                    src={step.icon}
                    alt={`${step.title} icon`}
                    fill
                    sizes="40px"
                    className="object-contain"
                  />
                ) : (
                  <span className={fallbackNumClass}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                )}
              </div>
              {index < steps.length - 1 ? (
                <Image
                  src={arrowSrc}
                  alt="Process step arrow"
                  width={67}
                  height={20}
                  className={arrowClass}
                />
              ) : null}
            </div>
            <h3 className={stepTitleClass}>{step.title}</h3>
            <p className={`${stepBodySpacing} ${bodyClass}`}>{step.body}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
}
