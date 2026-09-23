"use client";

import type { DemoItem } from "@/types";
import { cn } from "@/lib/cn";
import { useLocale } from "@/lib/locale-context";

type DemoCardProps = {
  item: DemoItem;
  reverse?: boolean;
};

export function DemoCard({ item, reverse = false }: DemoCardProps) {
  const { t } = useLocale();

  return (
    <article
      id={item.id}
      className="scroll-mt-28 grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
    >
      <div
        className={cn(
          "inline-block max-w-full overflow-hidden rounded-2xl border border-border bg-surface leading-none",
          reverse && "lg:order-2",
        )}
      >
        {item.imageSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.imageSrc}
            alt={item.imageAlt}
            className="block h-auto w-full max-w-full align-top"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="flex aspect-[16/10] w-full items-center justify-center text-xs text-muted">
            TODO: preview
          </div>
        )}
      </div>

      <div className={cn("flex flex-col", reverse && "lg:order-1")}>
        <h3 className="font-sans text-2xl font-semibold uppercase tracking-wide text-white sm:text-3xl">
          {item.title}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          {item.description}
        </p>
        <div className="mt-6">
          <button
            type="button"
            className="inline-flex h-11 items-center rounded-pill bg-primary px-6 text-sm font-medium text-white transition-colors hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {t("demo.cta")}
          </button>
        </div>
      </div>
    </article>
  );
}
