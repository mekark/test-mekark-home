"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

/** Figma service canvas width (1920). */
const DESIGN_WIDTH = 1920;

/**
 * Scales the 1920px Figma layout to fit laptop / monitor viewports.
 * Below 1024px, content renders at natural width (existing mobile layouts).
 *
 * Use with large-desktop (`lg:`) styles only — do not also apply PEB iMac
 * `xl:` shrinks inside this wrapper (that double-shrinks the page).
 *
 * `transform: scale()` does not shrink layout space — we pull the leftover
 * height back with a negative margin so there is no white gap after the footer.
 */
export default function DesignScale({ children }: { children: ReactNode }) {
  const innerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [offsetX, setOffsetX] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  const measure = useCallback(() => {
    const vw = window.innerWidth;
    const desktop = vw >= 1024;
    setIsDesktop(desktop);

    if (!desktop) {
      setScale(1);
      setOffsetX(0);
      setContentHeight(0);
      return;
    }

    const nextScale = Math.min(1, vw / DESIGN_WIDTH);
    setScale(nextScale);
    setOffsetX(vw > DESIGN_WIDTH ? (vw - DESIGN_WIDTH) / 2 : 0);

    const el = innerRef.current;
    if (el) {
      setContentHeight(el.scrollHeight);
    }
  }, []);

  useLayoutEffect(() => {
    measure();
  }, [measure]);

  useEffect(() => {
    window.addEventListener("resize", measure);

    const el = innerRef.current;
    const ro =
      el && typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(() => measure())
        : null;
    if (el && ro) ro.observe(el);

    const t1 = window.setTimeout(measure, 100);
    const t2 = window.setTimeout(measure, 500);

    return () => {
      window.removeEventListener("resize", measure);
      ro?.disconnect();
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [measure]);

  const marginBottom =
    isDesktop && contentHeight > 0 && scale < 1
      ? contentHeight * (scale - 1)
      : 0;

  return (
    <div className="relative w-full overflow-x-hidden bg-white">
      <div
        ref={innerRef}
        className={isDesktop ? "origin-top-left will-change-transform" : undefined}
        style={
          isDesktop
            ? ({
                width: DESIGN_WIDTH,
                transform: `translateX(${offsetX}px) scale(${scale})`,
                marginBottom,
                "--ds-scale": scale,
              } as CSSProperties)
            : undefined
        }
      >
        {children}
      </div>
    </div>
  );
}
