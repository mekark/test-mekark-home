"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import { SERVICE_CARD_BODY_CLASS } from "@/components/services/serviceTypography";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export type ServiceSolutionItem = {
  title: string;
  description: string;
  image: string;
  imageClassName?: string;
  imageStyle?: CSSProperties;
};

type ServiceSolutionsMobileGridProps = {
  title: string;
  solutions: ServiceSolutionItem[];
  desktopFrom?: "lg" | "xl";
  className?: string;
  titleClassName?: string;
  gridClassName?: string;
  cardClassName?: string;
  cardTitleClassName?: string;
  cardBodyClassName?: string;
  imageContainerClassName?: string;
};

export default function ServiceSolutionsMobileGrid({
  title,
  solutions,
  desktopFrom = "lg",
  className = "",
  titleClassName = "",
  gridClassName = "",
  cardClassName = "",
  cardTitleClassName = "",
  cardBodyClassName = "",
  imageContainerClassName = "",
}: ServiceSolutionsMobileGridProps) {
  const hideFromDesktop = desktopFrom === "xl" ? "xl:hidden" : "lg:hidden";

  return (
    <div
      className={`relative z-10 mx-auto flex w-full max-w-[1100px] flex-col items-center gap-10 px-5 py-14 sm:px-8 sm:py-16 ${hideFromDesktop} ${className}`}
    >
      <h2
        className={
          titleClassName ||
          "max-w-[900px] text-center font-manrope text-[26px] font-bold tracking-[-1.33px] leading-[1.2] text-gray sm:text-[36px] sm:leading-[44px]"
        }
      >
        {title}
      </h2>
      <motion.div
        className={`grid w-full grid-cols-1 gap-10 sm:grid-cols-2 ${gridClassName}`}
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
            className={
              cardClassName || "flex flex-col gap-4"
            }
          >
            <div
              className={
                imageContainerClassName ||
                "relative h-[200px] w-full overflow-hidden rounded-[21.33px] sm:h-[240px]"
              }
            >
              <Image
                className={`object-cover ${item.imageClassName ?? ""}`}
                src={item.image}
                alt={item.title}
                fill
                style={item.imageStyle}
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className={cardClassName ? "flex w-full flex-col gap-2" : undefined}>
              <h3
                className={
                  cardTitleClassName ||
                  "font-manrope text-[17px] font-bold leading-[22px] text-darkslategray sm:text-[18.67px]"
                }
              >
                {item.title}
              </h3>
              <p
                className={
                  cardBodyClassName ||
                  `mt-2 ${SERVICE_CARD_BODY_CLASS}`
                }
              >
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
