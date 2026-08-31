"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";

const FIVE_S_POINTS = [
  {
    number: "01",
    title: "Sort",
    icon: "/images/about/safety/5s/icon-sort.svg",
    description:
      "Remove unnecessary items from the work area to reduce hazards and improve focus.",
  },
  {
    number: "02",
    title: "Set in Order",
    icon: "/images/about/safety/5s/icon-set-in-order.svg",
    description:
      "Organize tools, materials, and safety gear for quick access and safer movement.",
  },
  {
    number: "03",
    title: "Shine",
    icon: "/images/about/safety/5s/icon-shine.svg",
    description:
      "Keep the site clean and inspect spaces regularly to prevent accidents.",
  },
  {
    number: "04",
    title: "Standardize",
    icon: "/images/about/safety/5s/icon-standardize.svg",
    description:
      "Apply consistent procedures, markings, and safety checks across every zone.",
  },
  {
    number: "05",
    title: "Sustain",
    icon: "/images/about/safety/5s/icon-sustain.svg",
    description:
      "Build daily discipline through training, audits, and continuous safety awareness.",
  },
] as const;

const ASSOCIATE_PARTNERS = [
  {
    src: "/images/about/safety/partners/madras-chamber.png",
    alt: "Madras Chamber of Commerce logo",
    label: "Madras Chamber of Commerce",
  },
  {
    src: "/images/about/safety/partners/sicci.png",
    alt: "SICCI logo",
    label: "SICCI (South Indian Chamber of Commerce & Industry)",
  },
  {
    src: "/images/about/safety/partners/indo-french.png",
    alt: "Indo-French Chamber of Commerce and Industry logo",
    label: "Indo-French Chamber of Commerce & Industry",
  },
  {
    src: "/images/about/safety/partners/indo-german.png",
    alt: "Indo-German Chamber of Commerce logo",
    label: "Indo-German Chamber of Commerce",
  },
  {
    src: "/images/about/safety/partners/tamil-chamber.png",
    alt: "Tamil Chamber of Commerce logo",
    label: "Tamil Chamber of Commerce",
  },
  {
    src: "/images/about/safety/partners/ficci.png",
    alt: "FICCI logo",
    label: "FICCI (Federation of Indo-Chamber of Commerce & Industry)",
  },
  {
    src: "/images/about/safety/partners/indo-american.png",
    alt: "Indo-American Chamber of Commerce logo",
    label: "Indo-American Chamber of Commerce",
  },
  {
    src: "/images/about/safety/partners/hindustan-chamber.png",
    alt: "Hindustan Chamber of Commerce logo",
    label: "Hindustan Chamber of Commerce",
  },
  {
    src: "/images/about/safety/partners/iod.png",
    alt: "Institute of Directors logo",
    label: "IOD (Institute of Directors)",
  },
  {
    src: "/images/about/safety/partners/rai.png",
    alt: "Retailers Association of India logo",
    label: "Retail Association of India (RAI)",
  },
  {
    src: "/images/about/safety/partners/indo-japanese.png",
    alt: "Indo-Japanese Association logo",
    label: "Indo-Japanese Association (IJA)",
  },
  {
    src: "/images/about/safety/partners/tn-chamber.png",
    alt: "Tamil Nadu Chamber of Commerce and Industry logo",
    label: "Tamil Nadu Chamber of Commerce & Industry (TN Chamber / TNCCI)",
  },
] as const;

const ASSOCIATE_PARTNERS_MARQUEE = [
  ...ASSOCIATE_PARTNERS,
  ...ASSOCIATE_PARTNERS,
];

