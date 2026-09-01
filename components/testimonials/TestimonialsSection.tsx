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
import { SECTION_CONTAINER_CLASS } from "@/lib/sectionLayout";

const VIEWPORT = { once: true, margin: "-80px" as const };

const TESTIMONIALS = [
  {
    quote:
      "We are happy to share that MEKARK Structure has successfully completed our project within the committed timeline, maintaining high standards of quality. The team's dedication, responsiveness, and execution have truly impressed us.",
    name: "Sankar Ramalingam",
    role: "Facility Management",
    company: "BOSCH",
    logo: {
      src: "/images/testimonials/logos/bosch.webp",
      width: 260,
      height: 85,
      className: "h-[26px] w-auto mix-blend-multiply",
    },
    featured: false,
  },
  {
    quote:
      "From project initiation to completion, the team demonstrated exceptional professionalism, unwavering commitment, and meticulous attention to detail at every stage. The quality of workmanship has not only met but exceeded our expectations. We sincerely appreciate the effort and dedication shown throughout and extend our best wishes to MEKARK for all future endeavours.",
    name: "Hariprasaad",
    role: "Mgr, Real Estate & Facility",
    company: "DANFOSS",
    logo: {
      src: "/images/testimonials/logos/danfoss.svg",
      width: 126,
      height: 55,
      className: "h-[32px] w-auto",
    },
    featured: true,
  },
  {
    quote:
      "The consistent performance and organized execution by MEKARK were truly commendable. The on-site team demonstrated excellent coordination, ensuring smooth progress and timely resolution of challenges throughout the project. Their collaborative approach and clear communication significantly contributed to the project's success. We look forward to working with MEKARK again on future assignments.",
    name: "Srinivasan",
    role: "Head of Projects",
    company: "KOMATSU",
    logo: {
      src: "/images/testimonials/logos/komatsu.svg",
      width: 181,
      height: 35,
      className: "h-[22px] w-auto",
    },
    featured: false,
  },
] as const;

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
      <div className="flex h-10 items-center">
        <Image
          src={testimonial.logo.src}
          alt={`${testimonial.company} logo`}
          width={testimonial.logo.width}
          height={testimonial.logo.height}
          className={`${testimonial.logo.className} max-w-[130px]`}
        />
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
      <div className={`${SECTION_CONTAINER_CLASS} py-14 lg:py-[70px]`}>
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
                key={testimonial.company}
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
