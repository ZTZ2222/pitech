import { customEase } from "@/lib/utils";
import clsx from "clsx";
import { motion } from "framer-motion";
import { FC } from "react";
import { AboutCaseButton } from "./Button";

type Props = {
  caseNumber: string;
  title: string;
  description: string;
  className?: string;
};

const PortfolioCardMobile: FC<Props> = ({
  caseNumber,
  title,
  description,
  className,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: -35 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: customEase }}
      viewport={{ once: true }}
      className={clsx(
        "flex flex-col items-center gap-7 self-center text-center",
        className,
      )}
    >
      <p>{caseNumber}</p>
      <h3 className="text-3xl font-bold">{title}</h3>
      <p className="text-lg">{description}</p>
      <AboutCaseButton href="#" />
    </motion.div>
  );
};

export default PortfolioCardMobile;
