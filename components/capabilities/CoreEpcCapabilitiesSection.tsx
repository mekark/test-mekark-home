"use client";

import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import {
  motion,
  type Variants,
} from "framer-motion";
import {
  epcCapBodyFade,
  epcCapBottomBar,
  epcCapCardFromLeft,
  epcCapCardFromRight,
  epcCapConnectorDot,
  epcCapConnectorPulse,
  epcCapContentCascade,
  epcCapEpcStamp,
  epcCapFeatured3D,
  epcCapFrameEdgeH,
  epcCapFrameEdgeV,
  epcCapHeadlineGroup,
  epcCapHeadlineWipe,
  epcCapHexSpin,
  epcCapIconFlip,
  epcCapLaserLine,
  epcCapNotchSlide,
  epcCapNumberSlam,
  epcCapPillExpand,
  epcCapRowStagger,
  epcCapRuleSweep,
  epcCapScanLine,
  epcCapTitleUnfold,
} from "@/lib/motion-variants";

const VIEWPORT = { once: true, margin: "-80px" as const };

const ICON_CIRCLE_BG =
  "radial-gradient(95.52% 95.52% at 35% 30%, #fff, #f4f4f4)";

const CARD_SHADOW =
  "0px 2px 4px 0px rgba(15,15,20,0.02), 0px 12px 28px 0px rgba(15,15,20,0.04)";

const CARD_HOVER_GLOW =
  "0px 2px 4px 0px rgba(15,15,20,0.02), 0px 20px 40px 0px rgba(237,28,36,0.12), 0px 12px 28px 0px rgba(15,15,20,0.06)";

const cardStyle = { boxShadow: CARD_SHADOW } as CSSProperties;

const HORIZONTAL_CARDS = [
  {
    number: "02",
    title: ["Structural Engineering", "& Analysis"],
    description: [
      "Advanced STAAD.Pro and Tekla-driven modelling for precision load analysis and clash-free execution.",
    ],
    icon: "/images/capabilities/icon-02-structural.svg",
    iconSize: { width: 75, height: 50 },
  },
  {
    number: "03",
    title: ["Pre-Engineered", "Buildings"],
    description: [
      "Custom-engineered PEB structures",
      "designed for speed, structural strength, and long-term scalability.",
    ],
    icon: "/images/capabilities/icon-03-peb.svg",
    iconSize: { width: 55, height: 55 },
  },
] as const;

const COMPACT_CARDS = [
  {
    number: "04",
    title: ["Heavy Steel", "Fabrication"],
    description: [
      "40,000 tons annual production",
      "capacity through CNC automated, precision controlled",
      "fabrication systems.",
    ],
    icon: "/images/capabilities/icon-04-fabrication.svg",
    accentWidth: "w-[19px]",
  },
  {
    number: "05",
    title: ["Turnkey EPC", "Execution"],
    description: [
      "End-to-end project ownership",
      "from design and procurement",
      "through fabrication and site",
      "commissioning.",
    ],
    icon: "/images/capabilities/icon-05-turnkey.svg",
    accentWidth: "w-[19px]",
  },
  {
    number: "06",
    title: ["Project Delivery", "Management"],
    description: [
      "Single-point accountability with",
      "dedicated project managers",
      "ensuring timeline and quality",
      "certainty.",
    ],
    icon: "/images/capabilities/icon-06-delivery.svg",
    accentWidth: "w-7",
  },
] as const;

function cardEnterVariant(index: number): Variants {
  return index % 2 === 0 ? epcCapCardFromLeft : epcCapCardFromRight;
}

