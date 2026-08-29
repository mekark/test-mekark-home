"use client";

import { motion } from "framer-motion";
import { fadeSlideUp } from "./motion";

export function SolutionsCallout() {
  return (
    <motion.div
      className="mx-auto w-full min-w-0 max-w-full rounded-2xl border border-[rgba(228,0,21,0.5)] bg-[rgba(228,0,21,0.05)] px-5 py-5 sm:rounded-[40px] sm:px-8 sm:py-6 lg:px-[32px] lg:py-[24px]"
      custom={0}
      variants={fadeSlideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <p className="text-center text-base font-semibold leading-normal text-[#4c4c4c] sm:text-lg">
        Every FMCG manufacturing facility is custom-engineered around your
        production line, SKU velocity, and compliance classification, ensuring
        consistent output quality and long-term operational reliability for{" "}
        <span className="text-[#e50818]">
          FMCG manufacturers across South India.
        </span>
      </p>
    </motion.div>
  );
}
