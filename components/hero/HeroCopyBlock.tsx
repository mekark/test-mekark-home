import { HERO_VIDEOS } from "@/components/hero/hero-data";
import { SECTION_CONTAINER_CLASS } from "@/lib/sectionLayout";

type HeroCopyContentProps = {
  activeIndex: number;
  onSelectIndex: (index: number) => void;
};

export function HeroCopyContent({
  activeIndex,
  onSelectIndex,
}: HeroCopyContentProps) {
  const activeVideo = HERO_VIDEOS[activeIndex];

  return (
    <div className={SECTION_CONTAINER_CLASS}>
      <div className="flex max-w-xl flex-col gap-1.5 max-xl:gap-1 sm:gap-3.5">
        <div className="flex items-start gap-3 sm:gap-4">
          <span
            className="mt-2 hidden h-9 w-px shrink-0 bg-mekark-red xl:mt-3 xl:block xl:h-12"
            aria-hidden
          />
          <div className="min-w-0">
            <h1 className="font-[family-name:var(--font-manrope)] text-[clamp(1.125rem,calc(0.2rem+3.5vw),1.375rem)] leading-[1.12] font-semibold tracking-[-0.02em] text-mekark-white sm:text-[clamp(1.375rem,calc(0.35rem+4.8vw),2.75rem)] sm:leading-[1.1]">
              {activeVideo.title}
            </h1>
            <p className="mt-1 max-w-md font-[family-name:var(--font-manrope)] text-[10px] leading-snug text-white/65 max-xl:line-clamp-2 sm:mt-2.5 sm:text-[15px] sm:leading-relaxed xl:mt-3 xl:text-base">
              {activeVideo.subtitle}
            </p>
          </div>
        </div>
      </div>

      <div
        className="mt-2.5 flex items-center gap-2 sm:mt-6 xl:mt-8"
        role="tablist"
        aria-label="Hero videos"
      >
        {HERO_VIDEOS.map((video, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={video.src}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={video.title}
              onClick={() => onSelectIndex(index)}
              className={`h-1 rounded-full transition-all duration-500 ease-out ${
                isActive
                  ? "w-10 bg-mekark-red sm:w-12"
                  : "w-4 bg-white/35 hover:bg-white/55 sm:w-5"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}

export function HeroCopyBlock(props: HeroCopyContentProps) {
  return (
    <div className="absolute inset-x-0 bottom-0 z-10 max-xl:pb-3 xl:pb-14 lg:pb-10">
      <HeroCopyContent {...props} />
    </div>
  );
}
