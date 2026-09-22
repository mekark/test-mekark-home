"use client";

import { useEffect, useState } from "react";

const DESIGN_WIDTH = 1920;

export function useDesignScale() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const vw = window.innerWidth;
      if (vw <= DESIGN_WIDTH) {
        setScale(1);
      } else {
        setScale(vw / DESIGN_WIDTH);
      }
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return scale;
}
