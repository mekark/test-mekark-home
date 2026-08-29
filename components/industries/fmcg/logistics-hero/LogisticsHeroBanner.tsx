"use client";

import { HeroBackground } from "./HeroBackground";
import { HeroCTAButton } from "./HeroCTAButton";
import { HeroDescription } from "./HeroDescription";
import { HeroHeading } from "./HeroHeading";
import { HeroHighlightBox } from "./HeroHighlightBox";
import { HeroLogo } from "./HeroLogo";

export function LogisticsHeroBanner() {
  return (
    <section
      className="relative flex min-h-[560px] w-full items-start overflow-hidden bg-white sm:min-h-[700px] lg:min-h-[900px]"
      aria-label="FMCG manufacturing hero banner"
    >
      <HeroBackground />
      <HeroLogo />

      <div className="relative z-10 flex w-full flex-col gap-6 px-6 pb-16 pt-32 sm:px-12 sm:pb-20 sm:pt-36 lg:gap-6 lg:px-[100px] lg:pb-0 lg:pt-36">
        <div className="flex max-w-4xl flex-col gap-[18px] lg:mt-4 lg:max-w-none">
          <HeroHeading />
          <HeroHighlightBox />
          <HeroDescription />
        </div>
        <HeroCTAButton />
      </div>
    </section>
  );
}
