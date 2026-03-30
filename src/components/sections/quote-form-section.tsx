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
    <section className={cn("glass-card glow-card overflow-hidden p-6 md:p-8", compact && "p-5 md:p-6")}>
      <div className="grid gap-6 sm:gap-7 md:gap-10 md:grid-cols-[0.86fr_1fr]">
        <div className="space-y-5">
          <h2 className="text-2xl sm:text-3xl leading-tight md:text-4xl">{title}</h2>
          <p className="text-xs sm:text-sm text-subtle-foreground md:text-base">
            Share your requirement in under a minute. Get tailored Berger suggestions, quantity estimates,
            and a fast callback from our team.
          </p>

          <div className="space-y-3">
            <div className="glass-soft p-4">
              <p className="text-xs sm:text-sm font-semibold text-foreground">Premium Product Guidance</p>
              <p className="mt-1 text-[10px] sm:text-xs text-muted-foreground">Interior, exterior, primers, and waterproofing plans</p>
            </div>
            <div className="glass-soft p-4">
              <p className="text-xs sm:text-sm font-semibold text-foreground">Local Expert Support</p>
              <p className="mt-1 text-[10px] sm:text-xs text-muted-foreground">Assistance tailored for homes in Jatra and Birbhum</p>
            </div>
          </div>
        </div>

        <form onSubmit={submitLead} className="grid gap-4" noValidate>
          <label className="grid gap-2 text-sm font-medium text-foreground">
            Full Name
            <input
              value={formData.fullName}
              onChange={(event: ChangeEvent<HTMLInputElement>) => updateField("fullName", event.target.value)}
              className="w-full rounded-lg sm:rounded-xl border border-white/85 bg-white/85 px-3 py-2 text-xs sm:px-4 sm:py-3 sm:text-sm outline-none transition-all duration-200 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20"
              placeholder="Your full name"
              autoComplete="name"
              required
            />
          </label>

          <label className="grid gap-2 text-sm font-medium text-foreground">
            Phone
            <input
              value={formData.phone}
              onChange={(event: ChangeEvent<HTMLInputElement>) => updateField("phone", event.target.value)}
              className="w-full rounded-lg sm:rounded-xl border border-white/85 bg-white/85 px-3 py-2 text-xs sm:px-4 sm:py-3 sm:text-sm outline-none transition-all duration-200 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20"
              placeholder="Your phone number"
              autoComplete="tel"
              required
            />
          </label>

          <label className="grid gap-2 text-sm font-medium text-foreground">
            Inquiry Type
            <select
              value={formData.inquiryType}
              onChange={(event: ChangeEvent<HTMLSelectElement>) =>
                updateField("inquiryType", event.target.value as (typeof formData)["inquiryType"])
              }
              className="w-full rounded-lg sm:rounded-xl border border-white/85 bg-white/85 px-3 py-2 text-xs sm:px-4 sm:py-3 sm:text-sm outline-none transition-all duration-200 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20"
            >
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label className="grid gap-2 text-sm font-medium text-foreground">
            Message
            <textarea
              value={formData.message}
              onChange={(event: ChangeEvent<HTMLTextAreaElement>) => updateField("message", event.target.value)}
              className="min-h-24 sm:min-h-28 w-full rounded-lg sm:rounded-xl border border-white/85 bg-white/85 px-3 py-2 text-xs sm:px-4 sm:py-3 sm:text-sm outline-none transition-all duration-200 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20"
              placeholder="Tell us what you need help with"
              required
            />
          </label>

          <Button type="submit" disabled={isSubmitting} className="w-full md:w-fit">
            {isSubmitting ? "Submitting..." : "Get My Premium Quote"}
          </Button>

          {serverMessage ? (
            <p className={cn("text-sm", isError ? "text-red-600" : "text-emerald-700")}>{serverMessage}</p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
