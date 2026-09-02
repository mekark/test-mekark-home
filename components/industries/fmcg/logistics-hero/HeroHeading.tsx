"use client";

import { motion } from "framer-motion";
import { industryHeroMobileTitleClass } from "@/components/industries/shared/industryHeroMobile";
import macStyles from "./logisticsHeroMac.module.css";
import { fadeSlideUp } from "./motion";

export function HeroHeading() {
  return (
    <motion.h1
      className={`max-w-[342px] text-[25px] font-bold leading-[100%] text-white sm:max-w-[1258px] sm:text-[40px] sm:leading-tight lg:text-[56px] ${industryHeroMobileTitleClass} ${macStyles.heroTitle}`}
      custom={0}
      variants={fadeSlideUp}
      initial="hidden"
      animate="visible"
    >
      Leading FMCG Manufacturing Facility{" "}
      <br className="hidden min-[1201px]:max-[1919px]:inline" />
      Construction Company in South India
    </motion.h1>
  );
}
