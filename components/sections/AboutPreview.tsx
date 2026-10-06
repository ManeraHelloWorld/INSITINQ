"use client";

import { Container } from "@/components/ui/Container";
import { Counter } from "@/components/ui/Counter";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { useLocalizedContent } from "@/lib/hooks/useLocalizedContent";
import { useLocale } from "@/lib/locale-context";

export function AboutPreview() {
  const { t } = useLocale();
  const { counters } = useLocalizedContent();

  return (
    <section id="about" className="scroll-mt-24 py-10 sm:py-16 lg:py-20">
      <Container>
        <ScrollReveal>
          <div className="grid gap-y-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] lg:gap-x-20 lg:gap-y-8">
            <h2 className="font-sans text-[2rem] font-semibold uppercase leading-none tracking-wide text-white sm:text-4xl lg:text-5xl">
              {t("about.title")}
            </h2>

            {/* Desktop: first counter in right column */}
            <div className="hidden lg:block lg:justify-self-center">
              <Counter item={counters[0]} />
            </div>

            <p className="max-w-xl text-[0.95rem] leading-relaxed text-white/90 sm:text-lg">
              {t("about.body")}
            </p>

            {/* Desktop: remaining counters */}
            <ul className="hidden gap-10 lg:grid lg:justify-items-center">
              {counters.slice(1).map((item) => (
                <li key={item.label}>
                  <Counter item={item} />
                </li>
              ))}
            </ul>

            {/* Mobile: all three counters in one row like screenshot */}
            <ul className="grid grid-cols-3 gap-1.5 pt-2 lg:hidden">
              {counters.map((item) => (
                <li key={item.label} className="min-w-0 px-0.5">
                  <Counter item={item} compact />
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
