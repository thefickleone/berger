import type { Metadata } from "next";
import { ProductShowcaseSection } from "@/components/sections/product-showcase-section";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Berger Product Categories",
  description:
    "Explore interior paints, exterior paints, primers, and waterproofing solutions available at Firdous Gallery.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <div className="py-8 md:py-12">
      <ProductShowcaseSection />
    </div>
  );
}

