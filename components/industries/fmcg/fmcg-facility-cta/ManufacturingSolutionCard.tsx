"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ManufacturingSolutionItem } from "./data";
import { fadeSlideUp } from "./motion";
import macStyles from "./manufacturingSolutionsMac.module.css";

type ManufacturingSolutionCardProps = {
  solution: ManufacturingSolutionItem;
  index: number;
  mobile?: boolean;
};

export function ManufacturingSolutionCard({
  solution,
  index,
  mobile = false,
}: ManufacturingSolutionCardProps) {
  if (mobile) {
    return (
      <motion.article
        className={macStyles.mobileCard}
        custom={index * 0.06}
        variants={fadeSlideUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className={macStyles.mobileCardImage}>
          <Image
            src={solution.image}
            alt={solution.title}
            fill
            className="object-cover"
            sizes="337px"
          />
        </div>
        <div className={macStyles.mobileCardBody}>
          <h3 className={macStyles.mobileCardTitle}>{solution.title}</h3>
          <p className={macStyles.mobileCardDesc}>{solution.description}</p>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      className={`flex flex-col gap-8 ${macStyles.card}`}
      custom={index * 0.08}
      variants={fadeSlideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div
        className={`relative aspect-square w-full overflow-hidden rounded-[21px] ${macStyles.cardImage}`}
      >
        <Image
          src={solution.image}
          alt={solution.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 258px"
        />
      </div>

      <div className={`flex flex-col gap-2.5 ${macStyles.cardBody}`}>
        <h3
          className={`text-lg font-bold leading-[27px] text-[#3c3938] ${macStyles.cardTitle}`}
        >
          {solution.title}
        </h3>
        <p
          className={`text-base leading-[21px] text-[#555] ${macStyles.cardDesc}`}
        >
          {solution.description}
        </p>
      </div>
    </motion.article>
  );
}
