"use client";

import CountUp from "@/components/services/peb/CountUp";
import ServiceMobileHero from "@/components/services/ServiceMobileHero";
import {
  civilMobileHeroImageDefaults,
  civilMobileHeroLayout,
} from "@/components/services/serviceMobileHeroCivilLayout";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const formatWithCommas = (value: number) =>
  value.toLocaleString("en-US");

const heroDescription =
  "From design to fabrication to installation, Mekark delivers turnkey industrial construction solutions for factories, warehouses, and commercial buildings, backed by 18+ years and Tamil Nadu's highest-capacity manufacturing facility.";

type Stat = {
  label: string;
  mobileLabel: string;
  value: ReactNode;
};

const mobileStats: Stat[] = [
  {
    label: "Years Experience",
    mobileLabel: "Years Experience",
    value: (
      <CountUp end={18} delay={0.65}>
        {(n) => (
          <>
            {n}
            <span className="text-[#ed2024]">+</span>
          </>
        )}
      </CountUp>
    ),
  },
  {
    label: "Production Capacity",
    mobileLabel: "Production Capacity",
    value: (
      <CountUp end={40000} delay={0.75} format={formatWithCommas}>
        {(n) => (
          <>
            {n} <span className="text-[#ed2024]">MT</span>
          </>
        )}
      </CountUp>
    ),
  },
  {
    label: "Projects Completed",
    mobileLabel: "Projects Completed",
    value: (
      <CountUp end={70} delay={0.85}>
        {(n) => (
          <>
            {n} Lakhs <span className="text-[#ed2024]">+ Sq.ft.</span>
          </>
        )}
      </CountUp>
    ),
  },
  {
    label: "Engineers",
    mobileLabel: "Engineers",
    value: (
      <>
        175 <span className="text-[#ed2024]">+ In-House</span>
      </>
    ),
  },
];

const desktopStats: Stat[] = mobileStats;

function MobileHero() {
  return (
    <ServiceMobileHero
      {...civilMobileHeroLayout}
      title={
        <>
          South India&apos;s Leading Pre-
          <br />
          Engineered Building (PEB)
          <br />
          Contractor &amp; Manufacturer
        </>
      }
      description={heroDescription}
      heroImage={{
        ...civilMobileHeroImageDefaults,
        src: "/images/services/peb/hero/layer.webp",
        alt: "Mekark pre-engineered building manufacturing facility",
        objectPosition: "center bottom",
        scale: 1.50,
        translateY: "-10px",
      }}
      arrowIcon="/images/services/peb/hero/arrow.svg"
      stats={mobileStats.map((stat) => ({
        key: stat.label,
        value: stat.value,
        mobileLabel: stat.mobileLabel,
      }))}
      certification={
        <>
          <span className="text-white">ISO 9001:2015 </span>
          <span className="text-[#ed2024]">&amp;</span>
          <span className="text-white"> </span>
          <span className="text-[#18a34a]">Green </span>
          <span className="text-[#ed2024]">Certified</span>
        </>
      }
    />
  );
}

function DesktopHero() {
  return (
    <section className="relative hidden min-h-0 w-full overflow-hidden bg-[#060606] font-[family-name:var(--font-manrope)] md:block md:h-[1048px]">
      <div className="absolute inset-0">
        <div className="absolute left-[-8%] top-[-1%] h-[110%] w-[110%]">
          <Image
            src="/images/services/peb/hero/building.webp"
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-0 h-[40%] bg-gradient-to-b from-[#ffc2c2] to-transparent" />

        <div className="absolute bottom-[-4%] left-[-8%] h-[70%] w-[110%] overflow-hidden">
          <div className="relative h-[157%] w-full -translate-y-[36%]">
            <Image
              src="/images/services/peb/hero/layer.webp"
              alt="Mekark pre-engineered building manufacturing facility"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[33%] bg-gradient-to-b from-transparent to-[#1e1e1e]" />
      </div>

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1440px] flex-col items-center px-8 pt-32 pb-40 text-center">
        <motion.h1
          className="w-full max-w-[1100px] text-center font-manrope text-[48px] font-bold leading-[56px] tracking-[-1.92px] text-[#111111]"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
        >
          South India&apos;s Leading
          <br />
          <span className="whitespace-nowrap">
            Pre-Engineered Building (PEB) Contractor &amp; Manufacturer
          </span>
        </motion.h1>

        <motion.p
          className="relative mt-[15px] flex w-full max-w-[1278px] items-center justify-center text-center font-manrope text-[18.67px] font-medium leading-[26.67px] text-gray-300"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
        >
          {heroDescription}
        </motion.p>

        <motion.div
          className="mt-[15px] flex flex-wrap items-center justify-center gap-4"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.5}
        >
          <motion.a
            href="/#enquiry"
            className="inline-flex items-center justify-center rounded-[5px] bg-[#c4161c] px-[23px] py-[12px] text-[14px] font-semibold leading-none text-white shadow-[0px_5px_10px_rgba(196,22,28,0.3)] transition-colors duration-300 hover:bg-[#a81217]"
            whileHover={{ scale: 1.07 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Get a Free Quote
          </motion.a>
          <Link
            href="/projects/completed-projects"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-3 text-[14px] font-semibold leading-none text-[#c4161c] transition-opacity duration-300 hover:opacity-80"
          >
            View Our Projects
            <span className="relative inline-block size-[10px] shrink-0 overflow-hidden">
              <Image
                src="/images/services/peb/hero/arrow.svg"
                alt=""
                width={8}
                height={7}
                className="size-full"
              />
            </span>
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="absolute inset-x-0 bottom-[50px] z-10 flex flex-wrap items-center justify-center gap-x-[50px] gap-y-5 px-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.1, delayChildren: 0.65 },
          },
        }}
      >
        {desktopStats.map((stat) => (
          <motion.div
            key={stat.label}
            className="flex min-w-[90px] flex-col items-start gap-1 px-2.5"
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: "easeOut" },
              },
            }}
          >
            <p className="w-full text-[20px] font-extrabold leading-[1.2] tracking-[-0.04em]">
              {stat.value}
            </p>
            <p className="mt-0.5 w-full text-[9px] font-semibold capitalize leading-[1.35] tracking-[1.2px] text-white/70">
              {stat.label}
            </p>
          </motion.div>
        ))}

        <motion.div
          className="flex min-w-0 flex-col items-start px-2.5"
          variants={{
            hidden: { opacity: 0, y: 12 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: "easeOut" },
            },
          }}
        >
          <p className="w-full text-[20px] font-extrabold leading-[1.2] tracking-[-0.03em]">
            <span className="text-white">ISO 9001:2015 </span>
            <span className="text-[#eb1a20]">&amp; </span>
            <span className="text-[#04b330]">Green </span>
            <span className="text-[#ed1d23]">Certified</span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default function Hero() {
  return (
    <>
      <MobileHero />
      <DesktopHero />
    </>
  );
}
