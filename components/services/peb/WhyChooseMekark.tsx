"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { SERVICE_WHY_CHOOSE_FEATURE_BODY_CLASS_SCALED } from "@/components/services/serviceTypography";
import { SERVICE_WHY_CHOOSE_ASPECT_CLASS_SCALED } from "@/lib/sectionLayout";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const staggerBenefits = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const benefitReveal = {
  hidden: (direction: number) => ({
    opacity: 0,
    x: direction * 36,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

type Benefit = {
  number: string;
  title: ReactNode;
  description: ReactNode;
};

const leftBenefits: Benefit[] = [
  {
    number: "01",
    title: "Turnkey Execution:",
    description: (
      <>
        From structural design to{" "}
        <br className="hidden lg:inline" />
        fabrication to erection, a single point of accountability for your
        entire industrial construction project.
      </>
    ),
  },
  {
    number: "03",
    title: (
      <>
        In-House Engineering{" "}
        <br className="hidden lg:inline" />
        Team:
      </>
    ),
    description: (
      <>
        175+ engineers using ETABS,{" "}
        <br className="hidden lg:inline" />
        AutoCAD, and STAAD. Pro. Tekla{" "}
        <br className="hidden lg:inline" />
        ensure every structure is precision-designed and construction-ready.
      </>
    ),
  },
  {
    number: "05",
    title: (
      <>
        18+ Years of Industry{" "}
        <br className="hidden lg:inline" />
        Experience:
      </>
    ),
    description:
      "A proven track record across factory buildings, warehouses, industrial sheds, and multi-storey steel structures.",
  },
];

const rightBenefits: Benefit[] = [
  {
    number: "02",
    title: "Highest-Capacity Manufacturing in Tamil Nadu:",
    description:
      "40,000-MT production capability across an 70 lakh sq. ft. P means faster turnaround without compromising quality.",
  },
  {
    number: "04",
    title: "ISO & Green Certified:",
    description:
      "Consistent quality, safety, and sustainability compliance across every project.",
  },
  {
    number: "06",
    title: "Faster, Cost-Effective Builds:",
    description: (
      <>
        PEB construction typically cuts timelines significantly versus
        conventional RCC,{" "}
        <br className="hidden lg:inline" />
        without sacrificing durability.
      </>
    ),
  },
];

const allBenefits = [
  leftBenefits[0],
  rightBenefits[0],
  leftBenefits[1],
  rightBenefits[1],
  leftBenefits[2],
  rightBenefits[2],
];

function BenefitItem({
  benefit,
  direction,
}: {
  benefit: Benefit;
  direction: number;
}) {
  return (
    <motion.article
      className="flex min-h-0 items-start gap-0 sm:min-h-[164px]"
      variants={benefitReveal}
      custom={direction}
    >
      <p className="w-fit shrink-0 pr-1 font-[family-name:var(--font-montserrat)] text-[clamp(2rem,10vw,5rem)] font-black leading-none text-[#CC1020] sm:text-[clamp(2.75rem,4.167vw,5rem)] sm:leading-[clamp(3.25rem,5.069vw,6.083rem)]">
        {benefit.number}
      </p>

      <div
        className="flex h-[72px] min-h-[64px] shrink-0 items-center pt-1 pr-3 pl-0.5 sm:h-[92px] sm:min-h-[84px] sm:pr-4"
        aria-hidden="true"
      >
        <span className="block h-full min-h-[64px] w-[1.33px] bg-[rgba(204,16,32,0.4)] sm:min-h-[80px]" />
      </div>

      <div className="min-w-0 flex-1 pt-0">
        <h3 className="font-[family-name:var(--font-montserrat)] text-[clamp(0.9375rem,0.972vw,1.167rem)] font-bold leading-[1.35] text-[#3C3938] sm:leading-[1.44]">
          {benefit.title}
        </h3>
        <p className={`mt-1.5 sm:mt-2 lg:mt-3 ${SERVICE_WHY_CHOOSE_FEATURE_BODY_CLASS_SCALED}`}>
          {benefit.description}
        </p>
      </div>
    </motion.article>
  );
}

export default function WhyChooseMekark() {
  return (
    <section
      className="relative isolate w-full overflow-hidden bg-[#E6E6E6] text-[#111111]"
      aria-labelledby="why-choose-mekark-title"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(266deg,#fff_0%,rgba(255,255,255,0)_100%)]"
        aria-hidden="true"
      />

      <div className={`relative z-10 mx-auto w-full max-w-[1920px] px-5 py-10 sm:px-10 sm:py-14 lg:px-0 lg:py-0 ${SERVICE_WHY_CHOOSE_ASPECT_CLASS_SCALED}`}>
        {/* Site backdrop — Figma: 1920×1032 @ top -17.33 */}
        <Image
          src="/images/services/peb/why-choose/construction-site.webp"
          alt="Active PEB construction site managed by Mekark"
          fill
          className="pointer-events-none object-cover object-bottom opacity-90 lg:top-[-1.7%]"
          sizes="100vw"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/55 to-white/10"
          aria-hidden="true"
        />

        {/* Header — Figma: 1260 wide, centered (~left 330), top 36 */}
        <motion.header
          className="relative z-20 mx-auto w-full max-w-[1260px] text-center lg:absolute lg:left-1/2 lg:top-[3.55%] lg:w-[65.625%] lg:max-w-none lg:-translate-x-1/2"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
        >
          <h2
            id="why-choose-mekark-title"
            className="text-balance font-[family-name:var(--font-manrope)] text-[clamp(1.75rem,6vw,3.333rem)] font-bold leading-[1.2] sm:text-[clamp(2rem,2.778vw,3.333rem)] sm:leading-[clamp(2.75rem,4.25vw,5.1rem)]"
          >
            <span className="text-[#111111]">Why Industrial Clients </span>
            <span className="text-[#E50818]">Choose Mekark</span>
          </h2>
          <p className="service-section-description mt-2 sm:mt-1">
            <span>
              As a trusted steel building contractor and industrial construction
              company,
            </span>
            <span>
              Mekark brings manufacturing capacity and engineering depth that most
              contractors don&apos;t have in-house.
            </span>
          </p>
        </motion.header>

        {/* Features stage — Figma: 1488×804 @ left 216, top 210.67 */}
        <div className="relative z-10 mt-5 w-full sm:mt-6 lg:absolute lg:left-[11.25%] lg:top-[20.76%] lg:mt-0 lg:h-[79.25%] lg:w-[77.5%]">
          {/* Center portrait — Figma: 846.67×804 @ left 312 within stage */}
          <motion.div
            className="relative mx-auto mb-6 aspect-[847/804] w-full max-w-[min(100%,300px)] overflow-visible sm:mb-8 sm:max-w-[420px] lg:absolute lg:left-[20.97%] lg:top-0 lg:mb-0 lg:aspect-auto lg:h-full lg:w-[56.9%] lg:max-w-none"
            aria-hidden="true"
            initial={{ opacity: 0, y: 35, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/images/services/peb/why-choose/structure-backdrop.webp"
              alt="PEB steel structure backdrop"
              width={627}
              height={665}
              className="pointer-events-none absolute left-1/2 top-[4%] z-0 h-[78%] w-[84%] -translate-x-1/2 object-contain opacity-95 blur-[1px] lg:top-[-18%] lg:h-auto lg:w-[110%]"
              sizes="(max-width: 1023px) 80vw, 720px"
            />
            <Image
              src="/images/services/peb/why-choose/engineer.webp"
              alt="Mekark engineer at PEB construction site"
              width={847}
              height={847}
              className="pointer-events-none absolute inset-0 z-[1] h-full w-full object-contain lg:inset-auto lg:left-1/2 lg:top-[2%] lg:h-[118%] lg:w-auto lg:max-w-none lg:-translate-x-1/2 lg:object-contain"
              sizes="(max-width: 1023px) 90vw, 847px"
            />
          </motion.div>

          {/* Mobile / tablet grid */}
          <motion.div
            className="relative z-10 grid gap-6 sm:grid-cols-2 sm:gap-8 lg:hidden"
            variants={staggerBenefits}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {allBenefits.map((benefit, index) => (
              <BenefitItem
                key={benefit.number}
                benefit={benefit}
                direction={index % 2 === 0 ? -1 : 1}
              />
            ))}
          </motion.div>

          {/* Desktop columns — Figma: left @ 0 w456, right @ 1032 w456, gap 60.67 */}
          <div className="relative z-10 hidden h-full lg:block">
            <motion.div
              className="absolute left-0 top-[8.29%] flex w-[30.65%] flex-col gap-[60.67px]"
              variants={staggerBenefits}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {leftBenefits.map((benefit) => (
                <BenefitItem
                  key={benefit.number}
                  benefit={benefit}
                  direction={-1}
                />
              ))}
            </motion.div>

            <motion.div
              className="absolute left-[69.35%] top-[8.29%] flex w-[30.65%] flex-col gap-[60.67px]"
              variants={staggerBenefits}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {rightBenefits.map((benefit) => (
                <BenefitItem
                  key={benefit.number}
                  benefit={benefit}
                  direction={1}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
