import { forwardRef } from "react";
import { cn } from "@/lib/cn";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  success?: boolean;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  function Input(
    { className, label, error, success, id, ...props },
    ref,
  ) {
    const inputId = id ?? props.name;

    return (
      <label className="flex w-full flex-col gap-2 text-sm text-muted">
        {label ? <span className="text-foreground/90">{label}</span> : null}
        <input
          ref={ref}
          id={inputId}
          aria-invalid={Boolean(error) || undefined}
          aria-describedby={error ? `${inputId}-error` : undefined}
          className={cn(
            "h-12 w-full rounded-card border border-border bg-surface px-4 text-foreground placeholder:text-muted/70 transition-[box-shadow,border-color] focus-visible:outline-primary",
            error && "animate-shake border-danger shadow-[0_0_0_1px_var(--color-danger)]",
            success && "animate-success-pulse border-success",
            className,
          )}
          {...props}
        />
        {error ? (
          <span id={`${inputId}-error`} className="text-xs text-danger" role="alert">
            {error}
          </span>
        ) : null}
      </label>
    );
  },
);
