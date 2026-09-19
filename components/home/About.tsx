"use client";

import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Counter } from "@/components/home/Counter";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { counters } from "@/lib/content";
import { t } from "@/lib/i18n";

export function About() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24">
      <Container className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <ScrollReveal>
          <SectionTitle>{t("about.title")}</SectionTitle>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {t("about.body")}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <ul className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
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
