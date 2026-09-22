"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";

const CARD_CLASS =
  "rounded-[12px] bg-[#272727] px-6 py-5 font-[family-name:var(--font-manrope)] text-sm font-normal leading-[1.6] text-white/92 sm:text-[16px] sm:leading-[25.6px] [box-shadow:0_1px_0_0_#ed1c24,0_8px_24px_rgba(237,28,36,0.16)]";

type Callout = {
  name: string;
  x: string;
  y: string;
  side: "left" | "right";
  line: number;
  dot?: boolean;
  dotLarge?: boolean;
};

const CALLOUTS: Callout[] = [
  { name: "Goa", x: "23.99%", y: "54.79%", side: "left", line: 115, dot: true, dotLarge: true },
  { name: "Hyderabad", x: "49.05%", y: "53.54%", side: "right", line: 118 },
  { name: "Vijayawada", x: "50.88%", y: "56.66%", side: "right", line: 105, dot: true },
  { name: "Chennai", x: "54.02%", y: "66.46%", side: "right", line: 92 },
  { name: "Bengaluru", x: "40.48%", y: "62.98%", side: "left", line: 80 },
  { name: "Coimbatore", x: "38.27%", y: "72.80%", side: "left", line: 52 },
  { name: "Kochi", x: "39.55%", y: "76.63%", side: "left", line: 72 },
];

function MapCallout({ name, x, y, side, line, dot, dotLarge }: Callout) {
  const isLeft = side === "left";

  return (
    <div className="absolute z-10" style={{ left: x, top: y }}>
      {dot && (
        <span
          aria-hidden
          className={`absolute left-0 top-0 h-[clamp(4px,1.4vw,7px)] w-[clamp(4px,1.4vw,7px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white ring-[clamp(1px,0.35vw,1.5px)] ring-mekark-red shadow-[0_0_4px_1px_rgba(237,28,36,0.45)] ${
            dotLarge
              ? "lg:h-3 lg:w-3 lg:ring-[5px] lg:shadow-[0_0_12px_2px_rgba(237,28,36,0.6)]"
              : "lg:h-3.5 lg:w-3.5 lg:ring-2 lg:shadow-[0_0_10px_2px_rgba(237,28,36,0.55)]"
          }`}
        />
      )}
      <div
        className={`flex items-center gap-1.5 ${
          isLeft
            ? "flex-row-reverse -translate-x-[calc(100%+7px)] -translate-y-1/2"
            : "translate-x-[7px] -translate-y-1/2"
        }`}
      >
        <span
          aria-hidden
          className="h-px shrink-0 bg-white"
          style={{ width: `clamp(14px, ${((line / 1920) * 100).toFixed(3)}vw, ${line}px)` }}
        />
        <span
          className="whitespace-nowrap font-[family-name:var(--font-manrope)] font-normal leading-none text-white"
          style={{ fontSize: `clamp(10px, ${((18 / 1920) * 100).toFixed(3)}vw, 18px)` }}
        >
          {name}
        </span>
      </div>
    </div>
  );
}

export function InstitutionMapSection() {
  return (
    <section
      aria-label="Institutional construction across South India"
      className="relative w-full overflow-hidden bg-[#1a1a1a]"
    >
      <div className="relative mx-auto flex min-h-0 w-full max-w-[1920px] flex-col gap-10 px-5 py-12 sm:px-8 lg:aspect-[1920/780] lg:min-h-[760px] lg:flex-row lg:items-center lg:gap-8 lg:px-[72px] lg:py-0">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative z-10 flex w-full max-w-[640px] flex-col gap-5 lg:max-w-[46%]"
        >
          <motion.h2
            variants={fadeUp}
            className="mb-5 font-[family-name:var(--font-manrope)] text-[28px] font-bold capitalize leading-none tracking-normal text-white sm:text-[34px] lg:mt-[-3.958vw]"
          >
            Built For Crowds.
            <span className="mt-2 block text-mekark-red max-[430px]:leading-[1.35]">Engineered For Safety</span>
          </motion.h2>

          <motion.p variants={fadeUp} className={CARD_CLASS}>
            Mekark is a trusted institutional construction company in South
            India, delivering school and college auditoriums, indoor sports
            stadiums, outdoor stadium structures, and community halls across
            Tamil Nadu, Karnataka, Andhra Pradesh, Telangana, and Kerala,
            including{" "}
            <span className="font-bold text-mekark-red">
              Chennai, Coimbatore, Bengaluru, Hyderabad, and Kochi
            </span>
            <span className="font-bold text-mekark-red">.</span>
          </motion.p>

          <motion.p variants={fadeUp} className={CARD_CLASS}>
            Every auditorium and stadium structure is engineered with
            column-free wide spans for clear sightlines, acoustic-optimised
            roofing, and tensile structures for lightweight, weatherproof
            stadium canopies and spectator stands, all built to crowd-safety
            compliance under IS codes, fire safety, and seismic standards.
          </motion.p>

          <motion.p variants={fadeUp} className={CARD_CLASS}>
            From auditorium construction to stadium structure and tensile
            roofing design, Mekark brings the same precision engineering from
            our industrial projects into every institutional build across South
            India, safe, functional, and built to last.
          </motion.p>
        </motion.div>

        <div className="relative flex-1 overflow-hidden lg:aspect-square">
          <div className="relative mx-auto aspect-square w-full max-w-[420px] lg:absolute lg:top-[-39%] lg:right-[-23%] lg:mx-0 lg:aspect-square lg:h-auto lg:w-[128%] lg:max-w-none lg:scale-110">
            <Image
              src="/images/institution/map-section/map-india.webp"
              alt="3D map of India with South India highlighted"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-contain object-center"
            />
            <div className="pointer-events-none absolute inset-0">
              {CALLOUTS.map((callout) => (
                <MapCallout key={callout.name} {...callout} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
