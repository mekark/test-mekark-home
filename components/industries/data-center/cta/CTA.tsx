import Image from "next/image";
import styles from "./index.module.css";

const CTA = () => {
  return (
    <div className={styles.cta}>
      <div className={styles.section}>
        <div className={styles.planningAWarehouseOrLogistParent}>
          <div className={styles.planningAWarehouse}>
            <span className={styles.line}>
              Planning a Data Center in South India?
            </span>
          </div>
          <div className={styles.mekarksProjectCalendar}>
            <span className={styles.line}>
              Every week your data center isn&apos;t live is lost SLA commitments
              and delayed revenue.
            </span>
            <span className={styles.line}>
              Mekark&apos;s team will assess your uptime tier, power density,
              cooling architecture, and
            </span>
            <span className={styles.line}>
              redundancy needs, and deliver a transparent budgetary estimate
              within 24 hours. No
            </span>
            <span className={styles.line}>
              obligation, just honest expert advice.
            </span>
          </div>
        </div>
        <div className={styles.sectionChild} />
        <a href="/#enquiry" className={styles.cta2}>
          <b className={styles.talkToOur}>Request a Free Consultation</b>
          <div className={styles.component4}>
            <Image
              className={styles.vectorIcon}
              src="/images/industries/data-center/cta/arrow-icon.svg"
              width={17}
              height={13}
              sizes="100vw"
              alt=""
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
            alt=""
          />
          <Image
            className={styles.sectionInner}
            src="/images/industries/logistics/CTA/section-inner.svg"
            width={317}
            height={213}
            sizes="100vw"
            alt=""
          />
          <Image
            className={styles.eotCta1}
            src="/images/industries/logistics/CTA/eot-cta-worker.png"
            width={491}
            height={323}
            sizes="(max-width: 768px) 96vw, (max-width: 1200px) 92vw, 491px"
            alt="Mekark consultant"
          />
        </div>
      </div>

      <div className={styles.frameParent}>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.imageIcon}
            src="/images/industries/data-center/cta/cta-bottom-right.png"
            width={937}
            height={636}
            sizes="100vw"
            alt="Data center engineering team reviewing plans"
          />
        </div>
        <div className={styles.frameChild} />
      </div>

      <div className={styles.frameGroup}>
        <div className={styles.divsvcIconParent}>
          <div className={styles.divsvcIcon}>
            <Image
              className={styles.lucidedraftingCompassIcon}
              src="/images/industries/data-center/cta/icons/pen.svg"
              width={26}
              height={26}
              sizes="100vw"
              alt=""
            />
          </div>
          <div className={styles.inHouseDesignEngineeringParent}>
            <div className={styles.inHouseDesign}>
              In-House Engineering-Led Design
            </div>
            <div className={styles.cardDesc}>
              <span className={styles.line}>
                Every facility is designed using STAAD Pro,
              </span>
              <span className={styles.line}>
                TEKLA, and Autodesk by our in-house
              </span>
              <span className={styles.line}>
                structural engineers, MEP teams, and data
              </span>
              <span className={styles.line}>center specialists.</span>
            </div>
          </div>
        </div>

        <div className={styles.divsvcIconParent}>
          <div className={styles.divsvcIcon}>
            <Image
              className={styles.lucidedraftingCompassIcon}
              src="/images/industries/data-center/cta/icons/clock.svg"
              width={26}
              height={26}
              sizes="100vw"
              alt=""
            />
          </div>
          <div className={styles.inHouseDesignEngineeringParent}>
            <div className={styles.inHouseDesign}>
              <span className={styles.line}>30–40% Faster Delivery Than</span>
              <span className={styles.line}>Conventional Construction</span>
            </div>
            <div className={styles.cardDesc}>
              <span className={styles.line}>
                Factory-controlled fabrication and pre-
              </span>
              <span className={styles.line}>engineered methods mean your</span>
              <span className={styles.line}>
                data center reaches go-live sooner.
              </span>
            </div>
          </div>
        </div>

        <div className={styles.divsvcIconParent}>
          <div className={styles.divsvcIcon}>
            <Image
              className={styles.lucidedraftingCompassIcon}
              src="/images/industries/data-center/cta/icons/factory.svg"
              width={26}
              height={26}
              sizes="100vw"
              alt=""
            />
          </div>
          <div className={styles.inHouseDesignEngineeringParent}>
            <div className={styles.inHouseDesign}>
              <span className={styles.line}>
                Large-Scale In-House Fabrication
              </span>
              <span className={styles.line}>Capacity</span>
            </div>
            <div className={styles.cardDesc}>
              <span className={styles.line}>
                Mekark fabricates over 3,000 MT of precision
              </span>
              <span className={styles.line}>
                steel per month across four manufacturing
              </span>
              <span className={styles.line}>
                plants in Tamil Nadu, with zero third-party
              </span>
              <span className={styles.line}>dependency.</span>
            </div>
          </div>
        </div>

        <div className={styles.divsvcIconParent}>
          <div className={styles.divsvcIcon}>
            <Image
              className={styles.lucidedraftingCompassIcon}
              src="/images/industries/data-center/cta/icons/swap.svg"
              width={26}
              height={26}
              sizes="100vw"
              alt=""
            />
          </div>
          <div className={styles.inHouseDesignEngineeringParent}>
            <div className={styles.inHouseDesign}>
              True Turnkey, Zero Fragmentation
            </div>
            <div className={styles.cardDesc}>
              <span className={styles.line}>
                Structural steel, civil works, MEP, cooling,
              </span>
              <span className={styles.line}>
                power systems, and white space, one team, one
              </span>
              <span className={styles.line}>
                contract, no blame-shifting between trades.
              </span>
            </div>
          </div>
        </div>

        <div className={styles.divsvcIconParent}>
          <div className={styles.divsvcIcon}>
            <Image
              className={styles.lucidedraftingCompassIcon}
              src="/images/industries/data-center/cta/icons/map-pin.svg"
              width={26}
              height={26}
              sizes="100vw"
              alt=""
            />
          </div>
          <div className={styles.inHouseDesignEngineeringParent}>
            <div className={styles.inHouseDesign}>
              <span className={styles.line}>
                Regional Project Execution Across
              </span>
              <span className={styles.line}>South India</span>
            </div>
            <div className={styles.cardDesc}>
              <span className={styles.line}>
                From Chennai and Coimbatore to Hosur,
              </span>
              <span className={styles.line}>
                Bengaluru, Hyderabad, and Kochi, our teams
              </span>
              <span className={styles.line}>
                deliver data center construction backed by an
              </span>
              <span className={styles.line}>
                integrated design-to-commissioning process.
              </span>
            </div>
          </div>
        </div>

        <div className={styles.divsvcIconParent}>
          <div className={styles.divsvcIcon}>
            <Image
              className={styles.lucidedraftingCompassIcon}
              src="/images/industries/data-center/cta/icons/shield.svg"
              width={26}
              height={26}
              sizes="100vw"
              alt=""
            />
          </div>
          <div className={styles.inHouseDesignEngineeringParent}>
            <div className={styles.inHouseDesign}>
              <span className={styles.line}>
                Tier III/IV-Aligned Construction
              </span>
              <span className={styles.line}>Standards</span>
            </div>
            <div className={styles.cardDesc}>
              <span className={styles.line}>
                Every facility is delivered to Tier III/IV-aligned
              </span>
              <span className={styles.line}>
                benchmarks, with documented engineering and
              </span>
              <span className={styles.line}>
                redundancy planning before a single beam is
              </span>
              <span className={styles.line}>cut.</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.frameParent3}>
        <div className={styles.whyWarehousesFromMekarkAreWrapper}>
          <b className={styles.whyWarehousesFrom}>
            Why Data Centers from Mekark Are the Better Choice
          </b>
        </div>
        <div className={styles.mekarkIsOne}>
          <span className={styles.line}>
            Mekark is one of South India&apos;s most trusted data center
            construction companies, offering in-house design, fabrication, and
            MEP
          </span>
          <span className={styles.line}>
            integration under one roof, not a general contractor treating your
            facility like a generic industrial shed.
          </span>
        </div>
      </div>

      <div className={styles.bottomBanner}>
        <p className={styles.bottomBannerText}>
          The difference isn&apos;t just how fast a data center gets built;{" "}
          <b className={styles.bottomBannerHighlight}>
            it&apos;s whether it holds uptime, redundancy, and thermal performance
            from day one.
          </b>{" "}
          That&apos;s the engineering standard Mekark builds to.
        </p>
      </div>
    </div>
  );
};

export default CTA;
