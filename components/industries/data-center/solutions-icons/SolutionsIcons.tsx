"use client";

import Image from "next/image";
import { useDesignScale } from "@/lib/hooks/useDesignScale";
import styles from "./index.module.css";

const DESIGN_HEIGHT = 780;

const solutionCards = [
  {
    icon: "/images/industries/data-center/solutions/icons/1.webp",
    title: "Hyperscale Data Centers",
    description:
      "Large-footprint facilities engineered for cloud providers and high-density compute deployments.",
  },
  {
    icon: "/images/industries/data-center/solutions/icons/2.webp",
    title: "Colocation Data Centers",
    description:
      "Multi-tenant-ready white space with flexible power and cooling allocation per client.",
  },
  {
    icon: "/images/industries/data-center/solutions/icons/3.webp",
    title: "Edge & Modular Data Centers",
    description:
      "Prefabricated, rapidly deployable data halls for regional and edge-compute requirements.",
  },
  {
    icon: "/images/industries/data-center/solutions/icons/4.webp",
    title: "Enterprise & Captive Data Centers",
    description:
      "Purpose-built facilities for BFSI, IT/ITES, and large enterprise in-house compute needs.",
  },
  {
    icon: "/images/industries/data-center/solutions/icons/5.webp",
    title: "Disaster Recovery (DR) Sites",
    description:
      "Redundant, geographically distributed facilities built for business continuity.",
  },
  {
    icon: "/images/industries/data-center/solutions/icons/6.webp",
    title: "Data Center Retrofits & Capacity Expansion",
    description:
      "Upgrading existing facilities for higher power density, cooling capacity, or additional white space.",
  },
];

const SolutionsIcons = () => {
  const scale = useDesignScale();
  const isScaled = scale !== 1;

  return (
    <div
      className={styles.solutionsWrapper}
      style={isScaled ? { height: DESIGN_HEIGHT * scale } : undefined}
    >
      <div
        className={styles.solutions}
        style={isScaled ? { transform: `scale(${scale})` } : undefined}
      >
        <Image
          className={styles.grid1Icon}
          src="/images/industries/data-center/solutions/grid-1.webp"
          width={1918}
          height={391}
          sizes="100vw"
          alt="Decorative grid background"
        />
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.eotCraneSolutionsAcrossSouWrapper}>
              <b className={styles.eotCraneSolutions}>
                <span className={`${styles.titleLine} ${styles.titleLineDesktop}`}>
                  Data Center Construction Across South India&apos;s Digital{" "}
                </span>
                <span className={`${styles.titleLine} ${styles.titleLineDesktop}`}>
                  Infrastructure Hubs
                </span>
                <span className={`${styles.titleLine} ${styles.titleLineMobile}`}>
                  Data Center Construction
                </span>
                <span className={`${styles.titleLine} ${styles.titleLineMobile}`}>
                  Across South India&apos;s Digital
                </span>
                <span className={`${styles.titleLine} ${styles.titleLineMobile}`}>
                  Infrastructure Hubs
                </span>
              </b>
            </div>
            <div className={styles.ourEotCranesServeDiverseIWrapper}>
              <div className={styles.ourEotCranes}>
                Our data center construction serves operators and enterprises
                across Tamil Nadu, Karnataka, Andhra Pradesh, Telangana, and
                Kerala
              </div>
            </div>
          </div>
          <div className={styles.frameContainer}>
            {solutionCards.map((card, index) => (
              <div
                key={card.title}
                className={styles.cardItem}
                style={{ left: `${index * 286}px` }}
              >
                <div className={styles.iconWrapper}>
                  <Image
                    className={styles.solutionIcon}
                    src={card.icon}
                    width={42}
                    height={42}
                    alt={`${card.title} icon`}
                  />
                </div>
                <div className={styles.cardContent}>
                  <b className={styles.cardTitle}>{card.title}</b>
                  <div className={styles.cardDesc}>{card.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.whereverYoureLocatedContainer}>
          <span className={styles.footerLine}>
            <span className={styles.whereverYoureLocated}>
              Wherever you&apos;re located in South India –{" "}
            </span>
            <b className={styles.mekarkEngineersEot}>
              Chennai, Coimbatore, Hosur, Bengaluru, Hyderabad, or Kochi
            </b>
            <span className={styles.whereverYoureLocated}>
              {" "}
              – Mekark&apos;s data center
            </span>
          </span>
          <span
            className={`${styles.footerLine} ${styles.whereverYoureLocated}`}
          >
            engineering is customised to your uptime tier and power density
            requirements.
          </span>
        </div>
      </div>
    </div>
  );
};

export default SolutionsIcons;
