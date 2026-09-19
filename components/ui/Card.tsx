import { cn } from "@/lib/cn";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: "div" | "article" | "section";
};

export function Card({ children, className, as: Tag = "div", id }: CardProps) {
  return (
    <Tag
      id={id}
      className={cn(
        "rounded-card border border-border bg-card p-5 shadow-soft sm:p-6",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
