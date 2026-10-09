const IMG = "/images/about/life-at-mekark";

/** Figma collage frame bounds: 1296×633 within the 1920px artboard */
const COLLAGE_WIDTH = 1296;
const COLLAGE_HEIGHT = 633;
const ORIGIN_X = 320;
const ORIGIN_Y = 291;

type CollageItem = {
  src?: string;
  alt: string;
  x: number;
  y: number;
  w: number;
  h: number;
  rounded?: string;
  imgClassName?: string;
};

const COLLAGE: CollageItem[] = [
  {
    src: `${IMG}/collage-1.webp`,
    alt: "Team members creating a floral rangoli together",
    x: 320,
    y: 291,
    w: 369.94,
    h: 292.11,
    rounded: "rounded-tl-[15px]",
    imgClassName: "absolute top-[0.08%] left-[-7.28%] h-full w-[140.3%] max-w-none object-cover",
  },
  {
    src: `${IMG}/collage-2.webp`,
    alt: "Colleagues reviewing plans together",
    x: 696.94,
    y: 365,
    w: 297.72,
    h: 331.44,
    imgClassName: "absolute top-[0.07%] left-[-29.13%] h-full w-[148.43%] max-w-none object-cover",
  },
  {
    src: `${IMG}/collage-3.webp`,
    alt: "Team discussion at a workstation",
    x: 1001.66,
    y: 418,
    w: 152.47,
    h: 259.22,
    imgClassName: "absolute top-[-31.85%] left-[-31.34%] h-[185.06%] w-[141.49%] max-w-none object-cover",
  },
  {
    src: `${IMG}/collage-4.webp`,
    alt: "Mekark office decorated with red balloons for Diwali",
    x: 1161.13,
    y: 391,
    w: 191,
    h: 286.5,
  },
  {
    src: `${IMG}/collage-5.webp`,
    alt: "Team meeting in a bright office space",
    x: 1359,
    y: 291,
    w: 256.8,
    h: 214.27,
    rounded: "rounded-tr-[25px]",
    imgClassName: "absolute top-[-18.9%] left-[-80.47%] h-[137.27%] w-[254.68%] max-w-none object-cover",
  },
  {
    src: `${IMG}/collage-6.webp`,
    alt: "Employees working together on a project",
    x: 695.94,
    y: 704,
    w: 297.7,
    h: 197.41,
    imgClassName: "absolute top-[0.11%] left-[-27.49%] h-full w-[146.78%] max-w-none object-cover",
  },
  {
    src: `${IMG}/collage-7.webp`,
    alt: "Group of Mekark team members",
    x: 1001,
    y: 684,
    w: 351,
    h: 240,
  },
  {
    src: `${IMG}/collage-8.webp`,
    alt: "Mekark team members in traditional attire",
    x: 320,
    y: 590,
    w: 186,
    h: 286,
    rounded: "rounded-bl-[25px]",
    imgClassName: "absolute top-[-2.5%] left-[-15%] h-[105%] w-[130%] max-w-none object-cover",
  },
  {
    src: `${IMG}/collage-9.webp`,
    alt: "Team members creating a floral pookalam together",
    x: 512,
    y: 590,
    w: 177,
    h: 249,
    imgClassName: "absolute top-[-10%] left-[0%] h-[120%] w-[130%] max-w-none object-cover",
  },
  {
    src: `${IMG}/collage-10.webp`,
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
      {COLLAGE.map((item, index) => (
        <div
          key={`${item.alt}-${index}`}
          className={`absolute overflow-hidden bg-[#d7d7d7] ${item.rounded ?? ""}`}
          style={{
            left: pct(item.x - ORIGIN_X, COLLAGE_WIDTH),
            top: pct(item.y - ORIGIN_Y, COLLAGE_HEIGHT),
            width: pct(item.w, COLLAGE_WIDTH),
            height: pct(item.h, COLLAGE_HEIGHT),
          }}
        >
          {item.src && (
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet={item.src.replace(".webp", "-mobile.webp")}
              />
              <img
                src={item.src}
                alt={item.alt}
                draggable={false}
                decoding="async"
                loading={index < 2 ? "eager" : "lazy"}
                fetchPriority={index < 2 ? "high" : "auto"}
                className={item.imgClassName ?? "absolute inset-0 size-full object-cover"}
              />
            </picture>
          )}
        </div>
      ))}
    </div>
  );
}