function CardFrameDraw() {
  return (
    <>
      <motion.span
        variants={epcCapFrameEdgeH}
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px origin-left bg-[#ed1c24]/50"
        aria-hidden
      />
      <motion.span
        variants={epcCapFrameEdgeH}
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-px origin-right bg-[#ed1c24]/50"
        aria-hidden
      />
      <motion.span
        variants={epcCapFrameEdgeV}
        className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-px origin-top bg-[#ed1c24]/50"
        aria-hidden
      />
      <motion.span
        variants={epcCapFrameEdgeV}
        className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-px origin-bottom bg-[#ed1c24]/50"
        aria-hidden
      />
    </>
  );
}

function IconCircle({
  src,
  alt,
  size = "md",
  iconWidth,
  iconHeight,
  className,
}: {
  src: string;
  alt: string;
  size?: "md" | "lg" | "compact";
  iconWidth?: number;
  iconHeight?: number;
  className?: string;
}) {
  const dimension =
    size === "lg"
      ? "size-[103px] rounded-[132px]"
      : size === "compact"
        ? "size-[67px] rounded-[32px]"
        : "size-[67px] rounded-[43px]";

  return (
    <motion.div
      variants={epcCapIconFlip}
      style={{ background: ICON_CIRCLE_BG, transformStyle: "preserve-3d" }}
      className={`relative flex shrink-0 items-center justify-center border border-[#f0f0f2] ${dimension} ${className ?? ""}`}
      whileHover={{ scale: 1.08, rotateY: 12 }}
      transition={{ type: "spring", stiffness: 340, damping: 16 }}
    >
      <Image
        src={src}
        alt={alt}
        width={iconWidth ?? 40}
        height={iconHeight ?? 40}
        className="relative z-[1]"
      />
    </motion.div>
  );
}

function RedAccentBar({ className }: { className?: string }) {
  return (
    <motion.span
      variants={epcCapLaserLine}
      className={`block h-[2.5px] origin-left rounded-[2px] bg-[#ed1c24] ${className ?? "w-7"}`}
      aria-hidden
    />
  );
}

function CardBottomAccent({ className }: { className?: string }) {
  return (
    <motion.span
      variants={epcCapBottomBar}
      className={`absolute inset-x-0 bottom-0 origin-center rounded-[2px] bg-[#ed1c24] ${className ?? "h-[3px]"}`}
      aria-hidden
    />
  );
}

function CapabilityCardShell({
  children,
  variants,
  index,
  className,
  style,
}: {
  children: ReactNode;
  variants: Variants;
  index: number;
  className: string;
  style?: CSSProperties;
}) {
  return (
    <motion.article
      variants={variants}
      style={{ ...style, transformStyle: "preserve-3d", perspective: 1400 }}
      whileHover={{
        y: -10,
        rotateX: 3,
        rotateY: index % 2 === 0 ? -5 : 5,
        boxShadow: CARD_HOVER_GLOW,
        transition: { type: "spring", stiffness: 320, damping: 22 },
      }}
      className={className}
    >
      {children}
    </motion.article>
  );
}

function FeaturedCard() {
  return (
    <motion.article
      variants={epcCapFeatured3D}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      style={{ ...cardStyle, transformStyle: "preserve-3d", perspective: 1400 }}
      whileHover={{
        y: -10,
        rotateX: 3,
        rotateY: -5,
        boxShadow: CARD_HOVER_GLOW,
        transition: { type: "spring", stiffness: 320, damping: 22 },
      }}
      className="relative flex h-full flex-col overflow-hidden rounded-[18px] bg-[#181818] lg:w-[423px] lg:shrink-0"
    >
      <CardFrameDraw />

      <div className="relative aspect-[3/2] w-full shrink-0 overflow-hidden rounded-t-[18px]">
        <Image
          src="/images/capabilities/master-planning-bg.png"
          alt="Industrial master planning facility model"
          fill
          className="object-contain object-center"
          sizes="(max-width: 1024px) 100vw, 423px"
        />
        <motion.span
          variants={epcCapNotchSlide}
          className="pointer-events-none absolute right-0 top-0 z-[2] size-14 rounded-tr-[18px]"
          style={{
            backgroundImage:
              "linear-gradient(225deg, rgb(237, 32, 36) 0%, rgb(237, 32, 36) 50%, rgba(237, 32, 36, 0) 50%)",
          }}
          aria-hidden
        />
      </div>

      <motion.div
        variants={epcCapContentCascade}
        className="flex flex-1 flex-col gap-2.5 px-[30px] pb-8 pt-[26px]"
      >
        <motion.div className="flex items-center gap-[18px]">
          <IconCircle
            src="/images/capabilities/icon-01-master-planning.svg"
            alt="Industrial master planning"
          />
          <motion.span
            variants={epcCapNumberSlam}
            className="text-lg font-extrabold tracking-[-0.18px] text-[#ed1c24]"
          >
            01
          </motion.span>
        </motion.div>

        <motion.h3
          variants={epcCapTitleUnfold}
          className="pt-0.5 text-[22px] font-bold leading-[28.8px] tracking-[-0.48px] text-white"
        >
          Industrial Master Planning
        </motion.h3>

        <RedAccentBar className="h-[2.5px] w-8" />

        <motion.div
          variants={epcCapBodyFade}
          className="pt-2 text-sm leading-[22px] text-[#b6b6b7]"
        >
          <p>Strategic site optimisation and logistical flow design</p>
          <p>for high-performance industrial environments.</p>
        </motion.div>
      </motion.div>

      <CardBottomAccent className="h-[6px]" />
    </motion.article>
  );
}

function HorizontalCard({
  card,
  index,
}: {
  card: (typeof HORIZONTAL_CARDS)[number];
  index: number;
}) {
  return (
    <CapabilityCardShell
      variants={cardEnterVariant(index)}
      index={index}
      className="relative min-h-[226px] h-auto flex-1 overflow-visible rounded-[18px] bg-[#181818] lg:h-full lg:min-h-0 lg:overflow-hidden"
      style={cardStyle}
    >
      <motion.div
        variants={epcCapContentCascade}
        className="flex h-full gap-5 px-7 py-7"
      >
        <IconCircle
          src={card.icon}
          alt={card.title.join(" ")}
          size="lg"
          iconWidth={card.iconSize.width}
          iconHeight={card.iconSize.height}
          className="!size-[72px] !rounded-[96px] lg:!size-[103px] lg:!rounded-[132px]"
        />

        <motion.div
          variants={epcCapContentCascade}
          className="flex min-w-0 flex-1 flex-col gap-2.5"
        >
          <motion.span
            variants={epcCapNumberSlam}
            className="text-lg font-extrabold tracking-[-0.18px] text-[#ed1c24]"
          >
            {card.number}
          </motion.span>

          <motion.h3
            variants={epcCapTitleUnfold}
            className="text-lg font-bold leading-6 tracking-[-0.3px] text-white"
          >
            {card.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </motion.h3>

          <RedAccentBar className="w-7" />

          <motion.div
            variants={epcCapBodyFade}
            className="pt-1 text-xs leading-[19px] text-[#b6b6b7]"
          >
            {card.description.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      <CardBottomAccent />
    </CapabilityCardShell>
  );
}

function CompactCard({
  card,
  index,
}: {
  card: (typeof COMPACT_CARDS)[number];
  index: number;
}) {
  return (
    <CapabilityCardShell
      variants={cardEnterVariant(index)}
      index={index}
      className="relative min-h-[249px] h-auto flex-1 overflow-visible rounded-[18px] bg-[#181818] lg:h-full lg:min-h-0 lg:overflow-hidden"
      style={cardStyle}
    >
      <motion.div
        variants={epcCapContentCascade}
        className="flex flex-col gap-3 p-6 sm:p-7 lg:absolute lg:inset-0 lg:block lg:p-0"
      >
        <div className="flex items-start gap-4 lg:contents">
          <IconCircle
            src={card.icon}
            alt={card.title.join(" ")}
            size="compact"
            className="lg:absolute lg:left-6 lg:top-[46px]"
          />

          <motion.span
            variants={epcCapNumberSlam}
            className="pt-1 text-lg font-extrabold tracking-[-0.18px] text-[#ed1c24] lg:absolute lg:left-[112px] lg:top-[17px] lg:pt-0"
          >
            {card.number}
          </motion.span>
        </div>

        <motion.h3
          variants={epcCapTitleUnfold}
          className="text-lg font-bold leading-6 tracking-[-0.3px] text-white lg:absolute lg:left-[112px] lg:top-[60px] lg:right-4"
        >
          {card.title.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </motion.h3>

        <RedAccentBar
          className={`h-[3px] lg:absolute lg:left-[112px] lg:top-[120px] ${card.accentWidth}`}
        />

        <motion.div
          variants={epcCapBodyFade}
          className="pt-1 text-xs leading-[19px] text-[#b6b6b7] lg:absolute lg:inset-x-7 lg:top-[133px]"
        >
          {card.description.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </motion.div>
      </motion.div>

      <CardBottomAccent className="h-0.5" />
    </CapabilityCardShell>
  );
}

function BottomPill() {
  return (
    <div className="flex w-full justify-center">
      <motion.div
        variants={epcCapPillExpand}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="relative flex w-full max-w-[1100px] origin-center items-center justify-center gap-[18px] rounded-full bg-[#575757] px-8 py-[22px] shadow-[0px_8px_12px_rgba(15,15,20,0.04)] sm:px-14 lg:px-14"
      >
        <motion.span
          variants={epcCapConnectorDot}
          className="absolute -left-[98px] top-1/2 hidden size-2 -translate-y-1/2 rounded bg-[#ed1c24] lg:block"
          aria-hidden
        />
        <motion.span
          variants={epcCapConnectorPulse}
          className="absolute -left-[90px] top-1/2 hidden h-[1.5px] w-[110px] origin-right -translate-y-1/2 bg-gradient-to-r from-[#ed2024] to-transparent lg:block"
          aria-hidden
        />

        <motion.div variants={epcCapHexSpin}>
          <Image
            src="/images/capabilities/footer-hex-icon.svg"
            alt=""
            width={22}
            height={24}
            className="shrink-0"
            aria-hidden
          />
        </motion.div>

        <motion.p
          variants={epcCapBodyFade}
          className="text-center text-[15px] font-medium leading-normal tracking-[-0.075px] text-white lg:whitespace-nowrap"
        >
          Integrated execution from concept to commissioning under one
          engineering framework.
        </motion.p>

        <motion.span
          variants={epcCapConnectorDot}
          className="absolute -right-[98px] top-1/2 hidden size-2 -translate-y-1/2 rounded bg-[#ed1c24] lg:block"
          aria-hidden
        />
        <motion.span
          variants={epcCapConnectorPulse}
          className="absolute -right-[90px] top-1/2 hidden h-[1.5px] w-[110px] origin-left -translate-y-1/2 bg-gradient-to-l from-[#ed2024] to-transparent lg:block"
          aria-hidden
        />
      </motion.div>
    </div>
  );
}

export function CoreEpcCapabilitiesSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#020305] text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(#ed1c24 1px, transparent 1px), linear-gradient(90deg, #ed1c24 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:px-16 lg:py-[70px]">
        <motion.div
          className="relative mb-[69px]"
          variants={epcCapHeadlineGroup}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <motion.span
            variants={epcCapScanLine}
            className="pointer-events-none absolute top-0 z-10 h-full w-[3px] bg-gradient-to-b from-transparent via-[#ed1c24] to-transparent shadow-[0_0_16px_#ed1c24]"
            aria-hidden
          />

          <motion.h2
            variants={epcCapHeadlineWipe}
            className="text-[clamp(1.75rem,5vw,2.5rem)] font-extrabold leading-tight tracking-[-0.84px] lg:text-[40px] lg:leading-[44.1px]"
          >
            Core{" "}
            <motion.span
              variants={epcCapEpcStamp}
              className="inline-block text-[#ed1c24]"
            >
              EPC
            </motion.span>{" "}
            Capabilities
          </motion.h2>

          <motion.span
            variants={epcCapRuleSweep}
            className="mt-[9px] block h-[3px] w-full max-w-[180px] origin-left rounded-[2px] bg-gradient-to-r from-[#ed1c24] via-[#ed1c24]/60 to-transparent"
            aria-hidden
          />
        </motion.div>

        <div className="mb-[68px] grid grid-cols-1 gap-[22px] lg:grid-cols-[423px_minmax(0,1fr)] lg:items-stretch">
          <FeaturedCard />

          <div className="flex flex-col gap-[22px] lg:grid lg:h-full lg:min-h-0 lg:grid-rows-[226fr_249fr] lg:gap-[22px]">
            <motion.div
              className="flex min-h-0 flex-col gap-[22px] lg:flex-row"
              variants={epcCapRowStagger}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
            >
              {HORIZONTAL_CARDS.map((card, index) => (
                <HorizontalCard key={card.number} card={card} index={index} />
              ))}
            </motion.div>

            <motion.div
              className="flex min-h-0 flex-col gap-[25px] lg:flex-row"
              variants={epcCapRowStagger}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
            >
              {COMPACT_CARDS.map((card, index) => (
                <CompactCard key={card.number} card={card} index={index} />
              ))}
            </motion.div>
          </div>
        </div>

        <BottomPill />
      </div>
    </section>
  );
}
