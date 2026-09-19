import { HeroCarouselDesktopLazy } from "@/components/hero/HeroCarouselDesktopLazy";
import { HeroMobileCarousel } from "@/components/hero/HeroMobileCarousel";
import {
  HERO_VIDEOS,
  MOBILE_HERO_MEDIA_FRAME_CLASS,
  MOBILE_NAVBAR_HEIGHT_CLASS,
} from "@/components/hero/hero-data";
import { HeroPoster } from "@/components/hero/HeroPoster";

const firstSlide = HERO_VIDEOS[0];

export function HeroSection() {
  return (
    <section
      className={`relative w-full overflow-hidden bg-black ${MOBILE_NAVBAR_HEIGHT_CLASS} xl:relative xl:left-1/2 xl:h-[100svh] xl:min-h-[100svh] xl:max-h-none xl:w-screen xl:max-w-[100vw] xl:-translate-x-1/2 xl:pt-0 2xl:h-[100dvh] 2xl:max-h-[1020px] 2xl:w-full 2xl:max-w-none 2xl:left-auto 2xl:translate-x-0`}
      aria-label="Hero video showcase"
    >
      <div
        className="absolute inset-x-0 top-0 z-[2] h-[60px] bg-white xl:hidden"
        aria-hidden
      />
      <div
        className={`${MOBILE_HERO_MEDIA_FRAME_CLASS} xl:absolute xl:inset-0 xl:aspect-auto xl:h-full xl:w-full`}
      >
        <HeroPoster
          src={firstSlide.poster}
          alt={`${firstSlide.title} — Mekark industrial construction showcase`}
          priority
        />
        <HeroMobileCarousel />
        <HeroCarouselDesktopLazy />
      </div>
    </section>
  );
}
