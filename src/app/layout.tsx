import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/shared/footer";
import { Navbar } from "@/components/shared/navbar";
import { WhatsAppFab } from "@/components/shared/whatsapp-fab";
import { buildLocalBusinessJsonLd, buildRootMetadata } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = buildRootMetadata();

const localBusinessJsonLd = buildLocalBusinessJsonLd();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <Navbar />
        <main className="mx-auto w-[min(1100px,92%)] flex-1 pt-28 pb-16">{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
