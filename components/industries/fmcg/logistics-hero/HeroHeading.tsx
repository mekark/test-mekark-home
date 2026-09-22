"use client";

import { motion } from "framer-motion";
import macStyles from "./logisticsHeroMac.module.css";
import { fadeSlideUp } from "./motion";

export function HeroHeading() {
  return (
    <>
      <motion.h1
        className={`${macStyles.heroTitle} ${macStyles.heroDesktop}`}
        custom={0}
        variants={fadeSlideUp}
        initial="hidden"
        animate="visible"
      >
        Leading FMCG Manufacturing Facility{" "}
        <br className={macStyles.titleBreak} />
        Construction Company in South India
      </motion.h1>
      <motion.h1
        className={`${macStyles.heroTitle} ${macStyles.heroMobile}`}
        custom={0}
        variants={fadeSlideUp}
        initial="hidden"
        animate="visible"
      >
        <span className={macStyles.titleLine}>Leading FMCG </span>
        <span className={macStyles.titleLine}>Manufacturing Facility </span>
        <span className={macStyles.titleLine}>Construction Company </span>
        <span className={macStyles.titleLine}>in South India</span>
      </motion.h1>
    </>
  );
}
