import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.ton-domaine.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/assistance-smartphone-senior-la-rochelle",
    "/demarches-administratives-en-ligne-la-rochelle",
    "/aide-ordinateur-email-la-rochelle",
    "/securite-arnaques-internet-senior",
    "/formation-numerique-senior-la-rochelle",
    "/zone-intervention-la-rochelle",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}