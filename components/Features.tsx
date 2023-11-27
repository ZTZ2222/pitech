import { Element } from "react-scroll";
import Blob from "./ui/Blob";
import { RequestButton } from "./ui/Button";
import FeatureCard from "./ui/FeatureCard";
import SectionName from "./ui/SectionName";

const featureList = [
  {
    iconPath: "/images/features/monitor-icon.svg",
    title: "Adaptive Design",
    description:
      "Crafting websites that impress visually and perform exceptionally on all devices.",
  },
  {
    iconPath: "/images/features/seo-icon.svg",
    title: "SEO Optimization",
    description:
      "Elevate your search engine ranking and attract more traffic to your site.",
  },
  {
    iconPath: "/images/features/social-icon.svg",
    title: "Social Media Promotion",
    description:
      "Engage with your audience and expand your reach through seamless integration with social networks.",
  },
  {
    iconPath: "/images/features/bot-icon.svg",
    title: "Bot Development",
    description:
      "Building data collection bots and chatbots, automating processes, and enhancing customer interaction.",
  },
];

const Features = () => {
  return (
    <Element name="features" className="container mx-auto flex flex-col">
      <SectionName>Features</SectionName>
      <div className="relative mx-5 flex flex-col items-center justify-center gap-12 lg:flex-row lg:gap-5 xl:justify-between xl:gap-[77px]">
        <div className="flex flex-col justify-center gap-6 text-center md:max-w-full lg:max-w-[600px] lg:gap-10 lg:text-start xl:max-w-[600px] xl:gap-16">
          <h2 className="text-2xl font-bold md:text-4xl lg:text-4xl xl:text-[46px]">
            Elevate your online presence with the help of modern design
          </h2>
          <p className="text-sm opacity-60 md:text-base lg:text-xl">
            Our web design and digital marketing services are crafted with your
            unique needs in mind. We blend creativity, strategy, and technology
            to achieve exceptional results
          </p>
          <div className="mx-auto lg:mx-0">
            <RequestButton to="contact" className="self-center lg:self-start" />
          </div>
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
