import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";
import { validateLeadPayload } from "@/lib/validations";

export async function POST(request: Request) {
  const payload = (await request.json()) as Record<string, unknown>;

  const validation = validateLeadPayload({
    fullName: String(payload.fullName ?? ""),
    phone: String(payload.phone ?? ""),
    inquiryType: payload.inquiryType as never,
    message: String(payload.message ?? ""),
    source: "website",
  });

  if (!validation.valid) {
    return NextResponse.json({ message: validation.error }, { status: 400 });
  }

  const lead = validation.value;
  if (!lead) {
    return NextResponse.json({ message: "Invalid request payload." }, { status: 400 });
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return NextResponse.json(
      { message: "Service temporarily unavailable. Please call us directly." },
      { status: 503 },
    );
  }

  const { error } = await supabase.from("leads").insert({
    full_name: lead.fullName,
    phone: lead.phone,
    inquiry_type: lead.inquiryType,
    message: lead.message,
    source: lead.source,
  });

  if (error) {
    return NextResponse.json(
      { message: "Could not submit inquiry at the moment. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({ message: "Thanks! We will contact you soon." }, { status: 201 });
}

