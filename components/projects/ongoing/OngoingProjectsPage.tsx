"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeUp,
  mfgCardReveal,
  mfgGridStagger,
  staggerContainer,
} from "@/lib/motion-variants";

const VIEWPORT = { once: true, margin: "-80px" as const };
const PAGE_SIZE = 9;

type ProjectCategory =
  | "commercial"
  | "residential"
  | "infrastructure"
  | "industrial"
  | "peb";

type Project = {
  title: string;
  type: string;
  location: string;
  image: string;
  categories: ProjectCategory[];
};

const PROJECTS: Project[] = [
  {
    title: "EPIL",
    type: "Turnkey",
    location: "Chennai",
    image: "/images/projects/ongoing/1.jpg",
    categories: ["industrial", "peb"],
  },
  {
    title: "Orbitalls",
    type: "Manufacturing Unit",
    location: "Ulundhurpet",
    image: "/images/projects/ongoing/2.jpg",
    categories: ["industrial", "peb"],
  },
  {
    title: "JMR Apparels",
    type: "Apparels",
    location: "Chennai",
    image: "/images/projects/ongoing/3.png",
    categories: ["industrial", "commercial"],
  },
  {
    title: "JK Tyres",
    type: "Manufacturing Unit",
    location: "Chennai",
    image: "/images/projects/ongoing/4.jpg",
    categories: ["industrial", "peb"],
  },
];

function MetaRow({ label }: { label: string }) {
  return (
    <div className="relative flex items-start pl-5">
      <span className="absolute top-[4px] left-0 flex h-[11px] w-[6px] shrink-0 items-center overflow-hidden">
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
      <span className="font-[family-name:var(--font-manrope)] text-[14px] capitalize leading-normal text-[#5e646a]">
        {label}
      </span>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      variants={mfgCardReveal(index)}
      whileHover={{
        y: -6,
        transition: { type: "spring", stiffness: 340, damping: 22 },
      }}
      className="group flex h-full flex-col overflow-hidden rounded-[20px] bg-white"
    >
      <div className="relative mx-[13px] mt-[13px] aspect-[398/307] overflow-hidden rounded-[20px]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-bottom transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 420px"
        />
        <div className="absolute inset-0 bg-black/25" aria-hidden />
      </div>

      <div className="flex flex-1 flex-col gap-2.5 px-6 pt-6 pb-12 sm:px-8 sm:pt-6 sm:pb-16">
        <h3 className="font-[family-name:var(--font-manrope)] text-[15.6px] leading-normal text-[#1e1e1e]">
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

function Pagination({
  page,
  totalPages,
  onPageChange,
}: {
  page: number;
  totalPages: number;
  onPageChange: (next: number) => void;
}) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav
      aria-label="Ongoing projects pages"
      className="flex w-full items-start justify-center pt-2.5"
    >
      <div className="flex items-start overflow-hidden rounded-[10px] border border-[#eee] bg-white">
        <button
          type="button"
          aria-label="Previous page"
          disabled={page <= 1}
          onClick={() => onPageChange(page - 1)}
          className="flex h-[54px] w-[54px] items-center justify-center border-r border-[#eee] disabled:opacity-35"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/projects/completed/page-prev.svg"
            alt=""
            width={5}
            height={8}
            className="h-[8px] w-[5px]"
          />
        </button>

        {pages.map((item) => {
          const active = item === page;
          return (
            <button
              key={item}
              type="button"
              aria-current={active ? "page" : undefined}
              onClick={() => onPageChange(item)}
              className={`flex h-[54px] w-[54px] items-center justify-center border-r border-[#eee] font-[family-name:var(--font-manrope)] text-[13.2px] leading-none ${
                active
                  ? "text-[#ee7838] shadow-[0px_10px_12px_rgba(0,0,0,0.07)]"
                  : "text-black"
              }`}
            >
              {item}
            </button>
          );
        })}

        <button
          type="button"
          aria-label="Next page"
          disabled={page >= totalPages}
          onClick={() => onPageChange(page + 1)}
          className="flex h-[54px] w-[54px] items-center justify-center disabled:opacity-35"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/projects/completed/page-next.svg"
            alt=""
            width={5}
            height={8}
            className="h-[8px] w-[5px]"
          />
        </button>
      </div>
    </nav>
  );
}

export function OngoingProjectsPage() {
  const [page, setPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(PROJECTS.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const visible = PROJECTS.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  const goToPage = (next: number) => {
    const clamped = Math.min(totalPages, Math.max(1, next));
    setPage(clamped);
    document
      .getElementById("ongoing-projects-grid")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-white font-[family-name:var(--font-manrope)] text-[#1e1e1e]">
      <section className="relative isolate flex min-h-[380px] items-center justify-center pt-[60px] lg:min-h-[480px]">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/projects/ongoing/hero.jpg"
            alt="Ongoing Mekark industrial construction at sunset"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.8)]"
            aria-hidden
          />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col items-center px-5 py-10 text-center"
        >
          <motion.h1
            variants={fadeUp}
            className="text-[clamp(1.75rem,4vw,50px)] font-semibold uppercase tracking-[0.05em] text-white"
          >
            Ongoing Projects
          </motion.h1>
        </motion.div>
      </section>

      <section
        id="ongoing-projects-grid"
        className="scroll-mt-[96px] bg-white px-5 py-8 sm:px-8 sm:py-10 lg:px-[48px] lg:py-[30px]"
      >
        <div className="mx-auto flex w-full max-w-[1415px] flex-col gap-5">
          <div className="rounded-[20px] border border-[#eee] bg-[#f9f9f9] p-4 sm:p-6 lg:p-[41px]">
            {visible.length > 0 ? (
              <motion.div
                key={currentPage}
                variants={mfgGridStagger}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT}
                className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
              >
                {visible.map((project, index) => (
                  <ProjectCard
                    key={project.title}
                    project={project}
                    index={index}
                  />
                ))}
              </motion.div>
            ) : (
              <p className="py-16 text-center text-[15px] text-[#5e646a]">
                No ongoing projects yet.
              </p>
            )}

            <div className="mt-6 lg:mt-8">
              <Pagination
                page={currentPage}
                totalPages={totalPages}
                onPageChange={goToPage}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
