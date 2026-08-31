import type { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export const headlineStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

export const headlineLine: Variants = {
  hidden: { opacity: 0, y: 50, clipPath: "inset(100% 0 0 0)" },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0% 0 0 0)",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export const engineeringStatReveal: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 56, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.05, ease: [0.22, 1, 0.36, 1] },
  },
};

export const reflectionFade: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 0.35,
    y: 0,
    transition: { duration: 0.85, delay: 0.4, ease: "easeOut" },
  },
};

export const drawVertical: Variants = {
  hidden: { scaleY: 0, opacity: 0 },
  visible: {
    scaleY: 1,
    opacity: 1,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

export const pulseDot: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 420, damping: 18, delay: 0.45 },
  },
};

export const underlineGrow: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.15 },
  },
};

export const dotGridPop: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 480, damping: 20 },
  },
};

export const notchDrop: Variants = {
  hidden: { opacity: 0, y: -28, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

export const logoRowReveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

export const statsGridStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.11, delayChildren: 0.12 },
  },
};

export const dotGridStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04, delayChildren: 0.05 },
  },
};

/* ── About Mekark section ── */

export const aboutContainerStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.13, delayChildren: 0.15 },
  },
};

export const aboutBadgeReveal: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.88, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

export const aboutBadgeDot: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 520, damping: 16, delay: 0.35 },
  },
};

export const aboutHeadlineStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.08 },
  },
};

export const aboutHeadlineChunk: Variants = {
  hidden: { opacity: 0, y: 36, clipPath: "inset(100% 0 0 0)" },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0% 0 0 0)",
    transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1] },
  },
};

export const aboutParagraphReveal: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

export const aboutQuoteReveal: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

export const aboutQuoteBorder: Variants = {
  hidden: { scaleY: 0, opacity: 0 },
  visible: {
    scaleY: 1,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 },
  },
};

export const aboutQuoteIcon: Variants = {
  hidden: { scale: 0, rotate: -12, opacity: 0 },
  visible: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 380, damping: 18, delay: 0.35 },
  },
};

export const aboutStatsStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.35 },
  },
};

export const aboutStatReveal: Variants = {
  hidden: { opacity: 0, x: 48, y: 20, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export const aboutStatUnderline: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.25 },
  },
};

export const aboutBuildingReveal: Variants = {
  hidden: { opacity: 0, y: 72, scale: 1.06, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 },
  },
};

export const historyJourneyBgReveal: Variants = {
  hidden: {
    opacity: 0,
    x: -72,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.25 },
  },
};

export function historyJourneyLayerReveal(index: number): Variants {
  return {
    hidden: {
      opacity: 0,
      y: 32,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.12 + index * 0.16,
      },
    },
  };
}

export const aboutCalloutReveal: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.55 },
  },
};

export const aboutDotGridStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.035, delayChildren: 0.55 },
  },
};

export const aboutDotPop: Variants = {
  hidden: { scale: 0, opacity: 0, y: 8 },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 420, damping: 22 },
  },
};

/* ── Core EPC Capabilities — Blueprint Reveal ── */

export const epcCapHeadlineGroup: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.22, delayChildren: 0.1 },
  },
};

export const epcCapScanLine: Variants = {
  hidden: { left: "-2%", opacity: 0.9 },
  visible: {
    left: "102%",
    opacity: 0,
    transition: { duration: 1.15, ease: [0.4, 0, 0.2, 1] },
  },
};

export const epcCapHeadlineWipe: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0, x: -28 },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    opacity: 1,
    x: 0,
    transition: { duration: 0.95, ease: [0.77, 0, 0.175, 1], delay: 0.35 },
  },
};

export const epcCapEpcStamp: Variants = {
  hidden: { opacity: 0, scale: 1.8, letterSpacing: "0.35em" },
  visible: {
    opacity: 1,
    scale: 1,
    letterSpacing: "-0.02em",
    transition: { type: "spring", stiffness: 420, damping: 14, delay: 0.55 },
  },
};

