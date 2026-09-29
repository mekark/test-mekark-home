"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import macStyles from "./automationFacilitiesMac.module.css";

const fadeSlideUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

type Facility = {
  title: string;
  description: string;
  image: string;
};

const facilities: Facility[] = [
  {
    title: "Industrial Robotics Manufacturing",
    description:
      "Vibration-controlled, high-precision facilities engineered for robotic arm and system assembly.",
    image:
      "/images/industries/automation/automation-facilities/industrial-robotics.webp",
  },
  {
    title: "Control Panel & PLC Assembly Units",
    description:
      "ESD-safe, contamination-controlled plants designed for panel building, wiring, and testing.",
    image:
      "/images/industries/automation/automation-facilities/control-panel-plc.webp",
  },
  {
    title: "CNC & Precision Machinery Manufacturing",
    description:
      "Heavy-load flooring and crane-integrated bays for machine tool assembly and testing.",
    image: "/images/industries/automation/automation-facilities/cnc-precision.webp",
  },
  {
    title: "Sensor, PCB & Electronics-Adjacent Assembly",
    description:
      "Cleanroom-adjacent, static-controlled environments for sensitive component handling.",
    image: "/images/industries/automation/automation-facilities/sensor-pcb.webp",
  },
  {
    title: "Automotive & Industrial Automation Equipment Manufacturing",
    description:
      "Facilities built for conveyor systems, packaging automation, and material handling equipment production.",
    image:
      "/images/industries/automation/automation-facilities/automotive-automation.webp",
  },
  {
    title: "Testing & R&D Laboratories",
    description:
      "Climate-controlled, vibration-isolated spaces for automation product testing and validation.",
    image: "/images/industries/automation/automation-facilities/testing-rnd.webp",
  },
];

function FacilityCard({
  solution,
  index,
  mobile = false,
}: {
  solution: Facility;
  index: number;
  mobile?: boolean;
}) {
  if (mobile) {
    return (
      <motion.article
        className={macStyles.mobileCard}
        custom={index * 0.06}
        variants={fadeSlideUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className={macStyles.mobileCardImage}>
          <Image
            src={solution.image}
            alt={solution.title}
            fill
            className="object-cover"
            sizes="337px"
          />
        </div>
        <div className={macStyles.mobileCardBody}>
          <h3 className={macStyles.mobileCardTitle}>{solution.title}</h3>
          <p className={macStyles.mobileCardDesc}>{solution.description}</p>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      className={`flex flex-col gap-8 ${macStyles.card}`}
      custom={index * 0.08}
      variants={fadeSlideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div
        className={`relative aspect-square w-full overflow-hidden rounded-[21px] ${macStyles.cardImage}`}
      >
        <Image
          src={solution.image}
          alt={solution.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 258px"
        />
      </div>

      <div className={`flex flex-col gap-2.5 ${macStyles.cardBody}`}>
        <h3
          className={`text-lg font-bold leading-[27px] text-[#3c3938] ${macStyles.cardTitle}`}
        >
          {solution.title}
        </h3>
        <p
          className={`text-base leading-[21px] text-[#555] ${macStyles.cardDesc}`}
        >
          {solution.description}
        </p>
      </div>
    </motion.article>
  );
}

export default function AutomationFacilitiesSection() {
  return (
    <section
      className={`relative bg-[#ffefef] px-5 pb-12 pt-6 sm:px-10 sm:pb-16 sm:pt-8 lg:px-12 lg:pb-24 lg:pt-12 xl:px-16 2xl:px-20 ${macStyles.section}`}
      aria-label="Automation manufacturing facility construction across South India"
    >
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-x-0 top-0 h-[391px] overflow-hidden opacity-15 ${macStyles.gridBg}`}
      >
        <Image
          src="/images/industries/automation/automation-facilities/grid-bg.webp"
          alt="Decorative grid background"
          fill
          className="object-cover object-top"
          sizes="100vw"
        />
      </div>

      <div
        className={`relative mx-auto flex w-full max-w-[1720px] flex-col gap-8 sm:gap-12 lg:gap-16 ${macStyles.sectionInner}`}
      >
        <div
          className={`mx-auto flex w-full max-w-[1452px] flex-col items-start gap-3 text-left sm:items-center sm:gap-4 sm:text-center ${macStyles.headerBlock}`}
        >
          <motion.p
            className="hidden text-xs font-semibold uppercase tracking-[0.14em] text-[#e50818]"
            custom={0}
            variants={fadeSlideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            South India coverage
          </motion.p>
          <motion.h2
            className={`max-w-[1356px] text-[26px] font-bold leading-tight tracking-[-0.8px] text-[#111] sm:text-[40px] sm:tracking-[-1.33px] lg:text-[50px] lg:leading-[60px] ${macStyles.title}`}
            custom={0}
            variants={fadeSlideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className={macStyles.titleLineFirst}>
              Automation &amp; Robotics Manufacturing Facility Construction
            </span>
            <span className={macStyles.titleLineSecond}>
              Across South India&apos;s Growth Hubs
            </span>
          </motion.h2>
          <motion.p
            className={`max-w-[1273px] text-sm leading-relaxed text-black sm:text-base sm:leading-[27px] lg:text-lg ${macStyles.subtitle}`}
            custom={0.1}
            variants={fadeSlideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            Our precision facility construction serves automation
            manufacturers across Tamil Nadu, Karnataka, Andhra Pradesh,
            Telangana, and Kerala
          </motion.p>
        </div>

        <div className={macStyles.mobileStack}>
          {facilities.map((facility, index) => (
            <FacilityCard
              key={facility.title}
              solution={facility}
              index={index}
              mobile
            />
          ))}
        </div>

        <div
          className={`hidden grid-cols-2 gap-x-8 gap-y-12 min-[769px]:grid lg:grid-cols-3 2xl:grid-cols-6 ${macStyles.grid}`}
        >
          {facilities.map((facility, index) => (
            <FacilityCard key={facility.title} solution={facility} index={index} />
          ))}
        </div>

        <motion.p
          className={`mx-auto max-w-[1212px] text-left text-sm leading-relaxed text-[#8b91a0] sm:text-center sm:text-base sm:leading-[23px] lg:text-lg ${macStyles.footer}`}
          custom={0.2}
          variants={fadeSlideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Wherever you&apos;re located in South India –{" "}
          <span className="font-semibold text-[#e40015]">
            Chennai, Coimbatore, Hosur, Bengaluru, Hyderabad, or Kochi
          </span>{" "}
          – Mekark&apos;s automation facility engineering
          <br />
          is customised to your production process and precision
          requirements.
        </motion.p>
      </div>
    </section>
  );
}
