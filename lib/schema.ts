import { z } from "zod";

/** Поля как на Экране 15: задача + ФИО + email + телефон */
export const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Укажите ФИО"),
  phone: z.string().trim().min(8, "Укажите номер телефона"),
  company: z.string().trim().optional(),
  email: z.string().trim().email("Укажите корректный email"),
  task: z.string().trim().min(10, "Опишите задачу подробнее"),
});

export type ContactSchema = z.infer<typeof contactSchema>;