export const epcCapRuleSweep: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.75 },
  },
};

export const epcCapFeatured3D: Variants = {
  hidden: {
    opacity: 0,
    rotateY: -28,
    x: -64,
    transformPerspective: 1400,
  },
  visible: {
    opacity: 1,
    rotateY: 0,
    x: 0,
    transition: {
      duration: 1.15,
      ease: [0.16, 1, 0.3, 1],
      when: "beforeChildren",
      staggerChildren: 0.14,
      delayChildren: 0.2,
    },
  },
};

export const epcCapFrameEdgeH: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export const epcCapFrameEdgeV: Variants = {
  hidden: { scaleY: 0, opacity: 0 },
  visible: {
    scaleY: 1,
    opacity: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.12 },
  },
};

export const epcCapNotchSlide: Variants = {
  hidden: { opacity: 0, x: 28, y: -28, scale: 0.4 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 380, damping: 18, delay: 0.45 },
  },
};

export const epcCapContentCascade: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.08 },
  },
};

export const epcCapIconFlip: Variants = {
  hidden: { opacity: 0, rotateY: -180, scale: 0.4 },
  visible: {
    opacity: 1,
    rotateY: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 280, damping: 18 },
  },
};

export const epcCapNumberSlam: Variants = {
  hidden: { opacity: 0, scale: 2.6, y: -24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 520, damping: 14 },
  },
};

export const epcCapTitleUnfold: Variants = {
  hidden: { opacity: 0, clipPath: "inset(0 100% 0 0)", x: 20 },
  visible: {
    opacity: 1,
    clipPath: "inset(0 0% 0 0)",
    x: 0,
    transition: { duration: 0.75, ease: [0.65, 0, 0.35, 1] },
  },
};

export const epcCapLaserLine: Variants = {
  hidden: { scaleX: 0, opacity: 0, boxShadow: "0 0 0px rgba(237,28,36,0)" },
  visible: {
    scaleX: 1,
    opacity: 1,
    boxShadow: "0 0 12px rgba(237,28,36,0.65)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const epcCapBodyFade: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const epcCapBottomBar: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
  },
};

export const epcCapCardFromLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -80,
    y: 72,
    rotate: -2.5,
    clipPath: "inset(100% 0 0 0)",
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    clipPath: "inset(0% 0 0 0)",
    transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] },
  },
};

export const epcCapCardFromRight: Variants = {
  hidden: {
    opacity: 0,
    x: 80,
    y: 72,
    rotate: 2.5,
    clipPath: "inset(100% 0 0 0)",
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    clipPath: "inset(0% 0 0 0)",
    transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] },
  },
};

export const epcCapRowStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.06 },
  },
};

export const epcCapPillExpand: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.14,
      delayChildren: 0.35,
    },
  },
};

export const epcCapHexSpin: Variants = {
  hidden: { opacity: 0, rotate: -180, scale: 0 },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 16 },
  },
};

export const epcCapConnectorPulse: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: [0, 1, 0.7, 1],
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
  },
};

export const epcCapConnectorDot: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: [0, 1.4, 1],
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.5 },
  },
};

/* ── One Partner — Convergence Flow (scroll + fan-out) ── */

export const partnerFlowWordsStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.12 },
  },
};

export const partnerFlowWordFlip: Variants = {
  hidden: { opacity: 0, rotateX: 88, y: 28, transformPerspective: 800 },
  visible: {
    opacity: 1,
    rotateX: 0,
    y: 0,
    transition: { type: "spring", stiffness: 420, damping: 24 },
  },
};

export const partnerFlowRulePulse: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.55 },
  },
};

export const partnerFlowSubtitleSlide: Variants = {
  hidden: { opacity: 0, x: -40, skewX: -4 },
  visible: {
    opacity: 1,
    x: 0,
    skewX: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.45 },
  },
};

