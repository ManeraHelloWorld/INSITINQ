"use client";

import { cn } from "@/lib/cn";

type MarqueeProps = {
  children: React.ReactNode;
  direction?: "left" | "right";
  className?: string;
};

/** Partners Marquee — infinite horizontal scroll, pauses on hover */
export function Marquee({
  children,
  direction = "left",
  className,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]",
        className,
      )}
    >
      <div
        className={cn(
          "flex w-max gap-4 py-2 group-hover:[animation-play-state:paused]",
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right",
        )}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
