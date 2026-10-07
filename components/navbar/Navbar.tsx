"use client";

import Image from "next/image";
import Link from "next/link";
import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { useNavigationLoading } from "@/components/ui/NavigationLoadingProvider";
import { AnimatePresence, motion } from "framer-motion";
import { FindYourSolutionPanel } from "@/components/navbar/FindYourSolutionPanel";
import {
  NAV_ITEMS,
  type NavItem,
  type SolutionOption,
} from "@/components/navbar/nav-data";
import {
  navbarDropdownItemReveal,
  navbarDropdownItemsStagger,
  navbarDropdownPanel,
  navbarItemReveal,
  navbarItemsStagger,
  navbarLogoReveal,
  navbarLogoRevealInstant,
  navbarReveal,
  navbarRevealInstant,
} from "@/lib/motion-variants";

const EASE = [0.22, 1, 0.36, 1] as const;

function isExternalHref(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://");
}

function normalizePath(path: string): string {
  const withoutHash = path.split("#")[0] ?? path;
  const withoutQuery = withoutHash.split("?")[0] ?? withoutHash;
  if (withoutQuery.length > 1 && withoutQuery.endsWith("/")) {
    return withoutQuery.slice(0, -1);
  }
  return withoutQuery || "/";
}

/** Exact match, or nested under href (e.g. /services/tensile under /services/tensile). */
function isPathActive(pathname: string, href: string): boolean {
  if (isExternalHref(href)) return false;
  const current = normalizePath(pathname);
  const target = normalizePath(href);
  if (target === "/") return current === "/";
  return current === target || current.startsWith(`${target}/`);
}

function isNavItemActive(pathname: string, item: NavItem): boolean {
  if (item.href && isPathActive(pathname, item.href)) return true;
  if (item.children?.some((child) => isPathActive(pathname, child.href))) {
    return true;
  }
  return Boolean(
    item.sections?.some((section) => {
      if (section.href && isPathActive(pathname, section.href)) return true;
      return section.children.some((child) =>
        isPathActive(pathname, child.href),
      );
    }),
  );
}

const EXTERNAL_LINK_PROPS = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

function DropdownArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden
      className="shrink-0 text-mekark-red"
    >
      <path
        d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DropdownLinkContent({
  label,
  description,
  compact,
  active,
}: {
  label: string;
  description?: string;
  compact?: boolean;
  active?: boolean;
}) {
  return (
    <>
      <span
        aria-hidden
        className="absolute inset-y-2 left-0 w-0.5 origin-center scale-y-0 bg-mekark-red transition-transform duration-200 group-hover/link:scale-y-100"
      />
      <div className="relative flex items-start pr-5">
        <span
          className={`font-[family-name:var(--font-manrope)] font-semibold leading-snug tracking-[-0.01em] transition-colors duration-200 group-hover/link:text-mekark-white ${
            compact ? "text-[13px] whitespace-nowrap" : "text-[14px]"
          } ${active ? "text-mekark-red" : "text-white/88"}`}
        >
          {label}
        </span>
        <span
          aria-hidden
          className="pointer-events-none absolute top-0.5 right-0 shrink-0 -translate-x-1 opacity-0 transition-all duration-200 group-hover/link:translate-x-0 group-hover/link:opacity-100"
        >
          <DropdownArrowIcon />
        </span>
      </div>
      {description ? (
        <span
          className={`mt-1 block font-[family-name:var(--font-manrope)] text-[11px] leading-relaxed transition-colors duration-200 group-hover/link:text-white/55 ${
            active ? "text-white/55" : "text-white/38"
          }`}
        >
          {description}
        </span>
      ) : null}
    </>
  );
}

function dropdownLinkClassName(
  description?: string,
  compact?: boolean,
  active?: boolean,
) {
  return `group/link relative block overflow-hidden rounded-sm border border-transparent transition-all duration-200 hover:border-white/10 hover:bg-white/[0.045] ${
    active ? "bg-white/[0.04]" : ""
  } ${
    description
      ? "px-3.5 py-3 pl-[18px]"
      : compact
        ? "px-3.5 py-2.5 pl-[18px]"
        : "px-3.5 py-3 pl-[18px]"
  }`;
}

/** Pages whose mobile navbar/footer render without motion. */
export const STATIC_MOBILE_PATHS = [
  "/resources/contact-us",
  "/projects/completed-projects",
  "/projects/ongoing-projects",
];

