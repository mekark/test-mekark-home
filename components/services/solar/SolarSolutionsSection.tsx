"use client";

import Image from "next/image";
import ServiceSolutionsMobileGrid from "@/components/services/ServiceSolutionsMobileGrid";
import styles from "./cta/index.module.css";

export const solarSolutions = [
  {
    title: "Rooftop Solar for Factories and Warehouses",
    description:
      "High-capacity systems engineered for industrial roof structures",
    image: "/images/services/solar/CTA/rectangle-15.png",
  },
  {
    title: "Off-Grid Solar Systems",
    description:
      "Fully independent power supply for remote industrial facilities",
    image: "/images/services/solar/CTA/rectangle-16.png",
    imageClassName: "object-cover object-[center_20%] scale-110",
  },
  {
    title: "Ground-Mounted Solar Power Plants",
    description: "Optimized for businesses with available open land",
    image: "/images/services/solar/CTA/rectangle-16-1.png",
  },
  {
    title: "Commercial Solar Energy Audit",
    description:
      "Detailed assessment of your current consumption and savings potential",
    image: "/images/services/solar/CTA/commercial-solar-energy-audit.png",
    imageClassName: "object-cover object-top scale-110",
  },
  {
    title: "Solar and Battery Storage Systems",
    description:
      "Uninterrupted power supply for manufacturing and cold storage units",
    image: "/images/services/solar/CTA/rectangle-16-2.png",
  },
  {
    title: "On-Grid Solar with Net Metering",
    description: "Stay connected to the grid and reduce your electricity bill",
    image: "/images/services/solar/CTA/on-grid-net-metering.png",
    imageClassName: "object-cover object-[center_25%] scale-110",
  },
] as const;

export default function SolarSolutionsSection() {
  return (
    <div className={styles.grid1Parent}>
      <Image
        className={styles.grid1Icon}
        width={1918}
        height={391}
        sizes="100vw"
        src="/images/services/solar/CTA/grid-1-1.png"
        alt=""
      />

      <ServiceSolutionsMobileGrid
        title="Our Commercial Solar Solutions"
        solutions={solarSolutions.map((item) => ({
          title: item.title,
          description: item.description,
          image: item.image,
          imageClassName: "imageClassName" in item ? item.imageClassName : undefined,
        }))}
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
                src="/images/services/solar/CTA/rectangle-15.png"
                alt="Rooftop solar for factories and warehouses"
              />
              <div className={styles.rooftopSolarForFactoriesAnParent}>
                <div className={styles.rooftopSolarFor}>
                  Rooftop Solar for Factories and Warehouses
                </div>
                <div className={styles.highCapacitySystemsEngineer}>
                  High-capacity systems engineered for industrial roof structures
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
                  src="/images/services/solar/CTA/rectangle-16.png"
                  alt="Off-grid solar systems"
                />
              </div>
              <div className={styles.rooftopSolarForFactoriesAnParent}>
                <div className={styles.rooftopSolarFor}>Off-Grid Solar Systems</div>
                <div className={styles.fullyIndependentPower}>
                  Fully independent power supply for remote industrial facilities
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
                src="/images/services/solar/CTA/rectangle-16-1.png"
                alt="Ground-mounted solar power plants"
              />
              <div className={styles.rooftopSolarForFactoriesAnParent}>
                <div className={styles.rooftopSolarFor}>
                  Ground-Mounted Solar Power Plants
                </div>
                <div className={styles.optimizedForBusinesses}>
                  Optimized for businesses with available open land
                </div>
              </div>
            </div>
            <div className={styles.rectangleParent5}>
              <div className={styles.rectangleImageWrap}>
                <Image
                  className={styles.rectangleIconAudit}
                  width={473}
                  height={277}
                  sizes="100vw"
                  src="/images/services/solar/CTA/commercial-solar-energy-audit.png"
                  alt="Commercial solar energy audit"
                />
              </div>
              <div className={styles.rooftopSolarForFactoriesAnParent}>
                <div className={styles.rooftopSolarFor}>
                  Commercial Solar Energy Audit
                </div>
                <div className={styles.detailedAssessmentOf}>
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
                src="/images/services/solar/CTA/rectangle-16-2.png"
                alt="Solar and battery storage systems"
              />
              <div className={styles.rooftopSolarForFactoriesAnParent}>
                <div className={styles.rooftopSolarFor}>
                  Solar and Battery Storage Systems
                </div>
                <div className={styles.uninterruptedPowerSupply}>
                  Uninterrupted power supply for manufacturing and cold storage
                  units
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
                  src="/images/services/solar/CTA/on-grid-net-metering.png"
                  alt="On-grid solar with net metering"
                />
              </div>
              <div className={styles.rooftopSolarForFactoriesAnParent}>
                <div className={styles.rooftopSolarFor}>
                  On-Grid Solar with Net Metering
                </div>
                <div className={styles.fullyIndependentPower}>
                  Stay connected to the grid and reduce your electricity bill
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
