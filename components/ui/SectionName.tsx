import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const SectionName: FC<Props> = ({ children, className }) => {
  return (
    <p
      className={cn(
        "my-12 ml-auto px-5 text-sm font-bold text-dark-blue md:text-xl lg:my-20 lg:ml-0 lg:self-center",
        className,
      )}
    >
      {children}
    </p>
  );
};

export default SectionName;
