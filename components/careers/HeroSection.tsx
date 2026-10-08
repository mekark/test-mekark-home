import Image from "next/image";
import styles from "./HeroSection.module.css";

export function HeroSection() {
  return (
    <>
      {/* Mobile only — Figma career-mv 390×692 (phones; not zoomed desktop) */}
      <section
        className={`${styles.mobileHero} relative w-full overflow-hidden bg-white pt-[48px]`}
      >
        <div className="relative aspect-[390/692] w-full">
          <Image
            src="/images/mobile/career-mv/1.webp"
            alt="Mekark teams on site and in the office"
            fill
            priority
            fetchPriority="high"
            quality={60}
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 z-10 flex items-center justify-center px-5">
            <div className="flex w-full max-w-[350px] flex-col items-center gap-3 pt-12 text-center">
              <div className="flex w-full flex-col items-center gap-1">
                <h1 className="w-full max-w-[350px] font-manrope text-[28px] font-bold leading-8 tracking-normal text-[#111827]">
                  Build the future of
                  <br />
                  <span className="whitespace-nowrap">
                    industrial infrastructure.
                  </span>
                </h1>
                <p className="flex w-full max-w-[350px] flex-col font-manrope text-[14px] font-normal leading-[14px] tracking-normal text-[#464646]">
                  <span>Join a team that designs, engineers, manufactures,</span>
                  <span>and delivers industrial spaces built for performance,</span>
                  <span>safety, and long-term growth.</span>
                </p>
              </div>
              <div className="flex w-full max-w-[350px] flex-col items-center gap-2">
                <div className="relative flex h-[19px] w-full max-w-[350px] items-center justify-center bg-[linear-gradient(90deg,rgba(227,27,35,0),#e31b23_52.4%,rgba(227,27,35,0))]">
                  <p className="w-[215px] max-w-full font-manrope text-[12px] font-semibold leading-none tracking-normal text-white">
                    Join us and celebrate your careers at
                  </p>
                </div>
                <a
                  href="mailto:careers@mekark.com"
                  className="box-border flex h-[11px] w-full max-w-[350px] items-center justify-center font-manrope text-[12px] font-semibold leading-none tracking-normal text-crimson"
                >
                  careers@mekark.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Normal view — original layout; stays on desktop even when zoomed */}
      <section
        className={`${styles.desktopHero} relative h-[min(100svh,560px)] min-h-[420px] w-full overflow-hidden bg-black pt-[60px] sm:h-[min(678px,85svh)] lg:h-[min(620px,82svh)] xl:h-[678px]`}
      >
        <Image
          src="/assets/careers/hero.webp"
          alt="Mekark teams on site and in the office"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-[center_35%] lg:object-center"
        />
        <div className="pointer-events-none absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 z-10 flex items-center justify-center px-4 py-8 sm:px-8 sm:py-10">
          <div className="flex w-full max-w-[min(100%,54rem)] flex-col items-center gap-3 text-center sm:gap-5 lg:gap-4 xl:gap-6">
            <div className="flex w-full flex-col items-center gap-2.5 sm:gap-3">
              <h1 className="w-full font-manrope text-[clamp(1.75rem,3.4vw,3.25rem)] font-extrabold leading-[1.15] tracking-[-0.02em] text-black">
                Build the future of
                <br />
                industrial infrastructure.
              </h1>
              <p className="w-full max-w-[42rem] font-manrope text-[clamp(0.9375rem,1.35vw,1.25rem)] font-normal leading-[1.5] text-black/80">
                Join a team that designs, engineers, manufactures, and delivers
                industrial spaces built for performance, safety, and long-term
                growth.
              </p>
            </div>

            <div className="flex w-full max-w-[36rem] flex-col items-center font-manrope text-[clamp(0.8125rem,1.15vw,1.0625rem)] text-white">
              <div className="flex w-full max-w-full items-center justify-center bg-[linear-gradient(90deg,rgba(227,27,35,0),#e31b23_52.4%,rgba(227,27,35,0))] px-3 py-2 sm:w-fit sm:px-6">
                <p className="text-center font-semibold leading-snug sm:leading-[1.6]">
                  Join us and celebrate your careers at
                </p>
              </div>
              <a
                href="mailto:careers@mekark.com"
                className="mt-2 flex items-center justify-center font-semibold leading-snug text-crimson"
              >
                careers@mekark.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
