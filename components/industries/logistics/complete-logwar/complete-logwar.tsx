import type { NextPage } from "next";
import Image from "next/image";
import styles from "./index.module.css";

const CompleteEOTCraneSolutionsEngineeredEndToEnd: NextPage = () => {
  return (
    <div className={styles.completeEotCraneSolutionsWrapper}>
      <div className={styles.completeEotCraneSolutions}>
        <div className={styles.leftStickyOuter}>
          <div className={styles.leftSticky}>
            <b className={styles.completeWarehousing}>
              <span className={styles.titleLine}>Complete Warehousing &</span>
              <span className={styles.titleLine}>Logistics Solutions, Engineered</span>
              <span className={styles.titleLine}>End-to-End</span>
            </b>
            <div className={styles.asAFullService}>
              As a full-service, turnkey EPC warehouse solution provider in
              South India, Mekark designs, fabricates, and erects
              pre-engineered steel structures tailored to your operational
              needs and span requirements.
            </div>
          </div>
        </div>
        <div className={styles.rightScrollable}>
          <div className={styles.frameParent}>
            <Image
              className={styles.timelineGraphic}
              src="/images/industries/logistics/complete-logistics/timeline-graphic.svg"
              width={397.4}
              height={1153}
              sizes="100vw"
              alt=""
            />
            <div className={styles.frameContainer}>
              <Image
                className={styles.rectangleIcon}
                src="/images/industries/logistics/complete-logistics/industrial-warehouse-sheds.webp"
                width={323}
                height={194}
                sizes="100vw"
                alt="Industrial Warehouse Sheds"
              />
              <div className={styles.cardBody}>
                <b className={styles.cardTitle}>Industrial Warehouse Sheds:</b>
                <div className={styles.cardDesc}>
                  Column-free buildings built for manufacturing, trading and
                  distribution.
                </div>
              </div>
            </div>
            <div className={styles.frameParent3}>
              <Image
                className={styles.rectangleIcon}
                src="/images/industries/logistics/complete-logistics/distribution-centres.webp"
                width={323}
                height={194}
                sizes="100vw"
                alt="Distribution Centres"
              />
              <div className={styles.cardBody}>
                <b className={styles.cardTitle}>Distribution Centres:</b>
                <div className={styles.cardDesc}>
                  High-volume centres with loading docks, truck parks and
                  mezzanine offices.
                </div>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <Image
                className={styles.rectangleIcon}
                src="/images/industries/logistics/complete-logistics/cold-storage-structures.webp"
                width={323}
                height={346}
                sizes="100vw"
                alt="Cold Storage Structures"
              />
              <div className={styles.cardBody}>
                <b className={styles.cardTitle}>Cold Storage Structures:</b>
                <div className={styles.cardDesc}>
                  Thermally efficient steel structures for food, pharma and
                  agri sectors.
                </div>
              </div>
            </div>
            <div className={styles.frameParent4}>
              <Image
                className={styles.rectangleIcon}
                src="/images/industries/logistics/complete-logistics/logistics-parks-multi-bay.webp"
                width={323}
                height={324}
                sizes="100vw"
                alt="Logistics Parks and Multi-Bay Facilities"
              />
              <div className={styles.cardBody}>
                <b className={styles.cardTitle}>
                  Logistics Parks and Multi-Bay Facilities:
                </b>
                <div className={styles.cardDesc}>
                  End-to-end logistics park design covering warehouses,
                  offices and vehicle planning.
                </div>
              </div>
            </div>
            <div className={styles.frameParent2}>
              <Image
                className={styles.rectangleIcon}
                src="/images/industries/logistics/complete-logistics/multi-storey-warehouses.webp"
                width={323}
                height={194}
                sizes="100vw"
                alt="Multi-Storey Warehouses"
              />
              <div className={styles.cardBody}>
                <b className={styles.cardTitle}>Multi-Storey Warehouses:</b>
                <div className={styles.cardDesc}>
                  Vertical PEB solutions maximising land use with heavy floor
                  loading.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.overlayborder}>
        <div className={styles.strongEveryContainer}>
          <span className={styles.bannerLine}>
            <b className={styles.everyEotCrane}>
              Every warehouse is custom-engineered
            </b>
            <span className={styles.aroundYourLoadRequirements}>
              {" "}
              around your storage volume, throughput needs, and operational
              flow, ensuring
            </span>
          </span>
          <span className={styles.bannerLine}>
            <span className={styles.aroundYourLoadRequirements}>
              maximum space efficiency and long-term structural reliability
              for logistics operations across South India.
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CompleteEOTCraneSolutionsEngineeredEndToEnd;
