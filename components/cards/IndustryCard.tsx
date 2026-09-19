import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { industryIconSrc } from "@/lib/content";
import type { IndustryItem } from "@/types";

type IndustryCardProps = {
  item: IndustryItem;
};

export function IndustryCard({ item }: IndustryCardProps) {
  const iconSrc = industryIconSrc[item.icon];

  return (
    <Card as="article" className="flex h-full flex-col gap-5 rounded-2xl bg-card p-6 sm:p-7">
      <Image
        src={iconSrc}
        alt=""
        width={40}
        height={40}
        className="h-10 w-10 object-contain"
        aria-hidden
      />
      <h3 className="font-sans text-lg font-semibold text-white sm:text-xl">
        {item.title}
      </h3>
      <p className="mt-auto text-sm leading-relaxed text-muted">
        {item.description}
      </p>
    </Card>
  );
}