/** True on these pages in mobile view: navbar renders without any motion. */
const StaticNavContext = createContext(false);

function ChevronDownIcon({ open }: { open?: boolean }) {
  const isStatic = useContext(StaticNavContext);
  return (
    <motion.svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: isStatic ? 0 : 0.22, ease: EASE }}
      className="shrink-0"
    >
      <path
        d="M2.5 4.5L6 8L9.5 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}

function MobileNavExpandIcon({
  open,
  active,
}: {
  open?: boolean;
  active?: boolean;
}) {
  const isStatic = useContext(StaticNavContext);
  return (
    <motion.span
      className={`inline-flex size-8 shrink-0 items-center justify-center rounded-full transition-colors duration-200 ${
        isStatic ? "transition-none" : ""
      } ${
        open
          ? "bg-mekark-red/12 text-mekark-red"
          : active
            ? "bg-mekark-red/8 text-mekark-red"
            : "bg-white/[0.05] text-white/50"
      }`}
      animate={{ scale: open && !isStatic ? 1.02 : 1 }}
      transition={{ duration: isStatic ? 0 : 0.22, ease: EASE }}
    >
      <ChevronDownIcon open={open} />
    </motion.span>
  );
}

function AnimatedMenuIcon({ open }: { open: boolean }) {
  const isStatic = useContext(StaticNavContext);
  const line =
    "absolute left-0 h-[2px] w-full origin-center rounded-full bg-current";
  const transition = { duration: isStatic ? 0 : 0.28, ease: EASE };

  return (
    <span aria-hidden className="relative block h-[15px] w-[22px] shrink-0">
      <motion.span
        className={line}
        initial={false}
        animate={
          open
            ? { top: "50%", rotate: 45, y: "-50%" }
            : { top: 0, rotate: 0, y: 0 }
        }
        transition={transition}
      />
      <motion.span
        className={line}
        initial={false}
        animate={
          open
            ? { opacity: 0, scaleX: 0.35 }
            : { top: "50%", y: "-50%", opacity: 1, scaleX: 1 }
        }
        transition={
          isStatic
            ? transition
            : { duration: 0.2, ease: EASE, delay: open ? 0 : 0.03 }
        }
      />
      <motion.span
        className={line}
        initial={false}
        animate={
          open
            ? { top: "50%", rotate: -45, y: "-50%" }
            : { top: "100%", rotate: 0, y: "-100%" }
        }
        transition={
          isStatic ? transition : { ...transition, delay: open ? 0.02 : 0 }
        }
      />
    </span>
  );
}

function dropdownColumns(count: number): 1 | 2 | 3 {
  if (count >= 10) return 3;
  if (count >= 6) return 2;
  return 1;
}

function NavLinkMotion({
  href,
  children,
  className,
  active,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  active?: boolean;
}) {
  const external = isExternalHref(href);

  return (
    <motion.div
      className="relative"
      whileHover="hover"
      initial="rest"
      animate="rest"
    >
      {external ? (
        <a href={href} className={className} {...EXTERNAL_LINK_PROPS}>
          {children}
        </a>
      ) : (
        <Link
          href={href}
          prefetch={false}
          className={className}
          aria-current={active ? "page" : undefined}
        >
          {children}
        </Link>
      )}
      <motion.span
        className="absolute bottom-1 left-3 right-3 h-px origin-left bg-mekark-red"
        variants={{
          rest: { scaleX: 0, opacity: 0 },
          hover: { scaleX: 1, opacity: 1 },
        }}
        transition={{ duration: 0.25, ease: EASE }}
      />
    </motion.div>
  );
}

function DropdownLink({
  href,
  label,
  description,
  compact,
}: {
  href: string;
  label: string;
  description?: string;
  compact?: boolean;
}) {
  const pathname = usePathname();
  const active = isPathActive(pathname, href);
  const external = isExternalHref(href);
  const className = dropdownLinkClassName(description, compact, active);

  return (
    <motion.li variants={navbarDropdownItemReveal}>
      {external ? (
        <a href={href} className={className} {...EXTERNAL_LINK_PROPS}>
          <DropdownLinkContent
            label={label}
            description={description}
            compact={compact}
            active={active}
          />
        </a>
      ) : (
        <Link
          href={href}
          prefetch={false}
          className={className}
          aria-current={active ? "page" : undefined}
        >
          <DropdownLinkContent
            label={label}
            description={description}
            compact={compact}
            active={active}
          />
        </Link>
      )}
    </motion.li>
  );
}

