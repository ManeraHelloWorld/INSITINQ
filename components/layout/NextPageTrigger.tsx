"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { useNextPageTrigger } from "@/lib/hooks/useNextPageTrigger";
import { useLocale } from "@/lib/locale-context";
import { cn } from "@/lib/cn";

export function NextPageTrigger() {
  const pathname = usePathname() || "/";
  const { t } = useLocale();
  const { progress, nextHref, isLast } = useNextPageTrigger({ pathname });
  const label = isLast ? t("footer.backHome") : t("footer.nextPage");
  const percent = isLast ? 100 : Math.round(progress * 100);
  const widthPct = isLast ? 100 : progress * 100;

  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-40"
      data-next-page-trigger
    >
      <div className="border-t border-border/60 bg-background/80 backdrop-blur-sm">
        <Container className="pointer-events-auto py-4 sm:py-5">
          <Link
            href={nextHref}
            className="group ml-auto flex w-full max-w-md flex-col gap-2 sm:ml-0 sm:max-w-lg md:ml-auto"
          >
            <div className="flex items-center gap-3">
              <span className="whitespace-nowrap text-sm font-medium uppercase tracking-wide text-white/90">
                {label}
              </span>
              <span
                className="relative h-2 flex-1 overflow-hidden rounded-full bg-white/20"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={percent}
                aria-label={label}
              >
                <span
                  className={cn(
                    "absolute left-0 top-0 h-full rounded-full bg-primary",
                    "transition-[width] duration-100 ease-out",
                  )}
                  style={{ width: `${widthPct}%` }}
                />
              </span>
              <ArrowRight
                className="h-5 w-5 shrink-0 text-white transition-transform duration-300 group-hover:translate-x-0.5"
                strokeWidth={1.75}
                aria-hidden
              />
            </div>
          </Link>
        </Container>
      </div>
    </div>
  );
}
