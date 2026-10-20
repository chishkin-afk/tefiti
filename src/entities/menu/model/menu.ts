import delivery from "../../../../public/assets/menu/delivery-menu.json";
import type { Category, MenuItem } from "./categories";

const signature = new Set(["Раф Халва", "Раф груша-дорблю", "Раф Табак-ваниль", "Латте Апельсин-пломбир", "Латте фисташка"]);
const coffee = new Set(["Латте", "Капучино", "Облепиховый чай", "Раф Классический", "Какао", "Американо", "Матча латте", "Чай груша-корица", "Имбирный чай", "Чай манго-маракуя"]);

function getCategory(name: string, portion: string): Category {
  if (signature.has(name)) return "Авторские";
  if (coffee.has(name)) return "Кофе и чай";
  if (/^(Сырники|Салат|Сэндвич|Чиабатта)/.test(name)) return "Завтраки и еда";
  if (portion.includes("мл")) return "Холодные";
  return "Десерты";
}

export const menuItems: MenuItem[] = delivery.items.map((item, index) => ({
  id: `menu-${index + 1}`,
  name: item.name,
  price: item.price,
  portion: item.portion,
  image: item.image ? `/assets/${item.image}` : null,
  category: getCategory(item.name, item.portion),
}));

