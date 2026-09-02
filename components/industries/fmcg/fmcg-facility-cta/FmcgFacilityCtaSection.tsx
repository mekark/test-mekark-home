"use client";

import { BottomCallout } from "./BottomCallout";
import { CtaBanner } from "./CtaBanner";
import whyMac from "./fmcgCtaWhyMac.module.css";
import { WhyMekarkFeatures } from "./WhyMekarkFeatures";
import { WhyMekarkHeader } from "./WhyMekarkHeader";
import { WhyMekarkMobileImage } from "./WhyMekarkMobileImage";

export function FmcgFacilityCtaSection() {
  return (
    <section
      className={`overflow-x-clip bg-[#f6f6f6] px-6 pb-8 pt-0 sm:px-10 lg:px-12 xl:px-16 2xl:px-20 lg:pb-12 ${whyMac.sectionScope}`}
      aria-label="Why choose Mekark for FMCG facility construction"
    >
      <div className={`mx-auto flex w-full max-w-[1720px] flex-col gap-12 lg:gap-[117px] ${whyMac.sectionGap} ${whyMac.sectionInner}`}>
        <CtaBanner />

        <div className={`flex flex-col gap-8 lg:gap-16 ${whyMac.whyBlockGap}`}>
          <WhyMekarkHeader />
          <WhyMekarkMobileImage />
          <WhyMekarkFeatures />
          <BottomCallout />
        </div>
      </div>
    </section>
  );
}
