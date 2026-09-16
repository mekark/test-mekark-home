"use client";

import { motion } from "framer-motion";
import { SERVICE_WHY_CHOOSE_FEATURE_BODY_CLASS_SCALED } from "@/components/services/serviceTypography";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const features = [
  {
    number: "01",
    title: "Turnkey Project Implementation:",
    description: "Single point of responsibility from start to finish.",
  },
  {
    number: "02",
    title: "Established Credentials:",
    description:
      "Over 200 industrial and commercial RCC construction projects completed, with a 4.7 out of 5 customer rating.",
  },
  {
    number: "03",
    title: "Structural Engineers In-House:",
    description:
      "BIM-based structural analysis ensures that your building is precisely designed and ready for construction.",
  },
  {
    number: "04",
    title: "Exceptional Quality:",
    description:
      "Independent QA, certification testing, and multi-layer waterproofing.",
  },
  {
    number: "05",
    title: "Safe Construction:",
    description: "Modular formwork, safety checks, and clear pricing.",
  },
  {
    number: "06",
    title: "18+ Years of Experience:",
    description:
      "From factories and warehouse construction to multi-storey commercial building construction projects.",
  },
] as const;

type FeatureProps = {
  number: string;
  title: string;
  description: string;
  titleClassName?: string;
  descriptionClassName?: string;
  descriptionWidth?: string;
};

