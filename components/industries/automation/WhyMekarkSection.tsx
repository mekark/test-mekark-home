import Image from "next/image";
import Link from "next/link";
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

function ConsultationLink({ className }: { className: string }) {
  return (
    <Link href="/#enquiry" className={className}>
      <b className={styles.consultationLabel}>Request a Free Consultation</b>
      <span className={styles.arrowWrap}>
        <Image
          src="/images/industries/automation/why-mekark/arrow-right-dark.svg"
          alt=""
          fill
          className={styles.arrowIcon}
          aria-hidden
        />
      </span>
    </Link>
  );
}

export default function WhyMekarkSection() {
  return (
    <section className={styles.cta}>
      <div className={styles.ctaWide}>
        <div className={styles.section}>
          <div className={styles.sectionBg} aria-hidden />

          <div className={styles.ctaVisual}>
            <Image
              className={styles.sectionPattern}
              src="/images/industries/automation/why-mekark/frame-pattern.svg"
              width={240}
              height={161}
              alt=""
              aria-hidden
            />
            <Image
              className={styles.sectionItem}
              src="/images/industries/automation/why-mekark/frame-grid.svg"
              width={130}
              height={130}
              alt=""
              aria-hidden
            />
            <div className={styles.workerImageWrap}>
              <Image
                className={styles.workerImage}
                src="/images/industries/automation/why-mekark/worker.png"
                alt="Mekark engineer in hard hat reviewing facility plans on tablet"
                fill
                sizes="380px"
                priority
              />
            </div>
          </div>

          <div className={styles.sectionInner}>
            <div className={styles.textParent}>
              <h2 className={styles.heading}>
                Planning an Automation Manufacturing Facility in South India?
              </h2>
              <p className={styles.body}>
                Every week your production line isn&apos;t running is lost
                throughput and delayed client commitments. Mekark&apos;s team
                will assess your process requirements, ESD and vibration control
                needs, and utility load, and deliver a transparent budgetary
                estimate within 24 hours. No obligation, just honest expert
                advice.
              </p>
            </div>

            <ConsultationLink className={styles.ctaButton} />
          </div>

          <div className={styles.mobileCta}>
            <div className={styles.mobileImageWrap}>
              <Image
                src="/images/industries/automation/why-mekark/frame-pattern.svg"
                alt=""
                fill
                style={{ objectFit: "contain", opacity: 0.8 }}
                aria-hidden
              />
              <Image
                className={styles.mobileWorkerImage}
                src="/images/industries/automation/why-mekark/worker.png"
                alt="Mekark engineer reviewing automation facility plans on tablet"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
                sizes="260px"
                priority
              />
            </div>
            <h2 className={styles.mobileHeading}>
              Planning an Automation Manufacturing Facility in South India?
            </h2>
            <p className={styles.mobileBody}>
              Every week your production line isn&apos;t running is lost
              throughput and delayed client commitments. Mekark&apos;s team will
              assess your process requirements, ESD and vibration control needs,
              and utility load, and deliver a transparent budgetary estimate
              within 24 hours. No obligation, just honest expert advice.
            </p>
            <ConsultationLink className={styles.mobileButton} />
          </div>
        </div>
      </div>

      <div className={styles.inner}>
        <div className={styles.frameParent3}>
          <b className={styles.whyHeading}>
            Why Automation Facilities from Mekark Are the Better Choice
          </b>
          <p className={styles.whySubtext}>
            Mekark is one of South India&apos;s most trusted automation
            manufacturing facility construction companies, offering in-house
            design, fabrication, and MEP integration under one roof, not a
            general contractor treating your plant like a generic industrial
            shed.
          </p>
        </div>

        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            {features.map((feature) => (
              <div key={feature.title} className={styles.divsvcIconParent}>
                <div className={styles.divsvcIcon}>
                  <Image
                    className={styles.featureIcon}
                    src={feature.icon}
                    width={26}
                    height={26}
                    alt=""
                    aria-hidden
                  />
                </div>
                <div className={styles.inHouseDesignEngineeringParent}>
                  <h3 className={styles.inHouseDesign}>{feature.title}</h3>
                  <p className={styles.featureDescription}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            className={styles.imageWrapper}
            role="img"
            aria-label="Automated manufacturing facility with robotic assembly line"
          >
            <div className={styles.frameChild} aria-hidden />
          </div>
        </div>

        {/* Bottom callout */}
        <div className={styles.overlay}>
          <p className={styles.overlayText}>
            The difference isn&apos;t just how fast an automation plant gets
            built,{" "}
            <span className={styles.overlayHighlight}>
              it&apos;s whether it protects equipment precision, uptime, and
              your Industry 4.0 roadmap from day one
            </span>
            . That&apos;s the engineering standard Mekark builds to.
          </p>
        </div>
      </div>
    </section>
  );
}
