"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  aboutHeadlineChunk,
  aboutHeadlineStagger,
  fadeUp,
  scaleIn,
  staggerContainer,
} from "@/lib/motion-variants";

const VIEWPORT = { once: true, margin: "-80px" as const };

const COLLAPSED_HEIGHT_CLASS =
  "max-h-[520px] sm:max-h-[420px] lg:max-h-[392px]";

const SOLUTIONS = [
  {
    title: "Warehouse Infrastructure",
    description:
      "Engineered for throughput, scalability, and logistics efficiency.",
    image: "/images/industrial-infrastructure/01-warehouse.png",
    icon: "/images/industrial-infrastructure/icon-warehouse.svg",
    accentIcon: false,
  },
  {
    title: "Manufacturing Facilities",
    description:
      "Production-driven environments engineered for industrial performance.",
    image: "/images/industrial-infrastructure/02-manufacturing.png",
    icon: "/images/industrial-infrastructure/icon-manufacturing.svg",
    accentIcon: false,
  },
  {
    title: "Multi-Storey Steel Buildings",
    description:
      "High-performance vertical structures optimised for land efficiency and load distribution.",
    image: "/images/industrial-infrastructure/03-multi-storey.png",
    icon: "/images/industrial-infrastructure/icon-multi-storey.svg",
    accentIcon: false,
  },
  {
    title: "Cold Storage",
    description:
      "Temperature-controlled facilities engineered for food, pharma, and cold-chain logistics.",
    image: "/images/industrial-infrastructure/04-cold-storage.png",
    icon: "/images/industrial-infrastructure/icon-cold-storage.svg",
    accentIcon: true,
  },
  {
    title: "EOT Crane Structures",
    description:
      "Structural systems designed for heavy-duty crane operations and industrial lifting.",
    image: "/images/industrial-infrastructure/05-eot-crane.png",
    icon: "/images/industrial-infrastructure/icon-eot-crane.svg",
    accentIcon: true,
  },
  {
    title: "MEP Systems",
    description:
      "End-to-end mechanical, electrical, and plumbing integration for industrial facilities.",
    image: "/images/industrial-infrastructure/06-mep-systems.png",
    icon: "/images/industrial-infrastructure/icon-mep.svg",
    accentIcon: true,
  },
] as const;

type Solution = (typeof SOLUTIONS)[number];

function SolutionCard({ solution }: { solution: Solution }) {
  return (
    <motion.article
      variants={scaleIn}
      className="relative h-[250px] overflow-hidden rounded-[16px]"
    >
      <Image
        src={solution.image}
        alt={solution.title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 358px"
      />

      <div
        className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/50 to-black/15"
        aria-hidden
      />

      <div className="absolute inset-0 flex flex-col justify-between p-[21px]">
        <div
          className={`flex size-[35px] shrink-0 items-center justify-center rounded-[12px] backdrop-blur-[3.5px] ${
            solution.accentIcon
              ? "border border-[rgba(237,28,36,0.3)] bg-[rgba(237,28,36,0.2)]"
              : "bg-[rgba(0,0,0,0.37)]"
          }`}
        >
          <Image
            src={solution.icon}
            alt=""
            width={23}
            height={23}
            aria-hidden
          />
        </div>

        <div className="flex flex-col gap-[5px]">
          <h3 className="text-lg font-bold leading-[22px] text-white">
            {solution.title}
          </h3>
          <p className="text-xs leading-[19px] text-[#aaa]">
            {solution.description}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export function IndustrialInfrastructureSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="relative w-full bg-[#0a0a0a] text-white">
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 py-14 sm:px-8 lg:px-20 lg:py-[70px]">
        <motion.div
          className="flex w-full max-w-[1110px] flex-col items-center gap-14"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <motion.h2
            variants={aboutHeadlineStagger}
            className="text-center text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-[1.5] tracking-[-1px] lg:text-[40px] lg:leading-[60px]"
          >
            <motion.span className="text-[#ed1c24]" variants={aboutHeadlineChunk}>
              Industrial
            </motion.span>
            <motion.span variants={aboutHeadlineChunk}>
              {" "}
              Infrastructure Solutions
            </motion.span>
          </motion.h2>

          <div className="relative w-full">
            <motion.div
              variants={fadeUp}
              className={`relative transition-[max-height] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                expanded ? "max-h-none" : `overflow-hidden ${COLLAPSED_HEIGHT_CLASS}`
              }`}
            >
              <motion.div
                className="grid grid-cols-1 gap-[17px] sm:grid-cols-2 lg:grid-cols-3"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT}
              >
                {SOLUTIONS.map((solution) => (
                  <SolutionCard key={solution.title} solution={solution} />
                ))}
              </motion.div>
            </motion.div>

            <AnimatePresence>
              {!expanded && (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-[212px] bg-gradient-to-b from-transparent via-[rgba(10,10,10,0.8)] via-45% to-[#0a0a0a]"
                    aria-hidden
                  />

                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.35 }}
                    className="absolute inset-x-0 bottom-5 flex justify-center"
                  >
                    <button
                      type="button"
                      onClick={() => setExpanded(true)}
                      className="group flex min-h-11 items-center gap-2 rounded-[9px] bg-[#ed1c24] px-6 py-3 text-sm font-bold text-white shadow-[0px_9px_13px_-3px_rgba(237,28,36,0.2),0px_3px_5px_-3px_rgba(237,28,36,0.2)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                      Show More
                      <Image
                        src="/images/industrial-infrastructure/icon-chevron-down.svg"
                        alt=""
                        width={14}
                        height={14}
                        aria-hidden
                        className="transition-transform group-hover:translate-y-0.5"
                      />
                    </button>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
