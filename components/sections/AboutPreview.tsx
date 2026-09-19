"use client";

import { Container } from "@/components/ui/Container";
import { Counter } from "@/components/ui/Counter";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { counters } from "@/lib/content";
import { t } from "@/lib/i18n";

/**
 * CSS grid: «О нас» и «2-4X» в одной первой строке —
 * заголовок гарантированно наверху, не по центру колонки.
 */
export function AboutPreview() {
  const [first, ...rest] = counters;

  return (
    <section id="about" className="scroll-mt-24 py-12 sm:py-16 lg:py-20">
      <Container>
        <ScrollReveal>
          <div className="grid gap-x-12 gap-y-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] lg:gap-x-20">
            <h2 className="font-pixel text-3xl uppercase leading-none tracking-wide text-white sm:text-4xl lg:text-5xl">
              {t("about.title")}
            </h2>

            <div className="lg:justify-self-center">
              <Counter item={first} />
            </div>

            <p className="max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
              {t("about.body")}
            </p>

            <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1 lg:justify-items-center lg:gap-10">
              {rest.map((item) => (
                <li key={item.label}>
                  <Counter item={item} />
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
