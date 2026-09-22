import { AssetIcon } from "./AssetIcon";
import { SectionBadge } from "./SectionBadge";
import styles from "./OpeningsSection.module.css";

const openings = [
  {
    title: "Civil Engineer",
    department: "Engineering & Design",
    location: "Chennai",
    type: "Full Time",
    experience: "3–5 yrs",
  },
  {
    title: "Structural Design",
    department: "Engineering & Design",
    location: "Chennai",
    type: "Full Time",
    experience: "2–4 yrs",
  },
  {
    title: "Project Coordinator",
    department: "Project Site Execution",
    location: "Multiple",
    type: "Full Time",
    experience: "2–5 yrs",
  },
  {
    title: "Business Development Manager",
    department: "Sales & BD",
    location: "Chennai",
    type: "Full Time",
    experience: "5+ yrs",
  },
];

function JobMeta({
  icon,
  label,
  alt,
}: {
  icon: string;
  label: string;
  alt: string;
}) {
  return (
    <span className="inline-flex h-5 items-center gap-1 font-manrope text-[12px] font-normal leading-5 tracking-normal text-[#6a7282]">
      <AssetIcon src={icon} alt={alt} size={12} />
      {label}
    </span>
  );
}

export function OpeningsSection() {
  return (
    <>
      {/* Mobile — Figma openings */}
      <section className={`${styles.mobileOpenings} bg-[#f1f1f1] px-4 py-10`}>
        <div className="mx-auto w-full max-w-[358px]">
          <div className="flex flex-col items-start gap-2">
            <SectionBadge label="join us" />
            <h2 className="font-manrope text-[28px] font-bold leading-9 text-[#1a1f2e]">
              Current openings
            </h2>
            <a
              href="#open-application"
              className="inline-flex h-5 items-center gap-1 whitespace-nowrap font-manrope text-[14px] font-semibold leading-5 tracking-normal text-[#e8291c]"
            >
              View all positions
              <AssetIcon
                src="/assets/careers/icons/arrow-right.svg"
                alt=""
                size={14}
              />
            </a>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            {openings.map((job) => (
              <article
                key={job.title}
                className="box-border flex w-full max-w-[358px] flex-col gap-2.5 rounded-[14px] border border-[#e5e7eb] bg-[#fdfdfd] p-4 shadow-[-1px_1px_6px_0px_#1e1e1e14]"
              >
                <div className="min-w-0">
                  <h3 className="font-manrope text-[18px] font-bold leading-6 tracking-normal text-[#1a1f2e]">
                    {job.title}
                  </h3>
                  <p className="font-manrope text-[14px] font-normal leading-5 tracking-normal text-[#4c4c4c]">
                    {job.department}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                  <JobMeta
                    icon="/assets/careers/icons/location.svg"
                    alt=""
                    label={job.location}
                  />
                  <JobMeta
                    icon="/assets/careers/icons/clock.svg"
                    alt=""
                    label={job.type}
                  />
                  <JobMeta
                    icon="/assets/careers/icons/star.svg"
                    alt=""
                    label={job.experience}
                  />
                </div>

                <a
                  href="#open-application"
                  className="inline-flex h-9 w-full items-center justify-center gap-2.5 rounded-lg bg-[#e8291c]/10 px-4 py-2 font-manrope text-[14px] font-semibold leading-5 text-[#e8291c]"
                >
                  Apply Now
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Normal / desktop view — unchanged */}
      <section
        className={`${styles.desktopOpenings} bg-[#fff2f2] px-5 py-12 md:px-20 md:py-[58px]`}
      >
        <div className="mx-auto max-w-[1232px]">
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
            <div>
              <SectionBadge label="join us" />
              <h2 className="mt-2 text-[28px] font-bold leading-9 text-[#1a1f2e] sm:text-[36px] sm:leading-10">
                Current openings
              </h2>
            </div>
            <a
              href="#open-application"
              className="inline-flex shrink-0 items-center gap-1 text-[14px] font-semibold leading-5 text-[#e8291c] sm:mb-1"
            >
              View all positions
              <AssetIcon
                src="/assets/careers/icons/arrow-right.svg"
                alt="Arrow icon"
                size={14}
              />
            </a>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:mt-10">
            {openings.map((job) => (
              <article
                key={job.title}
                className="grid grid-cols-1 gap-3 rounded-[14px] bg-white px-4 py-4 sm:px-6 md:grid-cols-[minmax(0,1.2fr)_minmax(260px,1fr)_auto] md:items-center md:gap-4"
              >
                <div className="min-w-0">
                  <h3 className="text-[16px] font-bold leading-6 text-[#1a1f2e]">
                    {job.title}
                  </h3>
                  <p className="pt-0.5 text-[14px] leading-5 text-[#6a7282]">
                    {job.department}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] leading-4 text-[#6a7282] md:justify-start">
                  <span className="inline-flex items-center gap-1">
                    <AssetIcon
                      src="/assets/careers/icons/location.svg"
                      alt="Timeline icon"
                      size={12}
                    />
                    {job.location}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <AssetIcon
                      src="/assets/careers/icons/clock.svg"
                      alt="Timeline icon"
                      size={12}
                    />
                    {job.type}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <AssetIcon
                      src="/assets/careers/icons/star.svg"
                      alt="Job type icon"
                      size={12}
                    />
                    {job.experience}
                  </span>
                </div>
                <a
                  href="#open-application"
                  className="inline-flex h-10 w-full items-center justify-center gap-1.5 rounded px-4 text-[12px] font-bold leading-4 text-white bg-[#e8291c] md:h-8 md:w-fit"
                >
                  Apply Now
                  <AssetIcon
                    src="/assets/careers/icons/arrow-apply.svg"
                    alt="Apply now arrow"
                    size={12}
                  />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
