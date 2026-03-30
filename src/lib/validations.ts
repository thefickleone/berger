import { INQUIRY_TYPES, LeadApiPayload } from "@/types/lead";

export function sanitizeText(input: string) {
  return input.trim().replace(/\s+/g, " ");
}

export function validateLeadPayload(payload: Partial<LeadApiPayload>) {
  const fullName = sanitizeText(payload.fullName ?? "");
  const phone = sanitizeText(payload.phone ?? "");
  const message = sanitizeText(payload.message ?? "");
  const inquiryType = payload.inquiryType;

  if (fullName.length < 2) {
    return { valid: false, error: "Please enter your full name." };
  }

  if (!/^\+?[0-9\s-]{10,15}$/.test(phone)) {
    return { valid: false, error: "Please enter a valid phone number." };
  }

  if (!inquiryType || !INQUIRY_TYPES.includes(inquiryType)) {
    return { valid: false, error: "Please choose an inquiry type." };
  }

  if (message.length < 10) {
    return { valid: false, error: "Please share at least 10 characters in your message." };
  }

  return {
    valid: true,
    value: {
      fullName,
      phone,
      inquiryType,
      message,
      source: payload.source ?? "website",
    },
  } as const;
}

