import { HomePage } from "@/views/home/ui/home-page/home-page";
import { buildConceptSchema } from "@/shared/lib/seo/structured-data";
export default function Page() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildConceptSchema()).replace(/</g, "\\u003c") }} /><HomePage /></>;
}
