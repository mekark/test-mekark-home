"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  aboutBuildingReveal,
  aboutCalloutReveal,
  aboutContainerStagger,
  aboutHeadlineChunk,
  aboutHeadlineStagger,
  aboutParagraphReveal,
  aboutQuoteBorder,
  aboutQuoteIcon,
  aboutQuoteReveal,
  aboutStatReveal,
  aboutStatUnderline,
  aboutStatsStagger,
} from "@/lib/motion-variants";

const VIEWPORT = { once: true, margin: "-80px" as const };

const STATS = [
  {
    value: "X Lakh+",
    label: (
      <>
        Sq.Ft Manufacturing
        <br />
        Facility
      </>
    ),
    icon: "/images/about/icon-factory.svg",
    iconAlt: "Manufacturing facility",
  },
  {
    value: "18+",
    label: "Years of Experience",
    icon: "/images/about/icon-medal.svg",
    iconAlt: "Years of experience",
  },
  {
    value: "X+",
    label: (
      <>
        Projects
        <br />
        Delivered
      </>
    ),
    icon: "/images/about/icon-hardhat.svg",
    iconAlt: "Projects delivered",
  },
  {
    value: "98%",
    label: (
      <>
        On-Time Delivery
        <br />
        Rate
      </>
    ),
    icon: "/images/about/icon-clock.svg",
    iconAlt: "On-time delivery",
  },
] as const;

