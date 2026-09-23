"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { useLocale } from "@/lib/locale-context";

export function Hero() {
  const { t } = useLocale();

  return (
    <section className="pb-10 pt-6 sm:pb-14 sm:pt-8">
      <Container>
        <p className="mx-auto mb-8 max-w-3xl text-center text-sm leading-relaxed text-white/90 sm:mb-10 sm:text-base md:text-lg">
          {t("hero.subtitle")}
        </p>

        <div className="relative isolate min-h-[280px] overflow-hidden rounded-2xl sm:min-h-[340px] lg:min-h-[400px] lg:rounded-3xl">
          <Image
            src="/images/hero/banner.png"
            alt=""
            fill
            priority
            className="object-cover object-[center_42%]"
            sizes="(max-width: 1280px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/15" />

          <div className="relative z-10 flex h-full min-h-[280px] flex-col justify-end gap-6 p-6 sm:min-h-[340px] sm:p-10 lg:min-h-[400px] lg:max-w-[55%] lg:p-12">
            <h1 className="font-sans text-[clamp(1.35rem,3.8vw,2.75rem)] font-semibold uppercase leading-[1.15] tracking-wide text-white">
              {t("hero.title")}
            </h1>
            <div>
              <Link
                href="/demo"
                className="inline-flex h-11 items-center rounded-pill bg-primary px-7 text-sm font-medium text-white transition-colors hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {t("hero.cta")}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
