"use client";

import { motion } from "framer-motion";
import { SERVICE_CARD_BODY_CLASS_SCALED } from "@/components/services/serviceTypography";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const MOBILE_SECTION_TITLE_CLASS =
  "w-full font-manrope text-[28px] font-bold leading-normal text-[#111]";

const MOBILE_CARD_TITLE_BASE_CLASS =
  "font-manrope text-[18px] font-bold text-[#3c3938]";

const MOBILE_CARD_BODY_CLASS =
  "font-manrope text-sm font-normal leading-normal text-[#555]";

const MOBILE_CARD_CLASS =
  "flex w-full flex-col items-start gap-4 rounded-[20px] border border-solid border-[#e7e3e1] bg-white p-4 drop-shadow-[0px_6px_9px_rgba(0,0,0,0.03)]";

const solutions: {
  image: string;
  imageClassName: string;
  title: string;
  titleClassName: string;
  description: string;
  descriptionTop: string;
  width: string;
  left: string;
  imageWidth?: string;
}[] = [
  {
    image: "/images/services/civil/solutions/rcc.webp",
    imageClassName: "absolute top-[0.01%] left-[-42.61%] h-full w-[179.83%] max-w-none",
    title: "Civil Construction & RCC Structures",
    titleClassName: "leading-[21.33px]",
    description:
      "Building structures using reinforced cement concrete construction that is designed to withstand wear and tear.",
    descriptionTop: "top-[53.33px]",
    width: "w-[257.3px]",
    left: "left-0",
  },
  {
    image: "/images/services/civil/solutions/structural.webp",
    imageClassName:
      "absolute top-[0.01%] left-[-32.11%] h-full w-[179.83%] max-w-none",
    title: "Structural Design & Engineering",
    titleClassName: "leading-[21.33px]",
    description:
      "Structural design analysis and load planning using BIM technology from our team of civil engineers.",
    descriptionTop: "top-[53.33px]",
    width: "w-[257.3px]",
    left: "left-[289.33px]",
  },
  {
    image: "/images/services/civil/solutions/industrial.webp",
    imageClassName:
      "absolute top-[-0.25%] left-[-34.64%] h-full w-[177.78%] max-w-none",
    title: "Industrial Civil Construction",
    titleClassName: "leading-[26.87px] lg:whitespace-nowrap",
    description:
      "As a factory civil contractor, we construct buildings meant for factories.",
    descriptionTop: "top-[36.69px]",
    width: "w-[257.3px]",
    left: "left-[580px]",
  },
  {
    image: "/images/services/civil/solutions/commercial.webp",
    imageClassName:
      "absolute top-[-0.29%] left-[-77.81%] h-[111.82%] w-[201.08%] max-w-none",
    title: "Commercial & Institutional Construction",
    titleClassName: "leading-[21.33px]",
    description:
      "RCC construction used for retail, office buildings, hospitals, hotels, and educational institutes.",
    descriptionTop: "top-[53.33px]",
    width: "w-[257.3px]",
    left: "left-[869.33px]",
  },
  {
    image: "/images/services/civil/solutions/foundation.webp",
    imageClassName: "absolute inset-0 size-full object-cover",
    title: "Foundation & Structural Framework",
    titleClassName: "leading-[21.33px]",
    description:
      "Accurate and precision RCC foundation construction with quality control throughout the process.",
    descriptionTop: "top-[53.33px]",
    width: "w-[258.7px]",
    left: "left-[1158.67px]",
    imageWidth: "w-[258.7px]",
  },
  {
    image: "/images/services/civil/solutions/mep.webp",
    imageClassName:
      "absolute top-[-0.23%] left-[-11.57%] h-full w-[150.38%] max-w-none",
    title: "MEP & Finishing Works",
    titleClassName: "leading-[26.87px] lg:whitespace-nowrap",
    description:
      "Integrated mechanical, electrical, plumbing, and premium finishing.",
    descriptionTop: "top-[36.69px]",
    width: "w-[257.3px]",
    left: "left-[1449.33px]",
  },
];

export default function CivilSolutions() {
  return (
    <section className="relative h-auto w-full shrink-0 overflow-hidden bg-white text-left font-manrope text-[53.33px] text-gray lg:h-[754.7px]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="pointer-events-none absolute top-0 left-0 h-[200px] w-full object-cover opacity-15 sm:h-[280px] lg:top-[-13.33px] lg:h-[390.7px] lg:w-[1917.8px]"
        src="/images/services/civil/solutions/grid.webp"
        width={1918}
        height={391}
        alt="Decorative grid background"
      />

      {/* Mobile / tablet grid */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1100px] flex-col items-start gap-6 px-5 py-8 sm:px-8 lg:hidden">
        <h2 className={`max-w-[350px] ${MOBILE_SECTION_TITLE_CLASS}`}>
          Our Civil Construction &amp; RCC Solutions
        </h2>
        <motion.div
          className="flex w-full flex-col gap-[14px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {solutions.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className={MOBILE_CARD_CLASS}
            >
              <div className="relative h-[180px] w-full shrink-0 overflow-hidden rounded-[16px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="pointer-events-none absolute inset-0 h-full w-full rounded-[16px] object-cover"
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <div className="flex w-full flex-col gap-2">
                <h3
                  className={`${MOBILE_CARD_TITLE_BASE_CLASS} ${item.titleClassName.replace(" lg:whitespace-nowrap", "")}`}
                >
                  {item.title}
                </h3>
                <p className={MOBILE_CARD_BODY_CLASS}>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Desktop — Figma absolute layout */}
      <div className="absolute top-[106.67px] right-[106.63px] left-[106.67px] hidden h-[541.3px] w-[calc(100%-213.3px)] shrink-0 flex-col items-center gap-[66.7px] lg:flex">
        <motion.div
          className="relative h-[65.3px] w-[1108px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <h2 className="absolute top-[0.33px] left-1/2 flex w-[963px] shrink-0 -translate-x-1/2 items-center text-center font-bold tracking-[-1.33px] leading-[65.33px]">
            Our Civil Construction &amp; RCC Solutions
          </h2>
        </motion.div>

        <motion.div
          className="relative h-[409.3px] w-full self-stretch font-manrope text-num-18_67 text-darkslategray"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {solutions.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className={`absolute top-0 h-num-421_3 shrink-0 ${item.width} ${item.left}`}
            >
              <div
                className={`absolute top-0 left-0 h-num-257_3 overflow-hidden rounded-num-21_33 ${item.imageWidth ?? "w-[257.3px]"}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className={`pointer-events-none ${item.imageClassName}`}
                  src={item.image}
                  alt={item.title}
                />
              </div>

              <div className={`absolute top-[292px] left-0 h-[129.3px] ${item.width}`}>
                <div className="absolute top-[-1.33px] right-0 left-0 flex flex-col items-start">
                  <b
                    className={`relative self-stretch font-bold text-darkslategray ${item.titleClassName}`}
                  >
                    {item.title}
                  </b>
                </div>
                <div
                  className={`absolute right-0 left-0 flex flex-col items-start ${item.descriptionTop}`}
                >
                  <p className={`relative flex w-[257.3px] items-center ${SERVICE_CARD_BODY_CLASS_SCALED}`}>
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
