"use client";

/**
 * View Transitions helpers.
 * TODO Stage 6: integrate with next/navigation + document.startViewTransition
 * when navigating between pages / theme toggles.
 */
export function ViewTransition({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function startViewTransition(callback: () => void) {
  const doc = document as Document & {
    startViewTransition?: (cb: () => void) => void;
  };
  if (typeof doc.startViewTransition === "function") {
    doc.startViewTransition(callback);
    return;
  }
  callback();
}
