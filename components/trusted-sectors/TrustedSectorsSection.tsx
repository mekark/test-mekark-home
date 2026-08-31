"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeUp,
  scaleIn,
  staggerContainer,
} from "@/lib/motion-variants";

const VIEWPORT = { once: true, margin: "-80px" as const };

const SERVICE_LOGOS = [
  { name: "Tata", src: "/images/trusted-sectors/tata.png" },
  { name: "D Mart", src: "/images/trusted-sectors/dmart.png" },
  { name: "L&T", src: "/images/trusted-sectors/l-and-t.png" },
  { name: "Voltas", src: "/images/trusted-sectors/voltas.png" },
  { name: "JK Tyre", src: "/images/trusted-sectors/jk-tyre.png" },
  { name: "TVS", src: "/images/trusted-sectors/tvs.png" },
  { name: "Nokia", src: "/images/trusted-sectors/nokia.png" },
] as const;

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
    name: "L&T",
    src: "/images/trusted-sectors/l-and-t.png",
    className: "size-[75px]",
    objectFit: "contain" as const,
  },
  {
    name: "Voltas",
    src: "/images/trusted-sectors/voltas.png",
    className: "size-[75px]",
    objectFit: "cover" as const,
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
    name: "Johnson Electric",
    src: "/images/trusted-sectors/johnson-electric.png",
    className: "size-[75px]",
    objectFit: "cover" as const,
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

function ServiceLogoCard({
  logo,
}: {
  logo: (typeof SERVICE_LOGOS)[number];
}) {
  return (
    <motion.div
      variants={scaleIn}
      whileHover={{
        y: -4,
        transition: { type: "spring", stiffness: 340, damping: 22 },
      }}
      className="flex h-[100px] w-full items-center justify-center rounded-[15px] border border-black/5 bg-white sm:h-[110px] lg:h-[122px] lg:rounded-[14.94px]"
    >
      <div className="relative h-[58px] w-[80px] sm:h-[62px] sm:w-[90px] lg:h-[75px] lg:w-[100px]">
        <Image
          src={logo.src}
          alt={logo.name}
          fill
          className="object-contain object-center"
          sizes="100px"
        />
      </div>
    </motion.div>
  );
}

function HomeLogoCard({ logo }: { logo: HomeLogo }) {
  const isCropped = "crop" in logo && logo.crop;

  return (
    <motion.div
      variants={scaleIn}
      whileHover={{
        y: -4,
        transition: { type: "spring", stiffness: 340, damping: 22 },
      }}
      className="relative flex h-[92px] w-[149px] shrink-0 items-center justify-center overflow-hidden rounded-[15px] border border-black/5 bg-white lg:h-[122px] lg:w-[198px]"
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

  return (
    <section className="relative w-full bg-[#fdebeb]">
      <div
        className={
          isServices
            ? "relative mx-auto w-full max-w-[1920px] px-4 py-10 sm:px-8 lg:px-[107px] lg:py-14"
            : "relative mx-auto w-full max-w-[1440px] px-5 py-10 sm:px-8 lg:px-20 lg:py-14"
        }
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={staggerContainer}
          className={
            isServices
              ? "relative mx-auto flex w-full max-w-[1707px] flex-col items-center overflow-hidden rounded-[30px] bg-[#fcfcfc] px-4 py-10 shadow-[0px_0px_20px_rgba(0,0,0,0.1)] sm:px-8 lg:rounded-[40px] lg:px-10 lg:py-[42px]"
              : "relative mx-auto flex w-full max-w-[1280px] flex-col items-center rounded-[30px] bg-[#fcfcfc] px-5 py-10 shadow-[0px_0px_15px_rgba(0,0,0,0.1)] sm:px-8 lg:rounded-[40px] lg:px-10 lg:py-[42px]"
          }
        >
          <motion.h2
            variants={fadeUp}
            className={
              isServices
                ? "max-w-[1023px] text-center text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-[1.13] text-[#111] lg:text-[40px] lg:leading-[45.33px]"
                : "max-w-[767px] text-center text-[clamp(1.5rem,2.8vw,1.875rem)] font-bold leading-[1.13] text-[#111] lg:text-[30px] lg:leading-[34px]"
            }
          >
            Trusted Across
            <br />
            <span className="text-[#e50818]">
            Commercial, Industrial &amp; Public Sectors
            </span>
          </motion.h2>

          {isServices ? (
            <motion.div
              variants={staggerContainer}
              className="mt-8 grid w-full max-w-[1594px] grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:mt-10 lg:grid-cols-7 lg:items-stretch lg:gap-[34px]"
            >
              {SERVICE_LOGOS.map((logo) => (
                <ServiceLogoCard key={logo.name} logo={logo} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              variants={staggerContainer}
              className="mt-8 flex w-full max-w-[1594px] flex-wrap items-center justify-center gap-[18px] sm:gap-[25px] lg:mt-10 lg:gap-x-[34px] lg:gap-y-[41px]"
            >
              {HOME_LOGOS.map((logo) => (
                <HomeLogoCard key={logo.name} logo={logo} />
              ))}
            </motion.div>
          )}

          <motion.div
            variants={fadeUp}
            className="mt-8 flex w-full max-w-[640px] items-center gap-4 lg:mt-10"
          >
            <div
              className="h-px flex-1 bg-gradient-to-r from-transparent to-[#cfcfcf]"
              aria-hidden
            />
            <div className="flex shrink-0 items-center gap-[6.7px]">
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
              <p className="whitespace-nowrap text-center text-[14px] font-light leading-5 tracking-[1px] text-[#101116] lg:text-[15px] lg:tracking-[1.33px]">
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
