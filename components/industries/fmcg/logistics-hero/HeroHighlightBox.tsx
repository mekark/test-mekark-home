"use client";

import { motion } from "framer-motion";
import { borderGrow, fadeSlideUp } from "./motion";

export function HeroHighlightBox() {
  return (
    <motion.div
      className="relative max-w-[1090px] bg-white pl-[18px] sm:pl-5"
      custom={0.2}
      variants={fadeSlideUp}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="absolute left-0 top-0 h-full w-1 origin-top bg-[#c4161c] sm:w-1.5 lg:w-[10px]"
        variants={borderGrow}
        initial="hidden"
        animate="visible"
      />
      <p className="py-3 pr-3 text-[15px] font-bold leading-[1.35] text-[#c4161c] sm:py-5 sm:pr-5 sm:text-[22px] sm:leading-snug md:py-6 md:text-[32px] lg:text-[46px]">
        GMP-Compliant Plants, Warehousing &amp; Hygienic Infrastructure by Mekark
      </p>
    </motion.div>
  );
}
