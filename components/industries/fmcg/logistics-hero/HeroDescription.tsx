"use client";

import { motion } from "framer-motion";
import { fadeSlideUp } from "./motion";

export function HeroDescription() {
  return (
    <motion.p
      className="flex w-full max-w-[1015px] items-center text-left font-manrope text-2xl font-normal leading-[33.33px] text-whitesmoke"
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
