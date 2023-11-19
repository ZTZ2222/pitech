"use client";

import { customEase } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";
import Badge from "./Badge";
import { AboutCaseButton } from "./Button";

interface Props {
  rightFront?: boolean;
  badges: string[];
  title: string;
  description: string;
  imageSrc: string;
}

const PortfolioCard: FC<Props> = ({
  rightFront,
  badges,
  title,
  description,
  imageSrc,
}) => {
  return (
    <div className="grid-container rectangle">
      {rightFront ? (
        <>
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: customEase }}
            viewport={{ once: true }}
            className="item-top-left flex flex-col gap-7 border border-dark-blue bg-white lg:px-16 lg:py-8 xl:px-[95px] xl:py-[68px]"
          >
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                {badges.map((badge, index) => (
                  <Badge key={index}>{badge}</Badge>
                ))}
              </div>
              <h4 className="text-[32px] font-bold">{title}</h4>
            </div>
            <p>{description}</p>
            <AboutCaseButton href="#" />
          </motion.div>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: customEase }}
            viewport={{ once: true }}
            className="item-bottom-right relative border border-dark-blue"
          >
            <Image
              src={imageSrc}
              alt="hero"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 65vw"
              className="object-cover"
            />
          </motion.div>
        </>
      ) : (
        <>
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: customEase }}
            viewport={{ once: true }}
            className="item-bottom-left relative border border-dark-blue"
          >
            <Image
              src={imageSrc}
              alt="hero"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 65vw"
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: customEase }}
            viewport={{ once: true }}
            className="item-top-right flex flex-col gap-7 border border-dark-blue bg-white lg:px-16 lg:py-8 xl:px-[95px] xl:py-[68px]"
          >
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                {badges.map((badge, index) => (
                  <Badge key={index}>{badge}</Badge>
                ))}
              </div>
              <h4 className="text-[32px] font-bold">{title}</h4>
            </div>
            <p>{description}</p>
            <AboutCaseButton href="#" />
          </motion.div>
        </>
      )}
    </div>
  );
};

export default PortfolioCard;