export function partnerFlowCardFan(index: number, total: number): Variants {
  const center = (total - 1) / 2;
  const offset = index - center;

  return {
    hidden: {
      opacity: 0,
      x: -offset * 56,
      y: 110,
      rotate: offset * 7,
      scale: 0.68,
      transformOrigin: "50% 120%",
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 240,
        damping: 20,
        mass: 0.9,
        delay: 0.2 + index * 0.09,
        when: "beforeChildren",
        staggerChildren: 0.06,
        delayChildren: 0.2,
      },
    },
  };
}

export const partnerFlowCardFlip: Variants = {
  hidden: { rotateY: -92, opacity: 0, transformPerspective: 1200 },
  visible: {
    rotateY: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 26,
      when: "beforeChildren",
      staggerChildren: 0.07,
      delayChildren: 0.08,
    },
  },
};

export const partnerFlowIconOrbit: Variants = {
  hidden: { opacity: 0, scale: 0.2, y: -36, rotate: -180 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotate: 0,
    transition: { type: "spring", stiffness: 360, damping: 14 },
  },
};

export const partnerFlowLabelDrop: Variants = {
  hidden: { opacity: 0, y: -18, scale: 0.85 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 480, damping: 20 },
  },
};

export const partnerFlowTextRise: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export const partnerFlowBarSnap: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { type: "spring", stiffness: 520, damping: 18, delay: 0.05 },
  },
};

export const partnerFlowBannerIris: Variants = {
  hidden: {
    opacity: 0,
    clipPath: "circle(0% at 70px 50%)",
    scale: 0.92,
  },
  visible: {
    opacity: 1,
    clipPath: "circle(150% at 70px 50%)",
    scale: 1,
    transition: {
      duration: 1.05,
      ease: [0.16, 1, 0.3, 1],
      when: "beforeChildren",
      staggerChildren: 0.1,
      delayChildren: 0.4,
    },
  },
};

export const partnerFlowShieldBounce: Variants = {
  hidden: { opacity: 0, scale: 0, rotate: 180 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 400, damping: 12 },
  },
};

export const partnerFlowBannerWords: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const partnerFlowSkylineFloat: Variants = {
  hidden: { opacity: 0, scale: 1.12, x: 60 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.55 },
  },
};

/* ── One Partner — Structural Lock-In ── */

export const partnerLockHeaderStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

export const partnerLockWordReveal: Variants = {
  hidden: { opacity: 0, y: 42, clipPath: "inset(100% 0 0 0)" },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0% 0 0 0)",
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

export const partnerLockRuleDraw: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.08 },
  },
};

export const partnerLockSubtitle: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export const partnerLockGridStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.18 },
  },
};

export function partnerLockCardAssemble(index: number): Variants {
  const fromCenter = index - 2;

  return {
    hidden: {
      opacity: 0,
      y: 72,
      x: fromCenter * 18,
      scale: 0.9,
      rotateX: 12,
      filter: "blur(6px)",
      transformPerspective: 900,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.06,
        when: "beforeChildren",
        staggerChildren: 0.06,
        delayChildren: 0.18,
      },
    },
  };
}

export const partnerLockContentStack: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

export const partnerLockIconPop: Variants = {
  hidden: { opacity: 0, scale: 0.35, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 420, damping: 16 },
  },
};

export const partnerLockStamp: Variants = {
  hidden: { opacity: 0, y: -12, letterSpacing: "0.35em" },
  visible: {
    opacity: 1,
    y: 0,
    letterSpacing: "1.3px",
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export const partnerLockTextRise: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export const partnerLockBarSnap: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 480, damping: 20, delay: 0.04 },
  },
};

export const partnerLockBottomDraw: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.12 },
  },
};

export const partnerLockBannerWipe: Variants = {
  hidden: {
    opacity: 0,
    clipPath: "inset(0 100% 0 0)",
    x: -24,
  },
  visible: {
    opacity: 1,
    clipPath: "inset(0 0% 0 0)",
    x: 0,
    transition: {
      duration: 0.95,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.12,
      delayChildren: 0.28,
    },
  },
};

export const partnerLockShieldDrop: Variants = {
  hidden: { opacity: 0, y: -28, scale: 0.6, rotate: -18 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 380, damping: 14 },
  },
};

