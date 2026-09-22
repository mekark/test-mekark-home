"use client";

import { motion } from "framer-motion";
import macStyles from "./logisticsHeroMac.module.css";
import { fadeSlideUp } from "./motion";

export function HeroHighlightBox() {
  return (
    <>
      <motion.div
        className={`${macStyles.highlightBox} ${macStyles.heroDesktop}`}
        custom={0.2}
        variants={fadeSlideUp}
        initial="hidden"
        animate="visible"
      >
        <h2 className={macStyles.highlightTitle}>
          GMP-Compliant Plants, Warehousing &amp;{" "}
          <br className={macStyles.highlightBreak} />
          Hygienic Infrastructure by Mekark
        </h2>
      </motion.div>
      <motion.div
        className={`${macStyles.highlightBox} ${macStyles.heroMobile}`}
        custom={0.2}
        variants={fadeSlideUp}
        initial="hidden"
        animate="visible"
      >
        <h2 className={macStyles.highlightTitle}>
          GMP-Compliant Plants, Warehousing &amp; Hygienic Infrastructure by
          Mekark
        </h2>
      </motion.div>
    </>
  );
}
