"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { backgroundZoom } from "./motion";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        variants={backgroundZoom}
        initial="hidden"
        animate="visible"
      >
        <Image
          src="/images/industries/fmcg/logistics-hero/hero-bg.png"
          alt="FMCG manufacturing facility at dusk"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>
      <div
        className="absolute inset-0 md:hidden"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(6, 6, 6, 0.88) 0%, rgba(6, 6, 6, 0.72) 55%, rgba(6, 6, 6, 0.5) 100%)",
        }}
      />
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage:
            "linear-gradient(105.99deg, rgb(6, 6, 6) 8.58%, rgba(6, 6, 6, 0.8) 44.21%, rgba(6, 6, 6, 0) 76.38%)",
        }}
      />
    </div>
  );
}
