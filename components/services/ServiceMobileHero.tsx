import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

/** Figma mobile hero gradient tokens — grey/92.5, grey/92.6, grey/91.3 */
export const MOBILE_HERO_BG_GREY_925 = "#fcdedb";
export const MOBILE_HERO_BG_GREY_926 = "#fbe3da";
export const MOBILE_HERO_BG_GREY_913 = "#f6e2d9";

export const mobileHeroBackgroundStyle: CSSProperties = {
  backgroundImage: `linear-gradient(180deg, ${MOBILE_HERO_BG_GREY_925} 0%, ${MOBILE_HERO_BG_GREY_926} 46%, ${MOBILE_HERO_BG_GREY_913} 100%)`,
};

const transparentTopImageBackground = (bottomColor = "#252525") =>
  `linear-gradient(180deg, ${MOBILE_HERO_BG_GREY_913} 0%, ${MOBILE_HERO_BG_GREY_913} 42%, ${bottomColor} 58%, ${bottomColor} 100%)`;

export type ServiceMobileHeroStat = {
  key: string;
  value: ReactNode;
  mobileLabel: string;
};

export type ServiceMobileHeroProps = {
  title: ReactNode;
  description: string;
  heroImage: {
    src: string;
    alt: string;
    objectPosition?: string;
    variant?: "default" | "fullBleed";
    scale?: number;
    translateX?: string;
    translateY?: string;
    transparentTop?: boolean;
    unoptimized?: boolean;
    bottomColor?: string;
    bottomGradient?: string;
    bottomGradientOverlayHeight?: string;
  };
  arrowIcon?: string;
  stats: ServiceMobileHeroStat[];
  certification: ReactNode;
  enquiryHref?: string;
  onEnquiryClick?: () => void;
  projectsHref?: string;
  statsOverlapMargin?: string;
  statsTranslateY?: string;
  titleClassName?: string;
  imageSectionOverlap?: string;
  /** Breakpoint at which the mobile hero is hidden (default md). Use lg when desktop hero starts at lg. */
  hideFrom?: "md" | "lg";
};

const DEFAULT_ARROW = "/images/services/civil/hero/arrow.svg";
const CERT_BADGE = "/images/services/civil/hero/cert-badge.svg";

function getHeroImageTransform(
  scale?: number,
  translateY?: string,
  translateX?: string,
) {
  if (!scale && !translateY && !translateX) return undefined;

  const transforms = [
    scale ? `scale(${scale})` : "",
    translateX ? `translateX(${translateX})` : "",
    translateY ? `translateY(${translateY})` : "",
  ].filter(Boolean);

  return transforms.join(" ");
}

