"use client";

import { useEffect, useState } from "react";
import { animations } from "@/lib/animations";

/** Animated Counters — count from 0 to target when `active` */
export function useCountUp(
  target: number | null,
  active: boolean,
  durationMs = animations.counter.durationMs,
) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (target === null) return;
    if (!active) {
      setValue(0);
      return;
    }

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, active, durationMs]);

  return target === null ? null : value;
}
