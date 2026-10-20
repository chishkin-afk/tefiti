const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const site = {
  name: "Тефити",
  title: "Тефити — кофейня и десерты в Краснодаре, Красная, 98",
  description: "Кофейня «Тефити» на Красной, 98 в Краснодаре. Авторский кофе, завтраки и десерт Теф, который вы собираете сами. Меню, отзывы, часы работы и маршрут.",
  url: configuredUrl ? new URL(configuredUrl).origin : undefined,
  phone: "+7 (961) 855-47-70",
  phoneHref: "tel:+79618554770",
  address: "Краснодар, Красная улица, 98",
  maps: "https://yandex.ru/maps/org/tefiti/73006262346/",
  route: "https://yandex.ru/maps/?rtext=~45.031838%2C38.973118&rtt=auto",
  delivery: "https://eda.yandex.ru/r/tefiti?placeSlug=tefiti",
  telegram: "https://t.me/tefiti_krd",
  coordinates: { latitude: 45.031838, longitude: 38.973118 },
} as const;
