'use client';

import type { NextPage } from 'next';
import Image from "next/image";
import { ServiceIntroTitle } from "@/components/services/ServiceIntroTitle";
import {
  SERVICE_BODY_TEXT_CLASS_SCALED,
  SERVICE_INTRO_TITLE_FIGMA_CLASS_SCALED,
} from "@/components/services/serviceTypography";
import styles from './index.module.css';

const Frame169: NextPage = () => {
  	return (
    		<section className={styles.frame}>
      			<ServiceIntroTitle
        				className={`${styles.title} ${SERVICE_INTRO_TITLE_FIGMA_CLASS_SCALED} lg:min-w-[977px]`}
        				beforeRed="Custom Tensile Fabric Structures,"
        				line2Prefix="Engineered for "
        				redPart="Every Application"
						scaledCanvas
      				/>

      			<div className={styles.media}>
        				<Image
          					className={styles.heroPhoto}
          					src="/images/services/tensile/frame189/hero-photo.webp"
          					width={977}
          					height={577}
          					sizes="(max-width: 900px) 100vw, 50vw"
          					alt="Custom tensile fabric structure"
          					priority
        				/>
      			</div>

      			<div className={styles.body}>
        				<p className={SERVICE_BODY_TEXT_CLASS_SCALED}>
          					Mekark is a leading tensile structure contractor and manufacturer serving South India, delivering architectural tensile fabric roofing for industrial, commercial, and institutional projects across Tamil Nadu, Karnataka, Telangana, Andhra Pradesh, and Kerala from our manufacturing base in Chennai.
        				</p>
        				<p className={SERVICE_BODY_TEXT_CLASS_SCALED}>
          					As a turnkey tensile fabric structure manufacturer, we handle the complete lifecycle, structural analysis, membrane design, fabrication, and on-site installation, so you work with one accountable partner instead of coordinating separate designers, fabricators, and installers.
        				</p>
        				<p className={SERVICE_BODY_TEXT_CLASS_SCALED}>
          					We work with high-strength, fire-retardant fabrics like PTFE and ETFE to build tensile structures that are lightweight, column-free, and visually striking. We check every structure for wind load, UV exposure, and drainage before fabrication begins at our in-house facility.
        				</p>
        				<p className={SERVICE_BODY_TEXT_CLASS_SCALED}>
          					Whether you need a tensile car parking shed, a tensile dome structure for a public space, or large-span tensile roofing for a stadium or industrial shed, Mekark combines manufacturing scale with engineering precision to deliver faster, safer, and more cost-effective tensile construction than conventional roofing systems.
        				</p>
      			</div>
    		</section>
  	);
};

export default Frame169;
