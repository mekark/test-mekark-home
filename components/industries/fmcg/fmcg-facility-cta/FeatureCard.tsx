"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { FeatureItem } from "./data";
import { fadeSlideUp } from "./motion";

type FeatureCardProps = {
  feature: FeatureItem;
  index: number;
};

export function FeatureCard({ feature, index }: FeatureCardProps) {
  return (
    <motion.article
      className="flex flex-col gap-[19px]"
      custom={index * 0.08}
      variants={fadeSlideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="relative flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-[14px] shadow-[0_4px_17px_rgba(196,22,28,0.2)]">
        <div
          aria-hidden
          className="absolute inset-0 rounded-[14px]"
          style={{
            backgroundImage:
              "linear-gradient(145deg, rgba(196, 22, 28, 0.3) 0%, rgba(196, 22, 28, 0.15) 100%)",
          }}
        />
        <div className="relative size-[26px] overflow-hidden">
          <Image
            src={feature.icon}
            alt=""
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

      <div className="flex flex-col gap-2.5">
        <h4 className="text-lg font-medium leading-[22px] text-black">
          {feature.title}
        </h4>
        <p className="text-sm leading-normal text-[#6e6e6e]">
          {feature.description}
        </p>
      </div>
    </motion.article>
  );
}
