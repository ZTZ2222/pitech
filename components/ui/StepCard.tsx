import clsx from "clsx";
import { FC } from "react";

type Props = {
  title: string;
  description: string;
  shadowSide?: "left" | "right";
  className?: string;
};

const StepCard: FC<Props> = ({
  title,
  description,
  shadowSide = "left",
  className,
}) => {
  const shadowVariants = {
    left: "shadow-custom-left",
    right: "shadow-custom-right",
  };

  const shadow = shadowVariants[shadowSide];

  return (
    <div
      className={clsx(
        "mx-3 inline-flex flex-col justify-center gap-3 rounded-[20px] border border-custom-gray bg-white px-5 py-4 md:mx-0 xl:gap-5 xl:px-[50px] xl:py-[30px]",
        shadow,
        className,
      )}
    >
      <h2 className="text-center text-xl font-bold lg:text-start xl:text-[28px]">
        {title}
      </h2>
      <p className="max-w-[440px] text-xs leading-snug opacity-70 md:text-sm lg:max-w-[590px] xl:text-lg">
        {description}
      </p>
    </div>
  );
};

export default StepCard;
