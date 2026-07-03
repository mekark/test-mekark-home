"use client";

import { useRef, useState, type MouseEvent } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useInView,
  type MotionValue,
} from "framer-motion";
import {
  partnerCardBottomSnap,
  partnerCardContentFade,
  partnerCardContentStack,
  partnerCardCurtainUp,
  partnerCardElasticDrop,
  partnerCardFrameDraw,
  partnerCardFrameLineH,
  partnerCardFrameLineV,
  partnerFlowBannerIris,
  partnerFlowBannerWords,
  partnerFlowBarSnap,
  partnerFlowRulePulse,
  partnerFlowShieldBounce,
  partnerFlowSkylineFloat,
  partnerFlowSubtitleSlide,
  partnerFlowWordFlip,
  partnerFlowWordsStagger,
} from "@/lib/motion-variants";

const VIEWPORT = { once: true, margin: "-80px" as const };

const CARD_SHADOW = "0px 22.734px 39.785px 0px rgba(0,0,0,0.08)";

const ICON_CIRCLE_BG =
  "linear-gradient(145deg, rgb(247, 247, 247) 0%, rgb(255, 255, 255) 100%)";

const HEADLINE_WORDS = [
  { text: "What", accent: false },
  { text: "You", accent: false },
  { text: "Get", accent: false },
  { text: "With", accent: false },
  { text: "One", accent: true },
  { text: "Partner", accent: true },
] as const;

const BENEFITS = [
  {
    category: "Continuity",
    title: "Design-to-Execution",
    description:
      "Seamless transition from architectural vision to onground structural reality.",
    icon: "/images/one-partner/icon-box.svg",
    iconSize: 30,
  },
  {
    category: "Financials",
    title: ["Cost Predictability", "at Scale"],
    description:
      "Locked-in budgets with minimal variation through advanced material quantification.",
    icon: "/images/one-partner/icon-calculator.svg",
    iconSize: 30,
  },
  {
    category: "Speed",
    title: ["Accelerated Project", "Delivery"],
    description:
      "30–40% faster delivery timelines versus conventional construction methods.",
    icon: "/images/one-partner/icon-gauge.svg",
    iconSize: 27,
  },
  {
    category: "Simplicity",
    title: ["Reduced Coordination", "Complexity"],
    description:
      "One partner eliminates multi-vendor friction and misaligned project handoffs.",
    icon: "/images/one-partner/icon-handshake.svg",
    iconSize: 30,
  },
  {
    category: "Accountability",
    title: ["Lifecycle-Driven", "Engineering"],
    description:
      "Every structure is designed for expansion, operational stress, and long-term load stability.",
    icon: "/images/one-partner/icon-shield-check.svg",
    iconSize: 30,
  },
];

type Benefit = {
  category: string;
  title: string | readonly string[];
  description: string;
  icon: string;
  iconSize: number;
};

function ConnectorPulse() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute left-[5%] right-[4%] top-[164px] hidden h-0.5 overflow-hidden rounded-full bg-[#e4141c]/25 xl:block"
      aria-hidden
    >
      <motion.div
        className="absolute inset-0 origin-left bg-[#e4141c]/70"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
      />
      <motion.div
        className="absolute top-1/2 size-2.5 -translate-y-1/2 rounded-full bg-[#e4141c] shadow-[0_0_10px_rgba(228,20,28,0.8)]"
        initial={{ left: "0%", opacity: 0 }}
        animate={
          inView
            ? {
                left: ["0%", "100%"],
                opacity: [0, 1, 1, 0],
              }
            : { left: "0%", opacity: 0 }
        }
        transition={{
          duration: 2.4,
          ease: "easeInOut",
          delay: 1.2,
          repeat: Infinity,
          repeatDelay: 1.8,
        }}
      />
    </div>
  );
}

