"use client";

import { motion } from "framer-motion";
import { fadeSlideUp } from "./motion";
import macStyles from "./ourSolutionsMac.module.css";

export function SolutionsCallout() {
  return (
    <motion.div
      className={`mx-auto w-full min-w-0 max-w-[1450px] rounded-[24px] border-[0.5px] border-[rgba(228,0,21,0.5)] bg-[rgba(228,0,21,0.05)] px-5 py-5 sm:rounded-[40px] sm:px-8 sm:py-6 lg:px-[32.5px] lg:py-[24.5px] ${macStyles.callout}`}
      custom={0}
      variants={fadeSlideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <p className={`mx-auto max-w-[1385px] text-center font-manrope text-base font-semibold leading-normal text-[#4c4c4c] sm:text-lg ${macStyles.calloutText}`}>
        Every FMCG manufacturing facility is custom-engineered around your
        production line, SKU velocity, and compliance classification, ensuring
        consistent output
        <br className="hidden sm:inline" /> quality and long-term operational
        reliability for{" "}
        <span className="text-[#e50818]">
          FMCG manufacturers across South India.
        </span>
      </p>
    </motion.div>
  );
}