function AssociatePartnersMobileCarousel() {
  const reduceMotion = useReducedMotion();
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true },
    reduceMotion
      ? []
      : [
          AutoScroll({
            direction: "forward",
            speed: 0.75,
            startDelay: 400,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ],
  );

  return (
    <div className="relative -mx-4 sm:-mx-0">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[#f5f6f8] to-transparent sm:w-10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[#f5f6f8] to-transparent sm:w-10"
      />

      <div
        ref={emblaRef}
        className="overflow-hidden px-4 sm:px-0"
        aria-label="Associate partners carousel"
      >
        <div className="flex touch-pan-y">
          {ASSOCIATE_PARTNERS_MARQUEE.map((partner, index) => (
            <div
              key={`${partner.src}-${index}`}
              className="min-w-0 flex-[0_0_78%] pr-4 sm:flex-[0_0_52%] md:flex-[0_0_42%]"
            >
              <article className="flex h-full min-h-[168px] flex-col overflow-hidden rounded-[20px] border border-[#e2e5ea] bg-white shadow-[0_12px_32px_rgba(14,17,22,0.07)]">
                <div className="flex flex-1 items-center justify-center bg-gradient-to-b from-white to-[#f8f9fb] px-5 py-6">
                  <div className="relative h-[46px] w-full max-w-[150px] sm:h-[52px]">
                    <Image
                      src={partner.src}
                      alt={partner.alt}
                      fill
                      className="object-contain object-center"
                      sizes="150px"
                    />
                  </div>
                </div>
                <div className="border-t border-[#eef0f3] px-4 py-3.5">
                  <p className="line-clamp-3 text-center font-[family-name:var(--font-manrope)] text-[clamp(0.75rem,3.2vw,0.875rem)] font-semibold leading-[1.4] text-[#0e1116]">
                    {partner.label}
                  </p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const DEFAULT_HEADING = "Built Safe, Built Right";
const DEFAULT_DESCRIPTION =
  "Strong structures start with strong safety practices, non-negotiable at every stage of every project.";

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
    src: "/images/about/safety/Quality.png",
    alt: "ISO 9001:2015 Certificate of Registration for MEKARK Structures India Pvt. Ltd.",
    label: "ISO 9001:2015",
    className:
      "object-contain object-center origin-top-left scale-[0.93] object-left-top sm:translate-x-0 lg:translate-x-2",
    hero: "/images/about/safety/hero-3.jpg",
    heroClassName: "object-cover object-[center_35%] sm:object-[58%_center]",
    heroAlt: "Construction site at golden hour with a tower crane over an unfinished building",
    overlay: "/images/about/safety/hero-3-workers.png",
    overlayAlt: "Two site engineers in safety vests looking toward the construction site",
    overlayClassName:
      "top-[30%] bottom-[-16%] right-[11%] w-[min(52%,52rem)] lg:top-[34%] lg:bottom-[-18%] lg:right-[15%] lg:w-[min(48%,50rem)]",
    overlayImageClassName: "object-contain object-center-bottom",
    heading: "Built Right, Every Single Time",
    description:
      "Consistent quality standards, non-negotiable at every stage of every project.",
  },
  {
    src: "/images/about/safety/Environmental.png",
    alt: "ISO 14001:2015 Certificate of Registration for MEKARK Structures India Pvt. Ltd.",
    label: "ISO 14001:2015",
    className:
      "object-contain object-center max-sm:origin-center max-sm:scale-[1.48] sm:origin-top-left sm:scale-[0.97] sm:object-left-top sm:-translate-x-10 lg:-translate-x-6",
    hero: "/images/about/safety/hero-4.png",
    heroClassName: "object-cover object-right",
    heroAlt: "Hand cradling a globe with a green sprout growing from the top against a sunlit forest",
    heroUnoptimized: true,
    heading: "Built Responsibly, Built to Last",
    description:
      "Sustainable construction practices, non-negotiable at every stage of every project.",
  },
] as const;

const MOBILE_CERT_IMAGE_CLASS =
  "object-contain object-center origin-center scale-[1.45]";

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

function SafetyFiveSPointsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[#f7f7f7]"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 1190px 620px at 50% 52%, #fdfdfd 0%, #f7f7f7 38%, #f0f0f0 70%, #ebebeb 100%)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 hidden h-[min(50vw,427px)] w-[min(48vw,932px)] opacity-10 sm:block"
      >
        <Image
          src="/images/about/safety/5s/background-watermark.png"
          alt=""
          fill
          className="object-cover object-left-top"
          sizes="932px"
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1740px] flex-col gap-8 px-4 py-12 sm:gap-10 sm:px-8 sm:py-16 lg:gap-14 lg:px-[clamp(2rem,7vw,8.35rem)] lg:py-[clamp(3.5rem,5vw,5.5rem)]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative z-[1] flex min-w-0 max-w-[735px] flex-col gap-2 sm:gap-2.5"
        >
          <motion.div
            variants={fadeUp}
            className="h-[6px] w-[min(111px,28vw)] rounded-[3px] bg-[#e50818] sm:h-[7px]"
            aria-hidden
          />
          <motion.h2
            variants={fadeUp}
            className="font-[family-name:var(--font-manrope)] text-[clamp(1.75rem,6.5vw,3.75rem)] font-extrabold leading-[1.1] tracking-[-0.04em] text-[#0b0a0a] sm:tracking-[-1.32px]"
          >
            5S Safety Points
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="max-w-[735px] font-[family-name:var(--font-manrope)] text-[clamp(0.9375rem,3.8vw,1.375rem)] font-medium leading-[1.56] tracking-[0.046px] text-[#65686b]"
          >
            Applying 5S every day helps us maintain safe, efficient, and
            organized project environments.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:grid-cols-5 lg:gap-[17px]"
        >
          {FIVE_S_POINTS.map((point) => (
            <motion.article
              key={point.number}
              variants={fadeUp}
              className="relative flex w-full min-w-0 flex-col items-center justify-center rounded-[14px] px-5 py-8 text-center shadow-[0_12px_26px_rgba(22,22,22,0.05),0_3px_8px_rgba(22,22,22,0.04)] sm:px-6 sm:py-10 lg:min-h-[510px] lg:px-5 lg:py-12"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, #fefefe 0%, #fafafa 42%, #f4f4f4 78%, #f1f1f1 100%)",
              }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.7)]"
              />
              <div
                aria-hidden
                className="mb-5 flex size-[clamp(96px,22vw,145px)] shrink-0 items-center justify-center rounded-full border-2 border-[#e50818] bg-[radial-gradient(circle_at_50%_34%,#fff_0%,#fdfdfd_62%,#f8f8f8_100%)] shadow-[0_7px_8px_rgba(20,20,20,0.07),0_1px_1.5px_rgba(20,20,20,0.05)] sm:mb-6"
              >
                <div className="relative size-[clamp(40px,10vw,60px)]">
                  <Image
                    src={point.icon}
                    alt=""
                    fill
                    className="object-contain"
                    sizes="60px"
                  />
                </div>
              </div>
              <p className="font-[family-name:var(--font-manrope)] text-[clamp(2rem,8vw,3rem)] font-bold leading-none tracking-[0.24px] text-[#e50818]">
                {point.number}
              </p>
              <h3 className="mt-2.5 font-[family-name:var(--font-manrope)] text-[clamp(1.25rem,4.5vw,2rem)] font-bold leading-tight tracking-[-0.26px] text-[#141719] sm:mt-3">
                {point.title}
              </h3>
              <div
                aria-hidden
                className="mt-3 h-[3.5px] w-[34px] rounded-[2px] bg-[#e50818] sm:mt-4"
              />
              <p className="mt-3 max-w-[232px] font-[family-name:var(--font-manrope)] text-[clamp(0.9375rem,3.6vw,1.25rem)] font-medium leading-[1.48] tracking-[0.04px] text-[#5f6161] sm:mt-4">
                {point.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SafetyAssociatePartnersSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.12 });

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[#f5f6f8]"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(14,17,22,0.043) 1.8%, transparent 1.8%), linear-gradient(180deg, rgba(14,17,22,0.043) 1.8%, transparent 1.8%)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[6%] top-[-18%] h-[min(52vw,798px)] w-[min(56vw,1190px)] opacity-100"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at center, rgba(225,42,43,0.075) 0%, rgba(225,42,43,0) 72%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1740px] px-4 py-12 sm:px-8 sm:py-16 lg:px-[clamp(2rem,7vw,8.35rem)] lg:py-[clamp(3.5rem,5vw,5.5rem)]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col gap-8 sm:gap-10 lg:gap-12"
        >
          {/* Mobile + tablet layout */}
          <div className="flex flex-col gap-6 lg:hidden">
            <motion.div
              variants={fadeUp}
              className="relative flex flex-col gap-2.5 pl-4"
            >
              <div
                aria-hidden
                className="absolute bottom-0 left-0 top-0 w-[4px] rounded-full bg-[#e50818]"
              />
              <p className="font-[family-name:var(--font-manrope)] text-[11px] font-semibold uppercase tracking-[0.24em] text-[#7a828c]">
                In collaboration with
              </p>
              <h2 className="font-[family-name:var(--font-manrope)] text-[clamp(1.75rem,6.5vw,2.25rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-[#0e1116]">
                Associate Partners
              </h2>
              <p className="font-[family-name:var(--font-manrope)] text-[14px] leading-[1.5] text-[#5f6161]">
                {ASSOCIATE_PARTNERS.length} institutional chambers and industry
                bodies across India.
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <AssociatePartnersMobileCarousel />
            </motion.div>
          </div>

          {/* Desktop header */}
          <div className="hidden flex-col gap-5 sm:flex-row sm:items-start sm:justify-between sm:gap-8 lg:flex">
            <motion.div
              variants={fadeUp}
              className="relative flex min-w-0 max-w-[735px] flex-col gap-[13px] pl-[26px]"
            >
              <div
                aria-hidden
                className="absolute bottom-[-3px] left-0 top-[-7px] w-[7px] rounded-[3px] bg-[#e50818]"
              />
              <p className="font-[family-name:var(--font-manrope)] text-[12.5px] font-semibold uppercase tracking-[0.28em] text-[#7a828c]">
                In collaboration with
              </p>
              <h2 className="font-[family-name:var(--font-manrope)] text-[clamp(2rem,4.2vw,3.75rem)] font-extrabold leading-[1.13] tracking-[-1.11px] text-[#0e1116]">
                Associate Partners
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex shrink-0 flex-col items-end gap-1.5 pt-8"
            >
              <p className="font-[family-name:var(--font-manrope)] text-[clamp(1.75rem,2.8vw,2.5rem)] font-extrabold leading-none text-[#0e1116]">
                {ASSOCIATE_PARTNERS.length}
              </p>
              <p className="font-[family-name:var(--font-manrope)] text-[11.5px] font-medium uppercase tracking-[0.2em] text-[#7a828c]">
                Institutional bodies
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            aria-hidden
            className="hidden h-px w-full bg-[#e2e5ea] lg:block"
          />

          {/* Desktop grid */}
          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="hidden grid-cols-3 gap-x-[18px] gap-y-12 lg:grid xl:grid-cols-4"
          >
            {ASSOCIATE_PARTNERS.map((partner) => (
              <motion.li
                key={partner.src}
                variants={fadeUp}
                className="flex min-w-0 flex-col gap-3.5"
              >
                <div className="flex min-h-[111px] items-center justify-center rounded-[20px] border border-[#e2e5ea] bg-white px-4 py-[27px] shadow-[0_1px_0_rgba(14,17,22,0.02)]">
                  <div className="relative h-[57px] w-full max-w-[145px] opacity-95">
                    <Image
                      src={partner.src}
                      alt={partner.alt}
                      fill
                      className="object-contain object-center"
                      sizes="145px"
                    />
                  </div>
                </div>
                <div className="flex min-w-0 items-start gap-[9px]">
                  <span
                    aria-hidden
                    className="mt-[7px] size-[6px] shrink-0 rounded-[3px] bg-[#e2e5ea]"
                  />
                  <p className="min-w-0 font-[family-name:var(--font-manrope)] text-[13.6px] font-medium leading-[1.45] text-[#4c525b]">
                    {partner.label}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}

function SafetyCertificationsSection() {
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
  const activeCert = CERTIFICATES[active];
  const activeHeading =
    "heading" in activeCert ? activeCert.heading : DEFAULT_HEADING;
  const activeDescription =
    "description" in activeCert ? activeCert.description : DEFAULT_DESCRIPTION;

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
                unoptimized={
                  "heroUnoptimized" in CERTIFICATES[active] &&
                  Boolean(CERTIFICATES[active].heroUnoptimized)
                }
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
                unoptimized={
                  "overlayUnoptimized" in CERTIFICATES[active] &&
                  Boolean(CERTIFICATES[active].overlayUnoptimized)
                }
                  className={
                    "overlayImageClassName" in CERTIFICATES[active] &&
                    CERTIFICATES[active].overlayImageClassName
                      ? CERTIFICATES[active].overlayImageClassName
                      : "object-contain object-right-bottom"
                  }
                  sizes="565px"
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
            <AnimatePresence mode="wait">
              <motion.h1
                key={activeHeading}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: reduceMotion ? 0.15 : 0.3 }}
                className="font-[family-name:var(--font-manrope)] text-[1.65rem] font-bold leading-[1.12] tracking-[-0.5px] text-black sm:w-max sm:max-w-none sm:whitespace-nowrap sm:text-[clamp(1.35rem,3.2vw,60px)] sm:leading-[1.1] sm:tracking-[-1px]"
              >
                {activeHeading}
              </motion.h1>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.p
                key={activeDescription}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: reduceMotion ? 0.15 : 0.3 }}
                className="mx-auto mt-2 max-w-[677px] font-[family-name:var(--font-manrope)] text-[0.92rem] font-medium leading-[1.45] text-[#515151] sm:mx-0 sm:mt-0 sm:text-[clamp(0.95rem,1.25vw,22px)] sm:leading-[1.36]"
              >
                {activeDescription}
              </motion.p>
            </AnimatePresence>
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
                      className={`${MOBILE_CERT_IMAGE_CLASS} drop-shadow-[0_16px_32px_rgba(15,23,42,0.12)]`}
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

export function SafetyPage() {
  return (
    <>
      <SafetyCertificationsSection />
      <SafetyFiveSPointsSection />
      <SafetyAssociatePartnersSection />
    </>
  );
}
