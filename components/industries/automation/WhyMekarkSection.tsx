import Image from "next/image";
import { IndustryMobileCtaBanner } from "@/components/industries/shared/IndustryMobileCtaBanner";
import { logisticsCtaWorkerAssets } from "@/components/industries/shared/logisticsCtaWorkerAssets";
import { CTA_PHONE_ICON, PHONE_HREF } from "@/lib/contact";
import styles from "./WhyMekarkSection.module.css";

type Feature = {
  title: string;
  description: string;
  icon: string;
};

const features: Feature[] = [
  {
    title: "In-House Engineering-Led Design",
    description:
      "Every facility is designed using STAAD Pro, TEKLA, and Autodesk by our in-house structural engineers, MEP teams, and automation infrastructure specialists.",
    icon: "/images/industries/automation/why-mekark/icon-pen-tool.svg",
  },
  {
    title: "Large-Scale In-House Fabrication Capacity",
    description:
      "Mekark fabricates over 3,000 MT of precision steel per month across four manufacturing plants in Tamil Nadu, with zero third-party dependency.",
    icon: "/images/industries/automation/why-mekark/icon-factory.svg",
  },
  {
    title: "Regional Project Execution Across South India",
    description:
      "From Chennai and Coimbatore to Hosur, Bengaluru, Hyderabad, and Kochi, our teams deliver automation factory construction backed by an integrated design-to-commissioning process.",
    icon: "/images/industries/automation/why-mekark/icon-map-pinned.svg",
  },
  {
    title: "30–40% Faster Delivery Than Conventional Construction",
    description:
      "Factory-controlled fabrication and pre-engineered methods mean your production line starts generating revenue sooner.",
    icon: "/images/industries/automation/why-mekark/icon-clock.svg",
  },
  {
    title: "True Turnkey, Zero Fragmentation",
    description:
      "Structural steel, civil works, MEP, HVAC, ESD flooring, and smart factory infrastructure, one team, one contract, no blame-shifting between trades.",
    icon: "/images/industries/automation/why-mekark/icon-repeat.svg",
  },
  {
    title: "Precision-Engineering Construction Standards",
    description:
      "Every facility is delivered to tight tolerance, vibration, and ESD benchmarks, with documented engineering before a single beam is cut.",
    icon: "/images/industries/automation/why-mekark/icon-shield-check.svg",
  },
];

export default function WhyMekarkSection() {
  return (
    <section id="why-mekark" className={styles.cta}>
      <div className="min-[769px]:hidden">
        <IndustryMobileCtaBanner
          title={
            <>
              <span style={{ display: "block", whiteSpace: "nowrap" }}>
                Planning an Automation
              </span>
              <span style={{ display: "block", whiteSpace: "nowrap" }}>
                Manufacturing Facility
              </span>
              <span style={{ display: "block", whiteSpace: "nowrap" }}>
                in South India?
              </span>
            </>
          }
          subtitle={
            <>
              Every week your production line isn&apos;t running is lost
              throughput and delayed client commitments. Mekark&apos;s team will
              assess your process requirements, ESD and vibration control needs,
              and utility load, and deliver a transparent budgetary estimate
              within 24 hours. No obligation, just honest expert advice.
            </>
          }
          buttonText="Talk to Our Expert"
          workerAlt="Mekark engineer reviewing automation facility plans"
          assets={logisticsCtaWorkerAssets}
        />
      </div>

      <div className={`${styles.section} ${styles.desktopCtaBanner}`}>
        <div className={styles.planningAWarehouseOrLogistParent}>
          <div className={styles.planningAWarehouse}>
            <span>
              Planning an Automation
              <br />
              Manufacturing Facility in South India?
            </span>
          </div>
          <div className={styles.mekarksProjectCalendar}>
            Every week your production line isn&apos;t running is lost throughput
            and delayed client commitments. Mekark&apos;s team will assess your
            process requirements, ESD and vibration control needs, and utility
            load, and deliver a transparent budgetary estimate within 24 hours.
            No obligation, just honest expert advice.
          </div>
        </div>
        <div className={styles.sectionChild} />
        <a href={PHONE_HREF} className={styles.cta2}>
          <b className={styles.talkToOur}>Talk to Our Expert</b>
          <div className={styles.component4}>
            <Image
              className={styles.vectorIcon}
              src={CTA_PHONE_ICON}
              alt="Phone icon"
              fill
              sizes="27px"
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
            alt="Mekark engineer reviewing automation facility plans"
            priority
          />
        </div>
      </div>

      <div className={styles.frameParent3}>
        <div className={styles.whyWarehousesFromMekarkAreWrapper}>
          <b className={styles.whyWarehousesFrom}>
            Why Automation Facilities from Mekark Are the Better Choice
          </b>
        </div>
        <div className={styles.mekarkIsOne}>
          Mekark is one of South India&apos;s most trusted automation
          manufacturing facility construction companies, offering in-house design,
          fabrication, and MEP integration under one roof, not a general
          contractor treating your plant like a generic industrial shed.
        </div>
      </div>

      <div className={styles.featuresArea}>
        <div className={styles.frameGroup}>
          {features.map((feature) => (
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

        <div className={styles.frameParent}>
          <div className={styles.imageWrapper} />
          <div className={styles.frameChild} aria-hidden />
          <div className={styles.mobileImageFade} aria-hidden />
        </div>
      </div>

      <div className={styles.overlay}>
        <p className={styles.overlayText}>
          The difference isn&apos;t just how fast an automation plant gets built,{" "}
          <span className={styles.overlayHighlight}>
            it&apos;s whether it protects equipment precision, uptime, and your
            Industry 4.0 roadmap from day one
          </span>
          . That&apos;s the engineering standard Mekark builds to.
        </p>
      </div>
    </section>
  );
}