export default function ServiceMobileHero({
  title,
  description,
  heroImage,
  arrowIcon = DEFAULT_ARROW,
  stats,
  certification,
  enquiryHref = "/#enquiry",
  onEnquiryClick,
  projectsHref = "/projects/completed-projects",
  statsOverlapMargin = "-108px",
  statsTranslateY = "14px",
  titleClassName = "leading-[1.2]",
  imageSectionOverlap = "0",
  hideFrom = "md",
}: ServiceMobileHeroProps) {
  const imageBottomColor = heroImage.bottomColor ?? "#252525";
  const transparentTopBackgroundStyle: CSSProperties = heroImage.bottomGradient
    ? { backgroundColor: MOBILE_HERO_BG_GREY_913 }
    : {
        backgroundImage: transparentTopImageBackground(imageBottomColor),
      };
  const bottomGradientOverlayHeight =
    heroImage.bottomGradientOverlayHeight ?? "92%";

  const hideFromClass = hideFrom === "lg" ? "lg:hidden" : "md:hidden";

  return (
    <section className={`relative w-full overflow-x-hidden font-manrope ${hideFromClass}`}>
      <div
        className="relative px-6 pt-[calc(60px+38.81px)] text-center"
        style={mobileHeroBackgroundStyle}
      >
        <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-[19.2px]">
          <h1
            className={`w-full max-w-[429px] text-[26px] font-bold text-[#161616] text-balance ${titleClassName}`}
          >
            {title}
          </h1>

          <p className="w-full max-w-[429px] text-pretty text-[14px] font-normal leading-normal text-[#4a4644]">
            {description}
          </p>

          <div className="flex w-full max-w-[488px] flex-col items-center pt-[10.8px] pb-6">
            {onEnquiryClick ? (
              <button
                type="button"
                onClick={onEnquiryClick}
                className="inline-flex h-[45px] w-[165px] shrink-0 items-center justify-center rounded-[6.93px] bg-[#c4161c] px-[31.19px] py-[15.59px] text-[14px] font-semibold leading-[20.79px] whitespace-nowrap text-white shadow-[0px_6.93px_13.86px_rgba(196,22,28,0.3)]"
              >
                Get a Free Quote
              </button>
            ) : (
              <a
                href={enquiryHref}
                className="inline-flex h-[45px] w-[165px] shrink-0 items-center justify-center rounded-[6.93px] bg-[#c4161c] px-[31.19px] py-[15.59px] text-[14px] font-semibold leading-[20.79px] whitespace-nowrap text-white shadow-[0px_6.93px_13.86px_rgba(196,22,28,0.3)]"
              >
                Get a Free Quote
              </a>
            )}

            <Link
              href={projectsHref}
              className="inline-flex items-center gap-[11px] rounded-[5.2px] px-2.5 py-3.5 text-[14px] font-semibold leading-[20.79px] whitespace-nowrap text-[#c4161c]"
            >
              View Our Projects
              <span className="relative inline-block size-[13.86px] shrink-0 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={arrowIcon}
                  alt="Arrow icon"
                  className="absolute inset-0 size-full"
                />
              </span>
            </Link>
          </div>
        </div>
      </div>

      {heroImage.transparentTop ? (
        <div
          className="relative z-10"
          style={{ marginTop: imageSectionOverlap || undefined }}
        >
          <div
            className="relative h-[240px] w-full overflow-hidden"
            style={transparentTopBackgroundStyle}
          >
            {heroImage.variant === "fullBleed" ? (
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                fill
                priority
                unoptimized={heroImage.unoptimized}
                sizes="(max-width: 1024px) 100vw, 0px"
                className="z-[1] object-contain object-bottom"
                style={{
                  ...(heroImage.objectPosition
                    ? { objectPosition: heroImage.objectPosition }
                    : { objectPosition: "center bottom" }),
                  ...(heroImage.scale || heroImage.translateX || heroImage.translateY
                    ? {
                        transform: getHeroImageTransform(
                          heroImage.scale,
                          heroImage.translateY,
                          heroImage.translateX,
                        ),
                        transformOrigin: "center bottom",
                      }
                    : {}),
                }}
              />
            ) : null}

            {heroImage.bottomGradient ? (
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 z-[2]"
                style={{
                  height: bottomGradientOverlayHeight,
                  backgroundImage: heroImage.bottomGradient,
                }}
              />
            ) : null}
          </div>

          <div
            className="relative w-full pb-0"
            style={{
              marginTop: statsOverlapMargin,
              backgroundColor: imageBottomColor,
              paddingBottom: statsTranslateY || undefined,
            }}
          >
            <div
              className="relative z-[3] mx-auto w-[316px] max-w-[calc(100%-2rem)] rounded-tl-[9px] rounded-tr-[9px] bg-[#242322] px-[15.41px] pt-[5.14px]"
              style={{
                transform: statsTranslateY
                  ? `translateY(${statsTranslateY})`
                  : undefined,
              }}
            >
              <div className="grid grid-cols-2 gap-x-[15.41px]">
                {stats.map((stat) => (
                  <div
                    key={stat.key}
                    className="flex min-w-0 flex-col gap-[1.93px] border-b border-white/14 py-[14.12px]"
                  >
                    <div className="w-full text-[14.12px] font-extrabold leading-[16.95px] tracking-[-0.28px] text-white [&_span]:leading-[inherit]">
                      {stat.value}
                    </div>
                    <div className="w-full break-words text-[8.35px] font-normal leading-[11.27px] text-white/72">
                      {stat.mobileLabel}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex min-w-0 items-center gap-[10.27px] pt-[14.12px] pb-[16.69px]">
                <span className="relative inline-block h-[29.53px] w-[26.96px] shrink-0 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={CERT_BADGE}
                    alt="ISO certification badge"
                    className="absolute inset-0 size-full"
                  />
                </span>
                <p className="min-w-0 max-w-[189px] text-left text-[10.91px] font-bold leading-[14.73px]">
                  {certification}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
      <div
        className="relative z-10 w-full bg-[#252525] pb-0"
        style={{
          marginTop: imageSectionOverlap || undefined,
        }}
      >
        <div className="relative">
          <div
            className="relative h-[240px] w-full overflow-hidden"
            style={
              heroImage.transparentTop
                ? {
                    backgroundImage: transparentTopImageBackground(
                      imageBottomColor,
                    ),
                  }
                : undefined
            }
          >
            {heroImage.variant === "fullBleed" ? (
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                fill
                priority
                unoptimized={heroImage.unoptimized}
                sizes="(max-width: 1024px) 100vw, 0px"
                className={`z-[1] ${
                  heroImage.transparentTop
                    ? "object-contain object-bottom"
                    : "object-cover"
                }`}
                style={{
                  ...(heroImage.objectPosition
                    ? { objectPosition: heroImage.objectPosition }
                    : { objectPosition: "center bottom" }),
                  ...(heroImage.scale || heroImage.translateX || heroImage.translateY
                    ? {
                        transform: getHeroImageTransform(
                          heroImage.scale,
                          heroImage.translateY,
                          heroImage.translateX,
                        ),
                        transformOrigin: "center bottom",
                      }
                    : {}),
                }}
              />
            ) : (
              <div className="absolute bottom-0 left-[-156px] z-[1] h-[240px] w-[669.77px] overflow-hidden">
                <div
                  className="absolute left-0 top-[-57.02%] h-[157.06%] w-full"
                  style={
                    heroImage.scale || heroImage.translateX || heroImage.translateY
                      ? {
                          transform: getHeroImageTransform(
                            heroImage.scale,
                            heroImage.translateY,
                            heroImage.translateX,
                          ),
                          transformOrigin: "center center",
                        }
                      : undefined
                  }
                >
                  <Image
                    src={heroImage.src}
                    alt={heroImage.alt}
                    fill
                    priority
                    unoptimized={heroImage.unoptimized}
                    sizes="(max-width: 1024px) 100vw, 0px"
                    className="object-cover"
                    style={
                      heroImage.objectPosition
                        ? { objectPosition: heroImage.objectPosition }
                        : undefined
                    }
                  />
                </div>
              </div>
            )}

            {!heroImage.transparentTop ? (
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[249px]"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(30, 30, 30, 0) 0%, #252525 63.45%)",
                }}
              />
            ) : null}
          </div>

          <div
            className="relative z-[3] w-full"
            style={{
              marginTop: statsOverlapMargin,
              paddingBottom: statsTranslateY || undefined,
            }}
          >
            <div
              className="relative mx-auto w-[316px] max-w-[calc(100%-2rem)] rounded-tl-[9px] rounded-tr-[9px] bg-[#242322] px-[15.41px] pt-[5.14px]"
              style={{
                transform: statsTranslateY
                  ? `translateY(${statsTranslateY})`
                  : undefined,
              }}
            >
            <div className="grid grid-cols-2 gap-x-[15.41px]">
              {stats.map((stat) => (
                <div
                  key={stat.key}
                  className="flex min-w-0 flex-col gap-[1.93px] border-b border-white/14 py-[14.12px]"
                >
                  <div className="w-full text-[14.12px] font-extrabold leading-[16.95px] tracking-[-0.28px] text-white [&_span]:leading-[inherit]">
                    {stat.value}
                  </div>
                  <div className="w-full break-words text-[8.35px] font-normal leading-[11.27px] text-white/72">
                    {stat.mobileLabel}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex min-w-0 items-center gap-[10.27px] pt-[14.12px] pb-[16.69px]">
              <span className="relative inline-block h-[29.53px] w-[26.96px] shrink-0 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={CERT_BADGE}
                  alt="ISO certification badge"
                  className="absolute inset-0 size-full"
                />
              </span>
              <p className="min-w-0 max-w-[189px] text-left text-[10.91px] font-bold leading-[14.73px]">
                {certification}
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
      )}
    </section>
  );
}
