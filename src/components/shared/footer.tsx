import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/70 bg-white/55 backdrop-blur-md">
      <div className="mx-auto flex w-[min(1100px,92%)] flex-col gap-3 py-8 text-sm text-[var(--color-charcoal-700)] md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Firdous Gallery. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="/contact" className="transition-colors hover:text-[var(--color-charcoal-900)]">
            Contact
          </Link>
          <Link href="/location" className="transition-colors hover:text-[var(--color-charcoal-900)]">
            Location
          </Link>
        </div>
      </div>
    </footer>
  );
}

