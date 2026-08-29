"use client";

import { motion } from "framer-motion";
import { borderGrow, fadeSlideUp } from "./motion";

export function HeroHighlightBox() {
  return (
    <motion.div
      className="relative max-w-[1090px] bg-white pl-5"
      custom={0.2}
      variants={fadeSlideUp}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="absolute left-0 top-0 h-full w-[10px] origin-top bg-[#c4161c]"
        variants={borderGrow}
        initial="hidden"
        animate="visible"
      />
      <p className="py-5 pr-5 text-[22px] font-bold leading-snug text-[#c4161c] sm:py-6 sm:text-[32px] lg:text-[46px]">
        GMP-Compliant Plants, Warehousing &amp; Hygienic Infrastructure by Mekark
      </p>
    </motion.div>
  );
}
