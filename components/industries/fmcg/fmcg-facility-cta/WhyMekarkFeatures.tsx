"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FeatureCard } from "./FeatureCard";
import { features } from "./data";
import { fadeSlideRight } from "./motion";

export function WhyMekarkFeatures() {
  return (
    <div className="relative flex flex-col lg:flex-row lg:items-start lg:gap-8 xl:gap-12">
      <div className="relative z-10 mt-0 grid min-w-0 flex-[1.15] grid-cols-1 gap-4 lg:mt-10 lg:grid-cols-3 lg:gap-x-[60px] lg:gap-y-10 lg:[grid-template-columns:repeat(3,minmax(327px,1fr))]">
        {features.map((feature, index) => (
          <FeatureCard key={feature.title} feature={feature} index={index} />
        ))}
      </div>

      <motion.div
        className="relative z-0 mx-auto hidden h-[569px] w-full max-w-[640px] shrink-0 overflow-hidden lg:mx-0 lg:-mr-12 lg:block lg:min-w-0 lg:flex-1 lg:max-w-none xl:-mr-16 2xl:-mr-20"
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
            sizes="50vw"
          />
        </div>
      </motion.div>
    </div>
  );
}
