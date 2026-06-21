import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://123sudo.com";
  return ["", "/apps/descroll", "/descroll/privacy-policy", "/descroll/terms-and-conditions", "/contact"].map((path) => ({ url: `${baseUrl}${path}`, lastModified: new Date(), changeFrequency: path === "" ? "monthly" : "yearly", priority: path === "" ? 1 : path === "/apps/descroll" ? 0.9 : 0.6 }));
}
