import Image from "next/image";
import { CTA_PHONE_ICON, PHONE_HREF } from "@/lib/contact";
import styles from "./WhyMekarkSection.module.css";

const FEATURES = [
  {
    icon: "/images/industries/textile/why-mekark/cog-icon.svg",
    title: "Industry-Specific Engineering Expertise",
    description:
      "We understand load calculations, humidification, ETP, and fire standards unique to textile mills, not just another warehouse contractor.",
  },
  {
    icon: "/images/industries/textile/why-mekark/factory-icon.svg",
    title: "Large-Scale PEB Manufacturing Capacity",
    description:
      "With 40,000 MT/year PEB construction capacity across a 70+ lakh sq.ft. campus and 175+ engineers, we guarantee your spinning or weaving factory opens on time.",
  },
  {
    icon: "/images/industries/textile/why-mekark/layers-icon.svg",
    title: "One-Stop Textile Construction Solution",
    description:
      "From civil, structural steel, and MEP works to ETP installation and complete fit-outs, all under one roof.",
  },
  {
    icon: "/images/industries/textile/why-mekark/badge-check-icon.svg",
    title: "ISO Certified & Compliance-Ready",
    description:
      "All our textile factory buildings comply with the Factories Act, Fire NOC, Pollution Control Board, and Green Building norms from day one.",
  },
] as const;

export default function WhyMekarkSection() {
  return (
    <div id="why-mekark" className={styles.cta}>
      <div className={styles.section}>
        <div className={styles.planningAWarehouseOrLogistParent}>
          <p className={styles.planningAWarehouse}>
            Planning a Spinning Mill or Garment Factory?
            <br />
            Your Project Slot Won&apos;t Stay Open Long.
          </p>
          <p className={styles.mekarksProjectCalendar}>
            Mekark&apos;s project calendar fills up fast. Textile manufacturers who
            book a site consultation now lock in priority scheduling, current steel
            pricing, and our fastest delivery timeline.
          </p>
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
            alt="Mekark textile facility construction expert"
            priority
          />
        </div>
      </div>

      <div className={styles.frameParent}>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.imageIcon}
            src="/images/industries/textile/why-mekark/factory.webp"
            width={1066}
            height={723}
            sizes="100vw"
            alt="Textile mill spinning machinery with yarn cones"
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
              <div className={styles.everyPreEngineeredWarehouse}>
                {feature.description}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.frameParent3}>
        <div className={styles.whyWarehousesFromMekarkAreWrapper}>
          <b className={styles.whyWarehousesFrom}>
            Why Textile Factories from Mekark Are the Better Choice
          </b>
        </div>
        <div className={styles.mekarkIsOne}>
          Construction of spinning mills and garment manufacturing units is a
          multi-crore project; delays mean lost production days, and unmet
          specifications mean costly rework.
        </div>
      </div>
    </div>
  );
}
