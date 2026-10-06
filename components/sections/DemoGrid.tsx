"use client";

import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { DemoCard } from "@/components/cards/DemoCard";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { useLocalizedContent } from "@/lib/hooks/useLocalizedContent";
import { useLocale } from "@/lib/locale-context";

export function DemoGrid() {
  const { t } = useLocale();
  const { demos } = useLocalizedContent();
  return (
    <section className="py-10 sm:py-20 lg:py-24">
      <Container>
        <ScrollReveal>
          <SectionTitle as="h1" className="text-center">
            {t("demo.title")}
          </SectionTitle>
          <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-muted sm:mt-5 sm:text-lg">
            {t("demo.intro")}
          </p>
        </ScrollReveal>

        <div className="mt-10 space-y-12 sm:mt-12 sm:space-y-16 lg:mt-16 lg:space-y-24">
          {demos.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.04} y={0}>
              <DemoCard item={item} reverse={index % 2 === 1} />
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
