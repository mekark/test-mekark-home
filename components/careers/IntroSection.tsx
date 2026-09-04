import { SectionBadge } from "./SectionBadge";

export function IntroSection() {
  return (
    <section className="bg-white px-5 py-12 sm:px-6 sm:py-[70px] lg:px-[clamp(2rem,6vw,10rem)] lg:py-[70px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 lg:flex-row lg:items-start lg:gap-10 xl:gap-[45px]">
        <div className="flex w-full shrink-0 flex-col items-start gap-[11px] lg:w-[min(100%,22rem)] xl:w-[min(100%,26rem)] lg:pt-4">
          <SectionBadge label="About Working at Mekark" />
          <h2 className="font-manrope text-[clamp(1.75rem,3.2vw,3rem)] font-bold leading-[1.2] text-gray">
            Where engineering
            <br />
            meets <span className="text-crimson">execution.</span>
          </h2>
        </div>

        <div className="min-w-0 flex-1 border-l border-[#e5e7eb] pl-5 sm:pl-8 lg:min-h-0 lg:pl-10 xl:pl-[49px]">
          <p className="max-w-[62ch] font-inter text-[16px] font-medium leading-[26px] text-dimgray sm:text-[18px] sm:leading-[29px] [font-family:var(--font-inter-family),Inter,sans-serif]">
            At Mekark, we don&apos;t just build structures - we build industrial
            ecosystems that help businesses operate faster, safer, and smarter.
            From PEB structures and civil construction to MEP, HVAC, fire
            systems, solar, and turnkey industrial projects, every team member
            plays a role in shaping India&apos;s industrial future.
          </p>
          <p className="mt-[19px] max-w-[62ch] font-inter text-[16px] font-medium leading-[26px] text-dimgray sm:text-[18px] sm:leading-[29px] [font-family:var(--font-inter-family),Inter,sans-serif]">
            We&apos;re looking for people who take ownership, solve real problems,
            and want to grow with a company built on engineering quality and
            execution excellence.
          </p>
        </div>
      </div>
    </section>
  );
}
