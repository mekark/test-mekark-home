import type { NextPage } from 'next';
import Image from "next/image";
import styles from './index.module.css';


const Process: NextPage = () => {
  	return (
    		<div className={styles.grid1Parent}>
      			<div className={styles.grid1IconWrap}>
        				<Image className={styles.grid1Icon} src="/images/industries/logistics/process/grid-background.png" fill sizes="100vw" alt="" unoptimized />
      			</div>
      			<div className={styles.ourWarehouseProjectExecutioWrapper}>
        				<b className={styles.ourWarehouseProjectExecutio}>Our Warehouse Project Execution Process</b>
      			</div>
      			<div className={styles.frameParent}>
        				<div className={styles.parent}>
          					<div className={styles.div}>01</div>
          					<div className={styles.siteEvaluationFeasibilityParent}>
            						<div className={styles.siteEvaluation}>{`Site Evaluation & Feasibility Study`}</div>
            						<div className={styles.geotechnicalAssessmentRegul}>{`Geotechnical assessment, regulatory review, and budget feasibility for your logistics facility. `}</div>
          					</div>
        				</div>
        				<Image className={styles.frameChild} src="/images/industries/logistics/process/process-arrow.svg" width={66.7} height={19.6} sizes="100vw" alt="" />
        				<div className={styles.parent}>
          					<div className={styles.div}>02</div>
          					<div className={styles.designEngineeringParent}>
            						<div className={styles.designEngineering}>{`Design & Engineering`}</div>
            						<div className={styles.structuralDesignLoad}>{`Structural design, load calculations, layout planning, and MEP coordination, all handled in-house. `}</div>
          					</div>
        				</div>
        				<Image className={styles.frameChild} src="/images/industries/logistics/process/process-arrow.svg" width={66.7} height={19.6} sizes="100vw" alt="" />
        				<div className={styles.parent}>
          					<div className={styles.div}>03</div>
          					<div className={styles.siteEvaluationFeasibilityParent}>
            						<div className={styles.designEngineering}>Factory Fabrication</div>
            						<div className={styles.precisionManufacturingAt}>{`Precision manufacturing at our plant - columns, rafters, purlins, and secondary components fabricated to exact specs. `}</div>
          					</div>
        				</div>
        				<Image className={styles.frameChild} src="/images/industries/logistics/process/process-arrow.svg" width={66.7} height={19.6} sizes="100vw" alt="" />
        				<div className={styles.frameDiv}>
          					<div className={styles.div}>04</div>
          					<div className={styles.onSiteErectionParent}>
            						<div className={styles.designEngineering}>On-Site Erection</div>
            						<div className={styles.geotechnicalAssessmentRegul2}>{`Geotechnical assessment, regulatory review, and budget feasibility for your logistics facility. `}</div>
          					</div>
        				</div>
        				<div className={styles.vectorParent}>
          					<Image className={styles.frameChild} src="/images/industries/logistics/process/process-arrow.svg" width={66.7} height={19.6} sizes="100vw" alt="" />
          					<div className={styles.frameDiv}>
            						<div className={styles.div}>05</div>
            						<div className={styles.onSiteErectionParent}>
              							<div className={styles.designEngineering}>{`Handover & After-Sales`}</div>
              							<div className={styles.snagListClearance}>{`Snag list clearance, documentation handover, and post-handover support for your warehouse. `}</div>
            						</div>
          					</div>
        				</div>
      			</div>
    		</div>);
};

export default Process;
