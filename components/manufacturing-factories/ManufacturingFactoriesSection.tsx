"use client";

import { motion } from "framer-motion";
import {
  mfgCardReveal,
  mfgGridStagger,
  mfgHeadlineReveal,
  mfgSectionStagger,
  mfgSubtitleReveal,
} from "@/lib/motion-variants";
import { SECTION_CONTAINER_CLASS } from "@/lib/sectionLayout";

const VIEWPORT = { once: true, margin: "-80px" as const };

const CARD_SHADOW =
  "0px 23px 46px -11px rgba(0,0,0,0.25)";

const FACTORIES = [
  {
    facility: "Facility 1",
    title: "Mekark Industrial Unit",
  },
  {
    facility: "Facility 2",
    title: "Mekark Industrial Unit",
  },
  {
    facility: "Facility 3",
    title: "Mekark Industrial Unit",
  },
  {
    facility: "Facility 4",
    title: "Mekark Industrial Unit",
  },
  {
    facility: "Facility 5",
    title: "Mekark Industrial Unit",
  },
  {
    facility: "Facility 6",
    title: "Mekark Industrial Unit",
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
      <div className="absolute bottom-[22px] left-[22px]">
        <p className="text-[9px] font-bold uppercase tracking-[0.91px] text-[#ed1c24]">
          {factory.facility}
        </p>
        <h3 className="mt-0.5 text-base font-bold leading-[26px] text-[#111]">
          {factory.title}
        </h3>
      </div>
    </motion.article>
  );
}

export function ManufacturingFactoriesSection() {
  return (
    <section className="relative w-full bg-white text-[#111]">
      <div className={`${SECTION_CONTAINER_CLASS} py-14 lg:py-[70px]`}>
        <motion.div
          className="mx-auto flex w-full max-w-[1276px] flex-col items-center gap-16"
          variants={mfgSectionStagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <div className="flex w-full flex-col items-center text-center">
            <motion.h2
              variants={mfgHeadlineReveal}
              className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-[1.5] tracking-[-1px] lg:text-[40px] lg:leading-[60px]"
            >
              Manufacturing Factories
            </motion.h2>

            <motion.p
              variants={mfgSubtitleReveal}
              className="mt-5 max-w-[1060px] text-[17px] leading-[26px] text-[#666] sm:text-[17.6px] sm:leading-[26.4px]"
            >
              High-capacity manufacturing infrastructure engineered for
              precision, efficiency, and scale, supported by advanced
              fabrication
              <br className="hidden sm:block" />
              machinery to deliver structurally sound, production-ready
              facilities built for long-term industrial performance.
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
