import Image from "next/image";
import { Element } from "react-scroll";
import Circles from "./ui/Circles";
import PortfolioCard from "./ui/PortfolioCard";
import PortfolioCardMobile from "./ui/PortfolioCardMobile";
import SectionName from "./ui/SectionName";

const Portfolio = () => {
  return (
    <Element name="portfolio" className="container mx-auto flex flex-col">
      <SectionName>Portfolio</SectionName>
      {/* Desktop */}
      <div className="mx-5 hidden flex-col items-center gap-20 lg:flex">
        {/* Card 1 */}
        <PortfolioCard
          rightFront
          badges={["SPA", "Web Design", "React", "Logo"]}
          title="Chef Catering"
          description="Enhancing the brand recognition of a catering company. The goal was to make the company more visible online and attract new clients."
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
          badges={["SPA", "Web Design", "React", "Logo"]}
          title="HarmonyOm"
          description="Our goal was to make the studio more accessible and appealing to yoga practitioners, as well as to increase the client base and enhance participation levels."
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
          badges={["Website", "Web Design", "Django"]}
          title="AutoMaster"
          description="The goal was to develop an informative and user-friendly website with access to information about the company's services, prices, promotions, and online appointment scheduling."
          imageSrc="/images/portfolio/case_image_3.png"
        />
      </div>
      {/* Mobile */}
      <div className="mx-5 flex flex-col gap-10 lg:hidden">
        <PortfolioCardMobile
          caseNumber="Case №1"
          title="Chef Catering"
          description="Enhancing the brand recognition of a catering company. The goal was to make the company more visible online and attract new clients."
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
          caseNumber="Case №2"
          title="HarmonyOm"
          description="Our goal was to make the studio more accessible and appealing to yoga practitioners, as well as to increase the client base and enhance participation levels."
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
          caseNumber="Case №3"
          title="AutoMaster"
          description="The goal was to develop an informative and user-friendly website with access to information about the company's services, prices, promotions, and online appointment scheduling."
        />
      </div>
      <Circles className="absolute -left-[25%] top-[32%] -z-50 max-h-max w-1/2" />
      <Circles className="absolute left-[12%] top-[45%] -z-50 max-h-max w-2/3" />
    </Element>
  );
};

export default Portfolio;
