"use client";

import CountUp from "@/components/services/peb/CountUp";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { SERVICE_BODY_TEXT_SIZES } from "@/components/services/serviceTypography";

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

type Stat = {
  label: string;
  value: ReactNode;
};

const stats: Stat[] = [
  {
    label: "Years Experience",
    value: (
      <CountUp end={18} delay={0.65}>
        {(n) => (
          <>
            <span className="text-white">{n}</span>
            <span className="text-[#eb1a20]">+</span>
          </>
        )}
      </CountUp>
    ),
  },
  {
    label: "Production Capacity",
    value: (
      <CountUp end={40000} delay={0.75} format={formatWithCommas}>
        {(n) => (
          <>
            <span className="text-[#f9f9f9]">{n} </span>
            <span className="text-[#eb1a20]">Tons</span>
          </>
        )}
      </CountUp>
    ),
  },
  {
    label: "Manufacturing Campus",
    value: (
      <CountUp end={70} delay={0.85}>
        {(n) => (
          <>
            <span className="text-white">{n} Lakhs </span>
            <span className="text-[#e9000e]">+ Sq.ft.</span>
          </>
        )}
      </CountUp>
    ),
  },
  {
    label: "Engineers",
    value: (
      <>
        <span className="text-white">175</span>
        <span className="text-[#e9000e]">+ In-House</span>
      </>
    ),
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-svh w-full overflow-hidden bg-[#060606] font-[family-name:var(--font-manrope)] lg:h-[115dvh] lg:min-h-0">
      {/* Background image stack */}
      <div className="absolute inset-0">
        <div className="absolute left-[-8%] top-[-1%] h-[110%] w-[110%]">
          <Image
            src="/images/services/peb/hero/building.png"
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
              src="/images/services/peb/hero/layer.png"
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

      {/* Text + CTAs */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1440px] flex-col items-center px-5 pt-24 pb-44 text-center sm:px-8 sm:pt-28 sm:pb-48 md:pb-40 lg:pt-32">
        <motion.h1
          className="w-full max-w-[1100px] text-center text-[clamp(1.75rem,6.5vw,3rem)] font-bold leading-[1.15] text-[#111111] sm:text-[clamp(2rem,4.5vw,3rem)] sm:leading-[1.17]"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
        >
          Tamil Nadu&apos;s Leading Pre-Engineered Building (PEB) Contractor
          &amp; Manufacturer
        </motion.h1>

        <motion.p
          className={`mt-4 w-full max-w-[38rem] text-center text-[rgba(5,7,12,0.5)] sm:mt-[15px] sm:max-w-[1100px] ${SERVICE_BODY_TEXT_SIZES}`}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
        >
          From design to fabrication to installation, Mekark delivers turnkey
          industrial construction solutions for factories, warehouses, and
          commercial buildings, backed by 18+ years and Tamil Nadu&apos;s
          highest-capacity manufacturing facility.
        </motion.p>

        <motion.div
          className="mt-5 flex w-full max-w-sm flex-col items-stretch justify-center gap-3 sm:mt-[15px] sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
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

      {/* Stats bar */}
      <motion.div
        className="absolute inset-x-0 bottom-4 z-10 grid grid-cols-2 gap-x-3 gap-y-4 px-4 min-[390px]:gap-x-4 sm:bottom-6 sm:gap-x-6 sm:gap-y-5 md:bottom-[50px] md:flex md:flex-wrap md:items-center md:justify-center md:gap-x-[50px]"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.1, delayChildren: 0.65 },
          },
        }}
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            className="flex min-w-0 flex-col items-start gap-1 px-0 sm:min-w-[90px] sm:px-2.5"
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: "easeOut" },
              },
            }}
          >
            <p className="w-full text-[clamp(1rem,4.4vw,1.125rem)] font-extrabold leading-[1.2] tracking-[-0.04em] sm:text-[18px] md:text-[20px]">
              {stat.value}
            </p>
            <p className="mt-0.5 w-full text-[clamp(0.5625rem,2.7vw,0.625rem)] font-semibold capitalize leading-[1.35] tracking-[0.04em] text-white/70 sm:text-[9px] sm:tracking-[1.2px]">
              {stat.label}
            </p>
          </motion.div>
        ))}

        <motion.div
          className="col-span-2 flex min-w-0 max-w-none flex-col items-start border-t border-white/15 px-0 pt-4 mt-1 sm:col-span-1 sm:mt-0 sm:border-0 sm:pt-0 sm:px-2.5"
          variants={{
            hidden: { opacity: 0, y: 12 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: "easeOut" },
            },
          }}
        >
          <p className="w-full text-[clamp(1rem,4.4vw,1.125rem)] font-extrabold leading-[1.2] tracking-[-0.03em] sm:text-[16px] md:text-[20px]">
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
