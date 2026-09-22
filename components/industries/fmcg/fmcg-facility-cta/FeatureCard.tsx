"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { FeatureItem } from "./data";
import { fadeSlideUp } from "./motion";
import {
  industryMobileFeatureCardClass,
  industryMobileFeatureDescriptionClass,
  industryMobileFeatureIconGradientClass,
  industryMobileFeatureIconWrapClass,
  industryMobileFeatureTextWrapClass,
  industryMobileFeatureTitleClass,
} from "@/components/industries/shared/industryMobileFeatureCard";

type FeatureCardProps = {
  feature: FeatureItem;
  index: number;
};

export function FeatureCard({ feature, index }: FeatureCardProps) {
  return (
    <motion.article
      className={industryMobileFeatureCardClass}
      custom={index * 0.08}
      variants={fadeSlideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className={industryMobileFeatureIconWrapClass}>
        <div
          aria-hidden
          className={industryMobileFeatureIconGradientClass}
          style={{
            backgroundImage:
              "linear-gradient(145deg, rgba(196, 22, 28, 0.3) 0%, rgba(196, 22, 28, 0.15) 100%)",
          }}
        />
        <div className="relative size-[22px] overflow-hidden lg:size-[26px]">
          <Image
            src={feature.icon}
            alt={`${feature.title} icon`}
            width={26}
            height={26}
            className="size-full"
          />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
        />
      </div>

      <div className={industryMobileFeatureTextWrapClass}>
        <h4
          className={`${industryMobileFeatureTitleClass}${feature.titleNoWrap ? " whitespace-nowrap" : ""}`}
        >
          {feature.titleLines ? (
            <>
              <span className="whitespace-nowrap">{feature.titleLines[0]}</span>
              <br />
              {feature.titleLines[1]}
            </>
          ) : (
            feature.title
          )}
        </h4>
        <p
          className={`${industryMobileFeatureDescriptionClass} ${feature.descriptionWidth ?? feature.descriptionMaxWidth ?? ""}`}
        >
          {feature.descriptionLines ? (
            <>
              <span className="min-[1201px]:hidden">{feature.description}</span>
              <span className="hidden min-[1201px]:block">
                {feature.descriptionLines.map((line, lineIndex) => (
                  <span key={lineIndex} className="block whitespace-nowrap">
                    {line}
                  </span>
                ))}
              </span>
            </>
          ) : (
            feature.description
          )}
        </p>
      </div>
    </motion.article>
  );
}
