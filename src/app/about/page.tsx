import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "About Firdous Gallery",
  description:
    "Learn about Firdous Gallery, an authorized Berger Paints dealer serving homeowners in Jatra, Birbhum.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="space-y-8 py-8 md:py-12">
      <section className="glass-card p-7 md:p-9">
        <h1 className="text-4xl md:text-5xl">About {BUSINESS.name}</h1>
        <p className="mt-4 max-w-3xl text-base md:text-lg">
          {BUSINESS.name} is an authorized Berger Paints dealer serving homeowners in {BUSINESS.city},
          {" "}
          {BUSINESS.district}. We help customers choose the right products for elegant interiors,
          weather-ready exteriors, and long-term home protection.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <article className="glass-soft p-6">
          <h2 className="text-2xl">Authorized Trust</h2>
          <p className="mt-2 text-sm">Genuine Berger products with dealer-backed support and guidance.</p>
        </article>
        <article className="glass-soft p-6">
          <h2 className="text-2xl">Local Expertise</h2>
          <p className="mt-2 text-sm">Recommendations that fit local climate, surface types, and budgets.</p>
        </article>
        <article className="glass-soft p-6">
          <h2 className="text-2xl">Fast Response</h2>
          <p className="mt-2 text-sm">Quick quote assistance on WhatsApp and phone for homeowners nearby.</p>
        </article>
      </section>

      <Link
        href="/quote"
        className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-foreground"
      >
        Request a Quote
      </Link>
    </div>
  );
}

