"use client";

import Image, { getImageProps } from "next/image";
import { useRef } from "react";
import { preload } from "react-dom";
import { motion, useInView } from "framer-motion";
import { CountUp } from "@/components/motion/CountUp";
import {
  aboutHeadlineChunk,
  aboutHeadlineStagger,
  aboutQuoteIcon,
  aboutQuoteReveal,
  fadeUp,
  staggerContainer,
} from "@/lib/motion-variants";
import mdPortraitPhoto from "@/public/images/about/history/md-portrait-photo.webp";

const VIEWPORT = { once: true, margin: "-90px" as const };

const STAT_COLUMNS = [
  [
    { countTo: 18, suffix: "+", label: "Years of experience" },
    {
      countTo: 70,
      suffix: " Lakh+",
      unit: "SQ.FT",
      label: "Projects completed",
    },
  ],
  [
    {
      countTo: 200,
      suffix: "+",
      label: "Projects delivered",
    },
    { countTo: 7, suffix: "+", unit: "STATES", label: "Project reach" },
  ],
  [
    {
      countTo: 40000,
      useGrouping: true,
      unit: "MT /Annum",
      label: "Production capacity",
    },
    { text: "CIVIL + PEB + MEP", label: "Turnkey solutions" },
  ],
] as const;

type StatItem = (typeof STAT_COLUMNS)[number][number];

function JourneyStat({
  stat,
  start,
  delay,
  compact = false,
}: {
  stat: StatItem;
  start: boolean;
  delay: number;
  compact?: boolean;
}) {
  const labelClassName =
    "labelCase" in stat && stat.labelCase === "normal"
      ? "font-[family-name:var(--font-manrope)] font-medium tracking-[0.2px] text-white"
      : "font-[family-name:var(--font-manrope)] font-medium uppercase tracking-[0.2px] text-white";

  return (
    <div
      className={`flex flex-col overflow-visible ${compact ? "gap-0.5" : "gap-[5px]"}`}
    >
      <p
        className={`font-[family-name:var(--font-manrope)] leading-none text-white tabular-nums ${
          compact
            ? "text" in stat
              ? "text-sm font-semibold whitespace-nowrap"
              : "text-sm font-semibold"
            : "text-[clamp(1.75rem,6vw,36px)] font-semibold"
        }`}
      >
        {"text" in stat ? (
          <motion.span
            initial={{ opacity: 0 }}
            animate={start ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.4, delay }}
            className={
              compact
                ? "whitespace-nowrap text-sm font-semibold leading-tight"
                : "whitespace-nowrap"
            }
          >
            {stat.text}
          </motion.span>
        ) : (
          <>
            <CountUp
              value={stat.countTo}
              suffix={"suffix" in stat ? stat.suffix : undefined}
              useGrouping={"useGrouping" in stat ? stat.useGrouping : false}
              start={start}
              delay={delay}
              duration={1.7}
            />
            {"unit" in stat && stat.unit ? (
              <span
                className={
                  compact
                    ? "ml-1 text-[8px] font-normal"
                    : "ml-1.5 text-lg font-medium sm:ml-2 sm:text-xl lg:text-2xl"
                }
              >
                {stat.unit}
              </span>
            ) : null}
          </>
        )}
      </p>
      <p
        className={`${labelClassName} ${compact ? "text-[8px]" : "text-xs sm:text-sm"}`}
      >
        {stat.label}
      </p>
    </div>
  );
}

const DESKTOP_HERO_SRC = "/images/about/history/18%20Years.webp";
const DESKTOP_HERO_MEDIA = "(min-width: 640px)";

