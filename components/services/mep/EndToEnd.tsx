import Image from "next/image";
import { ServiceIntroTitle } from "@/components/services/ServiceIntroTitle";
import { MOBILE_INTRO_BODY_CLASS } from "@/components/services/serviceMobileCivilTemplate";
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

function EndToEndMobile() {
  return (
    <div className="relative flex w-full flex-col bg-white py-8 lg:hidden">
      <div className="px-6">
        <h2
          id="end-to-end-mep-title"
          className="w-full max-w-[341px] text-left font-manrope text-[28px] font-bold leading-8 tracking-normal text-[#111]"
        >
          <span className="block">End-to-End MEP Design,</span>
          <span className="block">Build &amp; Commissioning,</span>
          <span className="block text-[#e50818]">Under One Roof</span>
        </h2>
      </div>

      {/* Figma 7396:5846 — 312px visual stack */}
      <div
        className="relative mt-0 h-[312px] w-full shrink-0 overflow-hidden"
        aria-hidden
      >
        <div className="absolute left-[-153.3px] top-[149.94px] flex h-[162.116px] w-[539.589px] items-center justify-center">
          <div className="rotate-[1.95deg]">
            <div className="relative h-[144px] w-[535px] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/services/mep/end-to-end/floor-grid.webp"
                alt=""
                className="pointer-events-none absolute left-[-6.66%] top-[-148.44%] h-[290.08%] w-[129.51%] max-w-none object-cover"
              />
            </div>
          </div>
        </div>

        <div className="absolute left-0 top-0 h-[192px] w-[223px] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/services/mep/end-to-end/layer-14.webp"
            alt=""
            className="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
          />
        </div>

        <div className="absolute left-0 top-[23px] h-[260px] w-[390px] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/services/mep/end-to-end/mep-cutaway.webp"
            alt="Industrial MEP systems installation"
            className="pointer-events-none absolute left-[-9.23%] top-[0.6%] h-[98.8%] w-[109.15%] max-w-none object-cover"
          />
        </div>
      </div>

      <div className="flex w-full flex-col items-start px-6 pt-[14px]">
        <div className={`flex w-full flex-col gap-[14px] ${MOBILE_INTRO_BODY_CLASS}`}>
          {paragraphs.map(({ text }) => (
            <p key={text}>{text}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

function EndToEndDesktop() {
  return (
    <div
      className={`relative z-10 mx-auto hidden w-full max-w-[1920px] flex-col px-5 py-8 sm:px-10 sm:py-10 lg:block lg:px-0 lg:py-0 ${SERVICE_MEP_END_TO_END_ASPECT_CLASS_SCALED}`}
    >
      {/* Copy — Figma: left 224px, title top ~85px, body top ~295px */}
      <div className="contents lg:block lg:absolute lg:left-[11.67%] lg:top-[8%] lg:z-10 lg:w-[35%] lg:max-w-[672px]">
        <div className="order-1 lg:order-none">
          <ServiceIntroTitle
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

      {/* Visual — cutaway right, blueprint top-right, grid floor */}
      <div
        className="relative order-2 mt-5 aspect-[986/658] w-full sm:mt-6 lg:absolute lg:inset-0 lg:order-none lg:mt-0 lg:aspect-auto"
        aria-hidden="true"
      >
        <Image
          src="/images/services/mep/end-to-end/layer-14.webp"
          alt="Industrial MEP systems installation"
          width={602}
          height={752}
          className="pointer-events-none absolute z-[1] hidden opacity-60 lg:left-[68.63%] lg:top-[-16.64%] lg:block lg:h-[80.92%] lg:w-[31.35%] lg:object-cover"
          sizes="(max-width: 1920px) 31vw, 602px"
        />

        <Image
          src="/images/services/mep/end-to-end/floor-grid.webp"
          alt="Decorative grid background"
          width={1147}
          height={341}
          className="pointer-events-none absolute z-0 hidden lg:left-[32%] lg:top-[-26%] lg:block lg:h-[140%] lg:w-[152%] lg:object-contain"
          sizes="(max-width: 1920px) 60vw, 1147px"
        />

        <Image
          src="/images/services/mep/end-to-end/mep-cutaway.webp"
          alt="MEP systems cutaway illustration"
          width={986}
          height={658}
          priority
          className="pointer-events-none absolute inset-0 z-[2] h-full w-full object-contain object-bottom lg:inset-auto lg:left-[45.14%] lg:top-[4.45%] lg:h-[75.61%] lg:w-[54.9%] lg:object-contain lg:object-right-bottom"
          sizes="(max-width: 1023px) 92vw, (max-width: 1920px) 55vw, 986px"
        />
      </div>
    </div>
  );
}

export default function EndToEnd() {
  return (
    <section
      className="relative isolate w-full overflow-hidden bg-[#E6E6E6] text-[#111111] lg:-mb-12"
      aria-labelledby="end-to-end-mep-title"
    >
      <div
        className="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(266deg,#fff_0%,rgba(255,255,255,0)_100%)] lg:block"
        aria-hidden="true"
      />

      <EndToEndMobile />
      <EndToEndDesktop />
    </section>
  );
}
