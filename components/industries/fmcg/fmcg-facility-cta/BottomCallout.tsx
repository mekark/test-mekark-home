"use client";

import { motion } from "framer-motion";
import { fadeSlideUp } from "./motion";
import whyMac from "./fmcgCtaWhyMac.module.css";

export function BottomCallout() {
  return (
    <motion.div
      className={`mx-auto w-full min-w-0 max-w-full rounded-[24px] border border-[rgba(228,0,21,0.5)] bg-[rgba(228,0,21,0.05)] px-6 py-6 sm:rounded-[32px] sm:px-8 lg:rounded-[40px] lg:px-[32px] lg:py-[24px] ${whyMac.bottomCallout}`}
      custom={0}
      variants={fadeSlideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <p className={`text-center text-base leading-[27px] text-[#4c4c4c] sm:text-lg ${whyMac.bottomCalloutText}`}>
        The difference isn&apos;t just how fast an FMCG plant gets built;
        it&apos;s whether it protects your product quality, compliance, and
        launch timeline from day one.{" "}
        <span className="font-semibold text-[#e50818]">
          That&apos;s the engineering standard Mekark builds to.
        </span>
      </p>
    </motion.div>
  );
}
