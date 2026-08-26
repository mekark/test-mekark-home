"use client";

import Image from "next/image";

const IMG = "/images/about/life-at-mekark";

/** Figma collage frame bounds: 1296×633 within the 1920px artboard */
const COLLAGE_WIDTH = 1296;
const COLLAGE_HEIGHT = 633;
const ORIGIN_X = 320;
const ORIGIN_Y = 291;

type CollageItem = {
  src: string;
  alt: string;
  x: number;
  y: number;
  w: number;
  h: number;
  rounded?: string;
  crop?: "figma-8";
};

const COLLAGE: CollageItem[] = [
  {
    src: `${IMG}/collage-1.png`,
    alt: "Team members collaborating in a modern office",
    x: 320,
    y: 291,
    w: 369.94,
    h: 292.11,
    rounded: "rounded-tl-[15px]",
  },
  {
    src: `${IMG}/collage-2.png`,
    alt: "Colleagues reviewing plans together",
    x: 696.94,
    y: 365,
    w: 297.72,
    h: 331.44,
  },
  {
    src: `${IMG}/collage-3.png`,
    alt: "Team discussion at a workstation",
    x: 1001.66,
    y: 418,
    w: 152.47,
    h: 259.22,
  },
  {
    src: `${IMG}/collage-4.png`,
    alt: "Office workspace with team members",
    x: 1161.13,
    y: 391,
    w: 191,
    h: 286.5,
  },
  {
    src: `${IMG}/collage-5.png`,
    alt: "Team meeting in a bright office space",
    x: 1359,
    y: 291,
    w: 256.8,
    h: 214.27,
    rounded: "rounded-tr-[25px]",
  },
  {
    src: `${IMG}/collage-6.png`,
    alt: "Employees working together on a project",
    x: 695.94,
    y: 704,
    w: 297.7,
    h: 197.41,
  },
  {
    src: `${IMG}/collage-7.png`,
    alt: "Group of Mekark team members",
    x: 1001,
    y: 684,
    w: 351,
    h: 240,
  },
  {
    src: `${IMG}/collage-8.png`,
    alt: "Team members in a collaborative session",
    x: 320,
    y: 590,
    w: 186,
    h: 286,
    rounded: "rounded-bl-[25px]",
    crop: "figma-8",
  },
  {
    src: `${IMG}/collage-9.png`,
    alt: "Colleagues sharing ideas at work",
    x: 512,
    y: 590,
    w: 177,
    h: 249,
  },
  {
    src: `${IMG}/collage-10.png`,
    alt: "Mekark team celebrating a milestone",
    x: 1359,
    y: 512.27,
    w: 256.8,
    h: 363.55,
    rounded: "rounded-br-[25px]",
  },
];

function pct(value: number, total: number) {
  return `${(value / total) * 100}%`;
}

export function CollageGrid() {
  return (
    <div
      className="relative mx-auto w-full max-w-[1296px]"
      style={{ aspectRatio: `${COLLAGE_WIDTH} / ${COLLAGE_HEIGHT}` }}
    >
      {COLLAGE.map((item) => (
        <div
          key={item.src}
          className={`absolute overflow-hidden bg-[#d7d7d7] ${item.rounded ?? ""}`}
          style={{
            left: pct(item.x - ORIGIN_X, COLLAGE_WIDTH),
            top: pct(item.y - ORIGIN_Y, COLLAGE_HEIGHT),
            width: pct(item.w, COLLAGE_WIDTH),
            height: pct(item.h, COLLAGE_HEIGHT),
          }}
        >
          {item.crop === "figma-8" ? (
            <img
              src={item.src}
              alt={item.alt}
              draggable={false}
              className="absolute top-[-0.15%] left-[-130.7%] h-full w-[230.44%] max-w-none object-cover"
            />
          ) : (
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 30vw"
            />
          )}
        </div>
      ))}
    </div>
  );
}