function Feature({
  number,
  title,
  description,
  titleClassName = "leading-6",
  descriptionClassName = "",
  descriptionWidth = "w-full",
  mobile = false,
}: FeatureProps & { mobile?: boolean }) {
  if (mobile) {
    return (
      <motion.div
        variants={fadeUp}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="flex w-full items-start gap-0 text-left"
      >
        <span className="shrink-0 font-montserrat text-[32px] font-black tracking-[-2px] leading-none text-[#cc1020] sm:text-[40px]">
          {number}
        </span>
        <span
          className="ml-1.5 mr-3 mt-1 w-[2px] shrink-0 self-stretch rounded-full bg-[rgba(204,16,32,0.4)] sm:ml-2 sm:mr-4"
          aria-hidden
        />
        <div className="min-w-0 flex-1 pt-0.5">
          <b className="block font-montserrat text-[15px] font-bold leading-[22px] text-darkslategray sm:text-[17px] sm:leading-6">
            {title}
          </b>
          <p className={`mt-1.5 ${SERVICE_WHY_CHOOSE_FEATURE_BODY_CLASS_SCALED}`}>
            {description}
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={fadeUp}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="flex h-num-110 w-full items-start"
    >
      <div className="relative shrink-0 font-montserrat text-num-80 font-black tracking-num--4 leading-num-97_33 text-[#cc1020] pr-1">
        {number}
      </div>
      <div className="flex h-num-92 shrink-0 items-start">
        <div className="box-border flex h-full min-h-num-84 shrink-0 flex-col items-start justify-center pt-num-4 pr-num-18_7 pb-0 pl-0.5">
          <div className="relative min-h-num-80 w-num-1_3 flex-1 bg-[rgba(204,16,32,0.4)]" />
        </div>
      </div>
      <div className="relative min-w-0 flex-1 shrink-0 text-num-18_67 text-darkslategray">
        <div className="absolute top-[-1.3px] right-0 left-0 flex flex-col items-start">
          <b className={`relative font-montserrat font-bold ${titleClassName}`}>
            {title}
          </b>
        </div>
        <div className="absolute top-[34px] right-0 left-0 flex flex-col items-start">
          <div
            className={`relative flex items-center ${descriptionWidth} ${descriptionClassName} ${SERVICE_WHY_CHOOSE_FEATURE_BODY_CLASS_SCALED}`}
          >
            {description}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function WhyClientsChooseMekark() {
  return (
    <section className="relative isolate flex h-auto w-full shrink-0 flex-col items-start overflow-hidden text-center font-manrope text-[53.33px] text-gray-100 [background:linear-gradient(269.25deg,#fff,rgba(255,255,255,0)),linear-gradient(#e6e6e6,#e6e6e6)] lg:h-[1014.7px] lg:gap-[13.3px]">
      {/* Mobile / tablet — clean split: copy left of engineer feel */}
      <div className="relative z-10 w-full lg:hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.22]"
          src="/images/services/civil/why-clients/bg.webp"
          alt=""
        />

        <div className="relative mx-auto w-full max-w-[925px] px-5 pt-12 pb-14 sm:px-8 sm:pt-16 sm:pb-16">
          {/* Title block */}
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="text-[26px] font-bold tracking-[-1px] leading-[1.2] sm:text-[34px] sm:leading-[40px]"
            >

              
              Why Industrial &amp; Commercial Clients{" "}
              <span className="text-red">Choose Mekark</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="service-section-description sm:mt-4"
            >
              <span>
                As a reliable civil construction contractor, building contractor,
                and RCC construction company,
              </span>
              <span>
                Mekark offers structural engineering expertise that many generic
                contractors lack.
              </span>
            </motion.p>
          </motion.div>

          {/* Engineer + site blur — desktop-inspired center portrait */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto mt-8 h-[300px] w-full max-w-[280px] sm:mt-10 sm:h-[380px] sm:max-w-[320px]"
          >
            <div
              className="pointer-events-none absolute top-[8%] left-1/2 h-[70%] w-[95%] -translate-x-1/2 overflow-hidden opacity-45 blur-[2px]"
              aria-hidden
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/services/civil/why-clients/site-blur.webp"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute inset-0 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="pointer-events-none absolute top-[-8%] left-[-28%] h-[118%] w-[160%] max-w-none object-cover"
                src="/images/services/civil/why-clients/engineer.webp"
                alt="Mekark civil engineer with hard hat and clipboard"
              />
            </div>
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#e6e6e6] via-[#e6e6e6]/80 to-transparent"
              aria-hidden
            />
          </motion.div>

          {/* Features — classic number | bar | copy, matching desktop */}
          <motion.div
            className="mt-8 flex w-full flex-col gap-7 sm:mt-10 sm:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.07 } },
            }}
          >
            {features.map((f) => (
              <Feature
                key={f.number}
                number={f.number}
                title={f.title}
                description={f.description}
                mobile
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Desktop — Figma layout */}
      <div className="relative z-0 hidden h-[1014.7px] w-full max-w-[1920px] lg:block">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="absolute right-0 bottom-[0.03px] h-[1032px] w-full max-w-[1920px] shrink-0 object-cover opacity-40"
          src="/images/services/civil/why-clients/bg.webp"
          width={1920}
          height={1032}
          alt=""
        />
        <motion.div
          className="absolute top-[56px] left-1/2 h-[140px] w-[1260px] max-w-[calc(100%-48px)] shrink-0 -translate-x-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.b
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="absolute top-[0.33px] left-1/2 flex w-max max-w-none shrink-0 -translate-x-1/2 items-center whitespace-nowrap tracking-[-1px] leading-[81.6px]"
          >
            <span className="leading-[81.6px]">
              Why Industrial &amp; Commercial Clients
            </span>
            <span className="ml-3 leading-[81.6px] text-red">
              Choose Mekark
            </span>
          </motion.b>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="service-section-description absolute top-[86.33px] left-1/2 mt-0 h-[54px] w-[925px] max-w-full -translate-x-1/2"
          >
            <span>
              As a reliable civil construction contractor, building contractor,
              and RCC construction company,
            </span>
            <span>
              Mekark offers structural engineering expertise that many generic
              contractors lack.
            </span>
          </motion.p>
        </motion.div>
      </div>

      <div className="absolute top-[210.33px] left-1/2 z-[1] hidden h-[804px] w-[1589px] max-w-[calc(100%-48px)] -translate-x-1/2 text-left font-montserrat text-num-80 text-[#cc1020] lg:block">
        <motion.div
          className="absolute top-[97px] left-1/2 flex -translate-x-1/2 items-center gap-[671px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <div className="flex w-[456px] flex-col items-start justify-center gap-[60.7px]">
            <Feature
              number="01"
              title="Turnkey Project Implementation:"
              description="Single point of responsibility from start to finish."
              titleClassName="leading-[26.87px]"
              descriptionClassName="opacity-80"
            />
            <Feature
              number="03"
              title="Structural Engineers In-House:"
              description="BIM-based structural analysis ensures that your building is precisely designed and ready for construction."
              descriptionWidth="w-[329.3px]"
            />
            <Feature
              number="05"
              title="Safe Construction:"
              description="Modular formwork, safety checks, and clear pricing."
              descriptionWidth="w-[328px]"
            />
          </div>

          <div className="flex w-[456px] flex-col items-start gap-[60.7px]">
            <Feature
              number="02"
              title="Established Credentials:"
              description="Over 200 industrial and commercial RCC construction projects completed, with a 4.7 out of 5 customer rating."
            />
            <Feature
              number="04"
              title="Exceptional Quality:"
              description="Independent QA, certification testing, and multi-layer waterproofing."
              titleClassName="leading-[26.87px]"
              descriptionWidth="w-80"
            />
            <Feature
              number="06"
              title="18+ Years of Experience:"
              description="From factories and warehouse construction to multi-storey commercial building construction projects."
              titleClassName="leading-[26.87px]"
              descriptionWidth="w-[344px]"
            />
          </div>
        </motion.div>

        <motion.div
          className="absolute top-[0.33px] left-[349px] h-[804px] w-[846.7px]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.15 }}
        >
          <div className="absolute top-[42.67px] left-1/2 h-[552px] w-[801px] shrink-0 -translate-x-1/2 overflow-hidden blur-[3px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="pointer-events-none absolute top-[7.38%] left-[2.99%] h-[92.66%] w-[95.87%] max-w-none object-cover"
              src="/images/services/civil/why-clients/site-blur.webp"
              alt=""
            />
          </div>
          <div className="absolute top-[calc(50%+80px)] left-1/2 h-[741px] w-[826px] shrink-0 -translate-x-1/2 -translate-y-1/2 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="pointer-events-none absolute top-[-12.96%] left-[-26.66%] h-[112.96%] w-[152%] max-w-none object-cover"
              src="/images/services/civil/why-clients/engineer.webp"
              alt="Mekark civil engineer with hard hat and clipboard"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
