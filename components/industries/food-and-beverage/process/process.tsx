import Image from "next/image";
import styles from "./index.module.css";

const Process = () => {
  return (
    <div className={styles.grid1Parent}>
      <div className={styles.grid1IconWrap}>
        <Image
          className={styles.grid1Icon}
          src="/images/industries/food-and-beverage/process/grid-background.png"
          fill
          sizes="100vw"
          alt=""
          unoptimized
        />
      </div>
      <div className={styles.ourWarehouseProjectExecutioWrapper}>
        <b className={styles.ourWarehouseProjectExecutio}>
          Our Food &amp; Beverage Facility Project Execution Process
        </b>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.parent}>
          <div className={styles.div}>01</div>
          <div className={styles.siteEvaluationFeasibilityParent}>
            <div className={styles.siteEvaluation}>
              Process &amp; Feasibility Study
            </div>
            <div className={styles.geotechnicalAssessmentRegul}>
              Understanding your production line layout, hygiene classification,
              cold chain requirements, and expansion plans before design begins.
            </div>
          </div>
        </div>
        <Image
          className={styles.frameChild}
          src="/images/industries/food-and-beverage/process/process-arrow.svg"
          width={67}
          height={20}
          sizes="100vw"
          alt=""
        />
        <div className={styles.parent}>
          <div className={styles.div}>02</div>
          <div className={styles.designEngineeringParent}>
            <div className={styles.designEngineering}>
              Design &amp; Engineering
            </div>
            <div className={styles.structuralDesignLoad}>
              Structural layout, electrical zoning, HVAC, and MEP coordination
              planned into a build-ready engineering package using STAAD Pro,
              TEKLA, and Autodesk.
            </div>
          </div>
        </div>
        <Image
          className={styles.frameChild}
          src="/images/industries/food-and-beverage/process/process-arrow.svg"
          width={67}
          height={20}
          sizes="100vw"
          alt=""
        />
        <div className={styles.parent}>
          <div className={styles.div}>03</div>
          <div className={styles.siteEvaluationFeasibilityParent}>
            <div className={styles.designEngineering}>Factory Fabrication</div>
            <div className={styles.precisionManufacturingAt}>
              Precision manufacturing at our Tamil Nadu plants, with structural
              steel, cladding, and cold storage panels fabricated to exact
              specs.
            </div>
          </div>
        </div>
        <Image
          className={styles.frameChild}
          src="/images/industries/food-and-beverage/process/process-arrow.svg"
          width={67}
          height={20}
          sizes="100vw"
          alt=""
        />
        <div className={styles.frameDiv}>
          <div className={styles.div}>04</div>
          <div className={styles.onSiteErectionParent}>
            <div className={styles.designEngineering}>
              Civil, Structural &amp; MEP Execution
            </div>
            <div className={styles.geotechnicalAssessmentRegul2}>
              Food-grade flooring, steel framing, HVAC, cold storage, and
              utility integration executed with precision sequencing for a
              compliant, production-ready base.
            </div>
          </div>
        </div>
        <div className={styles.vectorParent}>
          <Image
            className={styles.frameChild}
            src="/images/industries/food-and-beverage/process/process-arrow.svg"
            width={67}
            height={20}
            sizes="100vw"
            alt=""
          />
          <div className={styles.frameDiv}>
            <div className={styles.div}>05</div>
            <div className={styles.onSiteErectionParent}>
              <div className={styles.designEngineering}>
                Commissioning &amp; Handover
              </div>
              <div className={styles.snagListClearance}>
                Testing, hygiene checks, and final commissioning completed; your
                food &amp; beverage facility handed over production-ready.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
