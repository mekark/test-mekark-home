"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FeatureCard } from "./FeatureCard";
import { features } from "./data";
import { fadeSlideRight } from "./motion";

export function WhyMekarkFeatures() {
  return (
    <div className="relative flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-8 xl:gap-12">
      <div className="relative z-10 grid min-w-0 flex-[1.15] grid-cols-1 gap-x-[60px] gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <FeatureCard key={feature.title} feature={feature} index={index} />
        ))}
      </div>

      <motion.div
        className="relative z-0 mx-auto h-[320px] w-full max-w-[640px] shrink-0 overflow-hidden sm:h-[420px] lg:mx-0 lg:-mr-12 lg:h-[569px] lg:min-w-0 lg:flex-1 lg:max-w-none xl:-mr-16 2xl:-mr-20"
        custom={0.2}
        variants={fadeSlideRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div
          className="absolute inset-0"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.25) 18%, rgba(0, 0, 0, 0.65) 34%, black 52%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.25) 18%, rgba(0, 0, 0, 0.65) 34%, black 52%)",
          }}
        >
          <Image
            src="/images/industries/fmcg/fmcg-facility-cta/factory-floor.png"
            alt="FMCG manufacturing facility interior with production equipment"
            fill
            className="object-cover object-right-bottom"
            sizes="(max-width: 1024px) 640px, 50vw"
          />
        </div>
      </motion.div>
    </div>
  );
}
