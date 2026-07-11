"use client";

import type { MouseEvent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { StatsBar } from "@/components/hero/StatsBar";
import {
  fadeUp,
  headlineLine,
  headlineStagger,
  scaleIn,
  slideFromLeft,
  slideFromRight,
  staggerContainer,
} from "@/lib/motion-variants";

function scrollToEnquiry(event: MouseEvent<HTMLAnchorElement>) {
  event.preventDefault();

  const target = document.getElementById("enquiry");
  if (!target) return;

  target.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.pushState(null, "", "#enquiry");
}
const VIDEO_CARDS = [
  {
    src: "/images/hero/video-1.png",
    alt: "Engineering blueprint review",
    showProgress: true,
    variant: "blueprint" as const,
  },
  {
    src: "/images/hero/video-2.jpg",
    alt: "Industrial software development",
    showProgress: false,
    variant: "code" as const,
  },
  {
    src: "/images/hero/video-3.jpg",
    alt: "Construction site overview",
    showProgress: false,
    variant: "site" as const,
  },
];

function PlayIcon({ variant }: { variant: "blueprint" | "code" | "site" }) {
  if (variant === "blueprint") {
    return (
      <div className="relative flex size-12 items-center justify-center sm:size-[63px]">
        <div className="absolute inset-0 rounded-full bg-[rgba(26,27,38,0.8)] shadow-[0_13px_20px_-4px_rgba(0,0,0,0.1)]" />
        <div className="relative size-2.5 rounded-md bg-white sm:size-[13px] sm:rounded-[8px]" />
      </div>
    );
  }

  return (
    <div className="flex size-12 items-center justify-center rounded-full border border-white/20 bg-black/40 pl-[2px] backdrop-blur-[5px] sm:size-[63px]">
      <svg
        className="h-3 w-2.5 sm:h-4 sm:w-3.5"
        viewBox="0 0 14 16"
        fill="none"
        aria-hidden
      >
        <path d="M0 0L14 8L0 16V0Z" fill="white" />
      </svg>
    </div>
  );
}

function VideoCard({
  src,
  alt,
  showProgress,
  variant,
  index,
}: (typeof VIDEO_CARDS)[number] & { index: number }) {
  return (
    <motion.div
      variants={scaleIn}
      whileHover={{ scale: 1.05, y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative h-[100px] w-[155px] shrink-0 snap-start overflow-hidden rounded-2xl shadow-[0_26px_33px_-7px_rgba(0,0,0,0.1),0_10px_13px_-8px_rgba(0,0,0,0.1)] sm:h-[125px] sm:w-[198px] sm:rounded-[20px]"
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 155px, 198px"
        priority={index === 0}
      />
      <div
        className={`absolute inset-0 ${
          variant === "blueprint" ? "bg-[rgba(15,16,22,0.5)]" : "bg-black/20"
        }`}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <PlayIcon variant={variant} />
      </div>
      {showProgress && (
        <div className="absolute bottom-3 left-0 right-0 px-4 sm:bottom-4 sm:px-5">
          <div className="h-1 overflow-hidden rounded-full bg-white/30">
            <div className="h-full w-1/2 rounded-full bg-white" />
          </div>
        </div>
      )}
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden bg-black lg:h-[920px] lg:min-h-[920px]">
      {/* Background */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/images/hero/hero.png"
          alt=""
          fill
          className="object-cover object-[65%_center] sm:object-center"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Gradient — stronger on mobile for readability */}
      <div
        className="absolute inset-0 lg:hidden"
        style={{
          backgroundImage:
            "linear-gradient(187deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.45) 45%, rgba(0, 0, 0, 0.85) 85%)",
        }}
      />
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          backgroundImage:
            "linear-gradient(187deg, rgba(0, 0, 0, 0) 24.4%, rgba(0, 0, 0, 0.75) 75.1%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:h-full lg:px-6">
        <div className="flex flex-col gap-6 pt-[88px] pb-10 sm:gap-8 sm:pt-[96px] sm:pb-14 lg:absolute lg:left-4 lg:top-1/2 lg:w-full lg:max-w-[1280px] lg:-translate-y-1/2 lg:gap-10 lg:py-0">
          {/* Headline */}
          <AnimatedSection
            variants={headlineStagger}
            className="w-full max-w-[781px] overflow-hidden"
          >
            <h1 className="text-[clamp(1.875rem,7vw,4rem)] font-extrabold leading-[1.2] tracking-[-0.5px] text-[#f5f5f5] sm:tracking-[-1px] lg:min-h-[160px] lg:leading-[1.25]">
              <motion.span className="block" variants={headlineLine}>
                Engineered for Scale,
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-[#871015] to-[#ed1c24] bg-clip-text text-transparent"
                variants={headlineLine}
              >
                Built for Performance
              </motion.span>
            </h1>
          </AnimatedSection>

          {/* Description */}
          <div className="flex w-full max-w-[781px] flex-col gap-6 sm:gap-8">
            <AnimatedSection variants={slideFromLeft} delay={0.15}>
              <div className="flex w-full max-w-[622px] flex-col gap-4 sm:gap-[17px]">
                <p className="text-sm leading-relaxed text-[#bbb] sm:text-base sm:leading-[23px]">
                  Mekark is an engineering-led industrial EPC partner delivering
                  integrated design, manufacturing, and construction solutions for
                  complex industrial infrastructure.
                </p>
                <blockquote className="border-l-2 border-[rgba(237,28,36,0.75)] px-3 sm:px-[14px]">
                  <p className="font-[family-name:var(--font-montserrat)] text-xs italic leading-relaxed text-[#bbb] sm:text-sm sm:leading-[23px]">
                    We don&apos;t just build facilities — we engineer
                    environments that perform, scale, and endure.
                  </p>
                </blockquote>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection variants={fadeUp} delay={0.25} className="overflow-visible">
            <StatsBar />
          </AnimatedSection>

          {/* Bottom row — EPC + CTAs + videos */}
          <div className="relative flex w-full flex-col items-start gap-8 lg:mt-2 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
            <AnimatedSection variants={fadeUp} delay={0.1} className="w-full lg:max-w-[520px]">
              <div className="flex w-full flex-col gap-4 sm:gap-5">
                <div className="flex items-start gap-0">
                  <span className="shrink-0 pt-px text-2xl font-light leading-none tracking-[-0.76px] text-white sm:text-[30.4px] sm:leading-[30.4px]">
                    EPC
                  </span>
                  <div className="relative ml-3 pl-3 before:absolute before:inset-y-0 before:left-0 before:w-px before:bg-gradient-to-b before:from-[rgba(237,28,36,0.53)] before:via-[rgba(255,255,255,1)] before:to-[rgba(237,28,36,0.54)] before:content-[''] sm:ml-[15px] sm:pl-[15px]">
                    <h3 className="text-base font-semibold leading-snug text-white sm:max-w-[459px] sm:text-xl sm:leading-[25px]">
                      Integrated design, fabrication, and construction
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-[#9a9a9a] sm:mt-[3px] sm:max-w-[359px] sm:text-[13px] sm:leading-[21px]">
                      Single accountability for industrial infrastructure from
                      concept to commissioning.
                    </p>
                  </div>
                </div>

                <motion.div
                  className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.a
                    href="#enquiry"
                    onClick={scrollToEnquiry}
                    variants={scaleIn}
                    whileHover={{
                      scale: 1.04,
                      boxShadow: "0 0 30px rgba(237,28,36,0.4)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex w-full items-center justify-center gap-0 rounded-[14px] bg-[#ed1c24] px-5 py-3 text-center text-sm font-semibold leading-[21px] text-white shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] transition-[gap] duration-300 hover:gap-2 sm:w-auto"
                  >
                    Get Free Industrial Consultation
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden
                      className="size-0 shrink-0 opacity-0 transition-all duration-300 group-hover:size-4 group-hover:opacity-100"
                    >
                      <path
                        d="M3.5 8h9M8.5 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.a>
                  <motion.a
                    href="tel:+919790924754"
                    variants={scaleIn}
                    whileHover={{
                      scale: 1.04,
                      backgroundColor: "rgba(255,255,255,0.12)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex w-full items-center justify-center gap-0 rounded-[14px] border border-white/52 bg-[rgba(90,90,90,0.1)] px-5 py-3 text-center text-sm font-semibold leading-[21px] text-[#e0e0e0] backdrop-blur-[6px] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] transition-[gap] duration-300 hover:gap-2 sm:w-auto sm:px-[21px] sm:py-[13px]"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden
                      className="size-0 shrink-0 opacity-0 transition-all duration-300 group-hover:size-4 group-hover:opacity-100"
                    >
                      <path
                        d="M17.5 14.25v2.5a1.67 1.67 0 0 1-1.8 1.67 16.6 16.6 0 0 1-7.2-2.57 16.4 16.4 0 0 1-5.01-5.01A16.6 16.6 0 0 1 1 5.3 1.67 1.67 0 0 1 2.67 3.5h2.5a1.67 1.67 0 0 1 1.67 1.43 10.6 10.6 0 0 0 .58 2.32 1.67 1.67 0 0 1-.38 1.75l-1.42 1.42a13.33 13.33 0 0 0 5.01 5.01l1.42-1.42a1.67 1.67 0 0 1 1.75-.38 10.6 10.6 0 0 0 2.32.58 1.67 1.67 0 0 1 1.43 1.67Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Talk to Our Expert
                  </motion.a>
                </motion.div>
              </div>
            </AnimatedSection>

            <AnimatedSection
              variants={slideFromRight}
              className="w-full lg:w-auto lg:shrink-0"
            >
              <motion.div
                className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:gap-[21px] sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {VIDEO_CARDS.map((card, index) => (
                  <VideoCard key={card.alt} {...card} index={index} />
                ))}
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
