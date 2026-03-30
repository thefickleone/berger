"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="cinematic-section relative min-h-[92vh] overflow-hidden pt-6 sm:pt-8 md:min-h-[100vh] md:pt-12 lg:pt-14">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="pointer-events-none absolute -left-32 top-4 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(105,132,255,0.33),transparent_68%)] blur-3xl sm:h-72 sm:w-72 md:-left-20 md:top-8"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.9 }}
        className="pointer-events-none absolute -right-32 bottom-4 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(76,108,230,0.25),transparent_70%)] blur-3xl sm:h-80 sm:w-80 md:-right-20 md:bottom-8"
      />

      <div className="grid items-center gap-14 md:grid-cols-[1.12fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 space-y-6 sm:space-y-7 md:space-y-8 md:max-w-xl"
        >
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.45 }}
            className="glass-pill luxury-pulse inline-flex px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground sm:px-5 sm:py-2 sm:text-xs"
          >
            Authorized Berger Dealer | Jatra, Birbhum
          </motion.span>

          <h1 className="text-3xl leading-[1.08] sm:text-4xl md:text-6xl lg:text-7xl">
            Transform Your Home with Premium Berger Paint Solutions
          </h1>

          <p className="max-w-md text-sm sm:text-base md:max-w-lg md:text-lg lg:text-xl text-subtle-foreground">
            Crafted shade guidance, genuine Berger products, and designer-level finish planning for
            homeowners who want a refined, long-lasting result.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1 sm:gap-4 sm:pt-2">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/quote"
                className="rounded-full bg-primary px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-blue-900/25 transition-all duration-300 hover:-translate-y-1 hover:bg-foreground sm:px-7 sm:py-3.5 sm:text-sm"
              >
                Get Your Luxury Quote
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/location"
                className="glass-soft premium-lift rounded-full px-5 py-2.5 text-xs font-semibold text-foreground sm:px-7 sm:py-3.5 sm:text-sm"
              >
                Visit Our Gallery
              </Link>
            </motion.div>
          </div>

          <div className="grid max-w-xs sm:max-w-sm grid-cols-2 gap-2 sm:gap-4 pt-2">
            <motion.div whileHover={{ y: -4 }} className="glass-soft premium-lift p-3 sm:p-4">
              <p className="text-xl sm:text-2xl font-semibold text-foreground">12+ Years</p>
              <p className="mt-1 text-[10px] sm:text-xs uppercase tracking-[0.12em] text-muted-foreground">Local trust</p>
            </motion.div>
            <motion.div whileHover={{ y: -4 }} className="glass-soft premium-lift p-3 sm:p-4">
              <p className="text-xl sm:text-2xl font-semibold text-foreground">100% Genuine</p>
              <p className="mt-1 text-[10px] sm:text-xs uppercase tracking-[0.12em] text-muted-foreground">Berger products</p>
            </motion.div>
            </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="relative z-10 hidden md:block"
        >
          <div className="depth-stage relative h-120 md:h-140">
            <motion.div
              animate={{ rotateY: [0, 10, -8, 0], rotateX: [0, -4, 3, 0] }}
              transition={{ duration: 10, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
              className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 transform-3d"
            >
              <div className="glass-card glow-card absolute inset-0 border border-white/60 transform-[translateZ(70px)]" />
              <div className="glass-card absolute inset-3 border border-white/55 bg-white/45 transform-[rotateY(90deg)_translateZ(110px)]" />
              <div className="glass-card absolute inset-3 border border-white/55 bg-white/40 transform-[rotateX(90deg)_translateZ(110px)]" />
              <div className="absolute inset-8 rounded-[28px] bg-[radial-gradient(circle_at_20%_20%,rgba(112,141,255,0.7),rgba(46,70,170,0.85))] shadow-[0_25px_100px_-30px_rgba(36,56,143,0.8)] transform-[translateZ(120px)]" />
              <div className="absolute inset-19.5 rounded-full border border-white/70 bg-white/20 transform-[translateZ(150px)]" />
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="glass-card premium-lift absolute left-0 top-8 w-44 p-4"
            >
              <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Color Curation</p>
              <p className="mt-2 text-sm font-semibold text-foreground">Designer palette matching for modern homes</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 7.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="glass-card premium-lift absolute bottom-6 right-0 w-48 p-4"
            >
              <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Fast Assistance</p>
              <p className="mt-2 text-sm font-semibold text-foreground">Quick callback and exact quantity guidance</p>
            </motion.div>

            <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-90 w-90 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(86,118,255,0.26),transparent_68%)] blur-3xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
