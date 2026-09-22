import { SectionBadge } from "./SectionBadge";
import styles from "./IntroSection.module.css";

export function IntroSection() {
  return (
    <>
      {/* Mobile — Figma intro text section */}
      <section className={`${styles.mobileIntro} bg-white px-5 py-10`}>
        <div className="mx-auto flex w-full max-w-[350px] flex-col items-start gap-3">
          <div className="inline-flex items-center gap-[7.05px] rounded-full border-[0.88px] border-[rgba(219,28,34,0.2)] bg-[rgba(219,28,34,0.05)] px-[10.58px] py-[5.29px]">
            <span className="size-2 shrink-0 rounded-full bg-[#e40015]" />
            <span className="w-[118px] font-manrope text-[10px] font-medium capitalize leading-none tracking-normal text-[#e9000e]">
              About Working At Mekark
            </span>
          </div>

          <h2 className="w-full max-w-[342px] font-manrope text-[28px] font-bold leading-[34px] tracking-normal text-gray">
            Where engineering
            <br />
            meets{" "}
            <span className="font-manrope text-[28px] font-bold text-crimson">
              execution.
            </span>
          </h2>

          <div className="w-full max-w-[326px] border-l border-[#e5e7eb] pl-4">
            <p className="font-manrope text-[14px] font-normal leading-[20px] tracking-normal text-[#4b5563]">
              At Mekark, we don&apos;t just build structures. We build industrial
              ecosystems that help businesses operate faster, safer, and smarter.
              From PEB structures and civil construction to MEP, HVAC, fire
              systems, solar, and turnkey industrial projects, every team member
              plays a role in shaping India&apos;s industrial future.
            </p>
            <p className="mt-3 font-manrope text-[14px] font-normal leading-[20px] tracking-normal text-[#4b5563]">
              We are looking for people who take ownership, solve real problems,
              and want to grow with a company built on engineering quality and
              execution excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Normal / desktop view — unchanged */}
      <section
        className={`${styles.desktopIntro} bg-white px-5 py-12 sm:px-6 sm:py-[70px] lg:px-[clamp(2rem,6vw,10rem)] lg:py-[70px]`}
      >
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 lg:flex-row lg:items-start lg:gap-10 xl:gap-[45px]">
          <div className="flex w-full shrink-0 flex-col items-start gap-[11px] lg:w-[min(100%,22rem)] xl:w-[min(100%,26rem)] lg:pt-4">
            <SectionBadge label="About Working At Mekark" />
            <h2 className="font-manrope text-[clamp(1.75rem,3.2vw,3rem)] font-bold leading-[1.2] text-gray">
              Where engineering
              <br />
              meets <span className="text-crimson">execution.</span>
            </h2>
          </div>

          <div className="min-w-0 flex-1 border-l border-[#e5e7eb] pl-5 sm:pl-8 lg:min-h-0 lg:pl-10 xl:pl-[49px]">
            <p className="max-w-[62ch] font-manrope text-[16px] font-medium leading-[26px] text-dimgray sm:text-[18px] sm:leading-[29px]">
              At Mekark, we don&apos;t just build structures. We build industrial
              ecosystems that help businesses operate faster, safer, and smarter.
              From PEB structures and civil construction to MEP, HVAC, fire
              systems, solar, and turnkey industrial projects, every team member
              plays a role in shaping India&apos;s industrial future.
            </p>
            <p className="mt-[19px] max-w-[62ch] font-manrope text-[16px] font-medium leading-[26px] text-dimgray sm:text-[18px] sm:leading-[29px]">
              We are looking for people who take ownership, solve real problems,
              and want to grow with a company built on engineering quality and
              execution excellence.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
