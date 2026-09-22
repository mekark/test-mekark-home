"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CTA_PHONE_ICON, PHONE_HREF } from "@/lib/contact";
import ElectronicsCtaBanner from "@/components/industries/electronics/ElectronicsCtaBanner";
import mobileStyles from "@/components/industries/electronics/electronicsCtaMobile.module.css";
import macStyles from "@/components/industries/electronics/CtaSectionMac.module.css";
import whyStyles from "@/components/industries/electronics/CtaSectionWhy.module.css";

type Feature = {
  icon: string;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: "/images/industries/electronics/cta/icons/pen-tool.svg",
    title: "In-House Engineering-Led Design",
    description:
      "Every facility is designed using STAAD Pro, TEKLA, and Autodesk by our in-house structural engineers, MEP teams, and clean room specialists.",
  },
  {
    icon: "/images/industries/electronics/cta/icons/factory.svg",
    title: "Large-Scale In-House Fabrication Capacity",
    description:
      "Mekark fabricates over 3,000 MT of precision steel per month across four manufacturing plants in Tamil Nadu, with zero third-party dependency.",
  },
  {
    icon: "/images/industries/electronics/cta/icons/map-pinned.svg",
    title: "Regional Project Execution Across South India",
    description:
      "From Chennai and Sriperumbudur to Hosur, Oragadam, Coimbatore, Bengaluru, and Hyderabad, our teams deliver electronics factory construction backed by an integrated design-to-commissioning process.",
  },
  {
    icon: "/images/industries/electronics/cta/icons/clock.svg",
    title: "30–40% Faster Delivery Than Conventional Construction",
    description:
      "Factory-controlled fabrication and pre-engineered methods mean your production line starts generating revenue sooner.",
  },
  {
    icon: "/images/industries/electronics/cta/icons/repeat.svg",
    title: "True Turnkey, Zero Fragmentation",
    description:
      "Structural steel, civil works, MEP, HVAC, clean rooms, and utilities, one team, one contract, no blame-shifting between trades.",
  },
  {
    icon: "/images/industries/electronics/cta/icons/shield-check.svg",
    title: "ISO-Certified Quality & Safety Standards",
    description:
      "Every facility is delivered to certified quality benchmarks, with documented engineering before a single beam is cut.",
  },
];

/** Desktop column layout — xl uses uniform vw; Mac overrides per-column in CSS */
const desktopFeatureColumns: { features: Feature[]; columnClass: string }[] = [
  { features: [features[0], features[3]], columnClass: "featureColumnA" },
  { features: [features[1], features[4]], columnClass: "featureColumnB" },
  { features: [features[2], features[5]], columnClass: "featureColumnC" },
];

function DesktopWhyFeature({ icon, title, description }: Feature) {
  return (
    <div className={whyStyles.divsvcIconParent}>
      <div className={whyStyles.divsvcIcon}>
        <Image
          className={whyStyles.lucidedraftingCompassIcon}
          src={icon}
          width={26}
          height={26}
          sizes="100vw"
          alt={`${title} icon`}
        />
      </div>
      <div className={whyStyles.inHouseDesignEngineeringParent}>
        <div className={whyStyles.inHouseDesign}>{title}</div>
        <div className={whyStyles.cardDesc}>{description}</div>
      </div>
    </div>
  );
}

