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
			<div className="mx-auto w-[min(1100px,92%)] glass-pill premium-ring px-3 py-3 sm:px-5 md:px-6">
				<div className="flex items-center justify-between gap-4 sm:gap-6">
					<Link
						href="/"
						className="font-display text-lg transition-opacity duration-200 hover:opacity-75 sm:text-xl"
					>
						Firdous Gallery
					</Link>

					<nav aria-label="Primary navigation" className="hidden md:block">
						<ul className="flex items-center gap-1 lg:gap-2">
							{navLinks.map((link) => (
								<li key={link.href}>
									<Link
										href={link.href}
										className="group relative rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-white/70 hover:text-foreground"
									>
										{link.label}
										<span className="absolute bottom-1 left-3 right-3 h-0.5 scale-x-0 rounded-full bg-primary transition-transform duration-300 group-hover:scale-x-100" />
									</Link>
								</li>
							))}
						</ul>
					</nav>

					<Link
						href="/quote"
						className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-blue-900/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-foreground sm:px-5 sm:py-2.5 sm:text-sm"
					>
						Get Quote
					</Link>
				</div>
			</div>
		</motion.header>
	);
}
