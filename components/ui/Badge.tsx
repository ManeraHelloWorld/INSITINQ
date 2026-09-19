import { cn } from "@/lib/cn";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

/** Optional — use only if present in mockups */
export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-pill border border-border bg-surface px-3 py-1 text-xs uppercase tracking-wide text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
