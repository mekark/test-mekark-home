"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
  fadeUp,
  scaleIn,
  staggerContainer,
} from "@/lib/motion-variants";
import { SECTION_CONTAINER_CLASS } from "@/lib/sectionLayout";

const VIEWPORT = { once: true, margin: "-80px" as const };

const MOBILE_LOGO_STAGGER: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.045, delayChildren: 0.04 },
  },
};

const MOBILE_LOGO_REVEAL: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] },
  },
};

const DESKTOP_LOGO_STAGGER: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.055, delayChildren: 0.06 },
  },
};

const MOBILE_SECTION_STAGGER: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
};

const HOME_LOGOS = [
  {
    name: "Tata",
    src: "/images/trusted-sectors/tata.webp",
    className: "h-[47px] w-[60px]",
    imageClassName:
      "absolute h-[151%] w-[209%] max-w-none object-cover left-[-52%] top-[-26%]",
    crop: true,
  },
  {
    name: "D Mart",
    src: "/images/trusted-sectors/dmart.webp",
    className: "h-[28px] w-[75px]",
    imageClassName:
      "absolute h-[270%] w-[133%] max-w-none object-cover left-[-17%] top-[-81%]",
    crop: true,
  },
  {
    name: "Komatsu",
    src: "/images/trusted-sectors/komatsu.webp",
    className: "h-[52px] w-[107px]",
    objectFit: "cover" as const,
  },
  {
    name: "Bosch",
    src: "/images/trusted-sectors/bosch.webp",
    className: "h-[63px] w-[112px]",
    objectFit: "cover" as const,
  },
  {
    name: "Danfoss",
    src: "/images/trusted-sectors/danfoss.webp",
    className: "h-[50px] w-[90px]",
    objectFit: "cover" as const,
  },
  {
    name: "TVS",
    src: "/images/trusted-sectors/tvs.webp",
    className: "size-[75px]",
    objectFit: "cover" as const,
  },
  {
    name: "Nokia",
    src: "/images/trusted-sectors/nokia.webp",
    className: "h-[32px] w-[104px]",
    imageClassName:
      "absolute h-[330%] w-full max-w-none object-cover left-0 top-[-116%]",
    crop: true,
  },
  {
    name: "Kryolan",
    src: "/images/trusted-sectors/kryolan.webp",
    className: "h-[80px] w-[136px]",
    imageClassName:
      "absolute h-[215%] w-[126%] max-w-none object-cover left-[-12%] top-[-58%]",
    crop: true,
  },
  {
    name: "Reliance Industries Limited",
    src: "/images/trusted-sectors/reliance.webp",
    className: "h-[60px] w-[95px]",
    objectFit: "cover" as const,
  },
  {
    name: "Sobha",
    src: "/images/trusted-sectors/sobha.webp",
    className: "size-[75px]",
    imageClassName:
      "absolute h-[149%] w-[161%] max-w-none object-cover left-[-34%] top-[-24%]",
    crop: true,
  },
  {
    name: "SRM",
    src: "/images/trusted-sectors/srm.webp",
    className: "h-[66px] w-[71px]",
    imageClassName:
      "absolute h-[141%] w-[131%] max-w-none object-cover left-[-18%] top-[-19%]",
    crop: true,
  },
  {
    name: "L&T",
    src: "/images/trusted-sectors/l-and-t.webp",
    className: "h-[77px] w-[75px]",
    objectFit: "contain" as const,
  },
  {
    name: "Agile",
    src: "/images/trusted-sectors/agile.webp",
    className: "h-[57px] w-[75px]",
    objectFit: "cover" as const,
  },
  {
    name: "Blue Star",
    src: "/images/trusted-sectors/blue-star.webp",
    className: "h-[25px] w-[124px]",
    objectFit: "cover" as const,
  },
] as const;

type HomeLogo = (typeof HOME_LOGOS)[number];

