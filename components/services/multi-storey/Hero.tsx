"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";

const easeOut = [0.22, 1, 0.36, 1] as const;

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
        <span className="text-red-100">+</span>
      </>
    ),
    label: "Years Experience",
  },
  {
    value: (
      <>
        <span className="text-whitesmoke">X </span>
        <span className="text-red-100">Tons</span>
      </>
    ),
    label: "Successful Multi-Storey & Industrial Projects",
    shortLabel: "Multi-Storey & Industrial Projects",
  },
  {
    value: (
      <>
        <span className="text-white">
          <CountUp value={4.7} decimals={1} />
          /5{" "}
        </span>
        <span className="text-red-200">Trusted</span>
      </>
    ),
    label: "Client Rating",
  },
  {
    value: (
      <>
        <CountUp value={98} className="text-white" />{" "}
        <span className="text-red-200">%</span>
      </>
    ),
    label: "On-Time Delivery Guarantee",
  },
  {
    value: <span className="text-white">ISO 9001:2015</span>,
    label: "Certified Structural Steel Manufacturer",
  },
] as const;

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useLayoutEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const sync = () => setIsDesktop(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return isDesktop;
}

export default function Hero() {
  const isDesktop = useIsDesktop();
  const reduceMotion = useReducedMotion();
  const mainStats = trustItems.slice(0, 4);
  const isoStat = trustItems[4];

  return (
    <section className="relative flex w-full min-h-svh flex-col overflow-hidden bg-[#060606] font-sans text-white lg:min-h-[1048px]">
      {/* Mobile hero — full-bleed image with responsive focal point */}
      <div className="absolute inset-0 overflow-hidden lg:hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/services/multi-storey/hero/building-mobile.webp"
            alt="Multi-storey steel building under construction"
            fill
            priority
            sizes="100vw"
            className="h-full w-full scale-[1.04] object-cover object-[58%_54%] brightness-[1.08] contrast-[1.06] min-[390px]:object-[64%_50%] sm:object-[68%_44%]"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[min(48%,20rem)]"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(6,6,6,0.96) 0%, rgba(6,6,6,0.72) 45%, rgba(6,6,6,0.28) 75%, rgba(6,6,6,0) 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[min(46%,20rem)]"
          style={{
            backgroundImage:
              "linear-gradient(0deg, rgba(6,6,6,0.94) 0%, rgba(6,6,6,0.6) 50%, rgba(6,6,6,0) 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 z-[2]"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.04) 38%, rgba(0,0,0,0.06) 58%, rgba(0,0,0,0.38) 100%)",
          }}
        />
      </div>

      {/* Desktop stack — unchanged from Figma */}
      {isDesktop ? (
        <div className="absolute inset-0 hidden overflow-hidden lg:block">
          <motion.div
            className="absolute inset-0"
            initial={reduceMotion ? false : { scale: 1.04, opacity: 0.92 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: easeOut }}
          >
            <Image
              src="/images/services/multi-storey/hero/sky-bg.png"
              alt=""
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
              src="/images/services/multi-storey/hero/building-layer.png"
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
      ) : null}

      <div className="relative z-10 flex min-h-0 w-full max-w-full flex-1 flex-col justify-between px-4 pb-[max(2rem,env(safe-area-inset-bottom))] pt-24 sm:px-8 sm:pt-28 lg:pl-32 lg:pb-[66px] lg:pt-32">
        <div className="relative flex w-full min-w-0 max-w-[620px] flex-col items-start gap-3 sm:gap-4 lg:max-w-[989px] lg:gap-5 lg:opacity-90">
          <motion.h1
            className="w-full min-w-0 text-left font-sans text-[clamp(1.625rem,6.2vw,2.25rem)] font-bold leading-[1.15] tracking-[-0.04em] text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.75)] sm:text-[36px] sm:leading-[1.2] sm:tracking-[-0.9px] lg:w-max lg:max-w-none lg:whitespace-nowrap lg:text-5xl lg:leading-[56px] lg:tracking-[-1px] lg:text-gray lg:drop-shadow-none"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.15 }}
          >
            Chennai&apos;s Leading Multi-Storey Steel Building Manufacturer
          </motion.h1>

          <motion.p
            className="w-full min-w-0 text-[clamp(0.9375rem,3.8vw,1.0625rem)] leading-[1.5] font-semibold text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.8)] sm:text-[17px] sm:leading-[26px] lg:text-[18.67px] lg:leading-[26.67px] lg:text-gray-300 lg:drop-shadow-none"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.3 }}
          >
            Mekark designs and constructs multi-storey steel buildings for
            factories, offices, warehouses, and commercial complexes, backed by
            18+ years of experience and 200+ completed projects across Tamil Nadu
            and India.
          </motion.p>

          <motion.div
            className="flex w-full min-w-0 flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4 lg:gap-6"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.45 }}
          >
            <a
              href="/#enquiry"
              className="inline-flex w-full items-center justify-center rounded-[6.93px] bg-firebrick px-6 py-[13px] text-[15px] leading-[20.79px] font-semibold text-white shadow-[0px_6.93px_27.72px_rgba(196,22,28,0.3)] transition-transform duration-300 hover:scale-[1.02] sm:w-auto sm:px-[31px] sm:py-[15.6px] sm:text-base"
            >
              Get a Free Quote
            </a>

            <Link
              href="/projects/completed-projects"
              className="group inline-flex w-full items-center justify-center gap-2 text-[15px] leading-[20.79px] font-semibold text-white sm:w-auto sm:justify-start sm:text-base lg:text-firebrick"
            >
              View Our Projects
              <span className="relative inline-block size-[14px] overflow-hidden transition-transform duration-300 group-hover:translate-x-1">
                <Image
                  src="/images/services/multi-storey/hero/arrow.svg"
                  alt=""
                  width={10}
                  height={9}
                  className="absolute top-1/4 left-[18%] h-1/2 w-[62.5%] brightness-0 invert lg:brightness-100 lg:invert-0"
                />
              </span>
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="mt-auto w-full min-w-0 pt-6 lg:hidden"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.06,
                delayChildren: reduceMotion ? 0 : 0.4,
              },
            },
          }}
        >
          <div className="grid grid-cols-2 gap-x-3 gap-y-4 min-[390px]:gap-x-4 sm:gap-x-6 sm:gap-y-5">
            {mainStats.map((item) => (
              <motion.div
                key={item.label}
                className="flex min-w-0 flex-col items-start gap-1"
                variants={{
                  hidden: reduceMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 12 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.45, ease: easeOut },
                  },
                }}
              >
                <div className="w-full text-[clamp(1rem,4.4vw,1.125rem)] leading-[1.2] font-extrabold tracking-[-0.04em]">
                  {item.value}
                </div>
                <div className="w-full text-[clamp(0.5625rem,2.7vw,0.625rem)] leading-[1.35] font-semibold tracking-[0.04em] text-white/70 capitalize break-words">
                  {"shortLabel" in item ? item.shortLabel : item.label}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-4 flex min-w-0 flex-col items-start gap-1 border-t border-white/15 pt-4 sm:mt-5 sm:pt-5"
            variants={{
              hidden: reduceMotion
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 12 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.45, ease: easeOut },
              },
            }}
          >
            <div className="w-full text-[clamp(1rem,4.4vw,1.125rem)] leading-[1.2] font-extrabold tracking-[-0.04em]">
              {isoStat.value}
            </div>
            <div className="w-full text-[clamp(0.5625rem,2.7vw,0.625rem)] leading-[1.35] font-semibold tracking-[0.04em] text-white/70 capitalize break-words">
              {isoStat.label}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-0 hidden lg:flex lg:items-center lg:justify-center lg:gap-[66.7px]"
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
