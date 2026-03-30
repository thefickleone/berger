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
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-white shadow-2xl shadow-emerald-900/25 transition-transform duration-200 hover:-translate-y-1"
    >
      <MessageCircle size={18} aria-hidden="true" />
      WhatsApp
    </motion.a>
  );
}

