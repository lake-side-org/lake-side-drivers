import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  return siteConfig.nav.map((item) => ({
    url: `${siteConfig.url}${item.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1 : 0.7,
  }));
}
