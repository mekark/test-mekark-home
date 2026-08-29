"use client";

import { motion } from "framer-motion";
import { fadeSlideUp } from "./motion";

export function WhyMekarkHeader() {
  return (
    <div className="mx-auto flex w-full max-w-[1520px] flex-col items-center gap-4 text-center">
      <motion.h2
        className="text-[32px] font-bold tracking-[-1.33px] text-[#111] sm:text-[40px] lg:text-[50px] lg:leading-[65px] xl:whitespace-nowrap"
        custom={0}
        variants={fadeSlideUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        Why FMCG Facilities from Mekark Are the Better Choice
      </motion.h2>
      <motion.p
        className="max-w-[1101px] text-base leading-[27px] text-black sm:text-lg"
        custom={0.1}
        variants={fadeSlideUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        Mekark is one of South India&apos;s most trusted FMCG manufacturing
        facility construction companies, offering in-house design, fabrication,
        and MEP integration under one roof- not a general contractor treating
        your plant like a generic industrial shed.
      </motion.p>
    </div>
  );
}
