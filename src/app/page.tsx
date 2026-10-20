import { HomePage } from "@/views/home/ui/home-page/home-page";
import { buildCafeSchema } from "@/shared/lib/seo/structured-data";

export default function Page() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildCafeSchema()).replace(/</g, "\\u003c") }} /><HomePage /></>;
}
