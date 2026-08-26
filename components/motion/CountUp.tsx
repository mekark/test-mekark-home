"use client";

import { useEffect, useRef, useState } from "react";
import { animate } from "framer-motion";

type CountUpProps = {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  delay?: number;
  start: boolean;
  className?: string;
  useGrouping?: boolean;
};

export function CountUp({
  value,
  suffix = "",
  prefix = "",
  duration = 1.8,
  delay = 0,
  start,
  className,
  useGrouping = false,
}: CountUpProps) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!start || hasAnimated.current) return;

    hasAnimated.current = true;
    setCount(0);
    const controls = animate(0, value, {
      duration,
      delay,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setCount(Math.round(latest)),
    });

    return () => controls.stop();
  }, [start, value, duration, delay]);

  return (
    <span
      className={`inline-block min-w-[2ch] ${className ?? ""}`}
      aria-label={`${prefix}${value}${suffix}`}
    >
      {prefix}
      {useGrouping ? count.toLocaleString("en-US") : count}
      {suffix}
    </span>
  );
}
