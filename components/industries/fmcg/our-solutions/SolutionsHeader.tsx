"use client";

import { motion } from "framer-motion";
import { fadeSlideUp } from "./motion";
import macStyles from "./ourSolutionsMac.module.css";

export function SolutionsHeader() {
  return (
    <div className="flex flex-col gap-2.5">
      <motion.p
        className="text-xs font-semibold uppercase tracking-[0.14em] text-[#e50818] lg:hidden"
        custom={0}
        variants={fadeSlideUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        End-to-end EPC
      </motion.p>
      <motion.h2
        className={`text-[28px] font-bold leading-tight text-black sm:text-[40px] lg:text-[46px] ${macStyles.headerTitle}`}
        custom={0}
        variants={fadeSlideUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        Our Solutions
      </motion.h2>
      <motion.h3
        className={`max-w-[654px] text-lg font-medium leading-snug text-black sm:text-2xl lg:text-[28px] ${macStyles.headerSubtitle}`}
        custom={0.1}
        variants={fadeSlideUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        Complete FMCG Facility Solutions, Engineered End-to-End
      </motion.h3>
      <motion.p
        className={`max-w-[654px] text-base text-[#6e6e6e] lg:text-lg ${macStyles.headerBody}`}
        custom={0.2}
        variants={fadeSlideUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        As a full-service, turnkey EPC FMCG facility construction company in
        South India, Mekark designs, fabricates, and builds production,
        packaging, and warehousing environments engineered around your
        throughput targets, hygiene classification, and utility requirements.
      </motion.p>
    </div>
  );
}
