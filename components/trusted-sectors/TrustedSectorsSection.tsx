"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeUp,
  scaleIn,
  staggerContainer,
} from "@/lib/motion-variants";
import { SECTION_CONTAINER_CLASS } from "@/lib/sectionLayout";

const VIEWPORT = { once: true, margin: "-80px" as const };

const HOME_LOGOS = [
  {
    name: "Tata",
    src: "/images/trusted-sectors/tata.png",
    className: "h-[47px] w-[60px]",
    imageClassName:
      "absolute h-[151%] w-[209%] max-w-none object-cover left-[-52%] top-[-26%]",
    crop: true,
  },
  {
    name: "D Mart",
    src: "/images/trusted-sectors/dmart.png",
    className: "h-[28px] w-[75px]",
    imageClassName:
      "absolute h-[270%] w-[133%] max-w-none object-cover left-[-17%] top-[-81%]",
    crop: true,
  },
  {
    name: "Komatsu",
    src: "/images/trusted-sectors/komatsu.png",
    className: "h-[52px] w-[107px]",
    objectFit: "cover" as const,
  },
  {
    name: "Bosch",
    src: "/images/trusted-sectors/bosch.png",
    className: "h-[63px] w-[112px]",
    objectFit: "cover" as const,
  },
  {
    name: "Danfoss",
    src: "/images/trusted-sectors/danfoss.png",
    className: "h-[50px] w-[90px]",
    objectFit: "cover" as const,
  },
  {
    name: "TVS",
    src: "/images/trusted-sectors/tvs.png",
    className: "size-[75px]",
    objectFit: "cover" as const,
  },
  {
    name: "Nokia",
    src: "/images/trusted-sectors/nokia.png",
    className: "h-[32px] w-[104px]",
    imageClassName:
      "absolute h-[330%] w-full max-w-none object-cover left-0 top-[-116%]",
    crop: true,
  },
  {
    name: "Kryolan",
    src: "/images/trusted-sectors/kryolan.png",
    className: "h-[80px] w-[136px]",
    imageClassName:
      "absolute h-[215%] w-[126%] max-w-none object-cover left-[-12%] top-[-58%]",
    crop: true,
  },
  {
    name: "Reliance Industries Limited",
    src: "/images/trusted-sectors/reliance.png",
    className: "h-[60px] w-[95px]",
    objectFit: "cover" as const,
  },
  {
    name: "Sobha",
    src: "/images/trusted-sectors/sobha.png",
    className: "size-[75px]",
    imageClassName:
      "absolute h-[149%] w-[161%] max-w-none object-cover left-[-34%] top-[-24%]",
    crop: true,
  },
  {
    name: "SRM",
    src: "/images/trusted-sectors/srm.png",
    className: "h-[66px] w-[71px]",
    imageClassName:
      "absolute h-[141%] w-[131%] max-w-none object-cover left-[-18%] top-[-19%]",
    crop: true,
  },
  {
    name: "L&T",
    src: "/images/trusted-sectors/l-and-t.png",
    className: "h-[77px] w-[75px]",
    objectFit: "contain" as const,
  },
  {
    name: "Agile",
    src: "/images/trusted-sectors/agile.png",
    className: "h-[57px] w-[75px]",
    objectFit: "cover" as const,
  },
  {
    name: "Blue Star",
    src: "/images/trusted-sectors/blue-star.png",
    className: "h-[25px] w-[124px]",
    objectFit: "cover" as const,
  },
] as const;

type HomeLogo = (typeof HOME_LOGOS)[number];

type TrustedSectorsSectionProps = {
  variant?: "home" | "services";
};

