"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  aboutBuildingReveal,
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
      className="relative isolate flex size-16 shrink-0 items-center justify-center rounded-full sm:size-20 lg:size-[4.5rem] xl:size-24"
      style={{
        background:
          "radial-gradient(95.52% 95.52% at 35% 30%, rgba(255,255,255,0.05), rgba(244,244,244,0.05))",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 rounded-full bg-transparent shadow-[0px_1.33px_0px_rgba(255,255,255,0.1)_inset,0px_10.67px_24px_-10.67px_rgba(0,0,0,0.12),0px_2.67px_5.33px_rgba(0,0,0,0.04)]"
        aria-hidden
      />
      <div className="relative z-[1] size-7 sm:size-8 lg:size-7 xl:size-8">
        <Image src={src} alt={alt} fill className="object-contain" sizes="32px" />
      </div>
    </div>
  );
}

export function AboutMekarkSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white font-[family-name:var(--font-manrope)] text-[#555]">
      <div className="relative mx-auto flex w-full max-w-[1740px] flex-col items-center gap-8 px-4 py-12 sm:gap-10 sm:px-8 sm:py-16 lg:px-[107px] lg:py-[85px]">
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
              className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[40%] bg-gradient-to-b from-transparent to-black to-[78%]"
              aria-hidden
            />

            {/* Top red accent line */}
            <div
              className="absolute inset-x-0 top-0 z-[3] h-[5.3px] bg-[#c4161c]"
              aria-hidden
            />

            {/* Enterprise callout */}
            <div className="absolute bottom-6 left-4 z-[3] max-w-[min(90%,430px)] sm:bottom-10 sm:left-[54px]">
              <p className="text-base leading-[37px] text-[#bbb] sm:text-[21.33px]">
                For enterprise clients, this means one thing:
              </p>
              <div
                className="mt-0 inline-flex items-center py-[10px] pl-4 pr-5 sm:pl-5 sm:pr-6"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(228,0,21,0.54) 42.66%, rgba(8,8,8,0.54))",
                }}
              >
                <p className="text-xs font-bold tracking-[1.23px] text-[#f5f5f5] sm:text-[15.33px]">
                  predictable delivery, engineered with certainty
                </p>
              </div>
            </div>

            {/* 18+ Years badge */}
            <div className="absolute bottom-0 right-0 z-[3] flex flex-col items-center bg-[#c4161c] px-6 py-4 text-center sm:px-8 sm:py-6">
              <p className="text-4xl font-extrabold leading-none text-[#f5f5f5] sm:text-[48px] sm:leading-[48px]">
                18+
              </p>
              <p className="mt-1 text-[11px] font-bold capitalize tracking-[1.33px] text-[rgba(245,245,245,0.8)] sm:text-[13.33px]">
                Years of
                <br />
                Excellence
              </p>
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
              className="text-[32px] font-extrabold leading-tight text-[#121212] sm:text-[42px] sm:leading-[64px] lg:text-[53.33px] lg:leading-[81.33px]"
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
          className="box-border flex w-full flex-col items-stretch justify-center gap-[10.7px] rounded-3xl border-[1.3px] border-solid border-[rgba(255,255,255,0.8)] bg-[#0e0e0e] px-0 py-6 shadow-[0px_0px_20.27px_rgba(0,0,0,0.05)] backdrop-blur-[13.33px] sm:py-8 lg:flex-row lg:items-stretch lg:gap-0 lg:py-6 xl:py-10"
          variants={aboutStatsStagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.value}
              variants={aboutStatReveal}
              className={`relative isolate flex min-w-0 flex-1 items-center gap-4 rounded-2xl px-5 py-3 sm:gap-5 sm:px-6 sm:py-4 lg:gap-3 lg:px-4 lg:py-3 xl:gap-[29.3px] xl:px-8 xl:py-[18.7px] ${
                index > 0
                  ? "border-[rgba(214,214,214,0.25)] lg:border-l-[1.3px] lg:border-solid"
                  : ""
              }`}
            >
              <StatIcon src={stat.icon} alt={stat.iconAlt} />
              <div className="z-[1] flex min-w-0 flex-col items-start gap-[4.6px]">
                <p className="font-[family-name:var(--font-montserrat-alternates)] text-[36px] font-extrabold leading-none tracking-[-1.01px] text-white sm:text-[42px] sm:leading-none lg:text-[32px] xl:text-[50.67px] xl:leading-[50.67px]">
                  {stat.value}
                </p>
                <p className="text-xs font-semibold uppercase leading-[18px] tracking-[1.6px] text-[#6b6b6b] sm:text-sm sm:leading-5 lg:text-[11px] lg:leading-4 lg:tracking-[1.2px] xl:text-[14.67px] xl:leading-[21.27px] xl:tracking-[2.05px]">
                  {stat.label}
                </p>
              </div>
              <motion.div
                variants={aboutStatUnderline}
                className="absolute bottom-[-2.7px] left-1/2 z-[2] h-[2.7px] w-12 origin-left -translate-x-1/2 bg-[#ed2024] lg:left-6 lg:translate-x-0 xl:left-10"
                aria-hidden
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
