"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FeatureCard } from "./FeatureCard";
import { features } from "./data";
import { fadeSlideRight } from "./motion";
import whyMac from "./fmcgCtaWhyMac.module.css";

const desktopFeatureColumns = [
  { items: [features[0], features[3]], colClass: whyMac.featureColA },
  { items: [features[1], features[4]], colClass: whyMac.featureColB },
  { items: [features[2], features[5]], colClass: whyMac.featureColC },
];

export function WhyMekarkFeatures() {
  return (
    <div
      className={`relative flex flex-col lg:flex-row lg:items-start lg:gap-8 xl:gap-12 ${whyMac.featuresRow}`}
    >
      <div className="relative z-10 mt-0 grid min-w-0 flex-[1.15] grid-cols-1 gap-4 min-[1201px]:hidden">
        {features.map((feature, index) => (
          <FeatureCard key={feature.title} feature={feature} index={index} />
        ))}
      </div>

      <div
        className={`relative z-10 mt-0 hidden min-w-0 flex-[1.15] min-[1201px]:mt-10 min-[1201px]:flex min-[1201px]:flex-row min-[1201px]:gap-x-[60px] lg:mt-10 lg:gap-x-[60px] xl:gap-x-[60px] ${whyMac.featuresGrid}`}
      >
        {desktopFeatureColumns.map(({ items, colClass }) => (
          <div
            key={items[0].title}
            className={`flex flex-col gap-y-10 ${colClass}`}
          >
            {items.map((feature, index) => (
              <div key={feature.title} className={whyMac.featureCard}>
                <FeatureCard feature={feature} index={index} />
              </div>
            ))}
          </div>
        ))}
      </div>

      <motion.div
        className={`relative z-0 mx-auto hidden h-[569px] w-full max-w-[640px] shrink-0 min-[1201px]:mx-0 min-[1201px]:block min-[1201px]:min-w-0 min-[1201px]:flex-1 min-[1201px]:max-w-none min-[1201px]:overflow-visible lg:mx-0 lg:block lg:min-w-0 lg:flex-1 lg:max-w-none ${whyMac.featuresImage}`}
        custom={0.2}
        variants={fadeSlideRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className={`absolute inset-0 ${whyMac.featuresImageMask} ${whyMac.featuresImageBlend}`}>
          <Image
            src="/images/industries/fmcg/fmcg-facility-cta/factory-floor.png"
            alt="FMCG manufacturing facility interior with production equipment"
            fill
            className="object-cover object-right-bottom"
            sizes="50vw"
          />
        </div>
        <div className={whyMac.featuresImageGrad} aria-hidden />
      </motion.div>
    </div>
  );
}
