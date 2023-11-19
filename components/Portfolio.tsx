import Image from "next/image";
import { Element } from "react-scroll";
import Circles from "./ui/Circles";
import PortfolioCard from "./ui/PortfolioCard";
import PortfolioCardMobile from "./ui/PortfolioCardMobile";
import SectionName from "./ui/SectionName";

const Portfolio = () => {
  return (
    <Element name="portfolio" className="container mx-auto flex flex-col">
      <SectionName>Портфолио</SectionName>
      {/* Desktop */}
      <div className="mx-5 hidden flex-col items-center gap-20 lg:flex">
        {/* Card 1 */}
        <PortfolioCard
          rightFront
          badges={["SPA", "Веб-дизайн", "React", "Лого"]}
          title="Chef Catering"
          description="Повышение узнаваемости бренда компании, предоставляющей кейтеринг
        услуги. Задачей было сделать компанию более видимой в онлайне и
        привлечь новых клиентов."
          imageSrc="/images/portfolio/case_image_1.png"
        />
        {/* Horizontal line */}
        <div className="relative h-[1px] w-full">
          <Image
            src="/images/portfolio/horizontal_line.svg"
            alt="line"
            fill
            className="object-cover"
          />
        </div>
        {/* Card 2 */}
        <PortfolioCard
          badges={["SPA", "Веб-дизайн", "React", "Лого"]}
          title="HarmonyOm"
          description="Наша задача состояла в том, чтобы сделать студию более доступной и привлекательной для практикующих йогу, а также увеличить базу клиентов и повысить уровень участия."
          imageSrc="/images/portfolio/case_image_2.png"
        />
        {/* Horizontal line */}
        <div className="relative h-[1px] w-full">
          <Image
            src="/images/portfolio/horizontal_line.svg"
            alt="line"
            fill
            className="object-cover"
          />
        </div>
        {/* Card 3 */}
        <PortfolioCard
          rightFront
          badges={["Сайт", "Веб-дизайн", "Django"]}
          title="АвтоМастер"
          description="Задачей было разработать информативный и удобный веб-сайт с доступом к информации о услугах, ценах, акциях компании и онлайн-записью на прием."
          imageSrc="/images/portfolio/case_image_3.png"
        />
      </div>
      {/* Mobile */}
      <div className="mx-5 flex flex-col gap-10 lg:hidden">
        <PortfolioCardMobile
          caseNumber="Кейс №1"
          title="Chef Catering"
          description="Повышение узнаваемости бренда компании, предоставляющей кейтеринг
            услуги. Задачей было сделать компанию более видимой в онлайне и
            привлечь новых клиентов."
        />
        <div className="relative h-[1px] w-full">
          <Image
            src="/images/horizontal_line.svg"
            alt="line"
            fill
            className="object-cover"
          />
        </div>
        <PortfolioCardMobile
          caseNumber="Кейс №2"
          title="HarmonyOm"
          description="Наша задача состояла в том, чтобы сделать студию более доступной и
            привлекательной для практикующих йогу, а также увеличить базу
            клиентов и повысить уровень участия."
        />
        <div className="relative h-[1px] w-full">
          <Image
            src="/images/horizontal_line.svg"
            alt="line"
            fill
            className="object-cover"
          />
        </div>
        <PortfolioCardMobile
          caseNumber="Кейс №3"
          title="АвтоМастер"
          description="Задачей было разработать информативный и удобный веб-сайт с доступом
            к информации о услугах, ценах, акциях компании и онлайн-записью на
            прием."
        />
      </div>
      <Circles className="absolute -left-[25%] top-[32%] -z-50 max-h-max w-1/2" />
      <Circles className="absolute left-[12%] top-[45%] -z-50 max-h-max w-2/3" />
    </Element>
  );
};

export default Portfolio;
