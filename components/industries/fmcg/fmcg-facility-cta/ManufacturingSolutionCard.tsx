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
        className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#f0d4d4] bg-white shadow-[0_4px_24px_rgba(229,8,24,0.08)]"
        custom={index * 0.06}
        variants={fadeSlideUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={solution.image}
            alt={solution.title}
            fill
            className="object-cover"
            sizes="300px"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/30 to-transparent"
          />
          <div className="absolute left-3 top-3 flex size-7 items-center justify-center rounded-full bg-white/95 text-[11px] font-bold tabular-nums text-[#e50818] shadow-sm">
            {String(index + 1).padStart(2, "0")}
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-2 px-4 py-4">
          <h3 className="text-base font-bold leading-snug text-[#3c3938]">
            {solution.title}
          </h3>
          <p className="text-sm leading-relaxed text-[#555]">
            {solution.description}
          </p>
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
      <div className={`relative aspect-square w-full overflow-hidden rounded-[21px] ${macStyles.cardImage}`}>
        <Image
          src={solution.image}
          alt={solution.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 258px"
        />
      </div>

      <div className={`flex flex-col gap-2.5 ${macStyles.cardBody}`}>
        <h3 className={`text-lg font-bold leading-[27px] text-[#3c3938] ${macStyles.cardTitle}`}>
          {solution.title}
        </h3>
        <p className={`text-base leading-[21px] text-[#555] ${macStyles.cardDesc}`}>
          {solution.description}
        </p>
      </div>
    </motion.article>
  );
}
