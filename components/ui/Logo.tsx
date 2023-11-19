import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { FC } from "react";

type Props = {
  className?: string;
  variants?: any;
};

const Logo: FC<Props> = ({ className, variants }) => {
  const pathAnimation = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1.6, ease: "easeInOut" },
    },
  };
  return (
    <motion.svg
      variants={variants}
      viewBox="0 0 140 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-40 w-40", className)}
      layoutId="logo-1"
    >
      <motion.path
        variants={pathAnimation}
        initial={"hidden"}
        animate={"visible"}
        d="M40.0001 100L40 200L6.9697e-05 200L9.15527e-05 100L40.0001 100Z"
        fill="black"
      />
      <motion.path
        variants={pathAnimation}
        initial={"hidden"}
        animate={"visible"}
        d="M40 40L40 80L2.94047e-05 80L3.8147e-05 40L40 40Z"
        fill="black"
      />
      <motion.path
        variants={pathAnimation}
        initial={"hidden"}
        animate={"visible"}
        d="M5.00001 10L15 10C26.0457 10 35 18.9543 35 30L25 30C13.9543 30 5.00001 21.0457 5.00001 10Z"
        fill="#DE0707"
      />
      <motion.path
        variants={pathAnimation}
        initial={"hidden"}
        animate={"visible"}
        d="M40 20L70.0001 20C97.6143 20 120 42.3858 120 70V70C120 97.6143 97.6143 120 70 120L40 120"
        stroke="black"
        strokeWidth="40"
      />
      <motion.path
        variants={pathAnimation}
        initial={"hidden"}
        animate={"visible"}
        d="M125.505 2.47V4.525H122.715V13H120.15V4.525H117.36V2.47H125.505ZM138.717 2.47V13H136.152V6.685L133.797 13H131.727L129.357 6.67V13H126.792V2.47H129.822L132.777 9.76L135.702 2.47H138.717Z"
        fill="black"
      />
    </motion.svg>
  );
};

export default Logo;