function StatIcon({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className="relative isolate flex size-14 shrink-0 items-center justify-center rounded-full sm:size-20 lg:size-[72px] xl:size-24"
      style={{
        background:
          "radial-gradient(95.52% 95.52% at 35% 30%, rgba(255,255,255,0.05), rgba(244,244,244,0.05))",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 rounded-full bg-transparent shadow-[0px_1.33px_0px_rgba(255,255,255,0.1)_inset,0px_10.67px_24px_-10.67px_rgba(0,0,0,0.12),0px_2.67px_5.33px_rgba(0,0,0,0.04)]"
        aria-hidden
      />
      <div className="relative z-[1] size-6 sm:size-8">
        <Image src={src} alt={alt} fill className="object-contain" sizes="32px" />
      </div>
    </div>
  );
}

export function AboutMekarkSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white font-[family-name:var(--font-manrope)] text-[#555]">
      <div className="relative mx-auto flex w-full max-w-[1740px] flex-col items-center gap-10 px-4 py-12 sm:gap-12 sm:px-8 sm:py-16 lg:gap-14 lg:px-[107px] lg:py-[85px]">
        {/* Hero row: image + copy — Figma 3327:9333 */}
        <div className="flex w-full flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
          {/* Image card */}
          <motion.div
            className="relative aspect-[692/588] w-full max-w-[692px] shrink-0 overflow-hidden rounded-[20px] border border-[rgba(245,245,245,0.08)] bg-[#111] sm:rounded-[26.67px] lg:aspect-auto lg:h-[588px] lg:w-[min(100%,692px)]"
            variants={aboutBuildingReveal}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            <Image
              src="/images/about/facility-card.png"
              alt="Mekark industrial facility"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 692px"
              priority={false}
            />

            {/* Centered Mekark wordmark */}
            <div className="absolute left-1/2 top-1/2 z-[2] h-8 w-[min(72%,385px)] -translate-x-1/2 -translate-y-1/2 sm:h-10">
              <Image
                src="/images/about/Mekark logo (Black) 1.png"
                alt="Mekark"
                fill
                className="object-contain"
                sizes="385px"
              />
            </div>

            {/* Bottom gradient */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[41%] bg-gradient-to-b from-transparent to-black to-[78%]"
              aria-hidden
            />

            {/* Top red accent line */}
            <div
              className="absolute inset-x-0 top-0 z-[3] h-[5.3px] bg-[#c4161c]"
              aria-hidden
            />

            {/* Bottom overlays: callout + years badge */}
            <div className="absolute inset-x-0 bottom-0 z-[3] flex items-end gap-0">
              <motion.div
                className="mb-0 ml-3 box-border flex min-h-[48px] min-w-0 flex-1 flex-col items-start justify-center bg-[linear-gradient(90deg,rgba(8,8,8,0.54)_0%,rgba(228,0,21,0.54)_42.66%)] py-2 pl-3 pr-3 sm:mb-[49px] sm:ml-auto sm:mr-0 sm:min-h-[60px] sm:max-w-[413px] sm:flex-none sm:py-2.5 sm:pl-5 sm:pr-6"
                variants={aboutCalloutReveal}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT}
              >
                <p className="text-[10px] font-bold leading-snug tracking-[0.8px] text-[#f5f5f5] sm:text-[15.33px] sm:leading-normal sm:tracking-[1.23px]">
                  EPC Contractor for Industries,
                  <br />
                  Commercial &amp; Institutional Projects
                </p>
              </motion.div>

              <div className="flex shrink-0 flex-col items-center rounded-br-[20px] bg-[#c4161c] px-4 py-3 text-center sm:rounded-br-[26.67px] sm:px-8 sm:py-6">
                <p className="text-[28px] font-extrabold leading-none text-[#f5f5f5] sm:text-[48px] sm:leading-[48px]">
                  18+
                </p>
                <p className="mt-0.5 text-[9px] font-bold capitalize tracking-[1px] text-[rgba(245,245,245,0.8)] sm:mt-1 sm:text-[13.33px] sm:tracking-[1.33px]">
                  Years Of
                  <br />
                  Excellence
                </p>
              </div>
            </div>
          </motion.div>

          {/* Copy column */}
          <motion.div
            className="flex w-full max-w-[920px] flex-col gap-6 lg:gap-[27px]"
            variants={aboutContainerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            <motion.h2
              variants={aboutHeadlineStagger}
              className="text-[28px] font-extrabold leading-tight text-[#121212] sm:text-[42px] sm:leading-[64px] lg:text-[53.33px] lg:leading-[81.33px]"
            >
              <motion.span variants={aboutHeadlineChunk} className="inline">
                <span className="uppercase">- A</span>
                <span className="lowercase">bout </span>
                <span className="capitalize text-[#c4161c]">Mekark -</span>
              </motion.span>
            </motion.h2>

            <motion.p
              variants={aboutParagraphReveal}
              className="text-base leading-[28px] text-[#555] sm:text-[21.33px] sm:leading-[37.33px]"
            >
              With 18+ years of engineering excellence and X+ successfully
              delivered projects, Mekark is a trusted industrial EPC
              (Engineering, Procurement, and Construction) company specialising
              in facilities that demand precision, scalability, and operational
              intelligence.
            </motion.p>

            <motion.p
              variants={aboutParagraphReveal}
              className="text-base leading-[28px] text-[#555] sm:text-[21.33px] sm:leading-[37.33px]"
            >
              We don&apos;t just build industrial infrastructure; we engineer it
              to perform. From pre-engineered buildings and factory shells to
              large-span structural systems and turnkey industrial plants, every
              Mekark project is designed for lifecycle performance, not just
              construction milestones.
            </motion.p>

            <motion.p
              variants={aboutParagraphReveal}
              className="text-base leading-[28px] text-[#555] sm:text-[21.33px] sm:leading-[37.33px]"
            >
              Our integrated approach brings design, procurement, fabrication,
              and execution together under a single accountable system, reducing
              delays, eliminating coordination gaps, and delivering industrial,
              commercial, and institutional assets that stay efficient for
              decades.
            </motion.p>

            <motion.blockquote
              variants={aboutQuoteReveal}
              className="relative flex max-w-[768px] items-start gap-4 pl-5 sm:gap-[21px] sm:pl-[25px]"
            >
              <motion.div
                variants={aboutQuoteBorder}
                className="absolute bottom-0 left-0 top-0 w-1 origin-top bg-[#ed1c24]"
                aria-hidden
              />
              <motion.div
                variants={aboutQuoteIcon}
                className="relative size-8 shrink-0 sm:size-10"
              >
                <Image
                  src="/images/about/quotes-ltr.svg"
                  alt=""
                  fill
                  className="object-contain"
                  sizes="40px"
                  aria-hidden
                />
              </motion.div>
              <p className="text-base font-semibold leading-[28px] text-black sm:max-w-[515px] sm:text-[21.33px] sm:leading-[33.33px]">
                Precision engineering. Proven scale. Performance that lasts.
              </p>
            </motion.blockquote>
          </motion.div>
        </div>

        {/* Stats grid — Figma 3327:9362 */}
        <motion.div
          className="box-border flex w-full flex-col items-stretch justify-center gap-3 rounded-3xl border-[1.3px] border-solid border-[rgba(255,255,255,0.8)] bg-[#0e0e0e] px-1 py-8 shadow-[0px_0px_20.27px_rgba(0,0,0,0.05)] backdrop-blur-[13.33px] sm:py-10 lg:flex-row lg:items-stretch lg:gap-0 lg:py-[41px]"
          variants={aboutStatsStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.value}
              variants={aboutStatReveal}
              className={`relative isolate flex min-w-0 flex-1 items-center gap-4 rounded-2xl px-5 py-4 sm:gap-6 sm:px-7 sm:py-5 lg:gap-5 lg:px-6 lg:py-[18px] xl:gap-[29px] xl:px-8 ${
                index > 0
                  ? "border-[rgba(214,214,214,0.25)] lg:border-l-[1.3px] lg:border-solid"
                  : ""
              }`}
            >
              <StatIcon src={stat.icon} alt={stat.iconAlt} />
              <div className="z-[1] flex min-w-0 flex-col items-start gap-[4.6px]">
                <p className="whitespace-nowrap font-[family-name:var(--font-montserrat-alternates)] text-[28px] font-extrabold leading-none tracking-[-1.01px] text-white sm:text-[42px] sm:leading-none lg:text-[36px] xl:text-[50.67px] xl:leading-[50.67px]">
                  {stat.value}
                </p>
                <p className="text-[11px] font-semibold uppercase leading-[16px] tracking-[1.2px] text-[#6b6b6b] sm:whitespace-nowrap sm:text-sm sm:leading-5 sm:tracking-[1.6px] lg:text-[12px] lg:leading-[18px] lg:tracking-[1.4px] xl:text-[14.67px] xl:leading-[21.27px] xl:tracking-[2.05px]">
                  {stat.label}
                </p>
              </div>
              <motion.div
                variants={aboutStatUnderline}
                className="absolute bottom-[-2.7px] left-5 z-[2] h-[2.7px] w-12 origin-left bg-[#ed2024] sm:left-7 lg:left-[158px]"
                aria-hidden
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
