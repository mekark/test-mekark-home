"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import {
  dotGridPop,
  dotGridStagger,
  drawVertical,
  engineeringStatReveal,
  fadeUp,
  logoRowReveal,
  notchDrop,
  pulseDot,
  reflectionFade,
  scaleIn,
  slideFromLeft,
  slideFromRight,
  staggerContainer,
  statsGridStagger,
} from "@/lib/motion-variants";

const VIEWPORT = { once: true, margin: "-80px" as const };

const STATS = [
  {
    value: "6 Lakh+",
    lines: ["Sq.Ft Manufacturing", "Facility"],
    icon: "/images/engineering/icons/facility.svg",
  },
  {
    value: "18+",
    lines: ["Years of", "Experience"],
    icon: "/images/engineering/icons/experience.svg",
  },
  {
    value: "450+",
    lines: ["Projects", "Delivered"],
    icon: "/images/engineering/icons/projects.svg",
  },
  {
    value: "98%",
    lines: ["On-Time Delivery", "Rate"],
    icon: "/images/engineering/icons/delivery.svg",
  },
] as const;

const LOGO_ROW_1 = [
  { src: "/images/engineering/logos/johnson.png", alt: "Johnson Electric" },
  { src: "/images/engineering/logos/jk.png", alt: "JK Tyre" },
  { src: "/images/engineering/logos/igarashi.png", alt: "Igarashi" },
  { src: "/images/engineering/logos/hyundai.png", alt: "Hyundai" },
  { src: "/images/engineering/logos/hero.png", alt: "Hero" },
  { src: "/images/engineering/logos/ford.png", alt: "Ford" },
  { src: "/images/engineering/logos/exaktheit.png", alt: "Exaktheit" },
  { src: "/images/engineering/logos/epi.png", alt: "EPI" },
  { src: "/images/engineering/logos/eastman.png", alt: "Eastman" },
  { src: "/images/engineering/logos/ctci.png", alt: "CTCI" },
] as const;

const LOGO_ROW_2 = [
  { src: "/images/engineering/logos/vwu.png", alt: "VWU" },
  { src: "/images/engineering/logos/voltas.png", alt: "Voltas" },
  { src: "/images/engineering/logos/tvs.png", alt: "TVS" },
  { src: "/images/engineering/logos/tata.png", alt: "Tata Electronics" },
  { src: "/images/engineering/logos/stetter.png", alt: "Schwing Stetter" },
  { src: "/images/engineering/logos/srf.png", alt: "SRF" },
  { src: "/images/engineering/logos/saveetha.png", alt: "Saveetha" },
  { src: "/images/engineering/logos/sarvam.png", alt: "Sarvam Safety" },
  { src: "/images/engineering/logos/sanmar1.png", alt: "Sanmar" },
  { src: "/images/engineering/logos/sanmar2.png", alt: "Sanmar Group" },
] as const;

const ICON_CIRCLE_BG =
  "radial-gradient(95.52% 95.52% at 35% 30%, #fff, #f4f4f4)";

const DOT_COLORS = [
  "#eb1325",
  "#f10913",
  "#e6010a",
  "#ee161b",
  "#f00b0d",
  "#faabaa",
  "#fbbdbf",
  "#fbc9c9",
  "#fbd3d4",
] as const;

function DotGridIcon() {
  return (
    <motion.div
      className="grid shrink-0 grid-cols-3 gap-[3.5px] opacity-50"
      variants={dotGridStagger}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      aria-hidden
    >
      {DOT_COLORS.map((color, index) => (
        <motion.span
          key={index}
          className="size-[7px]"
          style={{ backgroundColor: color }}
          variants={dotGridPop}
        />
      ))}
    </motion.div>
  );
}

function StatIconCircle({ src, alt }: { src: string; alt: string }) {
  return (
    <motion.div
      className="relative isolate z-0 flex size-[72px] shrink-0 items-center justify-center rounded-[36px]"
      style={{ background: ICON_CIRCLE_BG }}
      whileHover={{ scale: 1.06, rotate: 3 }}
      transition={{ type: "spring", stiffness: 380, damping: 18 }}
    >
      <div className="pointer-events-none absolute inset-0 rounded-[36px] bg-transparent shadow-[inset_0_1px_0_0_#fff,0_8px_18px_-8px_rgba(0,0,0,0.12),0_2px_4px_rgba(0,0,0,0.04)]" />
      <Image
        src={src}
        alt={alt}
        width={32}
        height={32}
        className="relative z-[1] size-8"
      />
    </motion.div>
  );
}

