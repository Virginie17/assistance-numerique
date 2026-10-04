export default function LocalBusinessSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://virginieassistance.fr/#business",
    name: "Virginie Assistance",
    url: "https://virginieassistance.fr",
    image: "https://virginieassistance.fr/virginie.webp",
    email: "virginie.assistancenumerique@gmail.com",
    description:
      "Assistance numérique et administrative à domicile autour de La Rochelle et Lagord, et services numériques pour professionnels.",
    areaServed: ["La Rochelle", "Lagord", "Aytré", "Périgny"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Accompagnements",
      itemListElement: [
        "Assistance numérique",
        "Assistance administrative",
        "Services numériques professionnels",
      ].map((name) => ({ "@type": "OfferCatalog", name })),
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\u003c"),
      }}
    />
  );
}
