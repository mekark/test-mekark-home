"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Mounts children (and so hydrates them) only once the placeholder is close to
 * the viewport, keeping below-the-fold client components out of initial load.
 */
export function RenderWhenNearViewport({
  children,
  minHeight = 700,
  rootMargin = "800px",
}: {
  children: ReactNode;
  minHeight?: number;
  rootMargin?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin]);

  if (visible) return <>{children}</>;
  return <div ref={ref} style={{ minHeight }} aria-hidden />;
}
