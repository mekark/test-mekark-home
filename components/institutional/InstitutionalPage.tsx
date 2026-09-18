"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, slideFromLeft, slideFromRight, staggerContainer } from "@/lib/motion-variants";

const VIEWPORT = { once: true, margin: "-90px" as const };

const VENUES = [
  {
    number: "01",
    title: "School & college auditoriums",
    copy: "Performance-ready halls planned around sightlines, acoustics, and dependable day-to-day use.",
    image: "/images/industries/12-auditoriums-v3.webp",
    imageAlt: "School and college auditorium with tiered seating",
  },
  {
    number: "02",
    title: "Indoor sports stadiums",
    copy: "Wide-span enclosures that keep the playing area open, flexible, and spectator-friendly.",
    image: "/images/institutional/indoor-sports-stadium.webp",
    imageAlt: "Indoor sports stadium with a wide-span roof and court",
  },
  {
    number: "03",
    title: "Outdoor stadium structures",
    copy: "Weather-resilient stands and lightweight canopies engineered for exposed conditions.",
    image: "/images/institutional/outdoor-stadium.webp",
    imageAlt: "Outdoor stadium spectator stands beneath a covered roof",
  },
  {
    number: "04",
    title: "Community halls",
    copy: "Safe, functional gathering spaces designed for varied public and institutional use.",
    image: "/images/institutional/community-hall.webp",
    imageAlt: "Community gathering in a large public hall",
  },
] as const;

