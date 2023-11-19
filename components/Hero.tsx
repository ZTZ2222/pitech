"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Element } from "react-scroll";
import PageTransition from "./PageTransition";
import { RequestButton } from "./ui/Button";
import Underline from "./ui/Underline";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Hero = () => {
  return (
    <Element
      name="hero"
      className="bg-gradient-to-r from-custom-bg1 to-custom-bg2"
    >
      <div className="container relative mx-auto flex flex-col items-center justify-between gap-5 md:flex-row md:gap-0 xl:justify-between">
        <motion.div
          animate="visible"
          initial="hidden"
          variants={container}
          className="m-5 flex flex-col gap-7 md:mt-8 md:max-w-[400px] lg:max-w-[550px] lg:gap-[50px] xl:max-w-[600px] 2xl:max-w-[800px]"
        >
          <motion.h1
            variants={item}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="shrink-0 text-center text-4xl font-bold leading-tight tracking-[0.65px] text-white md:text-start md:text-[42px] xl:text-5xl 2xl:text-7xl"
          >
            Делаем сайты которые увеличат ваши{" "}
            <span className="relative">
              продажи
              <Underline className="absolute -bottom-2 right-0 h-[15px] w-[160px] md:h-[17px] md:w-[190px] lg:-bottom-3 xl:h-[19px] xl:w-[220px]" />
            </span>
          </motion.h1>
          <motion.p
            variants={item}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-center text-lg text-white opacity-90 md:text-start lg:text-xl xl:text-[28px] xl:leading-9 xl:tracking-[0.28px]"
          >
            Трансформация бизнеса с помощью потрясающего дизайна и эффективного
            цифрового маркетинга
          </motion.p>
          <motion.div
            className="mx-auto mt-[10px] md:mx-0 md:mr-auto"
            variants={item}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <RequestButton to="contact" />
          </motion.div>
        </motion.div>
        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
        >
          <Image
            src="/images/hero/illustration_1.svg"
            alt="Teamwork illustration"
            width={571}
            height={634}
            priority
            className="m-5 h-[324px] w-[282px] sm:h-[400px] sm:w-[360px] md:h-[300px] md:w-auto lg:h-[470px] lg:w-[386px] xl:h-[500px] xl:w-[520px] 2xl:h-[634px] 2xl:w-[571px]"
          />
        </motion.div>
      </div>
      {/* <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: [0.68, -0.6, 0.32, 1.6] }}
        className="ml-auto mr-10 flex h-14 w-14 items-center justify-center rounded-full bg-dark-blue ring-2 ring-white"
      >
        <p className="text-sm font-bold text-white">Hello</p>
      </motion.div> */}
      <PageTransition />
    </Element>
  );
};

export default Hero;
