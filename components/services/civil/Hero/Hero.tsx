"use client";

import CountUp from "@/components/services/civil/CountUp";
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
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const formatWithCommas = (value: number) => value.toLocaleString("en-US");

const heroDescription =
  "Mekark delivers turnkey civil construction and RCC building solutions for factories, warehouses, commercial complexes, and institutional projects — backed by 18+ years of experience and 200+ completed commercial and industrial projects across Tamil Nadu and India.";

const mainStats: {
  value: ReactNode;
  label: string;
  mobileLabel: string;
}[] = [
  {
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
    label: "Years Experience",
    mobileLabel: "Years Experience",
  },
  {
    value: (
      <CountUp end={40000} delay={0.75} format={formatWithCommas}>
        {(n) => (
          <>
            {n} <span className="text-[#ed2024]">MT</span>
          </>
        )}
      </CountUp>
    ),
    label: "Annual Production Capacity",
    mobileLabel: "Annual Production Capacity",
  },
  {
    value: (
      <CountUp end={4.7} delay={0.85} decimals={1} format={(v) => v.toFixed(1)}>
        {(n) => (
          <>
            {n}/5<span className="text-[#ed2024]"> Trusted</span>
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
            {n} <span className="text-[#ed2024]">%</span>
          </>
        )}
      </CountUp>
    ),
    label: "On-Time Delivery Guarantee",
    mobileLabel: "On-Time Delivery",
  },
];

const desktopStats: {
  value: ReactNode;
  label: string;
  mobileLabel: string;
  large?: boolean;
}[] = [
  ...mainStats,
  {
    value: <>ISO 9001:2015</>,
    label: "Certified Civil Contractor",
    mobileLabel: "Certified Civil Contractor",
    large: true,
  },
];

const CIVIL_MOBILE_BOTTOM_GRADIENT =
  "linear-gradient(180deg, rgba(130, 100, 80, 0) 0%, rgba(130, 100, 80, 0) 22%, rgba(116, 88, 53, 0.58) 50%, rgba(116, 88, 53, 0.92) 70%, #624914 100%)";

function MobileHero() {
  return (
    <ServiceMobileHero
      {...civilMobileHeroLayout}
      title={
        <>
          <span className="block">South India&apos;s Leading</span>
          <span className="block whitespace-nowrap">Civil Construction Company</span>
          <span className="block">&amp; RCC Contractor</span>
        </>
      }
      description={heroDescription}
      heroImage={{
        ...civilMobileHeroImageDefaults,
        src: "/images/services/civil/hero/building.webp",
        alt: "Mekark civil construction project",
        objectPosition: "32% 78%",
        scale: 1.13,
        translateY: "-43px",
        bottomGradient: CIVIL_MOBILE_BOTTOM_GRADIENT,
        bottomGradientOverlayHeight: "98%",
        bottomColor: "#624914",
      }}
      arrowIcon="/images/services/civil/hero/arrow.svg"
      stats={mainStats.map((stat) => ({
        key: stat.label,
        value: stat.value,
        mobileLabel: stat.mobileLabel,
      }))}
      certification={
        <>
          <span className="text-white">ISO 9001:2015 </span>
          <span className="text-[#ed2024]">&amp;</span>
          <span className="text-white"> </span>
          <span className="text-[#18a34a]">Certified </span>
          <span className="text-[#ed2024]">Civil Contractor</span>
        </>
      }
    />
  );
}

function DesktopHero() {
  return (
    <div className="relative hidden min-h-0 w-full shrink-0 flex-col overflow-hidden bg-[#060606] text-left font-sans text-white md:flex md:h-[1048px]">
      {/* Background */}
      <div className="absolute inset-0 shrink-0">
        <div className="absolute inset-0 lg:bottom-[-114px] lg:left-[-72px] lg:h-[1162px] lg:w-[2064px]">
          <Image
            src="/images/services/civil/hero/bg.webp"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute top-0 right-0 h-[543px] w-full max-w-[1920px] shrink-0 [background:linear-gradient(180deg,_rgba(255,_194,_194,_0.85),_rgba(255,_255,_255,_0))]" />
        <div className="pointer-events-none absolute bottom-[-0.33px] left-0 z-[1] h-[737px] w-full max-w-[1920px] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/services/civil/hero/building.webp"
            alt="Mekark civil construction project under construction"
            className="absolute left-0 top-[-33.87%] h-[146.62%] w-full object-cover"
          />
        </div>
        <div className="pointer-events-none absolute right-0 bottom-0 z-[2] h-[358.7px] w-full max-w-[1920px] shrink-0 [background:linear-gradient(180deg,_rgba(30,_30,_30,_0),_#1e1e1e)]" />
      </div>

      {/* Copy + CTAs */}
      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-none flex-col items-center gap-5 px-8 pt-28 text-center text-[48px] text-gray-100"
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
          className="inline-block w-full self-stretch text-center font-manrope text-[48px] font-bold leading-[56px] tracking-[-1px] text-gray"
        >
          South India&apos;s Leading
          <br />
          Civil Construction Company &amp; RCC Contractor
        </motion.h1>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative flex max-w-[1278px] items-center justify-center text-center font-manrope text-[18.67px] font-medium leading-[26.67px] text-gray-300"
        >
          {heroDescription}
        </motion.p>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative h-[50.7px] w-[400px] text-left text-[16px] text-white"
        >
          <motion.a
            href="/#enquiry"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[calc(50%-26.09px)] left-0 inline-flex items-center gap-[8.7px] rounded-[6.93px] bg-firebrick px-[31.2px] py-[15.6px] shadow-[0px_6.93px_27.72px_rgba(196,22,28,0.3)]"
          >
            <span className="leading-[20.79px] font-semibold text-white">
              Get a Free Quote
            </span>
          </motion.a>

          <Link
            href="/projects/completed-projects"
            className="group absolute top-0 bottom-[0.5px] left-[217.04px] h-[calc(100%-0.5px)] w-[191.8px] rounded-[5.2px] text-firebrick"
          >
            <span className="absolute top-[calc(50%-10.64px)] left-[21.66px] leading-[20.79px] font-semibold">
              View Our Projects
            </span>
            <span className="absolute top-[18.19px] left-[169.66px] flex h-[13.9px] w-[13.9px] items-center justify-center overflow-hidden">
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
        className="absolute bottom-[66.7px] left-1/2 z-10 flex w-max max-w-[calc(100%-48px)] -translate-x-1/2 flex-wrap items-center justify-center gap-x-[66.7px] gap-y-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.08, delayChildren: 0.3 },
          },
        }}
      >
        {desktopStats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={fadeUp}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="box-border flex min-w-0 flex-col items-start gap-1 px-num-13_3"
          >
            <div
              className={`font-extrabold tracking-[-1.11px] text-num-26_67 leading-num-25_62 ${
                stat.large
                  ? "text-[26.67px] leading-[27.18px] tracking-[-0.93px]"
                  : ""
              }`}
            >
              {stat.value}
            </div>
            <div className="max-w-[11rem] text-num-10_67 font-semibold tracking-[1.61px] leading-[11.89px] text-gray-400 capitalize sm:max-w-none">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
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
