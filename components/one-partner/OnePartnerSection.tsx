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
import { SECTION_CONTAINER_CLASS } from "@/lib/sectionLayout";
import {
  partnerLockBarSnap,
  partnerLockBottomDraw,
  partnerLockCardAssemble,
  partnerLockContentStack,
  partnerLockGridStagger,
  partnerLockHeaderStagger,
  partnerLockIconPop,
  partnerLockRuleDraw,
  partnerLockSkylineDrift,
  partnerLockStamp,
  partnerLockSubtitle,
  partnerLockTextRise,
  partnerLockWordReveal,
} from "@/lib/motion-variants";

const VIEWPORT = { once: true, margin: "-80px" as const };

const CARD_SHADOW = "0px 30.312px 53.047px 0px rgba(0,0,0,0.08)";

const ICON_CIRCLE_BG =
  "linear-gradient(145deg, rgb(247, 247, 247) 0%, rgb(255, 255, 255) 100%)";

const HEADLINE_WORDS = [
  { text: "Why", accent: false },
  { text: "Mekark?", accent: true },
] as const;

const BENEFITS = [
  {
    category: "Continuity",
    title: ["Design to", "Execution"],
    description:
      "Seamless transition from architectural vision to onground structural reality.",
    icon: "/images/one-partner/icon-box.svg",
    iconSize: 40,
  },
  {
    category: "Financials",
    title: ["Cost Predictability", "at Scale"],
    description:
      "Locked-in budgets with minimal variation through advanced material quantification.",
    icon: "/images/one-partner/icon-calculator.svg",
    iconSize: 40,
  },
  {
    category: "Speed",
    title: ["Accelerated Project", "Delivery"],
    description:
      "50% faster delivery timelines versus conventional construction methods.",
    icon: "/images/one-partner/icon-gauge.svg",
    iconSize: 36,
  },
  {
    category: "Simplicity",
    title: ["Reduced Coordination", "Complexity"],
    description:
      "One partner eliminates multi-vendor friction and misaligned project handoffs.",
    icon: "/images/one-partner/icon-handshake.svg",
    iconSize: 40,
  },
  {
    category: "Accountability",
    title: ["Lifecycle-Driven", "Engineering"],
    description:
      "Every structure is designed for expansion, operational stress, and long-term load stability.",
    icon: "/images/one-partner/icon-shield-check.svg",
    iconSize: 40,
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
      className="pointer-events-none absolute left-[5%] right-[4%] top-[226px] hidden h-0.5 overflow-hidden rounded-full bg-[#e4141c]/20 xl:top-[180px] xl:block 2xl:top-[226px]"
      aria-hidden
    >
      <motion.div
        className="absolute inset-0 origin-left bg-[#e4141c]/55"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
      />
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.span
          key={i}
          className="absolute top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e4141c]"
          style={{ left: `${i * 25}%` }}
          initial={{ scale: 0, opacity: 0 }}
          animate={
            inView
              ? { scale: [0, 1.35, 1], opacity: 1 }
              : { scale: 0, opacity: 0 }
          }
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.55 + i * 0.12,
          }}
        />
      ))}
      <motion.div
        className="absolute top-1/2 h-[3px] w-8 -translate-y-1/2 rounded-full bg-[#e4141c] shadow-[0_0_12px_rgba(228,20,28,0.7)]"
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
          duration: 2.8,
          ease: "easeInOut",
          delay: 1.1,
          repeat: Infinity,
          repeatDelay: 2,
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

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const hoverLift = useMotionValue(0);

  const rotateXRaw = useTransform(mouseY, [0, 1], [7, -7]);
  const rotateYRaw = useTransform(mouseX, [0, 1], [-8, 8]);
  const rotateX = useSpring(rotateXRaw, { stiffness: 280, damping: 22 });
  const rotateY = useSpring(rotateYRaw, { stiffness: 280, damping: 22 });

  const glow = useTransform(
    [mouseX, mouseY],
    ([x, y]: number[]) =>
      `radial-gradient(circle 180px at ${x * 100}% ${y * 100}%, rgba(237,32,36,0.14), transparent 70%)`,
  );

  const cardParallax = useTransform(
    scrollYProgress,
    [0, 1],
    [index * 4, -index * 4],
  );
  const cardY = useSpring(cardParallax, { stiffness: 120, damping: 28 });
  const liftY = useSpring(hoverLift, { stiffness: 380, damping: 24 });
  const combinedY = useTransform(
    [cardY, liftY],
    ([parallax, lift]: number[]) => parallax + lift,
  );

  const handlePointerMove = (event: MouseEvent<HTMLElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width);
    mouseY.set((event.clientY - rect.top) / rect.height);
  };

  const resetTilt = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.article
      ref={cardRef}
      variants={partnerLockCardAssemble(index)}
      onMouseMove={handlePointerMove}
      onMouseEnter={() => {
        setHovered(true);
        hoverLift.set(-10);
      }}
      onMouseLeave={() => {
        setHovered(false);
        hoverLift.set(0);
        resetTilt();
      }}
      style={{
        y: combinedY,
        rotateX,
        rotateY,
        transformPerspective: 900,
        transformStyle: "preserve-3d",
        boxShadow: hovered
          ? "0px 32px 56px rgba(0,0,0,0.12), 0px 0px 0px 1px rgba(237,32,36,0.22)"
          : CARD_SHADOW,
      }}
      animate={{ scale: hovered ? 1.03 : 1 }}
      transition={{ type: "spring", stiffness: 360, damping: 24 }}
      className="group relative flex w-[242px] shrink-0 snap-start flex-col overflow-hidden rounded-[18px] border border-[#dedede] bg-white/90 sm:w-[260px] md:w-[280px] xl:h-[339px] xl:min-h-[339px] xl:w-full xl:min-w-0 xl:flex-1 xl:rounded-[18px] 2xl:h-[452px] 2xl:min-h-[452px] 2xl:rounded-[24px]"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-[2] rounded-[18px] xl:rounded-[18px] 2xl:rounded-[24px]"
        style={{ background: glow }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        aria-hidden
      />

      <motion.div
        className="absolute inset-x-0 top-0 z-[4] h-[3px] origin-left bg-[#ed2024]"
        initial={false}
        animate={{ scaleX: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 420, damping: 22 }}
        aria-hidden
      />

      <motion.div
        variants={partnerLockContentStack}
        className="relative z-10 flex h-full flex-col px-6 pb-6 pt-5 backdrop-blur-[2px] xl:px-6 xl:pb-6 xl:pt-5 2xl:px-[42px] 2xl:pb-[68px] 2xl:pt-[35px]"
      >
        <motion.div
          variants={partnerLockIconPop}
          animate={{
            y: hovered ? [-2, -8, -2] : 0,
            scale: hovered ? 1.06 : 1,
          }}
          transition={
            hovered
              ? {
                  y: {
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  scale: { type: "spring", stiffness: 360, damping: 18 },
                }
              : { type: "spring", stiffness: 360, damping: 22 }
          }
          className="relative flex size-[64px] shrink-0 items-center justify-center rounded-full border border-[#eee] shadow-[0px_10px_9px_rgba(0,0,0,0.06),inset_0px_0px_17px_rgba(0,0,0,0.04)] xl:size-[77px] 2xl:size-[103px] 2xl:shadow-[0px_13.391px_12.275px_rgba(0,0,0,0.06),inset_0px_0px_22px_rgba(0,0,0,0.04)]"
          style={{ backgroundImage: ICON_CIRCLE_BG }}
        >
          <Image
            src={benefit.icon}
            alt=""
            width={benefit.iconSize}
            height={benefit.iconSize}
            aria-hidden
          />
        </motion.div>

        <motion.div
          className="mt-[15px] flex flex-col gap-2"
          animate={{ y: hovered ? -4 : 0 }}
          transition={{ type: "spring", stiffness: 380, damping: 24 }}
        >
          <motion.p
            variants={partnerLockStamp}
            className="text-xs font-bold uppercase tracking-[1.3px] text-[#e00d15] xl:text-xs xl:tracking-[1.3px] 2xl:text-base 2xl:tracking-[2.5px]"
          >
            {benefit.category}
          </motion.p>
          <motion.h3
            variants={partnerLockTextRise}
            className="text-lg font-bold leading-6 tracking-[-0.5px] text-[#111] xl:text-lg xl:leading-6 2xl:text-2xl 2xl:leading-8 2xl:tracking-[-0.76px]"
          >
            {titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </motion.h3>
          <motion.div
            variants={partnerLockBarSnap}
            className="mt-1 h-0.5 w-[26px] origin-left bg-[#e00d15] xl:h-0.5 xl:w-[26px] 2xl:h-[2.5px] 2xl:w-[35px]"
            animate={{ width: hovered ? 56 : 26 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
            aria-hidden
          />
        </motion.div>

        <motion.p
          variants={partnerLockTextRise}
          animate={{ y: hovered ? -2 : 0, opacity: hovered ? 1 : 0.9 }}
          transition={{ duration: 0.28 }}
          className="mt-3 text-xs leading-[19px] text-[#4c4c4c] xl:mt-auto xl:pt-3 xl:text-xs xl:leading-[19px] 2xl:mt-auto 2xl:pt-4 2xl:text-base 2xl:leading-[25.33px]"
        >
          {benefit.description}
        </motion.p>

        <motion.div
          variants={partnerLockBottomDraw}
          animate={{
            scaleX: hovered ? 1.05 : 1,
            boxShadow: hovered
              ? "0 -8px 22px rgba(226,14,22,0.4)"
              : "0 0 0 rgba(0,0,0,0)",
          }}
          className="absolute inset-x-0 bottom-0 h-1 origin-center bg-[#e20e16] xl:h-1 2xl:h-[5px]"
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

  const bgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1, 1.03]);
  const bgYSpring = useSpring(bgY, { stiffness: 90, damping: 26 });
  const bgScaleSpring = useSpring(bgScale, { stiffness: 90, damping: 26 });

  const headlineY = useTransform(scrollYProgress, [0, 1], [24, -24]);
  const headlineYSpring = useSpring(headlineY, { stiffness: 100, damping: 30 });

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden border-b border-black/10 bg-white font-[family-name:var(--font-manrope)] text-[#111] lg:min-h-[1081px] xl:min-h-[811px] 2xl:min-h-[1081px]"
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

      <div className={`${SECTION_CONTAINER_CLASS} flex min-h-0 flex-col py-14 lg:min-h-[1081px] lg:justify-center lg:py-[59px] xl:min-h-[811px] xl:py-[44px] 2xl:min-h-[1081px] 2xl:py-[59px]`}>
        <motion.div
          style={{ y: headlineYSpring }}
          className="flex w-full flex-col gap-6 lg:gap-8"
        >
          <motion.div
            variants={partnerLockHeaderStagger}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="flex flex-col gap-6 lg:gap-8"
          >
            <motion.h2
              variants={partnerLockHeaderStagger}
              className="max-w-[773px] text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-[1.05] tracking-[-0.84px] text-[#080808] lg:text-[53.33px] lg:tracking-[-1.12px] xl:text-[39px] xl:tracking-[-0.84px] 2xl:text-[53.33px] 2xl:tracking-[-1.12px]"
            >
              {HEADLINE_WORDS.map((word) => (
                <motion.span
                  key={word.text}
                  variants={partnerLockWordReveal}
                  className={`mr-[0.28em] inline-block ${
                    word.accent ? "text-[#d40810]" : ""
                  }`}
                >
                  {word.text}
                </motion.span>
              ))}
            </motion.h2>

            <motion.div
              variants={partnerLockRuleDraw}
              className="h-[3px] w-14 origin-left rounded-sm bg-[#ed2024] lg:h-1 lg:w-[75px] lg:rounded-[2.67px]"
              aria-hidden
            />

            <motion.p
              variants={partnerLockSubtitle}
              className="max-w-[1144px] font-[family-name:var(--font-manrope)] text-[18px] leading-[28px] text-[#656565] sm:text-[22px] sm:leading-[32px] lg:text-[26.67px] lg:leading-[38.67px] xl:max-w-[858px] xl:text-[18px] xl:leading-[29px] 2xl:max-w-[1144px] 2xl:text-[26.67px] 2xl:leading-[38.67px]"
            >
              As a complete turnkey provider, we eliminate the friction of
              multiple vendors, consolidating responsibility into a single point
              of accountability for absolute performance certainty.
            </motion.p>
          </motion.div>

          <div className="relative pt-5 lg:pb-6 lg:pt-[29px]">
            <ConnectorPulse />

            <motion.div
              variants={partnerLockGridStagger}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              className="-mx-5 flex gap-[17px] overflow-x-auto px-5 pb-4 snap-x snap-mandatory scrollbar-none sm:mx-0 sm:px-0 xl:mx-0 xl:grid xl:grid-cols-5 xl:gap-[17px] xl:overflow-visible xl:pb-2 xl:px-0 2xl:gap-[23px]"
            >
              {BENEFITS.map((benefit, index) => (
                <BenefitCard
                  key={benefit.category}
                  benefit={benefit}
                  index={index}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 16 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.05, margin: "0px 0px -40px 0px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 mt-6 overflow-hidden rounded-[11px] border border-[#ddd] shadow-[0px_17px_38px_rgba(0,0,0,0.06)] lg:mt-1 lg:rounded-[15px] lg:shadow-[0px_22.734px_50.521px_rgba(0,0,0,0.06)]"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgb(215, 10, 16) 0%, rgb(166, 4, 6) 100%)",
            }}
          >
            <div
              className="absolute bottom-0 left-0 top-0 w-[9px] bg-black lg:w-[clamp(9px,1vw,13px)]"
              aria-hidden
            />

            <motion.div
              className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white/20 to-transparent"
              initial={{ x: "-100%", opacity: 0 }}
              whileInView={{ x: "320%", opacity: [0, 0.7, 0] }}
              viewport={VIEWPORT}
              transition={{ duration: 1.4, ease: "easeInOut", delay: 0.7 }}
              aria-hidden
            />

            <div className="relative flex min-h-[104px] flex-col items-start gap-4 px-6 py-5 sm:flex-row sm:items-center sm:gap-5 sm:px-10 sm:py-6 lg:min-h-[clamp(7.5rem,11vw,8.7rem)] lg:gap-[clamp(1rem,2vw,2rem)] lg:px-[clamp(2.75rem,5.5vw,4.3rem)] lg:py-[clamp(1.1rem,2vw,1.75rem)] 2xl:min-h-[139px] 2xl:gap-8 2xl:px-[69px] 2xl:py-0">
              <motion.div
                initial={{ scale: 0.92 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.05, margin: "0px 0px -40px 0px" }}
                transition={{ type: "spring", stiffness: 380, damping: 16, delay: 0.1 }}
                className="flex size-[70px] shrink-0 items-center justify-center rounded-full border border-white lg:size-[clamp(3.75rem,6vw,5.8rem)] 2xl:size-[93px]"
              >
                <Image
                  src="/images/one-partner/banner-shield.svg"
                  alt=""
                  width={48}
                  height={48}
                  className="size-9 lg:size-[clamp(2rem,3.2vw,3rem)] 2xl:size-12"
                  aria-hidden
                />
              </motion.div>

              <p className="relative z-10 max-w-[42rem] text-[clamp(1.125rem,2.1vw,1.55rem)] font-medium leading-[1.3] tracking-[-0.76px] text-white sm:max-w-[min(100%,36rem)] sm:text-[clamp(1.25rem,2.35vw,1.75rem)] lg:max-w-[min(100%,40rem)] xl:max-w-[min(100%,44rem)] 2xl:max-w-[1025px] 2xl:text-[33.33px] 2xl:leading-normal 2xl:tracking-[-1.01px]">
                Single accountability.{" "}
                <span className="font-bold">Complete project ownership.</span>
              </p>

              <motion.div
                variants={partnerLockSkylineDrift}
                className="pointer-events-none absolute -right-8 -top-10 hidden h-[180px] w-[min(58%,520px)] opacity-55 sm:block lg:-right-10 lg:-top-12 lg:h-[clamp(11rem,18vw,17rem)] lg:w-[min(55%,720px)] lg:opacity-50 xl:opacity-45 2xl:-right-7 2xl:-top-16 2xl:h-[275px] 2xl:w-[902px] 2xl:opacity-100"
              >
                <Image
                  src="/images/one-partner/banner-skyline.png"
                  alt=""
                  fill
                  className="object-cover object-right"
                  sizes="(max-width: 1536px) 55vw, 902px"
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