/** Figma mobile logo crops — node 7398:11232 */
const MOBILE_LOGO_SPECS = [
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
  },
  {
    name: "Kryolan",
    src: "/images/trusted-sectors/kryolan.webp",
    wrapperClass: "h-[53.536px] w-[91.628px]",
    imageClassName:
      "absolute h-[214.9%] w-[125.56%] max-w-none left-[-11.8%] top-[-58.17%] object-cover",
  },
  {
    name: "Reliance Industries Limited",
    src: "/images/trusted-sectors/reliance.webp",
    wrapperClass: "h-[43px] w-[68px]",
    imageClassName: "absolute inset-0 h-full w-full object-cover",
  },
  {
    name: "Sobha",
    src: "/images/trusted-sectors/sobha.webp",
    wrapperClass: "size-[53px]",
    imageClassName:
      "absolute h-[149.25%] w-[161.29%] max-w-none left-[-33.87%] top-[-23.88%] object-cover",
  },
  {
    name: "SRM",
    src: "/images/trusted-sectors/srm.webp",
    wrapperClass: "h-[50px] w-[55px]",
    imageClassName:
      "absolute h-[141.46%] w-[130.7%] max-w-none left-[-17.54%] top-[-19.3%] object-cover",
  },
  {
    name: "L&T",
    src: "/images/trusted-sectors/l-and-t.webp",
    wrapperClass: "h-[57px] w-[55px]",
    imageClassName: "absolute inset-0 h-full w-full object-contain",
  },
  {
    name: "Agile",
    src: "/images/trusted-sectors/agile.webp",
    wrapperClass: "h-[47px] w-[61px]",
    imageClassName: "absolute inset-0 h-full w-full object-cover",
  },
  {
    name: "Blue Star",
    src: "/images/trusted-sectors/blue-star.webp",
    wrapperClass: "h-[18px] w-[89px]",
    imageClassName: "absolute inset-0 h-full w-full object-cover",
  },
] as const;

type MobileLogoSpec = (typeof MOBILE_LOGO_SPECS)[number];

type TrustedSectorsSectionProps = {
  variant?: "home" | "services";
  /** When true, render desktop layout only (mobile handled elsewhere). */
  desktopOnly?: boolean;
};

function getMobileLogoCellClass(index: number, total: number) {
  const remainder = total % 3;
  if (remainder === 0) return "";

  const tailStart = total - remainder;
  if (index < tailStart) return "";

  if (remainder === 1) return "col-start-2";
  if (index === tailStart) {
    return "col-start-1 justify-self-end mr-[7.33px]";
  }
  return "col-start-2 justify-self-start ml-[7.33px]";
}

