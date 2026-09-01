"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Solution = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  staggered?: boolean;
};

const solutions: Solution[] = [
  {
    title: "Turnkey Electronics Factory Construction:",
    description:
      "Full-scope design, civil works, structural steel, and MEP delivered under one contract.",
    image: "/images/industries/electronics/solutions/turnkey-factory.png",
    imageAlt: "Workers assembling electronics in a manufacturing facility",
  },
  {
    title: "Clean Room Construction:",
    description:
      "Controlled-environment build-outs for electronics assembly, component manufacturing, and semiconductor-grade processes.",
    image: "/images/industries/electronics/solutions/clean-room.png",
    imageAlt: "Sterile clean room environment for electronics manufacturing",
    staggered: true,
  },
  {
    title: "ESD-Safe Flooring & Interiors:",
    description:
      "Anti-static flooring, partition systems, and controlled interiors engineered to protect sensitive components.",
    image: "/images/industries/electronics/solutions/esd-flooring.png",
    imageAlt: "ESD-safe electronics laboratory with controlled interiors",
  },
  {
    title: "HVAC & Air Handling Systems:",
    description:
      "Temperature and humidity control engineered specifically for electronics manufacturing environments.",
    image: "/images/industries/electronics/solutions/hvac-systems.png",
    imageAlt: "Technician working at an electronics manufacturing workstation",
    staggered: true,
  },
  {
    title: "MEP & Utility Infrastructure:",
    description:
      "Electrical, mechanical, and plumbing systems built for uninterrupted, high-reliability plant operations.",
    image: "/images/industries/electronics/solutions/mep-infrastructure.png",
    imageAlt: "Industrial MEP piping and utility infrastructure",
  },
  {
    title: "EOT Crane & Material Handling Systems:",
    description:
      "Overhead crane and internal logistics infrastructure for high-volume production lines.",
    image: "/images/industries/electronics/solutions/eot-crane.png",
    imageAlt: "Industrial warehouse with overhead EOT crane systems",
    staggered: true,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function SolutionCard({ title, description, image, imageAlt }: Solution) {
  return (
    <article className="flex h-auto min-h-[193px] w-full max-w-[740px] flex-col overflow-hidden rounded-[20px] border border-[#c0c0c0] bg-white sm:flex-row lg:h-[193px]">
      <div className="relative h-[180px] w-full shrink-0 overflow-hidden sm:h-[193px] sm:w-[280px] lg:w-[323px]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 323px"
        />
      </div>
      <div className="flex flex-1 flex-col justify-center gap-2 px-5 py-4 sm:px-6 lg:gap-2 lg:px-8">
        <h3 className="font-manrope text-base font-semibold leading-normal text-black sm:text-lg">
          {title}
        </h3>
        <p className="font-manrope text-sm font-normal leading-normal text-[#6e6e6e] sm:text-base">
          {description}
        </p>
      </div>
    </article>
  );
}

export default function OurSolutionsSection() {
  return (
    <section className="w-full bg-[#f6f6f6] py-16 lg:py-24">
      <div className="mx-auto max-w-[1920px] px-6 lg:px-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16 xl:gap-24">
          <motion.header
            className="flex max-w-[654px] shrink-0 flex-col gap-2.5 lg:sticky lg:top-24 lg:pt-[218px]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <h2 className="font-manrope text-[32px] font-bold leading-normal text-black sm:text-[40px] lg:text-[46px]">
              Our Solutions
            </h2>
            <div className="flex flex-col gap-2.5">
              <p className="font-manrope text-xl font-medium leading-normal text-black sm:text-2xl lg:text-[28px]">
                Complete Electronics Manufacturing Facility Solutions,
                Engineered End-to-End
              </p>
              <p className="font-manrope text-base font-normal leading-normal text-[#6e6e6e] lg:text-lg">
                As a full-service, turnkey EPC electronics facility construction
                company in South India, Mekark designs, fabricates, and builds
                precision production environments tailored to your process,
                cleanliness classification, and utility requirements.
              </p>
            </div>
          </motion.header>

          <div className="relative min-w-0 flex-1 overflow-visible">
            <div
              className="pointer-events-none absolute left-0 top-[78px] hidden h-[1321px] w-[397px] overflow-visible lg:block"
              aria-hidden
            >
              <Image
                src="/images/industries/electronics/solutions/timeline.svg"
                alt=""
                width={397}
                height={1321}
                className="h-full w-full"
              />
            </div>

            <motion.div
              className="relative flex flex-col gap-10 sm:gap-14 lg:gap-[66px] lg:pl-[73px]"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              {solutions.map((solution) => (
                <motion.div
                  key={solution.title}
                  variants={itemVariants}
                  className={
                    solution.staggered
                      ? "lg:ml-[211px]"
                      : "lg:ml-0"
                  }
                >
                  <SolutionCard {...solution} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          className="mx-auto mt-12 w-full max-w-[1385px] rounded-[40px] border border-[rgba(228,0,21,0.5)] bg-[rgba(228,0,21,0.05)] px-5 py-5 text-center sm:mt-16 sm:px-8 sm:py-6 lg:mt-20 lg:px-8 lg:py-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <p className="font-manrope text-base font-semibold leading-normal text-[#4c4c4c] sm:text-lg">
            Every electronics manufacturing facility is custom-engineered around
            your production line,
            <br className="hidden sm:inline" />
            cleanliness classification, and utility load, ensuring consistent
            yield and long-term operational reliability for{" "}
            <span className="text-[#e50818]">
              electronics manufacturers across South India.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
