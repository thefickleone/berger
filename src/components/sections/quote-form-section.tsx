"use client";

import { ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { useQuoteForm } from "@/hooks/use-quote-form";
import { cn } from "@/lib/utils";

type QuoteFormSectionProps = {
  title?: string;
  compact?: boolean;
};

export function QuoteFormSection({ title = "Get Your Free Quote", compact = false }: QuoteFormSectionProps) {
  const { formData, setFormData, isSubmitting, submitLead, serverMessage, isError, options } = useQuoteForm();

  function updateField<K extends keyof typeof formData>(field: K, value: (typeof formData)[K]) {
    setFormData((previous) => ({ ...previous, [field]: value }));
  }

  return (
    <section className={cn("glass-card p-6 md:p-8", compact && "p-5 md:p-6")}>
      <h2 className="text-3xl">{title}</h2>
      <p className="mt-2 text-sm md:text-base">
        Share your requirement in under a minute. Our team will call you back with the right Berger
        product recommendation.
      </p>

      <form onSubmit={submitLead} className="mt-6 grid gap-4" noValidate>
        <label className="grid gap-2 text-sm font-medium text-[var(--color-charcoal-900)]">
          Full Name
          <input
            value={formData.fullName}
            onChange={(event: ChangeEvent<HTMLInputElement>) => updateField("fullName", event.target.value)}
            className="w-full rounded-xl border border-white/80 bg-white/85 px-4 py-3 text-sm outline-none transition focus:border-[var(--color-luxury-blue)]"
            placeholder="Your full name"
            autoComplete="name"
            required
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-[var(--color-charcoal-900)]">
          Phone
          <input
            value={formData.phone}
            onChange={(event: ChangeEvent<HTMLInputElement>) => updateField("phone", event.target.value)}
            className="w-full rounded-xl border border-white/80 bg-white/85 px-4 py-3 text-sm outline-none transition focus:border-[var(--color-luxury-blue)]"
            placeholder="Your phone number"
            autoComplete="tel"
            required
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-[var(--color-charcoal-900)]">
          Inquiry Type
          <select
            value={formData.inquiryType}
            onChange={(event: ChangeEvent<HTMLSelectElement>) =>
              updateField("inquiryType", event.target.value as (typeof formData)["inquiryType"])
            }
            className="w-full rounded-xl border border-white/80 bg-white/85 px-4 py-3 text-sm outline-none transition focus:border-[var(--color-luxury-blue)]"
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-2 text-sm font-medium text-[var(--color-charcoal-900)]">
          Message
          <textarea
            value={formData.message}
            onChange={(event: ChangeEvent<HTMLTextAreaElement>) => updateField("message", event.target.value)}
            className="min-h-28 w-full rounded-xl border border-white/80 bg-white/85 px-4 py-3 text-sm outline-none transition focus:border-[var(--color-luxury-blue)]"
            placeholder="Tell us what you need help with"
            required
          />
        </label>

        <Button type="submit" disabled={isSubmitting} className="w-full md:w-fit">
          {isSubmitting ? "Submitting..." : "Get My Quote"}
        </Button>

        {serverMessage ? (
          <p className={cn("text-sm", isError ? "text-red-600" : "text-emerald-700")}>{serverMessage}</p>
        ) : null}
      </form>
    </section>
  );
}

