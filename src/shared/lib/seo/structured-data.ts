import { site } from "@/shared/config/site";
export function buildConceptSchema() {
  return {
    "@context": "https://schema.org", "@type": "CreativeWork", name: site.title, description: site.description,
    genre: "Дизайн-концепт вымышленной кофейни", inLanguage: "ru", isAccessibleForFree: true,
    ...(site.url ? { url: site.url, image: `${site.url}/social-cover.jpg` } : {}),
  };
}
