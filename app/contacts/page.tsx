import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ContactForm } from "@/components/sections/ContactForm";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { t } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Контакты",
};

export default function ContactsPage() {
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
      </Container>
    </section>
  );
}
