"use client";

import { HeroBackground } from "./HeroBackground";
import { HeroCTAButton } from "./HeroCTAButton";
import { HeroDescription } from "./HeroDescription";
import { HeroHeading } from "./HeroHeading";
import { HeroHighlightBox } from "./HeroHighlightBox";
import { HeroLogo } from "./HeroLogo";
import macStyles from "./logisticsHeroMac.module.css";
import {
  industryHeroMobileContentPadClass,
  industryHeroMobileContentWrapperClass,
  industryHeroMobileSectionClass,
  industryHeroMobileStackClass,
} from "@/components/industries/shared/industryHeroMobile";

export function LogisticsHeroBanner() {
  return (
    <section
      className={`relative flex min-h-[640px] w-full items-start overflow-hidden bg-white md:min-h-[700px] md:items-center lg:min-h-[900px] ${industryHeroMobileSectionClass} ${macStyles.heroSection}`}
      aria-label="FMCG manufacturing hero banner"
    >
      <HeroBackground />
      <HeroLogo />

      <div
        className={`relative z-10 flex w-full flex-col gap-4 px-5 pb-12 pt-28 sm:gap-6 sm:px-12 sm:pb-20 sm:pt-28 lg:gap-6 lg:px-[100px] lg:pb-0 lg:pt-16 ${industryHeroMobileContentPadClass} ${industryHeroMobileContentWrapperClass} ${macStyles.contentWrap}`}
      >
        <div
          className={`flex w-full max-w-4xl flex-col gap-3 sm:gap-[18px] lg:max-w-none ${industryHeroMobileStackClass} ${macStyles.contentStack}`}
        >
          <HeroHeading />
          <HeroHighlightBox />
          <HeroDescription />
        </div>
        <HeroCTAButton />
      </div>
    </section>
  );
}
