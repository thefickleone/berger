import type { MetadataRoute } from "next";
import { getBaseUrl } from "@/lib/seo";

const routes = ["/", "/about", "/products", "/contact", "/location", "/quote"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();
  const now = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}

