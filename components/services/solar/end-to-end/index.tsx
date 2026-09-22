import type { NextPage } from "next";
import Image from "next/image";
import { ServiceIntroTitle } from "@/components/services/ServiceIntroTitle";
import { MOBILE_INTRO_BODY_CLASS } from "@/components/services/serviceMobileCivilTemplate";
import {
  SERVICE_BODY_TEXT_CLASS_SCALED,
  SERVICE_INTRO_TITLE_FIGMA_CLASS_SCALED,
} from "@/components/services/serviceTypography";
import styles from "./index.module.css";

const bodyParagraphs = [
  "Mekark is a leading commercial solar installation contractor serving industrial and commercial clients across South India, including Tamil Nadu, Chennai, Bangalore, Hyderabad, Karnataka, and Andhra Pradesh.",
  "As a turnkey solar EPC contractor, we manage the complete project lifecycle, structural assessment, system design, supply, installation, and commissioning, under a single point of accountability.",
  "Our engineering team ensures every solar power plant is designed for maximum output, structural compatibility, and long-term performance. We work exclusively with businesses; we do not offer residential solar installations.",
] as const;

function EndToEndMobile() {
  return (
    <div className="relative flex w-full flex-col bg-white py-8 lg:hidden">
      <div className="px-6">
        <h2
          id="solar-end-to-end-title"
          className="w-full max-w-[341px] text-left font-manrope text-[28px] font-bold leading-[35px] tracking-normal text-[#111]"
        >
          <span className="block">End-to-End Commercial</span>
          <span className="block">Solar Solutions,</span>
          <span className="block text-[#e50818]">Under One Roof</span>
        </h2>
      </div>

      {/* Figma 7454:7966 — 360×205 image in 222px stack */}
      <div className="relative mt-0 h-[222px] w-full shrink-0 overflow-hidden">
        <div className="absolute left-[15px] top-[8px] h-[205px] w-[min(360px,calc(100%-30px))] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/services/solar/end-to-end/solar-ete-1.webp"
            alt="End-to-end commercial solar EPC installation"
            className="pointer-events-none absolute left-[-2.11%] top-[-17.34%] h-[117.12%] w-[100.38%] max-w-none object-cover"
          />
        </div>
      </div>

      <div className="flex w-full flex-col items-start px-6 pt-[10px]">
        <div
          className={`flex w-full flex-col gap-[14px] ${MOBILE_INTRO_BODY_CLASS}`}
        >
          {bodyParagraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

const EndToEnd: NextPage = () => {
  return (
    <>
      <EndToEndMobile />

      <div className={`${styles.rectangleParent} !hidden lg:block`}>
        <div className={styles.frameChild} />
        <div className={styles.div} />
        <div className={styles.endToEndCommercialSolarSoParent}>
          <div className={styles.titleWrap}>
            <ServiceIntroTitle
              className={SERVICE_INTRO_TITLE_FIGMA_CLASS_SCALED}
              beforeRed="End-to-End Commercial Solar"
              line2Prefix="Solutions, "
              redPart="Under One Roof"
              scaledCanvas
            />
          </div>
          <div className={styles.mekarkIsALeadingCommercialParent}>
            <div className={SERVICE_BODY_TEXT_CLASS_SCALED}>
              Mekark is a leading commercial solar installation contractor serving
              industrial and
              <br />
              commercial clients across South India, including Tamil Nadu, Chennai,
              Bangalore,
              <br />
              Hyderabad, Karnataka, and Andhra Pradesh.
            </div>
            <div className={SERVICE_BODY_TEXT_CLASS_SCALED}>
              {bodyParagraphs[1]}
            </div>
            <div className={SERVICE_BODY_TEXT_CLASS_SCALED}>
              {bodyParagraphs[2]}
            </div>
          </div>
        </div>
        <Image
          className={styles.solarEte1}
          width={908}
          height={603}
          sizes="100vw"
          src="/images/services/solar/end-to-end/solar-ete-1.webp"
          alt="End-to-end commercial solar EPC installation"
        />
      </div>
    </>
  );
};

export default EndToEnd;
