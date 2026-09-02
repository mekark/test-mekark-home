"use client";

import { motion } from "framer-motion";
import { industryHeroMobileHighlightClass } from "@/components/industries/shared/industryHeroMobile";
import { fadeSlideUp } from "./motion";

export function HeroHighlightBox() {
  return (
    <motion.div
      className={`flex w-full max-w-[1090px] items-center border-l-4 border-[#c4161c] bg-white px-3 py-2.5 sm:border-l-[6px] sm:px-4 sm:py-3 md:min-h-[88px] lg:h-[133px] lg:border-l-[10px] lg:px-5 ${industryHeroMobileHighlightClass}`}
      custom={0.2}
      variants={fadeSlideUp}
      initial="hidden"
      animate="visible"
    >
      <h2 className="font-manrope text-[15px] font-bold leading-[1.35] text-[#c4161c] sm:text-[22px] sm:leading-normal md:text-[30px] lg:text-[46px]">
        GMP-Compliant Plants, Warehousing &amp;{" "}
        <br className="hidden lg:inline" />
        Hygienic Infrastructure by Mekark
      </h2>
    </motion.div>
  );
}
