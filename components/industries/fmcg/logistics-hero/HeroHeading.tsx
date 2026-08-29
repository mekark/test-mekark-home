"use client";

import { motion } from "framer-motion";
import { fadeSlideUp } from "./motion";

export function HeroHeading() {
  return (
    <motion.h1
      className="max-w-[1258px] text-[28px] font-bold leading-tight text-white sm:text-[40px] lg:text-[56px]"
      custom={0}
      variants={fadeSlideUp}
      initial="hidden"
      animate="visible"
    >
      Leading FMCG Manufacturing Facility Construction Company in South India
    </motion.h1>
  );
}
