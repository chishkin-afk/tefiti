import { site } from "@/shared/config/site";

export function buildCafeSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    ...(site.url ? { "@id": `${site.url}/#cafe`, url: site.url, image: `${site.url}/social-cover.jpg`, logo: `${site.url}/assets/logo/tefiti-logo.svg`, hasMenu: `${site.url}/#menu` } : {}),
    name: site.name,
    description: site.description,
    telephone: site.phone,
    address: { "@type": "PostalAddress", streetAddress: "Красная улица, 98", addressLocality: "Краснодар", addressRegion: "Краснодарский край", addressCountry: "RU" },
    geo: { "@type": "GeoCoordinates", ...site.coordinates },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "22:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday", "Sunday"], opens: "09:00", closes: "23:00" },
    ],
    servesCuisine: ["Кофе", "Десерты", "Завтраки"],
    currenciesAccepted: "RUB",
    hasMap: site.maps,
    sameAs: [site.maps, site.telegram],
    amenityFeature: [{ "@type": "LocationFeatureSpecification", name: "Wi-Fi", value: true }, { "@type": "LocationFeatureSpecification", name: "Можно с питомцами", value: true }],
  };
}
