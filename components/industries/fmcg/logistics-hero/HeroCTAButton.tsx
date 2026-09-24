"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useServiceEnquiry } from "@/components/services/ServiceEnquiryProvider";
import macStyles from "./logisticsHeroMac.module.css";
import { fadeSlideUp } from "./motion";

export function HeroCTAButton() {
  const { openEnquiry } = useServiceEnquiry();

  return (
    <motion.button
      type="button"
      onClick={openEnquiry}
      className={macStyles.heroBtn}
      custom={0.6}
      variants={fadeSlideUp}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className={macStyles.heroBtnText}>Get a Free Quote</span>
      <motion.span
        className={macStyles.heroBtnIcon}
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        <Image
          className={macStyles.ctaIcon}
          src="/images/industries/fmcg/logistics-hero/arrow-icon.svg"
          alt=""
          width={21}
          height={21}
          aria-hidden="true"
        />
        <Image
          className={macStyles.mobileArrowIcon}
          src="/images/mobile/component-4.webp"
          width={24}
          height={24}
          alt=""
          aria-hidden="true"
        />
      </motion.span>
    </motion.button>
  );
}
