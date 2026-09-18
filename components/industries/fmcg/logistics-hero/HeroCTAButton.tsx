"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  industryHeroMobileButtonClass,
  industryHeroMobileButtonIconClass,
  industryHeroMobileButtonTextClass,
} from "@/components/industries/shared/industryHeroMobile";
import { useServiceEnquiry } from "@/components/services/ServiceEnquiryProvider";
import macStyles from "./logisticsHeroMac.module.css";
import { fadeSlideUp } from "./motion";

export function HeroCTAButton() {
  const { openEnquiry } = useServiceEnquiry();

  return (
    <motion.button
      type="button"
      onClick={openEnquiry}
      className={`inline-flex cursor-pointer items-center justify-center gap-[7.1px] rounded-[5.65px] border-0 bg-[#c4161c] px-5 py-2.5 shadow-[0px_5.652px_22.61px_rgba(196,22,28,0.3)] sm:w-fit sm:rounded-[8px] sm:px-8 sm:py-5 sm:shadow-[0_10.667px_21.333px_rgba(196,22,28,0.3)] ${industryHeroMobileButtonClass} ${macStyles.heroBtn}`}
      custom={0.6}
      variants={fadeSlideUp}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className={`${industryHeroMobileButtonTextClass} ${macStyles.heroBtnText}`}>
        Get a Free Quote
      </span>
      <motion.span
        className={`relative shrink-0 overflow-hidden sm:size-[21px] ${industryHeroMobileButtonIconClass} ${macStyles.heroBtnIcon}`}
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        <Image
          src="/images/industries/fmcg/logistics-hero/arrow-icon.svg"
          alt="Arrow icon"
          width={21}
          height={21}
          className="size-full"
        />
      </motion.span>
    </motion.button>
  );
}
