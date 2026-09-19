import type { Locale } from "@/types";

/** RU texts from mockups. KZ/EN — TODO: provide translations */
const ru = {
  "brand.name": "Insaitiq SYSTEM",
  "brand.short": "Insaitiq",
  "nav.home": "Главная",
  "nav.about": "О компании",
  "nav.industries": "Отрасли",
  "nav.cases": "Кейсы",
  "nav.demo": "Демо",
  "nav.team": "Команда",
  "nav.contact": "Контакты",
  "nav.discuss": "Обсудить",
  "nav.solutions": "Наши решения",
  "nav.menu": "МЕНЮ",
  "nav.close": "ЗАКРЫТЬ",
  "footer.company": "Компания",
  "footer.demo": "Демо",
  "footer.home": "Главная",
  "footer.about": "О компании",
  "footer.industries": "Отрасли",
  "footer.cases": "Кейсы",
  "footer.demoAilam": "Ailam",
  "footer.demoConstructor": "Constructor AI",
  "footer.demoCrm": "CRM",
  "footer.demoQrMenu": "QR-menu",
  "footer.nextPage": "Следующая страница",
  "footer.backHome": "В начало",
  "footer.email": "insaitiq.systems@gmail.com",
  "footer.phone": "+7 705 555 7233",
  "hero.title": "Разработка IT решений и AI-систем",
  "hero.subtitle":
    "Помогаем компаниям снижать издержки, ускорять процессы и управлять бизнесом через данные, автоматизацию и AI.",
  "hero.cta": "Наши решения",
  "about.title": "О нас",
  "about.body":
    "Insaitiq Systems — синергия специалистов с глубоким пониманием операционных процессов, закупок, документооборота, аналитики и корпоративного управления. Внедряем AI там, где он дает реальный экономический эффект.",
  "partners.title": "Партнёры и компании",
  "industries.title": "Опыт работы в ключевых отраслях",
  "demo.title": "Демо",
  "demo.intro":
    "Протестируйте наши продукты на реальных сценариях: посмотрите, как устроены процессы, интерфейсы, автоматизация и логика работы внутри решений.",
  "demo.cta": "Протестировать",
  "team.title": "Состав руководителей",
  "contact.heading": "Расскажите нам о вашей задаче",
  "contact.formTitle": "ЗАЯВКА",
  "contact.formIntro":
    "Опишите продукт или AI-задачу — мы свяжемся и предложим понятный следующий шаг.",
  "contact.fullName": "ФИО",
  "contact.phone": "Номер телефона",
  "contact.company": "Название компании",
  "contact.email": "Email",
  "contact.task": "Ваша задача",
  "contact.taskPlaceholder": "Опишите продукт или AI-задачу",
  "contact.submit": "Отправить",
  "contact.disclaimer":
    "Нажимая кнопку, вы соглашаетесь на обработку персональных данных. Мы ответим и предложим следующий шаг.",
  "cases.title": "Кейсы",
  "cases.todo": "TODO: контент страницы «Кейсы» отсутствует в приложенных макетах — нужен PNG/текст.",
} as const;

export type MessageKey = keyof typeof ru;

const dictionaries: Record<Locale, Partial<Record<MessageKey, string>> & typeof ru> = {
  ru,
  // TODO: KZ translations
  kz: { ...ru },
  // TODO: EN translations
  en: { ...ru },
};

export const defaultLocale: Locale = "ru";

export function t(key: MessageKey, locale: Locale = defaultLocale): string {
  return dictionaries[locale][key] ?? dictionaries.ru[key] ?? key;
}

export function getDictionary(locale: Locale = defaultLocale) {
  return dictionaries[locale];
}
