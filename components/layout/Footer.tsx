"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import {
  footerCompanyLinks,
  footerDemoLinks,
} from "@/lib/navigation";
import { site } from "@/lib/content";
import { useLocale } from "@/lib/locale-context";
import { useNextPageTrigger } from "@/lib/hooks/useNextPageTrigger";
import type { MessageKey } from "@/lib/i18n";
import { cn } from "@/lib/cn";

export function Footer() {
  const { t } = useLocale();
  const pathname = usePathname() || "/";
  const { progress, nextHref, isLast } = useNextPageTrigger({ pathname });
  const nextLabel = isLast ? t("footer.backHome") : t("footer.nextPage");
  const percent = isLast ? 100 : Math.round(progress * 100);
  const widthPct = isLast ? 100 : progress * 100;

  return (
    <footer className="mt-8 border-t border-border bg-black pb-10 pt-10 sm:pb-12 sm:pt-12">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[auto_1fr_1.2fr] lg:items-start">
          <div className="flex flex-col gap-8 sm:flex-row sm:gap-14 lg:gap-16">
            <Link href="/" className="inline-flex shrink-0 items-start">
              <Image
                src="/images/logo/wordmark.png"
                alt="Insaitiq SYSTEM"
                width={120}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </Link>

            <div className="flex gap-12 sm:gap-16">
              <div>
                <p className="mb-4 text-sm font-medium text-white">
                  {t("footer.company")}
                </p>
                <ul className="space-y-2">
                  {footerCompanyLinks.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-muted transition-colors hover:text-white"
                      >
                        {t(item.labelKey as MessageKey)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="mb-4 text-sm font-medium text-white">
                  {t("footer.demo")}
                </p>
                <ul className="space-y-2">
                  {footerDemoLinks.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-muted transition-colors hover:text-white"
                      >
                        {t(item.labelKey as MessageKey)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="hidden lg:block" aria-hidden />

          <div className="flex flex-col gap-6">
            <Link
              href={nextHref}
              className="group flex w-full max-w-sm flex-col gap-2 self-end lg:max-w-none"
            >
              <div className="flex items-center gap-3">
                <span className="whitespace-nowrap font-pixel text-xs uppercase tracking-wider text-white/90 sm:text-sm">
                  {nextLabel}
                </span>
                <span
                  className="relative h-px flex-1 bg-white/15"
                  role="progressbar"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={percent}
                  aria-label={nextLabel}
                >
                  <span
                    className={cn(
                      "absolute left-0 top-1/2 h-[2px] -translate-y-1/2 bg-primary",
                      "transition-[width] duration-150 ease-out",
                    )}
                    style={{ width: `${widthPct}%` }}
                  />
                </span>
                <ArrowRight
                  className="h-4 w-4 shrink-0 text-white transition-transform group-hover:translate-x-0.5"
                  strokeWidth={1.5}
                  aria-hidden
                />
              </div>
            </Link>

            <div className="space-y-3 text-sm lg:mt-auto">
              <a
                href={site.emailHref}
                className="block text-white underline underline-offset-4"
              >
                {site.email}
              </a>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={site.phoneHref}
                  className="text-white underline underline-offset-4"
                >
                  {site.phone}
                </a>
                <a
                  href={site.whatsappHref}
                  aria-label="WhatsApp"
                  className="opacity-80 transition-opacity hover:opacity-100"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="/icons/whatsapp.png"
                    alt=""
                    width={18}
                    height={18}
                    aria-hidden
                  />
                </a>
                <a
                  href={site.instagramHref}
                  aria-label="Instagram"
                  className="opacity-80 transition-opacity hover:opacity-100"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="/icons/instagram.png"
                    alt=""
                    width={18}
                    height={18}
                    aria-hidden
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
