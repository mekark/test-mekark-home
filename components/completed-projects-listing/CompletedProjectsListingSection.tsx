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

const PROJECTS = [
  {
    title: "Air Vision",
    type: "Manufacturing Unit",
    location: "Chennai",
    image: "/images/completed-projects-listing/air-vision.png",
  },
  {
    title: "French village food court",
    type: "Manufacturing Unit",
    location: "Chennai",
    image: "/images/completed-projects-listing/french-village-food-court.png",
  },
  {
    title: "Jaguar showroom",
    type: "Manufacturing Unit",
    location: "Chennai",
    image: "/images/completed-projects-listing/jaguar-showroom.png",
  },
  {
    title: "MIPL",
    type: "Commercial",
    location: "Tirunelveli",
    image: "/images/completed-projects-listing/mipl.png",
  },
  {
    title: "PKM Factory",
    type: "Manufacturing Unit",
    location: "Oragadam, Chennai",
    image: "/images/completed-projects-listing/pkm-factory.png",
  },
  {
    title: "Solo paints",
    type: "Warehouse",
    location: "Oragadam, Chennai",
    image: "/images/completed-projects-listing/solo-paints.png",
  },
  {
    title: "SOP",
    type: "Auditorium",
    location: "Chennai",
    image: "/images/completed-projects-listing/sop.png",
  },
  {
    title: "TAAC School",
    type: "Warehouse",
    location: "Chennai",
    image: "/images/completed-projects-listing/taac-school.png",
  },
  {
    title: "Topaz market and food street",
    type: "Mezzanine",
    location: "Chennai",
    image: "/images/completed-projects-listing/topaz-market-and-food-street.png",
  },
] as const;

function MetaRow({ label }: { label: string }) {
  return (
    <div className="relative flex items-start pl-5">
      <span className="absolute top-[5px] left-0 flex h-[11px] w-[7px] shrink-0 items-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/completed-projects-listing/arrow.svg"
          alt=""
          width={6}
          height={9}
          className="h-[11px] w-auto"
          aria-hidden
        />
      </span>
      <span className="font-[family-name:var(--font-manrope)] text-[14px] capitalize leading-normal text-[#5e646a] sm:text-[15px] lg:text-base">
        {label}
      </span>
    </div>
  );
}

function ProjectListingCard({
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
        transition: { type: "spring", stiffness: 340, damping: 22 },
      }}
      className="flex h-full flex-col overflow-hidden rounded-[20px] border border-black/10 bg-white"
    >
      <div className="relative mx-3 mt-3 aspect-[531/409] overflow-hidden rounded-[20px] sm:mx-3.5 sm:mt-3.5">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-bottom transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 420px"
        />
        <div
          className="absolute inset-0 bg-black/25"
          aria-hidden
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 px-5 pt-6 pb-8 sm:px-7 sm:pt-7 sm:pb-10">
        <h3 className="font-[family-name:var(--font-manrope)] text-[20px] leading-snug font-normal tracking-[-0.02em] text-[#1e1e1e] sm:text-[21px] lg:text-[22px]">
          {project.title}
        </h3>
        <div className="flex flex-col gap-2.5">
          <MetaRow label={project.type} />
          <MetaRow label={project.location} />
        </div>
      </div>
    </motion.article>
  );
}

export function CompletedProjectsListingSection() {
  return (
    <section className="relative w-full bg-white text-[#111]">
      <div className="relative mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:px-[53px] lg:py-[56px]">
        <motion.div
          className="mx-auto flex w-full flex-col items-center gap-12 lg:gap-[60px]"
          variants={mfgSectionStagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <div className="flex w-full max-w-[900px] flex-col items-center text-center">
            <motion.h2
              variants={mfgHeadlineReveal}
              className="font-[family-name:var(--font-manrope)] text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-[1.35] tracking-[-1px] text-black lg:text-[40px] lg:leading-[60px]"
            >
              Our Completed Projects
            </motion.h2>

            <motion.p
              variants={mfgSubtitleReveal}
              className="mt-4 max-w-[860px] font-[family-name:var(--font-manrope)] text-[16px] leading-[1.5] text-[#666] sm:text-[17px] sm:leading-[26px] lg:text-[18px]"
            >
              A showcase of Mekark&apos;s engineering excellence across
              industrial, commercial, and logistics sectors nationwide,
              delivering precision-built facilities that stand the test of scale
              and time.
            </motion.p>
          </div>

          <motion.div
            variants={mfgGridStagger}
            className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          >
            {PROJECTS.map((project, index) => (
              <div key={project.title} className="group">
                <ProjectListingCard project={project} index={index} />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
