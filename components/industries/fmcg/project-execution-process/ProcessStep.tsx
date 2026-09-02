"use client";

import { motion } from "framer-motion";
import type { ProcessStepItem } from "./data";
import { fadeSlideUp } from "./motion";
import macStyles from "./processMac.module.css";

type ProcessStepProps = {
  step: ProcessStepItem;
  index: number;
  mobile?: boolean;
};

export function ProcessStep({ step, index, mobile = false }: ProcessStepProps) {
  if (mobile) {
    return (
      <motion.article
        className="rounded-2xl border border-[#ececec] bg-white px-4 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.05)] sm:px-5 sm:py-5"
        custom={index * 0.08}
        variants={fadeSlideUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-semibold leading-snug text-[#3c3938]">
            {step.title}
          </h3>
          <p className="text-sm leading-relaxed text-[#555]">
            {step.description}
          </p>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      className={`flex min-w-0 flex-1 flex-col gap-3.5 ${macStyles.stepWrap}`}
      custom={index * 0.08}
      variants={fadeSlideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <p className={`text-[32px] font-medium leading-none text-[#f01d23] sm:text-[40px] ${macStyles.stepNumber}`}>
        {step.number}
      </p>

      <div className={`flex flex-col gap-2.5 ${macStyles.stepContent}`}>
        <h3 className={`text-base font-semibold leading-normal text-[#3c3938] sm:text-lg ${macStyles.stepTitle}`}>
          {step.title}
        </h3>
        <p className={`text-sm leading-[21px] text-[#555] sm:text-base ${macStyles.stepDesc}`}>
          {step.description}
        </p>
      </div>
    </motion.article>
  );
}
