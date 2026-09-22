"use client";

import Image from "next/image";
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
import styles from "./cta/index.module.css";

export const solarSolutions = [
  {
    title: "Rooftop Solar for Factories and Warehouses",
    description:
      "High-capacity systems engineered for industrial roof structures",
    image: "/images/services/solar/CTA/rectangle-15.webp",
  },
  {
    title: "Ground-Mounted Solar Power Plants",
    description: "Optimized for businesses with available open land",
    image: "/images/services/solar/CTA/rectangle-16-1.webp",
  },
  {
    title: "Solar and Battery Storage Systems",
    description:
      "Uninterrupted power supply for manufacturing and cold storage units",
    image: "/images/services/solar/CTA/rectangle-16-2.webp",
  },
  {
    title: "Off-Grid Solar Systems",
    description:
      "Fully independent power supply for remote industrial facilities",
    image: "/images/services/solar/CTA/rectangle-16.webp",
    imageClassName: "object-cover scale-[1.327] object-top",
  },
  {
    title: "Commercial Solar Energy Audit",
    description:
      "Detailed assessment of your current consumption and savings potential",
    image: "/images/services/solar/CTA/commercial-solar-energy-audit.webp",
  },
  {
    title: "On-Grid Solar with Net Metering",
    description: "Stay connected to the grid and reduce your electricity bill",
    image: "/images/services/solar/CTA/on-grid-net-metering.webp",
    imageClassName: "object-cover scale-[1.28] object-top",
  },
] as const;

export default function SolarSolutionsSection() {
  return (
    <section className="relative w-full shrink-0 overflow-hidden bg-white text-left font-manrope text-[#111]">
      <ServiceSolutionsMobileGrid
        title="Our Commercial Solar Solutions"
        className={`${MOBILE_SOLUTIONS_CONTAINER_CLASS} !gap-6 !py-8`}
        titleClassName="w-full text-left font-manrope text-[28px] font-bold leading-[35px] text-[#111]"
        gridClassName={MOBILE_SOLUTIONS_GRID_CLASS}
        cardClassName={MOBILE_CARD_CLASS}
        cardTitleClassName={`${MOBILE_CARD_TITLE_CLASS} leading-[23px]`}
        cardBodyClassName={MOBILE_CARD_BODY_CLASS}
        imageContainerClassName={MOBILE_SOLUTIONS_IMAGE_CLASS}
        solutions={solarSolutions.map((item) => ({
          title: item.title,
          description: item.description,
          image: item.image,
          imageClassName:
            "imageClassName" in item ? item.imageClassName : undefined,
        }))}
      />

      <div className={`${styles.grid1Parent} !hidden lg:!block`}>
        <Image
          className={styles.grid1Icon}
          width={1918}
          height={391}
          sizes="100vw"
          src="/images/services/solar/CTA/grid-1-1.webp"
          alt="Decorative grid background"
        />

        <div className={styles.solarSolutionsDesktop}>
          <div className={styles.ourCommercialSolarSolutionsWrapper}>
            <b className={styles.ourCommercialSolar}>
              Our Commercial Solar Solutions
            </b>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.frameParent2}>
              <div className={styles.rectangleParent5}>
                <Image
                  className={styles.rectangleIcon}
                  width={473}
                  height={277}
                  sizes="100vw"
                  src="/images/services/solar/CTA/rectangle-15.webp"
                  alt="Rooftop solar for factories and warehouses"
                />
                <div className={styles.rooftopSolarForFactoriesAnParent}>
                  <div className={styles.rooftopSolarFor}>
                    Rooftop Solar for Factories and Warehouses
                  </div>
                  <div
                    className={`${styles.highCapacitySystemsEngineer} ${SERVICE_CARD_BODY_CLASS_SCALED}`}
                  >
                    High-capacity systems engineered for industrial roof
                    structures
                  </div>
                </div>
              </div>
              <div className={styles.rectangleParent5}>
                <div className={styles.rectangleImageWrap}>
                  <Image
                    className={styles.rectangleIconOffGrid}
                    width={473}
                    height={277}
                    sizes="100vw"
                    src="/images/services/solar/CTA/rectangle-16.webp"
                    alt="Off-grid solar systems"
                  />
                </div>
                <div className={styles.rooftopSolarForFactoriesAnParent}>
                  <div className={styles.rooftopSolarFor}>
                    Off-Grid Solar Systems
                  </div>
                  <div
                    className={`${styles.fullyIndependentPower} ${SERVICE_CARD_BODY_CLASS_SCALED}`}
                  >
                    Fully independent power supply for remote industrial
                    facilities
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent2}>
              <div className={styles.rectangleParent7}>
                <Image
                  className={styles.rectangleIcon}
                  width={473}
                  height={277}
                  sizes="100vw"
                  src="/images/services/solar/CTA/rectangle-16-1.webp"
                  alt="Ground-mounted solar power plants"
                />
                <div className={styles.rooftopSolarForFactoriesAnParent}>
                  <div className={styles.rooftopSolarFor}>
                    Ground-Mounted Solar Power Plants
                  </div>
                  <div
                    className={`${styles.optimizedForBusinesses} ${SERVICE_CARD_BODY_CLASS_SCALED}`}
                  >
                    Optimized for businesses with available open land
                  </div>
                </div>
              </div>
              <div className={styles.rectangleParent5}>
                <Image
                  className={styles.rectangleIcon}
                  width={473}
                  height={277}
                  sizes="100vw"
                  src="/images/services/solar/CTA/commercial-solar-energy-audit.webp"
                  alt="Commercial solar energy audit"
                />
                <div className={styles.rooftopSolarForFactoriesAnParent}>
                  <div className={styles.rooftopSolarFor}>
                    Commercial Solar Energy Audit
                  </div>
                  <div
                    className={`${styles.detailedAssessmentOf} ${SERVICE_CARD_BODY_CLASS_SCALED}`}
                  >
                    Detailed assessment of your current consumption and savings
                    potential
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent2}>
              <div className={styles.rectangleParent5}>
                <Image
                  className={styles.rectangleIcon}
                  width={473}
                  height={277}
                  sizes="100vw"
                  src="/images/services/solar/CTA/rectangle-16-2.webp"
                  alt="Solar and battery storage systems"
                />
                <div className={styles.rooftopSolarForFactoriesAnParent}>
                  <div className={styles.rooftopSolarFor}>
                    Solar and Battery Storage Systems
                  </div>
                  <div
                    className={`${styles.uninterruptedPowerSupply} ${SERVICE_CARD_BODY_CLASS_SCALED}`}
                  >
                    Uninterrupted power supply for manufacturing and cold
                    storage units
                  </div>
                </div>
              </div>
              <div className={styles.rectangleParent5}>
                <div className={styles.rectangleImageWrap}>
                  <Image
                    className={styles.rectangleIconOnGrid}
                    width={473}
                    height={277}
                    sizes="100vw"
                    src="/images/services/solar/CTA/on-grid-net-metering.webp"
                    alt="On-grid solar with net metering"
                  />
                </div>
                <div className={styles.rooftopSolarForFactoriesAnParent}>
                  <div className={styles.rooftopSolarFor}>
                    On-Grid Solar with Net Metering
                  </div>
                  <div
                    className={`${styles.fullyIndependentPower} ${SERVICE_CARD_BODY_CLASS_SCALED}`}
                  >
                    Stay connected to the grid and reduce your electricity bill
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
