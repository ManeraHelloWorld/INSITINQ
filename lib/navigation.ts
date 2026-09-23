import type { NavItem } from "@/types";

/** Header nav — «О компании» ведёт к блоку «О нас» на главной */
export const mainNav: NavItem[] = [
  { href: "/#about", labelKey: "nav.about" },
  { href: "/industries", labelKey: "nav.industries" },
  { href: "/demo", labelKey: "nav.demo" },
  { href: "/team", labelKey: "nav.team" },
  { href: "/contacts", labelKey: "nav.contact" },
];

/** Pixel menu panel links */
export const menuNav: NavItem[] = [
  { href: "/", labelKey: "nav.home" },
  { href: "/industries", labelKey: "nav.industries" },
  { href: "/demo", labelKey: "nav.demo" },
  { href: "/team", labelKey: "nav.team" },
  { href: "/contacts", labelKey: "nav.contact" },
];

export const footerCompanyLinks: NavItem[] = [
  { href: "/", labelKey: "footer.home" },
  { href: "/#about", labelKey: "footer.about" },
  { href: "/industries", labelKey: "footer.industries" },
  { href: "/cases", labelKey: "footer.cases" },
  { href: "/demo", labelKey: "footer.demo" },
];

export const footerDemoLinks: NavItem[] = [
  { href: "/demo#ailam", labelKey: "footer.demoAilam" },
  { href: "/demo#constructor-ai", labelKey: "footer.demoConstructor" },
  { href: "/demo#crm", labelKey: "footer.demoCrm" },
  { href: "/demo#qr-menu", labelKey: "footer.demoQrMenu" },
];

export const footerLegalLinks: NavItem[] = [
  { href: "/contacts#privacy", labelKey: "footer.privacy" },
  { href: "/contacts#terms", labelKey: "footer.terms" },
  { href: "/contacts#cookies", labelKey: "footer.cookies" },
];

/** Цепочка next-page без отдельной /about */
export const pageOrder = [
  "/",
  "/industries",
  "/demo",
  "/team",
  "/contacts",
] as const;

export type AppPath = (typeof pageOrder)[number];

export const LAST_PAGE: AppPath = "/contacts";

export const NEXT_PAGE_CHARGE_PX = 640;
export const NEXT_PAGE_CHARGE_DAMPING = 0.32;

export function normalizePath(pathname: string): string {
  return pathname.replace(/\/$/, "") || "/";
}

export function isLastPage(pathname: string): boolean {
  return normalizePath(pathname) === LAST_PAGE;
}

export function getNextPage(pathname: string): string {
  const normalized = normalizePath(pathname);
  if (normalized === LAST_PAGE) return "/";
  const index = pageOrder.indexOf(normalized as AppPath);
  if (index === -1) return "/";
  return pageOrder[index + 1] ?? "/";
}
