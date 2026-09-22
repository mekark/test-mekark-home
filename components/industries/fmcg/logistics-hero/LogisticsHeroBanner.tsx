"use client";

import { HeroBackground } from "./HeroBackground";
import { HeroCTAButton } from "./HeroCTAButton";
import { HeroDescription } from "./HeroDescription";
import { HeroHeading } from "./HeroHeading";
import { HeroHighlightBox } from "./HeroHighlightBox";
import macStyles from "./logisticsHeroMac.module.css";

export function LogisticsHeroBanner() {
  return (
    <section
      className={macStyles.heroSection}
      aria-label="FMCG manufacturing hero banner"
    >
      <HeroBackground />

      <div className={macStyles.contentWrap}>
        <div className={macStyles.contentStack}>
          <HeroHeading />
          <HeroHighlightBox />
          <HeroDescription />
        </div>
        <HeroCTAButton />
      </div>
    </section>
  );
}
