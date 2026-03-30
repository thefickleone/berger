import type { Metadata } from "next";
import { BeforeAfterSection } from "@/components/sections/before-after-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProductShowcaseSection } from "@/components/sections/product-showcase-section";
import { QuoteFormSection } from "@/components/sections/quote-form-section";
import { SectionShell } from "@/components/ui/section-shell";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Premium Berger Paint Dealer in Jatra, Birbhum",
  description:
    "Firdous Gallery helps homeowners choose authentic Berger paints with trusted local guidance and quick quote support.",
  path: "/",
  imagePath: "/og/home.svg",
});

export default function Home() {
  return (
    <div className="space-y-2 pb-8">
      <HeroSection />
      <BeforeAfterSection />
      <ProductShowcaseSection />
      <SectionShell
        id="quote"
        className="cinematic-section"
        title="Ready to Give Your Home a Premium Finish?"
        description="Share your requirement and receive curated product guidance, quantity planning, and a quick callback from our team."
      >
        <QuoteFormSection compact />
      </SectionShell>
    </div>
  );
}