export function OurHistoryPage() {
  // The desktop hero is hidden on phones, so it must not be preloaded (or
  // eagerly loaded) there. Preload it for desktop only, with high priority.
  const { props: desktopHero } = getImageProps({
    src: DESKTOP_HERO_SRC,
    alt: "",
    fill: true,
    sizes: "100vw",
  });
  preload(desktopHero.src, {
    as: "image",
    fetchPriority: "high",
    imageSrcSet: desktopHero.srcSet,
    imageSizes: "100vw",
    media: DESKTOP_HERO_MEDIA,
  });

  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.35 });

  return (
    <main className="overflow-x-clip bg-[#f6f7f8] text-[#151515]">
      {/* Hero */}
      <section className="relative isolate overflow-hidden pt-[60px]">
        <div className="mx-auto max-w-[1240px] px-5 pb-10 pt-10 text-center sm:px-8 sm:pb-14 sm:pt-14 lg:px-10 lg:pt-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center gap-4"
          >
            <motion.h1
              variants={aboutHeadlineStagger}
              className="max-w-[980px] font-[family-name:var(--font-manrope)] text-[28px] font-bold leading-9 tracking-[-0.5px] text-[#111] sm:text-[clamp(1.85rem,4.2vw,48px)] sm:leading-[1.15] sm:tracking-[-1px]"
            >
              <motion.span
                variants={aboutHeadlineChunk}
                className="inline max-sm:block"
              >
                We are Mekark.
              </motion.span>{" "}
              <motion.span
                variants={aboutHeadlineChunk}
                className="inline max-sm:block"
              >
                This is our story.
              </motion.span>
            </motion.h1>
            <motion.span
              variants={fadeUp}
              aria-hidden
              className="block h-0.5 w-[70px] bg-[#ed1c24]"
            />
            <motion.p
              variants={fadeUp}
              className="max-w-[1240px] font-[family-name:var(--font-manrope)] text-sm font-medium leading-[1.65] text-[#515151] sm:text-[clamp(1rem,1.6vw,22px)]"
            >
              What began in 1998 as a small fabrication and roofing venture has
              grown, through hard work, trust, and strong engineering, into one
              of South India&apos;s leading EPC turnkey solutions providers.
              Over the past 18+ years, Mekark has expanded from PEB and
              structural fabrication into civil construction, industrial
              buildings, warehouses, roofing systems, and complete turnkey
              construction, building one generation, one decision, at a time.
            </motion.p>
          </motion.div>
        </div>

        {/* Mobile hero — Figma: background + centered 18+ badge */}
        <div className="relative mx-auto w-full sm:hidden">
          <div className="relative w-full aspect-[402/80]">
            <Image
              src="/images/about/history/about-hero-mobile.webp"
              alt="Mekark company history hero image"
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority
              fetchPriority="high"
              aria-hidden
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative aspect-[71/54] h-[67%] w-auto">
                <Image
                  src="/images/about/history/18-plus-mobile.webp"
                  alt="18+ years of experience"
                  fill
                  className="object-contain"
                  sizes="71px"
                  priority
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop hero */}
        <div className="relative mx-auto hidden w-full max-w-[1916px] sm:block">
          <div className="relative w-full aspect-[802/160]">
            <Image
              src={DESKTOP_HERO_SRC}
              alt="18+ years of experience"
              fill
              className="object-contain object-bottom"
              sizes="100vw"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      {/* Video */}
      {/* <section className="bg-[#f6f7f8] px-5 py-10 sm:px-8 sm:py-16 lg:px-10">
        <div className="mx-auto max-w-[1230px]">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="mb-6 font-[family-name:var(--font-manrope)] text-[clamp(1.65rem,3vw,40px)] font-semibold tracking-[-1px] text-[#111] sm:mb-8"
          >
            Watch Our Story
          </motion.h2>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="relative aspect-[16/9] overflow-hidden bg-[#d9d9d9]"
          >
            <button
              type="button"
              aria-label="Play Mekark story video"
              className="absolute inset-0 flex items-center justify-center transition-opacity hover:opacity-90"
            >
              <span className="relative size-[min(18vw,120px)]">
                <Image
                  src="/images/about/history/play-icon.svg"
                  alt="Play video"
                  fill
                  aria-hidden
                />
              </span>
            </button>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="mx-auto mt-8 max-w-[1648px] text-center font-[family-name:var(--font-manrope)] text-[clamp(1rem,1.6vw,22px)] font-medium leading-[1.65] text-[#515151] sm:mt-10"
          >
            From a single fabrication unit in 1998 to a 1500+ member EPC
            turnkey solutions provider today, this is the story of three
            generations building Mekark together.
          </motion.p>
        </div>
      </section> */}

      {/* Leadership — fluid two-column; no 18vw gutters that crush 1280 laptops */}
      <section className="border-t border-[#dedede] bg-[#f6f7f8] px-5 py-12 sm:px-8 sm:py-16 lg:px-[clamp(1.5rem,5vw,5rem)] lg:py-[clamp(3.5rem,7vw,7.5rem)]">
        <div className="mx-auto flex w-full max-w-[1230px] flex-col gap-8 sm:gap-10 lg:flex-row lg:items-start lg:gap-10 xl:gap-12 2xl:gap-16">
          <aside className="relative mx-auto w-full max-w-[440px] shrink-0 lg:mx-0 lg:w-[min(100%,36%)] lg:max-w-[400px] xl:sticky xl:top-24 xl:max-w-[420px] xl:self-start 2xl:static 2xl:max-w-[440px]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
            >
              <div className="relative w-full overflow-hidden rounded-[20px]">
                <Image
                  src={mdPortraitPhoto}
                  alt="D. Aquin Janvel, Managing Director of Mekark Pvt Ltd"
                  className="h-auto w-full"
                  sizes="(max-width: 1024px) 100vw, min(440px, 36vw)"
                />
              </div>
              <div className="mt-4 border-t border-black/15 pt-4 sm:mt-5 sm:pt-5">
                <p className="font-[family-name:var(--font-manrope)] text-lg font-medium leading-tight text-black sm:text-[21px]">
                  D. Aquin Janvel
                </p>
                <p className="mt-1 font-[family-name:var(--font-manrope)] text-sm text-[#333] sm:text-base">
                  Managing Director
                </p>
              </div>
            </motion.div>
          </aside>

          <div className="flex min-w-0 flex-1 flex-col gap-6 sm:gap-7 lg:gap-6 xl:gap-7">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              className="font-[family-name:var(--font-manrope)] text-[28px] font-semibold leading-tight tracking-[-1px] text-black sm:text-[clamp(1.65rem,3vw,40px)]"
            >
              <span className="block sm:inline">Two generations.</span>{" "}
              <span className="block sm:inline">One promise.</span>
            </motion.h2>

            <motion.blockquote
              variants={aboutQuoteReveal}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              className="relative w-full max-w-[min(100%,28rem)] sm:pl-10"
            >
              <motion.div
                variants={aboutQuoteIcon}
                className="relative mb-2 h-[18px] w-5 sm:absolute sm:mb-0 sm:left-0 sm:top-4 sm:h-[26px] sm:w-[29px]"
                aria-hidden
              >
                <Image
                  src="/images/about/quotes-ltr.svg"
                  alt="Opening quotation mark"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 20px, 36px"
                />
              </motion.div>
              <div className="relative w-full bg-[#fff3e4] p-3 sm:min-h-[8.5rem] sm:p-5 sm:pl-4">
                <p className="w-full text-left font-manrope text-sm font-normal leading-[1.5] text-black sm:text-xl sm:leading-[1.5]">
                  We didn&apos;t just inherit a business - we inherited a
                  responsibility to build better.
                </p>
                <motion.div
                  variants={aboutQuoteIcon}
                  className="absolute -bottom-6 right-1 h-[18px] w-5 rotate-180 sm:bottom-0 sm:right-0 sm:h-[26px] sm:w-[29px] sm:translate-x-[140%]"
                  aria-hidden
                >
                  <Image
                    src="/images/about/quotes-ltr.svg"
                    alt="Opening quotation mark"
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 20px, 36px"
                  />
                </motion.div>
              </div>
            </motion.blockquote>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              className="mt-4 pb-2 sm:mt-0 sm:pb-4 lg:pb-0"
            >
              <p className="max-w-[62ch] font-[family-name:var(--font-manrope)] text-sm leading-[1.65] text-black sm:text-[clamp(1rem,1.15vw,1.125rem)] sm:leading-[1.65]">
                Mekark exists because two generations refused to stop building.
                My father started with nothing but a workshop and a belief that
                quality work speaks for itself. I grew up watching that belief
                become a business, and when it was my turn to lead, my job
                wasn&apos;t to change what he built, but to give it room to
                grow. Every step since has really just been us keeping the same
                promise at a bigger scale: do the work right, earn the trust,
                and let the results speak. What started as a handful of people
                in a small setup is today a team of over a thousand, building
                across South India and we&apos;re still just getting started.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey stats */}
      <section className="relative bg-white">
        <div className="pointer-events-none absolute inset-x-0 top-6 bottom-0 sm:top-[39px]">
          <div className="relative mx-auto h-full max-w-[1911px]">
            <div className="absolute inset-x-0 bottom-0 h-[min(32vw,130px)] sm:h-[min(52vw,619px)]">
              <Image
                src="/images/about/history/journey-bg-mobile.webp"
                alt="Mekark journey timeline background"
                fill
                className="object-cover object-bottom sm:hidden"
                sizes="100vw"
                aria-hidden
              />
              <Image
                src="/images/about/history/journey-bg.webp"
                alt="Mekark journey timeline background"
                fill
                className="hidden object-cover object-bottom sm:block"
                sizes="100vw"
                aria-hidden
              />
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-[1230px] px-3 pt-8 pb-[min(36vw,150px)] sm:px-8 sm:pt-[38px] sm:pb-[min(42vw,340px)] lg:px-10 lg:pb-[280px]">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="flex flex-col items-center gap-8 sm:gap-[38px]"
          >
            <div className="flex flex-col items-center gap-5 text-center sm:gap-[29px]">
              <motion.h2
                variants={fadeUp}
                className="max-w-[922px] font-[family-name:var(--font-manrope)] text-[28px] font-normal leading-9 tracking-[-1.5px] text-black max-sm:whitespace-nowrap sm:text-[clamp(1.85rem,4vw,49px)] sm:leading-[1.22]"
              >
                Our journey through the years
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="max-w-[800px] font-[family-name:var(--font-manrope)] text-sm font-medium leading-[1.78] text-[#515151] opacity-80 sm:text-[16.3px]"
              >
                From a small PEB beginning to a full-scale construction partner,
                <br className="hidden sm:inline" /> Mekark has grown through
                engineering excellence, trusted execution, and long-term
                industrial impact.
              </motion.p>
            </div>

            <motion.div
              ref={statsRef}
              variants={fadeUp}
              className="relative w-full overflow-visible rounded-[10px] bg-[#e50818] px-2 py-5 sm:overflow-hidden sm:rounded-[30px] sm:p-8 lg:p-10"
            >
              {/* Mobile — Figma 7634:4218: 3×2 grid with dividers */}
              <div className="relative overflow-visible sm:hidden">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-white/25"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 left-[31%] w-px -translate-x-1/2 bg-white/25"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 left-[64%] w-px -translate-x-1/2 bg-white/25"
                />

                <div className="grid grid-cols-[0.95fr_0.95fr_1.15fr] gap-x-0">
                  {STAT_COLUMNS.map((column, columnIndex) => (
                    <div
                      key={columnIndex}
                      className={`flex min-w-0 flex-col gap-[30px] overflow-visible py-1 ${
                        columnIndex === 0
                          ? "pr-2"
                          : columnIndex === 1
                            ? "px-3"
                            : "pl-3 pr-2"
                      }`}
                    >
                      {column.map((stat, statIndex) => {
                        const flatIndex =
                          STAT_COLUMNS.slice(0, columnIndex).reduce(
                            (total, col) => total + col.length,
                            0,
                          ) + statIndex;

                        return (
                          <JourneyStat
                            key={stat.label}
                            stat={stat}
                            start={statsInView}
                            delay={0.2 + flatIndex * 0.12}
                            compact
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tablet / desktop */}
              <div className="hidden sm:block">
                <div className="absolute inset-x-8 top-1/2 hidden h-px -translate-y-1/2 bg-white/25 lg:inset-x-10 lg:block" />

                <div className="grid min-[520px]:grid-cols-2 min-[520px]:gap-8 sm:min-[520px]:gap-10 lg:flex lg:items-stretch lg:gap-[41px]">
                  {STAT_COLUMNS.map((column, columnIndex) => (
                    <div
                      key={columnIndex}
                      className={`flex flex-col gap-8 sm:gap-10 lg:flex-1 lg:gap-[50px] ${
                        columnIndex < STAT_COLUMNS.length - 1
                          ? "lg:border-r lg:border-white/25 lg:border-b-0 lg:pb-0 lg:pr-[41px]"
                          : ""
                      } ${
                        columnIndex === 2
                          ? "min-[520px]:col-span-2 min-[520px]:mx-auto min-[520px]:w-full min-[520px]:max-w-[520px] lg:col-span-1 lg:mx-0 lg:max-w-none"
                          : ""
                      }`}
                    >
                      {column.map((stat, statIndex) => {
                        const flatIndex =
                          STAT_COLUMNS.slice(0, columnIndex).reduce(
                            (total, col) => total + col.length,
                            0,
                          ) + statIndex;

                        return (
                          <JourneyStat
                            key={stat.label}
                            stat={stat}
                            start={statsInView}
                            delay={0.2 + flatIndex * 0.12}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
