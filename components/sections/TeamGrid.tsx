"use client";

import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TeamCard } from "@/components/cards/TeamCard";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { useLocalizedContent } from "@/lib/hooks/useLocalizedContent";
import { useLocale } from "@/lib/locale-context";

export function TeamGrid() {
  const { t } = useLocale();
  const { team } = useLocalizedContent();
  return (
    <section className="py-10 sm:py-20 lg:py-24">
      <Container>
        <ScrollReveal>
          <SectionTitle as="h1" className="mb-8 text-center sm:mb-14">
            {t("team.title")}
          </SectionTitle>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10">
          {team.map((member, index) => (
            <ScrollReveal key={member.id} delay={index * 0.05}>
              <TeamCard member={member} />
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
