"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_ITEMS, type NavItem } from "@/components/navbar/nav-data";
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
        <a href={href} className={className}>
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

function DesktopDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const children = item.children ?? [];
  const columns = dropdownColumns(children.length);

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
      <motion.button
        type="button"
        className="relative flex items-center gap-1.5 px-3 py-2 text-[13px] font-medium tracking-wide text-mekark-white/90"
        aria-haspopup="true"
        aria-expanded={open}
        whileHover={{ color: "#ed1c24" }}
        transition={{ duration: 0.2 }}
      >
        {item.label}
        <ChevronDownIcon open={open} />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={navbarDropdownPanel}
          >
            <motion.div
              className={`min-w-[220px] rounded-xl border border-white/10 bg-[#0a0a0a]/95 p-2 shadow-[0_24px_48px_rgba(0,0,0,0.45)] backdrop-blur-xl ${
                columns === 3
                  ? "w-[min(92vw,720px)]"
                  : columns === 2
                    ? "w-[min(92vw,480px)]"
                    : "w-[min(92vw,280px)]"
              }`}
              variants={navbarDropdownItemsStagger}
              initial="hidden"
              animate="visible"
            >
              <ul
                className={
                  columns > 1
                    ? `grid gap-0.5 ${columns === 3 ? "grid-cols-3" : "grid-cols-2"}`
                    : "flex flex-col gap-0.5"
                }
              >
                {children.map((child) => (
                  <motion.li key={child.href} variants={navbarDropdownItemReveal}>
                    <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.18 }}>
                      <Link
                        href={child.href}
                        className="block rounded-lg px-3 py-2.5 text-[13px] leading-snug text-mekark-white/85 transition-colors hover:bg-white/5 hover:text-mekark-red"
                      >
                        {child.label}
                      </Link>
                    </motion.div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
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
  const hasChildren = Boolean(item.children?.length);

  if (!hasChildren && item.href) {
    const external = isExternalHref(item.href);
    const className =
      "block border-b border-white/8 px-5 py-4 text-[15px] font-medium text-mekark-white";

    return (
      <motion.div variants={navbarMobileItemReveal}>
        {external ? (
          <a href={item.href} onClick={onNavigate} className={className}>
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
        {isOpen && item.children && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: EASE }}
            className="overflow-hidden bg-white/[0.03]"
          >
            <motion.ul
              className="space-y-0.5 px-3 pb-3 pt-1"
              variants={navbarDropdownItemsStagger}
              initial="hidden"
              animate="visible"
            >
              {item.children.map((child) => (
                <motion.li key={child.href} variants={navbarDropdownItemReveal}>
                  <motion.div whileTap={{ scale: 0.98 }}>
                    <Link
                      href={child.href}
                      onClick={onNavigate}
                      className="block min-h-11 rounded-lg px-3 py-3 text-[14px] text-mekark-silver transition-colors hover:bg-white/5 hover:text-mekark-red"
                    >
                      {child.label}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileExpanded(null);
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navbarReveal}
      className="fixed inset-x-0 top-0 z-50"
    >
      <motion.div
        animate={{
          backgroundColor:
            scrolled || mobileOpen ? "rgba(0,0,0,0.9)" : "rgba(0,0,0,0)",
          boxShadow:
            scrolled || mobileOpen
              ? "0 8px 32px rgba(0,0,0,0.35)"
              : "0 0px 0px rgba(0,0,0,0)",
          borderBottomColor:
            scrolled || mobileOpen ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0)",
        }}
        transition={{ duration: 0.3, ease: EASE }}
        className={`border-b backdrop-blur-xl ${
          scrolled || mobileOpen
            ? "backdrop-blur-xl"
            : "bg-gradient-to-b from-black/70 to-transparent backdrop-blur-[2px]"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between gap-6 px-4 sm:h-[80px] sm:px-6 lg:px-10">
          <motion.div variants={navbarLogoReveal} initial="hidden" animate="visible">
            <Link
              href="/"
              className="relative flex shrink-0 items-center"
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
                  width={148}
                  height={40}
                  priority
                  className="h-8 w-auto sm:h-9"
                />
              </motion.div>
            </Link>
          </motion.div>

          <motion.nav
            className="hidden items-center gap-0.5 xl:flex"
            aria-label="Main navigation"
            variants={navbarItemsStagger}
            initial="hidden"
            animate="visible"
          >
            {NAV_ITEMS.map((item) =>
              item.children?.length ? (
                <DesktopDropdown key={item.label} item={item} />
              ) : (
                <motion.div key={item.label} variants={navbarItemReveal}>
                  <NavLinkMotion
                    href={item.href ?? "/"}
                    className="block px-3 py-2 text-[13px] font-medium tracking-wide text-mekark-white/90 transition-colors hover:text-mekark-red"
                  >
                    {item.label}
                  </NavLinkMotion>
                </motion.div>
              ),
            )}
          </motion.nav>

          <motion.button
            type="button"
            className="flex size-11 min-h-11 min-w-11 items-center justify-center rounded-lg text-mekark-white xl:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.92 }}
            onClick={() => {
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

        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              variants={navbarMobileMenuReveal}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="overflow-hidden border-t border-white/10 bg-black/95 backdrop-blur-xl xl:hidden"
              aria-label="Mobile navigation"
            >
              <motion.div
                className="max-h-[calc(100dvh-72px)] overflow-y-auto sm:max-h-[calc(100dvh-80px)]"
                variants={navbarMobileItemsStagger}
                initial="hidden"
                animate="visible"
              >
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
    </motion.header>
  );
}
