"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import AutoScroll from "embla-carousel-auto-scroll";
import { useCallback, useEffect, useRef, useSyncExternalStore } from "react";
import gsap from "gsap";
import type { EmblaCarouselType } from "embla-carousel";

const STATS = [
  "40,000 Tons Annual Capacity",
  "6 Lakh Sq.ft Facility",
  "18+ Years",
  "450+ Projects",
  "98% On-Time",
  "Zero-Compromise Quality",
] as const;

/** Duplicated for seamless infinite marquee on desktop */
const MARQUEE_STATS = [...STATS, ...STATS];

/**
 * Solid #c4161c from the left; smooth fade to transparent on the right.
 */
const RED_BAR_GRADIENT =
  "linear-gradient(90deg, #c4161c 0%, #c4161c 58%, rgba(196, 22, 28, 0.6) 72%, rgba(196, 22, 28, 0.28) 86%, rgba(196, 22, 28, 0) 100%)";

/** Matches red bar — stats fade out at the right edge */
const TRACK_FADE_MASK =
  "linear-gradient(to right, black 0%, black 58%, rgba(0,0,0,0.75) 72%, rgba(0,0,0,0.35) 86%, transparent 100%)";

/** From content left (paragraph align) to 78.21vw on the viewport */
const RED_BAR_WIDTH = "calc(78.21vw - (100vw - 100%) / 2)";

function StatItem({ label }: { label: string }) {
  return (
    <div data-stat className="flex shrink-0 items-center gap-2 sm:gap-2.5">
      <span className="size-1.5 shrink-0 rounded-full bg-black" />
      <span className="whitespace-nowrap text-xs font-medium leading-5 tracking-wide text-white sm:text-sm">
        {label}
      </span>
    </div>
  );
}

function RedBar({ barRef }: { barRef: React.RefObject<HTMLDivElement | null> }) {
  return (
    <div
      ref={barRef}
      className="pointer-events-none absolute left-0 top-1/2 h-6 w-full -translate-y-1/2 lg:w-[var(--stats-bar-width)]"
      style={{
        ["--stats-bar-width" as string]: RED_BAR_WIDTH,
        background: RED_BAR_GRADIENT,
      }}
      aria-hidden
    />
  );
}

/** Stats clip at fade end; red bar stays full length (not clipped) */
function StatsTrackShell({
  barRef,
  children,
}: {
  barRef: React.RefObject<HTMLDivElement | null>;
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-6 w-full overflow-visible">
      <RedBar barRef={barRef} />
      <div
        className="relative w-full overflow-hidden lg:w-[var(--stats-bar-width)]"
        style={{
          ["--stats-bar-width" as string]: RED_BAR_WIDTH,
          WebkitMaskImage: TRACK_FADE_MASK,
          maskImage: TRACK_FADE_MASK,
        }}
      >
        {children}
      </div>
    </div>
  );
}

function useEmblaSelectedIndex(emblaApi: EmblaCarouselType | undefined) {
  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      if (!emblaApi) return () => {};
      emblaApi.on("select", onStoreChange);
      emblaApi.on("reInit", onStoreChange);
      return () => {
        emblaApi.off("select", onStoreChange);
        emblaApi.off("reInit", onStoreChange);
      };
    },
    [emblaApi],
  );

  return useSyncExternalStore(
    subscribe,
    () => emblaApi?.selectedScrollSnap() ?? 0,
    () => 0,
  );
}

/** Mobile / tablet — swipeable autoplay carousel (left → right) */
function StatsCarouselMobile({
  barRef,
  trackRef,
}: {
  barRef: React.RefObject<HTMLDivElement | null>;
  trackRef: React.RefObject<HTMLDivElement | null>;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [
      Autoplay({
        delay: 2800,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  const selectedIndex = useEmblaSelectedIndex(emblaApi);

  return (
    <div className="lg:hidden">
      <StatsTrackShell barRef={barRef}>
        <div ref={emblaRef} className="relative h-6 overflow-hidden">
          <div ref={trackRef} className="flex h-full touch-pan-y items-center">
            {STATS.map((stat) => (
              <div
                key={stat}
                className="flex min-w-0 flex-[0_0_100%] items-center"
              >
                <StatItem label={stat} />
              </div>
            ))}
          </div>
        </div>
      </StatsTrackShell>

      <div
        className="mt-3 flex w-full gap-1.5 lg:w-[var(--stats-bar-width)]"
        style={{ ["--stats-bar-width" as string]: RED_BAR_WIDTH }}
        role="tablist"
        aria-label="Statistics carousel"
      >
        <div className="flex gap-0.5">
          {STATS.map((stat, index) => (
            <button
              key={stat}
              type="button"
              role="tab"
              aria-selected={index === selectedIndex}
              aria-label={`Go to stat: ${stat}`}
              onClick={() => emblaApi?.scrollTo(index)}
              className="flex size-11 items-center justify-center"
            >
              <span
                className={`size-1.5 rounded-full transition-colors ${
                  index === selectedIndex ? "bg-[#c4161c]" : "bg-white/35"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Desktop — continuous auto-scroll marquee (left → right) */
function StatsCarouselDesktop({
  barRef,
  trackRef,
}: {
  barRef: React.RefObject<HTMLDivElement | null>;
  trackRef: React.RefObject<HTMLDivElement | null>;
}) {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true },
    [
      AutoScroll({
        direction: "backward",
        speed: 0.85,
        startDelay: 800,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  return (
    <StatsTrackShell barRef={barRef}>
      <div ref={emblaRef} className="relative h-6 overflow-hidden">
        <div ref={trackRef} className="flex h-full touch-pan-y items-center">
          {MARQUEE_STATS.map((stat, index) => (
            <div
              key={`${stat}-${index}`}
              className="min-w-0 flex-[0_0_auto] pr-10"
            >
              <StatItem label={stat} />
            </div>
          ))}
        </div>
      </div>
    </StatsTrackShell>
  );
}

export function StatsBar() {
  const mobileBarRef = useRef<HTMLDivElement>(null);
  const desktopBarRef = useRef<HTMLDivElement>(null);
  const mobileTrackRef = useRef<HTMLDivElement>(null);
  const desktopTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bars = [mobileBarRef.current, desktopBarRef.current].filter(Boolean);
    const statEls = [
      ...(mobileTrackRef.current?.querySelectorAll("[data-stat]") ?? []),
      ...(desktopTrackRef.current?.querySelectorAll("[data-stat]") ?? []),
    ];

    if (!bars.length || !statEls.length) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.6 });

      bars.forEach((bar) => {
        tl.fromTo(
          bar,
          { scaleX: 0, transformOrigin: "left center" },
          { scaleX: 1, duration: 1.2, ease: "power3.out" },
          0,
        );
      });

      tl.fromTo(
        statEls,
        { opacity: 0, x: -16 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.06,
          ease: "power2.out",
        },
        "-=0.6",
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full overflow-visible pt-4 sm:pt-6">
      <div className="hidden lg:block">
        <StatsCarouselDesktop barRef={desktopBarRef} trackRef={desktopTrackRef} />
      </div>
      <div className="lg:hidden">
        <StatsCarouselMobile barRef={mobileBarRef} trackRef={mobileTrackRef} />
      </div>
    </div>
  );
}
