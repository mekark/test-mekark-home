"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IndustryMobileCtaBanner } from "@/components/industries/shared/IndustryMobileCtaBanner";
import ElectronicsCtaBanner from "@/components/industries/electronics/ElectronicsCtaBanner";
import mobileStyles from "@/components/industries/electronics/electronicsCtaMobile.module.css";
import macStyles from "@/components/industries/electronics/CtaSectionMac.module.css";
import whyStyles from "@/components/industries/electronics/CtaSectionWhy.module.css";
import {
  industryMobileFeatureCardClass,
  industryMobileFeatureDescriptionClass,
  industryMobileFeatureIconGradientClass,
  industryMobileFeatureIconWrapClass,
  industryMobileFeatureTextWrapClass,
  industryMobileFeatureTitleClass,
} from "@/components/industries/shared/industryMobileFeatureCard";

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

const electronicsCtaWorkerAssets = {
  badgeFrame: "/images/industries/electronics/cta/frame-76.svg",
  sectionInner: "/images/industries/electronics/cta/frame-275.svg",
  worker: "/images/industries/logistics/CTA/eot-cta-worker.png",
  arrow: "/images/industries/electronics/cta/cta-arrow.svg",
};

/** Desktop column layout — xl uses uniform vw; Mac overrides per-column in CSS */
const desktopFeatureColumns: { features: Feature[]; columnClass: string }[] = [
  { features: [features[0], features[3]], columnClass: "featureColumnA" },
  { features: [features[1], features[4]], columnClass: "featureColumnB" },
  { features: [features[2], features[5]], columnClass: "featureColumnC" },
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

function FeatureIcon({ src }: { src: string }) {
  return (
    <div className={industryMobileFeatureIconWrapClass}>
      <div
        aria-hidden
        className={industryMobileFeatureIconGradientClass}
        style={{
          backgroundImage:
            "linear-gradient(145deg, rgba(196, 22, 28, 0.3) 0%, rgba(196, 22, 28, 0.15) 100%)",
        }}
      />
      <span className="relative size-[22px] overflow-hidden lg:size-[26px]">
        <Image src={src} alt="" fill className="object-contain" aria-hidden />
      </span>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_1.079px_0px_0px_rgba(255,255,255,0.08)]"
      />
    </div>
  );
}

function FeatureCard({ icon, title, description }: Feature) {
  return (
    <article className={industryMobileFeatureCardClass}>
      <FeatureIcon src={icon} />
      <div className={industryMobileFeatureTextWrapClass}>
        <h3 className={industryMobileFeatureTitleClass}>{title}</h3>
        <p className={industryMobileFeatureDescriptionClass}>{description}</p>
      </div>
    </article>
  );
}

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
          alt=""
        />
      </div>
      <div className={whyStyles.inHouseDesignEngineeringParent}>
        <div className={whyStyles.inHouseDesign}>{title}</div>
        <div className={whyStyles.cardDesc}>{description}</div>
      </div>
    </div>
  );
}

export default function CtaSection() {
  return (
    <section className={`w-full bg-[#f6f6f6] py-16 lg:py-24 min-[1201px]:py-0 ${macStyles.scope}`}>
      <div className={`mx-auto max-w-[1920px] px-6 lg:px-20 min-[1201px]:px-0 ${macStyles.scopeInner}`}>
        <div className="min-[1201px]:hidden">
          <IndustryMobileCtaBanner
            className={mobileStyles.electronicsMobileCta}
            title="Planning an Electronics Manufacturing Facility in South India?"
            subtitle={
              <>
                Every week your production line isn&apos;t running is lost revenue.
                Mekark&apos;s team will
                <br />
                assess your process requirements, cleanroom class, ESD protection,
                utility load, and deliver a transparent budgetary estimate within
                24 hours. No obligation, just honest expert advice.
              </>
            }
            buttonText="Talk to Our Expert"
            workerAlt="Mekark electronics manufacturing expert"
            assets={electronicsCtaWorkerAssets}
          />
        </div>

        <div className="min-[1201px]:px-20">
          <ElectronicsCtaBanner />
        </div>

        <div className={whyStyles.whyCanvas}>
          <div className={whyStyles.frameParent3}>
            <h2 className={whyStyles.whyWarehousesFrom}>
              Why Electronics Facilities from Mekark Are the Better Choice
            </h2>
            <p className={whyStyles.mekarkIsOne}>
              Mekark is one of South India&apos;s most trusted electronics manufacturing
              facility construction companies, offering in-house design, fabrication, and
              MEP integration under one roof — not a general contractor treating your
              plant like a generic industrial shed.
            </p>
          </div>

          <div className={whyStyles.whyBody}>
            <div className={whyStyles.frameGroup}>
              {desktopFeatureColumns.map(({ features: columnFeatures, columnClass }) => (
                <div
                  key={columnFeatures[0].title}
                  className={`${whyStyles.featureColumn} ${whyStyles[columnClass as "featureColumnA" | "featureColumnB" | "featureColumnC"]}`}
                >
                  {columnFeatures.map((feature) => (
                    <DesktopWhyFeature key={feature.title} {...feature} />
                  ))}
                </div>
              ))}
            </div>

            <div className={whyStyles.frameParent}>
              <div className={whyStyles.imageWrapper}>
                <Image
                  className={whyStyles.imageIcon}
                  src="/images/industries/electronics/cta/manufacturing-floor-alt.png"
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

        <div className="mt-20 lg:mt-32 min-[1201px]:hidden">
          <motion.header
            className="mx-auto mb-12 w-full text-center lg:mb-16"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <h2 className="font-manrope text-[32px] font-bold leading-tight tracking-[-0.02em] text-[#111] sm:text-[40px] lg:text-[50px] lg:leading-[65px]">
              Why Electronics Facilities from Mekark Are the Better Choice
            </h2>
            <p className="relative mx-auto mt-4 w-full max-w-[1066px] text-center font-manrope text-base font-normal leading-relaxed text-black sm:text-lg sm:leading-[27px] lg:leading-[27px]">
              Mekark is one of South India&apos;s most trusted electronics manufacturing facility construction companies, offering in-house design, fabrication, and MEP integration under one roof — not a general contractor treating your plant like a generic industrial shed.
            </p>
          </motion.header>

          <motion.div
            className="relative mx-auto mb-8 h-[200px] w-full overflow-hidden rounded-2xl sm:mb-10 sm:h-[280px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <Image
              src="/images/industries/electronics/cta/manufacturing-floor-alt.png"
              alt="Workers at an electronics manufacturing production line"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {features.map((feature) => (
              <motion.div key={feature.title} variants={itemVariants}>
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="min-[1201px]:px-20">
        <motion.div
          className={`mx-auto mt-12 w-full max-w-[1422px] rounded-[40px] border border-[rgba(228,0,21,0.5)] bg-[rgba(228,0,21,0.05)] px-5 py-5 text-center sm:mt-16 sm:px-8 sm:py-6 lg:mt-20 lg:px-8 lg:py-6 min-[1201px]:mt-20 ${macStyles.bottomBanner}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <p className={`font-manrope text-base font-normal leading-normal text-[#4c4c4c] sm:text-lg lg:whitespace-nowrap ${macStyles.bottomBannerText}`}>
            The difference isn&apos;t just how fast an electronics facility gets
            built;{" "}
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
