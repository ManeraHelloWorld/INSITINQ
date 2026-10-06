"use client";

import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { IndustryCard } from "@/components/cards/IndustryCard";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { useLocalizedContent } from "@/lib/hooks/useLocalizedContent";
import { useLocale } from "@/lib/locale-context";

export function IndustriesGrid() {
  const { t } = useLocale();
  const { industries } = useLocalizedContent();
  return (
    <section className="py-10 sm:py-20 lg:py-24">
      <Container>
        <ScrollReveal>
          <SectionTitle as="h1" className="mb-8 text-center sm:mb-14">
            {t("industries.title")}
          </SectionTitle>
        </ScrollReveal>

        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5">
          {industries.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.05}>
              <IndustryCard item={item} />
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
