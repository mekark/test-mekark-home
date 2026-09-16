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
      <div className={`${SECTION_CONTAINER_CLASS} py-14 lg:py-[56px] xl:py-[48px] 2xl:py-[56px]`}>
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
              className="font-[family-name:var(--font-manrope)] text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-[1.35] tracking-[-1px] text-black lg:text-[40px] lg:leading-[60px] xl:text-[36px] xl:leading-[54px] 2xl:text-[40px] 2xl:leading-[60px]"
            >
              Our Completed Projects
            </motion.h2>

            <motion.p
              variants={mfgSubtitleReveal}
              className="mt-4 max-w-[860px] font-[family-name:var(--font-manrope)] text-[16px] leading-[1.5] text-[#666] sm:text-[17px] sm:leading-[26px] lg:text-[18px]"
            >
              A showcase of Mekark&apos;s engineering excellence across
              industrial, commercial, institutional, and logistics sectors nationwide,
              delivering precision-built facilities that stand the test of scale
              and time.
            </motion.p>
          </div>

          <motion.div
            variants={mfgGridStagger}
            className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
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
              Show More
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
