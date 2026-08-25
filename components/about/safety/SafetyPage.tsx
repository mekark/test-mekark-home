"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";

const CERTIFICATES = [
  {
    src: "/images/about/safety/Certi1.png",
    alt: "ISO 45001:2018 Certificate of Registration for MEKARK Structures India Pvt. Ltd.",
    label: "ISO 45001:2018",
    className:
      "object-contain object-center max-sm:origin-center max-sm:scale-[1.42] sm:object-left-top",
    hero: "/images/about/safety/hero.jpg",
    heroClassName: "object-cover object-[center_28%] sm:object-[72%_center]",
    heroAlt: "Construction worker in high-visibility gear holding a hard hat",
  },
  {
    src: "/images/about/safety/Certi2.png",
    alt: "Workplace Safety Excellence Certificate awarded to Mekark Structures India Pvt Ltd by Orbittal for Best Contractor Safety Performance, National Safety Day 2026.",
    label: "Safety Excellence",
    className:
      "object-contain object-center sm:object-left-top sm:translate-x-8 lg:translate-x-10",
    hero: "/images/about/safety/hero.jpg",
    heroClassName: "object-cover object-[center_28%] sm:object-[72%_center]",
    heroAlt: "Construction worker in high-visibility gear holding a hard hat",
  },
  {
    src: "/images/about/safety/Certi3.png",
    alt: "ISO 9001:2015 Certificate of Registration for MEKARK Structures India Pvt. Ltd.",
    label: "ISO 9001:2015",
    className:
      "object-contain object-center origin-top-left scale-[0.93] object-left-top sm:translate-x-20 lg:translate-x-32",
    hero: "/images/about/safety/hero-3.jpg",
    heroClassName: "object-cover object-[center_35%] sm:object-[58%_center]",
    heroAlt: "Construction site at golden hour with a tower crane over an unfinished building",
    overlay: "/images/about/safety/hero-3-workers.png",
    overlayAlt: "Two site engineers in safety vests looking toward the construction site",
    overlayClassName:
      "top-[30%] bottom-[-16%] right-[11%] w-[min(52%,52rem)] lg:top-[34%] lg:bottom-[-18%] lg:right-[15%] lg:w-[min(48%,50rem)]",
    overlayImageClassName: "object-contain object-center-bottom",
  },
  {
    src: "/images/about/safety/Environmental.png",
    alt: "ISO 14001:2015 Certificate of Registration for MEKARK Structures India Pvt. Ltd.",
    label: "ISO 14001:2015",
    className:
      "object-contain object-center max-sm:origin-center max-sm:scale-[1.48] sm:origin-top-left sm:scale-[0.97] sm:object-left-top sm:-translate-x-10 lg:-translate-x-6",
    hero: "/images/about/safety/hero-4.jpg",
    heroClassName: "object-cover object-[center_32%] sm:object-[72%_center]",
    heroAlt: "Sunlit forest with soft green bokeh in the background",
    overlay: "/images/about/safety/hero-4-globe.png",
    overlayAlt: "Hand cradling a globe with a green sprout growing from the top",
    overlayClassName:
      "top-[20%] bottom-[-8%] right-[14%] w-[min(50%,48rem)] lg:top-[22%] lg:bottom-[-10%] lg:right-[18%] lg:w-[min(46%,44rem)]",
    overlayImageClassName: "object-contain object-right-bottom",
  },
] as const;

const MOBILE_AUTO_SCROLL_INTERVAL = 4500;
const MOBILE_AUTO_SCROLL_PAUSE = 10000;
const SLIDE_EASE = [0.22, 1, 0.36, 1] as const;

const slideVariants = {
  enter: (direction: number) => ({
    y: direction > 0 ? "48%" : "-48%",
    opacity: 0,
    clipPath: direction > 0 ? "inset(90% 0 0 0)" : "inset(0 0 90% 0)",
    scale: 0.96,
  }),
  center: {
    y: "0%",
    opacity: 1,
    clipPath: "inset(0% 0 0 0)",
    scale: 1,
    transition: { duration: 0.55, ease: SLIDE_EASE },
  },
  exit: (direction: number) => ({
    y: direction > 0 ? "-48%" : "48%",
    opacity: 0,
    clipPath: direction > 0 ? "inset(0 0 90% 0)" : "inset(90% 0 0 0)",
    scale: 0.97,
    transition: { duration: 0.5, ease: SLIDE_EASE },
  }),
};

