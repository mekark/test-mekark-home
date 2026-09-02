"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { backgroundZoom } from "./motion";
import {
  industryHeroMobileBgWrapperClass,
  industryHeroMobileGradientStyle,
  industryHeroMobileImageClass,
} from "@/components/industries/shared/industryHeroMobile";

export function HeroBackground() {
  return (
    <>
      <div
        className={`absolute inset-0 z-0 overflow-hidden ${industryHeroMobileBgWrapperClass}`}
      >
        <motion.div
          className="absolute inset-0 md:left-auto md:right-[-9%] md:w-[100%]"
          variants={backgroundZoom}
          initial="hidden"
          animate="visible"
        >
          <Image
            src="/images/industries/fmcg/logistics-hero/hero-bg.png"
            alt="FMCG manufacturing facility at dusk"
            fill
            priority
            className={`object-cover object-right ${industryHeroMobileImageClass}`}
            sizes="100vw"
          />
        </motion.div>
      </div>
      <div
        className="absolute inset-0 z-[1] md:hidden"
        style={industryHeroMobileGradientStyle}
        aria-hidden
      />
      <div
        className="absolute inset-0 z-[1] hidden md:block"
        style={{
          backgroundImage:
            "linear-gradient(105.99deg, rgb(6, 6, 6) 8.58%, rgba(6, 6, 6, 0.8) 44.21%, rgba(6, 6, 6, 0) 76.38%)",
        }}
        aria-hidden
      />
    </>
  );
}