export const partnerLockBannerText: Variants = {
  hidden: { opacity: 0, x: 28, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const partnerLockSkylineDrift: Variants = {
  hidden: { opacity: 0, x: 80, scale: 1.08 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 1.15, ease: [0.16, 1, 0.3, 1], delay: 0.15 },
  },
};

/* ── Precision Engineering — CAD Pipeline Reveal ── */

export const precEngSectionStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.08 },
  },
};

export const precEngHeadlineGroup: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.05 },
  },
};

export const precEngHeadlineWord: Variants = {
  hidden: { opacity: 0, y: 36, clipPath: "inset(100% 0 0 0)" },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0% 0 0 0)",
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

export const precEngRuleDraw: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.12 },
  },
};

export const precEngSubtitleReveal: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
  },
};

export const precEngPillRow: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.35 },
  },
};

export const precEngPillSnap: Variants = {
  hidden: { opacity: 0, x: 32, scaleX: 0.82 },
  visible: {
    opacity: 1,
    x: 0,
    scaleX: 1,
    transition: { type: "spring", stiffness: 380, damping: 22 },
  },
};

export const precEngPillIcon: Variants = {
  hidden: { opacity: 0, rotate: -90, scale: 0.4 },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 420, damping: 16, delay: 0.08 },
  },
};

export const precEngWorkflowPanel: Variants = {
  hidden: {
    opacity: 0,
    y: 48,
    clipPath: "inset(100% 0 0 0)",
  },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0% 0 0 0)",
    transition: {
      duration: 0.95,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.16,
      delayChildren: 0.15,
    },
  },
};

export const precEngStepReveal: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 320,
      damping: 24,
      when: "beforeChildren",
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const precEngStepNumber: Variants = {
  hidden: { opacity: 0, scale: 2.2, y: -12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 520, damping: 14 },
  },
};

export const precEngStepIcon: Variants = {
  hidden: { opacity: 0, rotateY: -120, scale: 0.5 },
  visible: {
    opacity: 1,
    rotateY: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 280, damping: 18 },
  },
};

export const precEngStepTitle: Variants = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export const precEngConnectorPulse: Variants = {
  hidden: { opacity: 0, scale: 0, rotate: 45 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 45,
    transition: { type: "spring", stiffness: 400, damping: 16, delay: 0.28 },
  },
};

export const precEngBenefitRow: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.55 },
  },
};

export const precEngBenefitItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const precEngBenefitDot: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: [0, 1.35, 1],
    opacity: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export const precEngSoftwareStack: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.25 },
  },
};

export function precEngSoftwareCard(index: number): Variants {
  return {
    hidden: {
      opacity: 0,
      x: 72,
      y: 24,
      clipPath: "inset(0 100% 0 0)",
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      clipPath: "inset(0 0% 0 0)",
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.08,
        when: "beforeChildren",
        staggerChildren: 0.08,
        delayChildren: 0.12,
      },
    },
  };
}

export const precEngBorderAccent: Variants = {
  hidden: { scaleY: 0, opacity: 0 },
  visible: {
    scaleY: 1,
    opacity: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export const precEngLogoReveal: Variants = {
  hidden: { opacity: 0, scale: 0.6, rotate: -24 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 300, damping: 18 },
  },
};

export const precEngTagPop: Variants = {
  hidden: { opacity: 0, scale: 0.75, y: 8 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 420, damping: 20 },
  },
};

export const precEngQuoteReveal: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const precEngQuoteBorder: Variants = {
  hidden: { scaleY: 0, opacity: 0 },
  visible: {
    scaleY: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const precEngQuoteText: Variants = {
  hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.15 },
  },
};

/* ── Manufacturing Factories — Industrial Gallery ── */

export const mfgSectionStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
  },
};

export const mfgHeadlineReveal: Variants = {
  hidden: { opacity: 0, y: 40, clipPath: "inset(100% 0 0 0)" },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0% 0 0 0)",
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

