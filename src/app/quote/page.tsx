import type { Metadata } from "next";
import { QuoteFormSection } from "@/components/sections/quote-form-section";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Get a Berger Paint Quote",
  description:
    "Submit your painting requirement and receive a personalized Berger product recommendation from Firdous Gallery.",
  path: "/quote",
});

export default function QuotePage() {
  return (
    <div className="py-8 md:py-12">
      <QuoteFormSection title="Get a Personalized Berger Quote" />
    </div>
  );
}

