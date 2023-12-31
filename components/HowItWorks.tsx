import Image from "next/image";
import { Element } from "react-scroll";
import Circles from "./ui/Circles";
import SectionName from "./ui/SectionName";
import StepCard from "./ui/StepCard";
import StepCircle from "./ui/StepCircle";

const HowItWorks = () => {
  return (
    <Element name="how_it_works" className="flex flex-col items-center pb-5">
      <SectionName>How it works</SectionName>
      {/* Заголовок */}
      <h1 className="relative mb-20 flex items-end gap-[10px] text-2xl font-medium md:text-[40px]">
        <Image
          src="/images/hiw/five.png"
          alt="Пять"
          width={60}
          height={79}
          className="h-[40px] w-[30px] md:h-[79px] md:w-[60px]"
        />
        <span className="mb-3">Steps to Your Own Website</span>
      </h1>
      {/* Desktop */}
      <div className="hidden grid-cols-25 grid-rows-25 md:h-[1230px] md:w-[728px] lg:grid lg:h-[1400px] lg:w-[829px] xl:h-[2000px] xl:w-[1184px]">
        {/* Шаг 1 */}
        <Image
          className="step-image-1"
          src="/images/hiw/step_1_image.svg"
          alt="Шаг 1"
          width={308}
          height={320}
        />
        <StepCard
          className="step-text-1 my-1 lg:my-7 xl:my-[38px]"
          shadowSide="right"
          title="Free consultation"
          description="During the free consultation, we will first discuss how your new website should look. We welcome your own ideas at this stage. After the discussion, we will prepare a non-binding proposal for you, providing individual solutions at fair prices."
        />
        <StepCircle
          className="step-circle-1 translate-x-4 translate-y-12"
          value={1}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="400"
          height="316"
          viewBox="0 0 400 316"
          fill="none"
          className="step-svg-1 -z-10 -rotate-2 scale-[.7] lg:-translate-x-9 lg:translate-y-2 xl:translate-x-2 xl:translate-y-[43px] xl:scale-100"
        >
          <path
            d="M1 1C6.5 54 54.4544 168.5 153.5 168.5C252.5 168.5 379.5 222.5 399 315"
            stroke="#302F4D"
            strokeDasharray="7 7"
          />
        </svg>

        {/* Шаг 2 */}
        <Image
          className="step-image-2 -translate-y-4"
          src="/images/hiw/step_2_image.svg"
          alt="Шаг 2"
          width={285}
          height={353}
        />
        <StepCard
          className="step-text-2 my-1 lg:my-7 xl:my-[38px]"
          shadowSide="left"
          title="Concept Development"
          description="Do you like our proposal? Then we will immediately start its implementation and create the concept for your website. Your corporate design serves as the foundation for us to ensure a consistent online appearance for your company while supporting the recognition of your new website."
        />
        <StepCircle
          className="step-circle-2 translate-x-4 translate-y-12"
          value={2}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="391"
          height="337"
          viewBox="0 0 391 337"
          fill="none"
          className="step-svg-2 -z-10 rotate-3 scale-[.7] lg:-translate-x-[68px] lg:translate-y-0 xl:-translate-x-5 xl:translate-y-7 xl:scale-95"
        >
          <path
            d="M0.5 336.5C0.5 277 82.687 167.719 181.5 174.5C283.5 181.5 382 91.5 390.5 0.5"
            stroke="#302F4D"
            strokeDasharray="7 7"
          />
        </svg>

        {/* Шаг 3 */}
        <Image
          className="step-image-3 -translate-y-4"
          src="/images/hiw/step_3_image.svg"
          alt="Шаг 3"
          width={339}
          height={360}
        />
        <StepCard
          className="step-text-3 my-1 lg:my-7 xl:my-[38px]"
          shadowSide="right"
          title="Presentation"
          description="Now it's your turn! Introducing the preliminary concept, you can share with us your preferences for adjustments and optimizations, ensuring that your new website precisely aligns with your ideas and the requirements of your target audience – we always take this into account when planning your web design."
        />
        <StepCircle
          className="step-circle-3 -translate-x-2 translate-y-12"
          value={3}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="382"
          height="300"
          viewBox="0 0 382 300"
          fill="none"
          className="step-svg-3 -z-10 rotate-3 scale-75 lg:-translate-x-7 lg:-translate-y-6 xl:-translate-y-1 xl:translate-x-8 xl:scale-110"
        >
          <path
            d="M1 0.5C1 59 60.9546 159.5 160 159.5C267 159.5 359.5 208.5 381.5 299.5"
            stroke="#302F4D"
            strokeDasharray="7 7"
          />
        </svg>

        {/* Шаг 4 */}
        <Image
          className="step-image-4 -translate-y-4"
          src="/images/hiw/step_4_image.svg"
          alt="Шаг 4"
          width={284}
          height={270}
        />
        <StepCard
          className="step-text-4 my-5 lg:my-12 xl:my-[66px]"
          shadowSide="left"
          title="Implementation and Testing"
          description="Once you have approved our concept, we get to work: we implement the developed web design concept and create your new website. Uniqueness, optimized technologies, and a clear structure are the cornerstones of your new online presence. A detailed functional test completes the implementation of your website."
        />
        <StepCircle
          className="step-circle-4 translate-x-4 translate-y-2"
          value={4}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="405"
          height="298"
          viewBox="0 0 405 298"
          fill="none"
          className="step-svg-4 -z-10 -rotate-12 scale-90 lg:-translate-x-[76px] lg:translate-y-1 xl:-translate-x-9 xl:translate-y-8 xl:-rotate-3 xl:scale-110"
        >
          <path
            d="M0.5 297C9.5 238 109.663 121.935 204.5 150.5C287.5 175.5 392.5 86 404 0.5"
            stroke="#302F4D"
            strokeDasharray="7 7"
          />
        </svg>

        {/* Шаг 5 */}
        <Image
          className="step-image-5 -translate-y-4"
          src="/images/hiw/step_5_image.svg"
          alt="Шаг 5"
          width={289}
          height={350}
        />
        <StepCard
          className="step-text-5 my-1 lg:my-7 xl:my-[38px]"
          shadowSide="right"
          title="Go Live"
          description="At the final stage, you can once again carefully review your new website to ensure that all your preferences are implemented and that your company is represented according to your ideas. After the review, give us your approval, and finally, it's time: your new website is live!"
        />
        <StepCircle
          className="step-circle-5 translate-x-4 translate-y-12"
          value={5}
        />
      </div>
      {/* Mobile */}
      <div className="flex flex-col gap-24 lg:hidden">
        {/* Шаг 1 */}
        <div className="relative">
          <StepCircle
            className="absolute -top-8 left-1/2 shrink-0 -translate-x-8"
            value={1}
          />
          <StepCard
            className="pt-10 text-justify lg:pt-0"
            shadowSide="right"
            title="Free consultation"
            description="During the free consultation, we will first discuss how your new website should look. We welcome your own ideas at this stage. After the discussion, we will prepare a non-binding proposal for you, providing individual solutions at fair prices."
          />
        </div>
        {/* Шаг 2 */}
        <div className="relative">
          <StepCircle
            className="absolute -top-8 left-1/2 shrink-0 -translate-x-8"
            value={2}
          />
          <StepCard
            className="pt-10 text-justify lg:pt-0"
            shadowSide="right"
            title="Concept Development"
            description="Do you like our proposal? Then we will immediately start its implementation and create the concept for your website. Your corporate design serves as the foundation for us to ensure a consistent online appearance for your company while supporting the recognition of your new website."
          />
        </div>
        {/* Шаг 3 */}
        <div className="relative">
          <StepCircle
            className="absolute -top-8 left-1/2 shrink-0 -translate-x-8"
            value={3}
          />
          <StepCard
            className="pt-10 text-justify lg:pt-0"
            shadowSide="right"
            title="Presentation"
            description="Now it's your turn! Introducing the preliminary concept, you can share with us your preferences for adjustments and optimizations, ensuring that your new website precisely aligns with your ideas and the requirements of your target audience – we always take this into account when planning your web design."
          />
        </div>
        {/* Шаг 4 */}
        <div className="relative">
          <StepCircle
            className="absolute -top-8 left-1/2 shrink-0 -translate-x-8"
            value={4}
          />
          <StepCard
            className="pt-10 text-justify lg:pt-0"
            shadowSide="right"
            title="Implementation and Testing"
            description="Once you have approved our concept, we get to work: we implement the developed web design concept and create your new website. Uniqueness, optimized technologies, and a clear structure are the cornerstones of your new online presence. A detailed functional test completes the implementation of your website."
          />
        </div>
        {/* Шаг 5 */}
        <div className="relative">
          <StepCircle
            className="absolute -top-8 left-1/2 shrink-0 -translate-x-8"
            value={5}
          />
          <StepCard
            className="pt-10 text-justify lg:pt-0"
            shadowSide="right"
            title="Go Live"
            description="At the final stage, you can once again carefully review your new website to ensure that all your preferences are implemented and that your company is represented according to your ideas. After the review, give us your approval, and finally, it's time: your new website is live!"
          />
        </div>
      </div>
      <Circles className="absolute -right-[25%] top-[60%] -z-50 max-h-max w-1/2" />
      <Circles className="absolute left-[25%] top-[78%] -z-50 max-h-max w-2/5" />
    </Element>
  );
};

export default HowItWorks;
