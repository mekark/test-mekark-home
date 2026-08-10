"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeUp,
  scaleIn,
  staggerContainer,
} from "@/lib/motion-variants";

const VIEWPORT = { once: true, margin: "-80px" as const };

const LOGOS = [
  {
    name: "Tata",
    src: "/images/trusted-sectors/tata.png",
    className: "h-[47px] w-[60px]",
    imageClassName:
      "absolute h-[151%] w-[209%] max-w-none object-cover left-[-52%] top-[-26%]",
    crop: true,
  },
  {
    name: "Bosch",
    src: "/images/trusted-sectors/bosch.png",
    className: "size-[59px]",
  },
  {
    name: "Hyundai",
    src: "/images/trusted-sectors/hyundai.png",
    className: "size-[75px]",
  },
  {
    name: "Voltas",
    src: "/images/trusted-sectors/voltas.png",
    className: "size-[75px]",
  },
  {
    name: "JK Tyre",
    src: "/images/trusted-sectors/jk-tyre.png",
    className: "h-[43px] w-[83px]",
    imageClassName:
      "absolute h-[192%] w-full max-w-none object-cover left-0 top-[-41%]",
    crop: true,
  },
  {
    name: "TVS",
    src: "/images/trusted-sectors/tvs.png",
    className: "size-[75px]",
  },
  {
    name: "Q Med Hospital",
    src: "/images/trusted-sectors/qmed.png",
    className: "size-[54px]",
  },
] as const;

function LogoCard({
  logo,
}: {
  logo: (typeof LOGOS)[number];
}) {
  const isCropped = "crop" in logo && logo.crop;

  return (
    <motion.div
      variants={scaleIn}
      whileHover={{
        y: -4,
        transition: { type: "spring", stiffness: 340, damping: 22 },
      }}
      className="relative flex h-[92px] w-[149px] shrink-0 items-center justify-center overflow-hidden rounded-[11px] border border-black/5 bg-white"
    >
      <div className={`relative overflow-hidden ${logo.className}`}>
        {isCropped ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={logo.src}
            alt={logo.name}
            className={logo.imageClassName}
          />
        ) : (
          <Image
            src={logo.src}
            alt={logo.name}
            fill
            className="object-contain"
            sizes="75px"
          />
        )}
      </div>
    </motion.div>
  );
}

export function TrustedSectorsSection() {
  return (
    <section className="relative w-full bg-[#fdebeb]">
      <div className="relative mx-auto w-full max-w-[1440px] px-5 py-10 sm:px-8 lg:px-20 lg:py-14">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={staggerContainer}
          className="relative mx-auto flex w-full max-w-[1280px] flex-col items-center rounded-[30px] bg-[#fcfcfc] px-5 py-10 shadow-[0px_0px_15px_rgba(0,0,0,0.1)] sm:px-8 lg:px-10 lg:py-[42px]"
        >
          <motion.h2
            variants={fadeUp}
            className="max-w-[767px] text-center text-[clamp(1.5rem,2.8vw,1.875rem)] font-bold leading-[1.13] text-[#111] lg:text-[30px] lg:leading-[34px]"
          >
            Trusted Across
            <br />
            <span className="text-[#e50818]">
              Industrial &amp; Commercial Sectors
            </span>
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            className="mt-8 flex w-full flex-wrap items-center justify-center gap-[18px] sm:gap-[25px] lg:mt-10"
          >
            {LOGOS.map((logo) => (
              <LogoCard key={logo.name} logo={logo} />
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex w-full max-w-[640px] items-center gap-4 lg:mt-10"
          >
            <div
              className="h-px flex-1 bg-gradient-to-r from-transparent to-[#cfcfcf]"
              aria-hidden
            />
            <div className="flex shrink-0 items-center gap-[5px]">
              <div className="relative size-6 shrink-0">
                <Image
                  src="/images/trusted-sectors/shield-tick.svg"
                  alt=""
                  fill
                  className="object-contain"
                  sizes="24px"
                  aria-hidden
                />
              </div>
              <p className="text-center text-[14px] font-light leading-5 tracking-[1px] text-[#101116]">
                Built on Trust. Delivering Excellence.
              </p>
            </div>
            <div
              className="h-px flex-1 bg-gradient-to-l from-transparent to-[#cfcfcf]"
              aria-hidden
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
