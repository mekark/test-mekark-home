"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  industryHeroMobileBgWrapperClass,
  industryHeroMobileButtonClass,
  industryHeroMobileButtonIconClass,
  industryHeroMobileButtonTextClass,
  industryHeroMobileContentPadClass,
  industryHeroMobileContentWrapperClass,
  industryHeroMobileDescriptionClass,
  industryHeroMobileGradientStyle,
  industryHeroMobileHighlightClass,
  industryHeroMobileImageClass,
  industryHeroMobileSectionClass,
  industryHeroMobileStackClass,
  industryHeroMobileTitleClass,
} from "@/components/industries/shared/industryHeroMobile";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function HeroSection() {
  return (
    <section
      className={`relative min-h-[640px] w-full overflow-hidden md:min-h-[720px] lg:h-[900px] ${industryHeroMobileSectionClass}`}
    >
      <motion.div
        className={`absolute inset-0 overflow-hidden ${industryHeroMobileBgWrapperClass}`}
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] as const }}
      >
        <div className="absolute inset-0 md:-left-[0.01%] md:-top-[0.01%] md:h-full md:w-[117.22%]">
          <Image
            src="/images/industries/electronics/hero/hero-background.png"
            alt="Electronics manufacturing facility with technician assembling circuit boards"
            fill
            priority
            className={`object-cover object-center md:object-[center_20%] ${industryHeroMobileImageClass}`}
            sizes="100vw"
          />
        </div>
      </motion.div>

      <div
        className="absolute inset-0 md:hidden"
        style={industryHeroMobileGradientStyle}
      />
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage:
            "linear-gradient(106deg, rgb(6, 6, 6) 8.58%, rgba(6, 6, 6, 0.8) 44.21%, rgba(6, 6, 6, 0) 76.38%)",
        }}
      />

      <div
        className={`relative z-10 mx-auto flex min-h-[640px] w-full max-w-[1920px] items-start px-5 py-20 md:min-h-[720px] md:items-center sm:px-10 sm:py-24 lg:absolute lg:inset-0 lg:mx-0 lg:min-h-0 lg:max-w-none lg:items-center lg:px-0 lg:py-0 ${industryHeroMobileContentPadClass} ${industryHeroMobileContentWrapperClass}`}
      >
        <motion.div
          className={`flex w-full max-w-[1258px] flex-col items-start gap-5 sm:gap-6 lg:absolute lg:top-1/2 lg:left-[calc(37.5%-10px)] lg:-translate-x-1/2 lg:-translate-y-1/2 ${industryHeroMobileStackClass}`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className={`flex w-full flex-col items-start gap-3 sm:gap-4 lg:gap-[18px] ${industryHeroMobileStackClass}`}
            variants={itemVariants}
          >
            <h1
              className={`w-full max-w-[342px] font-manrope text-[25px] font-bold leading-[100%] text-white sm:max-w-none sm:text-[36px] sm:leading-tight lg:w-[1258px] lg:text-[60px] lg:leading-[normal] ${industryHeroMobileTitleClass}`}
            >
              Leading Electronics Manufacturing Facility Construction Company
              in South India
            </h1>

            <div
              className={`flex w-full max-w-[1090px] items-center border-l-4 border-[#c4161c] bg-white px-3 py-2.5 sm:border-l-[6px] sm:px-4 sm:py-3 md:min-h-[88px] lg:h-[133px] lg:border-l-[10px] lg:px-5 ${industryHeroMobileHighlightClass}`}
            >
              <p className="font-manrope text-[15px] font-bold leading-[1.35] text-[#c4161c] sm:text-[22px] sm:leading-[normal] md:text-[30px] lg:text-[46px]">
                Clean Rooms, ESD-Safe Plants &amp; Precision Infrastructure by
                Mekark
              </p>
            </div>

            <p
              className={`w-full font-manrope text-[#f3f3f3] sm:max-w-none sm:text-base sm:leading-relaxed md:text-lg lg:w-[1258px] lg:text-[24px] lg:leading-[33.333px] ${industryHeroMobileDescriptionClass}`}
            >
              Mekark builds turnkey clean rooms, ESD-safe assembly plants, and
              precision electronics manufacturing facilities across Tamil Nadu,
              Karnataka, Andhra Pradesh, Telangana, and Kerala. Engineered for
              precision. Delivered on time.
            </p>
          </motion.div>

          <motion.a
            href="/#enquiry"
            variants={itemVariants}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className={`inline-flex items-center justify-center gap-[7.1px] rounded-[5.65px] bg-[#c4161c] px-5 py-2.5 shadow-[0px_5.652px_22.61px_rgba(196,22,28,0.3)] transition-colors hover:bg-[#a81217] sm:w-fit sm:gap-[13.333px] sm:rounded-[8px] sm:px-8 sm:py-4 sm:shadow-[0_10.667px_21.333px_rgba(196,22,28,0.3)] lg:px-12 lg:py-6 ${industryHeroMobileButtonClass}`}
          >
            <span className={industryHeroMobileButtonTextClass}>
              Get a Free Consultation
            </span>
            <span
              className={`relative shrink-0 overflow-hidden sm:size-5 lg:size-[21.333px] ${industryHeroMobileButtonIconClass}`}
            >
              <Image
                src="/images/industries/electronics/hero/cta-arrow.svg"
                alt=""
                fill
                className="object-contain"
                aria-hidden
              />
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
