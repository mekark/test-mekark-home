import type { ServiceMobileHeroProps } from "@/components/services/ServiceMobileHero";

/** Shared mobile hero layout matching the Civil service page. */
export const civilMobileHeroLayout = {
  titleClassName: "leading-[1.2] !text-wrap max-w-full",
  imageSectionOverlap: "-24px",
  statsOverlapMargin: "-108px",
  statsTranslateY: "14px",
} satisfies Partial<ServiceMobileHeroProps>;

/** Civil-style bottom fade overlay using grey (#252525) instead of brown. */
export const greyMobileHeroBottomGradient =
  "linear-gradient(180deg, rgba(37, 37, 37, 0) 0%, rgba(37, 37, 37, 0) 22%, rgba(37, 37, 37, 0.58) 50%, rgba(37, 37, 37, 0.92) 70%, #252525 100%)";

export const civilMobileHeroImageDefaults = {
  variant: "fullBleed" as const,
  transparentTop: true,
  unoptimized: true,
  bottomColor: "#252525",
  bottomGradient: greyMobileHeroBottomGradient,
  bottomGradientOverlayHeight: "98%",
};