function MobileLogoCard({
  logo,
  className = "",
}: {
  logo: MobileLogoSpec;
  className?: string;
}) {
  return (
    <motion.div
      variants={MOBILE_LOGO_REVEAL}
      className={`flex h-[65px] w-full max-w-[100px] items-center justify-center overflow-hidden rounded-[12px] border border-black/5 bg-white ${className}`}
    >
      <div className={`relative overflow-hidden ${logo.wrapperClass}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo.src} alt={logo.name} className={logo.imageClassName} />
      </div>
    </motion.div>
  );
}

function MobileLogoGrid({ logos }: { logos: readonly MobileLogoSpec[] }) {
  return (
    <motion.div
      variants={MOBILE_LOGO_STAGGER}
      className="grid w-full grid-cols-3 justify-items-center gap-x-[14.67px] gap-y-[14px]"
    >
      {logos.map((logo, index) => (
        <MobileLogoCard
          key={logo.name}
          logo={logo}
          className={getMobileLogoCellClass(index, logos.length)}
        />
      ))}
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
      className="relative flex h-[72px] w-full items-center justify-center overflow-hidden rounded-[10px] border border-black/5 bg-white px-2 py-2 sm:h-[92px] sm:rounded-[15px] sm:px-3 lg:h-[122px] lg:px-0 lg:py-0 xl:h-[92px] 2xl:h-[122px]"
    >
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
  desktopOnly = false,
}: TrustedSectorsSectionProps) {
  const isServices = variant === "services";
  const logos = isServices ? HOME_LOGOS.slice(0, 7) : HOME_LOGOS;
  const mobileLogos = isServices
    ? MOBILE_LOGO_SPECS.slice(0, 7)
    : MOBILE_LOGO_SPECS;

  return (
    <section
      className={`relative w-full bg-[#fdebeb] ${desktopOnly ? "hidden lg:block" : ""}`}
    >
      <div
        className={`${SECTION_CONTAINER_CLASS} max-lg:px-4 max-lg:py-8 py-10 lg:py-14`}
      >
        {!desktopOnly && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={MOBILE_SECTION_STAGGER}
            className="mx-auto flex w-full max-w-[358px] flex-col items-center gap-6 rounded-[28px] bg-[#fcfcfc] px-[14px] py-6 shadow-[0px_0px_20px_rgba(0,0,0,0.1)] lg:hidden"
          >
            <motion.h2
              variants={fadeUp}
              className="w-full text-center font-[family-name:var(--font-manrope)] text-[28px] font-bold leading-8 text-[#111]"
            >
              <span className="block">Trusted Across</span>
              <span className="block text-[#e50818]">
                Industrial &amp; Commercial Sectors
              </span>
            </motion.h2>

            <MobileLogoGrid logos={mobileLogos} />

            <motion.div
              variants={fadeUp}
              className="flex w-full flex-col items-center gap-[3px]"
            >
              <Image
                src="/images/trusted-sectors/shield-tick.svg"
                alt=""
                width={12}
                height={15}
                className="h-[14.571px] w-3 shrink-0 object-contain"
                aria-hidden
              />
              <div className="flex w-full items-center justify-center gap-3 px-[25px]">
                <div className="h-px w-7 shrink-0 bg-[#cfcfcf]" aria-hidden />
                <p className="max-w-[246px] text-center font-[family-name:var(--font-manrope)] text-xs font-normal leading-5 tracking-[1px] text-[#101116]">
                  Built on Trust. Delivering Excellence.
                </p>
                <div className="h-px w-7 shrink-0 bg-[#cfcfcf]" aria-hidden />
              </div>
            </motion.div>
          </motion.div>
        )}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={staggerContainer}
          className={`${desktopOnly ? "flex" : "hidden lg:flex"} ${
            isServices
              ? "relative mx-auto w-full max-w-[1707px] flex-col items-center overflow-hidden rounded-[30px] bg-[#fcfcfc] px-4 py-10 shadow-[0px_0px_20px_rgba(0,0,0,0.1)] sm:px-8 lg:rounded-[40px] lg:px-10 lg:py-[42px]"
              : "relative mx-auto w-full max-w-[1280px] flex-col items-center overflow-hidden rounded-[30px] bg-[#fcfcfc] px-5 py-10 shadow-[0px_0px_15px_rgba(0,0,0,0.1)] sm:px-8 lg:rounded-[40px] lg:px-10 lg:py-[42px]"
          }`}
        >
          <motion.h2
            variants={fadeUp}
            className={
              isServices
                ? "max-w-[1023px] text-center text-[clamp(1.5rem,4vw,2.5rem)] font-bold leading-[1.13] text-[#111] lg:text-[40px] lg:leading-[45.33px] xl:text-[36px] xl:leading-[40px] 2xl:text-[40px] 2xl:leading-[45.33px]"
                : "max-w-[767px] text-center text-[clamp(1.5rem,2.8vw,1.875rem)] font-bold leading-[1.13] text-[#111] lg:text-[30px] lg:leading-[34px] xl:text-[26px] xl:leading-[30px] 2xl:text-[30px] 2xl:leading-[34px]"
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
            variants={DESKTOP_LOGO_STAGGER}
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
                  alt="Verified badge icon"
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
