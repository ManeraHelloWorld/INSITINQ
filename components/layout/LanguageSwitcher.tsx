"use client";

import Image from "next/image";
import { cn } from "@/lib/cn";
import { useLocale } from "@/lib/locale-context";
import type { Locale } from "@/types";

/** Флаги языков: public/icons/flag-*.png */
const locales: { code: Locale; label: string; flagSrc: string }[] = [
  { code: "kz", label: "KZ", flagSrc: "/icons/flag-kz.png" },
  { code: "ru", label: "RU", flagSrc: "/icons/flag-ru.png" },
  { code: "en", label: "EN", flagSrc: "/icons/flag-en.png" },
];

type LanguageSwitcherProps = {
  className?: string;
};

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { locale, setLocale } = useLocale();

  return (
    <ul
      className={cn("flex flex-col gap-2", className)}
      role="listbox"
      aria-label="Language"
    >
      {locales.map((item) => {
        const active = item.code === locale;
        return (
          <li key={item.code} role="option" aria-selected={active}>
            <button
              type="button"
              className={cn(
                "flex w-full items-center gap-2.5 rounded-md px-1 py-1 text-left transition-colors",
                active ? "text-white" : "text-muted hover:text-white",
              )}
              onClick={() => setLocale(item.code)}
            >
              <Image
                src={item.flagSrc}
                alt=""
                width={22}
                height={14}
                className="h-3.5 w-5 rounded-[2px] object-cover"
                aria-hidden
              />
              <span className="font-pixel text-xs uppercase tracking-wider">
                {item.label}
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
