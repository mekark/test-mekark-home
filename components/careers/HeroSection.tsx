import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative h-[min(100svh,560px)] min-h-[420px] w-full overflow-hidden bg-black pt-[60px] sm:h-[min(678px,85svh)] lg:h-[min(620px,82svh)] xl:h-[678px]">
      <Image
        src="/assets/careers/hero.webp"
        alt="Mekark teams on site and in the office"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_35%] lg:object-center"
      />
      <div className="pointer-events-none absolute inset-0 bg-black/10" />
      <div className="absolute inset-0 z-10 flex items-center justify-center px-4 py-8 sm:px-8 sm:py-10">
        <div className="flex w-full max-w-[min(100%,54rem)] flex-col items-center gap-3 text-center sm:gap-5 lg:gap-4 xl:gap-6">
          <div className="flex w-full flex-col items-center gap-2.5 sm:gap-3">
            <h1 className="w-full font-manrope text-[clamp(1.75rem,3.4vw,3.25rem)] font-extrabold leading-[1.15] tracking-[-0.02em] text-black">
              Build the Future of
              <br />
              Industrial Infrastructure.
            </h1>
            <p className="w-full max-w-[42rem] font-manrope text-[clamp(0.9375rem,1.35vw,1.25rem)] font-normal leading-[1.5] text-black/80">
              Join a team that designs, engineers, manufactures, and delivers
              industrial spaces built for performance, safety, and long-term
              growth across Tamil Nadu, Karnataka, Andhra Pradesh, Telangana,
              and Kerala.
            </p>
          </div>

          <div className="flex w-full max-w-[36rem] flex-col items-center font-manrope text-[clamp(0.8125rem,1.15vw,1.0625rem)] text-white">
            <div className="flex w-full max-w-full items-center justify-center bg-[linear-gradient(90deg,rgba(227,27,35,0),#e31b23_52.4%,rgba(227,27,35,0))] px-3 py-2 sm:w-fit sm:px-6">
              <p className="text-center font-semibold leading-snug sm:leading-[1.6]">
                Ready to build your career with us? Reach out at
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
  );
}
