"use client";

import { useCountUp } from "@/lib/hooks/useCountUp";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";
import type { CounterItem } from "@/types";

type CounterProps = {
  item: CounterItem;
};

export function Counter({ item }: CounterProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.4 });
  const animated = useCountUp(item.numericTarget, isVisible);

  const display =
    item.numericTarget === null || animated === null
      ? item.value
      : `${item.prefix ?? ""}${animated}${item.suffix ?? ""}`;

  return (
    <div ref={ref} className="space-y-2">
      <p className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {display}
      </p>
      <p className="text-xs uppercase tracking-[0.16em] text-muted">
        {item.label}
      </p>
    </div>
  );
}
