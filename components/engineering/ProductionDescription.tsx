"use client";

import { motion, useReducedMotion } from "framer-motion";
import { engineeringNumbers } from "@/data/engineering";
import { drawVertical, fadeUp, pulseDot, staggerContainer } from "@/lib/motion-variants";

const rowClassName =
  "flex w-full min-w-0 max-w-full flex-col items-center justify-end max-lg:min-h-[91px] lg:h-full lg:flex-row lg:items-stretch lg:gap-4 xl:gap-5 2xl:gap-[22px]";

const dividerClassName =
  "relative w-px shrink-0 max-lg:h-[49px] lg:w-[1.3px] lg:self-stretch lg:min-h-[150px] xl:min-h-0";

const dividerStyle = {
  background:
    "linear-gradient(180deg, rgba(214,214,214,0), #d6d6d6 20%, #d6d6d6 80%, rgba(214,214,214,0))",
} as const;

const dotOuterClassName =
  "absolute left-1/2 z-10 flex size-[18.667px] -translate-x-1/2 items-center justify-center rounded-[9.333px] border-[1.333px] border-solid border-[#d6d6d6] bg-white max-lg:top-[calc(50%-25.19px)] max-lg:-translate-y-1/2 lg:top-1/2 lg:size-[18.7px] lg:-translate-y-1/2 lg:rounded-full lg:border-[1.3px] xl:size-[14px] 2xl:size-[18.7px]";

const dotInnerClassName =
  "size-2 rounded bg-mekark-red shadow-[0_0_16px_rgba(237,32,36,0.7)] max-lg:size-2 max-lg:rounded-[4px] xl:size-[6px] xl:shadow-[0_0_12px_rgba(237,32,36,0.7)] 2xl:size-2 2xl:shadow-[0_0_16px_rgba(237,32,36,0.7)]";

const textClassName =
  "text-center text-sm font-normal leading-[22px] text-[#2a2a2a] lg:text-left lg:text-[clamp(0.8125rem,3.2vw,0.9375rem)] lg:leading-[1.45] xl:text-[clamp(1.05rem,1.45vw,1.35rem)] xl:leading-[1.4] 2xl:max-w-none 2xl:text-[28px] 2xl:leading-[34px]";

function DescriptionCopy() {
  const { description } = engineeringNumbers;

  return (
    <p className={textClassName}>
      <span className="block lg:inline 2xl:block 2xl:whitespace-nowrap">
        {description.line1}
      </span>
      <span className="hidden lg:inline 2xl:hidden"> </span>
      <span className="block lg:inline 2xl:block 2xl:whitespace-nowrap">
        {description.line2}
      </span>
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
      <div className="flex w-full min-w-0 flex-1 items-center max-lg:justify-center lg:w-auto">
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
      <motion.div
        variants={fadeUp}
        className="flex w-full min-w-0 flex-1 items-center max-lg:justify-center lg:w-auto"
      >
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
