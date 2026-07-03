"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  mfgCardReveal,
  mfgGridStagger,
  mfgHeadlineReveal,
  mfgSectionStagger,
  mfgSubtitleReveal,
} from "@/lib/motion-variants";

const VIEWPORT = { once: true, margin: "-80px" as const };

const CARD_SHADOW =
  "0px 23px 46px -11px rgba(0,0,0,0.25)";

const FACTORIES = [
  {
    facility: "Facility 1",
    title: "Mekark Industrial Unit",
    image: "/images/manufacturing-factories/01.png",
  },
  {
    facility: "Facility 2",
    title: "Mekark Industrial Unit",
    image: "/images/manufacturing-factories/02.png",
  },
  {
    facility: "Facility 3",
    title: "Mekark Industrial Unit",
    image: "/images/manufacturing-factories/03.png",
  },
  {
    facility: "Facility 4",
    title: "Mekark Industrial Unit",
    image: "/images/manufacturing-factories/04.png",
  },
  {
    facility: "Facility 5",
    title: "Mekark Industrial Unit",
    image: "/images/manufacturing-factories/05.png",
  },
  {
    facility: "Facility 6",
    title: "Mekark Industrial Unit",
    image: "/images/manufacturing-factories/06.png",
  },
] as const;

function FactoryCard({
  factory,
  index,
}: {
  factory: (typeof FACTORIES)[number];
  index: number;
}) {
  return (
    <motion.article
      variants={mfgCardReveal(index)}
      whileHover={{
        y: -8,
        transition: { type: "spring", stiffness: 340, damping: 22 },
      }}
      style={{ boxShadow: CARD_SHADOW }}
      className="group relative aspect-[445/334] overflow-hidden rounded-[20px] bg-white"
    >
      <Image
        src={factory.image}
        alt={factory.title}
        fill
        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 406px"
      />

      <div
        className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
      />

      <div className="absolute bottom-[22px] left-[22px] translate-y-0 opacity-100 transition-all duration-500 lg:translate-y-3 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
        <p className="text-[9px] font-bold uppercase tracking-[0.91px] text-[#ed1c24]">
          {factory.facility}
        </p>
        <h3 className="mt-0.5 text-base font-bold leading-[26px] text-white">
          {factory.title}
        </h3>
      </div>
    </motion.article>
  );
}

export function ManufacturingFactoriesSection() {
  return (
    <section className="relative w-full bg-white text-[#111]">
      <div className="relative mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:px-20 lg:py-[70px]">
        <motion.div
          className="mx-auto flex w-full max-w-[1276px] flex-col items-center gap-16"
          variants={mfgSectionStagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <div className="flex max-w-[672px] flex-col items-center text-center">
            <motion.h2
              variants={mfgHeadlineReveal}
              className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-[1.5] tracking-[-1px] lg:text-[40px] lg:leading-[60px]"
            >
              Manufacturing Factories
            </motion.h2>

            <motion.p
              variants={mfgSubtitleReveal}
              className="mt-5 text-[17px] leading-[26px] text-[#666]"
            >
              Factory-level manufacturing infrastructure equipped with advanced
              machinery to deliver precision-engineered structural solutions at
              scale.
            </motion.p>
          </div>

          <motion.div
            variants={mfgGridStagger}
            className="grid w-full grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[29px]"
          >
            {FACTORIES.map((factory, index) => (
              <FactoryCard
                key={factory.facility}
                factory={factory}
                index={index}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
