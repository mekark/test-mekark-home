"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import GridBackground from "@/components/services/multi-storey/GridBackground";
import ServiceSolutionsMobileGrid from "@/components/services/ServiceSolutionsMobileGrid";
import { SERVICE_BODY_TEXT_CLASS } from "@/components/services/serviceTypography";

type Solution = {
  title: string;
  body: string;
  image: string;
  desktopTitle: ReactNode;
  desktopBody: ReactNode;
};

function Line({ children }: { children: ReactNode }) {
  return <span className="block">{children}</span>;
}

const solutions: Solution[] = [
  {
    title: "Multi-Storey Steel Building Construction",
    body: "Structural steel buildings engineered for strength, speed, and scalability.",
    image: "/images/services/multi-storey/frame212/solutions/steel-building.jpg",
    desktopTitle: (
      <>
        <Line>Multi-Storey Steel</Line>
        <Line>Building Construction</Line>
      </>
    ),
    desktopBody: (
      <>
        <Line>Structural steel buildings</Line>
        <Line>engineered for strength, speed,</Line>
        <Line>and scalability.</Line>
      </>
    ),
  },
  {
    title: "Pre-Engineered Building (PEB) Structures",
    body: "Faster, more cost-efficient than conventional construction.",
    image: "/images/services/multi-storey/frame212/solutions/peb.jpg",
    desktopTitle: (
      <>
        <Line>Pre-Engineered Building</Line>
        <Line>(PEB) Structures</Line>
      </>
    ),
    desktopBody: (
      <>
        <Line>Faster, more cost-efficient than</Line>
        <Line>conventional construction.</Line>
      </>
    ),
  },
  {
    title: "Structural Design & Engineering",
    body: "Load planning and analysis using BIM technology.",
    image: "/images/services/multi-storey/frame212/solutions/structural-design.jpg",
    desktopTitle: (
      <>
        <Line>Structural Design &amp;</Line>
        <Line>Engineering</Line>
      </>
    ),
    desktopBody: (
      <>
        <Line>Load planning and analysis</Line>
        <Line>using BIM technology.</Line>
      </>
    ),
  },
  {
    title: "Industrial Buildings",
    body: "Multi-level facilities for manufacturing, processing, and storage.",
    image: "/images/services/multi-storey/frame212/solutions/industrial.jpg",
    desktopTitle: (
      <>
        <Line>Industrial</Line>
        <Line>Buildings</Line>
      </>
    ),
    desktopBody: (
      <>
        <Line>Multi-level facilities for</Line>
        <Line>manufacturing, processing, and</Line>
        <Line>storage.</Line>
      </>
    ),
  },
  {
    title: "Commercial & Institutional Buildings",
    body: "Office, retail, hospital, hotel, and educational structures.",
    image: "/images/services/multi-storey/frame212/solutions/commercial.jpg",
    desktopTitle: (
      <>
        <Line>Commercial &amp;</Line>
        <Line>Institutional Buildings</Line>
      </>
    ),
    desktopBody: (
      <>
        <Line>Office, retail, hospital, hotel, and</Line>
        <Line>educational structures.</Line>
      </>
    ),
  },
  {
    title: "Warehouse Construction",
    body: "Multi-level logistics and storage structures on steel framing.",
    image: "/images/services/multi-storey/frame212/solutions/warehouse.jpg",
    desktopTitle: <Line>Warehouse Construction</Line>,
    desktopBody: (
      <>
        <Line>Multi-level logistics and storage</Line>
        <Line>structures on steel framing.</Line>
      </>
    ),
  },
  {
    title: "Foundation & Structural Framework",
    body: "RCC foundation and steel superstructure integration with quality control.",
    image: "/images/services/multi-storey/frame212/solutions/foundation.jpg",
    desktopTitle: (
      <>
        <Line>Foundation &amp; Structural</Line>
        <Line>Framework</Line>
      </>
    ),
    desktopBody: (
      <>
        <Line>RCC foundation and steel</Line>
        <Line>superstructure integration with</Line>
        <Line>quality control.</Line>
      </>
    ),
  },
  {
    title: "MEP & Finishing Works",
    body: "Mechanical, electrical, plumbing, and premium finishing across all floors.",
    image: "/images/services/multi-storey/frame212/solutions/mep.jpg",
    desktopTitle: <Line>MEP &amp; Finishing Works</Line>,
    desktopBody: (
      <>
        <Line>Mechanical, electrical,</Line>
        <Line>plumbing, and premium</Line>
        <Line>finishing across all floors.</Line>
      </>
    ),
  },
];

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function BuildingSolutions() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-white text-gray-100">
      <GridBackground position="top" />

      <ServiceSolutionsMobileGrid
        title="Our Multi-Storey Building Solutions"
        solutions={solutions.map((item) => ({
          title: item.title,
          description: item.body,
          image: item.image,
        }))}
      />

      <div className="relative z-10 mx-auto hidden max-w-[1464px] px-5 pt-14 pb-14 sm:px-8 sm:pt-20 sm:pb-20 lg:block lg:px-[clamp(48px,12vw,229px)] lg:pt-[107px] lg:pb-[90px]">
        <motion.h2
          className="mx-auto mb-10 max-w-[868px] text-center text-[28px] leading-[1.2] font-bold tracking-[-1px] text-[#111] sm:mb-14 sm:text-[42px] sm:tracking-[-1.33px] lg:mb-[88px] lg:text-[53.33px] lg:leading-[65.33px]"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: easeOut }}
        >
          Our Multi-Storey Building Solutions
        </motion.h2>

        <div className="mx-auto grid justify-center gap-y-10 lg:grid-cols-[repeat(4,257px)] lg:gap-x-[144px] lg:gap-y-10">
          {solutions.map((item, index) => (
            <motion.article
              key={item.title}
              className="flex w-[257px] flex-col text-left"
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
              <h3 className="min-h-[42.66px] font-montserrat text-[18.67px] leading-[21.33px] font-bold text-darkslategray">
                {item.desktopTitle}
              </h3>
              <p className={`mt-3 min-h-[63.99px] ${SERVICE_BODY_TEXT_CLASS}`}>
                {item.desktopBody}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
