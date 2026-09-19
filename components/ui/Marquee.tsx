"use client";

import { cn } from "@/lib/cn";

type MarqueeProps = {
  children: React.ReactNode;
  direction?: "left" | "right";
  className?: string;
};

export function Marquee({
  children,
  direction = "left",
  className,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group/marquee relative w-full overflow-hidden",
        className,
      )}
    >
      <div
        className={cn(
          "flex w-max will-change-transform",
          "group-hover/marquee:[animation-play-state:paused]",
          direction === "left"
            ? "animate-marquee-left"
            : "animate-marquee-right",
        )}
      >
        <div className="marquee-group">{children}</div>
        <div className="marquee-group" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
