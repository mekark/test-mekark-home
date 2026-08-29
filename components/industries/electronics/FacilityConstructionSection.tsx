"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type FacilityCard = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

const facilities: FacilityCard[] = [
  {
    title: "Electronics Component Manufacturing:",
    description:
      "ESD-safe assembly plants engineered for precision component production and high-volume throughput.",
    image: "/images/industries/electronics/facility-construction/electronics-component.png",
    imageAlt: "Green circuit board assembly line for electronics component manufacturing",
  },
  {
    title: "Semiconductor & Precision Assembly:",
    description:
      "Clean room facilities built to the required cleanliness classification for sensitive fabrication processes.",
    image: "/images/industries/electronics/facility-construction/semiconductor-assembly.png",
    imageAlt: "Worker in a cleanroom suit at a semiconductor precision assembly facility",
  },
  {
    title: "Consumer Electronics:",
    description:
      "High-volume production plants designed for continuous, automation-ready operations.",
    image: "/images/industries/electronics/facility-construction/consumer-electronics.png",
    imageAlt: "Workers at a consumer electronics production line",
  },
  {
    title: "Automotive Electronics:",
    description:
      "Controlled-environment facilities for auto-component and EV electronics manufacturers.",
    image: "/images/industries/electronics/facility-construction/automotive-electronics.png",
    imageAlt: "Automotive electronics manufacturing on a vehicle production line",
  },
  {
    title: "Telecom & Networking Equipment:",
    description:
      "Precision production infrastructure with utility redundancy for uninterrupted manufacturing.",
    image: "/images/industries/electronics/facility-construction/telecom-networking.png",
    imageAlt: "Server racks and telecom networking equipment infrastructure",
  },
  {
    title: "Contract Electronics Manufacturing (EMS/ODM):",
    description:
      "Multi-tenant-ready facilities with flexible bay design for scaling production.",
    image: "/images/industries/electronics/facility-construction/contract-manufacturing.png",
    imageAlt: "Multiple circuit boards arranged for contract electronics manufacturing",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
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

function FacilityCard({ title, description, image, imageAlt }: FacilityCard) {
  return (
    <article className="mx-auto flex w-full max-w-[320px] flex-col gap-[35px] sm:max-w-none xl:max-w-[259px]">
      <div className="relative aspect-[258.667/257.333] w-full overflow-hidden rounded-[21.333px]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 259px"
        />
      </div>
      <div className="flex flex-col gap-2.5">
        <h3 className="font-manrope text-[18.667px] font-bold leading-[21.333px] text-[#3c3938]">
          {title}
        </h3>
        <p className="font-manrope text-[16px] font-normal leading-[21.333px] text-[#555]">
          {description}
        </p>
      </div>
    </article>
  );
}

export default function FacilityConstructionSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#ffefef] py-16 lg:py-24">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[391px] opacity-15"
        aria-hidden
      >
        <Image
          src="/images/industries/electronics/facility-construction/grid.png"
          alt=""
          fill
          className="object-cover object-top"
          sizes="100vw"
        />
      </div>

      <div className="relative mx-auto max-w-[1920px] px-6 lg:px-[107px]">
        <motion.header
          className="mx-auto mb-12 max-w-[1356px] text-center lg:mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <h2 className="mx-auto flex w-full max-w-[1356px] items-center justify-center text-center font-manrope text-[32px] font-bold leading-tight tracking-[-1.33px] text-gray sm:text-[40px] lg:h-[120px] lg:text-[50px] lg:leading-[60px]">
            Electronics Manufacturing Facility Construction Across South
            India&apos;s Growth Hubs
          </h2>
          <p className="mx-auto mt-4 max-w-[1273px] font-manrope text-base font-normal leading-[27px] text-black sm:text-lg">
            Our clean room and precision facility construction serves electronics
            manufacturers across Tamil Nadu, Karnataka, Andhra Pradesh, Telangana,
            and Kerala:
          </p>
        </motion.header>

        <motion.div
          className="mx-auto grid max-w-[1706px] grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:justify-items-center xl:gap-[31px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {facilities.map((facility) => (
            <motion.div key={facility.title} variants={itemVariants} className="w-full">
              <FacilityCard {...facility} />
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="mx-auto mt-12 max-w-[1212px] text-center font-manrope text-base font-normal leading-[23px] text-[#8b91a0] sm:mt-16 sm:text-lg lg:mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        >
          Irrespective of where you&apos;re located in South India—{" "}
          <span className="font-semibold text-[#f01d23]">
            Chennai, Sriperumbudur, Oragadam, Hosur, Coimbatore, Bengaluru, or
            Hyderabad
          </span>
          —Mekark&apos;s electronics facility engineering is customised to your
          production process and compliance requirements.
        </motion.p>
      </div>
    </section>
  );
}
