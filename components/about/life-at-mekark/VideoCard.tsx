"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const IMG = "/images/about/life-at-mekark";
const PREVIEW_DURATION_SEC = 5;

function shouldPlayVideoPreview(): boolean {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return false;
  }
  // Skip the video on phones: it is a large download that competes with the page's critical resources.
  if (window.matchMedia("(max-width: 767px)").matches) return false;
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

export function VideoCard({
  src,
  alt,
  label,
  href,
  previewSrc,
  previewDuration = PREVIEW_DURATION_SEC,
  imgClassName,
}: {
  src: string;
  alt: string;
  label: string;
  href?: string;
  previewSrc?: string;
  previewDuration?: number;
  imgClassName?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [canPreview, setCanPreview] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [previewFailed, setPreviewFailed] = useState(false);

  useEffect(() => {
    setCanPreview(shouldPlayVideoPreview());
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !canPreview || !previewSrc || previewFailed) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => setPreviewFailed(true));
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [canPreview, previewSrc, previewFailed]);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || video.currentTime < previewDuration) return;
    video.currentTime = 0;
  };

  const showVideo = Boolean(canPreview && previewSrc && !previewFailed);
  const overlayClassName =
    "absolute inset-0 flex items-center justify-center bg-black/10 transition-colors hover:bg-black/20";

  const posterClassName = `${
    imgClassName ?? "absolute inset-0 size-full object-cover"
  } transition-transform duration-700 group-hover:scale-[1.02]`;

  const playIcon = (
    <span className="relative size-[min(22vw,120px)]">
      <Image src={`${IMG}/play-icon.svg`} alt="" fill aria-hidden unoptimized />
    </span>
  );

  return (
    <div className="group relative overflow-hidden rounded-[25px] bg-[#d9d9d9]">
      <div className="relative aspect-[594/657] w-full">
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet={src.replace(".webp", "-mobile.webp")}
          />
          <img
            src={src}
            alt={alt}
            draggable={false}
            loading="lazy"
            decoding="async"
            className={posterClassName}
          />
        </picture>

        {showVideo ? (
          <video
            ref={videoRef}
            src={previewSrc}
            muted
            playsInline
            preload="none"
            poster={src}
            aria-label={alt}
            onLoadedData={() => setIsVideoReady(true)}
            onError={() => setPreviewFailed(true)}
            onTimeUpdate={handleTimeUpdate}
            className={`absolute inset-0 size-full object-cover transition-opacity duration-500 group-hover:scale-[1.02] ${
              isVideoReady ? "opacity-100" : "opacity-0"
            }`}
          />
        ) : null}

        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={overlayClassName}
          >
            {playIcon}
          </a>
        ) : (
          <button type="button" aria-label={label} className={overlayClassName}>
            {playIcon}
          </button>
        )}
      </div>
    </div>
  );
}
