import { cn } from "@/lib/cn";

type SectionTitleProps = {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
  eyebrow?: string;
};

export function SectionTitle({
  children,
  className,
  as: Tag = "h2",
  eyebrow,
}: SectionTitleProps) {
  return (
    <div className={cn("space-y-3", className)}>
      {eyebrow ? (
        <p className="text-sm uppercase tracking-[0.18em] text-muted">{eyebrow}</p>
      ) : null}
      <Tag className="font-pixel text-3xl uppercase leading-snug tracking-wide text-foreground sm:text-4xl lg:text-5xl text-balance">
        {children}
      </Tag>
    </div>
  );
}
