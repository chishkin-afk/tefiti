import { Header } from "@/widgets/header/ui/header/header";
import { Hero } from "@/widgets/hero/ui/hero/hero";
import { About } from "@/widgets/about/ui/about/about";
import { Menu } from "@/widgets/menu/ui/menu/menu";
import { DessertStory } from "@/widgets/dessert-story/ui/dessert-story/dessert-story";
import { Reviews } from "@/widgets/reviews/ui/reviews/reviews";
import { Contacts } from "@/widgets/contacts/ui/contacts/contacts";
import { Footer } from "@/widgets/footer/ui/footer/footer";

export function HomePage() {
  return <><a href="#main" className="skipLink">Перейти к содержимому</a><Header /><main id="main"><Hero /><About /><Menu /><DessertStory /><Reviews /><Contacts /></main><Footer /></>;
}