const ENGINEERING = [
  {
    title: "Column-free wide spans",
    copy: "Clear, uninterrupted volumes for better audience sightlines and more adaptable floor plans.",
    icon: "span",
  },
  {
    title: "Acoustic-optimised roofing",
    copy: "Roofing systems considered for the clarity and control demanded by performance spaces.",
    icon: "sound",
  },
  {
    title: "Tensile structures",
    copy: "Lightweight, weatherproof stadium canopies and spectator-stand coverage.",
    icon: "canopy",
  },
  {
    title: "Crowd-safety compliance",
    copy: "Built around applicable IS codes, fire-safety requirements, and seismic standards.",
    icon: "shield",
  },
] as const;

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden className="size-4">
      <path d="M3 10h13M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function EngineeringIcon({ type }: { type: (typeof ENGINEERING)[number]["icon"] }) {
  if (type === "span") {
    return (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden className="size-8">
        <path d="M4 25V13m24 12V13M2 26h28M4 15c6-10 18-10 24 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === "sound") {
    return (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden className="size-8">
        <path d="M6 19h5l7 6V7l-7 6H6v6Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M22 12c2.2 2.2 2.2 5.8 0 8m3-11c3.9 3.9 3.9 10.1 0 14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "canopy") {
    return (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden className="size-8">
        <path d="M3 13c7-6 19-6 26 0-8 1-18 1-26 0Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M7 14v12m18-12v12M4 27h24M16 9V5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden className="size-8">
      <path d="M16 3 27 7v8c0 7-4.4 11.7-11 14-6.6-2.3-11-7-11-14V7l11-4Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="m11 16 3.2 3.2L21.5 12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-[#ed1c24]" aria-hidden />
      <p className={`text-[11px] font-extrabold uppercase tracking-[0.24em] ${light ? "text-white/70" : "text-[#5e646a]"}`}>
        {children}
      </p>
    </div>
  );
}

export function InstitutionalPage() {
  return (
    <main className="overflow-hidden bg-white text-[#151515]">
      <section className="relative isolate min-h-[760px] overflow-hidden bg-black pt-[60px] lg:min-h-[820px]">
        <Image
          src="/images/institutional/home.webp"
          alt="Rows of seating in a modern auditorium"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.94)_0%,rgba(0,0,0,.72)_42%,rgba(0,0,0,.12)_100%)]" aria-hidden />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,.75)_0%,transparent_45%)]" aria-hidden />
        <div className="absolute inset-y-0 left-[8%] hidden w-px bg-white/10 lg:block" aria-hidden />
        <div className="absolute inset-y-0 right-[8%] hidden w-px bg-white/10 lg:block" aria-hidden />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 mx-auto flex min-h-[684px] w-full max-w-[1440px] flex-col justify-center px-5 py-20 sm:min-h-[732px] sm:px-8 lg:px-[8%]"
        >
          <motion.div variants={fadeUp}>
            <Eyebrow light>Institutional construction</Eyebrow>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="mt-7 max-w-[920px] text-[clamp(2.7rem,6.2vw,6rem)] font-extrabold leading-[0.97] tracking-[-0.045em] text-white"
          >
            <span className="sr-only">Institutional Construction — </span>
            Auditoriums
            <span className="block text-[#ed1c24]">&amp; Stadiums</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-7 max-w-[720px] text-[clamp(1.05rem,1.7vw,1.4rem)] leading-[1.55] text-white/78">
            Engineering spaces built for crowds, performance, and decades of use across South India.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-3">
            <Link href="/#enquiry" className="group inline-flex min-h-12 items-center gap-3 rounded-sm bg-[#ed1c24] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#c81017]">
              Discuss your project <ArrowIcon />
            </Link>
            <Link href="#engineering" className="inline-flex min-h-12 items-center gap-3 rounded-sm border border-white/30 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-white/10">
              Explore our approach
            </Link>
          </motion.div>
        </motion.div>

      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-[8%] lg:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <motion.div variants={slideFromLeft} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
            <Eyebrow>Built for people at scale</Eyebrow>
            <h2 className="mt-6 max-w-[520px] text-[clamp(2.1rem,4vw,4.25rem)] font-extrabold leading-[1.02] tracking-[-0.045em]">
              Spaces that work <span className="text-[#ed1c24]">from every seat.</span>
            </h2>
          </motion.div>
          <motion.div variants={slideFromRight} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="border-l-2 border-[#ed1c24] pl-6 sm:pl-9">
            <p className="text-[clamp(1.05rem,1.45vw,1.35rem)] leading-[1.75] text-[#333]">
              Mekark is a trusted institutional construction company in South India, delivering school and college auditoriums, indoor sports stadiums, outdoor stadium structures, and community halls across{" "}
              <strong className="font-extrabold text-[#ed1c24]">
                Tamil Nadu, Karnataka, Andhra Pradesh, Telangana, and Kerala
              </strong>
              , including{" "}
              <strong className="font-extrabold text-[#ed1c24]">
                Chennai, Coimbatore, Bengaluru, Hyderabad, and Kochi
              </strong>
              .
            </p>
          </motion.div>
        </div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="mx-auto mt-16 grid max-w-[1440px] gap-4 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
          {VENUES.map((venue) => (
            <motion.article key={venue.number} variants={fadeUp} className="group overflow-hidden rounded-[18px] border border-black/10 bg-[#f7f7f5] transition-transform duration-300 hover:-translate-y-1">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={venue.image}
                  alt={venue.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" aria-hidden />
                <span className="absolute top-4 left-4 flex size-10 items-center justify-center rounded-full bg-[#ed1c24] text-[11px] font-extrabold tracking-[0.14em] text-white shadow-lg">
                  {venue.number}
                </span>
              </div>
              <div className="p-7">
                <div className="mb-5 h-px w-10 bg-[#ed1c24]" aria-hidden />
                <h3 className="text-xl font-extrabold leading-tight">{venue.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#60646a]">{venue.copy}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section id="engineering" className="relative isolate overflow-hidden bg-[#101112] text-white">
        <div className="grid min-h-[720px] lg:grid-cols-2">
          <motion.div variants={slideFromLeft} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="relative min-h-[440px] overflow-hidden lg:min-h-full">
            <Image src="/images/institutional/tensile-stadium-roof.webp" alt="Tensile membrane stadium roof and steel support structure" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" aria-hidden />
            <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between border-t border-white/30 pt-4 sm:bottom-10 sm:left-10 sm:right-10">
              <p className="max-w-[300px] text-xs font-semibold uppercase tracking-[0.18em] text-white/75">Lightweight structure. Serious performance.</p>
              <span className="text-5xl font-extrabold text-white/18">01</span>
            </div>
          </motion.div>

          <motion.div variants={slideFromRight} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="flex flex-col justify-center px-5 py-20 sm:px-10 lg:px-16 lg:py-24 xl:px-24">
            <Eyebrow light>Engineering priorities</Eyebrow>
            <h2 className="mt-6 text-[clamp(2.1rem,4vw,4rem)] font-extrabold leading-[1.03] tracking-[-0.04em]">Designed around the experience. Engineered around the load.</h2>
            <p className="mt-6 max-w-[640px] text-base leading-7 text-white/62">
              Every auditorium and stadium structure is engineered with column-free wide spans for clear sightlines, acoustic-optimised roofing, and tensile structures for lightweight, weatherproof stadium canopies and spectator stands, all built to crowd-safety compliance under IS codes, fire safety, and seismic standards.
            </p>
            <div className="mt-10 grid gap-px border-y border-white/12 bg-white/12 sm:grid-cols-2">
              {ENGINEERING.map((item) => (
                <div key={item.title} className="group bg-[#101112] px-1 py-7 sm:p-7">
                  <div className="text-[#ed1c24]"><EngineeringIcon type={item.icon} /></div>
                  <h3 className="mt-5 text-base font-extrabold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/55">{item.copy}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative bg-[#ed1c24] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-[8%]">
        <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:48px_48px]" aria-hidden />
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="relative mx-auto max-w-[1440px]">
          <motion.p variants={fadeUp} className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-white/70">Across South India</motion.p>
          <div className="mt-6 grid items-end gap-10 lg:grid-cols-[1fr_auto]">
            <motion.h2 variants={fadeUp} className="max-w-[1020px] text-[clamp(2.2rem,5.5vw,5.4rem)] font-extrabold leading-[0.98] tracking-[-0.045em]">
              Precision engineering for spaces that bring communities together.
            </motion.h2>
            <motion.div variants={fadeUp} className="lg:pb-2">
              <Link href="/#enquiry" className="inline-flex min-h-14 items-center gap-3 bg-white px-7 py-4 text-sm font-extrabold text-[#171717] transition-transform hover:-translate-y-0.5">
                Start a conversation <ArrowIcon />
              </Link>
            </motion.div>
          </div>
          <motion.p variants={fadeUp} className="mt-10 max-w-[940px] text-base leading-8 text-white/82 sm:text-lg">
            From auditorium construction to stadium structure and tensile roofing design, Mekark brings the same precision engineering from our industrial projects into every institutional build across South India—safe, functional, and built to last.
          </motion.p>
        </motion.div>
      </section>
    </main>
  );
}