function StatCard({
  stat,
  showDivider,
  index,
}: {
  stat: (typeof STATS)[number];
  showDivider: boolean;
  index: number;
}) {
  return (
    <motion.div
      variants={scaleIn}
      className={`relative isolate flex flex-1 items-center gap-[22px] rounded-xl px-6 py-3.5 ${
        showDivider
          ? "border-t border-solid border-[#d6d6d6] lg:border-l lg:border-t-0"
          : ""
      }`}
    >
      <StatIconCircle src={stat.icon} alt={stat.lines.join(" ")} />
      <div className="z-[1] flex shrink-0 flex-col items-start gap-[3.5px]">
        <div className="flex flex-col items-start self-stretch">
          <p className="relative text-[28px] font-extrabold leading-[28px] tracking-[-0.76px] text-[#0a0a0a] sm:text-[32px] sm:leading-[32px] lg:text-[38px] lg:leading-[38px]">
            {stat.value}
          </p>
        </div>
        <div className="flex flex-col items-start self-stretch text-[11px] font-semibold uppercase leading-[15.95px] tracking-[1.54px] text-[#6b6b6b]">
          {stat.lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>
      <motion.span
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={VIEWPORT}
        transition={{
          duration: 0.55,
          delay: 0.2 + index * 0.08,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute bottom-[-1.96px] left-1/2 z-[2] h-0.5 w-9 origin-center -translate-x-1/2 bg-[#ed2024]"
      />
    </motion.div>
  );
}

function LogoMarqueeRow({
  logos,
  direction,
  delay = 0,
}: {
  logos: readonly { src: string; alt: string }[];
  direction: "forward" | "backward";
  delay?: number;
}) {
  const duplicated = [...logos, ...logos];

  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true },
    [
      AutoScroll({
        direction,
        speed: 0.6,
        startDelay: 400,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  return (
    <motion.div
      variants={logoRowReveal}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      transition={{ delay }}
    >
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {duplicated.map((logo, index) => (
            <div
              key={`${logo.alt}-${index}`}
              className="relative mx-[25px] size-[60px] shrink-0 sm:mx-[37px] sm:size-[75px]"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain"
                sizes="75px"
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function EngineeringNumbersSection() {
  return (
    <section className="relative w-full bg-white text-black">
      {/* Engineering in Numbers */}
      <div className="relative overflow-hidden px-4 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-14 lg:px-[55px] lg:pb-[70px] lg:pt-[54px]">
        <motion.div
          className="pointer-events-none absolute inset-0"
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/images/engineering/background.png"
            alt=""
            fill
            className="object-cover object-left"
            sizes="100vw"
            priority={false}
          />
        </motion.div>

        <div className="relative mx-auto max-w-[1305px]">
          <AnimatedSection
            variants={slideFromRight}
            className="flex items-center justify-end border-b border-[#d7d3d3] pb-3"
          >
            <p className="text-right text-[10px] font-medium uppercase tracking-[3px] text-[#8c8a8a] sm:text-xs sm:tracking-[4px]">
              Scale that speaks for itself
            </p>
          </AnimatedSection>

          <motion.div
            className="mt-8 flex items-center gap-4 sm:mt-10 sm:gap-[18px]"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            <DotGridIcon />
            <motion.h2
              variants={slideFromLeft}
              className="text-2xl font-extrabold leading-tight sm:text-[32px] sm:leading-[48px] lg:text-[40px] lg:leading-[60px]"
            >
              Our Engineering in Numbers
            </motion.h2>
          </motion.div>

          <div className="mt-8 flex flex-col gap-10 lg:mt-12 lg:flex-row lg:items-start lg:gap-16">
            <motion.div
              className="relative z-10 min-w-0 flex-1"
              variants={engineeringStatReveal}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
            >
              <div className="relative max-w-[677px]">
                <Image
                  src="/images/engineering/stat-40000.svg"
                  alt="40,000+"
                  width={672}
                  height={137}
                  unoptimized
                  className="relative z-10 h-auto w-full max-w-[672px]"
                  priority
                />
                <motion.div
                  className="relative mt-1"
                  variants={reflectionFade}
                  initial="hidden"
                  whileInView="visible"
                  viewport={VIEWPORT}
                >
                  <Image
                    src="/images/engineering/stat-40000-reflection.svg"
                    alt=""
                    width={672}
                    height={139}
                    unoptimized
                    className="h-auto w-full max-w-[672px] -scale-y-100 blur-[1px]"
                    aria-hidden
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-white/95" />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="flex shrink-0 gap-6 lg:max-w-[390px] lg:pt-14"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
            >
              <motion.div
                variants={drawVertical}
                className="relative w-px shrink-0 origin-top self-stretch"
              >
                <Image
                  src="/images/engineering/vertical-divider.png"
                  alt=""
                  fill
                  className="object-cover"
                  aria-hidden
                />
                <motion.span
                  variants={pulseDot}
                  className="absolute left-1/2 top-1/2 z-10 flex size-3.5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[7px] border border-[#d6d6d6] bg-white p-px"
                >
                  <span className="size-1.5 rounded-[3px] bg-[#ed2024] shadow-[0_0_12px_rgba(237,32,36,0.7)]" />
                </motion.span>
              </motion.div>
              <motion.div
                variants={slideFromRight}
                className="flex flex-col gap-3 sm:gap-[13px]"
              >
                <p className="text-xs font-extrabold uppercase tracking-[2.08px] text-[#ed2024] sm:text-[13px] sm:leading-[19.5px]">
                  Annual Production Capacity
                </p>
                <p className="max-w-[360px] text-sm leading-relaxed text-[#2a2a2a] sm:text-[17px] sm:leading-[26.35px]">
                  Tons of structural steel manufactured at our fully integrated
                  Tamil Nadu facility.
                </p>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="relative z-10 mt-8 lg:mt-10"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            <div className="relative box-border flex w-full flex-col items-start justify-center gap-2 rounded-[18px] border border-solid border-[rgba(255,255,255,0.8)] bg-[rgba(255,255,255,0.6)] px-0 py-[30px] text-left font-[family-name:var(--font-manrope)] text-[38px] text-[#0a0a0a] shadow-[0px_0px_15.2px_rgba(0,0,0,0.05)] backdrop-blur-[10px] lg:flex-row">
              <motion.div
                className="flex w-full flex-col lg:flex-row"
                variants={statsGridStagger}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT}
              >
                {STATS.map((stat, index) => (
                  <StatCard
                    key={stat.value}
                    stat={stat}
                    showDivider={index > 0}
                    index={index}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trusted By */}
      <div className="relative overflow-hidden pb-10 pt-6 sm:pb-14">
        <motion.div
          className="pointer-events-none absolute inset-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Image
            src="/images/engineering/trusted-bg.png"
            alt=""
            fill
            className="object-cover object-top"
            sizes="100vw"
          />
        </motion.div>
        <Image
          src="/images/engineering/trusted-base.png"
          alt=""
          width={1440}
          height={124}
          className="pointer-events-none absolute bottom-0 left-1/2 w-full max-w-none -translate-x-1/2 object-cover"
          aria-hidden
        />

        <div className="relative mx-auto max-w-[1304px] px-4 sm:px-8 lg:px-0">
          <motion.div
            className="relative mx-auto flex w-full max-w-[292px] translate-y-9 justify-center sm:translate-y-11 lg:mx-0 lg:ml-[calc(50%-170px)] lg:translate-x-0"
            variants={notchDrop}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            <Image
              src="/images/engineering/trusted-notch.svg"
              alt=""
              width={292}
              height={44}
              className="relative top-[20px] h-auto w-full sm:top-[22px]"
              aria-hidden
            />
            <motion.div
              className="absolute left-1/2 top-[22px] -translate-x-1/2 sm:top-[25px]"
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: 0.25 }}
            >
              <Image
                src="/images/engineering/shield-icon.svg"
                alt=""
                width={30}
                height={35}
                aria-hidden
              />
            </motion.div>
          </motion.div>

          <motion.h2
            className="mt-16 translate-y-1 pt-3 text-center text-2xl font-extrabold leading-tight sm:mt-20 sm:translate-y-1.5 sm:pt-4 sm:text-[32px] sm:leading-[48px] lg:text-[40px] lg:leading-[60px]"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            <motion.span
              variants={scaleIn}
              className="inline-block text-[#e73533]"
            >
              Trusted
            </motion.span>
            <motion.span variants={slideFromRight} className="inline-block">
              {" "}
              By Leading Industrial Enterprises
            </motion.span>
          </motion.h2>

          <div className="relative mt-10 space-y-5 sm:mt-12">
            <LogoMarqueeRow
              logos={LOGO_ROW_1}
              direction="backward"
              delay={0.1}
            />
            <LogoMarqueeRow
              logos={LOGO_ROW_2}
              direction="forward"
              delay={0.2}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
