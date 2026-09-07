"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";

const CARDS = [
  {
    title: "School & College Auditoriums",
    src: "/images/institution/3rd section/1.png",
    alt: "Interior of a school and college auditorium with red seating and a wooden stage",
  },
  {
    title: "Indoor Sports Stadium",
    src: "/images/institution/3rd section/2.png",
    alt: "Indoor sports stadium with a wooden multi-purpose court and spectator seating",
  },
  {
    title: "Outdoor Sports Stadium",
    src: "/images/institution/3rd section/3.png",
    alt: "Outdoor stadium with a running track, field, and tensile roof grandstand",
  },
  {
    title: "Schools and Colleges",
    src: "/images/institution/3rd section/4.png",
    alt: "Modern school and college campus building with a landscaped courtyard",
  },
] as const;

export function InstitutionTypesSection() {
  return (
    <section
      id="engineering"
      aria-label="Institutional building types"
      className="relative w-full overflow-hidden bg-white"
    >
      <div className="relative mx-auto flex w-full max-w-[1920px] flex-col justify-center gap-6 px-5 py-10 sm:gap-8 sm:px-8 sm:py-12 lg:px-12 lg:py-14 xl:aspect-[1920/766] xl:gap-10 xl:px-[76px] xl:py-0">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="font-[family-name:var(--font-manrope)] text-[34px] font-bold leading-none tracking-normal text-[#e50818]"
        >
          What We Build
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4 xl:gap-[19px]"
        >
          {CARDS.map((card) => (
            <motion.article
              key={card.title}
              variants={fadeUp}
              className="flex rounded-[14px] bg-[#f6f6f6] shadow-[0_8px_18px_rgba(0,0,0,0.12),0_14px_28px_rgba(0,0,0,0.08)]"
            >
              <div className="flex w-full flex-col overflow-hidden rounded-[14px]">
                <div className="relative aspect-[428/376] overflow-hidden rounded-t-[14px]">
                  <Image
                    src={encodeURI(card.src)}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 428px"
                    className="object-cover object-center"
                  />
                </div>
                <div className="flex min-h-[64px] flex-1 items-center justify-center px-3 py-4 sm:min-h-[80px] sm:px-4 sm:py-5 xl:min-h-[113px]">
                  <p className="text-center font-[family-name:var(--font-manrope)] text-[16px] font-normal leading-snug tracking-[0.01em] text-[#1a1a1a] sm:text-[18px] xl:text-[24px] xl:leading-none">
                    {card.title}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
