"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
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
  navbarMobileItemReveal,
  navbarMobileItemsStagger,
  navbarMobileMenuReveal,
  navbarReveal,
} from "@/lib/motion-variants";

const EASE = [0.22, 1, 0.36, 1] as const;

function isExternalHref(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://");
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
}: {
  label: string;
  description?: string;
  compact?: boolean;
}) {
  return (
    <>
      <span
        aria-hidden
        className="absolute inset-y-2 left-0 w-0.5 origin-center scale-y-0 bg-mekark-red transition-transform duration-200 group-hover/link:scale-y-100"
      />
      <div className="flex items-start justify-between gap-2">
        <span
          className={`font-[family-name:var(--font-manrope)] font-semibold leading-snug tracking-[-0.01em] text-white/88 transition-colors duration-200 group-hover/link:text-mekark-white ${
            compact ? "text-[13px]" : "text-[14px]"
          }`}
        >
          {label}
        </span>
        <span
          aria-hidden
          className="mt-0.5 shrink-0 -translate-x-1 opacity-0 transition-all duration-200 group-hover/link:translate-x-0 group-hover/link:opacity-100"
        >
          <DropdownArrowIcon />
        </span>
      </div>
      {description ? (
        <span className="mt-1 block font-[family-name:var(--font-manrope)] text-[11px] leading-relaxed text-white/38 transition-colors duration-200 group-hover/link:text-white/55">
          {description}
        </span>
      ) : null}
    </>
  );
}

function dropdownLinkClassName(description?: string, compact?: boolean) {
  return `group/link relative block overflow-hidden rounded-sm border border-transparent transition-all duration-200 hover:border-white/10 hover:bg-white/[0.045] ${
    description
      ? "px-3.5 py-3 pl-[18px]"
      : compact
        ? "px-3 py-2.5 pl-[18px]"
        : "px-3.5 py-3 pl-[18px]"
  }`;
}

function ChevronDownIcon({ open }: { open?: boolean }) {
  return (
    <motion.svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.22, ease: EASE }}
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

function MenuIcon() {
  return (
    <motion.svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      aria-hidden
      initial={{ rotate: -90, opacity: 0 }}
      animate={{ rotate: 0, opacity: 1 }}
      exit={{ rotate: 90, opacity: 0 }}
      transition={{ duration: 0.22, ease: EASE }}
    >
      <path
        d="M3 6H19M3 11H19M3 16H19"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </motion.svg>
  );
}

