import Image from "next/image";
import { ServiceIntroTitle } from "@/components/services/ServiceIntroTitle";
import {
  SERVICE_BODY_TEXT_CLASS_SCALED,
  SERVICE_INTRO_TITLE_FIGMA_CLASS_SCALED,
} from "@/components/services/serviceTypography";
import { SERVICE_MEP_END_TO_END_ASPECT_CLASS_SCALED } from "@/lib/sectionLayout";

const paragraphs = [
  {
    text: "Mekark is a leading industrial MEP contractor based in Chennai, delivering reliable, code-compliant mechanical, electrical, plumbing, and fire-fighting systems for factories, warehouses, and manufacturing plants across Tamil Nadu, Andhra Pradesh, Karnataka, Kerala, and Telangana.",
    maxWidth: "max-w-[641.333px]",
  },
  {
    text: "As a trusted MEP contractor in South India, we work with plant owners, EPC contractors, and facility managers in Chennai, Coimbatore, Bangalore, Hyderabad, Vizag, and Kochi who need MEP systems built for real production loads, not just handover-day inspections.",
    maxWidth: "max-w-[672px]",
  },
  {
    text: "Whether you need industrial MEP contracting in Tamil Nadu, fire-fighting system installation in Chennai, or reliable MEP services across South India, Mekark combines technical expertise with hands-on execution to deliver systems that perform under actual plant operating conditions.",
    maxWidth: "max-w-[653.333px]",
  },
] as const;

export default function EndToEnd() {
  return (
    <section
      className="relative isolate w-full overflow-hidden bg-[#E6E6E6] text-[#111111] lg:-mb-12"
      aria-labelledby="end-to-end-mep-title"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(266deg,#fff_0%,rgba(255,255,255,0)_100%)]"
        aria-hidden="true"
      />

      <div className={`relative z-10 mx-auto flex w-full max-w-[1920px] flex-col px-5 py-8 sm:px-10 sm:py-10 lg:block lg:px-0 lg:py-0 ${SERVICE_MEP_END_TO_END_ASPECT_CLASS_SCALED}`}>
        {/* Copy — Figma: left 224px, title top ~85px, body top ~295px */}
        <div className="contents lg:block lg:absolute lg:left-[11.67%] lg:top-[8%] lg:z-10 lg:w-[35%] lg:max-w-[672px]">
          <div className="order-1 lg:order-none">
            <ServiceIntroTitle
              id="end-to-end-mep-title"
              className={SERVICE_INTRO_TITLE_FIGMA_CLASS_SCALED}
              beforeRed="End-to-End"
              line2Prefix="MEP Design, Build & Commissioning,"
              redPart="Under One Roof"
              redOnThirdLine
            />
          </div>

          <div
            className={`order-3 mt-5 flex flex-col gap-5 sm:mt-6 lg:order-none lg:mt-5 lg:max-w-none lg:gap-[26px] ${SERVICE_BODY_TEXT_CLASS_SCALED} lg:text-[18.67px] lg:leading-[26.67px]`}
          >
            {paragraphs.map(({ text, maxWidth }) => (
              <p key={text} className={maxWidth}>
                {text}
              </p>
            ))}
          </div>
        </div>

        {/* Visual — matches screenshot: cutaway right, blueprint top-right, grid floor */}
        <div
          className="relative order-2 mt-5 aspect-[986/658] w-full sm:mt-6 lg:absolute lg:inset-0 lg:order-none lg:mt-0 lg:aspect-auto"
          aria-hidden="true"
        >
          <Image
            src="/images/services/mep/end-to-end/layer-14.png"
            alt=""
            width={602}
            height={752}
            className="pointer-events-none absolute z-0 hidden opacity-60 lg:left-[68.63%] lg:top-[-16.64%] lg:block lg:h-[80.92%] lg:w-[31.35%] lg:object-cover"
            sizes="(max-width: 1920px) 31vw, 602px"
          />

          <Image
            src="/images/services/mep/end-to-end/floor-grid.png"
            alt=""
            width={1147}
            height={341}
            className="pointer-events-none absolute z-[1] hidden lg:left-[43.54%] lg:top-[51.36%] lg:block lg:h-[36.73%] lg:w-[59.73%] lg:object-contain"
            sizes="(max-width: 1920px) 60vw, 1147px"
          />

          <Image
            src="/images/services/mep/end-to-end/mep-cutaway.png"
            alt="MEP systems cutaway illustration"
            width={986}
            height={658}
            priority
            className="pointer-events-none absolute inset-0 z-[2] h-full w-full object-contain object-bottom lg:inset-auto lg:left-[45.14%] lg:top-[4.45%] lg:h-[75.61%] lg:w-[54.9%] lg:object-contain lg:object-right-bottom"
            sizes="(max-width: 1023px) 92vw, (max-width: 1920px) 55vw, 986px"
          />
        </div>
      </div>
    </section>
  );
}
