"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const HERO_VIDEOS = [
  {
    src: "/images/hero/PEB-2.mp4",
    poster: "/images/hero/peb-poster.png",
    title: "PEB Construction",
    subtitle: "Pre-engineered building systems",
  },
  {
    src: "/images/hero/Civil.mp4",
    poster: "/images/hero/video-2.jpg",
    title: "Civil Construction",
    subtitle: "Foundations to finished infrastructure",
  },
  {
    src: "/images/hero/Multi storey.mp4",
    poster: "/images/hero/video-3.jpg",
    title: "Multi-Storey Construction",
    subtitle: "Vertical steel structures at scale",
  },
] as const;

function shouldPlayVideo(): boolean {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return false;
  }
  const connection = (
    navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    }
  ).connection;
  if (connection?.saveData) return false;
  if (
    connection?.effectiveType === "slow-2g" ||
    connection?.effectiveType === "2g"
  ) {
    return false;
  }
  return true;
}

function releaseVideo(video: HTMLVideoElement | null) {
  if (!video) return;
  video.pause();
  video.removeAttribute("src");
  video.load();
}

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [canAutoplay, setCanAutoplay] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const prefetchRef = useRef<HTMLVideoElement | null>(null);

  const activeVideo = HERO_VIDEOS[activeIndex];
  const indexLabel = String(activeIndex + 1).padStart(2, "0");
  const totalLabel = String(HERO_VIDEOS.length).padStart(2, "0");

  const goToNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % HERO_VIDEOS.length);
  }, []);

  useEffect(() => {
    setCanAutoplay(shouldPlayVideo());
  }, []);

  // Load + play only the active clip; free the previous buffer.
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !canAutoplay) return;

    let cancelled = false;
    setIsReady(false);

    video.preload = "auto";
    video.src = activeVideo.src;
    video.load();

    const onCanPlay = () => {
      if (cancelled) return;
      setIsReady(true);
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay can be blocked; poster remains visible.
        });
      }
    };

    video.addEventListener("canplay", onCanPlay, { once: true });

    return () => {
      cancelled = true;
      video.removeEventListener("canplay", onCanPlay);
      releaseVideo(video);
    };
  }, [activeIndex, activeVideo.src, canAutoplay]);

  // Warm the next clip only when the current one is nearly finished.
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !canAutoplay || !isReady) return;

    const prefetchNext = () => {
      if (!video.duration || video.duration - video.currentTime > 2.5) return;
      if (prefetchRef.current) return;

      const next = HERO_VIDEOS[(activeIndex + 1) % HERO_VIDEOS.length];
      const el = document.createElement("video");
      el.preload = "auto";
      el.muted = true;
      el.playsInline = true;
      el.src = next.src;
      prefetchRef.current = el;
    };

    video.addEventListener("timeupdate", prefetchNext);
    return () => {
      video.removeEventListener("timeupdate", prefetchNext);
      releaseVideo(prefetchRef.current);
      prefetchRef.current = null;
    };
  }, [activeIndex, canAutoplay, isReady]);

  // Poster-only mode still advances so the hero doesn't feel stuck.
  useEffect(() => {
    if (canAutoplay) return;
    const id = window.setInterval(goToNext, 7000);
    return () => window.clearInterval(id);
  }, [canAutoplay, goToNext]);

  return (
    <section
      className="relative h-[100dvh] min-h-[520px] max-h-[1020px] w-full overflow-hidden bg-black"
      aria-label="Hero video showcase"
    >
      {/* Poster always underneath so the hero never looks stuck/blank while buffering */}
      <img
        key={activeVideo.poster}
        src={activeVideo.poster}
        alt=""
        className="absolute inset-0 size-full object-cover"
        aria-hidden
        fetchPriority="high"
        decoding="async"
      />

      {canAutoplay ? (
        <video
          ref={videoRef}
          className={`absolute inset-0 size-full object-cover transition-opacity duration-500 ${
            isReady ? "opacity-100" : "opacity-0"
          }`}
          muted
          playsInline
          preload="none"
          poster={activeVideo.poster}
          onEnded={goToNext}
          aria-label={activeVideo.title}
        />
      ) : null}

      {/* Soft top vignette — keeps navbar readable over bright video frames */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-36 bg-gradient-to-b from-black/55 via-black/20 to-transparent sm:h-44"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-black/80 via-black/35 to-transparent"
        aria-hidden
      />

      <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-7 sm:px-8 sm:pb-9 lg:px-12 lg:pb-10 xl:px-16 xl:pb-14">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeVideo.src}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex max-w-xl flex-col gap-2.5 sm:gap-3.5"
          >
            <p className="font-[family-name:var(--font-manrope)] text-[11px] font-medium tracking-[0.28em] text-white/55 uppercase sm:text-xs">
              {indexLabel}
              <span className="mx-2 text-mekark-red">/</span>
              {totalLabel}
            </p>

            <div className="flex items-start gap-3 sm:gap-4">
              <span
                className="mt-2 hidden h-9 w-px shrink-0 bg-mekark-red sm:mt-2.5 sm:block sm:h-11 xl:mt-3 xl:h-12"
                aria-hidden
              />
              <div>
                <h2 className="font-[family-name:var(--font-manrope)] text-[clamp(1.75rem,calc(0.5rem+3.2vw),2.75rem)] leading-[1.1] font-semibold tracking-[-0.02em] text-mekark-white">
                  {activeVideo.title}
                </h2>
                <p className="mt-2 max-w-md font-[family-name:var(--font-manrope)] text-sm leading-relaxed text-white/65 sm:mt-2.5 sm:text-[15px] xl:mt-3 xl:text-base">
                  {activeVideo.subtitle}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div
          className="mt-5 flex items-center gap-2 sm:mt-6 xl:mt-8"
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
                onClick={() => setActiveIndex(index)}
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
    </section>
  );
}
