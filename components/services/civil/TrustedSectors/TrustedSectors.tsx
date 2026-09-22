"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TrustedSectorsSection } from "@/components/trusted-sectors/TrustedSectorsSection";
import { fadeUp, scaleIn, staggerContainer } from "@/lib/motion-variants";

const VIEWPORT = { once: true, margin: "-80px" as const };

/** Figma 7385:1180 — 3×3 + 1 centered logo grid */
const MOBILE_LOGOS = [
  {
    name: "Tata",
    src: "/images/trusted-sectors/tata.webp",
    wrapperClass: "h-[29px] w-[37px]",
    imageClassName:
      "absolute h-[150.94%] w-[208.94%] max-w-none left-[-51.53%] top-[-26.42%] object-cover",
  },
  {
    name: "D Mart",
    src: "/images/trusted-sectors/dmart.webp",
    wrapperClass: "h-[22px] w-[60px]",
    imageClassName:
      "absolute h-[270.27%] w-[133.15%] max-w-none left-[-16.58%] top-[-81.08%] object-cover",
  },
  {
    name: "Komatsu",
    src: "/images/trusted-sectors/komatsu.webp",
    wrapperClass: "h-[31px] w-[64px]",
    imageClassName: "absolute inset-0 h-full w-full object-cover",
  },
  {
    name: "Bosch",
    src: "/images/trusted-sectors/bosch.webp",
    wrapperClass: "h-[41px] w-[74px]",
    imageClassName: "absolute inset-0 h-full w-full object-cover",
  },
  {
    name: "Danfoss",
    src: "/images/trusted-sectors/danfoss.webp",
    wrapperClass: "h-[51.659px] w-[94px]",
    imageClassName: "absolute inset-0 h-full w-full object-cover",
  },
  {
    name: "TVS",
    src: "/images/trusted-sectors/tvs.webp",
    wrapperClass: "h-[45px] w-[92px]",
    imageClassName:
      "absolute h-[204.44%] w-full max-w-none left-0 top-[-53.33%] object-cover",
  },
  {
    name: "Nokia",
    src: "/images/trusted-sectors/nokia.webp",
    wrapperClass: "h-[23px] w-[76px]",
    imageClassName:
      "absolute h-[329.9%] w-full max-w-none left-0 top-[-116.49%] object-cover",
    centered: true,
  },
] as const;

function MobileLogoCard({
  logo,
}: {
  logo: (typeof MOBILE_LOGOS)[number];
}) {
  return (
    <motion.div
      variants={scaleIn}
      className={`flex h-[65px] w-full max-w-[100px] items-center justify-center overflow-hidden rounded-[12px] border border-black/5 bg-white ${
        "centered" in logo && logo.centered ? "col-start-2" : ""
      }`}
    >
      <div className={`relative overflow-hidden ${logo.wrapperClass}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logo.src}
          alt={logo.name}
          className={logo.imageClassName}
        />
      </div>
    </motion.div>
  );
}

/** Shared subtitle — mobile + desktop */
const TRUSTED_SECTORS_DESCRIPTION =
  "As a civil infrastructure development company, our project mix spans core RCC structures to full sites.";

/** Figma 7385:1174 — civil services mobile trusted sectors */
function CivilTrustedSectorsMobile() {
  return (
    <section className="relative w-full bg-[#fdebeb] lg:hidden">
      <div className="px-4 py-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={staggerContainer}
          className="mx-auto flex w-full max-w-[358px] flex-col items-center gap-6 rounded-[28px] bg-[#fcfcfc] px-[14px] py-6 shadow-[0px_0px_20px_rgba(0,0,0,0.1)]"
        >
          <motion.div
            variants={fadeUp}
            className="flex w-full flex-col items-center gap-[14px] text-center"
          >
            <h2 className="font-manrope text-[28px] font-bold leading-[32px] text-[#111]">
              <span className="block">Trusted Across</span>
              <span className="block text-[#e50818]">
                Industrial &amp; Commercial Sectors
              </span>
            </h2>
            <p className="max-w-[289px] font-manrope text-sm font-medium leading-normal text-black">
              {TRUSTED_SECTORS_DESCRIPTION}
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid w-full grid-cols-3 justify-items-center gap-x-[14px] gap-y-[14px]"
          >
            {MOBILE_LOGOS.map((logo) => (
              <MobileLogoCard key={logo.name} logo={logo} />
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex w-full flex-col items-center gap-[3px]"
          >
            <Image
              src="/images/trusted-sectors/shield-tick.svg"
              alt=""
              width={20}
              height={24}
              className="h-6 w-5 shrink-0 object-contain"
              aria-hidden
            />
            <div className="flex w-full items-center justify-center gap-3 px-[25px]">
              <div
                className="h-px w-7 shrink-0 bg-[#cfcfcf]"
                aria-hidden
              />
              <p className="max-w-[246px] text-center font-manrope text-xs font-normal leading-5 tracking-[1px] text-[#101116]">
                Built on Trust. Delivering Excellence.
              </p>
              <div
                className="h-px w-7 shrink-0 bg-[#cfcfcf]"
                aria-hidden
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default function TrustedSectors() {
  return (
    <>
      <CivilTrustedSectorsMobile />
      <TrustedSectorsSection
        variant="services"
        desktopOnly
        description={TRUSTED_SECTORS_DESCRIPTION}
      />
    </>
  );
}
