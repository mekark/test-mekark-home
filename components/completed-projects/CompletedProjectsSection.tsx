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
  "0px 0px 0px 1px rgba(0,0,0,0.07), 0px 2px 9px rgba(0,0,0,0.06)";

const PROJECTS = [
  {
    title: "Industrial Facility",
    image: "/images/completed-projects/industrial-facility.png",
  },
  {
    title: "Steel Structure",
    image: "/images/completed-projects/steel-structure.png",
  },
  {
    title: "Warehouse Complex",
    image: "/images/completed-projects/warehouse-complex.png",
  },
  {
    title: "PEB Building",
    image: "/images/completed-projects/peb-building.png",
  },
  {
    title: "Logistics Hub",
    image: "/images/completed-projects/logistics-hub.png",
  },
  {
    title: "Production Unit",
    image: "/images/completed-projects/production-unit.png",
  },
  {
    title: "Industrial Park",
    image: "/images/completed-projects/industrial-park.png",
  },
  {
    title: "Manufacturing Plant",
    image: "/images/completed-projects/manufacturing-plant.png",
  },
  {
    title: "Cold Storage",
    image: "/images/completed-projects/cold-storage.png",
  },
] as const;

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
}) {
  return (
    <motion.article
      variants={mfgCardReveal(index)}
      whileHover={{
        y: -6,
        boxShadow:
          "0px 0px 0px 1px rgba(0,0,0,0.07), 0px 12px 28px rgba(0,0,0,0.12)",
        transition: { type: "spring", stiffness: 340, damping: 22 },
      }}
      style={{ boxShadow: CARD_SHADOW }}
      className="group relative aspect-[389/219] overflow-hidden rounded-[21px] bg-white"
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 390px"
      />

      <div
        className="pointer-events-none absolute inset-[1px] rounded-[20px] border border-black/10"
        aria-hidden
      />

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent px-[18px] pb-[15px] pt-[17px]">
        <h3 className="text-xl font-bold leading-[22px] tracking-[0.37px] text-white">
          {project.title}
        </h3>
      </div>
    </motion.article>
  );
}

export function CompletedProjectsSection() {
  return (
    <section className="relative w-full bg-white text-[#111]">
      <div className="relative mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:px-20 lg:py-[70px]">
        <motion.div
          className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-16"
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
              Our Completed Projects
            </motion.h2>

            <motion.p
              variants={mfgSubtitleReveal}
              className="mt-5 text-[17px] leading-[26px] text-[#666]"
            >
              A showcase of our engineering prowess across industrial,
              commercial, and logistics sectors nationwide.
            </motion.p>
          </div>

          <motion.div
            variants={mfgGridStagger}
            className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[23px]"
          >
            {PROJECTS.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
