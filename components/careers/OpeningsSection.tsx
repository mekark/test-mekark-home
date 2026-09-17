import { AssetIcon } from "./AssetIcon";
import { SectionBadge } from "./SectionBadge";

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

export function OpeningsSection() {
  return (
    <section className="bg-[#fff2f2] px-5 py-12 md:px-20 md:py-[58px]">
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
  );
}
