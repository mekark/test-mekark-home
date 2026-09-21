"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ServiceMobileHero from "@/components/services/ServiceMobileHero";
import {
  civilMobileHeroImageDefaults,
  civilMobileHeroLayout,
} from "@/components/services/serviceMobileHeroCivilLayout";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { useServiceEnquiry } from "@/components/services/ServiceEnquiryProvider";

const easeOut = [0.22, 1, 0.36, 1] as const;

const heroDescription =
  "Mekark designs and constructs multi-storey steel buildings for factories, offices, warehouses, and commercial complexes, backed by 18+ years of experience and 15 completed projects across Tamil Nadu and India.";

type CountUpProps = {
  value: number;
  decimals?: number;
  duration?: number;
  className?: string;
};

function CountUp({
  value,
  decimals = 0,
  duration = 1.4,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduceMotion = useReducedMotion() ?? false;
  const [display, setDisplay] = useState(reduceMotion ? value : 0);

  useEffect(() => {
    if (reduceMotion) {
      setDisplay(value);
      return;
    }

    if (!isInView) return;

    const controls = animate(0, value, {
      duration,
      ease: easeOut,
      onUpdate: (latest) => setDisplay(latest),
    });

    return () => controls.stop();
  }, [isInView, value, duration, reduceMotion]);

  const formatted =
    decimals > 0 ? display.toFixed(decimals) : String(Math.round(display));

  return (
    <span ref={ref} className={className}>
      {formatted}
    </span>
  );
}

const trustItems = [
  {
    value: (
      <>
        <CountUp value={18} className="text-white" />
        <span className="text-[#ed2024]">+</span>
      </>
    ),
    label: "Years Experience",
    mobileLabel: "Years Experience",
  },
  // {
  //   value: (
  //     <>
  //       X <span className="text-[#ed2024]">Tons</span>
  //     </>
  //   ),
  //   label: "Successful Multi-Storey & Industrial Projects",
  //   mobileLabel: "Multi-Storey Projects",
  // },
  {
    value: (
      <>
        <CountUp value={4.7} decimals={1} className="text-white" />
        /5 <span className="text-[#ed2024]">Trusted</span>
      </>
    ),
    label: "Client Rating",
    mobileLabel: "Client Rating",
  },
  {
    value: (
      <>
        <CountUp value={98} className="text-white" />{" "}
        <span className="text-[#ed2024]">%</span>
      </>
    ),
    label: "On-Time Delivery Guarantee",
    mobileLabel: "On-Time Delivery",
  },
  {
    value: <span className="text-white">ISO 9001:2015</span>,
    label: "Certified Structural Steel Manufacturer",
    mobileLabel: "Certified Structural Steel Manufacturer",
  },
] as const;

function MobileHero() {
  const { openEnquiry } = useServiceEnquiry();

  return (
    <ServiceMobileHero
      {...civilMobileHeroLayout}
      title="South India's Leading Multi-Storey Steel Building Manufacturer"
      description={heroDescription}
      heroImage={{
        ...civilMobileHeroImageDefaults,
        src: "/images/services/multi-storey/hero/building-layer.webp",
        alt: "Multi-storey steel building under construction",
        objectPosition: "center bottom",
        scale: 1.23,
        translateX: "-32px",
        translateY: "-13px",
      }}
      arrowIcon="/images/services/multi-storey/hero/arrow.svg"
      onEnquiryClick={openEnquiry}
      stats={trustItems.slice(0, 4).map((item) => ({
        key: item.label,
        value: item.value,
        mobileLabel: item.mobileLabel,
      }))}
      certification={
        <>
          <span className="text-white">ISO 9001:2015 </span>
          <span className="text-[#18a34a]">Certified </span>
          <span className="text-[#ed2024]">Structural Steel Manufacturer</span>
        </>
      }
    />
  );
}

function DesktopHero() {
  const reduceMotion = useReducedMotion();
  const { openEnquiry } = useServiceEnquiry();

  return (
    <section className="relative hidden min-h-[1048px] w-full flex-col overflow-hidden bg-[#060606] font-sans text-white md:flex">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={reduceMotion ? false : { scale: 1.04, opacity: 0.92 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: easeOut }}
        >
          <Image
            src="/images/services/multi-storey/hero/sky-bg.webp"
            alt="Skyline backdrop for multi-storey steel building"
            fill
            priority
            sizes="1920px"
            className="object-cover object-[90%_46%]"
          />
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-[55%]"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #ffc2c2 0%, rgba(255,255,255,0) 100%)",
            }}
          />
          <Image
            src="/images/services/multi-storey/hero/building-layer.webp"
            alt="Multi-storey steel building under construction"
            fill
            priority
            sizes="1920px"
            className="translate-y-[3%] object-cover object-[95%_58%]"
          />
        </motion.div>
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[34%]"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(30,30,30,0) 0%, #1e1e1e 100%)",
          }}
        />
      </div>

      <div className="relative z-10 flex min-h-[1048px] w-full flex-col justify-between pl-32 pb-[66px] pt-32">
        <div className="relative flex w-full max-w-[989px] flex-col items-start gap-5 opacity-90">
          <motion.h1
            className="w-max max-w-none whitespace-nowrap font-manrope text-5xl font-bold leading-[56px] tracking-[-1px] text-gray"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.15 }}
          >
            South India&apos;s Leading Multi-Storey Steel Building Manufacturer
          </motion.h1>

          <motion.p
            className="relative flex w-full max-w-[1278px] items-center font-manrope text-[18.67px] font-medium leading-[26.67px] text-gray-300"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.3 }}
          >
            {heroDescription}
          </motion.p>

          <motion.div
            className="flex items-center gap-6"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.45 }}
          >
            <button
              type="button"
              onClick={openEnquiry}
              className="inline-flex cursor-pointer items-center justify-center rounded-[6.93px] border-0 bg-firebrick px-[31px] py-[15.6px] text-base font-semibold leading-[20.79px] text-white shadow-[0px_6.93px_27.72px_rgba(196,22,28,0.3)] transition-transform duration-300 hover:scale-[1.02]"
            >
              Get a Free Quote
            </button>

            <Link
              href="/projects/completed-projects"
              className="group inline-flex items-center gap-2 text-base font-semibold leading-[20.79px] text-firebrick"
            >
              View Our Projects
              <span className="relative inline-block size-[14px] overflow-hidden transition-transform duration-300 group-hover:translate-x-1">
                <Image
                  src="/images/services/multi-storey/hero/arrow.svg"
                  alt="Arrow icon"
                  width={10}
                  height={9}
                  className="absolute top-1/4 left-[18%] h-1/2 w-[62.5%]"
                />
              </span>
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="flex items-center justify-center gap-[66.7px]"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.08,
                delayChildren: reduceMotion ? 0 : 0.55,
              },
            },
          }}
        >
          {trustItems.map((item) => (
            <motion.div
              key={item.label}
              className="flex min-w-0 flex-col items-start gap-1 px-[13.3px]"
              variants={{
                hidden: reduceMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: easeOut },
                },
              }}
            >
              <div className="text-[26.67px] leading-[25.62px] font-extrabold tracking-[-1.11px]">
                {item.value}
              </div>
              <div className="max-w-[200px] text-[10.67px] leading-[11.9px] font-semibold tracking-[1.6px] text-gray-400 capitalize">
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
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
