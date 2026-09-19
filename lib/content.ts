import type {
  CounterItem,
  DemoItem,
  IndustryItem,
  PartnerItem,
  TeamMember,
} from "@/types";

export const counters: CounterItem[] = [
  {
    value: "2-4X",
    label: "Ускорение процессов",
    numericTarget: 4,
    suffix: "X",
    prefix: "2-",
  },
  {
    value: "ДО 30%",
    label: "Снижения OPEX",
    numericTarget: 30,
    suffix: "%",
    prefix: "ДО ",
  },
  {
    value: "ENTERPRISE",
    label: "AI-платформы",
    numericTarget: null,
  },
];

export const partners: PartnerItem[] = Array.from({ length: 18 }, (_, i) => ({
  id: `partner-${i + 1}`,
  name: `Partner ${i + 1}`,
}));

/** Порядок как на экране 16 */
export const industries: IndustryItem[] = [
  {
    id: "finance",
    title: "Финансы и банки",
    description:
      "Автоматизация, AI для клиентских сервисов и внутренних операций.",
    icon: "finance",
  },
  {
    id: "edtech",
    title: "Образование / EdTech",
    description: "Цифровые платформы, AI-системы обучения и персонализация.",
    icon: "edtech",
  },
  {
    id: "health",
    title: "Медицина / HealthTech",
    description: "AI и цифровые решения для работы с данными и аналитикой.",
    icon: "health",
  },
  {
    id: "industry",
    title: "ГМК и промышленность",
    description:
      "Автоматизация, производственная аналитика, цифровые системы.",
    icon: "industry",
  },
  {
    id: "oil",
    title: "Нефтегазовый сектор",
    description: "Enterprise-системы, аналитика, документооборот.",
    icon: "oil",
  },
  {
    id: "gov",
    title: "Государственный сектор",
    description: "Масштабируемые цифровые платформы для сложных задач.",
    icon: "gov",
  },
];

/**
 * Иконки отраслей (файлы в public/icons/industry-*.png)
 */
export const industryIconSrc: Record<IndustryItem["icon"], string> = {
  finance: "/icons/industry-finance.png",
  edtech: "/icons/industry-edtech.png",
  health: "/icons/industry-health.png",
  industry: "/icons/industry-factory.png",
  oil: "/icons/industry-oil.png",
  gov: "/icons/industry-gov.png",
};

/** Порядок демо: QR Menu → CRM → Constructor AI → Ailam */
export const demos: DemoItem[] = [
  {
    id: "qr-menu",
    title: "QR Menu",
    description:
      "Современная система для ресторанов объединяет интерфейсы для гостей, официантов, кухни и бара. Гости сканируют QR-коды для меню. Система позволяет управлять заказами, отслеживать блюда и распределять задачи в реальном времени.",
    cta: "Протестировать",
    imageSrc: "/images/demo/qr-menu.png",
    imageAlt: "Превью интерфейса QR Menu",
  },
  {
    id: "crm",
    title: "CRM",
    description:
      "Платформа управляет заявками, проектами, задачами и коммуникацией с клиентами. Контролирует этапы выполнения, сроки, загрузку команды, финансовые операции и распределение задач.",
    cta: "Протестировать",
    imageSrc: "/images/demo/crm.png",
    imageAlt: "Превью интерфейса CRM",
  },
  {
    id: "constructor-ai",
    title: "Constructor AI",
    description:
      "Backend-платформа для управления корпоративной базой знаний: загрузка документов, поиск ответов через AI, интеграция с веб/API и внутренними каналами, передача сложных запросов специалистам.",
    cta: "Протестировать",
    imageSrc: "/images/demo/constructor-ai.png",
    imageAlt: "Превью панели Constructor AI",
  },
  {
    id: "ailam",
    title: "Ailam",
    description:
      "Геймифицированная образовательная платформа, объединяющая обучение, соревнования и реальные награды. Пользователи выполняют задания, получают баллы, участвуют в турнирах и обменивают их на товары или бонусы.",
    cta: "Протестировать",
    imageSrc: "/images/demo/ailam.png",
    imageAlt: "Превью платформы Ailam",
  },
];

/**
 * Портреты команды (public/images/team/*).
 * Иконки ролей: team-phone / team-window / team-flow
 */
export const team: TeamMember[] = [
  {
    id: "naurbiev",
    firstName: "Джамалдин",
    lastName: "Наурбиев",
    bio: "Определяет направление компании, отвечает за стратегию, партнёрства и помогает команде держать фокус на бизнес-результате.",
    photoSrc: "/images/team/naurbiev.png",
    icon: "strategy",
  },
  {
    id: "pugoev",
    firstName: "Исмаил",
    lastName: "Пугоев",
    bio: "Формулирует технический план, распределяет задачи backend-команды, следит за архитектурой, сроками и качеством реализации.",
    photoSrc: "/images/team/pugoev.png",
    icon: "tech",
  },
  {
    id: "badiev",
    firstName: "Адам",
    lastName: "Бадиев",
    bio: "Отвечает за управленческие решения, развитие компании и помогает выстраивать процессы так, чтобы команда двигалась к понятным результатам.",
    photoSrc: "/images/team/badiev.png",
    icon: "ops",
  },
  {
    id: "altynbaev",
    firstName: "Талгат",
    lastName: "Алтынбаев",
    bio: "Отвечает за управление финансами компании, обеспечение её финансовой устойчивости, планирование бюджета, контроль денежных потоков.",
    photoSrc: "/images/team/altynbaev.png",
    icon: "finance",
  },
  {
    id: "tuleubaeva",
    firstName: "Анар",
    lastName: "Тулеубаева",
    bio: "Отвечает за определение стратегии компании, принятие ключевых управленческих решений, руководство топ-менеджментом.",
    photoSrc: "/images/team/tuleubaeva.png",
    icon: "mgmt",
  },
  {
    id: "tsoy",
    firstName: "Игорь",
    lastName: "Цой",
    bio: "Отвечает за всю коммерцию компании. Его задача — обеспечить рост выручки и прибыли в долгосрочной перспективе.",
    photoSrc: "/images/team/tsoy.png",
    icon: "commerce",
  },
];

export const teamIconSrc: Record<TeamMember["icon"], string> = {
  strategy: "/icons/team-phone.png",
  tech: "/icons/team-window.png",
  ops: "/icons/team-flow.png",
  finance: "/icons/team-window.png",
  mgmt: "/icons/team-phone.png",
  commerce: "/icons/team-flow.png",
};

export const site = {
  email: "insaitiq.systems@gmail.com",
  phone: "+7 705 555 7233",
  phoneHref: "tel:+77055557233",
  emailHref: "mailto:insaitiq.systems@gmail.com",
  whatsappHref: "https://wa.me/77055557233",
  instagramHref: "https://instagram.com/",
} as const;
