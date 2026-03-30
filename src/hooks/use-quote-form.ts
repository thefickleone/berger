"use client";

import { FormEvent, useMemo, useState } from "react";
import { INQUIRY_TYPES, LeadFormData } from "@/types/lead";

const initialState: LeadFormData = {
  fullName: "",
  phone: "",
  inquiryType: INQUIRY_TYPES[0],
  message: "",
};

export function useQuoteForm() {
  const [formData, setFormData] = useState<LeadFormData>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverMessage, setServerMessage] = useState("");
  const [isError, setIsError] = useState(false);

  async function submitLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setServerMessage("");
    setIsError(false);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        setIsError(true);
        setServerMessage(result.message ?? "Unable to submit your inquiry right now.");
        return;
      }

      setServerMessage(result.message ?? "Thanks! We will contact you shortly.");
      setFormData(initialState);
    } catch {
      setIsError(true);
      setServerMessage("Network issue. Please try again in a moment.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const options = useMemo(() => INQUIRY_TYPES, []);

  return {
    formData,
    setFormData,
    isSubmitting,
    submitLead,
    serverMessage,
    isError,
    options,
  };
}