function MobileCtaWhy() {
  return (
    <div id="why-mekark" className={mobileStyles.cta}>
      <div className={mobileStyles.section}>
        <div className={mobileStyles.planningAWarehouseOrLogistParent}>
          <div className={mobileStyles.planningAWarehouse}>
            <span className={mobileStyles.ctaTitleLine}>
              Planning an Electronics{" "}
            </span>
            <span className={mobileStyles.ctaTitleLine}>
              Manufacturing Facility{" "}
            </span>
            <span className={mobileStyles.ctaTitleLine}>in South India?</span>
          </div>
          <p className={mobileStyles.mekarksProjectCalendar}>
            Every week your production line isn&apos;t running is lost revenue.
            Mekark&apos;s team will assess your process requirements, cleanroom
            class, ESD protection, utility load, and deliver a transparent
            budgetary estimate within 24 hours. No obligation, just honest expert
            advice.
          </p>
        </div>
        <div className={mobileStyles.sectionChild} />
        <a href={PHONE_HREF} className={mobileStyles.cta2}>
          <b className={mobileStyles.talkToOur}>Talk to Our Expert</b>
          <div className={mobileStyles.component4}>
            <Image
              className={mobileStyles.vectorIcon}
              src={CTA_PHONE_ICON}
              width={27}
              height={27}
              sizes="27px"
              alt="Phone icon"
            />
          </div>
        </a>
        <div className={mobileStyles.workerVisual}>
          <Image
            className={mobileStyles.sectionItem}
            src="/images/industries/electronics/cta/frame-76.svg"
            width={180}
            height={180}
            sizes="100vw"
            alt="Decorative badge frame"
          />
          <Image
            className={mobileStyles.sectionInner}
            src="/images/industries/electronics/cta/frame-275.svg"
            width={317}
            height={213}
            sizes="100vw"
            alt="Decorative section frame"
          />
          <Image
            className={mobileStyles.eotCta1}
            src="/images/industries/electronics/cta/engineer.webp"
            width={491}
            height={323}
            sizes="(max-width: 768px) 96vw, (max-width: 1200px) 92vw, 491px"
            alt="Mekark electronics manufacturing expert"
          />
        </div>
      </div>

      <div className={mobileStyles.frameParent}>
        <div className={mobileStyles.imageWrapper}>
          <Image
            className={mobileStyles.imageIcon}
            src="/images/industries/electronics/cta/manufacturing-floor-alt.webp"
            width={937}
            height={636}
            sizes="100vw"
            alt="Workers at an electronics manufacturing production line"
          />
        </div>
        <div className={mobileStyles.frameChild} aria-hidden />
      </div>

      <div className={mobileStyles.frameGroup}>
        {features.map((feature) => (
          <div key={feature.title} className={mobileStyles.divsvcIconParent}>
            <div className={mobileStyles.divsvcIcon}>
              <Image
                className={mobileStyles.lucidedraftingCompassIcon}
                src={feature.icon}
                width={26}
                height={26}
                sizes="100vw"
                alt={`${feature.title} icon`}
              />
            </div>
            <div className={mobileStyles.inHouseDesignEngineeringParent}>
              <div className={mobileStyles.inHouseDesign}>{feature.title}</div>
              <div className={mobileStyles.everyPreEngineeredWarehouse}>
                {feature.description}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={mobileStyles.frameParent3}>
        <div className={mobileStyles.whyWarehousesFromMekarkAreWrapper}>
          <b className={mobileStyles.whyWarehousesFrom}>
            <span className={mobileStyles.whyTitleLine}>
              Why Electronics Facilities{" "}
            </span>
            <span className={mobileStyles.whyTitleLine}>
              from Mekark Are the{" "}
            </span>
            <span className={mobileStyles.whyTitleLine}>Better Choice</span>
          </b>
        </div>
        <div className={mobileStyles.mekarkIsOne}>
          Mekark is one of South India&apos;s most trusted electronics
          manufacturing facility construction companies, offering in-house
          design, fabrication, and MEP integration under one roof — not a general
          contractor treating your plant like a generic industrial shed.
        </div>
      </div>
    </div>
  );
}

export default function CtaSection() {
  return (
    <section
      className={`w-full bg-[#f6f6f6] py-0 min-[1201px]:py-0 ${macStyles.scope}`}
    >
      <div
        className={`mx-auto max-w-[1920px] px-0 min-[1201px]:px-0 ${macStyles.scopeInner}`}
      >
        <div className="min-[1201px]:hidden">
          <MobileCtaWhy />
        </div>

        <div className="hidden min-[1201px]:block">
          <div className="min-[1201px]:px-20">
            <ElectronicsCtaBanner />
          </div>

          <div className={whyStyles.whyCanvas}>
            <div className={whyStyles.frameParent3}>
              <h2 className={whyStyles.whyWarehousesFrom}>
                <span className={whyStyles.whyTitleLine}>
                  Why Electronics Facilities{" "}
                </span>
                <span className={whyStyles.whyTitleLine}>
                  from Mekark Are the{" "}
                </span>
                <span className={whyStyles.whyTitleLine}>Better Choice</span>
              </h2>
              <p className={whyStyles.mekarkIsOne}>
                Mekark is one of South India&apos;s most trusted electronics
                manufacturing facility construction companies, offering in-house
                design, fabrication, and MEP integration under one roof — not a
                general contractor treating your plant like a generic industrial
                shed.
              </p>
            </div>

            <div className={whyStyles.whyBody}>
              <div className={whyStyles.frameGroup}>
                {desktopFeatureColumns.map(
                  ({ features: columnFeatures, columnClass }) => (
                    <div
                      key={columnFeatures[0].title}
                      className={`${whyStyles.featureColumn} ${whyStyles[columnClass as "featureColumnA" | "featureColumnB" | "featureColumnC"]}`}
                    >
                      {columnFeatures.map((feature) => (
                        <DesktopWhyFeature key={feature.title} {...feature} />
                      ))}
                    </div>
                  ),
                )}
              </div>

              <div className={whyStyles.frameParent}>
                <div className={whyStyles.imageWrapper}>
                  <Image
                    className={whyStyles.imageIcon}
                    src="/images/industries/electronics/cta/manufacturing-floor-alt.webp"
                    width={937}
                    height={636}
                    sizes="100vw"
                    alt="Workers at an electronics manufacturing production line"
                  />
                </div>
                <div className={whyStyles.frameChild} aria-hidden />
              </div>
            </div>
          </div>
        </div>

        <div className="px-5 pb-10 sm:px-8 min-[1201px]:px-20 min-[1201px]:pb-0">
          <motion.div
            className={`mx-auto mt-8 w-full max-w-[1422px] rounded-[40px] border border-[rgba(228,0,21,0.5)] bg-[rgba(228,0,21,0.05)] px-5 py-5 text-center sm:mt-12 sm:px-8 sm:py-6 lg:mt-16 lg:px-8 lg:py-6 min-[1201px]:mt-20 ${macStyles.bottomBanner}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <p
              className={`font-manrope text-base font-normal leading-normal text-[#4c4c4c] sm:text-lg lg:whitespace-nowrap ${macStyles.bottomBannerText}`}
            >
              The difference isn&apos;t just how fast an electronics facility
              gets built;{" "}
              <span className="font-semibold text-[#f01d23]">
                it&apos;s whether it protects your yield from day one.
              </span>{" "}
              That&apos;s the engineering standard Mekark builds to.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
