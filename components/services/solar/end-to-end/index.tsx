import type { NextPage } from 'next';
import Image from "next/image";
import { ServiceIntroTitle } from "@/components/services/ServiceIntroTitle";
import {
  SERVICE_BODY_TEXT_CLASS,
  SERVICE_INTRO_TITLE_FIGMA_CLASS,
} from "@/components/services/serviceTypography";
import styles from './index.module.css';

const EndToEnd: NextPage = () => {
	return (
		<div className={styles.rectangleParent}>
			<div className={styles.frameChild} />
			<div className={styles.div} />
			<div className={styles.endToEndCommercialSolarSoParent}>
				<div className={styles.titleWrap}>
					<ServiceIntroTitle
						className={SERVICE_INTRO_TITLE_FIGMA_CLASS}
						beforeRed="End-to-End Commercial Solar"
						line2Prefix="Solutions, "
						redPart="Under One Roof"
					/>
				</div>
				<div className={styles.mekarkIsALeadingCommercialParent}>
					<div className={SERVICE_BODY_TEXT_CLASS}>
						Mekark is a leading commercial solar installation contractor serving industrial and
						<br />
						commercial clients across South India, including Tamil Nadu, Chennai, Bangalore,
						<br />
						Hyderabad, Karnataka, and Andhra Pradesh.
					</div>
					<div className={SERVICE_BODY_TEXT_CLASS}>As a turnkey solar EPC contractor, we manage the complete project lifecycle, structural assessment, system design, supply, installation, and commissioning, under a single point of accountability.</div>
					<div className={SERVICE_BODY_TEXT_CLASS}>Our engineering team ensures every solar power plant is designed for maximum output, structural compatibility, and long-term performance. We work exclusively with businesses; we do not offer residential solar installations.</div>
				</div>
			</div>
			<Image
				className={styles.solarEte1}
				width={908}
				height={603}
				sizes="100vw"
				src="/images/services/solar/end-to-end/solar-ete-1.png"
				alt=""
			/>
		</div>
	);
};

export default EndToEnd;
