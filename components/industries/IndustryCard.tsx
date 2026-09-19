import {
  Building2,
  Factory,
  Fuel,
  GraduationCap,
  Landmark,
  Stethoscope,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import type { IndustryItem } from "@/types";

const icons = {
  health: Stethoscope,
  edtech: GraduationCap,
  finance: Landmark,
  gov: Building2,
  oil: Fuel,
  industry: Factory,
} as const;

type IndustryCardProps = {
  item: IndustryItem;
};

export function IndustryCard({ item }: IndustryCardProps) {
  const Icon = icons[item.icon];

  return (
    <Card as="article" className="flex h-full flex-col gap-6">
      <div className="flex items-start justify-between gap-4">
        <Icon className="h-7 w-7 text-white" aria-hidden />
        <h3 className="text-right text-base font-medium text-white sm:text-lg">
          {item.title}
        </h3>
      </div>
      <p className="mt-auto text-sm leading-relaxed text-muted">
        {item.description}
      </p>
    </Card>
  );
}
