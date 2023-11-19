import clsx from "clsx";
import React from "react";

interface BlobProps {
  className?: string;
  variant?: "default" | "variant2";
}

const Blob: React.FC<BlobProps> = ({ className, variant = "default" }) => {
  const colorVariants = {
    default: ["bg-purple-300", "bg-yellow-300", "bg-pink-300"],
    variant2: ["bg-lime-300", "bg-indigo-300", "bg-cyan-300"],
  };

  const blobColors = colorVariants[variant];

  return (
    <div
      className={clsx(
        "flex h-[600px] w-[400px] items-center justify-center lg:w-[600px] xl:h-[600px] xl:w-[600px]",
        className,
      )}
    >
      <div className="relative w-full max-w-lg">
        <div
          className={clsx(
            "absolute -left-4 top-0 animate-blob rounded-full  opacity-70 mix-blend-multiply blur-2xl filter",
            "h-48 w-48 lg:h-56 lg:w-56 xl:h-72 xl:w-72",
            blobColors[0],
          )}
        />
        <div
          className={clsx(
            "animation-delay-2000 absolute right-3 top-0 animate-blob rounded-full opacity-70 mix-blend-multiply blur-2xl filter md:-right-4",
            "h-48 w-48 lg:h-56 lg:w-56 xl:h-72 xl:w-72",
            blobColors[1],
          )}
        />
        <div
          className={clsx(
            "animation-delay-4000 absolute -bottom-20 left-20 animate-blob rounded-full opacity-70 mix-blend-multiply blur-2xl filter",
            "h-48 w-48 lg:h-56 lg:w-56 xl:h-72 xl:w-72",
            blobColors[2],
          )}
        />
      </div>
    </div>
  );
};

export default Blob;
