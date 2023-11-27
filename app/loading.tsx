"use client";

import { cn, container, item } from "@/lib/utils";
import clsx from "clsx";
import { motion } from "framer-motion";
import { Londrina_Outline } from "next/font/google";
import Image from "next/image";
import { FC } from "react";

const lonOutline = Londrina_Outline({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-londrina",
});

type LoadingProps = {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Loading({ setLoading }: LoadingProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      onAnimationComplete={() => setLoading(false)}
      className={cn("container relative mx-auto h-screen w-full overflow-clip")}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="text-9xl"
      >
        <h1 className="absolute -right-5 top-10 -z-10 rotate-12 text-6xl font-bold opacity-20 lg:text-8xl xl:right-0 xl:top-24">
          Web Design
        </h1>
        <h2 className="absolute left-5 top-[40%] -z-10 rotate-12 text-7xl font-bold opacity-10 md:left-20 md:top-[30%] lg:top-[40%] lg:text-9xl xl:top-1/3">
          Development
        </h2>
        <h3
          className={cn(
            "absolute left-1/3 top-[22%] -z-10 rotate-12 font-londrina text-[10rem] text-indigo-900 opacity-40 md:left-1/2 md:top-[20%] lg:text-[13rem] xl:top-[15%] xl:text-[15rem]",
            lonOutline.className,
          )}
        >
          SEO
        </h3>
        <h4
          className={cn(
            "absolute bottom-[14%] right-10 -z-10 rotate-12 font-londrina text-5xl text-indigo-900 opacity-40 md:bottom-[10%] md:text-7xl lg:bottom-[5%] lg:text-9xl xl:bottom-1/4",
            lonOutline.className,
          )}
        >
          Digital Marketing
        </h4>
        <h5 className="absolute bottom-[25%] right-0 -z-10 rotate-12 text-6xl font-bold opacity-5 md:bottom-[30%] md:right-10 xl:bottom-20 xl:left-1/3">
          Optimization
        </h5>
        <h6
          className={cn(
            "absolute bottom-1/3 left-5 -z-10 rotate-12 font-londrina text-[8rem] text-indigo-900 opacity-40 md:bottom-[40%] md:left-0 lg:bottom-[30%] lg:text-[10rem] xl:bottom-1/3 xl:left-5 xl:text-[11rem]",
            lonOutline.className,
          )}
        >
          UX/UI
        </h6>
        <p className="absolute bottom-10 left-3 -z-10 rotate-12 text-6xl font-extralight opacity-5">
          Graphics
        </p>
        <p className="absolute left-4 top-[15%] -z-10 rotate-12 text-3xl font-semibold opacity-5 md:left-12 md:top-[8%] lg:left-0 lg:top-[5%] lg:text-5xl">
          Promotion Analytics
        </p>
      </motion.div>
      <ImageBlock
        image_id="image-2"
        variants={item}
        size="h-[150px] w-[225px] md:h-[200px] md:w-[300px] xl:h-[266px] xl:w-[400px]"
      />
      <ImageBlock
        image_id="image-1"
        variants={item}
        size="h-[150px] w-[225px] md:h-[200px] md:w-[300px] xl:h-[333px] xl:w-[500px]"
      />
      <ImageBlock
        image_id="image-3"
        variants={item}
        size="h-[225px] w-[180px] md:h-[300px] md:w-[240px]"
      />
      <ImageBlock
        image_id="image-4"
        variants={item}
        size="h-[150px] w-[225px] md:h-[200px] md:w-[300px] xl:h-[267px] xl:w-[400px]"
      />
    </motion.div>
  );
}

type ImageBlockProps = {
  image_id: string;
  variants: any;
  size?: string;
};

export const ImageBlock: FC<ImageBlockProps> = ({
  image_id,
  variants,
  size,
}) => {
  return (
    <motion.div
      variants={variants}
      className={clsx(
        "absolute flex origin-center items-center justify-center",
        image_id,
      )}
    >
      <Image
        src={`/images/loader/${image_id}.webp`}
        alt={image_id}
        width={1920}
        height={1280}
        priority
        className={cn("rounded-lg", size)}
      />
    </motion.div>
  );
};
