import Image from "next/image";
import { Element } from "react-scroll";
import Circles from "./ui/Circles";
import SectionName from "./ui/SectionName";

const About = () => {
  return (
    <Element name="about" className="container mx-auto flex flex-col">
      <SectionName className="my-0 mb-12 mt-5 lg:my-0 lg:mb-20">
        О нас
      </SectionName>
      <div className="relative mx-5 flex flex-col items-center justify-between gap-10 md:flex-row md:gap-5">
        {/* Illustration */}
        <Image
          src="/images/about/illustration_2.svg"
          alt="Teamwork illustration"
          width={503}
          height={613}
          className="order-2 h-2/5 w-2/5 md:order-1 xl:max-w-[500px]"
        />
        {/* Text */}
        <div className="order-1 flex max-w-[500px] flex-col md:order-2 xl:max-w-[630px]">
          <div className="h-8 w-full bg-custom-gray" />
          <div className="mx-3 my-4 flex flex-col items-center justify-center gap-5 rounded-xl text-sm text-dark-blue lg:mx-8 lg:my-10 xl:text-lg">
            <h2 className="text-2xl font-bold lg:text-4xl">
              Почему{" "}
              <span className="relative text-accent">
                Pitech
                <svg
                  width="117"
                  height="45"
                  viewBox="0 0 117 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute -left-1.5 -top-1 -z-10 h-10 w-20 lg:-left-2 lg:top-0 lg:h-[45px] lg:w-[117px]"
                >
                  <path
                    d="M36.5183 1.91932C30.0041 6.14889 12.536 -2.52354 5.85225 10.3712C1.4714 18.8231 -2.47139 18.173 1.90946 36.052C5.15673 49.3047 30.8232 44.1788 46.5943 42.8785C65.3219 41.3345 72.3173 48.3465 101.793 42.8785C124.574 38.6526 115.374 36.7021 114.06 18.8231C112.745 0.944088 109.861 8.51665 88.2126 5.17004C67.1844 1.91937 43.5277 -2.63173 36.5183 1.91932Z"
                    fill="#5E6973"
                  />
                </svg>
              </span>{" "}
              — именно тот партнер, который вам нужен
            </h2>
            <p className="text-justify">
              Вне зависимости от вашей отрасли, сегодня веб-сайт необходим для
              вашего бизнеса. Однако не достаточно просто иметь сайт: он должен
              быть понятным, быстрым, удобным на мобильных устройствах, гибким –
              и, конечно же, легко находимым.
            </p>
            <p className="text-justify">
              Наша команда всегда ориентирована на меняющиеся тенденции и
              требования Интернета. Поэтому быстрая загрузка, элементы
              способствующие продажам, и удобный для мобильных устройств дизайн
              являются для нас само собой разумеющимися.
            </p>
            <p className="text-justify">
              Наши веб-дизайнеры активно реагируют на потребности клиентов,
              привносят новые идеи и всегда делают все возможное, чтобы укрепить
              вашу компанию и повысить ее конкурентоспособность в Интернете.
              Именно так мы делаем ваше присутствие в Интернете пригодным для
              будущего.
            </p>
          </div>
          <div className="h-16 w-full bg-custom-gray">
            <a
              href="/"
              className="flex h-full items-center justify-center text-3xl font-bold text-white"
            >
              www.pitech.kg
            </a>
          </div>
        </div>
      </div>
      <Circles className="absolute -right-[20%] top-[13%] -z-50 max-h-max w-1/3" />
    </Element>
  );
};

export default About;
