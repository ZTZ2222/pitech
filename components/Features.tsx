import { Element } from "react-scroll";
import Blob from "./ui/Blob";
import { RequestButton } from "./ui/Button";
import FeatureCard from "./ui/FeatureCard";
import SectionName from "./ui/SectionName";

const featureList = [
  {
    iconPath: "/images/features/monitor-icon.svg",
    title: "Адаптивный Дизайн",
    description:
      "Создаем веб-сайты, которые впечатляют внешним видом и отлично работают на всех устройствах.",
  },
  {
    iconPath: "/images/features/seo-icon.svg",
    title: "SEO Оптимизация",
    description:
      "Повысим ваш рейтинг в поисковых системах и привлечем больше трафика на ваш сайт.",
  },
  {
    iconPath: "/images/features/social-icon.svg",
    title: "Продвижение в Соцсетях",
    description:
      "Общайтесь со своей аудиторией и расширяйте свой охват благодаря плавной интеграции с социальными сетями.",
  },
  {
    iconPath: "/images/features/bot-icon.svg",
    title: "Разработка Ботов",
    description:
      "Создаем ботов для сбора данных и чат-ботов, автоматизируя процессы и улучшая взаимодействие с клиентами.",
  },
];

const Features = () => {
  return (
    <Element name="features" className="container mx-auto flex flex-col">
      <SectionName>Услуги</SectionName>
      <div className="relative mx-5 flex flex-col items-center justify-center gap-12 lg:flex-row lg:gap-5 xl:justify-between xl:gap-[77px]">
        <div className="flex flex-col justify-center gap-6 text-center md:max-w-full lg:max-w-[600px] lg:gap-10 lg:text-start xl:max-w-[600px] xl:gap-16">
          <h2 className="text-2xl font-bold md:text-4xl lg:text-4xl xl:text-[46px]">
            Преобразите свой онлайн-облик с помощью современного дизайна
          </h2>
          <p className="text-sm opacity-60 md:text-base lg:text-xl">
            Наши услуги веб-дизайна и цифрового маркетинга созданы с учетом
            ваших уникальных потребностей. Мы сочетаем креативность, стратегию и
            технологии для достижения исключительных результатов
          </p>
          <RequestButton to="contact" className="self-center lg:self-start" />
        </div>
        <div className="flex flex-col items-center justify-center gap-6">
          {featureList.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
        <Blob className="absolute bottom-20 right-0 -z-50 lg:-top-10" />
      </div>
    </Element>
  );
};

export default Features;
