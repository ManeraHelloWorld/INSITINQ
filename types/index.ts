export type Locale = "kz" | "ru" | "en";

export type NavItem = {
  href: string;
  labelKey: string;
};

export type CounterItem = {
  value: string;
  label: string;
  /** Numeric part for animated count-up; null = no animation (e.g. ENTERPRISE) */
  numericTarget: number | null;
  suffix?: string;
  prefix?: string;
};

export type PartnerItem = {
  id: string;
  name: string;
  /** TODO: replace with real logo path from mockups */
  logoSrc?: string;
};

export type IndustryItem = {
  id: string;
  title: string;
  description: string;
  icon: "health" | "edtech" | "finance" | "gov" | "oil" | "industry";
};

export type DemoItem = {
  id: string;
  title: string;
  description: string;
  cta: string;
  /** TODO: replace with real preview from mockups */
  imageSrc?: string;
  imageAlt: string;
};

export type TeamMember = {
  id: string;
  firstName: string;
  lastName: string;
  bio: string;
  /** TODO: replace with real portrait from mockups */
  photoSrc?: string;
  icon: "strategy" | "tech" | "ops" | "finance" | "mgmt" | "commerce";
};

export type ContactFormValues = {
  fullName: string;
  phone: string;
  company: string;
  email: string;
  task: string;
};

export type ContactApiResponse = {
  ok: boolean;
  message: string;
};
