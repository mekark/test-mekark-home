"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";
import { CollageGrid } from "@/components/about/life-at-mekark/CollageGrid";

const VIEWPORT = { once: true, margin: "-90px" as const };
const IMG = "/images/about/life-at-mekark";
const MEKARK_REEL_URL = "https://www.instagram.com/reel/DQBMJsgkYEG/";
const ZOHO_FOUNDER_REEL_URL =
  "https://www.instagram.com/reel/DcyW4mFRDPA/?stkn=MTVzZmZ4dnpla3hrMw%3D%3D";
const MEKARK_REEL_PREVIEW = `${IMG}/reel-1-preview.mp4`;
const PREVIEW_DURATION_SEC = 5;

function shouldPlayVideoPreview(): boolean {
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

const CULTURE_VALUES = [
  {
    title: "People First",
    copy: "Great work starts with great people. We create a supportive culture where everyone feels valued and empowered.",
    icon: `${IMG}/icon-people-first.svg`,
    borderColor: "border-[#dba014]",
  },
  {
    title: "Build & Learn",
    copy: "Every project is a chance to explore, experiment, and learn. We turn challenges into opportunities to grow and build better.",
    icon: `${IMG}/icon-build-learn.svg`,
    borderColor: "border-[#1475db]",
  },
  {
    title: "Own Your Impact",
    copy: "Take ownership, make bold decisions, and turn your ideas into action. At Mekark, every contribution has the power to make a difference.",
    icon: `${IMG}/icon-own-impact.svg`,
    borderColor: "border-[#2a9f1d]",
  },
  {
    title: "Celebrate Together",
    copy: "Every win matters at Mekark. We celebrate the little moments, big milestones, and everything we achieve together.",
    icon: `${IMG}/icon-celebrate.svg`,
    borderColor: "border-[#c31b7d]",
  },
] as const;

function SectionHeading({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex max-w-[850px] flex-col items-center gap-2.5 text-center">
      <h2 className="font-[family-name:var(--font-manrope)] text-[clamp(1.75rem,3.5vw,40px)] font-bold leading-[1.4] text-[#1a1a1a]">
        {title}
      </h2>
      <p className="font-[family-name:var(--font-manrope)] text-sm leading-normal text-[#191919] sm:text-[clamp(1rem,1.4vw,18px)]">
        {children}
      </p>
    </div>
  );
}

function VideoCard({
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

  const posterClassName = imgClassName
    ? `${imgClassName} transition-transform duration-700 group-hover:scale-[1.02]`
    : "absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-[1.02]";

  return (
    <motion.div variants={fadeUp} className="group relative overflow-hidden rounded-[25px] bg-[#d9d9d9]">
      <div className="relative aspect-[594/657] w-full">
        {imgClassName ? (
          <img
            src={src}
            alt={alt}
            draggable={false}
            className={posterClassName}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        )}

        {showVideo ? (
          <video
            ref={videoRef}
            src={previewSrc}
            muted
            playsInline
            preload="metadata"
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
            <span className="relative size-[min(22vw,120px)]">
              <Image src={`${IMG}/play-icon.svg`} alt="Play video" fill aria-hidden />
            </span>
          </a>
        ) : (
          <button type="button" aria-label={label} className={overlayClassName}>
            <span className="relative size-[min(22vw,120px)]">
              <Image src={`${IMG}/play-icon.svg`} alt="Play video" fill aria-hidden />
            </span>
          </button>
        )}
      </div>
    </motion.div>
  );
}

export function LifeAtMekarkPage() {
  return (
    <main className="overflow-hidden bg-white text-[#191919]">
      {/* Hero */}
      <section className="relative isolate pt-[60px]">
        <div className="mx-auto max-w-[850px] px-5 pb-8 pt-10 text-center sm:px-8 sm:pb-10 sm:pt-14 lg:px-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center gap-2.5"
          >
            <motion.h1
              variants={fadeUp}
              className="font-[family-name:var(--font-manrope)] text-[28px] font-bold leading-[1.4] text-[#1a1a1a] sm:text-[clamp(1.85rem,4vw,40px)]"
            >
              Life At Mekark
            </motion.h1>
            <motion.p variants={fadeUp} className="font-[family-name:var(--font-manrope)] text-sm leading-normal text-[#191919] sm:text-[clamp(1rem,1.4vw,18px)]">
              Behind every project, a team that believes in it.
              <br className="hidden sm:inline" />
              <span className="sm:ml-1">
                A glimpse into the people, moments, and everyday hustle that make
                Mekark what it is.
              </span>
            </motion.p>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mx-auto px-5 pb-8 sm:px-8 sm:pb-16 lg:px-10 lg:pb-24"
        >
          <CollageGrid />
        </motion.div>
      </section>

      {/* @Mekark */}
      <section className="bg-white px-5 pb-5 pt-8 sm:px-8 sm:pb-6 sm:pt-20 lg:px-10 lg:pb-8 lg:pt-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mx-auto max-w-[1280px]"
        >
          <motion.div variants={fadeUp} className="mb-10 sm:mb-14">
            <SectionHeading title="@Mekark">
              Follow our journey beyond the workplace, explore team moments,
              celebrations, milestones, and everyday life at Mekark across our
              social media channels.
            </SectionHeading>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            <VideoCard
              src={`${IMG}/video-1.webp`}
              alt="Mekark office entrance with illuminated logo"
              label="Play Mekark Instagram reel"
              href={MEKARK_REEL_URL}
              previewSrc={MEKARK_REEL_PREVIEW}
              imgClassName="absolute top-[-37.71%] left-[-0.08%] h-[160.73%] w-full max-w-none object-cover"
            />
            <VideoCard
              src={`${IMG}/video-2-zoho-founder.webp`}
              alt="Zoho co-founder speaking about the rise of Mekark"
              label="Watch the Zoho co-founder reel on Instagram"
              href={ZOHO_FOUNDER_REEL_URL}
              imgClassName="absolute left-0 top-0 h-[160.73%] w-full max-w-none object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Culture */}
      <section className="bg-white px-5 pb-16 pt-5 sm:px-8 sm:pb-20 sm:pt-6 lg:px-10 lg:pb-24 lg:pt-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mx-auto max-w-[1370px]"
        >
          <motion.div variants={fadeUp} className="mb-10 sm:mb-14">
            <SectionHeading title="What Makes Our Culture Special?">
              More than a workplace, Mekark is where people and ideas come
              together.
              <br className="hidden sm:inline" />
              We grow, create, and celebrate together.
            </SectionHeading>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:gap-[60px]">
            {CULTURE_VALUES.map((value) => (
              <motion.article
                key={value.title}
                variants={fadeUp}
                className={`flex flex-col gap-2.5 rounded-[25px] border-l-4 bg-[#f4f4f4] p-5 shadow-[-2px_2px_3px_rgba(30,30,30,0.15)] ${value.borderColor}`}
              >
                <div className="relative size-[50px] shrink-0 overflow-hidden">
                  <Image
                    src={value.icon}
                    alt={`${value.title} icon`}
                    fill
                    aria-hidden
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="font-[family-name:var(--font-manrope)] text-lg font-semibold text-[#3c3938]">
                    {value.title}
                  </h3>
                  <p className="font-[family-name:var(--font-manrope)] text-sm leading-normal text-[#555] sm:text-base">
                    {value.copy}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            className="mt-14 flex justify-center sm:mt-16 lg:mt-20"
          >
            <Link
              href="/resources/careers"
              className="group inline-flex items-center gap-2.5 rounded-[10px] bg-[#ed1c24] px-[50px] py-[15px] font-[family-name:var(--font-manrope)] text-[clamp(1.125rem,2vw,24px)] font-bold text-white shadow-[-2px_2px_3px_rgba(237,28,36,0.15)] transition-transform hover:-translate-y-0.5"
            >
              Work With Us
              <span className="relative size-5 shrink-0 overflow-hidden sm:translate-x-1 min-[1201px]:size-6 min-[1920px]:size-7">
                <Image
                  src={`${IMG}/arrow-icon.svg`}
                  alt="Arrow icon"
                  fill
                  aria-hidden
                  className="object-contain"
                />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
