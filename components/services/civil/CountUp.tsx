"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

const defaultFormat = (value: number) => String(value);

type CountUpProps = {
  end: number;
  duration?: number;
  delay?: number;
  decimals?: number;
  format?: (value: number) => string;
  children: (display: string) => ReactNode;
};

export default function CountUp({
  end,
  duration = 2,
  delay = 0,
  decimals = 0,
  format = defaultFormat,
  children,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const formatRef = useRef(format);
  formatRef.current = format;

  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [display, setDisplay] = useState(() => formatRef.current(0));

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, end, {
      duration,
      delay,
      ease: "easeOut",
      onUpdate: (value) => {
        const rounded =
          decimals > 0
            ? Number(value.toFixed(decimals))
            : Math.round(value);
        setDisplay(formatRef.current(rounded));
      },
    });

    return () => controls.stop();
  }, [isInView, end, duration, delay, decimals]);

  return (
    <span ref={ref} className="inline">
      {children(display)}
    </span>
  );
}
