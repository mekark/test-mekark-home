"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  industryHeroMobileBgWrapperClass,
  industryHeroMobileButtonClass,
  industryHeroMobileButtonTextClass,
  industryHeroMobileContentPadClass,
  industryHeroMobileContentWrapperClass,
  industryHeroMobileDescriptionClass,
  industryHeroMobileGradientStyle,
  industryHeroMobileImageClass,
  industryHeroMobileSectionClass,
  industryHeroMobileStackClass,
  industryHeroMobileTitleClass,
} from "@/components/industries/shared/industryHeroMobile";

export default function HeroSection() {
  return (
    <section
      className={`relative flex min-h-[640px] items-start overflow-hidden md:items-center lg:min-h-[900px] ${industryHeroMobileSectionClass}`}
    >
      <div
        className={`absolute inset-0 z-0 overflow-hidden ${industryHeroMobileBgWrapperClass}`}
      >
        <Image
          src="/images/industries/textile/hero/herobg.png"
          alt="Textile mill interior with yarn spinning machinery"
          sizes="100vw"
          fill
          priority
          className={`object-cover object-right ${industryHeroMobileImageClass}`}
        />
      </div>
      <div
        className="absolute inset-0 z-[1] md:hidden"
        style={industryHeroMobileGradientStyle}
        aria-hidden
      />
      <div
        className="absolute inset-0 z-[1] hidden bg-textile-hero-glow md:block"
        aria-hidden
      />

      <div
        className={`relative z-10 mx-auto w-full max-w-[1920px] px-5 py-16 sm:px-10 lg:px-20 lg:py-0 ${industryHeroMobileContentPadClass} ${industryHeroMobileContentWrapperClass}`}
      >
        <div
          className={`flex max-w-[1192px] flex-col items-start gap-[22px] sm:gap-[22px] ${industryHeroMobileStackClass}`}
        >
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`max-w-[342px] font-[family-name:var(--font-manrope)] text-[25px] font-bold leading-[100%] text-white sm:max-w-none sm:text-5xl sm:leading-[1.2] lg:text-[60px] lg:leading-[1.23] ${industryHeroMobileTitleClass}`}
          >
            Leading Textile Mill & Factory Building Contractor in South India
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`max-w-[342px] font-[family-name:var(--font-manrope)] text-[#F3F3F3] sm:max-w-[1090px] sm:text-lg sm:leading-[33.333px] lg:text-2xl ${industryHeroMobileDescriptionClass}`}
          >
            Mekark is South India&apos;s trusted textile factory building
            contractor, constructing spinning mills, weaving sheds, garment
            factories, and dyeing & processing plants with ISO-certified PEB
            and civil construction, backed by 18+ years of experience and 200+
            delivered projects.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/#enquiry"
              className={`inline-flex items-center justify-center gap-[7.1px] rounded-[5.65px] bg-firebrick px-5 py-2.5 shadow-[0px_5.652px_22.61px_rgba(196,22,28,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-mekark-red hover:shadow-[0px_10.667px_28px_rgba(196,22,28,0.5)] active:translate-y-0 max-md:gap-1.5 max-md:px-4 max-md:py-2 sm:w-fit sm:gap-[13.333px] sm:rounded-[8px] sm:px-8 sm:py-4 sm:shadow-[0px_10.667px_21.333px_rgba(196,22,28,0.3)] lg:px-16 lg:py-[29.333px] lg:text-[32px] sm:text-xl ${industryHeroMobileButtonClass}`}
            >
              <span
                className={`${industryHeroMobileButtonTextClass} max-md:text-xs max-md:leading-[14px] max-md:font-medium`}
              >
                Request Free Quote
              </span>
              <span className="relative shrink-0 overflow-hidden max-md:h-2.5 max-md:w-2.5 size-4 lg:size-[18px]">
                <Image
                  src="/images/industries/textile/hero/arrow.svg"
                  alt=""
                  width={18}
                  height={18}
                  className="size-full"
                />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
