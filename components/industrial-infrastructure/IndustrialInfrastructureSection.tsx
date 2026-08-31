"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  aboutHeadlineChunk,
  aboutHeadlineStagger,
  scaleIn,
  staggerContainer,
} from "@/lib/motion-variants";

const VIEWPORT = { once: true, margin: "0px 0px -40px 0px" as const };

const SOLUTIONS = [
  {
    title: "EOT",
    description: "Heavy-duty infrastructure for precision material handling.",
    image: "/images/industrial-infrastructure/eot-v2.png",
  },
  {
    title: "Heavy Duty Racking",
    description:
      "Optimised infrastructure for high-density industrial storage.",
    image: "/images/industrial-infrastructure/heavy-duty-racking-v2.jpg",
  },
  {
    title: "Clean Room",
    description:
      "Contamination-controlled infrastructure for precision manufacturing.",
    image: "/images/industrial-infrastructure/clean-room-v2.jpg",
  },
  {
    title: "Cold Storage",
    description:
      "Precision-engineered facilities for reliable, temperature-sensitive storage.",
    image: "/images/ext.png",
  },
] as const;

function SolutionCard({
  solution,
}: {
  solution: (typeof SOLUTIONS)[number];
}) {
  return (
    <motion.article
      variants={scaleIn}
      whileHover={{
        y: -4,
        transition: { type: "spring", stiffness: 340, damping: 22 },
      }}
      className="relative h-[250px] overflow-hidden rounded-[21px] sm:h-[280px] lg:h-[333px]"
    >
      <Image
        src={solution.image}
        alt={solution.title}
        fill
        className="object-cover object-bottom"
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 480px"
      />

      <div
        className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.92)] via-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.15)]"
        aria-hidden
      />

      <div className="absolute inset-x-[28px] bottom-[28px] flex flex-col gap-[7px]">
        <h3 className="text-xl font-bold leading-[29px] text-white sm:text-2xl">
          {solution.title}
        </h3>
        <p className="max-w-[433px] text-sm leading-[22px] text-[#aaa] sm:text-base sm:leading-[25px]">
          {solution.description}
        </p>
      </div>
    </motion.article>
  );
}

export function IndustrialInfrastructureSection() {
  return (
    <section className="relative w-full bg-[#0a0a0a] font-[family-name:var(--font-manrope)] text-white">
      <div className="relative mx-auto flex w-full max-w-[1740px] flex-col items-center px-5 py-14 sm:px-8 lg:px-[107px] lg:py-[93px]">
        <div className="flex w-full max-w-[1481px] flex-col items-center gap-12 lg:gap-[70px]">
          <motion.h2
            variants={aboutHeadlineStagger}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="text-center text-[clamp(1.75rem,3.5vw,3.33rem)] font-bold leading-[1.5] tracking-[-1.33px] lg:leading-[80px]"
          >
            <motion.span
              className="text-[#ed1c24]"
              variants={aboutHeadlineChunk}
            >
              Extended{" "}
            </motion.span>
            <motion.span variants={aboutHeadlineChunk}>
              Infrastructure Solutions.
            </motion.span>
          </motion.h2>

          <motion.div
            className="grid w-full grid-cols-1 gap-[17px] md:grid-cols-2 lg:grid-cols-4 lg:gap-[22px]"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            {SOLUTIONS.map((solution) => (
              <SolutionCard key={solution.title} solution={solution} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
