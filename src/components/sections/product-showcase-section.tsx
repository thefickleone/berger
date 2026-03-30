"use client";

import { motion } from "framer-motion";
import { SectionShell } from "@/components/ui/section-shell";
import { PRODUCT_ITEMS } from "@/lib/constants";

export function ProductShowcaseSection() {
  return (
    <SectionShell
      id="products"
      title="Curated Berger Ranges for Modern Homes"
      description="From interior elegance to weather-resilient protection, each category is selected for premium long-term performance."
      className="cinematic-section"
    >
      <div className="grid gap-4 sm:gap-5 md:gap-6 md:grid-cols-2">
        {PRODUCT_ITEMS.map((product, index) => (
          <motion.article
            key={product.category}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.5, delay: index * 0.07, ease: "easeOut" }}
            whileHover={{ y: -4 }}
            className="glass-card glow-card premium-lift relative overflow-hidden p-5 sm:p-6 md:p-7 lg:p-8"
          >
            <div className="absolute right-4 top-4 text-[10px] sm:text-xs tracking-[0.12em] text-muted-foreground">
              0{index + 1}
            </div>

            <span className="glass-pill inline-flex px-2 py-0.5 text-[9px] sm:text-xs font-semibold uppercase tracking-[0.11em] text-muted-foreground">
              {product.badge}
            </span>
            <h3 className="mt-3 text-2xl sm:text-2.5xl md:text-3xl capitalize">{product.category}</h3>
            <p className="mt-2 text-sm sm:text-base font-semibold text-foreground md:text-lg">{product.name}</p>
            <p className="mt-2 sm:mt-3 max-w-[48ch] text-xs sm:text-sm text-subtle-foreground md:text-base">
              {product.description}
            </p>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
