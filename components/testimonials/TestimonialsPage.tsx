"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  aboutBadgeDot,
  fadeUp,
  testBadgeReveal,
  testCardReveal,
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
    cardClassName: "border-[#f4dddd] bg-[#fff1f1]",
    decorationClassName: "bg-[#ed1c24]/10",
    offsetClassName: "lg:mt-0",
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
    cardClassName: "border-[#f0dfc8] bg-[#fff5e8]",
    decorationClassName: "bg-[#ffb84d]/20",
    offsetClassName: "lg:mt-14",
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
    cardClassName: "border-[#dfe5f4] bg-[#eef3ff]",
    decorationClassName: "bg-[#4466cc]/10",
    offsetClassName: "lg:mt-5",
  },
] as const;

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof TESTIMONIALS)[number];
  index: number;
}) {
  return (
    <motion.figure
      variants={testCardReveal(index)}
      whileHover={{
        y: -7,
        rotate: index === 1 ? 0.4 : index === 2 ? -0.35 : 0.25,
        transition: { type: "spring", stiffness: 330, damping: 22 },
      }}
      className={`relative flex min-h-[470px] flex-col overflow-hidden rounded-[30px] border p-6 shadow-[0_18px_55px_rgba(56,24,25,0.06)] sm:p-8 ${testimonial.cardClassName} ${testimonial.offsetClassName}`}
    >
      <div
        className={`pointer-events-none absolute -right-16 -top-16 size-44 rounded-full ${testimonial.decorationClassName}`}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 size-40 rounded-full border border-black/[0.035]"
        aria-hidden
      />

      <div className="relative flex items-start justify-between gap-5">
        <div className="flex min-h-[62px] min-w-[160px] items-center justify-center rounded-[16px] bg-white px-5 py-3 shadow-[0_8px_28px_rgba(32,20,20,0.06)]">
          <Image
            src={testimonial.logo.src}
            alt={`${testimonial.company} logo`}
            width={testimonial.logo.width}
            height={testimonial.logo.height}
            className={`${testimonial.logo.className} max-w-full`}
          />
        </div>
        <span className="text-[11px] font-extrabold tabular-nums text-black/20">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <blockquote className="relative mt-8 flex-1">
        <Image
          src="/images/achievements-testimonials/icon-quote.svg"
          alt=""
          width={34}
          height={34}
          aria-hidden
        />
        <p className="mt-5 text-[15px] font-medium leading-[1.68] text-[#353232] sm:text-base">
          {testimonial.quote}
        </p>
      </blockquote>

      <figcaption className="relative mt-8 flex items-center gap-3 border-t border-black/[0.08] pt-6">
        <span
          className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#ed1c24] text-sm font-extrabold text-white"
          aria-hidden
        >
          {testimonial.author.charAt(0)}
        </span>
        <div>
          <p className="text-sm font-bold text-[#111] sm:text-base">
            {testimonial.author}
          </p>
          <p className="mt-0.5 text-xs leading-5 text-[#777] sm:text-sm">
            {testimonial.role}
          </p>
        </div>
      </figcaption>
    </motion.figure>
  );
}

export function TestimonialsPage() {
  return (
    <main className="flex-1 overflow-hidden bg-[#fffdfd] text-[#111]">
      <section className="relative border-b border-[rgba(107,13,17,0.08)]">
        <div
          className="pointer-events-none absolute left-[8%] top-[180px] size-24 rounded-full bg-[#ffe7e8] blur-sm"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-[7%] top-[280px] size-16 rounded-full bg-[#fff0cc] blur-sm"
          aria-hidden
        />

        <motion.div
          variants={testGridStagger}
          initial="hidden"
          animate="visible"
          className="relative mx-auto w-full max-w-[1440px] px-5 pb-24 pt-[126px] sm:px-8 sm:pb-28 sm:pt-[146px] lg:px-20 lg:pb-[150px] lg:pt-[168px]"
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
              Strong builds.
              <br />
              <span className="text-[#ed1c24]">Happy clients.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-[680px] text-[15px] font-medium leading-[1.75] text-[#626060] sm:text-lg"
            >
              Real experiences from the people who built with Mekark—from
              planning and coordination through successful delivery.
            </motion.p>
          </div>

          <motion.div
            variants={testGridStagger}
            className="mx-auto mt-12 grid w-full max-w-[1280px] grid-cols-1 gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:items-start"
          >
            {TESTIMONIALS.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.company}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
