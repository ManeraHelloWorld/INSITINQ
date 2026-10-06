"use client";

import { useMemo } from "react";
import { getLocalizedContent } from "@/lib/content-i18n";
import { useLocale } from "@/lib/locale-context";

/** Контент (показатели, отрасли, демо, команда) на текущем языке. */
export function useLocalizedContent() {
  const { locale } = useLocale();
  return useMemo(() => getLocalizedContent(locale), [locale]);
}
