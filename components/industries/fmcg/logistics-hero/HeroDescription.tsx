"use client";

import { motion } from "framer-motion";
import { industryHeroMobileDescriptionClass } from "@/components/industries/shared/industryHeroMobile";
import { fadeSlideUp } from "./motion";

export function HeroDescription() {
  return (
    <motion.p
      className={`w-full max-w-[1015px] text-left font-manrope text-whitesmoke sm:text-base sm:leading-relaxed md:text-lg lg:text-2xl lg:leading-[33.33px] ${industryHeroMobileDescriptionClass}`}
      custom={0.4}
      variants={fadeSlideUp}
      initial="hidden"
      animate="visible"
    >
      Mekark builds turnkey FMCG manufacturing plants, packaging units,
      distribution warehouses, and cold storage infrastructure across Tamil
      Nadu, Karnataka, Andhra Pradesh, Telangana, and Kerala. Engineered for
      speed-to-market, hygiene, and long-term reliability.
    </motion.p>
  );
}
