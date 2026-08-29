"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const solutions = [
  {
    id: 1,
    title: "Spinning Mill Construction",
    desc: "Purpose-built buildings with high clear-height spans, optimised column spacing for ring frames and open-end rotors, and integrated MEP systems for humidity and dust control.",
    img: "/images/industries/textile/solutions/spinning.png",
    offset: false,
  },
  {
    id: 2,
    title: "Weaving Factory & Shed Construction",
    desc: "Wide-span, column-free sheds for shuttle and shuttleless looms, with north-light roof systems for even daylight diffusion critical for fabric quality.",
    img: "/images/industries/textile/solutions/weaving.png",
    offset: true,
  },
  {
    id: 3,
    title: "Garment Factory & Apparel Plant",
    desc: "Single- and multi-floor garment units with fire suppression and wide sewing-floor spans, built to Factory Act and social compliance audit standards.",
    img: "/images/industries/textile/solutions/garment.png",
    offset: false,
  },
  {
    id: 4,
    title: "Dyeing, Printing & Processing Units",
    desc: "Robust wet-processing structures with corrosion-resistant flooring, ETP/STP integration, and steam piping for zero discharge compliance.",
    img: "/images/industries/textile/solutions/dyeing.png",
    offset: true,
  },
  {
    id: 5,
    title: "Composite Textile Mills",
    desc: "Turnkey construction covering ginning, spinning, weaving, dyeing and finishing under one campus with power substations and admin blocks.",
    img: "/images/industries/textile/solutions/composite.png",
    offset: false,
  },
  {
    id: 6,
    title: "Pre-Engineered Buildings (PEB)",
    desc: "Factory-fabricated steel structures erected 50% faster than conventional construction, ideal for greenfield textile units and brownfield plant expansions.",
    img: "/images/industries/textile/solutions/peb.png",
    offset: true,
  },
];

export default function BuildSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  return (
    <section
      id="what-we-build"
      className="z-20 w-full scroll-mt-24 bg-[#F6F6F6] py-16 text-black lg:py-[87px]"
    >
      <div className="mx-auto flex w-full max-w-[1920px] flex-col gap-12 px-5 sm:px-10 lg:flex-row lg:items-start lg:gap-8 xl:gap-[50px] lg:px-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeIn}
          className="flex w-full flex-col gap-2.5 lg:sticky lg:top-24 lg:w-[38%] lg:self-start xl:w-[654px] lg:shrink-0"
        >
          <h2 className="font-[family-name:var(--font-manrope)] text-[32px] font-bold leading-normal text-black sm:text-4xl lg:text-[46px]">
            Our Solutions
          </h2>
          <div className="flex flex-col gap-2.5">
            <h3 className="max-w-[654px] font-[family-name:var(--font-manrope)] text-xl font-medium leading-normal text-black sm:text-2xl lg:text-[28px]">
              Complete Textile Factory Construction Solutions, Engineered
              End-to-End
            </h3>
            <p className="max-w-[654px] font-[family-name:var(--font-manrope)] text-base font-normal leading-normal text-[#6E6E6E] lg:text-[18px]">
              As a full-service, turnkey EPC warehouse solution provider in
              South India, Mekark designs, fabricates, and erects
              pre-engineered steel structures tailored to your operational
              needs and span requirements.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="relative min-w-0 flex-1"
        >
          <div
            aria-hidden
            className="absolute bottom-[9px] left-[8px] top-[9px] w-px bg-[#E40015]"
          />

          <div className="flex flex-col gap-[66px]">
            {solutions.map((solution) => (
              <motion.article
                key={solution.id}
                variants={fadeIn}
                className="relative flex items-start"
              >
                <div className="relative z-10 mt-px size-[18px] shrink-0 rounded-full border-[3.5px] border-[#E40015] bg-[#F6F6F6]" />
                <div
                  className={`mt-[8px] h-px shrink-0 bg-[#E40015] ${
                    solution.offset ? "w-6 2xl:w-[211px]" : "w-6 2xl:w-[56px]"
                  }`}
                />
                <div className="flex min-h-[160px] w-full max-w-[740px] overflow-hidden rounded-[20px] border-[1.2px] border-[#C0C0C0] bg-white xl:min-h-[193px]">
                  <div className="relative min-h-[160px] w-[120px] shrink-0 self-stretch overflow-hidden sm:w-[180px] lg:w-[42%] lg:max-w-[323px] xl:min-h-[193px]">
                    <Image
                      src={solution.img}
                      alt={solution.title}
                      fill
                      sizes="(max-width: 640px) 120px, (max-width: 1024px) 180px, 323px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col justify-center gap-2 px-4 py-4 sm:px-5 xl:py-8 xl:pl-8 xl:pr-6">
                    <h3 className="font-[family-name:var(--font-manrope)] text-base font-semibold leading-normal text-black sm:text-[18px]">
                      {solution.title}
                    </h3>
                    <p className="font-[family-name:var(--font-manrope)] text-sm font-normal leading-normal text-[#6E6E6E] sm:text-[16px]">
                      {solution.desc}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
