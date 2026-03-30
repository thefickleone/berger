"use client";

import { motion } from "framer-motion";
import { SectionShell } from "@/components/ui/section-shell";
import { PRODUCT_ITEMS } from "@/lib/constants";

export function ProductShowcaseSection() {
  return (
    <SectionShell
      id="products"
      title="Premium Berger Product Categories"
      description="Choose from trusted Berger ranges matched for your interior style, exterior durability, and long-term protection."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {PRODUCT_ITEMS.map((product, index) => (
          <motion.article
            key={product.category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
            className="glass-card p-6"
          >
            <span className="glass-pill inline-flex px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-charcoal-700)]">
              {product.badge}
            </span>
            <h3 className="mt-4 text-2xl capitalize">{product.category}</h3>
            <p className="mt-2 text-base font-semibold text-[var(--color-charcoal-900)]">{product.name}</p>
            <p className="mt-2 text-sm">{product.description}</p>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}

