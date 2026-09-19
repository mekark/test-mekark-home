export function shouldPlayVideo(): boolean {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return false;
  }
  const connection = (
    navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    }
  ).connection;
  if (connection?.saveData) return false;
  if (
    connection?.effectiveType === "slow-2g" ||
    connection?.effectiveType === "2g"
  ) {
    return false;
  }
  return true;
}

export function releaseVideo(video: HTMLVideoElement | null) {
  if (!video) return;
  video.pause();
  video.removeAttribute("src");
  video.load();
}

export function scheduleHeroVideoLoad(
  delayMs: number,
  onLoad: () => void,
): () => void {
  let cancelled = false;
  let idleId: number | undefined;

  const timeoutId = window.setTimeout(() => {
    if (cancelled) return;

    const run = () => {
      if (!cancelled) onLoad();
    };

    if (typeof requestIdleCallback !== "undefined") {
      idleId = requestIdleCallback(run, { timeout: 1500 });
    } else {
      run();
    }
  }, delayMs);

  return () => {
    cancelled = true;
    window.clearTimeout(timeoutId);
    if (idleId !== undefined && typeof cancelIdleCallback !== "undefined") {
      cancelIdleCallback(idleId);
    }
  };
}
