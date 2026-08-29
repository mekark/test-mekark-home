import Image from "next/image";
import { SectionBadge } from "./SectionBadge";

const photos = [
  {
    src: "/assets/careers/life/team-at-work.png",
    alt: "Engineer working on a laptop at a technical workstation",
    caption: "Site review — Pune automotive plant",
    className: "min-h-[220px] md:col-span-2 md:row-span-2 md:min-h-[551px] md:rounded-l-[23px]",
  },
  {
    src: "/assets/careers/life/engineering-team.png",
    alt: "Team member in the Chennai design studio",
    caption: "Chennai design studio",
    className: "min-h-[220px] md:min-h-[271px]",
  },
  {
    src: "/assets/careers/life/cold-storage.png",
    alt: "Industrial site with cranes during commissioning",
    caption: "Cold chain commissioning",
    className: "min-h-[220px] md:min-h-[271px] md:rounded-tr-[23px]",
  },
  {
    src: "/assets/careers/life/office.png",
    alt: "Mekark headquarters office interior",
    caption: "HQ — Anna Nagar, Chennai",
    className: "min-h-[220px] md:min-h-[271px]",
  },
  {
    src: "/assets/careers/life/team-celebration.png",
    alt: "Team collaborating around a table",
    caption: "Project handover — Hyderabad data centre",
    className: "min-h-[220px] md:min-h-[271px] md:rounded-br-[23px]",
  },
];

export function LifeAtMekarkSection() {
  return (
    <section className="bg-white px-5 py-12 md:px-20 md:py-[98px]">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:mb-[52px] md:flex-row md:items-end md:gap-6">
          <div className="flex flex-col items-start gap-[11px]">
            <SectionBadge label="life at mekark" />
            <h2 className="text-[28px] font-bold leading-[36px] tracking-[-1px] text-[#111111] sm:text-[36px] sm:leading-[53px]">
              Behind the Hardhat
            </h2>
          </div>
          <p className="max-w-[330px] text-[14px] leading-[23px] text-[#888888] md:text-right">
            From Chennai HQ to project sites across India — a look at who we are
            when the day is done.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-2 overflow-hidden rounded-[16px] sm:grid-cols-2 sm:rounded-[24px] md:grid-cols-4">
          {photos.map((photo) => (
            <figure
              key={photo.src}
              className={`group relative overflow-hidden ${photo.className}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(17,17,17,0.7)] to-transparent p-4 text-[12px] font-semibold tracking-[0.5px] text-white sm:p-5 md:opacity-0 md:transition-opacity md:group-hover:opacity-100">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
