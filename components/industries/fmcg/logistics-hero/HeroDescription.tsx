"use client";

import { motion } from "framer-motion";
import macStyles from "./logisticsHeroMac.module.css";
import { fadeSlideUp } from "./motion";

export function HeroDescription() {
  return (
    <>
      <motion.p
        className={`${macStyles.heroDesc} ${macStyles.heroDesktop}`}
        custom={0.4}
        variants={fadeSlideUp}
        initial="hidden"
        animate="visible"
      >
        Mekark builds turnkey FMCG manufacturing plants, packaging units,
        distribution
        <br className={macStyles.descBreak} /> warehouses, and cold storage
        infrastructure across Tamil Nadu, Karnataka, Andhra Pradesh,
        <br className={macStyles.descBreak} /> Telangana, and Kerala.
        Engineered for speed-to-market, hygiene, and long-term reliability.
      </motion.p>
      <motion.p
        className={`${macStyles.heroDesc} ${macStyles.heroMobile}`}
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
    </>
  );
}
