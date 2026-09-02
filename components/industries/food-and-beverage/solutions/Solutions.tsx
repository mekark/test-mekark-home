import Image from "next/image";
import styles from "./index.module.css";

const FACILITIES = [
  {
    title: "Dairy Processing Plants:",
    description:
      "Hygienic, wash-down-ready facilities engineered for milk processing, packaging, and cold storage.",
    image: "/images/industries/food-and-beverage/solutions/1.jpg",
    imageAlt: "Dairy Processing Plants",
  },
  {
    title: "Beverage Bottling & Packaging Units:",
    description:
      "High-speed production plants designed for continuous, automation-ready bottling and canning lines.",
    image: "/images/industries/food-and-beverage/solutions/2.png",
    imageAlt: "Beverage Bottling and Packaging Units",
  },
  {
    title: "Bakery & Confectionery Manufacturing:",
    description:
      "Temperature-controlled facilities built for consistent baking, proofing, and packaging environments.",
    image: "/images/industries/food-and-beverage/solutions/3.png",
    imageAlt: "Bakery and Confectionery Manufacturing",
  },
  {
    title: "Meat, Poultry & Seafood Processing:",
    description:
      "Cold chain-integrated plants with blast freezing and hygienic processing zones.",
    image: "/images/industries/food-and-beverage/solutions/4.png",
    imageAlt: "Meat Poultry and Seafood Processing",
  },
  {
    title: "Fruit, Vegetable & Agro-Processing:",
    description:
      "Facilities designed for washing, sorting, processing, and cold storage of perishable produce.",
    image: "/images/industries/food-and-beverage/solutions/5.png",
    imageAlt: "Fruit Vegetable and Agro-Processing",
  },
  {
    title: "Contract Food Manufacturing (Co-Packing):",
    description:
      "Multi-tenant-ready facilities with flexible bay design for scaling production.",
    image: "/images/industries/food-and-beverage/solutions/6.jpg",
    imageAlt: "Contract Food Manufacturing Co-Packing",
  },
] as const;

export default function Solutions() {
  return (
    <div className={styles.solutionsWrapper}>
      <div className={styles.solutions}>
        <div className={styles.gridBg} aria-hidden>
          <Image
            className={styles.grid1Icon}
            src="/images/industries/food-and-beverage/solutions/grid-1.png"
            fill
            sizes="100vw"
            alt=""
          />
        </div>

        <div className={styles.headerBlock}>
          <b className={styles.eotCraneSolutions}>
            <span className={styles.titleLine}>
              Food &amp; Beverage Manufacturing Facility Construction
            </span>
            <span className={styles.titleLine}>
              Across South India&apos;s Growth Hubs
            </span>
          </b>
          <div className={styles.ourEotCranes}>
            Our hygienic facility and cold chain construction serves food and
            beverage manufacturers across Tamil Nadu, Karnataka, Andhra Pradesh,
            Telangana, and Kerala:
          </div>
        </div>

        <div className={styles.frameContainer}>
          {FACILITIES.map((facility) => (
            <div key={facility.title} className={styles.card}>
              <Image
                className={styles.frameChild}
                src={facility.image}
                width={262}
                height={262}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 14vw"
                alt={facility.imageAlt}
              />
              <div className={styles.cardBody}>
                <b className={styles.cardTitle}>{facility.title}</b>
                <div className={styles.cardDesc}>{facility.description}</div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.whereverYoureLocatedContainer}>
          <span className={styles.footerLine}>
            <span className={styles.whereverYoureLocated}>
              Wherever you&apos;re located in South India -{" "}
            </span>
            <b className={styles.mekarkEngineersEot}>
              Chennai, Coimbatore, Hosur, Bengaluru, Hyderabad, and Kochi
            </b>
            <span className={styles.whereverYoureLocated}>
              {" "}
              - Mekark&apos;s food &amp; beverage facility
            </span>
          </span>
          <span className={`${styles.footerLine} ${styles.whereverYoureLocated}`}>
            engineering is customised to your production process and compliance
            requirements.
          </span>
        </div>
      </div>
    </div>
  );
}
