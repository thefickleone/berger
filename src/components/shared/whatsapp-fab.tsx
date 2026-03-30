"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export function WhatsAppFab() {
  const href = `https://wa.me/${BUSINESS.whatsappNumber}?text=Hi%20Firdous%20Gallery%2C%20I%20want%20help%20choosing%20Berger%20paint.`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.85, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.45, ease: "easeOut" }}
      whileHover={{ scale: 1.08, y: -4 }}
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-white shadow-2xl shadow-emerald-900/30 transition-all duration-200 sm:bottom-8 sm:right-8 md:px-5 md:py-3.5 md:text-base"
    >
      <MessageCircle size={18} aria-hidden="true" className="md:h-5 md:w-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </motion.a>
  );
}
