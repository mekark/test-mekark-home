"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const features = [
  {
    title: "Industry-Specific Engineering Expertise",
    desc: "We understand load calculations, humidification, ETP, and fire standards unique to textile mills, not just another warehouse contractor.",
    icon: "/images/industries/textile/why-mekark/cog-icon.svg",
  },
  {
    title: "Large-Scale PEB Manufacturing Capacity",
    desc: "With 40,000 MT/year PEB construction capacity across a x lakh+ sq.ft. campus and x+ engineers, we guarantee your spinning or weaving factory opens on time.",
    icon: "/images/industries/textile/why-mekark/factory-icon.svg",
  },
  {
    title: "One-Stop Textile Construction Solution",
    desc: "From civil, structural steel, and MEP works to ETP installation and complete fit-outs, all under one roof.",
    icon: "/images/industries/textile/why-mekark/layers-icon.svg",
  },
  {
    title: "ISO Certified & Compliance-Ready",
    desc: "All our textile factory buildings comply with the Factories Act, Fire NOC, Pollution Control Board, and Green Building norms from day one.",
    icon: "/images/industries/textile/why-mekark/badge-check-icon.svg",
  },
];

function FeatureIcon({ icon }: { icon: string }) {
  return (
    <div className="relative flex size-14 shrink-0 items-center justify-center rounded-[14px] shadow-[0px_4.314px_17.258px_rgba(196,22,28,0.2)]">
      <div
        aria-hidden
        className="absolute inset-0 rounded-[14px]"
        style={{
          backgroundImage:
            "linear-gradient(145deg, rgba(196, 22, 28, 0.3) 0%, rgba(196, 22, 28, 0.15) 100%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 rounded-[14px] shadow-[inset_0px_1.079px_0px_rgba(255,255,255,0.08)]" />
      <span className="relative size-[26px] shrink-0 overflow-hidden">
        <Image
          src={icon}
          alt=""
          width={26}
          height={26}
          className="size-full object-contain"
        />
      </span>
    </div>
  );
}

export default function WhyMekarkSection() {
  return (
    <section id="why-mekark" className="relative w-full overflow-hidden bg-[#F6F6F6] text-black">
      <div className="mx-auto w-full max-w-[1920px] px-5 pt-10 sm:px-10 lg:px-20 lg:pt-[40px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative flex min-h-[220px] flex-col gap-6 rounded-[24px] bg-[linear-gradient(123.5deg,#F01C22_6.54%,#8B0C11_108.89%)] px-5 py-8 sm:px-8 lg:h-[295px] lg:flex-row lg:items-center lg:gap-8 lg:rounded-[40px] lg:px-0 lg:py-0"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute left-[154px] top-[38px] hidden size-[180px] lg:block"
          >
            <Image
              src="/images/industries/textile/why-mekark/cta-deco-76.svg"
              alt=""
              width={180}
              height={180}
              className="size-full"
            />
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute left-[58px] top-[51px] hidden h-[213px] w-[317px] lg:block"
          >
            <Image
              src="/images/industries/textile/why-mekark/cta-deco-275.svg"
              alt=""
              width={317}
              height={213}
              className="size-full"
            />
          </div>

          <div className="pointer-events-none absolute left-[-10px] top-[-28px] hidden h-[323px] w-[491px] overflow-hidden lg:block z-10">
            <Image
              src="/images/industries/textile/why-mekark/cta-engineer-photo.png"
              alt="Mekark engineer reviewing project plans on a tablet"
              width={1046}
              height={1263}
              className="absolute left-[10.55%] top-0 h-[144.52%] w-[78.89%] max-w-none"
            />
          </div>

          <div className="hidden shrink-0 lg:block lg:w-[437px]" />

          <div className="relative z-[11] flex min-w-0 flex-1 flex-col gap-3 text-white lg:pr-6">
            <h2 className="max-w-[860px] font-[family-name:var(--font-manrope)] text-[22px] font-extrabold leading-[1.33] sm:text-[28px] lg:text-[38px]">
              Planning a Spinning Mill or Garment Factory? Your Project Slot
              Won&apos;t Stay Open Long.
            </h2>
            <p className="max-w-[860px] font-[family-name:var(--font-manrope)] text-sm font-medium leading-[1.22] tracking-[0.08em] text-[#CCC6C6] sm:text-base lg:text-[18.667px]">
              Mekark&apos;s project calendar fills up fast. Textile manufacturers
              who book a site consultation now lock in priority scheduling,
              current steel pricing, and our fastest delivery timeline.
            </p>
          </div>

          <div className="relative z-[11] shrink-0 lg:pr-10 xl:pr-14">
            <Link
              href="/#enquiry"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-[30px] py-5 text-base font-bold text-[#0E0E0E] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90 sm:text-[22px]"
            >
              Book My Free Consultation
              <span className="relative size-[27px] shrink-0 overflow-hidden">
                <Image
                  src="/images/industries/textile/why-mekark/cta-arrow.svg"
                  alt=""
                  width={27}
                  height={27}
                  className="size-full"
                />
              </span>
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="relative mx-auto w-full max-w-[1920px] pb-12 pt-12 lg:pb-[64px] lg:pt-[80px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-[1452px] flex-col items-center gap-3 px-5 text-center sm:px-10"
        >
          <h2 className="font-[family-name:var(--font-manrope)] text-[28px] font-bold leading-normal text-[#111111] sm:text-[36px] lg:whitespace-nowrap lg:text-[50px]">
            Why Textile Factories from Mekark Are the Better Choice
          </h2>
          <p className="max-w-[982px] font-[family-name:var(--font-manrope)] text-base font-normal leading-normal text-[#6E6E6E] lg:text-[18px]">
            Construction of spinning mills and garment manufacturing units is a
            multi-crore project; delays mean lost production days, and unmet
            specifications mean costly rework.
          </p>
        </motion.div>

        <div className="relative mt-8 lg:mt-[30px] lg:min-h-[520px]">
          <div className="pointer-events-none absolute right-0 top-0 hidden h-[520px] w-[856px] lg:block">
            <div className="absolute left-[-426px] top-0 h-[520px] w-[1282px] overflow-hidden">
              <Image
                src="/images/industries/textile/why-mekark/factory.png"
                alt="Textile mill spinning machinery with yarn cones"
                width={1066}
                height={723}
                sizes="1066px"
                className="absolute bottom-[-40px] right-0 h-[723px] w-[1066px] max-w-none object-cover"
              />
            </div>
            <div
              aria-hidden
              className="absolute left-[-427px] top-0 h-[520px] w-[1261px]"
              style={{
                backgroundImage:
                  "linear-gradient(269.15deg, rgba(246, 246, 246, 0) 30.42%, #F6F6F6 64.17%)",
              }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative z-10 grid grid-cols-1 gap-x-12 gap-y-10 px-5 sm:grid-cols-2 sm:px-10 lg:grid-cols-[342px_399px] lg:gap-x-[110px] lg:pl-[200px] lg:pr-8 lg:pt-[72px]"
          >
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col items-start gap-[19px]"
              >
                <FeatureIcon icon={feature.icon} />
                <div className="flex flex-col gap-2.5">
                  <h3 className="font-[family-name:var(--font-manrope)] text-[18px] font-semibold leading-[21.57px] text-black">
                    {feature.title}
                  </h3>
                  <p className="font-[family-name:var(--font-manrope)] text-[14px] font-normal leading-normal text-[#6E6E6E]">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          <div className="relative mx-5 mt-10 h-[260px] overflow-hidden rounded-[20px] sm:mx-10 sm:h-[360px] lg:hidden">
            <Image
              src="/images/industries/textile/why-mekark/factory.png"
              alt="Textile mill spinning machinery with yarn cones"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
