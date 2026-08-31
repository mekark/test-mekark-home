"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import {
  drawVertical,
  logoRowReveal,
  notchDrop,
  pulseDot,
  fadeUp,
  scaleIn,
  slideFromLeft,
  staggerContainer,
} from "@/lib/motion-variants";

const VIEWPORT = { once: true, margin: "-80px" as const };

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
    <section className="relative w-full bg-[#f5f5f5] text-black">
      {/* Engineering in Numbers — Figma 3327:9311 */}
      <div className="relative px-4 pb-8 pt-8 font-[family-name:var(--font-manrope)] sm:px-8 sm:pb-16 sm:pt-14 lg:px-[73px] lg:pb-[70px] lg:pt-[61px]">
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden bg-[#f5f5f5]"
          aria-hidden
        />
        <motion.div
          className="pointer-events-none absolute inset-0 overflow-hidden opacity-40"
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 0.4, scale: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden
        >
          <Image
            src="/images/engineering/background-watermark.png"
            alt=""
            fill
            className="object-cover object-[5.58%_top]"
            sizes="100vw"
            priority={false}
          />
        </motion.div>

        <div className="relative mx-auto max-w-[1740px]">
          <AnimatedSection
            variants={slideFromLeft}
            className="flex max-w-[721px] flex-col items-start"
          >
            <div className="relative flex h-7 min-w-0 items-center max-[350px]:h-6">
              <span
                className="h-[2.7px] w-[53px] shrink-0 bg-[#e40015] max-[350px]:w-8"
                aria-hidden
              />
              <p className="ml-[15px] whitespace-nowrap text-xs font-semibold uppercase leading-[27.73px] tracking-[2.67px] text-[#828181] max-[350px]:ml-2 max-[350px]:text-[9px] max-[350px]:leading-none max-[350px]:tracking-[1px] sm:text-base">
                Scale that speaks for itself
              </p>
            </div>
            <motion.h2
              variants={slideFromLeft}
              className="mt-1 text-[28px] font-bold leading-tight text-black sm:whitespace-nowrap sm:text-[40px] sm:leading-[56px] lg:text-[61.33px] lg:leading-[80px]"
            >
              Annual Production Capacity{" "}
            </motion.h2>
          </AnimatedSection>

          <div className="mt-4 flex min-w-0 flex-col items-center gap-4 sm:mt-6 sm:gap-6 lg:mt-8 lg:flex-row lg:items-center lg:gap-8 xl:gap-12">
            <motion.div
              className="relative z-10 w-full min-w-0 flex-1 lg:max-w-[1020px]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Figma crop: 1020×383 frame over full 3D plaque render */}
              <div className="relative mx-auto aspect-[1020/383] w-full max-w-[1020px] overflow-hidden lg:mx-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/engineering/stat-40000-plaque.png"
                  alt="40,000+"
                  width={2040}
                  height={1500}
                  className="pointer-events-none absolute left-[-6.18%] top-[-40.42%] h-[198.95%] w-[111.96%] max-w-none"
                  decoding="async"
                  fetchPriority="high"
                />
                <p className="absolute bottom-[14%] left-1/2 z-10 w-[96%] -translate-x-1/2 text-center text-sm font-bold uppercase tracking-[2.67px] text-black opacity-75 sm:text-xl sm:leading-[27.73px]">
                  metric ton
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex w-full min-w-0 max-w-full gap-4 sm:gap-[22px] lg:w-auto lg:max-w-none lg:shrink-0 lg:translate-y-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div
                variants={drawVertical}
                className="relative flex min-h-[120px] w-[1.3px] shrink-0 origin-top self-stretch items-center justify-center sm:min-h-[150px] lg:min-h-[240px]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(214,214,214,0), #d6d6d6 20%, #d6d6d6 80%, rgba(214,214,214,0))",
                }}
              >
                <motion.span
                  variants={pulseDot}
                  className="absolute left-1/2 top-1/2 z-10 flex size-[18.7px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[1.3px] border-solid border-[#d6d6d6] bg-white"
                >
                  <span className="size-2 rounded bg-[#ed2024] shadow-[0_0_16px_rgba(237,32,36,0.7)]" />
                </motion.span>
              </motion.div>
              <motion.div
                variants={fadeUp}
                className="flex min-w-0 flex-1 flex-col justify-center gap-[17.6px] lg:min-w-max lg:flex-none"
              >
                <p className="text-left text-[13px] leading-[20px] text-[#2a2a2a] min-[480px]:text-[14px] min-[480px]:leading-[22px] md:text-[16px] md:leading-[24px] lg:text-[28px] lg:leading-[34px]">
                  <span className="lg:block lg:whitespace-nowrap">
                    Tons of structural steel manufactured at our
                  </span>
                  <span className="lg:hidden"> </span>
                  <span className="lg:block lg:whitespace-nowrap">
                    fully integrated Tamil Nadu facility.
                  </span>
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
