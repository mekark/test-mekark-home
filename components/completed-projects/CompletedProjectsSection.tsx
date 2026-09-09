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

/** Figma 3327:9903 — ring + soft drop */
const CARD_SHADOW =
  "0px 0px 0px 1.54px rgba(0,0,0,0.07), 0px 3.081px 12.323px rgba(0,0,0,0.06)";

/** Titles from Figma 3327:9893 — photos currently use design placeholders */
const PROJECTS = [
  { title: "Industrial Facility" },
  { title: "Steel Structure" },
  { title: "Warehouse Complex" },
  { title: "PEB Building" },
  { title: "Logistics Hub" },
  { title: "Production Unit" },
  { title: "Industrial Park" },
  { title: "Manufacturing Plant" },
  { title: "Cold Storage" },
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
          "0px 0px 0px 1.54px rgba(0,0,0,0.07), 0px 12px 28px rgba(0,0,0,0.12)",
        transition: { type: "spring", stiffness: 340, damping: 22 },
      }}
      style={{ boxShadow: CARD_SHADOW }}
      className="group relative aspect-[389.33/218.98] w-full overflow-hidden rounded-[20px] bg-white sm:rounded-[27.73px]"
    >
      {/* Figma image 42 — centered placeholder glyph */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative size-[42%] max-h-[140px] max-w-[140px]">
          <Image
            src="/images/completed-projects/image-placeholder.png"
            alt=""
            fill
            className="object-contain opacity-90 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
            sizes="140px"
            aria-hidden
          />
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-[1.54px] rounded-[18.5px] border-[1.54px] border-black/10 sm:rounded-[26.2px]"
        aria-hidden
      />

      <div className="absolute inset-x-0 bottom-0 flex flex-col items-start bg-gradient-to-t from-black to-transparent px-5 pb-4 pt-5 sm:px-[24.65px] sm:pb-[20px] sm:pt-[23px]">
        <h3 className="font-[family-name:var(--font-manrope)] text-lg font-bold leading-[1.11] tracking-[0.37px] text-white sm:text-[22px] sm:leading-[24px] lg:text-[24px] lg:leading-[27px] xl:text-[26.67px] xl:leading-[29.57px] xl:tracking-[0.49px]">
          {project.title}
        </h3>
      </div>
    </motion.article>
  );
}

export function CompletedProjectsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white font-[family-name:var(--font-manrope)] text-black">
      {/* Figma 3327:9893 — outer inset ~107px, content column ~1451px */}
      <div className="relative mx-auto flex w-full max-w-[1867px] flex-col items-center px-4 py-12 sm:px-8 sm:py-16 lg:px-[107px] lg:py-[93px]">
        <motion.div
          className="flex w-full max-w-[1451px] flex-col items-center gap-10 sm:gap-12 lg:gap-[53px]"
          variants={mfgSectionStagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <div className="flex w-full flex-col items-center text-center">
            <motion.h2
              variants={mfgHeadlineReveal}
              className="text-[32px] font-bold leading-[1.5] tracking-[-1px] text-black sm:text-[40px] sm:leading-[60px] lg:text-[48px] lg:leading-[72px] lg:tracking-[-1.2px] xl:text-[53.33px] xl:leading-[80px] xl:tracking-[-1.33px]"
            >
              Our Completed Projects
            </motion.h2>

            <motion.p
              variants={mfgSubtitleReveal}
              className="mt-3 max-w-[1144px] text-base leading-7 text-[#666] sm:mt-4 sm:text-[18px] sm:leading-[28px] lg:text-[20px] lg:leading-[30px] xl:text-[23.47px] xl:leading-[35.2px]"
            >
              A showcase of Mekark&apos;s engineering excellence across
              industrial, commercial, institutional, and logistics sectors nationwide,
              delivering precision-built facilities that stand the test of
              scale and time.
            </motion.p>
          </div>

          <motion.div
            variants={mfgGridStagger}
            className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-[24px] lg:gap-y-[40px] xl:gap-x-[31px] xl:gap-y-[60px]"
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
