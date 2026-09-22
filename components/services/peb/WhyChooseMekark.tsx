"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import {
  MOBILE_FEATURE_BODY_CLASS,
  MOBILE_FEATURE_NUMBER_CLASS,
  MOBILE_FEATURE_TITLE_CLASS,
  PEB_WHY_CHOOSE_BENEFIT_ROW_CLASS,
  PEB_WHY_CHOOSE_DESCRIPTION_CLASS,
} from "@/components/services/serviceMobileCivilTemplate";
import { SERVICE_WHY_CHOOSE_ASPECT_CLASS_SCALED } from "@/lib/sectionLayout";

const PEB_WHY_CHOOSE_MOBILE_BG =
  "linear-gradient(269.82deg, rgb(255, 255, 255) 35.03%, rgba(255, 255, 255, 0) 99.35%), linear-gradient(90deg, rgb(230, 230, 230), rgb(230, 230, 230))";

const PEB_WHY_CHOOSE_HERO_FADE =
  "linear-gradient(180.23deg, rgba(220, 220, 220, 0) 0.54%, rgba(240, 240, 240, 0.762) 50.05%, rgb(248, 248, 248) 84.11%)";

const PEB_WHY_CHOOSE_PORTRAIT_SIDE_FADE =
  "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)";

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
    title: "Turnkey Execution",
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
        Team
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
        Experience
      </>
    ),
    description:
      "A proven track record across factory buildings, warehouses, industrial sheds, and multi-storey steel structures.",
  },
];

const rightBenefits: Benefit[] = [
  {
    number: "02",
    title: "Highest-Capacity Manufacturing in Tamil Nadu",
    description:
      "40,000-MT production capability across an 70 lakh sq. ft. projects completed means faster turnaround without compromising quality.",
  },
  {
    number: "04",
    title: "ISO & Green Certified",
    description:
      "Consistent quality, safety, and sustainability compliance across every project.",
  },
  {
    number: "06",
    title: "Faster, Cost-Effective Builds",
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

function WhyChooseMekarkMobileHeader() {
  return (
    <motion.header
      className="mx-auto flex w-full flex-col items-center text-center"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.7 }}
    >
      <h2
        id="why-choose-mekark-title"
        className="w-full font-manrope text-[28px] font-bold leading-[35px] text-[#111]"
      >
        <span className="block leading-[35px] text-[#111111]">
          Why Industrial Clients
        </span>
        <span className="block leading-[35px] text-[#E50818]">Choose Mekark</span>
      </h2>
      <p
        className={`${PEB_WHY_CHOOSE_DESCRIPTION_CLASS} mx-auto mt-[14px] max-w-[350px] text-pretty`}
      >
        As a trusted steel building contractor and industrial construction
        company, Mekark brings manufacturing capacity and engineering depth
        that most contractors don&apos;t have in-house.
      </p>
    </motion.header>
  );
}

