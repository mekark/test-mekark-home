"use client";

import CountUp from "@/components/services/civil/CountUp";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const formatWithCommas = (value: number) => value.toLocaleString("en-US");

const stats: {
  value: ReactNode;
  label: string;
  mobileLabel: string;
  large?: boolean;
}[] = [
  {
    value: (
      <CountUp end={18} delay={0.65}>
        {(n) => (
          <>
            {n}
            <span className="text-red-100">+</span>
          </>
        )}
      </CountUp>
    ),
    label: "Years Experience",
    mobileLabel: "Years Experience",
  },
  {
    value: (
      <CountUp end={40000} delay={0.75} format={formatWithCommas}>
        {(n) => (
          <>
            {n} <span className="text-red-100">Tons</span>
          </>
        )}
      </CountUp>
    ),
    label: "Successful Commercial & Industrial Projects",
    mobileLabel: "Commercial & Industrial Projects",
  },
  {
    value: (
      <CountUp end={4.7} delay={0.85} decimals={1} format={(v) => v.toFixed(1)}>
        {(n) => (
          <>
            {n}/5<span className="text-red-200"> Trusted</span>
          </>
        )}
      </CountUp>
    ),
    label: "Client Rating",
    mobileLabel: "Client Rating",
  },
  {
    value: (
      <CountUp end={98} delay={0.95}>
        {(n) => (
          <>
            {n} <span className="text-red-200">%</span>
          </>
        )}
      </CountUp>
    ),
    label: "On-Time Delivery Guarantee",
    mobileLabel: "On-Time Delivery",
  },
  {
    value: <>ISO 9001:2015</>,
    label: "Certified Civil Contractor",
    mobileLabel: "Certified Civil Contractor",
    large: true,
  },
];

