"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ServiceSolutionsMobileGrid from "@/components/services/ServiceSolutionsMobileGrid";
import {
  MOBILE_CARD_BODY_CLASS,
  MOBILE_CARD_CLASS,
  MOBILE_CARD_TITLE_CLASS,
  MOBILE_SOLUTIONS_CONTAINER_CLASS,
  MOBILE_SOLUTIONS_GRID_CLASS,
  MOBILE_SOLUTIONS_IMAGE_CLASS,
} from "@/components/services/serviceMobileCivilTemplate";
import { SERVICE_CARD_BODY_CLASS_SCALED } from "@/components/services/serviceTypography";

const solutions = [
  {
    src: "/images/services/tensile/frame170/car-parking-sheds.webp",
    title: "Tensile Roofing and Canopies",
    body: "Column-free fabric roofing suitable for commercial and industrial applications",
  },
  {
    src: "/images/services/tensile/frame170/roofing-canopies.webp",
    title: "Tensile Car Parking Sheds",
    body: "Weather-resistant, UV-resistant car parking sheds suitable for office buildings, factories, residential buildings, etc.",
  },
  {
    src: "/images/services/tensile/frame170/dome-structures.webp",
    title: "Tensile Dome Structures",
    body: "Dome and hypar-shaped fabric structures suitable for architectural purposes",
  },
  {
    src: "/images/services/tensile/frame170/stadium-roofing.webp",
    title: "Stadiums and Sports Facilities Roofing",
    body: "Large span tensile membrane roof suitable for stadiums and sports facilities",
  },
  {
    src: "/images/services/tensile/frame170/event-canopies.webp",
    title: "Event and Entrances Canopies",
    body: "Custom-made tensile canopies suitable for malls, hotels and events",
  },
  {
    src: "/images/services/tensile/frame170/maintenance-repairs.webp",
    title: "Maintenance and Repairs",
    body: "Maintenance and repair of structures periodically",
  },
] as const;

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function Frame170() {
  return (
    <section className="relative w-full shrink-0 overflow-hidden bg-white text-left font-manrope text-[#111]">
      <Image
        className="pointer-events-none absolute top-0 left-0 hidden h-[390px] w-full object-cover opacity-[0.15] lg:block"
        src="/images/services/tensile/frame170/grid-bg.webp"
        width={1918}
        height={391}
        sizes="100vw"
        alt="Decorative grid background"
      />

      <ServiceSolutionsMobileGrid
        title="Our Tensile Fabric Structure Solutions"
        className={MOBILE_SOLUTIONS_CONTAINER_CLASS}
        titleClassName="w-full text-left font-manrope text-[28px] font-bold leading-[35px] text-[#111]"
        gridClassName={MOBILE_SOLUTIONS_GRID_CLASS}
        cardClassName={MOBILE_CARD_CLASS}
        cardTitleClassName={`${MOBILE_CARD_TITLE_CLASS} leading-[23px]`}
        cardBodyClassName={MOBILE_CARD_BODY_CLASS}
        imageContainerClassName={MOBILE_SOLUTIONS_IMAGE_CLASS}
        solutions={solutions.map((item) => ({
          title: item.title,
          description: item.body,
          image: item.src,
        }))}
      />

      <div className="relative z-10 mx-auto hidden max-w-[1706px] flex-col items-center gap-[67px] px-5 py-14 sm:px-8 lg:flex lg:px-[107px] lg:py-[107px]">
        <h2 className="max-w-[940px] text-center text-[53.33px] font-extrabold tracking-[-0.04em] leading-[1.2]">
          Our Tensile Fabric Structure Solutions
        </h2>

        <div className="grid w-full grid-cols-6 gap-[30px]">
          {solutions.map((item, index) => (
            <motion.article
              key={item.title}
              className="flex min-w-0 flex-col gap-[34px]"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: easeOut, delay: 0.05 * index }}
            >
              <Image
                className="aspect-square w-full rounded-[21.33px] object-cover"
                src={item.src}
                width={259}
                height={257}
                sizes="257px"
                alt={item.title}
              />
              <div className="flex flex-col gap-3 font-manrope">
                <h3 className="text-[18.67px] font-bold leading-[1.25] text-[#3c3938]">
                  {item.title}
                </h3>
                <p className={SERVICE_CARD_BODY_CLASS_SCALED}>{item.body}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
