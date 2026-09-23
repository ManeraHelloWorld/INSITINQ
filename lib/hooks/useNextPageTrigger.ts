"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  getNextPage,
  isLastPage,
  NEXT_PAGE_CHARGE_DAMPING,
  NEXT_PAGE_CHARGE_PX,
} from "@/lib/navigation";

type Options = {
  pathname: string;
  thresholdPx?: number;
  damping?: number;
};

const DECAY_STEP = 0.018;
const DECAY_INTERVAL_MS = 40;

/**
 * Прогресс копится от wheel у низа страницы.
 * Как только листание остановилось — полоска сразу сужается.
 */
export function useNextPageTrigger({
  pathname,
  thresholdPx = NEXT_PAGE_CHARGE_PX,
  damping = NEXT_PAGE_CHARGE_DAMPING,
}: Options) {
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const last = isLastPage(pathname);
  const nextHref = getNextPage(pathname);
  const navigatingRef = useRef(false);
  const chargedRef = useRef(0);
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const decayTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearDecay = useCallback(() => {
    if (decayTimerRef.current) {
      clearInterval(decayTimerRef.current);
      decayTimerRef.current = null;
    }
  }, []);

  const clearIdle = useCallback(() => {
    if (idleTimerRef.current) {
      clearTimeout(idleTimerRef.current);
      idleTimerRef.current = null;
    }
  }, []);

  const startDecay = useCallback(() => {
    clearDecay();
    decayTimerRef.current = setInterval(() => {
      chargedRef.current = Math.max(
        0,
        chargedRef.current - thresholdPx * DECAY_STEP,
      );
      const next = chargedRef.current / thresholdPx;
      setProgress(next);
      if (next <= 0) {
        chargedRef.current = 0;
        setProgress(0);
        clearDecay();
      }
    }, DECAY_INTERVAL_MS);
  }, [clearDecay, thresholdPx]);

  /** После остановки wheel (~120мс тишины) сразу сужаем — между тиками скролла не сбрасываем */
  const scheduleIdleDecay = useCallback(() => {
    clearIdle();
    clearDecay();
    idleTimerRef.current = setTimeout(() => {
      idleTimerRef.current = null;
      if (chargedRef.current > 0 && !navigatingRef.current) {
        startDecay();
      }
    }, 120);
  }, [clearDecay, clearIdle, startDecay]);

  const reset = useCallback(() => {
    clearIdle();
    clearDecay();
    chargedRef.current = 0;
    setProgress(0);
    navigatingRef.current = false;
  }, [clearDecay, clearIdle]);

  useEffect(() => {
    reset();
  }, [pathname, reset]);

  useEffect(() => {
    if (last) return;

    const onWheel = (event: WheelEvent) => {
      if (navigatingRef.current) return;

      const doc = document.documentElement;
      const atBottom =
        window.innerHeight + window.scrollY >= doc.scrollHeight - 2;

      if (!atBottom) {
        if (chargedRef.current > 0) {
          clearIdle();
          clearDecay();
          chargedRef.current = 0;
          setProgress(0);
        }
        return;
      }

      clearDecay();
      clearIdle();

      const delta = event.deltaY * damping;

      if (delta <= 0) {
        chargedRef.current = Math.max(0, chargedRef.current + delta);
        setProgress(Math.min(1, chargedRef.current / thresholdPx));
        scheduleIdleDecay();
        return;
      }

      chargedRef.current = Math.min(thresholdPx, chargedRef.current + delta);
      const next = chargedRef.current / thresholdPx;
      setProgress(next);

      if (next >= 1) {
        clearIdle();
        clearDecay();
        navigatingRef.current = true;
        chargedRef.current = 0;
        setProgress(0);
        router.push(nextHref);
        return;
      }

      scheduleIdleDecay();
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      clearIdle();
      clearDecay();
    };
  }, [
    clearDecay,
    clearIdle,
    damping,
    last,
    nextHref,
    router,
    scheduleIdleDecay,
    thresholdPx,
  ]);

  return { progress, nextHref, isLast: last, reset };
}
