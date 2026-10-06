"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import CountUp from "@/components/services/civil/CountUp";
import ServiceMobileHero from "@/components/services/ServiceMobileHero";
import {
  civilMobileHeroImageDefaults,
  civilMobileHeroLayout,
  greyMobileHeroBottomGradient,
} from "@/components/services/serviceMobileHeroCivilLayout";
import {
  MOBILE_HERO_DESCRIPTION_CLASS,
  SERVICE_MOBILE_HERO_TITLE_FIGMA_CLASS,
} from "@/components/services/serviceMobileCivilTemplate";
import { useServiceEnquiry } from "@/components/services/ServiceEnquiryProvider";

const formatWithCommas = (value: number) => value.toLocaleString("en-US");

const heroStats: {
  key: string;
  value: ReactNode;
  mobileLabel: string;
}[] = [
  {
    key: "years",
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
    mobileLabel: "Years Experience",
  },
  {
    key: "capacity",
    value: (
      <CountUp end={40000} delay={0.75} format={formatWithCommas}>
        {(n) => (
          <>
            {n} <span className="text-[#ed2024]">Tons</span>
          </>
        )}
      </CountUp>
    ),
    mobileLabel: "Prod. Capacity",
  },
  {
    key: "campus",
    value: (
      <CountUp end={70} delay={0.85}>
        {(n) => (
          <>
            {n} lakh <span className="text-[#ed2024]">+ Sq.ft.</span>
          </>
        )}
      </CountUp>
    ),
    mobileLabel: "Projects Completed",
  },
  {
    key: "engineers",
    value: (
      <CountUp end={175} delay={0.95}>
        {(n) => (
          <>
            {n}
            <span className="text-[#ed2024]">+ In-House</span>
          </>
        )}
      </CountUp>
    ),
    mobileLabel: "Engineers",
  },
];

const heroDescription =
  "Mekark delivers turnkey MEP design-build for factories, warehouses, and manufacturing plants: HVAC, electrical, plumbing, firefighting, and mechanical utilities, backed by 18+ years of experience and 300+ completed industrial MEP projects across Tamil Nadu, India.";

