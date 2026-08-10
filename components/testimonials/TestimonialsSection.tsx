"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  aboutBadgeDot,
  testBadgeReveal,
  testCardReveal,
  testGridStagger,
  testHeadlineReveal,
} from "@/lib/motion-variants";

const VIEWPORT = { once: true, margin: "-80px" as const };

const TESTIMONIALS = [
  {
    quote:
      "Mekark delivered our manufacturing facility on schedule and exactly to specification. Their single-point accountability model meant zero finger-pointing between design and execution teams — a rare thing in industrial construction.",
    name: "Operations Director",
    role: "Manufacturing Sector",
    featured: false,
  },
  {
    quote:
      "We evaluated several EPC contractors before choosing Mekark, and their engineering-led approach made the difference. The structural quality and attention to factory-level detail were evident from foundation to finish.",
    name: "Project Head",
    role: "Logistics & Warehousing",
    featured: true,
  },
  {
    quote:
      "What stood out was how Mekark thought beyond construction — they designed our facility for long-term operational efficiency. Fifteen years of expertise clearly shows in how they plan for durability, not just delivery.",
    name: "Plant Manager",
    role: "Industrial Processing",
    featured: false,
  },
] as const;

function StarRating() {
  return (
    <div className="flex items-center gap-1.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <Image
          key={index}
          src="/images/achievements-testimonials/star-4.svg"
          alt=""
          width={17}
          height={17}
          aria-hidden
        />
      ))}
    </div>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof TESTIMONIALS)[number];
  index: number;
}) {
  const featured = testimonial.featured;

  return (
    <motion.figure
      variants={testCardReveal(index)}
      whileHover={{
        y: -4,
        transition: { type: "spring", stiffness: 340, damping: 22 },
      }}
      className={`flex h-full flex-col rounded-[24px] border p-8 ${
        featured
          ? "border-transparent bg-[#0d0808] text-white"
          : "border-[#e5e0e0] bg-[#fcf9f9] text-[#111]"
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <Image
          src="/images/achievements-testimonials/icon-quote.svg"
          alt=""
          width={32}
          height={32}
          aria-hidden
        />
        <StarRating />
      </div>

      <blockquote
        className={`mt-5 flex-1 text-base leading-[26px] ${
          featured ? "text-[#9e9c9c]" : "text-[#333]"
        }`}
      >
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      <figcaption
        className={`mt-6 border-t pt-6 ${
          featured ? "border-white/15" : "border-[#e5e0e0]"
        }`}
      >
        <p className="text-base font-bold leading-6">{testimonial.name}</p>
        <p
          className={`mt-0.5 text-sm leading-5 ${
            featured ? "text-white/60" : "text-[#383131]"
          }`}
        >
          {testimonial.role}
        </p>
      </figcaption>
    </motion.figure>
  );
}

export function TestimonialsSection() {
  return (
    <section className="relative w-full border-b border-[rgba(107,13,17,0.1)] bg-[#f8f6f6]">
      <div className="relative mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:px-20 lg:py-[70px]">
        <motion.div
          variants={testGridStagger}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mx-auto flex w-full max-w-[1280px] flex-col items-center"
        >
          <div className="flex max-w-[672px] flex-col items-center text-center">
            <motion.div
              variants={testBadgeReveal}
              className="flex items-center gap-[7px] rounded-full border border-crimson-100 bg-crimson-200 px-[11.5px] py-[6px]"
            >
              <motion.div
                variants={aboutBadgeDot}
                className="size-[7px] rounded-full bg-red-200"
                aria-hidden
              />
              <span className="font-inter text-xs font-medium tracking-[0.53px] text-red-100">
                Testimonials
              </span>
            </motion.div>

            <motion.h2
              variants={testHeadlineReveal}
              className="mt-3.5 text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold leading-[1.2] tracking-[-0.84px] text-[#0d0808] lg:text-[40px] lg:leading-[48px]"
            >
              What clients say after handover
            </motion.h2>
          </div>

          <motion.div
            variants={testGridStagger}
            className="mt-12 grid w-full grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-5"
          >
            {TESTIMONIALS.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.name}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
