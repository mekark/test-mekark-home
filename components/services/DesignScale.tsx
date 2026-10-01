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

type DesignScaleMode = "full" | "ultrawide";

/**
 * Scales the 1920px Figma layout to fit the viewport width on desktop.
 * Below 1024px, content renders at natural width (existing mobile layouts).
 *
 * Scales down on laptops and up on ultrawide monitors so the canvas always
 * spans edge-to-edge — no centered 1920px column with side gutters.
 *
 * Use with large-desktop (`lg:`) styles only — do not also apply PEB iMac
 * `xl:` shrinks inside this wrapper (that double-shrinks the page).
 *
 * `transform: scale()` does not change layout space — the wrapper gets an
 * explicit scaled height so there is no gap (or footer overlap) after the block.
 */
export default function DesignScale({
  children,
  mode = "full",
}: {
  children: ReactNode;
  /** "full" scales on all desktop widths; "ultrawide" only scales above 1920px. */
  mode?: DesignScaleMode;
}) {
  const innerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [contentHeight, setContentHeight] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  const measure = useCallback(() => {
    const vw = window.innerWidth;
    const desktop = vw >= 1024;
    setIsDesktop(desktop);

    if (!desktop) {
      setScale(1);
      setContentHeight(0);
      return;
    }

    if (mode === "ultrawide" && vw <= DESIGN_WIDTH) {
      setScale(1);
    } else {
      setScale(vw / DESIGN_WIDTH);
    }

    const el = innerRef.current;
    if (el) {
      setContentHeight(el.scrollHeight);
    }
  }, [mode]);

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

  const useScaling = isDesktop && (mode === "full" || scale !== 1);
  const scaledHeight =
    useScaling && contentHeight > 0 && scale !== 1
      ? contentHeight * scale
      : undefined;
  const scaledWidth = useScaling ? DESIGN_WIDTH * scale : undefined;

  return (
    <div
      className={`relative w-full ${
        /* clip (not hidden): hides x overflow without creating a nested scrollport */
        useScaling ? "overflow-x-clip bg-white" : "bg-transparent"
      }`}
    >
      {useScaling ? (
        <div
          className="relative"
          style={{
            width: scaledWidth,
            maxWidth: "100%",
            height: scaledHeight,
          }}
        >
          <div
            ref={innerRef}
            className="origin-top-left will-change-transform"
            style={
              {
                width: DESIGN_WIDTH,
                transform: `scale(${scale})`,
                "--ds-scale": scale,
              } as CSSProperties
            }
          >
            {children}
          </div>
        </div>
      ) : (
        <div ref={innerRef}>{children}</div>
      )}
    </div>
  );
}