const mobileSlideVariants = {
  enter: (direction: number) => ({
    y: direction > 0 ? "28%" : "-28%",
    opacity: 0,
    scale: 0.94,
  }),
  center: {
    y: "0%",
    opacity: 1,
    scale: 1,
    transition: { duration: 0.42, ease: SLIDE_EASE },
  },
  exit: (direction: number) => ({
    y: direction > 0 ? "-28%" : "28%",
    opacity: 0,
    scale: 0.96,
    transition: { duration: 0.36, ease: SLIDE_EASE },
  }),
};

export function SafetyPage() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const cooldownRef = useRef(false);
  const touchStartY = useRef(0);
  const activeRef = useRef(0);
  const autoScrollPausedUntilRef = useRef(0);
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const lastIndex = CERTIFICATES.length - 1;

  const pauseAutoScroll = useCallback(() => {
    autoScrollPausedUntilRef.current = Date.now() + MOBILE_AUTO_SCROLL_PAUSE;
  }, []);

  const goTo = useCallback(
    (next: number, dir: number) => {
      if (cooldownRef.current) return false;
      if (next < 0 || next > lastIndex || next === activeRef.current) return false;
      cooldownRef.current = true;
      setDirection(dir);
      setActive(next);
      activeRef.current = next;
      window.setTimeout(() => {
        cooldownRef.current = false;
      }, 580);
      return true;
    },
    [lastIndex],
  );

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  useEffect(() => {
    if (reduceMotion) return;

    const media = window.matchMedia("(max-width: 639px)");
    let intervalId: number | undefined;

    const tick = () => {
      if (!media.matches || document.hidden) return;
      if (Date.now() < autoScrollPausedUntilRef.current) return;

      const current = activeRef.current;
      const next = current >= lastIndex ? 0 : current + 1;
      goTo(next, 1);
    };

    const start = () => {
      if (!media.matches) return;
      intervalId = window.setInterval(tick, MOBILE_AUTO_SCROLL_INTERVAL);
    };

    const stop = () => {
      if (intervalId !== undefined) {
        window.clearInterval(intervalId);
        intervalId = undefined;
      }
    };

    const onMediaChange = () => {
      stop();
      if (media.matches) start();
    };

    const onVisibilityChange = () => {
      if (document.hidden) pauseAutoScroll();
    };

    start();
    media.addEventListener("change", onMediaChange);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      stop();
      media.removeEventListener("change", onMediaChange);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [goTo, lastIndex, pauseAutoScroll, reduceMotion]);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const onWheel = (event: WheelEvent) => {
      if (window.matchMedia("(max-width: 639px)").matches) return;

      const goingDown = event.deltaY > 0;
      const goingUp = event.deltaY < 0;

      if (goingDown && active < lastIndex) {
        event.preventDefault();
        event.stopPropagation();
        goTo(active + 1, 1);
        return;
      }

      if (goingUp && active > 0) {
        event.preventDefault();
        event.stopPropagation();
        goTo(active - 1, -1);
      }
    };

    node.addEventListener("wheel", onWheel, { passive: false });
    return () => node.removeEventListener("wheel", onWheel);
  }, [active, goTo, lastIndex]);

  const slideAnimation = reduceMotion ? undefined : slideVariants;
  const mobileAnimation = reduceMotion ? undefined : mobileSlideVariants;

  return (
    <section
      ref={sectionRef}
      className="relative isolate h-[100dvh] overflow-hidden bg-[#f7f7f7] sm:bg-white"
    >
      <div className="absolute inset-0 pt-[76px] sm:pt-[88px]">
        <div className="relative h-full w-full">
          <AnimatePresence initial={false} mode="sync">
            <motion.div
              key={CERTIFICATES[active].hero}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduceMotion ? 0.2 : 0.45 }}
              className="absolute inset-0"
            >
              <Image
                src={CERTIFICATES[active].hero}
                alt={CERTIFICATES[active].heroAlt}
                fill
                priority={active === 0}
                className={CERTIFICATES[active].heroClassName}
                sizes="100vw"
              />
            </motion.div>
          </AnimatePresence>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-white from-[0%] via-white/94 via-[34%] to-white/55 to-[72%] sm:inset-y-0 sm:left-0 sm:w-[min(72%,54rem)] sm:bg-gradient-to-r sm:from-white sm:from-[3%] sm:via-white/80 sm:via-[52%] sm:to-transparent"
          />
          {"overlay" in CERTIFICATES[active] && CERTIFICATES[active].overlay ? (
            <AnimatePresence initial={false} mode="sync">
              <motion.div
                key={CERTIFICATES[active].overlay}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: reduceMotion ? 0.2 : 0.45 }}
                className={
                  "overlayClassName" in CERTIFICATES[active] &&
                  CERTIFICATES[active].overlayClassName
                    ? `pointer-events-none absolute z-[2] hidden sm:block ${CERTIFICATES[active].overlayClassName}`
                    : "pointer-events-none absolute top-[22%] bottom-[-6%] right-[8%] z-[2] hidden w-[min(52%,52rem)] sm:block lg:top-[26%] lg:bottom-[-8%] lg:right-[10%] lg:w-[min(48%,50rem)]"
                }
              >
                <Image
                  src={CERTIFICATES[active].overlay}
                  alt={CERTIFICATES[active].overlayAlt}
                  fill
                  className={
                    "overlayImageClassName" in CERTIFICATES[active] &&
                    CERTIFICATES[active].overlayImageClassName
                      ? CERTIFICATES[active].overlayImageClassName
                      : "object-contain object-right-bottom"
                  }
                  sizes="50vw"
                />
              </motion.div>
            </AnimatePresence>
          ) : null}
        </div>
      </div>

      <div className="relative z-10 flex h-full flex-col px-4 pb-3 pt-[calc(76px+0.65rem)] sm:px-8 sm:pb-4 sm:pt-[calc(88px+1rem)] lg:max-w-[min(72vw,66rem)] lg:pl-[clamp(1.25rem,8vw,10rem)] lg:pr-6 lg:pt-[calc(88px+0.85rem)] lg:pb-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex min-h-0 flex-1 flex-col gap-3 sm:gap-2.5 lg:gap-1.5"
        >
          <div className="shrink-0 text-center sm:text-left">
            <motion.p
              variants={fadeUp}
              className="mb-2 font-[family-name:var(--font-manrope)] text-[11px] font-bold uppercase tracking-[0.18em] text-[#ed1c24] sm:hidden"
            >
              Certifications
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-[family-name:var(--font-manrope)] text-[1.65rem] font-bold leading-[1.12] tracking-[-0.5px] text-black sm:w-max sm:max-w-none sm:whitespace-nowrap sm:text-[clamp(1.35rem,3.2vw,60px)] sm:leading-[1.1] sm:tracking-[-1px]"
            >
              Built Safe, Built Right
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-2 max-w-[677px] font-[family-name:var(--font-manrope)] text-[0.92rem] font-medium leading-[1.45] text-[#515151] sm:mx-0 sm:mt-0 sm:text-[clamp(0.95rem,1.25vw,22px)] sm:leading-[1.36]"
            >
              Strong structures start with strong safety practices, non-negotiable
              at every stage of every project.
            </motion.p>
          </div>

          <motion.div
            ref={scrollerRef}
            variants={fadeUp}
            className="relative mx-auto flex w-full min-h-0 max-w-[23rem] flex-1 flex-col sm:mx-0 sm:max-w-[56rem] sm:-ml-8 sm:min-h-[min(calc(100dvh-13rem),62rem)] lg:-ml-36 lg:max-w-[62rem]"
            onTouchStart={(event) => {
              pauseAutoScroll();
              touchStartY.current = event.touches[0]?.clientY ?? 0;
            }}
            onTouchEnd={(event) => {
              const endY = event.changedTouches[0]?.clientY ?? 0;
              const delta = touchStartY.current - endY;
              if (Math.abs(delta) < 40) return;
              pauseAutoScroll();
              if (delta > 0) goTo(active + 1, 1);
              else goTo(active - 1, -1);
            }}
          >
            <div className="relative flex min-h-0 flex-1 flex-col max-sm:overflow-visible overflow-hidden rounded-[22px] border border-white/90 bg-white/95 p-3 shadow-[0_22px_50px_rgba(15,23,42,0.14)] backdrop-blur-md sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none sm:backdrop-blur-none">
              <div className="mb-3 flex items-center justify-between gap-3 sm:hidden">
                <span className="rounded-full bg-[#111] px-3 py-1 font-[family-name:var(--font-manrope)] text-[11px] font-bold tracking-[0.08em] text-white">
                  {String(active + 1).padStart(2, "0")} /{" "}
                  {String(CERTIFICATES.length).padStart(2, "0")}
                </span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={CERTIFICATES[active].label}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                    className="truncate font-[family-name:var(--font-manrope)] text-[12px] font-semibold text-[#333]"
                  >
                    {CERTIFICATES[active].label}
                  </motion.span>
                </AnimatePresence>
              </div>

              <div className="relative min-h-[min(52dvh,26rem)] flex-1 max-sm:overflow-visible overflow-hidden sm:min-h-0">
                <AnimatePresence initial={false} custom={direction} mode="sync">
                  <motion.div
                    key={CERTIFICATES[active].src}
                    custom={direction}
                    variants={mobileAnimation}
                    initial={reduceMotion ? { opacity: 0 } : "enter"}
                    animate={reduceMotion ? { opacity: 1 } : "center"}
                    exit={reduceMotion ? { opacity: 0 } : "exit"}
                    className="absolute inset-0 sm:hidden"
                  >
                    <Image
                      src={CERTIFICATES[active].src}
                      alt={CERTIFICATES[active].alt}
                      fill
                      className={`${CERTIFICATES[active].className} drop-shadow-[0_16px_32px_rgba(15,23,42,0.12)]`}
                      sizes="85vw"
                    />
                  </motion.div>
                  <motion.div
                    key={`${CERTIFICATES[active].src}-desktop`}
                    custom={direction}
                    variants={slideAnimation}
                    initial={reduceMotion ? { opacity: 0 } : "enter"}
                    animate={reduceMotion ? { opacity: 1 } : "center"}
                    exit={reduceMotion ? { opacity: 0 } : "exit"}
                    className="absolute inset-0 hidden sm:block"
                  >
                    <Image
                      src={CERTIFICATES[active].src}
                      alt={CERTIFICATES[active].alt}
                      fill
                      className={`${CERTIFICATES[active].className} drop-shadow-[0_24px_48px_rgba(15,23,42,0.18)]`}
                      sizes="(max-width: 1024px) 100vw, 70vw"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="mt-3 flex flex-col items-center gap-2 sm:mt-0">
              <div className="flex items-center justify-center gap-2 sm:absolute sm:bottom-3 sm:left-8 lg:left-0">
                {CERTIFICATES.map((cert, index) => (
                  <button
                    key={cert.src}
                    type="button"
                    aria-label={`View ${cert.label}`}
                    aria-current={index === active ? "true" : undefined}
                    onClick={() => {
                      pauseAutoScroll();
                      goTo(index, index > active ? 1 : -1);
                    }}
                    className="rounded-full bg-[#111] transition-all duration-300 sm:pointer-events-none"
                    style={{
                      width: index === active ? 24 : 8,
                      height: index === active ? 8 : 8,
                      opacity: index === active ? 1 : 0.28,
                    }}
                  />
                ))}
              </div>
              <p className="font-[family-name:var(--font-manrope)] text-[10px] font-semibold uppercase tracking-[0.16em] text-[#888] sm:hidden">
                Auto-advances · Swipe or tap to explore
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
