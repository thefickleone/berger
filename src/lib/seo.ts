import type { Metadata } from "next";
import { BUSINESS } from "@/lib/constants";

const SITE_NAME = "Firdous Gallery";
const DEFAULT_DESCRIPTION =
  "Authorized Berger Paints dealer in Jatra, Birbhum for premium interior and exterior paint solutions.";

const DEFAULT_OG_IMAGE = "/og/home.svg";

export function getBaseUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (configured) {
    return configured.replace(/\/$/, "");
  }

  return "http://localhost:3000";
}

export function buildPageMetadata({
  title,
  description,
  path,
  imagePath = DEFAULT_OG_IMAGE,
}: {
  title: string;
  description: string;
  path: string;
  imagePath?: string;
}): Metadata {
  const baseUrl = getBaseUrl();
  const canonical = `${baseUrl}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: SITE_NAME,
      title,
      description,
      images: [
        {
          url: imagePath,
          width: 900,
          height: 700,
          alt: `${title} - ${SITE_NAME}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imagePath],
    },
  };
}

export function buildRootMetadata(): Metadata {
  const baseUrl = getBaseUrl();

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: SITE_NAME,
      template: `%s | ${SITE_NAME}`,
    },
    description: DEFAULT_DESCRIPTION,
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: "/",
      siteName: SITE_NAME,
      title: SITE_NAME,
      description: DEFAULT_DESCRIPTION,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 900,
          height: 700,
          alt: "Firdous Gallery premium paint showroom",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: SITE_NAME,
      description: DEFAULT_DESCRIPTION,
      images: [DEFAULT_OG_IMAGE],
    },
    category: "home improvement",
  };
}

export function buildLocalBusinessJsonLd() {
  const baseUrl = getBaseUrl();

  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: BUSINESS.name,
    url: baseUrl,
    image: `${baseUrl}${DEFAULT_OG_IMAGE}`,
    description: DEFAULT_DESCRIPTION,
    telephone: BUSINESS.phoneDisplay,
    areaServed: `${BUSINESS.city}, ${BUSINESS.district}, ${BUSINESS.state}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.state,
      addressCountry: BUSINESS.country,
    },
    sameAs: [BUSINESS.instagramUrl],
  };
}

