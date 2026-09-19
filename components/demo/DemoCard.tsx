import Image from "next/image";
import { Card } from "@/components/ui/Card";
import type { DemoItem } from "@/types";

type DemoCardProps = {
  item: DemoItem;
};

export function DemoCard({ item }: DemoCardProps) {
  return (
    <Card
      as="article"
      id={item.id}
      className="grid gap-6 scroll-mt-28 lg:grid-cols-[1.1fr_0.9fr]"
    >
      <div className="flex flex-col">
        <h3 className="font-display text-2xl font-semibold text-white">
          {item.title}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          {item.description}
        </p>
        <div className="mt-6">
          {/* TODO: wire real demo URLs when available */}
          <button
            type="button"
            className="inline-flex h-11 items-center rounded-pill bg-accent px-6 text-sm font-medium text-white transition-colors hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {item.cta}
          </button>
        </div>
      </div>

      <div className="relative min-h-48 overflow-hidden rounded-xl border border-border bg-surface-elevated sm:min-h-56">
        {item.imageSrc ? (
          <Image
            src={item.imageSrc}
            alt={item.imageAlt}
            fill
            className="object-cover"
          />
        ) : (
          <div
            className="flex h-full min-h-48 items-center justify-center px-4 text-center text-xs text-muted sm:min-h-56"
            role="img"
            aria-label={item.imageAlt}
          >
            TODO: preview image for {item.title}
          </div>
        )}
      </div>
    </Card>
  );
}
