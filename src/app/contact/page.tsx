import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/constants";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Firdous Gallery",
  description:
    "Get in touch with Firdous Gallery in Jatra, Birbhum for Berger paint consultation and quick support.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="space-y-8 py-8 md:py-12">
      <section className="glass-card grid gap-8 p-6 md:grid-cols-2 md:p-8">
        <div>
          <h1 className="text-4xl md:text-5xl">Contact Firdous Gallery</h1>
          <p className="mt-3 max-w-xl text-base md:text-lg">
            Visit our shop in {BUSINESS.city}, {BUSINESS.district}, or share your requirement for quick,
            personalized Berger product guidance.
          </p>
          <div className="mt-5 space-y-2 text-sm">
            <p>
              <span className="font-semibold text-foreground">Phone: </span>
              {BUSINESS.phoneDisplay}
            </p>
            <p>
              <span className="font-semibold text-foreground">Instagram: </span>
              <a href={BUSINESS.instagramUrl} target="_blank" rel="noreferrer" className="underline">
                @bergerpaintsindia
              </a>
            </p>
          </div>
        </div>

        <div className="glass-soft p-5">
          <h2 className="text-2xl">Location Details</h2>
          <p className="mt-3 text-sm">
            {BUSINESS.city}, {BUSINESS.district}, {BUSINESS.state}, {BUSINESS.country}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/location"
              className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-foreground"
            >
              Visit Shop
            </Link>
            <Link
              href="/quote"
              className="glass-soft rounded-full px-5 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-0.5"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

