"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import {
  footerCompanyLinks,
  footerDemoLinks,
  footerLegalLinks,
} from "@/lib/navigation";
import { site } from "@/lib/content";
import { useLocale } from "@/lib/locale-context";
import { useNextPageTrigger } from "@/lib/hooks/useNextPageTrigger";
import type { MessageKey } from "@/lib/i18n";
import { cn } from "@/lib/cn";

function splitLabel(label: string): [string, string | null] {
  const parts = label.trim().split(/\s+/);
  if (parts.length < 2) return [label, null];
  return [parts[0], parts.slice(1).join(" ")];
}

export function Footer() {
  const { t } = useLocale();
  const pathname = usePathname() || "/";
  const { progress, nextHref, isLast } = useNextPageTrigger({ pathname });
  const nextLabel = isLast ? t("footer.backHome") : t("footer.nextPage");
  const [line1, line2] = splitLabel(nextLabel);
  const percent = isLast ? 100 : Math.round(progress * 100);
  const widthPct = isLast ? 100 : progress * 100;

  return (
    <footer className="mt-8 border-t border-border bg-black pb-10 pt-10 sm:pb-12 sm:pt-12">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start lg:gap-16">
          <div className="flex flex-col gap-8 sm:flex-row sm:gap-12 lg:gap-14">
            <Link href="/" className="inline-flex shrink-0 items-start">
              <Image
                src="/images/logo/wordmark.png"
                alt="Insaitiq SYSTEM"
                width={120}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </Link>

            <div className="flex flex-wrap gap-10 sm:gap-12 lg:gap-14">
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

              <div>
                <p className="mb-4 text-sm font-medium text-white">
                  {t("footer.legal")}
                </p>
                <ul className="space-y-2">
                  {footerLegalLinks.map((item) => (
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

          <div className="flex w-full max-w-sm flex-col gap-10 self-start lg:max-w-none lg:items-end">
            <Link
              href={nextHref}
              className="group flex items-center gap-3 self-start lg:self-end"
            >
              <span className="font-pixel text-[11px] uppercase leading-tight tracking-wider text-white sm:text-xs">
                <span className="block">{line1}</span>
                {line2 ? <span className="block">{line2}</span> : null}
              </span>
              <span
                className="relative h-[3px] w-24 shrink-0 overflow-hidden rounded-full bg-white/25 sm:w-28"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={percent}
                aria-label={nextLabel}
              >
                <span
                  className={cn(
                    "absolute left-0 top-0 h-full rounded-full bg-primary",
                    "transition-[width] duration-150 ease-out",
                  )}
                  style={{ width: `${widthPct}%` }}
                />
              </span>
              <ArrowRight
                className="h-4 w-4 shrink-0 text-white transition-transform group-hover:translate-x-0.5"
                strokeWidth={1.75}
                aria-hidden
              />
            </Link>

            <div className="space-y-3 text-sm lg:text-right">
              <a
                href={site.emailHref}
                className="block text-white underline underline-offset-4"
              >
                {site.email}
              </a>
              <div className="flex flex-wrap items-center gap-3 lg:justify-end">
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
                    width={20}
                    height={20}
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
                    width={20}
                    height={20}
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
