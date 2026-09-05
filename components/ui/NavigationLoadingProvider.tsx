"use client";

import {
  createContext,
  Suspense,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { CircularProgress } from "@/components/ui/CircularProgress";

type NavigationLoadingContextValue = {
  startNavigation: () => void;
};

const NavigationLoadingContext =
  createContext<NavigationLoadingContextValue | null>(null);

/** Clear a stuck overlay if the route never changes (e.g. hash-only history). */
const NAVIGATION_LOADING_TIMEOUT_MS = 8_000;

function isInternalNavigation(href: string, pathname: string) {
  if (
    !href ||
    href.startsWith("#") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("javascript:")
  ) {
    return false;
  }

  try {
    const url = new URL(href, window.location.href);
    if (url.origin !== window.location.origin) {
      return false;
    }

    const currentSearch = window.location.search;
    return url.pathname !== pathname || url.search !== currentSearch;
  } catch {
    return false;
  }
}

function NavigationSearchParamsSync({
  onNavigateComplete,
}: {
  onNavigateComplete: () => void;
}) {
  const searchParams = useSearchParams();

  useEffect(() => {
    onNavigateComplete();
  }, [searchParams, onNavigateComplete]);

  return null;
}

export function NavigationLoadingProvider({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearNavigationTimeout = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const completeNavigation = useCallback(() => {
    clearNavigationTimeout();
    setIsNavigating(false);
  }, [clearNavigationTimeout]);

  const startNavigation = useCallback(() => {
    setIsNavigating(true);
    clearNavigationTimeout();
    timeoutRef.current = setTimeout(() => {
      setIsNavigating(false);
      timeoutRef.current = null;
    }, NAVIGATION_LOADING_TIMEOUT_MS);
  }, [clearNavigationTimeout]);

  useEffect(() => {
    completeNavigation();
  }, [pathname, completeNavigation]);

  useEffect(() => {
    return () => clearNavigationTimeout();
  }, [clearNavigationTimeout]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const anchor = (event.target as HTMLElement | null)?.closest("a");
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) {
        return;
      }

      const href = anchor.getAttribute("href");
      if (!href || !isInternalNavigation(href, pathname)) {
        return;
      }

      startNavigation();
    };

    const handlePopState = () => {
      // Hash-only history changes keep the same pathname — don't block the UI.
      if (window.location.pathname === pathname) {
        completeNavigation();
        return;
      }

      startNavigation();
    };

    document.addEventListener("click", handleClick, true);
    window.addEventListener("popstate", handlePopState);

    return () => {
      document.removeEventListener("click", handleClick, true);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [pathname, startNavigation, completeNavigation]);

  return (
    <NavigationLoadingContext.Provider value={{ startNavigation }}>
      <Suspense fallback={null}>
        <NavigationSearchParamsSync onNavigateComplete={completeNavigation} />
      </Suspense>
      {children}
      {isNavigating ? (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-white/75 backdrop-blur-[1px]"
          aria-busy="true"
          aria-live="assertive"
        >
          <CircularProgress size={56} strokeWidth={4} />
        </div>
      ) : null}
    </NavigationLoadingContext.Provider>
  );
}

export function useNavigationLoading() {
  const context = useContext(NavigationLoadingContext);

  if (!context) {
    throw new Error(
      "useNavigationLoading must be used within NavigationLoadingProvider",
    );
  }

  return context;
}
