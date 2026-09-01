import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative h-[min(100svh,590px)] min-h-[420px] w-full overflow-hidden bg-black pt-[60px] sm:h-[678px]">
      <Image
        src="/assets/careers/hero.png"
        alt="Mekark teams on site and in the office"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_35%]"
      />
      <div className="pointer-events-none absolute inset-0 bg-black/10" />
      <div className="absolute inset-0 z-10 flex items-center justify-center px-4 py-10 sm:px-8">
        <div className="flex w-full max-w-[860px] -translate-y-2 flex-col items-center gap-4 text-center sm:-translate-y-6 sm:gap-6">
          <div className="flex w-full flex-col items-center gap-3">
            <h1 className="w-full font-manrope text-[32px] font-extrabold leading-[38px] text-black sm:text-[42px] sm:leading-[52px] lg:text-[52px] lg:leading-[64px]">
              Build the Future of
              <br />
              Industrial Infrastructure.
            </h1>
            <p className="w-full max-w-[680px] font-inter text-[16px] font-normal leading-[24px] text-black/80 sm:text-[20px] sm:leading-[28px]">
            Join a team that designs, engineers, manufactures, and delivers industrial spaces built for performance, safety, and long-term growth across Tamil Nadu, Karnataka, Andhra Pradesh, Telangana, and Kerala.
            </p>
          </div>
          <div className="flex w-full flex-col items-center font-inter text-[14px] text-white sm:text-[17px]">
            <div className="flex w-fit max-w-full items-center justify-center bg-[linear-gradient(90deg,rgba(227,27,35,0),#e31b23_52.4%,rgba(227,27,35,0))] px-4 py-2 sm:px-6">
              <p className="text-center font-semibold leading-6 sm:leading-[27.63px]">
                Ready to build your career with us? Reach out at
              </p>
            </div>
            <a
              href="mailto:careers@mekark.com"
              className="mt-2 flex items-center justify-center font-semibold leading-[27.63px] text-crimson"
            >
              careers@mekark.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
