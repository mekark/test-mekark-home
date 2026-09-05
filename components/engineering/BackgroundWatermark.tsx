"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { engineeringNumbers } from "@/data/engineering";
import { defaultViewport } from "@/lib/motion/viewport";

export function BackgroundWatermark() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden bg-mekark-white"
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute inset-0 overflow-hidden opacity-40"
        initial={reduceMotion ? false : { opacity: 0, scale: 1.04 }}
        whileInView={reduceMotion ? undefined : { opacity: 0.4, scale: 1 }}
        viewport={defaultViewport}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden
      >
        <Image
          src={engineeringNumbers.watermarkSrc}
          alt=""
          fill
          className="object-cover object-[5.58%_top]"
          sizes="100vw"
          priority={false}
        />
      </motion.div>
    </>
  );
}
