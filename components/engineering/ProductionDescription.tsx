"use client";

import { motion, useReducedMotion } from "framer-motion";
import { engineeringNumbers } from "@/data/engineering";
import { drawVertical, fadeUp, pulseDot, staggerContainer } from "@/lib/motion-variants";

export function ProductionDescription() {
  const reduceMotion = useReducedMotion();
  const { description } = engineeringNumbers;

  return (
    <motion.div
      className="flex w-full min-w-0 max-w-full items-stretch gap-4 sm:gap-[22px] xl:w-[min(100%,22.5rem)] xl:shrink-0 xl:grow-0 xl:self-center xl:gap-5 2xl:w-auto 2xl:max-w-none 2xl:gap-[22px]"
      variants={reduceMotion ? undefined : staggerContainer}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        variants={reduceMotion ? undefined : drawVertical}
        className="relative w-[1.3px] shrink-0 min-h-[120px] sm:min-h-[150px] xl:min-h-[180px] 2xl:min-h-[240px]"
        style={{
          background:
            "linear-gradient(180deg, rgba(214,214,214,0), #d6d6d6 20%, #d6d6d6 80%, rgba(214,214,214,0))",
        }}
      >
        <motion.span
          variants={reduceMotion ? undefined : pulseDot}
          className="absolute left-1/2 top-1/2 z-10 flex size-[18.7px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[1.3px] border-solid border-[#d6d6d6] bg-white xl:size-[14px] 2xl:size-[18.7px]"
        >
          <span className="size-2 rounded bg-mekark-red shadow-[0_0_16px_rgba(237,32,36,0.7)] xl:size-[6px] xl:shadow-[0_0_12px_rgba(237,32,36,0.7)] 2xl:size-2 2xl:shadow-[0_0_16px_rgba(237,32,36,0.7)]" />
        </motion.span>
      </motion.div>
      <motion.div
        variants={reduceMotion ? undefined : fadeUp}
        className="flex min-w-0 flex-1 items-center"
      >
        <p className="text-left text-[clamp(0.8125rem,3.2vw,0.9375rem)] leading-[1.45] text-[#2a2a2a] sm:text-[clamp(0.875rem,1.8vw,1.0625rem)] sm:leading-[1.45] lg:text-[clamp(0.9375rem,1.5vw,1.125rem)] lg:leading-[1.4] xl:text-[clamp(1rem,1.4vw,1.25rem)] xl:leading-[1.35] 2xl:max-w-none 2xl:text-[28px] 2xl:leading-[34px]">
          <span className="2xl:block 2xl:whitespace-nowrap">
            {description.line1}
          </span>
          <span className="2xl:hidden"> </span>
          <span className="2xl:block 2xl:whitespace-nowrap">
            {description.line2}
          </span>
        </p>
      </motion.div>
    </motion.div>
  );
}