function DesktopDropdown({ item }: { item: NavItem }) {
  const pathname = usePathname();
  const sectionActive = isNavItemActive(pathname, item);
  const [open, setOpen] = useState(false);
  const children = item.children ?? [];
  const sections = item.sections ?? [];
  const totalLinks =
    children.length +
    sections.reduce((sum, section) => sum + section.children.length, 0);
  const hasRichContent =
    children.some((child) => child.description) ||
    sections.some((section) =>
      section.children.some((child) => child.description),
    );
  const columns = hasRichContent ? 2 : dropdownColumns(totalLinks);
  const isCompactGrid = !hasRichContent && columns > 1;

  const panelWidth = hasRichContent
    ? "w-[min(92vw,560px)]"
    : columns === 3
      ? "w-[min(92vw,640px)]"
      : columns === 2
        ? "w-[min(92vw,520px)]"
        : "w-[min(92vw,260px)]";

  return (
    <motion.div
      variants={navbarItemReveal}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) {
          setOpen(false);
        }
      }}
    >
      <button
        type="button"
        className={`relative flex items-center gap-1.5 px-2.5 py-2 font-[family-name:var(--font-manrope)] text-[12.5px] font-medium tracking-[0.04em] transition-colors duration-200 [text-shadow:0_1px_10px_rgba(0,0,0,0.55)] lg:px-3 ${
          open || sectionActive
            ? "text-mekark-red"
            : "text-white/92 hover:text-mekark-red"
        }`}
        aria-haspopup="true"
        aria-expanded={open}
        aria-current={sectionActive ? "true" : undefined}
      >
        {item.label}
        <ChevronDownIcon open={open} />
        <span
          aria-hidden
          className={`absolute inset-x-2.5 -bottom-0.5 h-px origin-left bg-mekark-red transition-transform duration-200 lg:inset-x-3 ${
            open ? "scale-x-100" : "scale-x-0"
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute left-0 top-full z-50 translate-x-3 pt-4"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={navbarDropdownPanel}
          >
            <div
              aria-hidden
              className="absolute left-6 top-2.5 z-10 size-2.5 rotate-45 border-l border-t border-white/12 bg-[#0c0c0c]/92"
            />
            <motion.div
              className={`relative overflow-hidden rounded-sm border border-white/12 bg-[#0c0c0c]/92 shadow-[0_28px_64px_rgba(0,0,0,0.55)] backdrop-blur-2xl ${
                hasRichContent || isCompactGrid
                  ? "p-4 sm:p-5"
                  : "p-3 pl-4 sm:p-3.5 sm:pl-5"
              } ${panelWidth}`}
              variants={navbarDropdownItemsStagger}
              initial="hidden"
              animate="visible"
            >
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-mekark-red to-transparent"
              />
              <p className="mb-3 px-1 font-[family-name:var(--font-manrope)] text-[10px] font-semibold tracking-[0.22em] text-white/40 uppercase">
                {item.label}
              </p>
              <ul
                className={
                  hasRichContent
                    ? "grid grid-cols-1 gap-1.5 sm:grid-cols-2"
                    : isCompactGrid
                      ? `grid gap-x-5 gap-y-1.5 ${columns === 3 ? "grid-cols-3" : "grid-cols-2"}`
                      : "flex flex-col gap-1"
                }
              >
                {children.map((child) => (
                  <DropdownLink
                    key={child.href}
                    href={child.href}
                    label={child.label}
                    description={child.description}
                    compact={!hasRichContent}
                  />
                ))}
              </ul>
              {sections.map((section) => (
                <div
                  key={section.label}
                  className="mt-4 border-t border-white/8 pt-4"
                >
                  {section.href && section.children.length === 0 ? (
                    <ul>
                      <DropdownLink
                        href={section.href}
                        label={section.label}
                        description={section.description}
                      />
                    </ul>
                  ) : (
                    <>
                      <div className="mb-2.5 flex items-center gap-2 px-1">
                        <span aria-hidden className="h-px w-4 bg-mekark-red" />
                        <p className="font-[family-name:var(--font-manrope)] text-[10px] font-semibold tracking-[0.18em] text-mekark-red/80 uppercase">
                          {section.label}
                        </p>
                      </div>
                      <ul
                        className={
                          hasRichContent
                            ? "grid grid-cols-1 gap-1.5 sm:grid-cols-3"
                            : "grid grid-cols-2 gap-1 lg:grid-cols-3"
                        }
                      >
                        {section.children.map((child) => (
                          <DropdownLink
                            key={child.href}
                            href={child.href}
                            label={child.label}
                            description={child.description}
                            compact={!hasRichContent}
                          />
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function MobileDropdownLink({
  href,
  label,
  description,
  onNavigate,
}: {
  href: string;
  label: string;
  description?: string;
  onNavigate: () => void;
}) {
  const pathname = usePathname();
  const active = isPathActive(pathname, href);
  const external = isExternalHref(href);
  const className = dropdownLinkClassName(description, false, active);

  return (
    <li>
      {external ? (
        <a
          href={href}
          onClick={onNavigate}
          className={className}
          {...EXTERNAL_LINK_PROPS}
        >
          <DropdownLinkContent
            label={label}
            description={description}
            active={active}
          />
        </a>
      ) : (
        <Link
          href={href}
          prefetch={false}
          onClick={onNavigate}
          className={className}
          aria-current={active ? "page" : undefined}
        >
          <DropdownLinkContent
            label={label}
            description={description}
            active={active}
          />
        </Link>
      )}
    </li>
  );
}

function FindSolutionButton({
  open,
  onClick,
  short,
  fullWidth,
}: {
  open: boolean;
  onClick: () => void;
  short?: boolean;
  fullWidth?: boolean;
}) {
  const isStatic = useContext(StaticNavContext);
  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-expanded={open}
      whileHover={isStatic ? undefined : { scale: fullWidth ? 1.01 : 1.02 }}
      whileTap={isStatic ? undefined : { scale: 0.98 }}
      className={`group relative overflow-hidden rounded-sm font-[family-name:var(--font-manrope)] text-[12px] font-semibold tracking-[0.04em] transition-shadow duration-300 ${
        isStatic ? "transition-none" : ""
      } ${fullWidth ? "w-full" : ""} ${
        open
          ? "bg-mekark-red text-white shadow-[0_8px_24px_rgba(237,28,36,0.45)]"
          : "bg-white text-[#0a0a0a] shadow-[0_4px_16px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_28px_rgba(237,28,36,0.35)]"
      }`}
    >
      <span
        aria-hidden
        className={`absolute inset-y-0 left-0 w-1 transition-colors ${
          open ? "bg-white/40" : "bg-mekark-red"
        }`}
      />
      <span className="relative flex items-center gap-2 px-4 py-2.5 pl-5">
        <span
          aria-hidden
          className={`flex size-7 items-center justify-center rounded-full transition-colors ${
            open ? "bg-white/20 text-white" : "bg-mekark-red/10 text-mekark-red"
          }`}
        >
          <svg width="17" height="17" viewBox="0 0 16 16" fill="none">
            <rect
              x="2.75"
              y="2.75"
              width="10.5"
              height="11.5"
              rx="1.75"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M5.75 2.75V2a.75.75 0 0 1 .75-.75h3A.75.75 0 0 1 10.25 2v.75"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M5.5 8.5l1.75 1.75L10.75 6.75"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span>{short ? "Get quote" : "Get free quote"}</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden
          className={`transition-transform duration-300 ${
            isStatic ? "transition-none" : ""
          } ${open ? "rotate-90" : "group-hover:translate-x-0.5"}`}
        >
          <path
            d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {!open && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-mekark-red/10 to-transparent transition-transform duration-500 group-hover:translate-x-[120%]"
        />
      )}
    </motion.button>
  );
}

function MobileNavItem({
  item,
  openLabel,
  onToggle,
  onNavigate,
}: {
  item: NavItem;
  openLabel: string | null;
  onToggle: (label: string) => void;
  onNavigate: () => void;
}) {
  const pathname = usePathname();
  const sectionActive = isNavItemActive(pathname, item);
  const isOpen = openLabel === item.label;
  const hasChildren = Boolean(item.children?.length || item.sections?.length);
  const noTransition = useContext(StaticNavContext) ? "transition-none" : "";

  if (!hasChildren && item.href) {
    const external = isExternalHref(item.href);
    const active = isPathActive(pathname, item.href);
    const className = `block border-b border-white/8 px-5 py-4 text-[15px] font-medium transition-colors ${noTransition} ${
      active ? "text-mekark-red" : "text-mekark-white"
    }`;

    return (
      <div>
        {external ? (
          <a
            href={item.href}
            onClick={onNavigate}
            className={className}
            {...EXTERNAL_LINK_PROPS}
          >
            {item.label}
          </a>
        ) : (
          <Link
            href={item.href}
            prefetch={false}
            onClick={onNavigate}
            className={className}
            aria-current={active ? "page" : undefined}
          >
            {item.label}
          </Link>
        )}
      </div>
    );
  }

  return (
    <div className="border-b border-white/8">
      <button
        type="button"
        onClick={() => onToggle(item.label)}
        className={`flex w-full items-center justify-between border-l-2 py-4 pr-5 pl-[18px] text-left text-[15px] font-medium transition-all duration-200 ${noTransition} ${
          isOpen
            ? "border-mekark-red bg-white/[0.025] text-mekark-white"
            : sectionActive
              ? "border-transparent text-mekark-red"
              : "border-transparent text-mekark-white"
        }`}
        aria-expanded={isOpen}
        aria-current={sectionActive ? "true" : undefined}
      >
        <span className="pr-3 tracking-[-0.01em]">{item.label}</span>
        <MobileNavExpandIcon open={isOpen} active={sectionActive} />
      </button>

      {isOpen ? (
        <div className="border-l-2 border-mekark-red/35 bg-white/[0.03]">
          <div className="space-y-2 px-3 pb-3 pt-1">
            {item.children && item.children.length > 0 && (
              <ul className="space-y-1">
                {item.children.map((child) => (
                  <MobileDropdownLink
                    key={child.href}
                    href={child.href}
                    label={child.label}
                    description={child.description}
                    onNavigate={onNavigate}
                  />
                ))}
              </ul>
            )}
            {item.sections?.map((section) => (
              <div
                key={section.label}
                className="mt-2 border-t border-white/8 pt-2"
              >
                {section.href && section.children.length === 0 ? (
                  <ul className="space-y-1">
                    <MobileDropdownLink
                      href={section.href}
                      label={section.label}
                      description={section.description}
                      onNavigate={onNavigate}
                    />
                  </ul>
                ) : (
                  <>
                    <div className="mb-1.5 flex items-center gap-2 px-3">
                      <span aria-hidden className="h-px w-4 bg-mekark-red" />
                      <p className="font-[family-name:var(--font-manrope)] text-[10px] font-semibold tracking-[0.18em] text-mekark-red/80 uppercase">
                        {section.label}
                      </p>
                    </div>
                    <ul className="space-y-1">
                      {section.children.map((child) => (
                        <MobileDropdownLink
                          key={child.href}
                          href={child.href}
                          label={child.label}
                          description={child.description}
                          onNavigate={onNavigate}
                        />
                      ))}
                    </ul>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const { startNavigation } = useNavigationLoading();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [findOpen, setFindOpen] = useState(false);
  const [findStep, setFindStep] = useState<1 | 2>(1);
  const [industry, setIndustry] = useState<SolutionOption | null>(null);
  const [service, setService] = useState<SolutionOption | null>(null);
  const [isMobileViewport, setIsMobileViewport] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useLayoutEffect(() => {
    const mobileNav = window.matchMedia("(max-width: 1023px)");
    const syncViewport = () => setIsMobileViewport(mobileNav.matches);
    syncViewport();
    mobileNav.addEventListener("change", syncViewport);
    return () => mobileNav.removeEventListener("change", syncViewport);
  }, []);

  useEffect(() => {
    const desktopNav = window.matchMedia("(min-width: 1024px)");

    const syncMobileNav = (event?: MediaQueryListEvent) => {
      if (event?.matches ?? desktopNav.matches) {
        setMobileOpen(false);
        setMobileExpanded(null);
      }
    };

    syncMobileNav();
    desktopNav.addEventListener("change", syncMobileNav);
    return () => desktopNav.removeEventListener("change", syncMobileNav);
  }, []);

  useEffect(() => {
    const shouldLock = mobileOpen || findOpen;
    if (!shouldLock) return;

    const scrollY = window.scrollY;
    const { style } = document.body;

    style.position = "fixed";
    style.top = `-${scrollY}px`;
    style.left = "0";
    style.right = "0";
    style.width = "100%";
    style.overflow = "hidden";

    return () => {
      style.position = "";
      style.top = "";
      style.left = "";
      style.right = "";
      style.width = "";
      style.overflow = "";
      requestAnimationFrame(() => {
        window.scrollTo(0, scrollY);
      });
    };
  }, [mobileOpen, findOpen]);

  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
    setFindOpen(false);
    setFindStep(1);
    setIndustry(null);
    setService(null);
  }, [pathname]);

  useEffect(() => {
    if (!findOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeFind();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [findOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileExpanded(null);
  };

  const closeFind = () => {
    setFindOpen(false);
    setFindStep(1);
    setIndustry(null);
    setService(null);
  };

  // The solution-matcher panel is bypassed: the CTA goes straight to the form page.
  const goToQuoteForm = () => {
    closeMobile();
    closeFind();
    startNavigation();
    router.push("/enquiry/form");
  };

  const redirectToSolution = (href: string) => {
    closeFind();
    startNavigation();
    router.push(href, { scroll: false });
  };

  const barActive = scrolled || mobileOpen || findOpen || pathname !== "/";
  const homeMobileLightNav =
    pathname === "/" &&
    isMobileViewport &&
    !scrolled &&
    !mobileOpen &&
    !findOpen;
  const disableNavEnterAnimation = isMobileViewport;
  const isContactPage = pathname === "/resources/contact-us";
  const isStaticMobilePage = STATIC_MOBILE_PATHS.includes(pathname);
  const staticNav = isStaticMobilePage && isMobileViewport;
  const solidContactNav = isContactPage && staticNav && !homeMobileLightNav;
  // Before the viewport is measured, force the contact navbar visible and still.
  const contactStaticClass = isStaticMobilePage
    ? "max-lg:!opacity-100 max-lg:![transform:none]"
    : "";

  return (
    <StaticNavContext.Provider value={staticNav}>
      <motion.header
        initial={disableNavEnterAnimation ? "visible" : "hidden"}
        animate="visible"
        variants={disableNavEnterAnimation ? navbarRevealInstant : navbarReveal}
        className={`fixed inset-x-0 top-0 z-50 ${contactStaticClass}`}
      >
        <motion.div
          initial={isStaticMobilePage ? false : undefined}
          animate={{
            backgroundColor: homeMobileLightNav
              ? "rgba(255,255,255,1)"
              : solidContactNav
                ? "rgba(0,0,0,1)"
                : barActive
                  ? "rgba(0,0,0,0.72)"
                  : "rgba(0,0,0,0)",
            backdropFilter: homeMobileLightNav
              ? "blur(0px)"
              : solidContactNav
                ? "blur(0px)"
                : barActive
                  ? "blur(16px)"
                  : "blur(0px)",
            boxShadow: homeMobileLightNav
              ? "0 1px 0 rgba(0,0,0,0.08)"
              : barActive
                ? "0 1px 0 rgba(255,255,255,0.06)"
                : "0 0px 0px rgba(0,0,0,0)",
            borderBottomColor: homeMobileLightNav
              ? "rgba(0,0,0,0.08)"
              : barActive
                ? "rgba(255,255,255,0.08)"
                : "rgba(255,255,255,0)",
          }}
          transition={{
            duration: staticNav ? 0 : disableNavEnterAnimation ? 0.15 : 0.35,
            ease: EASE,
          }}
          className="border-b"
        >
          <div className="flex h-[60px] w-full items-center justify-between gap-8 px-5 sm:px-8 lg:px-10 xl:px-14">
            <motion.div
              variants={
                disableNavEnterAnimation
                  ? navbarLogoRevealInstant
                  : navbarLogoReveal
              }
              initial={disableNavEnterAnimation ? "visible" : "hidden"}
              animate="visible"
              className={`shrink-0 ${contactStaticClass}`}
            >
              <Link
                href="/"
                // Prefetching "/" pulls in the whole home page bundle on load.
                prefetch={isStaticMobilePage ? false : undefined}
                className={`relative flex shrink-0 items-center ${
                  homeMobileLightNav
                    ? ""
                    : "drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]"
                }`}
                aria-label="Mekark home"
                onClick={closeMobile}
              >
                <motion.div
                  whileHover={staticNav ? undefined : { scale: 1.03 }}
                  whileTap={staticNav ? undefined : { scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 24 }}
                >
                  <Image
                    src="/images/LogoMekark.webp"
                    alt="Mekark"
                    width={220}
                    height={60}
                    priority
                    className="h-8 w-auto sm:h-9 lg:h-11"
                  />
                </motion.div>
              </Link>
            </motion.div>

            <motion.nav
              className="ml-auto hidden items-center justify-end gap-0.5 lg:flex"
              aria-label="Main navigation"
              variants={navbarItemsStagger}
              initial="hidden"
              animate="visible"
            >
              {NAV_ITEMS.map((item) =>
                item.children?.length || item.sections?.length ? (
                  <DesktopDropdown key={item.label} item={item} />
                ) : (
                  <motion.div key={item.label} variants={navbarItemReveal}>
                    <NavLinkMotion
                      href={item.href ?? "/"}
                      active={isPathActive(pathname, item.href ?? "/")}
                      className={`block px-2.5 py-2 font-[family-name:var(--font-manrope)] text-[12.5px] font-medium tracking-[0.04em] transition-colors [text-shadow:0_1px_10px_rgba(0,0,0,0.55)] hover:text-mekark-red lg:px-3 ${
                        isPathActive(pathname, item.href ?? "/")
                          ? "text-mekark-red"
                          : "text-white/92"
                      }`}
                    >
                      {item.label}
                    </NavLinkMotion>
                  </motion.div>
                ),
              )}

              <motion.div variants={navbarItemReveal} className="ml-4">
                <FindSolutionButton open={findOpen} onClick={goToQuoteForm} />
              </motion.div>
            </motion.nav>

            <div className="ml-auto flex items-center gap-2 lg:hidden">
              <div className="hidden sm:block">
                <FindSolutionButton
                  open={findOpen}
                  short
                  onClick={goToQuoteForm}
                />
              </div>
              <motion.button
                type="button"
                className={`flex size-10 min-h-10 min-w-10 items-center justify-center rounded-sm transition-all duration-200 ${
                  staticNav ? "transition-none" : ""
                } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mekark-red/40 ${
                  mobileOpen
                    ? "bg-mekark-red/10 text-mekark-red ring-1 ring-mekark-red/20"
                    : homeMobileLightNav
                      ? "text-[#111] hover:bg-black/[0.05] hover:text-mekark-red active:bg-black/[0.08]"
                      : "text-white hover:bg-white/10 hover:text-mekark-red active:bg-white/[0.14]"
                }`}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                whileTap={staticNav ? undefined : { scale: 0.95 }}
                onClick={() => {
                  setFindOpen(false);
                  setMobileOpen((open) => !open);
                  setMobileExpanded(null);
                }}
              >
                <AnimatedMenuIcon open={mobileOpen} />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {mobileOpen ? (
          <nav
            className="fixed inset-x-0 top-[60px] bottom-0 z-50 overflow-y-auto overscroll-contain border-t border-white/10 bg-[#0a0a0a] lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="pb-[max(1rem,env(safe-area-inset-bottom))]">
              <div className="border-b border-white/8 px-5 py-4 sm:hidden">
                <FindSolutionButton
                  open={findOpen}
                  onClick={goToQuoteForm}
                  fullWidth
                />
              </div>
              {NAV_ITEMS.map((item) => (
                <MobileNavItem
                  key={item.label}
                  item={item}
                  openLabel={mobileExpanded}
                  onToggle={(label) =>
                    setMobileExpanded((current) =>
                      current === label ? null : label,
                    )
                  }
                  onNavigate={closeMobile}
                />
              ))}
            </div>
          </nav>
        ) : null}

        <div className="absolute inset-x-0 top-full">
          <AnimatePresence>
            {findOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.22, ease: EASE }}
              >
                <FindYourSolutionPanel
                  step={findStep}
                  industry={industry}
                  service={service}
                  onSelectIndustry={(option) => {
                    setIndustry(option);
                    setService(null);
                    setFindStep(2);
                  }}
                  onSelectService={(option) => setService(option)}
                  onBack={() => {
                    setFindStep(1);
                    setService(null);
                  }}
                  onClose={closeFind}
                  onRedirect={redirectToSolution}
                />
                <button
                  type="button"
                  aria-label="Close find your solution"
                  className="hidden h-[40vh] w-full cursor-default bg-gradient-to-b from-black/45 via-black/25 to-transparent lg:block"
                  onClick={closeFind}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </StaticNavContext.Provider>
  );
}