export const mfgSubtitleReveal: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.12 },
  },
};

export const mfgGridStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

export function mfgCardReveal(index: number): Variants {
  const row = Math.floor(index / 3);
  const col = index % 3;

  return {
    hidden: {
      opacity: 0,
      y: 48 + row * 12,
      x: (col - 1) * 24,
      scale: 0.92,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: row * 0.06,
      },
    },
  };
}

/* ── Achievements & Testimonials ── */

export const achTestSectionStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.06 },
  },
};

export const achPanelReveal: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const achCornersStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.12 },
  },
};

export const achCornerPop: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 420, damping: 18 },
  },
};

export const achGlowBreath: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: "easeOut", delay: 0.25 },
  },
};

export const achTitleGradient: Variants = {
  hidden: { opacity: 0, letterSpacing: "0.28em" },
  visible: {
    opacity: 1,
    letterSpacing: "-0.021em",
    transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] },
  },
};

export const achStatsRow: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.01, delayChildren: 0.35 },
  },
};

export function achStatActivate(index: number): Variants {
  return {
    hidden: { scale: 0.86, opacity: 0.2 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 320,
        damping: 22,
        delay: 0.48 + index * 0.22,
      },
    },
  };
}


export const testBadgeReveal: Variants = {
  hidden: { opacity: 0, scale: 0.85, y: 12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 380, damping: 20 },
  },
};

export const testHeadlineReveal: Variants = {
  hidden: { opacity: 0, y: 32, clipPath: "inset(100% 0 0 0)" },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0% 0 0 0)",
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.08 },
  },
};

export const testGridStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.15 },
  },
};

export function testCardReveal(index: number): Variants {
  return {
    hidden: {
      opacity: 0,
      y: 40,
      x: index === 0 ? -24 : index === 2 ? 24 : 0,
      scale: index === 1 ? 0.94 : 0.96,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.85,
        ease: [0.22, 1, 0.36, 1],
        delay: index === 1 ? 0.06 : 0,
      },
    },
  };
}

/* ── FAQ ── */

export const faqSectionStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
  },
};

export const faqAsideReveal: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const faqHeadlineLine: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const faqIllustrationReveal: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 },
  },
};

export const faqListStagger: Variants = {
  hidden: { opacity: 0, x: 28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};

export function faqItemReveal(index: number): Variants {
  return {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.04,
      },
    },
  };
}

/* ── Mekark Blogs ── */

export const blogSectionStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.06 },
  },
};

export const blogHeaderReveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

export const blogHeadlineReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const blogGridStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

export function blogCardReveal(index: number): Variants {
  return {
    hidden: { opacity: 0, y: 28, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: (index % 3) * 0.05,
      },
    },
  };
}

/* ── Enquiry / Start Project ── */

export const enquirySectionStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

export const enquiryCopyReveal: Variants = {
  hidden: { opacity: 0, x: -36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.09,
      delayChildren: 0.06,
    },
  },
};

export const enquiryCopyItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export const enquiryHighlightStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

export const enquiryHighlightItem: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export const enquiryFormReveal: Variants = {
  hidden: { opacity: 0, x: 40, y: 24 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

export const navbarReveal: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export const navbarLogoReveal: Variants = {
  hidden: { opacity: 0, x: -20, scale: 0.92 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.08 },
  },
};

export const navbarItemsStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05, delayChildren: 0.18 },
  },
};

export const navbarItemReveal: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export const navbarDropdownPanel: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.24, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: 8,
    scale: 0.98,
    transition: { duration: 0.18, ease: [0.22, 1, 0.36, 1] },
  },
};

export const navbarDropdownItemsStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.025, delayChildren: 0.04 },
  },
};

export const navbarDropdownItemReveal: Variants = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
  },
};

export const navbarMobileMenuReveal: Variants = {
  hidden: { opacity: 0, y: -12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
  },
};

export const navbarMobileItemsStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.08 },
  },
};

export const navbarMobileItemReveal: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
};
