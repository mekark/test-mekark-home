"use client";

import {
  createContext,
  Suspense,
  useCallback,
  useContext,
  useEffect,
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

  const startNavigation = useCallback(() => {
    setIsNavigating(true);
  }, []);

  const completeNavigation = useCallback(() => {
    setIsNavigating(false);
  }, []);

  useEffect(() => {
    completeNavigation();
  }, [pathname, completeNavigation]);

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

      setIsNavigating(true);
    };

    const handlePopState = () => {
      setIsNavigating(true);
    };

    document.addEventListener("click", handleClick, true);
    window.addEventListener("popstate", handlePopState);

    return () => {
      document.removeEventListener("click", handleClick, true);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [pathname]);

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
