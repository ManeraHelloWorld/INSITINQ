"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";
import { animations } from "@/lib/animations";
import { cn } from "@/lib/cn";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Сдвиг по Y; 0 = только fade (нужно для корректного clip у картинок) */
  y?: number;
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
  y = animations.scrollReveal.y,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={{ opacity: 0, y }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{
        duration: animations.scrollReveal.duration,
        ease: animations.scrollReveal.ease,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
