import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/checkout", "/cuenta"],
    },
    sitemap: "https://vitamex.mx/sitemap.xml",
  };
}
