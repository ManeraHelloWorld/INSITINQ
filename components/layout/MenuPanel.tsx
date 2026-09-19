"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { menuNav } from "@/lib/navigation";
import { useLocale } from "@/lib/locale-context";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { animations } from "@/lib/animations";
import { cn } from "@/lib/cn";
import type { MessageKey } from "@/lib/i18n";

type MenuPanelProps = {
  open: boolean;
  onClose: () => void;
};

export function MenuPanel({ open, onClose }: MenuPanelProps) {
  const pathname = usePathname();
  const { t, locale } = useLocale();

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.button
            type="button"
            aria-label={t("nav.close")}
            className="fixed inset-0 z-40 bg-black/55"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            id="site-menu-panel"
            role="dialog"
            aria-modal="true"
            aria-label={t("nav.menu")}
            initial={{ opacity: 0, y: -16, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{
              duration: animations.menuPanel.duration,
              ease: animations.menuPanel.ease,
            }}
            className="absolute right-0 top-[calc(100%+0.75rem)] z-50 w-[min(100vw-2rem,20rem)] overflow-hidden rounded-2xl border border-border bg-[#12151a]/95 p-5 shadow-soft backdrop-blur-md"
          >
            <nav className="flex flex-col gap-1" aria-label="Menu">
              {menuNav.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-2 py-2.5 font-pixel text-sm uppercase tracking-wider transition-colors",
                      active
                        ? "text-white"
                        : "text-white/70 hover:text-white",
                    )}
                    onClick={onClose}
                  >
                    <span
                      className={cn(
                        "h-1.5 w-1.5 rounded-full",
                        active ? "bg-primary" : "bg-transparent",
                      )}
                      aria-hidden
                    />
                    {t(item.labelKey as MessageKey)}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-5 border-t border-border pt-4">
              <div className="mb-3 flex items-center gap-2 text-sm text-muted">
                <Image
                  src="/icons/globe.png"
                  alt=""
                  width={16}
                  height={16}
                  className="opacity-90"
                  aria-hidden
                />
                <span className="font-pixel text-xs uppercase">{locale}</span>
              </div>
              <LanguageSwitcher />
            </div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}
