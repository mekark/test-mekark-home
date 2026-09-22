"use client";

import Image from "next/image";
import { useDesignScale } from "@/lib/hooks/useDesignScale";
import styles from "./index.module.css";

const DESIGN_HEIGHT = 780;

const solutionCards = [
  {
    icon: "/images/industries/pharma/solution-2-icons/1.webp",
    title: "API & Bulk Drug Manufacturing:",
    description:
      "Solvent-handling, effluent-compliant facilities engineered for active pharmaceutical ingredient production.",
  },
  {
    icon: "/images/industries/pharma/solution-2-icons/2.webp",
    title: "Sterile Injectable & Ophthalmic Manufacturing:",
    description:
      "ISO-classified cleanrooms with validated air handling for aseptic filling and packaging lines.",
  },
  {
    icon: "/images/industries/pharma/solution-2-icons/3.webp",
    title: "Oral Solid Dosage (OSD) Manufacturing:",
    description:
      "Contamination-controlled facilities designed for tabletting, capsule filling, and coating operations.",
  },
  {
    icon: "/images/industries/pharma/solution-2-icons/4.webp",
    title: "Biologics & Vaccine Manufacturing:",
    description:
      "Cold chain-integrated plants with validated storage and segregated process zones.",
  },
  {
    icon: "/images/industries/pharma/solution-2-icons/5.webp",
    title: "Nutraceutical & Herbal Formulation Manufacturing:",
    description:
      "Facilities designed for extraction, formulation, and hygienic packaging.",
  },
  {
    icon: "/images/industries/pharma/solution-2-icons/6.webp",
    title: "Contract Manufacturing (CDMO/CMO):",
    description:
      "Multi-tenant-ready facilities with flexible bay design for scaling production.",
  },
];

const SolutionsIcons = () => {
  const scale = useDesignScale();

  return (
    <div
      className={styles.solutionsWrapper}
      style={{ height: DESIGN_HEIGHT * scale }}
    >
      <div
        className={styles.solutions}
        style={{ transform: `scale(${scale})` }}
      >
        <div className={styles.whereverYoureLocatedContainer}>
          <span className={styles.footerLine}>
            <span className={styles.whereverYoureLocated}>
              Wherever you&apos;re located in South India -{" "}
            </span>
            <b className={styles.mekarkEngineersEot}>
              Chennai, Coimbatore, Hosur, Bengaluru, Hyderabad, or Kochi
            </b>
            <span className={styles.whereverYoureLocated}>
              {" "}
              - Mekark&apos;s pharmaceutical facility
            </span>
          </span>
          <span
            className={`${styles.footerLine} ${styles.whereverYoureLocated}`}
          >
            engineering is customised to your production process and regulatory
            requirements.
          </span>
        </div>
        <Image
          className={styles.grid1Icon}
          src="/images/industries/pharma/solutions/grid-1.webp"
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
                  Pharmaceutical Manufacturing Facility Construction{" "}
                </span>
                <span className={`${styles.titleLine} ${styles.titleLineDesktop}`}>
                  Across South India&apos;s Growth Hubs
                </span>
                <span className={`${styles.titleLine} ${styles.titleLineMobile}`}>
                  Pharmaceutical
                </span>
                <span className={`${styles.titleLine} ${styles.titleLineMobile}`}>
                  Manufacturing Facility
                </span>
                <span className={`${styles.titleLine} ${styles.titleLineMobile}`}>
                  Construction Across South
                </span>
                <span className={`${styles.titleLine} ${styles.titleLineMobile}`}>
                  India&apos;s Growth Hubs
                </span>
              </b>
            </div>
            <div className={styles.ourEotCranesServeDiverseIWrapper}>
              <div className={styles.ourEotCranes}>
                Our cleanroom and cold chain construction serves pharmaceutical
                manufacturers across Tamil Nadu, Karnataka, Andhra Pradesh,
                Telangana, and Kerala:
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
      </div>
    </div>
  );
};

export default SolutionsIcons;
