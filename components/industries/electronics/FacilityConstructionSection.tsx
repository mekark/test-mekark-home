import Image from "next/image";
import styles from "./FacilityConstructionSection.module.css";

const FACILITIES = [
  {
    title: "Electronics Component Manufacturing:",
    description:
      "ESD-safe assembly plants engineered for precision component production and high-volume throughput.",
    image:
      "/images/industries/electronics/facility-construction/electronics-component.webp",
    imageAlt:
      "Green circuit board assembly line for electronics component manufacturing",
  },
  {
    title: "Semiconductor & Precision Assembly:",
    description:
      "Clean room facilities built to the required cleanliness classification for sensitive fabrication processes.",
    image:
      "/images/industries/electronics/facility-construction/semiconductor-assembly.webp",
    imageAlt:
      "Worker in a cleanroom suit at a semiconductor precision assembly facility",
  },
  {
    title: "Consumer Electronics:",
    description:
      "High-volume production plants designed for continuous, automation-ready operations.",
    image:
      "/images/industries/electronics/facility-construction/consumer-electronics.webp",
    imageAlt: "Workers at a consumer electronics production line",
  },
  {
    title: "Automotive Electronics:",
    description:
      "Controlled-environment facilities for auto-component and EV electronics manufacturers.",
    image:
      "/images/industries/electronics/facility-construction/automotive-electronics.webp",
    imageAlt:
      "Automotive electronics manufacturing on a vehicle production line",
  },
  {
    title: "Telecom & Networking Equipment:",
    description:
      "Precision production infrastructure with utility redundancy for uninterrupted manufacturing.",
    image:
      "/images/industries/electronics/facility-construction/telecom-networking.webp",
    imageAlt: "Server racks and telecom networking equipment infrastructure",
  },
  {
    title: "Contract Electronics Manufacturing (EMS/ODM):",
    description:
      "Multi-tenant-ready facilities with flexible bay design for scaling production.",
    image:
      "/images/industries/electronics/facility-construction/contract-manufacturing.webp",
    imageAlt:
      "Multiple circuit boards arranged for contract electronics manufacturing",
  },
] as const;

export default function FacilityConstructionSection() {
  return (
    <div className={styles.solutionsWrapper}>
      <div className={styles.solutions}>
        <div className={styles.gridBg} aria-hidden>
          <Image
            className={styles.grid1Icon}
            src="/images/industries/electronics/facility-construction/grid.webp"
            fill
            sizes="100vw"
            alt="Decorative grid background"
          />
        </div>

        <div className={styles.headerBlock}>
          <b className={styles.eotCraneSolutions}>
            <span className={styles.titleLine}>
              Electronics Manufacturing Facility Construction
            </span>
            <span className={styles.titleLine}>
              Across South India&apos;s Growth Hubs
            </span>
          </b>
          <div className={styles.ourEotCranes}>
            Our clean room and precision facility construction serves electronics
            manufacturers across Tamil Nadu, Karnataka, Andhra Pradesh,
            Telangana, and Kerala:
          </div>
        </div>

        <div className={styles.frameContainer}>
          {FACILITIES.map((facility) => (
            <div key={facility.title} className={styles.card}>
              <div className={styles.frameChildWrap}>
                <Image
                  className={styles.frameChild}
                  src={facility.image}
                  width={262}
                  height={262}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 14vw"
                  alt={facility.imageAlt}
                />
              </div>
              <div className={styles.cardBody}>
                <b className={styles.cardTitle}>{facility.title}</b>
                <div className={styles.cardDesc}>{facility.description}</div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.overlayborder}>
          <div className={styles.strongEveryContainer}>
            <span className={styles.strongEveryContainer2}>
              <span className={styles.bannerLine}>
                <span className={styles.whereverYoureLocated}>
                  Irrespective of where you&apos;re located in South India—{" "}
                </span>
                <b className={styles.mekarkEngineersEot}>
                  Chennai, Sriperumbudur, Oragadam, Hosur, Coimbatore, Bengaluru,
                  or Hyderabad
                </b>
                <span className={styles.whereverYoureLocated}>
                  {" "}
                  —Mekark&apos;s
                </span>
              </span>
              <span className={styles.bannerLine}>
                <span className={styles.whereverYoureLocated}>
                  electronics facility engineering is customised to your
                  production process and compliance requirements.
                </span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
