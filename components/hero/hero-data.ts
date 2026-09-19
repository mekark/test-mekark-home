export const HERO_VIDEOS = [
  {
    src: "/images/hero/Civil.mp4",
    poster: "/images/hero/video-2.webp",
    title: "Civil Construction",
    subtitle: "Foundations to finished infrastructure",
  },
  {
    src: "/images/hero/PEB-2.mp4",
    poster: "/images/hero/peb-poster.webp",
    title: "PEB Construction",
    subtitle: "Pre-engineered building systems",
  },
  {
    src: "/images/hero/Multi storey.mp4",
    poster: "/images/hero/video-3.webp",
    title: "Multi-Storey Construction",
    subtitle: "Vertical steel structures at scale",
  },
] as const;

export type HeroVideo = (typeof HERO_VIDEOS)[number];

/** First-slide poster — preloaded via server HeroPoster for LCP. */
export const HERO_LCP_POSTER = HERO_VIDEOS[0].poster;

export const MOBILE_VIDEO_LOAD_DELAY_MS = 2500;
export const DESKTOP_VIDEO_LOAD_DELAY_MS = 300;
export const MOBILE_NAVBAR_HEIGHT_CLASS = "max-xl:pt-[60px]";

export const MOBILE_HERO_MEDIA_FRAME_CLASS =
  "relative w-full aspect-video overflow-hidden";

export const MOBILE_HERO_MEDIA_CLASS =
  "absolute inset-0 h-full w-full object-cover object-center";

export const DESKTOP_HERO_MEDIA_CLASS =
  "xl:min-h-full xl:min-w-full xl:scale-[1.08] 2xl:scale-100";

export const HERO_MEDIA_SIZES = "(max-width: 1280px) 100vw, 100vw";