function HomeLogoCard({ logo }: { logo: HomeLogo }) {
  const isCropped = "crop" in logo && logo.crop;

  return (
    <motion.div
      variants={scaleIn}
      whileHover={{
        y: -4,
        transition: { type: "spring", stiffness: 340, damping: 22 },
      }}
      className="relative flex h-[72px] w-full items-center justify-center overflow-hidden rounded-[10px] border border-black/5 bg-white px-2 py-2 sm:h-[92px] sm:rounded-[15px] sm:px-3 lg:h-[122px] lg:px-0 lg:py-0"
    >
      {/* Mobile — fit logos inside the card without cropping */}
      <div className="relative flex h-full w-full items-center justify-center sm:hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logo.src}
          alt={logo.name}
          className="max-h-[44px] w-auto max-w-[92%] object-contain"
        />
      </div>

      {/* Tablet / desktop — Figma crop positions */}
      <div
        className={`relative hidden overflow-hidden sm:block ${logo.className}`}
      >
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
            className={
              "objectFit" in logo && logo.objectFit === "cover"
                ? "object-cover"
                : "object-contain"
            }
            sizes="(max-width: 1024px) 75px, 100px"
          />
        )}
      </div>
    </motion.div>
  );
}

export function TrustedSectorsSection({
  variant = "home",
}: TrustedSectorsSectionProps) {
  const isServices = variant === "services";
  const logos = isServices ? HOME_LOGOS.slice(0, 7) : HOME_LOGOS;

  return (
    <section className="relative w-full bg-[#fdebeb]">
      <div className={`${SECTION_CONTAINER_CLASS} py-10 lg:py-14`}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={staggerContainer}
          className={
            isServices
              ? "relative mx-auto flex w-full max-w-[1707px] flex-col items-center overflow-hidden rounded-[30px] bg-[#fcfcfc] px-4 py-10 shadow-[0px_0px_20px_rgba(0,0,0,0.1)] sm:px-8 lg:rounded-[40px] lg:px-10 lg:py-[42px]"
              : "relative mx-auto flex w-full max-w-[1280px] flex-col items-center overflow-hidden rounded-[30px] bg-[#fcfcfc] px-5 py-10 shadow-[0px_0px_15px_rgba(0,0,0,0.1)] sm:px-8 lg:rounded-[40px] lg:px-10 lg:py-[42px]"
          }
        >
          <motion.h2
            variants={fadeUp}
            className={
              isServices
                ? "max-w-[1023px] text-center text-[clamp(1.5rem,4vw,2.5rem)] font-bold leading-[1.13] text-[#111] lg:text-[40px] lg:leading-[45.33px]"
                : "max-w-[767px] text-center text-[clamp(1.5rem,2.8vw,1.875rem)] font-bold leading-[1.13] text-[#111] lg:text-[30px] lg:leading-[34px]"
            }
          >
            Trusted Across
            <br />
            <span className="text-[#e50818]">
              <span className="block sm:inline">Industrial &amp; Commercial</span>{" "}
              <span className="block sm:inline">Sectors</span>
            </span>
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            className="mt-8 grid w-full max-w-[1594px] grid-cols-3 gap-3 sm:gap-4 md:grid-cols-4 lg:mt-10 lg:grid-cols-7 lg:gap-x-[34px] lg:gap-y-[41px]"
          >
            {logos.map((logo) => (
              <HomeLogoCard key={logo.name} logo={logo} />
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex w-full min-w-0 max-w-[640px] items-center justify-center gap-4 sm:justify-start lg:mt-10"
          >
            <div
              className="hidden h-px min-w-0 flex-1 bg-gradient-to-r from-transparent to-[#cfcfcf] sm:block"
              aria-hidden
            />
            <div className="flex min-w-0 max-w-full items-center justify-center gap-[6.7px]">
              <div className="relative size-6 shrink-0 lg:size-8">
                <Image
                  src="/images/trusted-sectors/shield-tick.svg"
                  alt=""
                  fill
                  className="object-contain"
                  sizes="32px"
                  aria-hidden
                />
              </div>
              <p className="min-w-0 text-center text-[14px] font-light leading-5 tracking-[1px] text-[#101116] sm:whitespace-nowrap lg:text-[15px] lg:tracking-[1.33px]">
                Built on Trust. Delivering Excellence.
              </p>
            </div>
            <div
              className="hidden h-px min-w-0 flex-1 bg-gradient-to-l from-transparent to-[#cfcfcf] sm:block"
              aria-hidden
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
