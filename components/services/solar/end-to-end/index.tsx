import type { NextPage } from 'next';
import Image from "next/image";
import styles from './index.module.css';

const EndToEnd: NextPage = () => {
	return (
		<div className={styles.rectangleParent}>
			<div className={styles.frameChild} />
			<div className={styles.div} />
			<div className={styles.endToEndCommercialSolarSoParent}>
				<b className={styles.endToEndCommercialSolarContainer}>
					<span className={styles.endToEndCommercialSolarContainer2}>
						<span>End-to-End Commercial Solar Solutions, </span>
						<span className={styles.underOneRoof}>Under One Roof</span>
					</span>
				</b>
				<div className={styles.mekarkIsALeadingCommercialParent}>
					<div className={styles.mekarkIsA}>
						Mekark is a leading commercial solar installation contractor serving industrial and
						<br />
						commercial clients across South India, including Tamil Nadu, Chennai, Bangalore,
						<br />
						Hyderabad, Karnataka, and Andhra Pradesh.
					</div>
					<div className={styles.mekarkIsA}>As a turnkey solar EPC contractor, we manage the complete project lifecycle, structural assessment, system design, supply, installation, and commissioning, under a single point of accountability.</div>
					<div className={styles.mekarkIsA}>Our engineering team ensures every solar power plant is designed for maximum output, structural compatibility, and long-term performance. We work exclusively with businesses; we do not offer residential solar installations.</div>
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
