"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SERVICE_BODY_TEXT_CLASS } from "@/components/services/serviceTypography";

const easeOut = [0.22, 1, 0.36, 1] as const;

export type HowWeDeliverStep = {
  title: string;
  body: string;
  icon?: string;
};

type HowWeDeliverStepsProps = {
  title: string;
  steps: readonly HowWeDeliverStep[];
  arrowSrc?: string;
  desktopFrom?: "sm" | "lg" | "xl";
  desktopCols?: 5 | 6;
  iconBoxClassName?: string;
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

function desktopColClass(cols: 5 | 6) {
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
}: HowWeDeliverStepsProps) {
  const { mobile, desktop } = breakpointClasses(desktopFrom);

  return (
    <>
      <motion.h2
        className="mx-auto mb-10 text-center text-[28px] leading-[1.2] font-bold tracking-[-1px] sm:mb-12 sm:text-[42px] sm:tracking-[-1.33px] lg:mb-[53px] lg:text-[53.33px] lg:leading-[65.33px]"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: easeOut }}
      >
        {title}
      </motion.h2>

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
                        alt=""
                        fill
                        sizes="28px"
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <span className="font-montserrat text-[13px] font-bold text-red">
                      {num}
                    </span>
                  )}
                </div>
              </div>

              <div className="min-w-0 pt-1">
                <span className="mb-1.5 block font-montserrat text-[12px] font-bold tracking-[1.5px] text-red">
                  STEP {num}
                </span>
                <h3 className="font-montserrat text-[16px] leading-[21px] font-bold text-darkslategray">
                  {step.title}
                </h3>
                <p className={`mt-1.5 ${SERVICE_BODY_TEXT_CLASS}`}>
                  {step.body}
                </p>
              </div>
            </motion.li>
          );
        })}
      </ol>

      <div
        className={`mx-auto w-full max-w-[1413px] gap-8 sm:gap-10 xl:gap-8 ${desktop} ${desktopColClass(desktopCols)}`}
      >
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            className="relative"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.5,
              ease: easeOut,
              delay: 0.05 * index,
            }}
          >
            <div className="relative mb-9 h-[107px] w-[107px] rounded-[21.33px] bg-lavenderblush">
              <div className="absolute top-1/2 left-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2">
                {step.icon ? (
                  <Image
                    src={step.icon}
                    alt=""
                    fill
                    sizes="40px"
                    className="object-contain"
                  />
                ) : (
                  <span className="flex h-full w-full items-center justify-center font-montserrat text-[15px] font-bold text-red">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                )}
              </div>
              {index < steps.length - 1 ? (
                <Image
                  src={arrowSrc}
                  alt=""
                  width={67}
                  height={20}
                  className="absolute top-[60px] left-[145px] hidden h-5 w-[67px] xl:block"
                />
              ) : null}
            </div>
            <h3 className="font-montserrat text-[17px] leading-[21.33px] font-bold text-darkslategray sm:text-[18.67px]">
              {step.title}
            </h3>
            <p className={`mt-3 ${SERVICE_BODY_TEXT_CLASS}`}>
              {step.body}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
}
