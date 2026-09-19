"use client";

import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { contactSchema, type ContactSchema } from "@/lib/schema";
import { t } from "@/lib/i18n";

function FieldIcon({ src }: { src: string }) {
  return (
    <Image
      src={src}
      alt=""
      width={16}
      height={16}
      className="pointer-events-none absolute left-4 top-[2.85rem] h-4 w-4 object-contain opacity-80"
      aria-hidden
    />
  );
}

/** Форма как на скрине: слева задача; справа ФИО, затем компания|телефон в ряд */
export function ContactForm() {
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      company: "",
      email: "",
      task: "",
    },
  });

  const onSubmit = async (values: ContactSchema) => {
    setServerError(null);
    setSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          company: values.company || values.email,
        }),
      });
      const data = (await res.json()) as { ok: boolean; message: string };
      if (!res.ok || !data.ok) {
        throw new Error(data.message || "Request failed");
      }
      setSuccess(true);
      reset();
    } catch (error) {
      setServerError(
        error instanceof Error ? error.message : "Не удалось отправить заявку",
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-[1.75rem] border border-border bg-card p-5 shadow-soft sm:rounded-[2rem] sm:p-8 lg:p-10"
      noValidate
    >
      <h2 className="font-pixel text-3xl uppercase tracking-wide text-white sm:text-4xl">
        {t("contact.formTitle")}
      </h2>
      <p className="mt-3 max-w-2xl text-sm font-medium leading-relaxed text-white sm:text-base">
        {t("contact.formIntro")}
      </p>

      <div className="mt-8 grid gap-5 lg:grid-cols-[1.15fr_1fr] lg:items-start">
        <Textarea
          label={t("contact.task")}
          placeholder={t("contact.taskPlaceholder")}
          className="min-h-[220px]"
          error={errors.task?.message}
          success={success}
          {...register("task")}
        />

        <div className="flex flex-col gap-4">
          <div className="relative">
            <FieldIcon src="/icons/form-user.png" />
            <Input
              label={t("contact.fullName")}
              className="pl-10"
              placeholder={t("contact.fullName")}
              autoComplete="name"
              error={errors.fullName?.message}
              success={success}
              {...register("fullName")}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="relative">
              <FieldIcon src="/icons/form-mail.png" />
              <Input
                label={t("contact.company")}
                className="pl-10"
                type="email"
                placeholder={t("contact.email")}
                autoComplete="email"
                error={errors.email?.message}
                success={success}
                {...register("email")}
              />
            </div>

            <div className="relative">
              <FieldIcon src="/icons/form-phone.png" />
              <Input
                label={t("contact.phone")}
                className="pl-10"
                type="tel"
                placeholder={t("contact.phone")}
                autoComplete="tel"
                error={errors.phone?.message}
                success={success}
                {...register("phone")}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="rounded-pill border border-white/15 bg-black font-pixel uppercase tracking-wide hover:bg-black/80"
        >
          {t("contact.submit")}
        </Button>
        <p className="max-w-md text-xs leading-relaxed text-muted">
          {t("contact.disclaimer")}
        </p>
      </div>

      {serverError ? (
        <p className="mt-4 text-sm text-danger" role="alert">
          {serverError}
        </p>
      ) : null}
      {success ? (
        <p className="mt-4 text-sm text-success" role="status">
          Заявка отправлена. Мы свяжемся с вами.
        </p>
      ) : null}
    </form>
  );
}