function MobileHero() {
  const { openEnquiry } = useServiceEnquiry();

  return (
    <ServiceMobileHero
      {...civilMobileHeroLayout}
      title={
        <>
          <span className="block">South India&apos;s</span>
          <span className="block">Leading Industrial MEP</span>
          <span className="block">Contractor &amp; Turnkey</span>
          <span className="block">MEP Contracting</span>
          <span className="block">Company</span>
        </>
      }
      titleClassName={SERVICE_MOBILE_HERO_TITLE_FIGMA_CLASS}
      descriptionClassName={MOBILE_HERO_DESCRIPTION_CLASS}
      description={heroDescription}
      heroImage={{
        ...civilMobileHeroImageDefaults,
        src: "/images/services/mep/hero/layer-1.webp",
        alt: "Industrial MEP facility",
        objectPosition: "center bottom",
        scale: 1.2,
        translateX: "-10px",
        translateY: "-8px",
        bottomGradient: greyMobileHeroBottomGradient,
        bottomGradientOverlayHeight: "98%",
        bottomColor: "#252525",
      }}
      arrowIcon="/images/services/mep/hero/arrow.svg"
      onEnquiryClick={openEnquiry}
      stats={heroStats.map((stat) => ({
        key: stat.key,
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

export default function Hero() {
  const { openEnquiry } = useServiceEnquiry();

  return (
    <>
      <MobileHero />

      {/* Desktop */}
      <section className="relative hidden h-[1048px] w-full shrink-0 overflow-hidden bg-gray-200 text-left font-manrope text-num-26_67 text-white md:block">
        <div className="absolute top-[-32px] right-0 left-0 h-[1080px] w-full shrink-0">
          <Image
            className="absolute top-[-17px] left-0 h-[1080px] w-full max-w-none object-cover shrink-0"
            src="/images/services/mep/hero/remove-1.webp"
            width={1920}
            height={1080}
            sizes="100vw"
            alt="Industrial MEP facility background"
            priority
          />
          <div
            className="absolute top-[32.33px] right-0 h-[1048px] w-full shrink-0"
            style={{
              background:
                "linear-gradient(180deg, #ffc2c2, rgba(255, 255, 255, 0))",
            }}
          />
          <div className="absolute top-[125px] left-0 h-[882px] w-full overflow-hidden shrink-0">
            <Image
              className="absolute inset-0 h-full w-full object-cover object-[center_5%]"
              src="/images/services/mep/hero/layer-1.webp"
              width={1920}
              height={1080}
              sizes="100vw"
              alt="Industrial MEP facility"
              priority
            />
          </div>
          <div
            className="absolute right-0 bottom-0 h-[358.7px] w-full shrink-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(30, 30, 30, 0), #1e1e1e)",
            }}
          />
          <div className="absolute bottom-[66.7px] left-1/2 flex -translate-x-1/2 items-center gap-[66.7px] shrink-0">
            <div className="flex h-[65.3px] w-[137.3px] shrink-0 flex-col items-start justify-center gap-[4.1px] px-num-13_3 pt-[18px] pb-[18.6px] box-border">
              <div className="relative whitespace-nowrap tracking-[-1.11px] leading-num-25_62 font-extrabold">
                <CountUp end={18} delay={0.65}>
                  {(n) => (
                    <>
                      <span className="leading-num-25_62">{n}</span>
                      <span className="leading-num-25_62 text-red-200">+</span>
                    </>
                  )}
                </CountUp>
              </div>
              <div className="text-[10.67px] text-gray-400">
                <div className="relative tracking-[1.61px] leading-[11.89px] font-semibold capitalize">
                  Years Experience
                </div>
              </div>
            </div>

            <div className="flex h-16 shrink-0 flex-col items-start justify-center gap-[4.1px] px-num-13_3 pt-[18px] pb-[18.6px] box-border text-whitesmoke">
              <div className="relative whitespace-nowrap tracking-[-1.11px] leading-num-25_62 font-extrabold">
                <CountUp end={40000} delay={0.75} format={formatWithCommas}>
                  {(n) => (
                    <>
                      <span className="leading-num-25_62">{n} </span>
                      <span className="leading-num-25_62 text-red-200">Tons</span>
                    </>
                  )}
                </CountUp>
              </div>
              <div className="text-[10.67px] text-gray-400">
                <div className="relative tracking-[1.61px] leading-[11.89px] font-semibold capitalize">
                  Production Capacity
                </div>
              </div>
            </div>

            <div className="flex h-16 shrink-0 flex-col items-start justify-center gap-[4.3px] px-num-13_3 py-[18.5px] box-border">
              <div className="relative whitespace-nowrap tracking-[-1.11px] leading-num-25_62 font-extrabold">
                <CountUp end={70} delay={0.85}>
                  {(n) => (
                    <>
                      <span className="leading-num-25_62">{n} lakh </span>
                      <span className="leading-num-25_62 text-red-300">+ Sq.ft.</span>
                    </>
                  )}
                </CountUp>
              </div>
              <div className="text-[10.67px] text-gray-400">
                <div className="relative tracking-[1.6px] leading-[9.57px] font-semibold capitalize">
                  Projects Completed
                </div>
              </div>
            </div>

            <div className="flex h-16 shrink-0 flex-col items-start justify-center gap-[4.3px] px-num-13_3 py-[18.5px] box-border">
              <div className="relative whitespace-nowrap tracking-[-1.11px] leading-num-25_62 font-extrabold">
                <CountUp end={175} delay={0.95}>
                  {(n) => (
                    <>
                      <span className="leading-num-25_62">{n}</span>
                      <span className="leading-num-25_62 text-red-300">+ In-House</span>
                    </>
                  )}
                </CountUp>
              </div>
              <div className="text-[10.67px] text-gray-400">
                <div className="relative tracking-[1.6px] leading-[9.57px] font-semibold capitalize">
                  Engineers
                </div>
              </div>
            </div>

            <div className="flex shrink-0 flex-col items-start px-num-13_3 py-[4.3px] box-border">
              <div className="relative tracking-[-0.93px] leading-num-27_18 font-extrabold">
                <span className="block leading-num-27_18">
                  ISO 9001:2015 <span className="text-red-200">&</span>
                </span>
                <span className="block leading-num-27_18">
                  <span className="text-limegreen">Green </span>
                  <span className="text-red-100">Certified</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-[1] flex w-full shrink-0 flex-col items-start gap-5 pl-32 pr-[131px] pt-32 text-[40px] text-gray-100 opacity-90">
          <h1 className="relative self-stretch whitespace-nowrap font-manrope text-[clamp(1.75rem,2.05vw,40px)] font-bold leading-[46px] tracking-[-0.9px] text-gray">
            South India&apos;s Leading Industrial MEP Contractor &amp; Turnkey MEP Contracting Company
          </h1>
          <div className="relative flex w-full max-w-[1278px] items-center font-manrope text-[18.67px] font-medium leading-[26.67px] text-gray-300">
            {heroDescription}
          </div>
          <div className="relative h-[50.7px] w-[400px] text-[16px] text-white">
            <button
              type="button"
              onClick={openEnquiry}
              className="absolute top-1/2 left-0 flex -translate-y-1/2 cursor-pointer items-center gap-[8.7px] rounded-[6.93px] border-0 bg-firebrick px-[31.2px] py-[15.6px] shadow-[0px_6.93px_27.72px_rgba(196,22,28,0.3)] shrink-0"
            >
              <span className="relative shrink-0 leading-[20.79px] font-semibold">
                Get a Free Quote
              </span>
            </button>
            <Link
              href="/projects/completed-projects"
              className="absolute top-0 bottom-[0.5px] left-[217.04px] h-[calc(100%-0.5px)] w-[191.8px] shrink-0 rounded-[5.2px] text-firebrick"
            >
              <span className="absolute top-1/2 left-[21.66px] -translate-y-1/2 shrink-0 leading-[20.79px] font-semibold">
                View Our Projects
              </span>
              <span className="absolute top-[18.19px] left-[169.66px] h-[13.9px] w-[13.9px] overflow-hidden shrink-0">
                <Image
                  className="absolute top-[24.93%] right-[18.71%] bottom-[25.43%] left-[18.7%] h-[49.64%] w-full max-h-full max-w-full overflow-hidden"
                  src="/images/services/mep/hero/arrow.svg"
                  width={9}
                  height={7}
                  alt="Arrow icon"
                />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
