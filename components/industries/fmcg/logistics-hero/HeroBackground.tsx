"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { backgroundZoom } from "./motion";
import macStyles from "./logisticsHeroMac.module.css";

export function HeroBackground() {
  return (
    <>
      <div className={macStyles.heroBgWrapper}>
        <motion.div
          className={macStyles.heroBgMotion}
          variants={backgroundZoom}
          initial="hidden"
          animate="visible"
        >
          <Image
            src="/images/industries/fmcg/logistics-hero/hero-bg.webp"
            alt="FMCG manufacturing facility at dusk"
            fill
            priority
            className={macStyles.heroBgImage}
            sizes="100vw"
          />
        </motion.div>
      </div>
      <div className={macStyles.heroGradientMobile} aria-hidden />
      <div className={macStyles.heroGradientDesktop} aria-hidden />
    </>
  );
}
