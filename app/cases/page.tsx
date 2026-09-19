import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { t } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Кейсы",
};

export default function CasesPage() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container className="max-w-3xl">
        <ScrollReveal>
          <SectionTitle as="h1">{t("cases.title")}</SectionTitle>
          <p className="mt-8 rounded-card border border-dashed border-border bg-surface/50 p-4 text-sm text-muted">
            {t("cases.todo")}
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}
