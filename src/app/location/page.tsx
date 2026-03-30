import type { Metadata } from "next";
import { BUSINESS } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Visit Our Location",
  description:
    "Find directions to Firdous Gallery in Jatra, Birbhum and visit our store for Berger paints.",
  path: "/location",
});

export default function LocationPage() {
  return (
    <div className="space-y-8 py-8 md:py-12">
      <section className="glass-card p-6 md:p-8">
        <h1 className="text-4xl md:text-5xl">Visit Our Shop</h1>
        <p className="mt-3 text-base md:text-lg">
          Find {BUSINESS.name} at {BUSINESS.city}, {BUSINESS.district}, {BUSINESS.state}.
        </p>
      </section>

      <section className="glass-card overflow-hidden p-3 md:p-4">
        <div className="overflow-hidden rounded-2xl">
          <iframe
            title="Firdous Gallery Location"
            src={BUSINESS.mapEmbedUrl}
            width="100%"
            height="420"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>
      </section>
    </div>
  );
}

