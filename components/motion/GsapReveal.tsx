"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap, registerGsapPlugins } from "@/lib/gsap";

type GsapRevealProps = {
  children: ReactNode;
  className?: string;
  animation?: "fadeUp" | "slideLeft" | "slideRight" | "scale";
};

const ANIMATIONS = {
  fadeUp: { from: { opacity: 0, y: 50 }, to: { opacity: 1, y: 0 } },
  slideLeft: { from: { opacity: 0, x: -60 }, to: { opacity: 1, x: 0 } },
  slideRight: { from: { opacity: 0, x: 60 }, to: { opacity: 1, x: 0 } },
  scale: { from: { opacity: 0, scale: 0.9 }, to: { opacity: 1, scale: 1 } },
} as const;

export function GsapReveal({
  children,
  className,
  animation = "fadeUp",
}: GsapRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsapPlugins();
    const el = ref.current;
    if (!el) return;

    const { from, to } = ANIMATIONS[animation];

    const ctx = gsap.context(() => {
      gsap.fromTo(el, from, {
        ...to,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => ctx.revert();
  }, [animation]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
