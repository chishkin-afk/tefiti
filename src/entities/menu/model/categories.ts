export const categories = ["Всё меню", "Кофе", "Выпечка", "Десерты", "Избранное"] as const;
export type Category = typeof categories[number];
export type MenuItem = { id: string; name: string; price: number; portion: string; image: string | null; category: Category; description: string; tags: string[]; allergens: string };
