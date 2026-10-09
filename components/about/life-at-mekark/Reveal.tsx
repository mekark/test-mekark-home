"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

/**
 * Container that triggers its `Reveal` descendants together: on load when
 * `immediate`, otherwise once when it scrolls into view (90px inset). Mirrors
 * the original framer-motion staggerContainer + whileInView behaviour.
 * Desktop/tablet only, see .lam-group in globals.css.
 */
export function RevealGroup({
  immediate = false,
  className = "",
  children,
}: {
  immediate?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(immediate);

  useEffect(() => {
    if (immediate) {
      setInView(true);
      return;
    }
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -90px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [immediate]);

  return (
    <div ref={ref} data-in={inView} className={`lam-group ${className}`}>
      {children}
    </div>
  );
}

/** Fades up (40px, 0.7s) after `delay` seconds once its RevealGroup triggers. */
export function Reveal({
  as: Tag = "div",
  delay = 0,
  className = "",
  children,
}: {
  as?: "div" | "article" | "h1" | "p";
  delay?: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag
      style={{ "--lam-delay": `${delay}s` } as CSSProperties}
      className={`lam-reveal ${className}`}
    >
      {children}
    </Tag>
  );
}
