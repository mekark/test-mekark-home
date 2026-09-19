"use client";

import { motion, useReducedMotion } from "framer-motion";
import { engineeringNumbers } from "@/data/engineering";
import { drawVertical, fadeUp, pulseDot, staggerContainer } from "@/lib/motion-variants";

const rowClassName =
  "flex h-full w-full min-w-0 max-w-full items-stretch gap-4 sm:gap-[22px] xl:gap-5 2xl:gap-[22px]";

const dividerClassName =
  "relative w-[1.3px] shrink-0 self-stretch min-h-[120px] sm:min-h-[150px] xl:min-h-0";

const dividerStyle = {
  background:
    "linear-gradient(180deg, rgba(214,214,214,0), #d6d6d6 20%, #d6d6d6 80%, rgba(214,214,214,0))",
} as const;

const dotOuterClassName =
  "absolute left-1/2 top-1/2 z-10 flex size-[18.7px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[1.3px] border-solid border-[#d6d6d6] bg-white xl:size-[14px] 2xl:size-[18.7px]";

const dotInnerClassName =
  "size-2 rounded bg-mekark-red shadow-[0_0_16px_rgba(237,32,36,0.7)] xl:size-[6px] xl:shadow-[0_0_12px_rgba(237,32,36,0.7)] 2xl:size-2 2xl:shadow-[0_0_16px_rgba(237,32,36,0.7)]";

const textClassName =
  "text-left text-[clamp(0.8125rem,3.2vw,0.9375rem)] leading-[1.45] text-[#2a2a2a] sm:text-[clamp(0.875rem,1.8vw,1.0625rem)] sm:leading-[1.45] lg:text-[clamp(0.9375rem,1.5vw,1.125rem)] lg:leading-[1.4] xl:text-[clamp(1.05rem,1.45vw,1.35rem)] xl:leading-[1.4] 2xl:max-w-none 2xl:text-[28px] 2xl:leading-[34px]";

function DescriptionCopy() {
  const { description } = engineeringNumbers;

  return (
    <p className={textClassName}>
      <span className="2xl:block 2xl:whitespace-nowrap">{description.line1}</span>
      <span className="2xl:hidden"> </span>
      <span className="2xl:block 2xl:whitespace-nowrap">{description.line2}</span>
    </p>
  );
}

function ProductionDescriptionContent() {
  return (
    <>
      <div className={dividerClassName} style={dividerStyle}>
        <span className={dotOuterClassName}>
          <span className={dotInnerClassName} />
        </span>
      </div>
      <div className="flex min-w-0 flex-1 items-center">
        <DescriptionCopy />
      </div>
    </>
  );
}

function ProductionDescriptionAnimated() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className={rowClassName}>
        <ProductionDescriptionContent />
      </div>
    );
  }

  return (
    <motion.div
      className={rowClassName}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        variants={drawVertical}
        className={dividerClassName}
        style={dividerStyle}
      >
        <motion.span variants={pulseDot} className={dotOuterClassName}>
          <span className={dotInnerClassName} />
        </motion.span>
      </motion.div>
      <motion.div variants={fadeUp} className="flex min-w-0 flex-1 items-center">
        <DescriptionCopy />
      </motion.div>
    </motion.div>
  );
}

export function ProductionDescription() {
  return (
    <>
      <div className={`${rowClassName} xl:hidden`}>
        <ProductionDescriptionContent />
      </div>
      <div className="hidden h-full xl:block">
        <ProductionDescriptionAnimated />
      </div>
    </>
  );
}
