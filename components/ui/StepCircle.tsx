import clsx from "clsx";
import { FC } from "react";

type Props = {
  value: number;
  className?: string;
};

const StepCircle: FC<Props> = ({ value, className }) => {
  return (
    <div
      className={clsx(
        "grid h-[65px] w-[65px] place-content-center rounded-full bg-yellow-200 text-[40px] font-bold text-dark-blue shadow-md",
        className,
      )}
    >
      {value}
    </div>
  );
};

export default StepCircle;
