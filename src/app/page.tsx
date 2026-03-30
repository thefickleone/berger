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
    <div>
      <HeroSection />
      <BeforeAfterSection />
      <ProductShowcaseSection />
      <SectionShell
        id="quote"
        title="Ready to Upgrade Your Home Finish?"
        description="Get a call back with product suggestions, quantity planning, and the right Berger range for your requirement."
      >
        <QuoteFormSection compact />
      </SectionShell>
    </div>
  );
}
