export const categories = ["Кофе и чай", "Авторские", "Десерты", "Холодные", "Завтраки и еда", "Всё меню"] as const;
export type Category = typeof categories[number];
export type MenuItem = { id: string; name: string; price: number; portion: string; image: string | null; category: Category };
