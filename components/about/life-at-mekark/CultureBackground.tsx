"use client";

const IMG = "/images/about/life-at-mekark";

const LAYERS = [
  {
    src: `${IMG}/culture-bg-1.png`,
    className: "left-0 top-[14.24%] h-[45.01%] w-[27.57%] opacity-[0.17]",
  },
  {
    src: `${IMG}/culture-bg-2.png`,
    className: "left-[70.96%] top-[53.71%] h-[45.01%] w-[27.57%] opacity-[0.16]",
  },
  {
    src: `${IMG}/culture-bg-3.png`,
    className: "left-[9.56%] top-[66.07%] h-[33.93%] w-[20.78%] opacity-[0.17]",
  },
  {
    src: `${IMG}/culture-bg-4.png`,
    className: "left-[49.82%] top-[12.07%] h-[27.3%] w-[16.71%] opacity-[0.17]",
  },
  {
    src: `${IMG}/culture-bg-5.png`,
    className: "left-[79.22%] top-[14.94%] h-[33.93%] w-[20.78%] opacity-[0.17]",
  },
] as const;

export function CultureBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.36]"
      aria-hidden
    >
      <div className="relative mx-auto h-full max-w-[1694px]">
        {LAYERS.map((layer) => (
          <div
            key={layer.src}
            className={`absolute overflow-hidden bg-[#d9d9d9] ${layer.className}`}
          >
            <img
              src={layer.src}
              alt=""
              draggable={false}
              className="absolute inset-0 size-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
