"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="grid items-center gap-10 py-8 md:grid-cols-2 md:py-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="space-y-6"
      >
        <span className="glass-pill inline-flex px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-charcoal-700)]">
          Authorized Berger Dealer in Jatra
        </span>
        <h1 className="text-4xl leading-tight md:text-5xl">
          Transform Your Home with Premium Berger Paint Solutions
        </h1>
        <p className="max-w-xl text-base md:text-lg">
          Trusted by homeowners in Jatra, Birbhum for genuine Berger paints, accurate quantity guidance,
          and elegant long-lasting finishes.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/quote"
            className="rounded-full bg-[var(--color-luxury-blue)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-charcoal-900)]"
          >
            Get Free Quote
          </Link>
          <Link
            href="/location"
            className="glass-soft rounded-full px-6 py-3 text-sm font-semibold text-[var(--color-charcoal-900)] transition-all duration-200 hover:-translate-y-0.5"
          >
            Visit Shop
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
        className="relative"
      >
        <div className="glass-card overflow-hidden p-3">
          <Image
            src="/hero-showcase.svg"
            alt="Premium paint consultation and home color transformation"
            width={900}
            height={700}
            priority
            className="h-auto w-full rounded-2xl"
          />
        </div>
        <div className="glass-soft absolute -bottom-5 left-5 max-w-[250px] px-4 py-3 text-sm text-[var(--color-charcoal-700)]">
          <p className="font-semibold text-[var(--color-charcoal-900)]">Trusted Local Guidance</p>
          <p className="mt-1">Shade selection, quantity planning, and quick callback support for your home.</p>
        </div>
      </motion.div>
    </section>
  );
}