export default function Hero() {
  return (
    <div className="relative flex min-h-[100svh] w-full shrink-0 flex-col overflow-hidden bg-[#060606] text-left font-sans text-white lg:h-[1048px] lg:min-h-0">
      {/* Background */}
      <div className="absolute inset-0 shrink-0">
        <div className="absolute inset-0 lg:bottom-[-114px] lg:left-[-72px] lg:h-[1162px] lg:w-[2064px]">
          <Image
            src="/images/services/civil/hero/bg.png"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute top-0 right-0 h-[35%] w-full max-w-[1920px] shrink-0 [background:linear-gradient(180deg,_rgba(255,_194,_194,_0.85),_rgba(255,_255,_255,_0))] sm:h-[40%] lg:h-[543px]" />
        {/* Building — scaled/cropped for mobile portrait */}
        <div className="pointer-events-none absolute bottom-0 left-0 z-[1] h-[55%] w-full overflow-hidden sm:h-[52%] lg:bottom-[-0.33px] lg:h-[737px] lg:max-w-[1920px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/services/civil/hero/building.png"
            alt="Mekark civil construction project under construction"
            className="absolute bottom-0 left-1/2 h-[115%] w-[240%] max-w-none -translate-x-[46%] object-cover object-[center_35%] sm:w-[200%] sm:-translate-x-[48%] md:w-[170%] lg:left-0 lg:top-[-33.87%] lg:h-[146.62%] lg:w-full lg:translate-x-0 lg:object-cover"
          />
        </div>
        {/* Soft fade only — keep building visible above the fold on mobile */}
        <div className="pointer-events-none absolute right-0 bottom-0 z-[2] h-[28%] w-full max-w-[1920px] shrink-0 [background:linear-gradient(180deg,_rgba(30,_30,_30,_0)_0%,_rgba(30,_30,_30,_0.55)_55%,_#1e1e1e_100%)] sm:h-[40%] lg:h-[358.7px] lg:[background:linear-gradient(180deg,_rgba(30,_30,_30,_0),_#1e1e1e)]" />
      </div>

      {/* Copy + CTAs */}
      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-[1278px] flex-col items-center gap-4 px-5 pt-24 text-center opacity-[0.9] sm:gap-5 sm:px-8 sm:pt-28 lg:max-w-none lg:gap-5 lg:px-8 lg:pt-32 lg:text-[48px] lg:text-gray-100"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } },
        }}
      >
        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="self-stretch text-[24px] font-bold tracking-[-0.8px] leading-[1.2] text-gray-100 sm:text-[36px] sm:leading-[44px] sm:tracking-[-1px] lg:text-[48px] lg:leading-[56px]"
        >
          Chennai&apos;s Leading
          <br />
          Civil Construction Company &amp; RCC Contractor
        </motion.h1>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-[36rem] text-[14px] leading-[20px] font-semibold text-gray-300 sm:max-w-[1278px] sm:text-[17px] sm:leading-[24px] lg:text-[18.67px] lg:leading-[26.67px]"
        >
          Mekark delivers turnkey civil construction and RCC building solutions
          for factories, warehouses, commercial complexes, and institutional
          projects — backed by 18+ years of experience and 200+ completed
          commercial and industrial projects across Tamil Nadu and India.
        </motion.p>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative flex w-full max-w-[400px] flex-col items-stretch gap-2.5 sm:flex-row sm:items-center sm:justify-center sm:gap-3 lg:h-[50.7px] lg:gap-0 lg:text-left lg:text-[16px]"
        >
          <motion.a
            href="/#enquiry"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="inline-flex min-h-[48px] items-center justify-center gap-[8.7px] rounded-[6.93px] bg-firebrick px-6 py-3.5 text-[15px] shadow-[0px_6.93px_27.72px_rgba(196,22,28,0.3)] sm:px-[31.2px] sm:py-[15.6px] sm:text-base lg:absolute lg:top-[calc(50%-26.09px)] lg:left-0 lg:min-h-0"
          >
            <span className="leading-[20.79px] font-semibold">
              Get a Free Quote
            </span>
          </motion.a>

          <Link
            href="/projects/completed-projects"
            className="group relative inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[5.2px] px-5 text-[15px] text-firebrick sm:h-[50.7px] sm:min-h-0 sm:justify-start sm:text-base lg:absolute lg:top-0 lg:bottom-[0.5px] lg:left-[217.04px] lg:h-[calc(100%-0.5px)] lg:w-[191.8px] lg:px-0"
          >
            <span className="leading-[20.79px] font-semibold lg:absolute lg:top-[calc(50%-10.64px)] lg:left-[21.66px]">
              View Our Projects
            </span>
            <span className="flex h-[13.9px] w-[13.9px] items-center justify-center overflow-hidden lg:absolute lg:top-[18.19px] lg:left-[169.66px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/services/civil/hero/arrow.svg"
                alt=""
                width={10}
                height={9}
                className="h-auto w-[10px] transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Stats */}
      <motion.div
        className="relative z-10 mt-auto grid w-full grid-cols-2 gap-x-3 gap-y-5 px-5 pt-8 pb-8 sm:grid-cols-3 sm:gap-x-4 sm:gap-y-6 sm:px-8 sm:pb-10 lg:absolute lg:bottom-[66.7px] lg:left-1/2 lg:mt-0 lg:flex lg:w-max lg:max-w-[calc(100%-48px)] lg:-translate-x-1/2 lg:flex-wrap lg:items-center lg:justify-center lg:gap-x-[66.7px] lg:gap-y-6 lg:px-0 lg:pt-0 lg:pb-0"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.08, delayChildren: 0.3 },
          },
        }}
      >
        {stats.map((stat, index) => {
          const isLast = index === stats.length - 1;

          return (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className={`flex flex-col gap-1 lg:box-border lg:items-start lg:px-num-13_3 ${
                isLast
                  ? "col-span-2 items-center text-center sm:col-span-1 sm:items-start sm:text-left"
                  : "items-start text-left"
              }`}
            >
              <div
                className={`font-extrabold tracking-[-1.11px] text-[22px] leading-[26px] sm:text-num-26_67 sm:leading-num-25_62 ${
                  stat.large
                    ? "text-[18px] leading-[22px] tracking-[-0.8px] sm:text-[22px] sm:leading-[27px] sm:tracking-[-0.93px] lg:text-[26.67px]"
                    : ""
                }`}
              >
                {stat.value}
              </div>
              <div className="max-w-[11rem] text-[10px] font-semibold tracking-[1.1px] leading-[13px] text-gray-400 capitalize sm:max-w-none sm:text-num-10_67 sm:leading-[11.89px] sm:tracking-[1.61px]">
                <span className="sm:hidden">{stat.mobileLabel}</span>
                <span className="hidden sm:inline">{stat.label}</span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
