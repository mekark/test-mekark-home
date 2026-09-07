"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden className="size-4">
      <path
        d="M3 10h13M11 5l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-[#ed1c24]" aria-hidden />
      <p className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-white/70">
        {children}
      </p>
    </div>
  );
}

export function InstitutionHeroSection() {
  return (
    <section className="relative isolate min-h-[760px] overflow-hidden bg-black pt-[60px] lg:min-h-[820px]">
      <Image
        src="/images/institutional/home.jpg"
        alt="Rows of seating in a modern auditorium"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.78)_0%,rgba(0,0,0,.55)_42%,rgba(0,0,0,.08)_100%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,.55)_0%,transparent_45%)]"
        aria-hidden
      />
      <div className="absolute inset-y-0 left-[4%] hidden w-px bg-white/10 lg:block" aria-hidden />
      <div className="absolute inset-y-0 right-[12%] hidden w-px bg-white/10 lg:block" aria-hidden />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex min-h-[684px] w-full max-w-[1440px] flex-col justify-center px-5 py-20 sm:min-h-[732px] sm:px-8 lg:pl-[4%] lg:pr-[8%]"
      >
        <motion.div variants={fadeUp}>
          <Eyebrow>Institutional construction</Eyebrow>
        </motion.div>
        <motion.h1
          variants={fadeUp}
          className="mt-7 max-w-[560px] text-[clamp(2.2rem,5vw,4.75rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-white sm:max-w-none"
        >
          <span className="sm:whitespace-nowrap">Institutional Construction</span>
          <span className="block text-[#ed1c24]">Auditoriums &amp; Stadiums</span>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mt-7 max-w-[720px] text-[clamp(1.05rem,1.7vw,1.4rem)] leading-[1.55] text-white/78"
        >
          Engineering spaces built for crowds, performance, and decades of use across South India.
        </motion.p>
        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-3">
          <Link
            href="#institutional-enquiry"
            className="group inline-flex min-h-12 items-center gap-3 rounded-sm bg-[#ed1c24] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#c81017]"
          >
            Discuss your project <ArrowIcon />
          </Link>
          <Link
            href="#engineering"
            className="inline-flex min-h-12 items-center gap-3 rounded-sm border border-white/30 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-white/10"
          >
            Explore our approach
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
