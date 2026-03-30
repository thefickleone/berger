"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BEFORE_AFTER_ITEMS } from "@/lib/constants";
import { SectionShell } from "@/components/ui/section-shell";

export function BeforeAfterSection() {
  return (
    <SectionShell
      id="gallery"
      title="Before and After Transformations"
      description="See how planned color choices and finish quality can elevate spaces from ordinary to premium."
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {BEFORE_AFTER_ITEMS.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.1, ease: "easeOut" }}
            className="glass-card group overflow-hidden p-3"
          >
            <div className="grid gap-3">
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src={item.before}
                  alt={`${item.title} before repaint`}
                  width={800}
                  height={520}
                  className="h-auto w-full transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <span className="glass-pill absolute left-3 top-3 px-3 py-1 text-xs font-semibold">Before</span>
              </div>
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src={item.after}
                  alt={`${item.title} after repaint`}
                  width={800}
                  height={520}
                  className="h-auto w-full transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <span className="glass-pill absolute left-3 top-3 px-3 py-1 text-xs font-semibold">After</span>
              </div>
            </div>
            <h3 className="mt-4 text-xl">{item.title}</h3>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}

