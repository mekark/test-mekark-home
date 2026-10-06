"use client";

import Image from "next/image";
import Link from "next/link";
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

const COMPLETED_PROJECTS_PATH = "/projects/completed-projects";

/** Two rows per breakpoint: 1 col → 2, 2 col → 4, 3 col → 6 */
function projectVisibilityClass(index: number) {
  if (index >= 6) return "hidden";
  if (index >= 4) return "hidden lg:block";
  if (index >= 2) return "hidden sm:block";
  return "";
}

const PROJECTS = [
  {
    title: "Air Vision",
    type: "Warehouse",
    location: "Irungattukottai",
    image: "/images/completed-projects-listing/air-vision.webp",
  },
  {
    title: "Solo paints",
    type: "Paint Manufacturing",
    location: "Tirunelveli",
    image: "/images/completed-projects-listing/solo-paints.webp",
  },
  {
    title: "Jaguar Showroom",
    type: "Car Showroom",
    location: "Tiruvallur",
    image: "/images/completed-projects-listing/jaguar-showroom.webp",
  },
  {
    title: "MIPL",
    type: "Manufacturing Unit",
    location: "Chennai",
    image: "/images/completed-projects-listing/mipl.webp",
  },
  {
    title: "TAAC School",
    type: "Institution",
    location: "Chennai",
    image: "/images/completed-projects-listing/taac-school.webp",
  },
  {
    title: "SOP",
    type: "Manufacturing Unit",
    location: "Vellanur",
    image: "/images/completed-projects-listing/sop.webp",
  },
] as const;

function MetaRow({ label }: { label: string }) {
  return (
    <div className="relative flex items-start pl-5 max-lg:pl-[27px] lg:pl-5">
      <span className="absolute top-[5px] left-0 flex h-[11px] w-[7px] shrink-0 items-center overflow-hidden max-lg:top-[3px] max-lg:h-5 max-lg:w-[7px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/completed-projects-listing/arrow.svg"
          alt="Arrow icon"
          width={6}
          height={9}
          className="h-[11px] w-auto max-lg:h-[14.667px]"
          aria-hidden
        />
      </span>
      <span className="font-[family-name:var(--font-manrope)] text-sm capitalize leading-normal text-[#5e646a] sm:text-[15px] lg:text-base">
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
      className="flex h-full flex-col overflow-hidden rounded-[20px] border border-black/10 bg-white max-lg:relative max-lg:h-[364px] max-lg:rounded-[25px]"
    >
      <div className="relative mx-3 mt-3 aspect-[531/409] overflow-hidden rounded-[20px] sm:mx-3.5 sm:mt-3.5 max-lg:absolute max-lg:top-2 max-lg:left-1/2 max-lg:mx-0 max-lg:mt-0 max-lg:h-[245px] max-lg:w-[calc(100%-32px)] max-lg:max-w-[333px] max-lg:-translate-x-1/2 max-lg:aspect-auto max-lg:rounded-[20px]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-bottom transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 420px"
        />
        <div className="absolute inset-0 bg-black/25 max-lg:hidden" aria-hidden />
      </div>

      <div className="flex flex-1 flex-col gap-3 px-5 pt-6 pb-8 sm:px-7 sm:pt-7 sm:pb-10 max-lg:absolute max-lg:inset-x-0 max-lg:top-[255px] max-lg:bottom-0 max-lg:gap-0 max-lg:border-x max-lg:border-[#eee] max-lg:bg-white max-lg:px-2.5 max-lg:py-[15px] max-lg:pl-10 max-lg:pt-0 max-lg:pb-0">
        <h3 className="font-[family-name:var(--font-manrope)] text-lg font-medium leading-normal tracking-normal text-[#1e1e1e] max-lg:pb-2 max-lg:pt-px lg:text-[20px] lg:font-normal lg:leading-snug lg:tracking-[-0.02em] xl:text-[22px]">
          {project.title}
        </h3>
        <div className="flex flex-col gap-2.5 max-lg:gap-0">
          <MetaRow label={project.type} />
          <MetaRow label={project.location} />
        </div>
      </div>
    </motion.article>
  );
}

export function CompletedProjectsListingSection() {
  return (
    <section className="relative w-full bg-white text-[#111] max-lg:bg-[#f5f5f5]">
      <div
        className={`${SECTION_CONTAINER_CLASS} max-lg:py-8 py-14 lg:py-[56px] xl:py-[48px] 2xl:py-[56px]`}
      >
        <motion.div
          className="mx-auto flex w-full flex-col items-center gap-12 max-lg:gap-10 lg:gap-[60px]"
          variants={mfgSectionStagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <div className="flex w-full max-w-[900px] flex-col items-center gap-3 text-center max-lg:max-w-none max-lg:items-center">
            <motion.h2
              variants={mfgHeadlineReveal}
              className="font-[family-name:var(--font-manrope)] text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-[1.35] tracking-[-1px] text-black max-lg:text-[28px] max-lg:leading-[44px] max-lg:tracking-normal lg:text-[40px] lg:leading-[60px] xl:text-[36px] xl:leading-[54px] 2xl:text-[40px] 2xl:leading-[60px]"
            >
              Our Completed Projects
            </motion.h2>

            <motion.p
              variants={mfgSubtitleReveal}
              className="mt-4 max-w-[860px] font-[family-name:var(--font-manrope)] text-[16px] leading-[1.5] text-[#666] max-lg:mt-0 max-lg:max-w-none max-lg:text-sm max-lg:leading-[22px] max-lg:text-[#6b7280] sm:text-[17px] sm:leading-[26px] lg:text-[18px]"
            >
              A showcase of Mekark&apos;s engineering excellence across
              industrial, commercial, institutional, and logistics sectors nationwide,
              delivering precision-built facilities that stand the test of scale
              and time.
            </motion.p>
          </div>

          <motion.div
            variants={mfgGridStagger}
            className="grid w-full grid-cols-1 gap-5 max-lg:gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          >
            {PROJECTS.map((project, index) => (
              <div
                key={project.title}
                className={`group ${projectVisibilityClass(index)}`}
              >
                <ProjectListingCard project={project} index={index} />
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={mfgSubtitleReveal}
            className="flex w-full justify-center"
          >
            <Link
              href={COMPLETED_PROJECTS_PATH}
              className="inline-flex min-h-11 items-center justify-center rounded-[9px] bg-[#ed1c24] px-6 py-3 text-sm font-bold text-white shadow-[0px_9px_13px_-3px_rgba(237,28,36,0.2),0px_3px_5px_-3px_rgba(237,28,36,0.2)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              View All
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
