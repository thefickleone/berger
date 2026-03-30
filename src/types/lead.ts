export const INQUIRY_TYPES = [
  "Interior Painting",
  "Exterior Painting",
  "Waterproofing",
  "Primer Consultation",
  "Other",
] as const;

export type InquiryType = (typeof INQUIRY_TYPES)[number];

export type LeadFormData = {
  fullName: string;
  phone: string;
  inquiryType: InquiryType;
  message: string;
};

export type LeadApiPayload = LeadFormData & {
  source?: string;
};

