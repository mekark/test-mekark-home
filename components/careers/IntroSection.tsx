import { SectionBadge } from "./SectionBadge";

export function IntroSection() {
  return (
    <section className="bg-white px-5 py-12 sm:px-6 sm:py-[70px] md:px-20 lg:pl-[250px] lg:pr-[165px]">
      <div className="mr-auto flex w-full flex-col gap-8 lg:flex-row lg:items-start lg:gap-[45px]">
        <div className="flex w-full shrink-0 flex-col items-start gap-[11px] lg:w-auto lg:pt-[25px]">
          <SectionBadge label="About Working at Mekark" />
          <h2 className="font-manrope text-[32px] font-bold leading-[40px] text-gray sm:text-[40px] sm:leading-[50px] lg:text-[48px] lg:leading-[58px]">
            Where engineering
            <br />
            meets <span className="text-crimson">execution.</span>
          </h2>
        </div>
        <div className="border-l border-[#e5e7eb] pl-5 sm:pl-8 lg:min-h-[166px] lg:shrink-0 lg:pl-[49px]">
          <p className="font-inter text-[16px] font-medium leading-[26px] text-dimgray sm:text-[18px] sm:leading-[29px] [font-family:var(--font-inter-family),Inter,sans-serif]">
            <span className="max-lg:inline lg:block lg:whitespace-nowrap">
              At Mekark, we don&apos;t just build structures - we build industrial
              ecosystems that help businesses{" "}
            </span>
            <span className="max-lg:inline lg:block lg:whitespace-nowrap">
              operate faster, safer, and smarter. From PEB structures and civil
              construction to MEP, HVAC, fire{" "}
            </span>
            <span className="max-lg:inline lg:block lg:whitespace-nowrap">
              systems, solar, and turnkey industrial projects, every team member
              plays a role in shaping India&apos;s{" "}
            </span>
            <span className="max-lg:inline lg:block lg:whitespace-nowrap">
              industrial future.
            </span>
          </p>
          <p className="mt-[19px] font-inter text-[16px] font-medium leading-[26px] text-dimgray sm:text-[18px] sm:leading-[29px] [font-family:var(--font-inter-family),Inter,sans-serif]">
            <span className="max-lg:inline lg:block lg:whitespace-nowrap">
              We&apos;re looking for people who take ownership, solve real problems,
              and want to grow with a{" "}
            </span>
            <span className="max-lg:inline lg:block lg:whitespace-nowrap">
              company built on engineering quality and execution excellence.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
