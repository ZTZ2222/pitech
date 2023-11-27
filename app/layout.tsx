import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin", "cyrillic"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Pitech | Website Design, Landing Pages, and Promotion in the USA",
  description:
    "Website design, landing pages, and promotion services in the USA. Order a website, SEO optimization, site promotion in major cities, and more.",
  keywords:
    "Order website USA, Site promotion in the USA, SEO optimization, Order website, SEO promotion USA, SEO optimization price, SEO promotion website, Create website from scratch, Site optimization, Search engine optimization, SEO promotion of a new website, Web development in the USA, Turnkey website USA, E-commerce website development, Web studio in the USA, WordPress website creation, Order website in the USA, SEO promotion website price, Website creation in the USA, SEO promotion in the USA, Top site promotion, Site optimization for search queries, SEO optimization and promotion, Order SEO promotion of the website, Order search engine promotion of the website, SEO promotion in Yandex price, Promotion website, Bringing the website to the top, Top promotion, SEO website optimization, Website developers in the USA, Turnkey website creation, Landing page development in the USA, Website development and creation, Order SEO promotion, Website design, Website development, Web application, Online store, Website development in the USA, Website development in major cities, Website creation in the USA, Create website in the USA, Create online store, Create landing page, Create one-page website, Create business card website, Promotion and optimization of websites, Optimization and promotion of websites, Order SEO promotion of the website, SEO promotion of the website from scratch, Website creation in the USA price, Website in the USA, Search engine promotion of websites, Bringing the website to the top, Order turnkey website, Search engine optimization and promotion of websites, Creation and promotion of websites, Order website optimization website promotion, SEO search engine promotion of websites, SEO promotion of the website in search engines.",
  icons: {
    icon: "/icons/favicon.png",
  },
};

// export const metadata: Metadata = {
//   title: "Pitech | Создание сайтов, лендингов и продвижение в Кыргызстане",
//   description:
//     "Создание сайтов, лендингов и продвижение в Кыргызстане. Заказать сайт, SEO оптимизация, продвижение сайтов в Бишкеке и многое другое.",
//   keywords:
//     "Заказать сайт Бишкек, Продвижение сайтов в Бишкеке, Продвижение сайтов, SEO оптимизация, Заказать сайт, SEO продвижение Бишкек, SEO оптимизация цена, SEO продвижение раскрутка сайта, Создание сайта с нуля, Оптимизация сайта, Поисковая оптимизация, SEO продвижение нового сайта, Разработка веб-сайтов Бишкек, Сайт под ключ Бишкек, Разработка интернет-магазина, Веб-студия Бишкек, Создание сайта на WordPress, Заказать сайт в Бишкеке, SEO продвижение сайта цена, Изготовление сайтов Бишкек, SEO продвижение Бишкек, Продвижение сайтов в топ, Оптимизация сайта под поисковые запросы, SEO оптимизация и продвижение, SEO продвижение сайта заказать, Заказать поисковое продвижение сайта, Продвижение сайта в Яндексе цена, Продвижение раскрутка сайта, Вывод сайта в топ, Продвижение в топ, Оптимизация сайтов SEO, Разработчики сайтов Бишкек, Создание сайтов под ключ, Разработка лендинга Бишкек, Разработка и создание сайтов, Заказать SEO продвижение, Дизайн сайта, Разработка сайта, Веб-приложение, Интернет-магазин, Разработка сайтов Бишкек, Разработка сайтов в Бишкеке, Создание сайтов в Бишкеке, Создать сайт Бишкек, Создать сайт интернет-магазин, Создать сайт лендинг-пейдж, Создать сайт одностраничный, Создать сайт визитка, Продвижение и оптимизация сайтов, Оптимизация и продвижение сайтов, Заказать SEO продвижение сайта, Продвижение сайта с нуля, Создание сайтов Бишкек цена, Веб-сайт Бишкек, Поисковое продвижение сайтов, Раскрутка сайта в топ, Заказать сайт под ключ, Поисковая оптимизация и продвижение сайтов, Создание и продвижение сайтов, Заказать оптимизацию сайтов раскрутка сайта, SEO поисковое продвижение сайтов, SEO продвижение сайта в поисковых системах.",
//   icons: {
//     icon: "/icons/favicon.png",
//   },
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${nunito.className}`}>{children}</body>
    </html>
  );
}
