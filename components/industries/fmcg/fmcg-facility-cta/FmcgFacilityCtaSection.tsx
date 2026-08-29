"use client";

import { BottomCallout } from "./BottomCallout";
import { CtaBanner } from "./CtaBanner";
import { WhyMekarkFeatures } from "./WhyMekarkFeatures";
import { WhyMekarkHeader } from "./WhyMekarkHeader";

export function FmcgFacilityCtaSection() {
  return (
    <section
      className="overflow-x-clip bg-[#f6f6f6] px-6 pb-16 pt-0 sm:px-10 lg:px-12 xl:px-16 2xl:px-20 lg:pb-24"
      aria-label="Why choose Mekark for FMCG facility construction"
    >
      <div className="mx-auto flex w-full max-w-[1720px] flex-col gap-12 lg:gap-[117px]">
        <CtaBanner />

        <div className="flex flex-col gap-12 lg:gap-16">
          <WhyMekarkHeader />
          <WhyMekarkFeatures />
          <BottomCallout />
        </div>
      </div>
    </section>
  );
}
