"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { getCardLayout, type SolutionItem } from "./data";
import { fadeSlideRight, fadeSlideUp } from "./motion";

type SolutionCardProps = {
  solution: SolutionItem;
  index: number;
  positioned?: boolean;
};

export function SolutionCard({
  solution,
  index,
  positioned = false,
}: SolutionCardProps) {
  const layout = positioned ? getCardLayout(solution) : undefined;

  return (
    <motion.article
      className={`overflow-hidden bg-white ${
        positioned
          ? "absolute flex h-[193px] rounded-[20px] border border-[#c0c0c0]"
          : "relative flex w-full flex-col rounded-2xl border border-[#e0e0e0] shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
      }`}
      style={layout}
      custom={index * 0.1}
      variants={positioned ? fadeSlideRight : fadeSlideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={positioned ? { y: -4, transition: { duration: 0.2 } } : undefined}
    >
      <div
        className={
          positioned
            ? "relative h-full w-[339px] shrink-0"
            : "relative h-[168px] w-full shrink-0 sm:h-[188px]"
        }
      >
        <Image
          src={solution.image}
          alt={solution.title}
          fill
          className="object-cover"
          sizes={positioned ? "339px" : "(max-width: 640px) 100vw, 640px"}
        />
        {!positioned && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/35 to-transparent"
          />
        )}
      </div>
      <div
        className={
          positioned
            ? "flex min-w-0 flex-1 flex-col justify-center gap-2 px-5 py-4"
            : "flex min-w-0 flex-1 flex-col gap-2 px-4 py-4 sm:px-5 sm:py-5"
        }
      >
        <h4
          className={
            positioned
              ? "text-[17px] font-semibold text-black lg:text-lg"
              : "text-base font-semibold leading-snug text-black sm:text-[17px]"
          }
        >
          {solution.title}
        </h4>
        <p
          className={
            positioned
              ? "text-sm text-[#6e6e6e] lg:text-base"
              : "text-sm leading-relaxed text-[#6e6e6e]"
          }
        >
          {solution.description}
        </p>
      </div>
    </motion.article>
  );
}
