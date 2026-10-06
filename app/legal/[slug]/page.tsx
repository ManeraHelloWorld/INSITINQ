import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/ui/Container";
import { getLegalDocument, legalDocuments, legalSlugs } from "@/lib/legal";

type LegalPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return legalSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: LegalPageProps): Metadata {
  const doc = getLegalDocument(params.slug);
  return { title: doc?.shortTitle ?? "Документы" };
}

export default function LegalPage({ params }: LegalPageProps) {
  const doc = getLegalDocument(params.slug);
  if (!doc) notFound();

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container className="max-w-3xl">
        <nav className="mb-10 flex flex-wrap gap-2">
          {legalDocuments.map((item) => (
            <Link
              key={item.slug}
              href={`/legal/${item.slug}`}
              className={
                item.slug === doc.slug
                  ? "rounded-full bg-white px-4 py-2 text-sm text-black"
                  : "rounded-full border border-border px-4 py-2 text-sm text-muted transition-colors hover:text-white"
              }
            >
              {item.shortTitle}
            </Link>
          ))}
        </nav>

        <div className="mb-8 space-y-1 text-left text-xs text-muted sm:text-sm">
          {doc.approval.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        <h1 className="text-2xl font-semibold uppercase leading-tight text-white sm:text-3xl">
          {doc.title}
        </h1>
        <p className="mt-3 text-muted">{doc.subtitle}</p>

        <div className="mt-6 space-y-1 border-b border-border pb-8 text-sm text-muted">
          {doc.meta.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        <div className="mt-10 space-y-10">
          {doc.sections.map((section) => (
            <article key={section.heading}>
              <h2 className="text-lg font-semibold text-white sm:text-xl">
                {section.heading}
              </h2>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted sm:text-base">
                {section.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
