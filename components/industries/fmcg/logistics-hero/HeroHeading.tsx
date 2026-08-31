"use client";

import { motion } from "framer-motion";
import { fadeSlideUp } from "./motion";

export function HeroHeading() {
  return (
    <motion.h1
      className="max-w-[1258px] text-[26px] font-bold leading-[1.2] text-white sm:text-[40px] sm:leading-tight lg:text-[56px]"
      custom={0}
      variants={fadeSlideUp}
      initial="hidden"
      animate="visible"
    >
      Leading FMCG Manufacturing Facility Construction Company in South India
    </motion.h1>
  );
}
