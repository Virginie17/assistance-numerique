import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://virginieassistance.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/facturation-electronique", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/assistance-smartphone-senior-la-rochelle", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/demarches-administratives-en-ligne-la-rochelle", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/aide-ordinateur-email-la-rochelle", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/securite-arnaques-internet-senior", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/formation-numerique-senior-la-rochelle", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/zone-intervention-la-rochelle", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
