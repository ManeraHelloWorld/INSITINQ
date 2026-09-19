"use client";

import { Container } from "@/components/ui/Container";
import { Counter } from "@/components/ui/Counter";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { counters } from "@/lib/content";

export function Stats() {
  return (
    <section className="pb-16 sm:pb-20" aria-label="Ключевые показатели">
      <Container>
        <ScrollReveal>
          <ul className="grid gap-8 sm:grid-cols-3">
            {counters.map((item) => (
              <li key={item.label}>
                <Counter item={item} />
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </Container>
    </section>
  );
}
