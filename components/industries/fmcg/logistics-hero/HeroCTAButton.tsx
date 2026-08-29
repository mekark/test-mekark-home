"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeSlideUp } from "./motion";

export function HeroCTAButton() {
  return (
    <motion.a
      href="/#enquiry"
      className="inline-flex w-fit self-start items-center gap-3 rounded-[10.667px] bg-[#c4161c] px-8 py-5 shadow-[0_10.667px_21.333px_rgba(196,22,28,0.3)]"
      custom={0.6}
      variants={fadeSlideUp}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="text-lg font-semibold text-white sm:text-[21px] sm:leading-8">
        Get a Free Consultation
      </span>
      <motion.span
        className="relative size-[21px] shrink-0 overflow-hidden"
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        <Image
          src="/images/industries/fmcg/logistics-hero/arrow-icon.svg"
          alt=""
          width={21}
          height={21}
          className="size-full"
        />
      </motion.span>
    </motion.a>
  );
}
