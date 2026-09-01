"use client";

import { useMemo, useState } from "react";
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

type FilterId = "all" | ProjectCategory;

type Project = {
  title: string;
  type: string;
  location: string;
  image: string;
  categories: ProjectCategory[];
};

const FILTERS: { id: FilterId; label: string }[] = [
  { id: "all", label: "All" },
  { id: "commercial", label: "Commercial" },
  { id: "residential", label: "Residential" },
  { id: "infrastructure", label: "Infrastructure" },
  { id: "industrial", label: "Industrial" },
  { id: "peb", label: "PEB" },
];

const PROJECTS: Project[] = [
  {
    title: "Air Vision",
    type: "Warehouse",
    location: "Irungattukottai",
    image: "/images/completed-projects-listing/air-vision.png",
    categories: ["industrial", "peb"],
  },
  {
    title: "Solo paints",
    type: "Paint Manufacturing",
    location: "Tirunelveli",
    image: "/images/completed-projects-listing/solo-paints.png",
    categories: ["industrial", "peb"],
  },
  {
    title: "Jaguar Showroom",
    type: "Car Showroom",
    location: "Tiruvallur",
    image: "/images/completed-projects-listing/jaguar-showroom.png",
    categories: ["commercial"],
  },
  {
    title: "MIPL",
    type: "Manufacturing Unit",
    location: "Chennai",
    image: "/images/completed-projects-listing/mipl.png",
    categories: ["industrial", "peb"],
  },
  {
    title: "TAAC School",
    type: "Institution",
    location: "Chennai",
    image: "/images/completed-projects-listing/taac-school.png",
    categories: ["residential", "infrastructure"],
  },
  {
    title: "SOP",
    type: "Manufacturing Unit",
    location: "Vellanur",
    image: "/images/completed-projects-listing/sop.png",
    categories: ["industrial", "infrastructure"],
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
      aria-label="Completed projects pages"
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

export function CompletedProjectsPage() {
  const [filter, setFilter] = useState<FilterId>("all");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    if (filter === "all") return PROJECTS;
    return PROJECTS.filter((project) => project.categories.includes(filter));
  }, [filter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const visible = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  const selectFilter = (id: FilterId) => {
    setFilter(id);
    setPage(1);
  };

  const goToPage = (next: number) => {
    const clamped = Math.min(totalPages, Math.max(1, next));
    setPage(clamped);
    document
      .getElementById("completed-projects-grid")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-white font-[family-name:var(--font-manrope)] text-[#1e1e1e]">
      <section className="relative isolate flex min-h-[380px] items-center justify-center pt-[60px] lg:min-h-[480px]">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/projects/completed/hero.jpg"
            alt="Completed Mekark industrial facility at sunset"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/20" aria-hidden />
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
            Completed Projects
          </motion.h1>
        </motion.div>
      </section>

      <section
        id="completed-projects-grid"
        className="scroll-mt-[96px] bg-white px-5 py-8 sm:px-8 sm:py-10 lg:px-[48px] lg:py-[30px]"
      >
        <div className="mx-auto flex w-full max-w-[1415px] flex-col gap-5">
          <div className="flex flex-col gap-3 border-b border-[rgba(13,13,13,0.12)] pb-4 sm:flex-row sm:items-center sm:gap-4 lg:h-[59px] lg:pb-0">
            <p className="shrink-0 text-[12px] leading-4 font-normal tracking-[1.68px] text-[#6b6558] uppercase">
              Filter
            </p>
            <div
              role="tablist"
              aria-label="Project category"
              className="flex flex-wrap items-center gap-2 sm:gap-2.5"
            >
              {FILTERS.map((item) => {
                const active = filter === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => selectFilter(item.id)}
                    className={`rounded-[8px] px-[17px] py-[7px] text-[14px] leading-5 font-semibold tracking-[1.12px] uppercase transition-colors ${
                      active
                        ? "border border-[rgba(237,32,36,0.9)] bg-[#ed2024] text-[#f7f5f0]"
                        : "border border-[rgba(13,13,13,0.12)] bg-white text-[#6b6558] hover:border-[rgba(237,32,36,0.35)] hover:text-[#ed2024]"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-[20px] border border-[#eee] bg-[#f9f9f9] p-4 sm:p-6 lg:p-[41px]">
            {visible.length > 0 ? (
              <motion.div
                key={`${filter}-${currentPage}`}
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
                No completed projects in this category yet.
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
