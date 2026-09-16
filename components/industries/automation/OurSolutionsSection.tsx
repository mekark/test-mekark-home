import Image from "next/image";
import type { ReactNode } from "react";

/** Desktop timeline + card positions — vw units against the 1920px design canvas,
 * matching Pharma's "complete-pharma" single-SVG-skeleton approach (Automation's own
 * timeline.svg was sized for this exact same zigzag layout) instead of CSS-drawn
 * hairlines, which rendered inconsistently thin/blurry at some viewport widths. */
const CARD_WIDTH = 33.9775;
const CARD_HEIGHT = 8.8925;
const CARD_LEFT_NEAR = 3.35208;
const CARD_LEFT_FAR = 13.05229;
const CANVAS_WIDTH = 47.03646;
const CANVAS_HEIGHT = 68.45313;
const IMAGE_WIDTH = 14.82129;
const TEXT_LEFT = 16.25729;
const TEXT_WIDTH = 16.13958;

const DESKTOP_POSITIONS = [
  { top: 0, left: CARD_LEFT_NEAR },
  { top: 11.91125, left: CARD_LEFT_FAR },
  { top: 23.82198, left: CARD_LEFT_NEAR },
  { top: 35.73271, left: CARD_LEFT_FAR },
  { top: 47.64479, left: CARD_LEFT_NEAR },
  { top: 59.56104, left: CARD_LEFT_FAR },
] as const;

type Solution = {
  title: string;
  description: ReactNode;
  image: string;
};

const solutions: Solution[] = [
  {
    title: "Turnkey Automation Plant Construction:",
    description:
      "Full-scope design, civil works, structural steel, and MEP delivered under one contract for automation and robotics manufacturing units.",
    image: "/images/industries/automation/solutions/turnkey-automation.webp",
  },
  {
    title: "ESD-Controlled & Precision Flooring Systems:",
    description:
      "Static-dissipative epoxy flooring, vibration-isolated slabs, and clean-process interiors engineered for robotics, PCB, and control panel assembly lines.",
    image: "/images/industries/automation/solutions/esd-flooring.webp",
  },
  {
    title: "Smart Factory & Industry 4.0 Infrastructure:",
    description:
      "Structured cabling, IoT-ready conduit layouts, and automation-integrated building systems designed for connected manufacturing.",
    image: "/images/industries/automation/solutions/smart-factory.webp",
  },
  {
    title: "HVAC & Precision Air Handling Systems:",
    description:
      "Temperature and particulate control engineered specifically for automation testing labs, robotics assembly, and electronics-adjacent production.",
    image: "/images/industries/automation/solutions/hvac.webp",
  },
  {
    title: "MEP & High-Density Utility Infrastructure:",
    description:
      "Electrical, mechanical, plumbing, and compressed air systems sized for robotics, CNC, and automated production line loads.",
    image: "/images/industries/automation/solutions/mep-infrastructure.webp",
  },
  {
    title: "EOT Crane & Material Handling Systems:",
    description:
      "Overhead crane, conveyor, and AGV-ready internal logistics infrastructure for heavy automation equipment handling.",
    image: "/images/industries/automation/solutions/eot-crane.webp",
  },
];

function MobileSolutionCard({ title, description, image }: Solution) {
  return (
    <article className="flex w-full flex-col overflow-hidden rounded-[16px] border border-solid border-[#e3e4e7] bg-white shadow-[0_2px_12px_rgba(17,17,17,0.04)]">
      <div className="relative h-[180px] w-full shrink-0 sm:h-[200px]">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-2 px-4 py-4 sm:px-5">
        <h3 className="font-[family-name:var(--font-manrope)] text-base font-semibold leading-snug text-black sm:text-lg">
          {title}
        </h3>
        <div className="font-[family-name:var(--font-manrope)] text-sm leading-relaxed text-[#6e6e6e] sm:text-base sm:leading-normal">
          {description}
        </div>
      </div>
    </article>
  );
}

