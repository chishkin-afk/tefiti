const configuredUrl = process.env.NEXT_PUBLIC_DEMO_URL;
export const site = {
  name: "Слой",
  title: "Слой — кофе в чистом виде. Дизайн-концепт кофейни",
  description: "Слой — вымышленная кофе-студия. Спешелти-кофе, хрустящая выпечка и маленькие ежедневные ритуалы. Интерактивный дизайн-концепт.",
  url: configuredUrl ? new URL(configuredUrl).origin : undefined,
  demo: true,
  email: "hello@sloy.example",
  note: "Вымышленная кофе-студия. Дизайн-концепт.",
} as const;
