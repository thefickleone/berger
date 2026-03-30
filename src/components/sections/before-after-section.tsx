"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BEFORE_AFTER_ITEMS } from "@/lib/constants";
import { SectionShell } from "@/components/ui/section-shell";
import { cn } from "@/lib/utils";

export function BeforeAfterSection() {
  return (
    <SectionShell
      id="gallery"
      title="Cinematic Before and After Transformations"
      description="A premium finish is not just color. It is depth, texture, and light interaction tailored for your space."
      className="cinematic-section"
    >
      <div className="grid gap-6 md:grid-cols-6">
        {BEFORE_AFTER_ITEMS.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
            className={cn(
              "glass-card glow-card group premium-lift overflow-hidden p-3",
              index === 0 ? "md:col-span-4" : "md:col-span-2",
            )}
          >
            <div className={cn("grid gap-3", index === 0 ? "md:grid-cols-2" : "grid-cols-1")}>
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src={item.before}
                  alt={`${item.title} before repaint`}
                  width={800}
                  height={520}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                />
                <span className="glass-pill absolute left-3 top-3 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  Before
                </span>
              </div>
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src={item.after}
                  alt={`${item.title} after repaint`}
                  width={800}
                  height={520}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                />
                <span className="glass-pill absolute left-3 top-3 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  After
                </span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between gap-4">
              <h3 className="text-xl md:text-2xl">{item.title}</h3>
              <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Luxury Finish</span>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
