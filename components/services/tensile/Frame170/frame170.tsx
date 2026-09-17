"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ServiceSolutionsMobileGrid from "@/components/services/ServiceSolutionsMobileGrid";
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
    <section className="relative w-full overflow-hidden bg-white px-5 py-14 font-manrope text-[#111] sm:px-8 sm:py-16 lg:px-[107px] lg:py-[107px]">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[200px] sm:h-[280px] lg:h-[390px]">
        <Image
          className="h-full w-full object-cover object-top opacity-95"
          src="/images/services/tensile/frame170/grid-bg.webp"
          width={1918}
          height={391}
          sizes="100vw"
          alt="Decorative grid background"
        />
      </div>

      <ServiceSolutionsMobileGrid
        title="Our Tensile Fabric Structure Solutions"
        solutions={solutions.map((item) => ({
          title: item.title,
          description: item.body,
          image: item.src,
        }))}
        className="!px-0 !py-0"
      />

      <div className="relative z-10 mx-auto hidden max-w-[1706px] flex-col items-center gap-[67px] lg:flex">
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
              <div className="flex flex-col gap-3 font-montserrat">
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
