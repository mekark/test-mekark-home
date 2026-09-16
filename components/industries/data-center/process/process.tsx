import Image from "next/image";
import styles from "./index.module.css";

const Process = () => {
  return (
    <div className={styles.grid1Parent}>
      <div className={styles.grid1IconWrap}>
        <Image
          className={styles.grid1Icon}
          src="/images/industries/data-center/process/grid-background.webp"
          fill
          sizes="100vw"
          alt=""
          unoptimized
        />
      </div>
      <div className={styles.ourWarehouseProjectExecutioWrapper}>
        <b className={styles.ourWarehouseProjectExecutio}>
          Our Data Center Project Execution Process
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
              Understanding your uptime tier, power density, cooling
              architecture, and redundancy requirements before design begins.
            </div>
          </div>
        </div>
        <Image
          className={styles.frameChild}
          src="/images/industries/data-center/process/process-arrow.svg"
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
              Structural layout, electrical zoning, cooling architecture, and
              MEP coordination planned into a build-ready engineering package
              using STAAD Pro, TEKLA, and Autodesk.
            </div>
          </div>
        </div>
        <Image
          className={styles.frameChild}
          src="/images/industries/data-center/process/process-arrow.svg"
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
              steel, cladding, and modular data hall components fabricated to
              exact specs.
            </div>
          </div>
        </div>
        <Image
          className={styles.frameChild}
          src="/images/industries/data-center/process/process-arrow.svg"
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
              Raised flooring, steel framing, precision cooling, power
              infrastructure, and fire suppression executed with precision
              sequencing for a go-live-ready base.
            </div>
          </div>
        </div>
        <div className={styles.vectorParent}>
          <Image
            className={styles.frameChild}
            src="/images/industries/data-center/process/process-arrow.svg"
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
                Testing, redundancy validation, and final commissioning
                completed; your data center handed over operations-ready.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
