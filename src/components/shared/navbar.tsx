"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
  { href: "/location", label: "Location" },
  { href: "/quote", label: "Get Quote" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="fixed inset-x-0 top-4 z-50"
    >
      <div className="mx-auto w-[min(1100px,92%)] glass-pill premium-ring px-4 py-3 md:px-6">
        <div className="flex items-center justify-between gap-6">
          <Link
            href="/"
            className="font-display text-lg text-[var(--color-charcoal-900)] transition-opacity duration-200 hover:opacity-80"
          >
            Firdous Gallery
          </Link>

          <nav aria-label="Primary navigation" className="hidden md:block">
            <ul className="flex items-center gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="rounded-full px-4 py-2 text-sm font-medium text-[var(--color-charcoal-700)] transition-all duration-200 hover:bg-white/70 hover:text-[var(--color-charcoal-900)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link
            href="/quote"
            className="rounded-full bg-[var(--color-luxury-blue)] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-charcoal-900)]"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </motion.header>
  );
}

