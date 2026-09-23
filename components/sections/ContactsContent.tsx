"use client";

import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ContactForm } from "@/components/sections/ContactForm";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { useLocale } from "@/lib/locale-context";

export function ContactsContent() {
  const { t } = useLocale();

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container className="max-w-5xl">
        <ScrollReveal>
          <SectionTitle as="h1" className="mb-8 text-center sm:mb-10">
            {t("contact.heading")}
          </SectionTitle>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <ContactForm />
        </ScrollReveal>

        <div className="mt-16 space-y-8 border-t border-border pt-10 text-sm text-muted">
          <section id="privacy" className="scroll-mt-28">
            <h2 className="mb-2 text-base font-semibold text-white">
              {t("footer.privacy")}
            </h2>
            <p className="max-w-3xl leading-relaxed">
              {t("contact.disclaimer")}
            </p>
          </section>
          <section id="terms" className="scroll-mt-28">
            <h2 className="mb-2 text-base font-semibold text-white">
              {t("footer.terms")}
            </h2>
            <p className="max-w-3xl leading-relaxed">
              {t("footer.terms")}
            </p>
          </section>
          <section id="cookies" className="scroll-mt-28">
            <h2 className="mb-2 text-base font-semibold text-white">
              {t("footer.cookies")}
            </h2>
            <p className="max-w-3xl leading-relaxed">
              {t("footer.cookies")}
            </p>
          </section>
        </div>
      </Container>
    </section>
  );
}
