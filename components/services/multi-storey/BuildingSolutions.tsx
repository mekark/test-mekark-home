"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import GridBackground from "@/components/services/multi-storey/GridBackground";

const solutions = [
  {
    title: "Multi-Storey Steel Building Construction",
    body: "Structural steel buildings engineered for strength, speed, and scalability.",
    image: "/images/services/multi-storey/frame212/solutions/steel-building.jpg",
  },
  {
    title: "Pre-Engineered Building (PEB) Structures",
    body: "Faster, more cost-efficient than conventional construction.",
    image: "/images/services/multi-storey/frame212/solutions/peb.jpg",
  },
  {
    title: "Structural Design & Engineering",
    body: "Load planning and analysis using BIM technology.",
    image: "/images/services/multi-storey/frame212/solutions/structural-design.jpg",
  },
  {
    title: "Industrial Buildings",
    body: "Multi-level facilities for manufacturing, processing, and storage.",
    image: "/images/services/multi-storey/frame212/solutions/industrial.jpg",
  },
  {
    title: "Commercial & Institutional Buildings",
    body: "Office, retail, hospital, hotel, and educational structures.",
    image: "/images/services/multi-storey/frame212/solutions/commercial.jpg",
  },
  {
    title: "Warehouse Construction",
    body: "Multi-level logistics and storage structures on steel framing.",
    image: "/images/services/multi-storey/frame212/solutions/warehouse.jpg",
  },
  {
    title: "Foundation & Structural Framework",
    body: "RCC foundation and steel superstructure integration with quality control.",
    image: "/images/services/multi-storey/frame212/solutions/foundation.jpg",
  },
  {
    title: "MEP & Finishing Works",
    body: "Mechanical, electrical, plumbing, and premium finishing across all floors.",
    image: "/images/services/multi-storey/frame212/solutions/mep.jpg",
  },
] as const;

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function BuildingSolutions() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-white px-5 pt-14 pb-14 text-gray-100 sm:px-8 sm:pt-20 sm:pb-20 lg:px-[clamp(48px,12vw,229px)] lg:pt-[107px] lg:pb-[90px]">
      <GridBackground position="top" />
      <div className="relative z-10 mx-auto max-w-[1464px]">
        <motion.h2
          className="mx-auto mb-10 max-w-[868px] text-center text-[28px] leading-[1.2] font-bold tracking-[-1px] text-[#111] sm:mb-14 sm:text-[42px] sm:tracking-[-1.33px] lg:mb-[88px] lg:text-[53.33px] lg:leading-[65.33px]"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: easeOut }}
        >
          Our Multi-Storey Building Solutions
        </motion.h2>

        <div className="grid grid-cols-1 justify-items-center gap-y-14 sm:grid-cols-2 sm:justify-items-stretch sm:gap-x-12 sm:gap-y-16 lg:grid-cols-4 lg:gap-x-[clamp(64px,7.5vw,144px)] lg:gap-y-10">
          {solutions.map((item, index) => (
            <motion.article
              key={item.title}
              className="flex w-full max-w-[320px] flex-col text-left lg:max-w-[257px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                ease: easeOut,
                delay: 0.05 * (index % 4),
              }}
            >
              <div className="relative mb-9 aspect-square w-full overflow-hidden rounded-[21.33px] bg-[#d9d9d9]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="257px"
                  className="object-cover"
                />
              </div>
              <h3 className="font-montserrat text-[17px] leading-[21.33px] font-bold text-darkslategray sm:text-[18.67px]">
                {item.title}
              </h3>
              <p className="mt-3 font-montserrat text-base leading-[21.33px] font-normal text-dimgray">
                {item.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