function WhyChooseMekarkMobilePortrait() {
  return (
    <motion.div
      className="relative -mb-[22px] h-[409px] w-full overflow-hidden rounded-[24px] shadow-[0px_12px_16px_rgba(0,0,0,0.08)]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Figma 7385:821 — blurred PEB steel frame */}
      <div
        className="pointer-events-none absolute top-[-62px] left-[25px] size-[289px] overflow-hidden blur-[2.667px]"
        aria-hidden
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/services/peb/why-choose/structure-backdrop-mobile.png"
          alt=""
          className="absolute top-0 left-[-30.25%] h-full w-[159.06%] max-w-none"
        />
      </div>

      {/* Figma 7385:822 — engineer portrait */}
      <div
        className="pointer-events-none absolute top-[55px] left-0 h-[354px] w-full overflow-hidden"
        style={{
          WebkitMaskImage: PEB_WHY_CHOOSE_PORTRAIT_SIDE_FADE,
          maskImage: PEB_WHY_CHOOSE_PORTRAIT_SIDE_FADE,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/services/peb/why-choose/engineer-mobile.png"
          alt="Mekark engineer at PEB construction site"
          className="absolute top-[-0.85%] left-0 h-[98.87%] w-full max-w-none"
        />
      </div>

      {/* Figma 7385:874 — gradient blend into benefits */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[145px]"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(248,248,248,0) 0%, rgba(248,248,248,0.55) 38%, #f8f8f8 100%)",
        }}
        aria-hidden
      />
    </motion.div>
  );
}

function WhyChooseMekarkMobile() {
  return (
    <div
      className="relative lg:hidden"
      style={{ backgroundImage: PEB_WHY_CHOOSE_MOBILE_BG }}
    >
      {/* Figma 7385:816 — header + portrait, top 26px, gap 14px, 350px column */}
      <div className="relative px-5 pt-[26px] pb-0">
        <div className="relative mx-auto flex w-full max-w-[350px] flex-col gap-[14px]">
          <WhyChooseMekarkMobileHeader />
          <WhyChooseMekarkMobilePortrait />
        </div>
      </div>

      {/* Figma 7385:823–824 — benefits overlap portrait blend (civil pattern) */}
      <div className="relative z-20">
        <motion.div
          className="relative overflow-hidden bg-[#f8f8f8] px-5 pt-2 pb-16"
          variants={staggerBenefits}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-[100px] -translate-y-[58px]"
            style={{ backgroundImage: PEB_WHY_CHOOSE_HERO_FADE }}
            aria-hidden
          />

          {/* Figma 7385:875 — construction site fades in behind list */}
          <div
            className="pointer-events-none absolute bottom-0 left-[-56px] h-[270px] w-[503px] max-w-none"
            aria-hidden
          >
            <Image
              src="/images/services/peb/why-choose/construction-site.webp"
              alt=""
              fill
              className="object-cover object-bottom"
              sizes="503px"
            />
            <div
              className="absolute inset-x-0 top-0 h-[55%]"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, #f8f8f8 0%, rgba(248,248,248,0.75) 32%, rgba(248,248,248,0) 100%)",
              }}
            />
          </div>

          <div className="relative z-10 mx-auto flex w-full max-w-[350px] flex-col">
            {allBenefits.map((benefit, index) => (
              <MobileBenefitItem key={benefit.number} benefit={benefit} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function MobileBenefitItem({
  benefit,
  index,
}: {
  benefit: Benefit;
  index: number;
}) {
  return (
    <motion.article
      className={`${PEB_WHY_CHOOSE_BENEFIT_ROW_CLASS} gap-3 !pr-14`}
      variants={benefitReveal}
      custom={index % 2 === 0 ? -1 : 1}
    >
      <span
        className={`w-[42px] shrink-0 pt-0.5 tabular-nums whitespace-nowrap ${MOBILE_FEATURE_NUMBER_CLASS}`}
      >
        {benefit.number}
      </span>

      <span
        className="w-px shrink-0 self-stretch bg-[rgba(204,16,32,0.4)]"
        aria-hidden
      />

      <div className="flex min-w-0 flex-1 flex-col gap-2 text-left">
        <h3 className={`${MOBILE_FEATURE_TITLE_CLASS} leading-[20px]`}>
          {benefit.title}
        </h3>
        <p className={MOBILE_FEATURE_BODY_CLASS}>{benefit.description}</p>
      </div>
    </motion.article>
  );
}

function DesktopBenefitItem({
  benefit,
  direction,
}: {
  benefit: Benefit;
  direction: number;
}) {
  return (
    <motion.article
      className="relative flex min-h-[164px] w-full items-start"
      variants={benefitReveal}
      custom={direction}
    >
      <p className="shrink-0 whitespace-nowrap pr-1 font-[family-name:var(--font-montserrat)] text-[clamp(2.75rem,4.167vw,5rem)] font-black leading-[clamp(3.25rem,5.069vw,6.083rem)] tracking-[-0.05em] text-[#CC1020]">
        {benefit.number}
      </p>

      <div
        className="flex h-[92px] shrink-0 flex-col items-start justify-center pt-1 pr-[18.67px] pl-0.5"
        aria-hidden="true"
      >
        <div className="min-h-[80px] w-[1.33px] flex-1 bg-[rgba(204,16,32,0.4)]" />
      </div>

      <div className="min-w-0 flex-1 pt-0 lg:max-w-[328px]">
        <h3 className="font-manrope text-[clamp(0.9375rem,0.972vw,1.167rem)] font-bold leading-[1.35] text-[#3c3938]">
          {benefit.title}
        </h3>
        <p className="mt-3 text-base leading-[25.33px] text-[#555]">
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
      <WhyChooseMekarkMobile />

      <div
        className={`relative z-10 mx-auto hidden w-full max-w-[1920px] lg:block ${SERVICE_WHY_CHOOSE_ASPECT_CLASS_SCALED}`}
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(266deg,#fff_0%,rgba(255,255,255,0)_100%)]"
          aria-hidden="true"
        />

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
          <h2 className="text-balance font-[family-name:var(--font-manrope)] text-[clamp(2rem,2.778vw,3.333rem)] font-bold leading-[clamp(2.75rem,4.25vw,5.1rem)]">
            <span className="text-[#111111]">Why Industrial Clients </span>
            <span className="text-[#E50818]">Choose Mekark</span>
          </h2>
          <p className="service-section-description mt-3 sm:mt-1">
            As a trusted steel building contractor and industrial construction
            company, Mekark brings manufacturing capacity and engineering depth
            that most contractors don&apos;t have in-house.
          </p>
        </motion.header>

        {/* Features stage — Figma: 1488×804 @ left 216, top 210.67 */}
        <div className="relative z-10 w-full lg:absolute lg:left-[11.25%] lg:top-[20.76%] lg:h-[79.25%] lg:w-[77.5%]">
          {/* Center portrait — Figma: 846.67×804 @ left 312 within stage */}
          <motion.div
            className="relative lg:absolute lg:left-[20.97%] lg:top-0 lg:h-full lg:w-[56.9%]"
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
              className="pointer-events-none absolute left-1/2 top-[-18%] z-0 h-auto w-[110%] -translate-x-1/2 object-contain opacity-95 blur-[1px]"
              sizes="720px"
            />
            <div
              className="pointer-events-none absolute left-1/2 top-[2%] z-[1] h-[118%] w-full -translate-x-1/2 [mask-image:linear-gradient(to_right,transparent_0,black_8%,black_92%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0,black_8%,black_92%,transparent_100%)]"
            >
              <Image
                src="/images/services/peb/why-choose/engineer.webp"
                alt="Mekark engineer at PEB construction site"
                width={847}
                height={847}
                className="absolute left-1/2 h-full w-auto max-w-none -translate-x-1/2 object-contain"
                sizes="847px"
              />
            </div>
          </motion.div>

          {/* Desktop columns — Figma: left @ 0 w456, right @ 1032 w456, gap 60.67 */}
          <div className="relative z-10 h-full">
            <motion.div
              className="absolute left-0 top-[8.29%] flex w-[30.65%] flex-col gap-[60.67px]"
              variants={staggerBenefits}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {leftBenefits.map((benefit) => (
                <DesktopBenefitItem
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
                <DesktopBenefitItem
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
