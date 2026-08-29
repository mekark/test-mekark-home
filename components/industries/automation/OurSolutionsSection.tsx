import Image from "next/image";
import type { ReactNode } from "react";

const CARD_HEIGHT = 193;
const CARD_GAP = 66;
const CARD_WIDTH = 740;
const CARD_OFFSET = 211;
const TIMELINE_X = 9;
const CARD_INDENT = 73;
const CARDS_COLUMN_WIDTH = CARD_WIDTH + CARD_OFFSET;
const SECTION_TRACK_WIDTH = CARD_INDENT + CARDS_COLUMN_WIDTH;
const LINE_START = TIMELINE_X + 9;
const SHORT_LINE_WIDTH = 75 - TIMELINE_X;
const LONG_LINE_WIDTH = CARD_INDENT + CARD_OFFSET - LINE_START;

type Solution = {
  title: string;
  description: ReactNode;
  image: string;
  imageWidth: number;
  offset: boolean;
};

const solutions: Solution[] = [
  {
    title: "Turnkey Automation Plant Construction:",
    description:
      "Full-scope design, civil works, structural steel, and MEP delivered under one contract for automation and robotics manufacturing units.",
    image: "/images/industries/automation/solutions/turnkey-automation.png",
    imageWidth: 339,
    offset: false,
  },
  {
    title: "ESD-Controlled & Precision Flooring Systems:",
    description: (
      <>
        Static-dissipative epoxy flooring, vibration-
        <br />
        isolated slabs, and clean-process interiors engineered for robotics, PCB,
        and control panel
        <br />
        assembly lines.
      </>
    ),
    image: "/images/industries/automation/solutions/esd-flooring.png",
    imageWidth: 323,
    offset: true,
  },
  {
    title: "Smart Factory & Industry 4.0 Infrastructure:",
    description:
      "Structured cabling, IoT-ready conduit layouts, and automation-integrated building systems designed for connected manufacturing.",
    image: "/images/industries/automation/solutions/smart-factory.png",
    imageWidth: 336,
    offset: false,
  },
  {
    title: "HVAC & Precision Air Handling Systems:",
    description:
      "Temperature and particulate control engineered specifically for automation testing labs, robotics assembly, and electronics-adjacent production.",
    image: "/images/industries/automation/solutions/hvac.png",
    imageWidth: 323,
    offset: true,
  },
  {
    title: "MEP & High-Density Utility Infrastructure:",
    description:
      "Electrical, mechanical, plumbing, and compressed air systems sized for robotics, CNC, and automated production line loads.",
    image: "/images/industries/automation/solutions/mep-infrastructure.png",
    imageWidth: 323,
    offset: false,
  },
  {
    title: "EOT Crane & Material Handling Systems:",
    description:
      "Overhead crane, conveyor, and AGV-ready internal logistics infrastructure for heavy automation equipment handling.",
    image: "/images/industries/automation/solutions/eot-crane.png",
    imageWidth: 323,
    offset: true,
  },
];

function getCardLeft(offset: boolean) {
  return offset ? CARD_INDENT + CARD_OFFSET : CARD_INDENT;
}

function TimelineConnector({ offset }: { offset: boolean }) {
  return (
    <div
      className="pointer-events-none absolute inset-0 hidden lg:block"
      aria-hidden
    >
      <div
        className="absolute top-1/2 size-[18px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[3.585px] border-[#e40015] bg-[#ebebeb]"
        style={{ left: `${TIMELINE_X}px` }}
      />
      <div
        className="absolute top-1/2 h-px -translate-y-1/2 bg-black"
        style={{
          left: `${LINE_START}px`,
          width: offset ? `${LONG_LINE_WIDTH}px` : `${SHORT_LINE_WIDTH}px`,
        }}
      />
    </div>
  );
}

function SolutionCard({
  title,
  description,
  image,
  imageWidth,
}: Omit<Solution, "offset">) {
  return (
    <article className="flex h-[193px] w-full overflow-hidden rounded-[20px] border-[1.2px] border-solid border-[#c0c0c0] bg-white lg:w-[740px]">
      <div
        className="relative h-[193px] shrink-0"
        style={{ width: `${imageWidth}px` }}
      >
        <Image src={image} alt="" fill className="object-cover" sizes={`${imageWidth}px`} />
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-2 pl-[31px] pr-6">
        <h3 className="max-w-[370px] font-[family-name:var(--font-manrope)] text-lg font-semibold leading-normal text-black">
          {title}
        </h3>
        <div className="max-w-[368px] font-[family-name:var(--font-manrope)] text-base leading-normal text-[#6e6e6e]">
          {description}
        </div>
      </div>
    </article>
  );
}

function SectionHeading() {
  return (
    <div className="flex flex-col gap-2.5">
      <h2 className="font-[family-name:var(--font-manrope)] text-[46px] font-bold leading-normal text-black">
        Our Solutions
      </h2>
      <p className="max-w-[654px] font-[family-name:var(--font-manrope)] text-[28px] font-semibold leading-normal text-black">
        Complete Automation Facility Solutions, Engineered End-to-End
      </p>
      <p className="max-w-[654px] font-[family-name:var(--font-manrope)] text-lg leading-normal text-[#6e6e6e]">
        As a full-service, turnkey EPC automation facility construction company
        in South India, Mekark designs, fabricates, and builds precision
        manufacturing, assembly, and testing environments engineered around
        vibration control, ESD protection, and utility density.
      </p>
    </div>
  );
}

export default function OurSolutionsSection() {
  const spineTop = CARD_HEIGHT / 2;
  const spineHeight =
    solutions.length * CARD_HEIGHT + (solutions.length - 1) * CARD_GAP - CARD_HEIGHT;

  return (
    <section className="bg-[#f6f6f6] px-6 py-16 sm:px-10 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-10">
          <aside className="lg:sticky lg:top-24 lg:w-[654px] lg:max-w-[42%] lg:shrink-0 lg:self-start">
            <SectionHeading />
          </aside>

          <div className="relative min-w-0 flex-1 lg:min-w-[740px]">
            <div
              className="relative w-full"
              style={{ maxWidth: `${SECTION_TRACK_WIDTH}px` }}
            >
              <div
                className="pointer-events-none absolute left-0 hidden lg:block"
                aria-hidden
                style={{
                  top: `${spineTop}px`,
                  height: `${spineHeight}px`,
                  width: `${CARD_INDENT}px`,
                }}
              >
                <div
                  className="absolute top-0 w-px bg-black"
                  style={{
                    left: `${TIMELINE_X}px`,
                    height: `${spineHeight}px`,
                  }}
                />
              </div>

              <div
                className="relative flex flex-col"
                style={{ gap: `${CARD_GAP}px` }}
              >
                {solutions.map((solution) => {
                  const cardLeft = getCardLeft(solution.offset);

                  return (
                    <div key={solution.title} className="relative lg:h-[193px]">
                      <TimelineConnector offset={solution.offset} />
                      <div
                        className="relative lg:absolute lg:top-0 lg:h-[193px] lg:left-[var(--card-left)]"
                        style={
                          {
                            "--card-left": `${cardLeft}px`,
                          } as React.CSSProperties
                        }
                      >
                        <SolutionCard
                          title={solution.title}
                          description={solution.description}
                          image={solution.image}
                          imageWidth={solution.imageWidth}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-[1385px] rounded-[40px] border border-[rgba(228,0,21,0.5)] bg-[rgba(228,0,21,0.05)] px-6 py-6 text-center sm:px-8 sm:py-8">
          <p className="font-[family-name:var(--font-manrope)] text-lg font-semibold leading-normal text-[#4c4c4c]">
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
