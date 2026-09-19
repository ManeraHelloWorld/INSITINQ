"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { MenuPanel } from "@/components/layout/MenuPanel";
import { useHeaderScrolled } from "@/lib/hooks/useHeaderScrolled";
import { mainNav } from "@/lib/navigation";
import { useLocale } from "@/lib/locale-context";
import { cn } from "@/lib/cn";
import type { MessageKey } from "@/lib/i18n";

function Logo() {
  return (
    <Link href="/" className="inline-flex items-center" aria-label="Insaitiq SYSTEM">
      <Image
        src="/images/logo/wordmark.png"
        alt="Insaitiq SYSTEM"
        width={140}
        height={46}
        className="h-9 w-auto object-contain sm:h-10"
        priority
      />
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const scrolled = useHeaderScrolled();
  const { t } = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "header sticky top-0 z-50 transition-[background-color,box-shadow,backdrop-filter,border-color] duration-200",
        scrolled && "header-scrolled",
      )}
    >
      <Container className="relative flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
        <Logo />

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 lg:flex xl:gap-7"
          aria-label="Primary"
        >
          {mainNav.map((item) => {
            const active =
              item.href.startsWith("/#")
                ? pathname === "/" && item.href === "/#about"
                : pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm tracking-wide transition-colors hover:text-white",
                  active ? "text-white" : "text-white/80",
                )}
                aria-current={active ? "page" : undefined}
              >
                {t(item.labelKey as MessageKey)}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/contacts"
            className="inline-flex h-9 items-center justify-center rounded-pill bg-primary px-4 text-sm font-medium text-white transition-colors hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:px-5"
          >
            {t("nav.discuss")}
          </Link>

          <button
            type="button"
            className="inline-flex h-9 min-w-[5.5rem] items-center justify-center overflow-hidden rounded-pill border border-white/25 bg-transparent px-4 text-white"
            aria-expanded={menuOpen}
            aria-controls="site-menu-panel"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="sr-only">
              {menuOpen ? t("nav.close") : t("nav.menu")}
            </span>
            <span
              aria-hidden
              className="relative block h-5 w-[4.25rem] font-pixel text-[11px] uppercase tracking-wider"
            >
              <span
                className={cn(
                  "absolute inset-0 flex items-center justify-center transition-transform duration-200 ease-out-soft",
                  menuOpen
                    ? "-translate-y-full opacity-0"
                    : "translate-y-0 opacity-100",
                )}
              >
                {t("nav.menu")}
              </span>
              <span
                className={cn(
                  "absolute inset-0 flex items-center justify-center transition-transform duration-200 ease-out-soft",
                  menuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-full opacity-0",
                )}
              >
                {t("nav.close")}
              </span>
            </span>
          </button>
        </div>

        <MenuPanel open={menuOpen} onClose={() => setMenuOpen(false)} />
      </Container>
    </header>
  );
}