function DesktopSolutionCard({
  solution,
  top,
  left,
}: {
  solution: Solution;
  top: number;
  left: number;
}) {
  return (
    <div
      className="absolute overflow-hidden rounded-[0.87813vw] border-[0.05521vw] border-solid border-[#c0c0c0] bg-white"
      style={{
        top: `${top}vw`,
        left: `${left}vw`,
        width: `${CARD_WIDTH}vw`,
        height: `${CARD_HEIGHT}vw`,
      }}
    >
      <div
        className="absolute -left-[0.05511vw] -top-[0.05511vw] overflow-hidden rounded-[0.87813vw_0_0_0.87813vw]"
        style={{ width: `${IMAGE_WIDTH}vw`, height: `${CARD_HEIGHT}vw` }}
      >
        <Image
          src={solution.image}
          alt=""
          fill
          className="object-cover"
          sizes="17vw"
        />
      </div>
      <div
        className="absolute top-1/2 flex -translate-y-1/2 flex-col gap-[0.36667vw]"
        style={{ left: `${TEXT_LEFT}vw`, width: `${TEXT_WIDTH}vw` }}
      >
        <b className="font-[family-name:var(--font-manrope)] text-[0.82656vw] leading-[1.37222vw] text-black">
          {solution.title}
        </b>
        <div
          className="font-[family-name:var(--font-manrope)] text-[0.73475vw] leading-[1.05625vw] text-[#6e6e6e]"
          style={{ width: `${TEXT_WIDTH}vw` }}
        >
          {solution.description}
        </div>
      </div>
    </div>
  );
}

function SectionHeading() {
  return (
    <div className="flex flex-col gap-2.5">
      <h2 className="font-[family-name:var(--font-manrope)] text-[28px] font-bold leading-tight text-black sm:text-[36px] lg:text-[2.39583vw] lg:leading-normal">
        Our Solutions
      </h2>
      <p className="max-w-[654px] font-[family-name:var(--font-manrope)] text-xl font-semibold leading-snug text-black sm:text-2xl lg:max-w-[34.0625vw] lg:text-[1.45833vw] lg:leading-normal">
        Complete Automation Facility Solutions, Engineered End-to-End
      </p>
      <p className="max-w-[654px] font-[family-name:var(--font-manrope)] text-base leading-relaxed text-[#6e6e6e] lg:max-w-[34.0625vw] lg:text-[0.9375vw] lg:leading-normal">
        As a full-service, turnkey EPC automation facility construction company
        in South India, Mekark designs, fabricates, and builds precision
        manufacturing, assembly, and testing environments engineered around
        vibration control, ESD protection, and utility density.
      </p>
    </div>
  );
}

export default function OurSolutionsSection() {
  return (
    <section className="bg-[#f6f6f6] px-5 py-12 sm:px-10 sm:py-16 lg:px-[4.16667vw] lg:py-[5vw]">
      <div className="mx-auto max-w-[1920px]">
        <div className="flex flex-col gap-8 sm:gap-12 lg:flex-row lg:items-start lg:gap-[2.08333vw]">
          <aside className="lg:sticky lg:top-24 lg:w-[34.0625vw] lg:max-w-[42%] lg:shrink-0 lg:self-start">
            <SectionHeading />
          </aside>

          {/* Mobile / tablet — plain stacked cards */}
          <div className="flex flex-col gap-8 sm:gap-12 lg:hidden">
            {solutions.map((solution) => (
              <MobileSolutionCard key={solution.title} {...solution} />
            ))}
          </div>

          {/* Desktop — single SVG skeleton + absolutely positioned cards, like Pharma */}
          <div
            className="relative mx-auto hidden lg:block"
            style={{
              width: `${CANVAS_WIDTH}vw`,
              height: `${CANVAS_HEIGHT}vw`,
            }}
          >
            <Image
              src="/images/industries/automation/solutions/timeline.svg"
              alt=""
              width={397.4}
              height={1320.9}
              sizes="19vw"
              className="absolute left-0 top-[3.58177vw] h-[60.66354vw] w-[18.25313vw]"
            />
            {solutions.map((solution, index) => (
              <DesktopSolutionCard
                key={solution.title}
                solution={solution}
                top={DESKTOP_POSITIONS[index].top}
                left={DESKTOP_POSITIONS[index].left}
              />
            ))}
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-[1385px] rounded-[24px] border border-[rgba(228,0,21,0.5)] bg-[rgba(228,0,21,0.05)] px-5 py-5 text-center sm:mt-16 sm:rounded-[40px] sm:px-8 sm:py-8">
          <p className="font-[family-name:var(--font-manrope)] text-base font-semibold leading-relaxed text-[#4c4c4c] sm:text-lg sm:leading-normal">
            Every automation manufacturing facility is custom-engineered around
            your production line, equipment tolerances, and automation roadmap,
            ensuring precision output and long-term scalability for{" "}
            <span className="text-[#e50818]">
              Automation manufacturers across South India.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
