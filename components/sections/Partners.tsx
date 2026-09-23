"use client";

import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Marquee } from "@/components/ui/Marquee";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { partners } from "@/lib/content";
import { useLocale } from "@/lib/locale-context";

function buildRow(base: typeof partners, minTiles = 40) {
  const out: { key: string }[] = [];
  let n = 0;
  while (out.length < minTiles) {
    for (const p of base) {
      out.push({ key: `${n}-${p.id}` });
      n += 1;
      if (out.length >= minTiles) break;
    }
  }
  return out;
}

function PartnerTiles({ items }: { items: { key: string }[] }) {
  return (
    <>
      {items.map((p) => (
        <div key={p.key} className="marquee-tile" aria-hidden />
      ))}
    </>
  );
}

export function Partners() {
  const { t } = useLocale();
  const row1 = buildRow(partners.slice(0, 9));
  const row2 = buildRow(partners.slice(9, 18));

  return (
    <section className="overflow-hidden pb-16 pt-4 sm:pb-20">
      <Container>
        <ScrollReveal>
          <SectionTitle className="mb-8 text-center sm:mb-10">
            {t("partners.title")}
          </SectionTitle>
        </ScrollReveal>
      </Container>

      <div className="flex w-full flex-col gap-3 sm:gap-4">
        <Marquee direction="left">
          <PartnerTiles items={row1} />
        </Marquee>
        <Marquee direction="right">
          <PartnerTiles items={row2} />
        </Marquee>
      </div>
    </section>
  );
}
