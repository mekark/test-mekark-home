"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[640px] items-center overflow-hidden lg:min-h-[900px]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/industries/textile/hero/herobg.png"
          alt="Textile mill interior with yarn spinning machinery"
          sizes="100vw"
          fill
          priority
          className="object-cover object-right"
        />
        <div className="absolute inset-0 bg-textile-hero-glow" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1920px] px-5 py-16 sm:px-10 lg:px-20 lg:py-0">
        <div className="flex max-w-[1192px] flex-col items-start gap-[22px]">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-[family-name:var(--font-manrope)] text-[32px] font-bold text-white sm:text-5xl lg:text-[60px] lg:leading-normal"
          >
            Leading Textile Mill & Factory Building Contractor in South India
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-[1090px] font-[family-name:var(--font-manrope)] text-base font-normal text-[#F3F3F3] sm:text-lg lg:text-2xl lg:leading-[33.333px]"
          >
            Mekark is South India&apos;s trusted textile factory building
            contractor, constructing spinning mills, weaving sheds, garment
            factories, and dyeing & processing plants with ISO-certified PEB
            and civil construction, backed by x+ years of experience and x+
            delivered projects.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/#enquiry"
              className="inline-flex items-center justify-center gap-[13.333px] rounded-lg bg-firebrick px-8 py-4 text-base font-extrabold text-[#F8F5F2] shadow-[0px_10.667px_21.333px_rgba(196,22,28,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-mekark-red hover:shadow-[0px_10.667px_28px_rgba(196,22,28,0.5)] active:translate-y-0 sm:text-xl lg:px-16 lg:py-[29.333px] lg:text-[32px]"
            >
              Request Free Quote
              <span className="relative size-5 shrink-0 overflow-hidden lg:size-6">
                <Image
                  src="/images/industries/textile/hero/arrow.svg"
                  alt=""
                  width={24}
                  height={24}
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
