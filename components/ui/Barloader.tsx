import { motion } from "framer-motion";

const variants = {
  initial: {
    scaleY: 0.5,
    opacity: 0,
  },
  animate: {
    scaleY: 1,
    opacity: 1,
    transition: {
      repeat: Infinity,
      duration: 0.5,
      ease: "circIn",
      repeatType: "mirror" as any,
    },
  },
};

const BarLoader = () => {
  return (
    <motion.div
      transition={{
        staggerChildren: 0.125,
      }}
      initial="initial"
      animate="animate"
      className="flex gap-1"
    >
      <motion.div
        variants={variants}
        className="h-7 w-2 bg-accent group-hover:bg-dark-blue"
      />
      <motion.div
        variants={variants}
        className="h-7 w-2 bg-accent group-hover:bg-dark-blue"
      />
      <motion.div
        variants={variants}
        className="h-7 w-2 bg-accent group-hover:bg-dark-blue"
      />
      <motion.div
        variants={variants}
        className="h-7 w-2 bg-accent group-hover:bg-dark-blue"
      />
      <motion.div
        variants={variants}
        className="h-7 w-2 bg-accent group-hover:bg-dark-blue"
      />
    </motion.div>
  );
};

export default BarLoader;
