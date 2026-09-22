'use client';

import type { NextPage } from 'next';
import Image from "next/image";
import { ServiceIntroTitle } from "@/components/services/ServiceIntroTitle";
import { MOBILE_INTRO_BODY_CLASS } from "@/components/services/serviceMobileCivilTemplate";
import {
  SERVICE_BODY_TEXT_CLASS_SCALED,
  SERVICE_INTRO_TITLE_FIGMA_CLASS_SCALED,
} from "@/components/services/serviceTypography";
import styles from './index.module.css';

const bodyParagraphs = [
  "Mekark is a leading tensile structure contractor and manufacturer serving South India, delivering architectural tensile fabric roofing for industrial, commercial, and institutional projects across Tamil Nadu, Karnataka, Telangana, Andhra Pradesh, and Kerala from our manufacturing base in Chennai.",
  "As a turnkey tensile fabric structure manufacturer, we handle the complete lifecycle, structural analysis, membrane design, fabrication, and on-site installation, so you work with one accountable partner instead of coordinating separate designers, fabricators, and installers.",
  "We work with high-strength, fire-retardant fabrics like PTFE and ETFE to build tensile structures that are lightweight, column-free, and visually striking. We check every structure for wind load, UV exposure, and drainage before fabrication begins at our in-house facility.",
  "Whether you need a tensile car parking shed, a tensile dome structure for a public space, or large-span tensile roofing for a stadium or industrial shed, Mekark combines manufacturing scale with engineering precision to deliver faster, safer, and more cost-effective tensile construction than conventional roofing systems.",
] as const;

function Frame169Mobile() {
  return (
    <div className="relative flex w-full flex-col bg-[#f3f2f2] py-8 lg:hidden">
      <div className="px-6">
        <h2
          id="tensile-intro-title"
          className="w-full max-w-[341px] text-left font-manrope text-[28px] font-bold leading-8 tracking-normal text-[#111]"
        >
          <span className="block">Custom Tensile Fabric</span>
          <span className="block">Structures, Engineered</span>
          <span className="block">
            for <span className="text-[#e50818]">Every Application</span>
          </span>
        </h2>
      </div>

      <div className="relative mt-0 h-[280px] w-full shrink-0 overflow-hidden">
        <Image
          src="/images/services/tensile/frame189/hero-photo.webp"
          alt="Custom tensile fabric structure"
          fill
          priority
          sizes="100vw"
          className="object-contain object-bottom"
        />
      </div>

      <div className="flex w-full flex-col items-start px-6 pt-[14px]">
        <div className={`flex w-full flex-col gap-[14px] ${MOBILE_INTRO_BODY_CLASS}`}>
          {bodyParagraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

const Frame169: NextPage = () => {
  return (
    <>
      <Frame169Mobile />

      <section className={`${styles.frame} !hidden lg:!grid`}>
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
          {bodyParagraphs.map((text) => (
            <p key={text} className={SERVICE_BODY_TEXT_CLASS_SCALED}>
              {text}
            </p>
          ))}
        </div>
      </section>
    </>
  );
};

export default Frame169;
