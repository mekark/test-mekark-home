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
      className="relative flex min-h-[640px] w-full max-md:min-h-svh items-center overflow-hidden bg-white md:min-h-[700px] lg:min-h-[900px]"
      aria-label="FMCG manufacturing hero banner"
    >
      <HeroBackground />
      <HeroLogo />

      <div className="relative z-10 flex w-full flex-col gap-4 px-5 pb-12 pt-28 sm:gap-6 sm:px-12 sm:pb-20 sm:pt-36 lg:gap-6 lg:px-[100px] lg:pb-0 lg:pt-36">
        <div className="flex w-full max-w-4xl flex-col gap-3 sm:gap-[18px] lg:mt-4 lg:max-w-none">
          <HeroHeading />
          <HeroHighlightBox />
          <HeroDescription />
        </div>
        <HeroCTAButton />
      </div>
    </section>
  );
}
