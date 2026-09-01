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
  };
  arrowIcon?: string;
  stats: ServiceMobileHeroStat[];
  certification: ReactNode;
  enquiryHref?: string;
  projectsHref?: string;
};

const DEFAULT_ARROW = "/images/services/civil/hero/arrow.svg";
const CERT_BADGE = "/images/services/civil/hero/cert-badge.svg";

export default function ServiceMobileHero({
  title,
  description,
  heroImage,
  arrowIcon = DEFAULT_ARROW,
  stats,
  certification,
  enquiryHref = "/#enquiry",
  projectsHref = "/projects/completed-projects",
}: ServiceMobileHeroProps) {
  return (
    <section className="relative isolate w-full overflow-hidden font-manrope md:hidden">
      {/* Background gradient — lowest layer */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={mobileHeroBackgroundStyle}
      />

      {/* Copy + CTAs — top layer */}
      <div className="relative z-20 mx-auto flex w-full max-w-[1240px] flex-col items-center gap-[19.2px] px-6 pt-[calc(60px+38.81px)] text-center">
        <h1 className="w-full max-w-[429px] text-balance text-[26px] font-bold leading-normal text-[#161616]">
          {title}
        </h1>

        <p className="w-full max-w-[429px] text-pretty text-[14px] font-normal leading-normal text-[#4a4644]">
          {description}
        </p>

        <div className="flex w-full max-w-[488px] flex-col items-center pt-[10.8px] pb-[70.2px]">
          <a
            href={enquiryHref}
            className="inline-flex h-[45px] w-[165px] shrink-0 items-center justify-center rounded-[6.93px] bg-[#c4161c] px-[31.19px] py-[15.59px] text-[14px] font-semibold leading-[20.79px] whitespace-nowrap text-white shadow-[0px_6.93px_13.86px_rgba(196,22,28,0.3)]"
          >
            Get a Free Quote
          </a>

          <Link
            href={projectsHref}
            className="inline-flex items-center gap-[11px] rounded-[5.2px] px-2.5 py-3.5 text-[14px] font-semibold leading-[20.79px] whitespace-nowrap text-[#c4161c]"
          >
            View Our Projects
            <span className="relative inline-block size-[13.86px] shrink-0 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={arrowIcon}
                alt=""
                className="absolute inset-0 size-full"
              />
            </span>
          </Link>
        </div>
      </div>

      {/* Hero image + stats — above background, below copy/CTAs */}
      <div className="relative z-[1] w-full">
        <div className="relative h-[240px] w-full overflow-hidden">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-6 bg-gradient-to-b to-transparent"
            style={{
              backgroundImage: `linear-gradient(180deg, ${MOBILE_HERO_BG_GREY_926} 0%, transparent 100%)`,
            }}
          />

          <div className="absolute bottom-0 left-[-156px] z-[1] h-[240px] w-[669.77px] overflow-hidden">
            <div className="absolute left-0 top-[-57.02%] h-[157.06%] w-full">
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                fill
                priority
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

          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[249px] bg-gradient-to-b from-transparent from-[0%] to-[#252525] to-[63.45%]" />
        </div>

        <div className="absolute bottom-0 left-1/2 z-[3] w-[316px] max-w-[calc(100%-2rem)] -translate-x-1/2 rounded-tl-[9px] rounded-tr-[9px] bg-[#242322] px-[15.41px] pt-[5.14px]">
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
                alt=""
                className="absolute inset-0 size-full"
              />
            </span>
            <p className="min-w-0 max-w-[189px] text-left text-[10.91px] font-bold leading-[14.73px]">
              {certification}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
