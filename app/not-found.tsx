import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center py-20">
      <Container className="max-w-xl text-center">
        <p className="font-display text-6xl font-semibold text-primary">404</p>
        <h1 className="mt-4 font-display text-2xl font-semibold text-white sm:text-3xl">
          Страница не найдена
        </h1>
        <p className="mt-3 text-muted">
          Такого адреса нет. Вернитесь на главную или выберите раздел в меню.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex h-11 items-center rounded-pill bg-primary px-6 text-sm font-medium text-white transition-colors hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          На главную
        </Link>
      </Container>
    </section>
  );
}
