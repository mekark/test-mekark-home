import type { NextPage } from "next";
import Image from "next/image";
import { CTA_PHONE_ICON, PHONE_HREF } from "@/lib/contact";
import styles from "./index.module.css";

type Feature = {
  icon: string;
  title: string;
  description: string;
  descriptionClass?: string;
};

const FEATURES: Feature[] = [
  {
    icon: "/images/industries/logistics/CTA/pen-tool-icon.svg",
    title: "In-House Design & Engineering",
    description:
      "Every pre-engineered warehouse structure is precision-engineered by our in-house structural engineers, architects, and MEP teams under one roof.",
  },
  {
    icon: "/images/industries/logistics/CTA/clock-icon.svg",
    title: "On-Time, On-Budget Delivery",
    description:
      "Factory-controlled fabrication means predictable timelines and no cost surprises, making Mekark a reliable distribution centre builder.",
    descriptionClass: styles.factoryControlledFabrication,
  },
  {
    icon: "/images/industries/logistics/CTA/factory-icon.svg",
    title: "Large-Scale Manufacturing Capacity",
    description:
      "As a leading PEB warehouse producer in South India, Mekark manufactures up to 3,000 MT per month at a 6,00,000 sq.ft. fully automatic facility, with no third-party intervention.",
  },
  {
    icon: "/images/industries/logistics/CTA/badge-check-icon.svg",
    title: "Regulatory Compliant Engineering",
    description:
      "All structures meet IS 800:2007, IS 875 (wind loads), and IS 1893 (seismic zones II-V), with fire ratings per NBC or client requirement.",
  },
  {
    icon: "/images/industries/logistics/CTA/map-pinned-icon.svg",
    title: "Regional Project Execution Across South India",
    description:
      "As a trusted warehouse shed manufacturer that South India businesses rely on, our teams deliver industrial warehouse construction across Tamil Nadu, Karnataka, Andhra Pradesh, Telangana, and Kerala, backed by an integrated design-to-erection process.",
    descriptionClass: styles.asATrusted,
  },
  {
    icon: "/images/industries/logistics/CTA/shield-check-icon.svg",
    title: "Long-Lasting Structural Performance",
    description:
      "Pre-engineered warehouse buildings are built for a 50+ year service life, with Zincalume/Galvalume cladding backed by a 25-year coating guarantee.",
    descriptionClass: styles.preEngineeredWarehouseBuild,
  },
];

const CTA: NextPage = () => {
  return (
    <div className={styles.cta}>
      <div className={styles.section}>
        <div className={styles.planningAWarehouseOrLogistParent}>
          <div className={styles.planningAWarehouse}>
            Planning a Warehouse or Logistics Facility in South India?
            <br />
          </div>
          <div className={styles.mekarksProjectCalendar}>
            <span className={styles.subtitleLine}>
              Slots fill up fast. Get a free site assessment, the right
            </span>
            <span className={styles.subtitleLine}>
              {" "}
              PEB recommendation, and a transparent estimate
            </span>
            <span className={styles.subtitleLine}>
              {" "}
              within 48 hours, no obligation.
            </span>
          </div>
        </div>
        <div className={styles.sectionChild} />
        <a href={PHONE_HREF} className={styles.cta2}>
          <b className={styles.talkToOur}>Talk to Our Expert</b>
          <div className={styles.component4}>
            <Image
              className={styles.vectorIcon}
              src={CTA_PHONE_ICON}
              width={27}
              height={27}
              sizes="27px"
              alt="Phone icon"
            />
          </div>
        </a>
        <div className={styles.workerVisual}>
          <Image
            className={styles.sectionItem}
            src="/images/industries/logistics/CTA/badge-frame.svg"
            width={180}
            height={180}
            sizes="100vw"
            alt="Decorative badge frame"
          />
          <Image
            className={styles.sectionInner}
            src="/images/industries/logistics/CTA/section-inner.svg"
            width={317}
            height={213}
            sizes="100vw"
            alt="Mekark logistics consultant"
          />
          <Image
            className={styles.eotCta1}
            src="/images/industries/logistics/CTA/eot-cta-worker.webp"
            width={491}
            height={323}
            sizes="(max-width: 768px) 96vw, (max-width: 1200px) 92vw, 491px"
            alt="Mekark warehouse construction expert"
          />
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.imageIcon}
            src="/images/industries/logistics/CTA/warehouse-forklift.webp"
            width={937}
            height={636}
            sizes="100vw"
            alt="Forklift operating inside a Mekark warehouse facility"
          />
        </div>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.frameGroup}>
        {FEATURES.map((feature) => (
          <div key={feature.title} className={styles.divsvcIconParent}>
            <div className={styles.divsvcIcon}>
              <Image
                className={styles.lucidedraftingCompassIcon}
                src={feature.icon}
                width={26}
                height={26}
                sizes="100vw"
                alt={`${feature.title} icon`}
              />
            </div>
            <div className={styles.inHouseDesignEngineeringParent}>
              <div className={styles.inHouseDesign}>{feature.title}</div>
              <div
                className={
                  feature.descriptionClass ?? styles.everyPreEngineeredWarehouse
                }
              >
                {feature.description}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.frameParent3}>
        <div className={styles.whyWarehousesFromMekarkAreWrapper}>
          <b className={styles.whyWarehousesFrom}>
            Why Warehouses from Mekark Are the Better Choice
          </b>
        </div>
        <div className={styles.mekarkIsOne}>
          Mekark is one of South India&apos;s most trusted pre-engineered
          warehouse building manufacturers, offering in-house design,
          manufacturing, and erection capability.
        </div>
      </div>
    </div>
  );
};

export default CTA;
