"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { HeroCopyBlock } from "@/components/hero/HeroCopyBlock";
import { HeroOverlayGradients } from "@/components/hero/HeroOverlayGradients";
import {
  HERO_VIDEOS,
  MOBILE_HERO_MEDIA_CLASS,
  MOBILE_VIDEO_LOAD_DELAY_MS,
} from "@/components/hero/hero-data";
import {
  releaseVideo,
  scheduleHeroVideoLoad,
  shouldPlayVideo,
} from "@/components/hero/hero-video-utils";

/** Mobile hero — poster-first LCP, delayed MP4 load, no Framer Motion. */
export function HeroMobileCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [canAutoplay, setCanAutoplay] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const prefetchRef = useRef<HTMLVideoElement | null>(null);
  const initialVideoLoadDoneRef = useRef(false);

  const activeVideo = HERO_VIDEOS[activeIndex];
  const showClientPoster = activeIndex !== 0;

  const goToNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % HERO_VIDEOS.length);
  }, []);

  useEffect(() => {
    setCanAutoplay(shouldPlayVideo());
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !canAutoplay) return;

    let cancelled = false;
    setIsReady(false);

    const beginLoad = () => {
      if (cancelled) return;
      video.preload = "auto";
      video.src = activeVideo.src;
      video.load();
      initialVideoLoadDoneRef.current = true;
    };

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

    let cancelSchedule: (() => void) | undefined;
    if (initialVideoLoadDoneRef.current) {
      beginLoad();
    } else {
      cancelSchedule = scheduleHeroVideoLoad(
        MOBILE_VIDEO_LOAD_DELAY_MS,
        beginLoad,
      );
    }

    return () => {
      cancelled = true;
      cancelSchedule?.();
      video.removeEventListener("canplay", onCanPlay);
      releaseVideo(video);
    };
  }, [activeIndex, activeVideo.src, canAutoplay]);

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

  useEffect(() => {
    if (canAutoplay) return;
    const id = window.setInterval(goToNext, 7000);
    return () => window.clearInterval(id);
  }, [canAutoplay, goToNext]);

  return (
    <div className="absolute inset-0 xl:hidden">
      {showClientPoster ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={activeVideo.poster}
          src={activeVideo.poster}
          alt={`${activeVideo.title} — Mekark industrial construction showcase`}
          className={`${MOBILE_HERO_MEDIA_CLASS} z-[1]`}
          loading="lazy"
          decoding="async"
          fetchPriority="low"
        />
      ) : null}

      {canAutoplay ? (
        <video
          ref={videoRef}
          className={`${MOBILE_HERO_MEDIA_CLASS} z-[2] transition-opacity duration-500 ${
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

      <HeroOverlayGradients />
      <HeroCopyBlock
        activeIndex={activeIndex}
        onSelectIndex={setActiveIndex}
      />
    </div>
  );
}
