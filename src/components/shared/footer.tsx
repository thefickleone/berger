import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/70 bg-white/55 backdrop-blur-md">
      <div className="mx-auto flex w-[min(1100px,92%)] flex-col gap-4 py-6 text-xs text-muted-foreground sm:gap-5 sm:py-7 md:flex-row md:items-center md:justify-between md:py-8 md:text-sm">
        <p className="font-medium">© {new Date().getFullYear()} Firdous Gallery. All rights reserved.</p>
        <div className="flex items-center gap-4 sm:gap-6">
          <Link 
            href="/contact" 
            className="group relative transition-colors duration-200 hover:text-foreground"
          >
            Contact
            <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link 
            href="/products" 
            className="group relative transition-colors duration-200 hover:text-foreground"
          >
            Products
            <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
