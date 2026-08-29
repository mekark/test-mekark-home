"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  aboutBadgeDot,
  fadeUp,
  testBadgeReveal,
  testGridStagger,
  testHeadlineReveal,
} from "@/lib/motion-variants";

const TESTIMONIALS = [
  {
    quote:
      "We are happy to share that MEKARK Structure has successfully completed our project within the committed timeline, maintaining high standards of quality. The team's dedication, responsiveness, and execution have truly impressed us.",
    company: "BOSCH",
    logo: {
      src: "/images/testimonials/logos/bosch.webp",
      width: 260,
      height: 85,
      className: "h-[29px] w-auto mix-blend-multiply",
    },
    author: "Sankar Ramalingam",
    role: "Facility Management",
  },
  {
    quote:
      "From project initiation to completion, the team demonstrated exceptional professionalism, unwavering commitment, and meticulous attention to detail at every stage. The quality of workmanship has not only met but exceeded our expectations. We sincerely appreciate the effort and dedication shown throughout and extend our best wishes to MEKARK for all future endeavours.",
    company: "DANFOSS",
    logo: {
      src: "/images/testimonials/logos/danfoss.svg",
      width: 126,
      height: 55,
      className: "h-[38px] w-auto",
    },
    author: "Hariprasaad",
    role: "Mgr, Real Estate & Facility",
  },
  {
    quote:
      "The consistent performance and organized execution by MEKARK were truly commendable. The on-site team demonstrated excellent coordination, ensuring smooth progress and timely resolution of challenges throughout the project. Their collaborative approach and clear communication significantly contributed to the project's success. We look forward to working with MEKARK again on future assignments.",
    company: "KOMATSU",
    logo: {
      src: "/images/testimonials/logos/komatsu.svg",
      width: 181,
      height: 35,
      className: "h-[24px] w-auto",
    },
    author: "Srinivasan",
    role: "Head of Projects",
  },
] as const;

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden
      className={direction === "left" ? "rotate-180" : undefined}
    >
      <path
        d="M3.75 9h10.5M10.5 5.25 14.25 9l-3.75 3.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TestimonialStage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = TESTIMONIALS[activeIndex];

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? TESTIMONIALS.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % TESTIMONIALS.length);
  };

  return (
    <motion.div
      variants={fadeUp}
      className="relative mx-auto mt-12 grid w-full max-w-[1220px] overflow-hidden rounded-[28px] border border-black/[0.06] bg-[#0d0808] shadow-[0_30px_90px_rgba(28,10,11,0.16)] lg:mt-16 lg:grid-cols-[300px_minmax(0,1fr)] lg:rounded-[32px]"
    >
      <div className="absolute inset-y-0 right-0 z-20 w-1.5 bg-[#ed1c24]" />

      <div
        role="tablist"
        aria-label="Select a client testimonial"
        className="relative z-10 grid grid-cols-3 gap-2 bg-[#ece9e9] p-2 lg:grid-cols-1 lg:content-center lg:gap-3 lg:p-4"
      >
        {TESTIMONIALS.map((testimonial, index) => {
          const active = activeIndex === index;

          return (
            <button
              key={testimonial.company}
              type="button"
              role="tab"
              id={`testimonial-tab-${index}`}
              aria-controls="testimonial-panel"
              aria-selected={active}
              onClick={() => setActiveIndex(index)}
              className={`group relative flex min-h-[76px] items-center justify-center rounded-[18px] px-3 py-4 transition-all duration-300 lg:min-h-[116px] lg:justify-start lg:px-7 ${
                active
                  ? "bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
                  : "bg-transparent opacity-50 hover:bg-white/50 hover:opacity-80"
              }`}
            >
              <Image
                src={testimonial.logo.src}
                alt={`${testimonial.company} logo`}
                width={testimonial.logo.width}
                height={testimonial.logo.height}
                className={`${testimonial.logo.className} max-w-full transition-transform duration-300 group-hover:scale-[1.03]`}
              />
              <span
                className={`absolute bottom-2 left-1/2 h-0.5 -translate-x-1/2 bg-[#ed1c24] transition-all duration-300 lg:bottom-auto lg:left-0 lg:top-1/2 lg:h-10 lg:w-0.5 lg:-translate-x-0 lg:-translate-y-1/2 ${
                  active ? "w-8 opacity-100 lg:w-0.5" : "w-0 opacity-0"
                }`}
                aria-hidden
              />
            </button>
          );
        })}
      </div>

      <div className="relative flex min-h-[540px] flex-col overflow-hidden p-6 text-white sm:p-10 lg:min-h-[590px] lg:p-14 xl:p-16">
        <div
          className="pointer-events-none absolute -right-12 -top-28 font-serif text-[350px] leading-none text-white/[0.035]"
          aria-hidden
        >
          &ldquo;
        </div>

        <div className="relative flex items-center justify-between gap-6">
          <p className="text-[10px] font-bold uppercase tracking-[2.6px] text-[#ed1c24] sm:text-xs">
            Client voice
          </p>
          <p className="text-xs font-bold tabular-nums text-white/30">
            {String(activeIndex + 1).padStart(2, "0")}
            <span className="mx-2 text-white/15">/</span>
            {String(TESTIMONIALS.length).padStart(2, "0")}
          </p>
        </div>

        <div
          id="testimonial-panel"
          role="tabpanel"
          aria-labelledby={`testimonial-tab-${activeIndex}`}
          className="relative flex flex-1 flex-col"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeTestimonial.company}
              initial={{ opacity: 0, x: 28, filter: "blur(6px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: -20, filter: "blur(4px)" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-1 flex-col"
            >
              <blockquote className="my-auto py-10 sm:py-12">
                <Image
                  src="/images/achievements-testimonials/icon-quote.svg"
                  alt=""
                  width={42}
                  height={42}
                  aria-hidden
                />
                <p className="mt-6 max-w-[780px] text-[clamp(1.05rem,2vw,1.55rem)] font-medium leading-[1.6] tracking-[-0.35px] text-white/75">
                  {activeTestimonial.quote}
                </p>
              </blockquote>

              <div className="flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-end sm:justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#ed1c24] text-sm font-extrabold text-white"
                    aria-hidden
                  >
                    {activeTestimonial.author.charAt(0)}
                  </span>
                  <div>
                    <p className="font-bold text-white">
                      {activeTestimonial.author}
                    </p>
                    <p className="mt-0.5 text-sm text-white/40">
                      {activeTestimonial.role} &middot;{" "}
                      {activeTestimonial.company}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={showPrevious}
                    aria-label="Show previous testimonial"
                    className="flex size-11 items-center justify-center rounded-full border border-white/15 text-white/65 transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white"
                  >
                    <ArrowIcon direction="left" />
                  </button>
                  <button
                    type="button"
                    onClick={showNext}
                    aria-label="Show next testimonial"
                    className="flex size-11 items-center justify-center rounded-full bg-[#ed1c24] text-white transition-transform hover:scale-105 active:scale-95"
                  >
                    <ArrowIcon direction="right" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

export function TestimonialsPage() {
  return (
    <main className="flex-1 overflow-hidden bg-[#f8f6f6] text-[#111]">
      <section className="relative border-b border-[rgba(107,13,17,0.1)]">
        <div
          className="pointer-events-none absolute -right-40 top-20 size-[420px] rounded-full bg-[#ed1c24]/[0.055] blur-[90px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute left-[-80px] top-[420px] size-[280px] rounded-full bg-black/[0.025] blur-[70px]"
          aria-hidden
        />

        <motion.div
          variants={testGridStagger}
          initial="hidden"
          animate="visible"
          className="relative mx-auto w-full max-w-[1440px] px-5 pb-20 pt-[126px] sm:px-8 sm:pb-24 sm:pt-[146px] lg:px-20 lg:pb-[120px] lg:pt-[168px]"
        >
          <div className="mx-auto flex max-w-[820px] flex-col items-center text-center">
            <motion.div
              variants={testBadgeReveal}
              className="flex items-center gap-[7px] rounded-full border border-crimson-100 bg-crimson-200 px-3 py-1.5"
            >
              <motion.span
                variants={aboutBadgeDot}
                className="size-[7px] rounded-full bg-red-200"
                aria-hidden
              />
              <span className="font-inter text-xs font-medium tracking-[0.53px] text-red-100">
                Client testimonials
              </span>
            </motion.div>

            <motion.h1
              variants={testHeadlineReveal}
              className="mt-5 text-[clamp(2.15rem,5vw,4.5rem)] font-extrabold leading-[1.06] tracking-[-2.5px] text-[#0d0808]"
            >
              Voices of trust.
              <br />
              <span className="text-[#ed1c24]">Stories of success.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-[680px] text-[15px] font-medium leading-[1.75] text-[#626060] sm:text-lg"
            >
              What our clients say about the quality, coordination, and
              commitment behind every Mekark project.
            </motion.p>
          </div>

          <TestimonialStage />
        </motion.div>
      </section>
    </main>
  );
}
