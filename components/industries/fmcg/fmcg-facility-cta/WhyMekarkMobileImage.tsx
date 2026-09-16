"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeSlideUp } from "./motion";

export function WhyMekarkMobileImage() {
  return (
    <motion.div
      className="relative h-[200px] w-full overflow-hidden rounded-2xl sm:h-[280px] lg:hidden"
      custom={0.15}
      variants={fadeSlideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Image
        src="/images/industries/fmcg/fmcg-facility-cta/factory-floor.webp"
        alt="FMCG manufacturing facility interior with production equipment"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
    </motion.div>
  );
}
