"use client";

import clsx from "clsx";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import React, { FC } from "react";

interface Props {
  iconPath: string;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard: FC<Props> = ({
  iconPath,
  title,
  description,
  className,
}) => {
  // Initialize motion values for x and y coordinates
  // These values will be updated when the mouse moves
  // Similar to useState() hook
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Initialize spring values for rotateX and rotateY for smoother animations
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Calculate the X and Y percentages of the mouse position relative to the target HTMLDivElement and map it to the rotateX and rotateY values.
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // Get the bounding rectangle of the target HTMLDivElement.
    const rect = (e.target as HTMLDivElement).getBoundingClientRect();

    // Calculate the width and height of the target HTMLDivElement.
    const width = rect.width;
    const height = rect.height;

    // Calculate the X and Y coordinates of the mouse pointer relative to the target HTMLDivElement.
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate the X and Y percentages of the mouse position relative to the target HTMLDivElement.
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    // Set the X and Y values to the calculated percentages.
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={clsx(
        "flex max-h-[163px] w-[385px] shrink-0 cursor-pointer items-center gap-3 rounded-[20px] bg-white px-4 py-2.5 text-dark-blue shadow-custom md:w-[520px] md:gap-[30px] md:px-5 md:py-[25px] lg:w-[385px] lg:gap-3 lg:py-4 xl:w-[520px] xl:gap-[30px] xl:py-[25px]",
        className,
      )}
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div
        style={{ transform: "translateZ(25px)" }}
        className="relative h-[65px] w-[65px] shrink-0 md:h-[90px] md:w-[90px] lg:h-[75px] lg:w-[75px] xl:h-[90px] xl:w-[90px]"
      >
        <Image src={iconPath} alt="icon" fill className="object-cover" />
      </div>

      <div
        style={{ transform: "translateZ(25px)" }}
        className="flex flex-col gap-2 md:gap-[14px] lg:gap-2 xl:gap-[14px]"
      >
        <h4 className="text-lg font-bold md:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h4>
        <p className="text-sm xl:text-base">{description}</p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