function CloseIcon() {
  return (
    <motion.svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      aria-hidden
      initial={{ rotate: -90, opacity: 0 }}
      animate={{ rotate: 0, opacity: 1 }}
      exit={{ rotate: 90, opacity: 0 }}
      transition={{ duration: 0.22, ease: EASE }}
    >
      <path
        d="M5 5L17 17M17 5L5 17"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </motion.svg>
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
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
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
        <Link href={href} className={className}>
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
  const external = isExternalHref(href);
  const className = dropdownLinkClassName(description, compact);

  return (
    <motion.li variants={navbarDropdownItemReveal}>
      {external ? (
        <a href={href} className={className} {...EXTERNAL_LINK_PROPS}>
          <DropdownLinkContent
            label={label}
            description={description}
            compact={compact}
          />
        </a>
      ) : (
        <Link href={href} className={className}>
          <DropdownLinkContent
            label={label}
            description={description}
            compact={compact}
          />
        </Link>
      )}
    </motion.li>
  );
}

function DesktopDropdown({ item }: { item: NavItem }) {
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

  const panelWidth = hasRichContent
    ? "w-[min(92vw,560px)]"
    : columns === 3
      ? "w-[min(92vw,640px)]"
      : columns === 2
        ? "w-[min(92vw,420px)]"
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
          open ? "text-mekark-red" : "text-white/92 hover:text-mekark-red"
        }`}
        aria-haspopup="true"
        aria-expanded={open}
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
                hasRichContent ? "p-4 sm:p-5" : "p-3 pl-4 sm:p-3.5 sm:pl-5"
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
                    : columns > 1
                      ? `grid gap-1 ${columns === 3 ? "grid-cols-3" : "grid-cols-2"}`
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
  const external = isExternalHref(href);
  const className = dropdownLinkClassName(description);

  return (
    <motion.li variants={navbarDropdownItemReveal}>
      {external ? (
        <a
          href={href}
          onClick={onNavigate}
          className={className}
          {...EXTERNAL_LINK_PROPS}
        >
          <DropdownLinkContent label={label} description={description} />
        </a>
      ) : (
        <Link href={href} onClick={onNavigate} className={className}>
          <DropdownLinkContent label={label} description={description} />
        </Link>
      )}
    </motion.li>
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
  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-expanded={open}
      whileHover={{ scale: fullWidth ? 1.01 : 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`group relative overflow-hidden rounded-sm font-[family-name:var(--font-manrope)] text-[12px] font-semibold tracking-[0.04em] transition-shadow duration-300 ${
        fullWidth ? "w-full" : ""
      } ${
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
          className={`flex size-5 items-center justify-center rounded-full transition-colors ${
            open ? "bg-white/20 text-white" : "bg-mekark-red/10 text-mekark-red"
          }`}
        >
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
            <circle
              cx="5"
              cy="5"
              r="3.25"
              stroke="currentColor"
              strokeWidth="1.4"
            />
            <path
              d="M7.5 7.5L10 10"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        </span>
        <span>{short ? "Find solution" : "Find your solution"}</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden
          className={`transition-transform duration-300 ${
            open ? "rotate-90" : "group-hover:translate-x-0.5"
          }`}
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
  const isOpen = openLabel === item.label;
  const hasChildren = Boolean(item.children?.length || item.sections?.length);

  if (!hasChildren && item.href) {
    const external = isExternalHref(item.href);
    const className =
      "block border-b border-white/8 px-5 py-4 text-[15px] font-medium text-mekark-white";

    return (
      <motion.div variants={navbarMobileItemReveal}>
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
          <Link href={item.href} onClick={onNavigate} className={className}>
            {item.label}
          </Link>
        )}
      </motion.div>
    );
  }

  return (
    <motion.div variants={navbarMobileItemReveal} className="border-b border-white/8">
      <motion.button
        type="button"
        onClick={() => onToggle(item.label)}
        className="flex w-full items-center justify-between px-5 py-4 text-left text-[15px] font-medium text-mekark-white"
        aria-expanded={isOpen}
        whileTap={{ scale: 0.985 }}
      >
        {item.label}
        <ChevronDownIcon open={isOpen} />
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: EASE }}
            className="overflow-hidden bg-white/[0.03]"
          >
            <motion.div
              className="space-y-2 px-3 pb-3 pt-1"
              variants={navbarDropdownItemsStagger}
              initial="hidden"
              animate="visible"
            >
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [findOpen, setFindOpen] = useState(false);
  const [findStep, setFindStep] = useState<1 | 2>(1);
  const [industry, setIndustry] = useState<SolutionOption | null>(null);
  const [service, setService] = useState<SolutionOption | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen || findOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen, findOpen]);

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

  const openFind = () => {
    closeMobile();
    setFindOpen(true);
    setFindStep(1);
    setIndustry(null);
    setService(null);
  };

  const redirectToSolution = (href: string) => {
    closeFind();
    router.push(href, { scroll: false });
  };

  const barActive = scrolled || mobileOpen || findOpen || pathname !== "/";

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navbarReveal}
      className="fixed inset-x-0 top-0 z-50"
    >
      <motion.div
        animate={{
          backgroundColor: barActive ? "rgba(0,0,0,0.72)" : "rgba(0,0,0,0)",
          backdropFilter: barActive ? "blur(16px)" : "blur(0px)",
          boxShadow: barActive
            ? "0 1px 0 rgba(255,255,255,0.06)"
            : "0 0px 0px rgba(0,0,0,0)",
          borderBottomColor: barActive
            ? "rgba(255,255,255,0.08)"
            : "rgba(255,255,255,0)",
        }}
        transition={{ duration: 0.35, ease: EASE }}
        className="border-b"
      >
        <div className="flex h-[76px] w-full items-center justify-between gap-8 px-5 sm:h-[88px] sm:px-8 lg:px-10 xl:px-14">
          <motion.div variants={navbarLogoReveal} initial="hidden" animate="visible" className="shrink-0">
            <Link
              href="/"
              className="relative flex shrink-0 items-center drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]"
              aria-label="Mekark home"
              onClick={closeMobile}
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 24 }}
              >
                <Image
                  src="/images/LogoMekark.png"
                  alt="Mekark"
                  width={220}
                  height={60}
                  priority
                  className="h-11 w-auto sm:h-12 lg:h-[52px]"
                />
              </motion.div>
            </Link>
          </motion.div>

          <motion.nav
            className="ml-auto hidden items-center justify-end gap-0.5 xl:flex"
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
                    className="block px-2.5 py-2 font-[family-name:var(--font-manrope)] text-[12.5px] font-medium tracking-[0.04em] text-white/92 transition-colors [text-shadow:0_1px_10px_rgba(0,0,0,0.55)] hover:text-mekark-red lg:px-3"
                  >
                    {item.label}
                  </NavLinkMotion>
                </motion.div>
              ),
            )}

            <motion.div variants={navbarItemReveal} className="ml-4">
              <FindSolutionButton
                open={findOpen}
                onClick={() => (findOpen ? closeFind() : openFind())}
              />
            </motion.div>
          </motion.nav>

          <div className="ml-auto flex items-center gap-2 xl:hidden">
            <div className="hidden sm:block">
              <FindSolutionButton
                open={findOpen}
                short
                onClick={() => (findOpen ? closeFind() : openFind())}
              />
            </div>
            <motion.button
              type="button"
              className="flex size-11 min-h-11 min-w-11 items-center justify-center rounded-md text-mekark-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.08)" }}
              whileTap={{ scale: 0.92 }}
              onClick={() => {
                setFindOpen(false);
                setMobileOpen((open) => !open);
                setMobileExpanded(null);
              }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <CloseIcon key="close" />
                ) : (
                  <MenuIcon key="menu" />
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              variants={navbarMobileMenuReveal}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="overflow-hidden border-t border-white/10 bg-black/92 backdrop-blur-xl xl:hidden"
              aria-label="Mobile navigation"
            >
              <motion.div
                className="max-h-[calc(100dvh-76px)] overflow-y-auto sm:max-h-[calc(100dvh-88px)]"
                variants={navbarMobileItemsStagger}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={navbarMobileItemReveal} className="border-b border-white/8 px-5 py-4 sm:hidden">
                  <FindSolutionButton open={findOpen} onClick={openFind} fullWidth />
                </motion.div>
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
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.div>

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
  );
}