function BenefitCard({
  benefit,
  index,
  scrollYProgress,
}: {
  benefit: Benefit;
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const cardRef = useRef<HTMLElement>(null);
  const [hovered, setHovered] = useState(false);
  const titleLines = Array.isArray(benefit.title)
    ? [...benefit.title]
    : [benefit.title];

  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(30);
  const hoverLift = useMotionValue(0);
  const spotlight = useTransform(
    [mouseX, mouseY],
    ([x, y]: number[]) =>
      `radial-gradient(ellipse 200px 160px at ${x}% ${y}%, rgba(237,32,36,0.11), transparent 72%)`,
  );

  const cardParallax = useTransform(
    scrollYProgress,
    [0, 1],
    [index * 5, -index * 5],
  );
  const cardY = useSpring(cardParallax, { stiffness: 120, damping: 28 });
  const liftY = useSpring(hoverLift, { stiffness: 400, damping: 26 });
  const combinedY = useTransform(
    [cardY, liftY],
    ([parallax, lift]: number[]) => parallax + lift,
  );

  const handlePointerMove = (event: MouseEvent<HTMLElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mouseX.set(((event.clientX - rect.left) / rect.width) * 100);
    mouseY.set(((event.clientY - rect.top) / rect.height) * 100);
  };

  return (
    <motion.article
      ref={cardRef}
      variants={partnerCardElasticDrop(index)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      onMouseMove={handlePointerMove}
      onMouseEnter={() => {
        setHovered(true);
        hoverLift.set(-6);
      }}
      onMouseLeave={() => {
        setHovered(false);
        hoverLift.set(0);
      }}
      animate={{ scale: hovered ? 1.035 : 1 }}
      transition={{ type: "spring", stiffness: 380, damping: 24 }}
      style={{
        y: combinedY,
        boxShadow: hovered
          ? "0px 28px 52px rgba(0,0,0,0.11), 0px 0px 0px 1px rgba(237,32,36,0.18)"
          : CARD_SHADOW,
      }}
      className="group relative flex min-h-[325px] w-[242px] shrink-0 snap-start flex-col overflow-hidden rounded-[18px] border border-[#dedede] bg-white/90 sm:w-[260px] md:w-[280px] xl:w-full xl:shrink xl:min-w-0 xl:flex-1"
    >
      {/* red curtain reveal on enter */}
      <motion.div
        variants={partnerCardCurtainUp}
        className="pointer-events-none absolute inset-0 z-30 rounded-[18px] bg-[#ed2024]"
        aria-hidden
      />

      {/* blueprint frame draw on enter */}
      <motion.div
        variants={partnerCardFrameDraw}
        className="pointer-events-none absolute inset-0 z-[1]"
        aria-hidden
      >
        <motion.span
          variants={partnerCardFrameLineH}
          className="absolute inset-x-0 top-0 h-px origin-left bg-[#ed2024]/40"
        />
        <motion.span
          variants={partnerCardFrameLineH}
          className="absolute inset-x-0 bottom-0 h-px origin-right bg-[#ed2024]/40"
        />
        <motion.span
          variants={partnerCardFrameLineV}
          className="absolute bottom-0 left-0 top-0 w-px origin-top bg-[#ed2024]/40"
        />
        <motion.span
          variants={partnerCardFrameLineV}
          className="absolute bottom-0 right-0 top-0 w-px origin-bottom bg-[#ed2024]/40"
        />
      </motion.div>

      {/* cursor spotlight on hover */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-[2] rounded-[18px]"
        style={{ background: spotlight }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        aria-hidden
      />

      {/* scan line on hover */}
      <motion.div
        className="pointer-events-none absolute inset-x-4 z-[3] h-px bg-[#ed2024]/70 shadow-[0_0_10px_rgba(237,32,36,0.5)]"
        initial={false}
        animate={
          hovered
            ? { top: ["8%", "92%"], opacity: [0, 1, 1, 0] }
            : { top: "8%", opacity: 0 }
        }
        transition={{ duration: 0.85, ease: "easeInOut" }}
        aria-hidden
      />

      {/* top accent slides in on hover */}
      <motion.div
        className="absolute inset-x-0 top-0 z-[4] h-[3px] origin-left bg-[#ed2024]"
        initial={false}
        animate={{ scaleX: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 420, damping: 22 }}
        aria-hidden
      />

      <motion.div
        variants={partnerCardContentStack}
        className="relative z-10 flex h-full flex-col px-8 pb-[51px] pt-[26px] backdrop-blur-[2px]"
      >
        <motion.div
          variants={partnerCardContentFade}
          animate={{ y: hovered ? -6 : 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 22 }}
          className="relative flex size-[77px] shrink-0 items-center justify-center rounded-full border border-[#eee] shadow-[0px_10px_9px_rgba(0,0,0,0.06),inset_0px_0px_17px_rgba(0,0,0,0.04)]"
          style={{ backgroundImage: ICON_CIRCLE_BG }}
        >
          <motion.div
            animate={{ rotate: hovered ? 360 : 0, scale: hovered ? 1.08 : 1 }}
            transition={{
              rotate: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
              scale: { type: "spring", stiffness: 400, damping: 18 },
            }}
          >
            <Image
              src={benefit.icon}
              alt=""
              width={benefit.iconSize}
              height={benefit.iconSize}
              aria-hidden
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-[15px] flex flex-col gap-2"
          animate={{ y: hovered ? -3 : 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 24 }}
        >
          <motion.p
            variants={partnerCardContentFade}
            className="text-xs font-bold uppercase tracking-[1.3px] text-[#e00d15]"
          >
            {benefit.category}
          </motion.p>
          <motion.h3
            variants={partnerCardContentFade}
            className="text-lg font-bold leading-6 tracking-[-0.5px] text-[#111]"
          >
            {titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </motion.h3>
          <motion.div
            variants={partnerFlowBarSnap}
            className="mt-1 h-0.5 w-[26px] origin-left bg-[#e00d15]"
            aria-hidden
          />
        </motion.div>

        <motion.p
          variants={partnerCardContentFade}
          animate={{ y: hovered ? -2 : 0, opacity: hovered ? 1 : 0.92 }}
          transition={{ duration: 0.3 }}
          className="mt-auto pt-4 text-xs leading-[19px] text-[#4c4c4c]"
        >
          {benefit.description}
        </motion.p>

        <motion.div
          variants={partnerCardBottomSnap}
          animate={{
            scaleX: hovered ? 1.04 : 1,
            boxShadow: hovered
              ? "0 -6px 20px rgba(226,14,22,0.35)"
              : "0 0 0 rgba(0,0,0,0)",
          }}
          className="absolute inset-x-0 bottom-0 h-1 origin-center bg-[#e20e16]"
          aria-hidden
        />

        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_1px_0px_rgba(255,255,255,0.9)]"
          aria-hidden
        />
      </motion.div>
    </motion.article>
  );
}

export function OnePartnerSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.06, 1, 1.04]);
  const bgYSpring = useSpring(bgY, { stiffness: 90, damping: 26 });
  const bgScaleSpring = useSpring(bgScale, { stiffness: 90, damping: 26 });

  const headlineY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const headlineYSpring = useSpring(headlineY, { stiffness: 100, damping: 30 });

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden border-b border-black/10 bg-white text-[#111]"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 will-change-transform"
        style={{ y: bgYSpring, scale: bgScaleSpring }}
      >
        <Image
          src="/images/one-partner/bg.png"
          alt=""
          fill
          className="object-cover object-top"
          sizes="100vw"
          priority={false}
          aria-hidden
        />
      </motion.div>

      <div className="relative mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:px-20 lg:py-20">
        <motion.div style={{ y: headlineYSpring }} className="flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <motion.h2
              variants={partnerFlowWordsStagger}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              className="max-w-[580px] text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-[1.05] tracking-[-0.84px] text-[#080808] lg:text-[40px]"
              style={{ transformPerspective: 800 }}
            >
              {HEADLINE_WORDS.map((word, i) => (
                <motion.span
                  key={word.text}
                  variants={partnerFlowWordFlip}
                  className={`mr-[0.28em] inline-block origin-bottom ${
                    word.accent ? "text-[#d40810]" : ""
                  }`}
                  style={{ transformPerspective: 800 }}
                >
                  {word.text}
                  {i === 3 ? " " : ""}
                </motion.span>
              ))}
            </motion.h2>

            <motion.div
              variants={partnerFlowRulePulse}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              className="h-[3px] w-14 origin-left rounded-sm bg-[#ed2024]"
              aria-hidden
            />

            <motion.p
              variants={partnerFlowSubtitleSlide}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              className="max-w-[560px] text-lg leading-[29px] text-[#656565] sm:text-xl"
            >
              Eliminating the friction of multiple vendors. We consolidate
              responsibility for absolute performance certainty.
            </motion.p>
          </div>

          <div className="relative pt-5">
            <ConnectorPulse />

            <div className="-mx-5 flex gap-[17px] overflow-x-auto px-5 pb-2 snap-x snap-mandatory scrollbar-none sm:mx-0 sm:px-0 xl:mx-0 xl:grid xl:grid-cols-5 xl:overflow-visible xl:px-0">
              {BENEFITS.map((benefit, index) => (
                <BenefitCard
                  key={benefit.category}
                  benefit={benefit}
                  index={index}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </div>
          </div>

          <motion.div
            variants={partnerFlowBannerIris}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="relative mt-2 overflow-hidden rounded-[11px] border border-[#ddd] shadow-[0px_17px_38px_rgba(0,0,0,0.06)]"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgb(215, 10, 16) 0%, rgb(166, 4, 6) 100%)",
            }}
          >
            <div
              className="absolute bottom-0 left-0 top-0 w-[9px] bg-black"
              aria-hidden
            />

            <div className="relative flex min-h-[104px] items-center gap-6 px-6 py-5 sm:gap-8 sm:px-12 lg:px-[52px]">
              <motion.div
                variants={partnerFlowShieldBounce}
                className="flex size-[70px] shrink-0 items-center justify-center rounded-full border border-white"
              >
                <Image
                  src="/images/one-partner/banner-shield.svg"
                  alt=""
                  width={36}
                  height={36}
                  aria-hidden
                />
              </motion.div>

              <motion.p
                variants={partnerFlowBannerWords}
                className="relative z-10 max-w-[769px] text-xl font-medium leading-normal tracking-[-0.76px] text-white sm:text-[25px]"
              >
                Single accountability.{" "}
                <span className="font-bold">Complete project ownership.</span>
              </motion.p>

              <motion.div
                variants={partnerFlowSkylineFloat}
                className="pointer-events-none absolute -right-5 -top-12 hidden h-[206px] w-[675px] lg:block"
              >
                <Image
                  src="/images/one-partner/banner-skyline.png"
                  alt=""
                  fill
                  className="object-cover object-right"
                  sizes="675px"
                  aria-hidden
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
