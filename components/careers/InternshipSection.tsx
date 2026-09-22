import Image from "next/image";
import { AssetIcon } from "./AssetIcon";
import { SectionBadge } from "./SectionBadge";
import styles from "./InternshipSection.module.css";

const mobileHighlights = [
  {
    icon: "/assets/careers/icons/skyline.svg",
    title: "Live projects",
    body: "Work on real industrial sites",
  },
  {
    icon: "/assets/careers/icons/growth.svg",
    title: "Mentorship",
    body: "Learn from engineering teams",
  },
  {
    icon: "/assets/careers/icons/team.svg",
    title: "Freshers welcome",
    body: "Built for students starting out",
  },
];

export function InternshipSection() {
  return (
    <>
      {/* Mobile — Figma Frame 642 */}
      <section
        className={`${styles.mobileInternship} relative overflow-hidden bg-[#fafafa] px-4 py-10`}
      >
        <div className="relative mx-auto flex w-full max-w-[358px] flex-col items-stretch gap-4">
          <div className="self-start">
            <SectionBadge label="internship" />
          </div>
          <h2 className="w-full font-manrope text-[28px] font-bold leading-[34px] tracking-normal text-[#111827]">
            Start your career with Mekark.
          </h2>
          <p className="w-full font-manrope text-[14px] font-normal leading-[22px] tracking-normal text-[#4b5563]">
            Are you a student or fresher looking to begin your career? We offer
            internship opportunities to learn, grow, and gain real-world
            experience.
          </p>
          <div className="relative mx-auto h-[225px] w-full max-w-[358px] overflow-hidden rounded-2xl">
            <Image
              src="/images/mobile/career-mv/2.webp"
              alt="Mekark interns collaborating around laptops"
              width={1280}
              height={629}
              className="absolute top-1/2 left-[-58%] h-[112%] w-auto max-w-none -translate-y-1/2"
              sizes="600px"
            />
          </div>
          <a
            href="mailto:careers@mekark.com?subject=Internship%20Application"
            className="box-border inline-flex h-[42px] w-full items-center justify-center gap-2 rounded-[10px] bg-[#e31b23] px-[18px] py-[9px] font-manrope text-[14px] font-bold leading-6 text-white"
          >
            <span className="leading-6">Apply for Internship</span>
            <AssetIcon
              src="/assets/careers/icons/arrow-internship.svg"
              alt=""
              size={20}
            />
          </a>
        </div>
      </section>

      {/* Normal / desktop view — unchanged */}
      <section
        className={`${styles.desktopInternship} relative overflow-hidden px-5 py-10 md:px-20 lg:py-0`}
      >
        <Image
          src="/assets/careers/internship-pattern.webp"
          alt="Internship section background pattern"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="relative mx-auto max-w-[1280px] lg:aspect-[1280/629]">
          <div className="pointer-events-none absolute inset-0 hidden lg:block">
            <Image
              src="/assets/careers/internship-photo.webp"
              alt="Mekark interns collaborating around laptops"
              fill
              className="object-cover object-center"
              sizes="(min-width: 1280px) 1280px, 100vw"
            />
          </div>
          <div className="relative z-10 flex min-h-0 flex-col justify-center py-2 lg:min-h-full lg:py-0">
            <div className="max-w-[503px] rounded-[18px] border border-[#f3d0d2] bg-white/90 p-5 shadow-[0_10px_30px_rgba(227,27,35,0.08)] lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none lg:pl-[52px]">
              <SectionBadge label="internship" />
              <h2 className="mt-3 text-[28px] font-bold leading-[34px] tracking-[-1px] text-[#111827] sm:text-[36px] sm:leading-[42px]">
                Start your career with Mekark.
              </h2>
              <p className="mt-3 max-w-[476px] text-[13px] leading-[21px] text-[#4b5563]">
                Are you a student or fresher looking to begin your career? We
                offer internship opportunities to learn, grow, and gain
                real-world experience.
              </p>
              <ul className="mt-5 grid grid-cols-1 gap-2 lg:hidden">
                {mobileHighlights.map((item) => (
                  <li
                    key={item.title}
                    className="flex items-center gap-3 rounded-[12px] border border-[#f3f4f6] bg-[#fff7f7] px-3 py-2.5"
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white">
                      <AssetIcon
                        src={item.icon}
                        alt={`${item.title} icon`}
                        size={20}
                      />
                    </span>
                    <span>
                      <span className="block text-[13px] font-bold leading-4 text-[#111827]">
                        {item.title}
                      </span>
                      <span className="mt-0.5 block text-[12px] leading-4 text-[#6b7280]">
                        {item.body}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="mailto:careers@mekark.com?subject=Internship%20Application"
                className="mt-5 inline-flex h-[48px] w-full items-center justify-center gap-3 rounded-[5px] bg-[#e31b23] px-5 text-[16px] font-bold leading-[26px] text-white sm:h-[53px] sm:text-[17px] lg:mt-3 lg:w-auto lg:px-[27px]"
              >
                Apply for Internship
                <AssetIcon
                  src="/assets/careers/icons/arrow-internship.svg"
                  alt="Apply for internship arrow"
                  size={18}
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
