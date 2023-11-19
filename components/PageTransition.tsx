import { cn } from "@/lib/utils";
import { FC } from "react";

type Props = {
  className?: string;
};
const PageTransition: FC<Props> = ({ className }) => {
  return (
    <svg
      className={cn("h-full w-screen translate-y-1", className)}
      viewBox="0 0 1440 136"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.1"
        d="M0 0C90.8479 0.927528 148.108 27.1879 292.295 59.9119C388.42 81.7279 544.321 89.3348 760 82.7326C469.954 156.254 216.621 153.668 0 74.9733"
        fill="white"
      />
      <path
        opacity="0.1"
        d="M101 103.944C278.413 71.7073 427.148 52.1412 547.204 45.2459C667.259 38.3507 811.525 41.4927 980 54.6721C932.07 55.7128 811.303 74.2991 617.7 110.431C424.097 146.563 251.863 144.401 101 103.944Z"
        fill="white"
      />
      <path
        opacity="0.2"
        d="M1047 51.2754C1131.83 29.115 1280.08 17.4796 1440 39.8728V119.124C1272.17 77.3749 1141.17 54.7586 1047 51.2754Z"
        fill="white"
      />
      <path
        d="M0 66.1194C56.629 85.2824 97.208 97.8086 122.822 103.865C180.454 117.495 233.295 122.29 271.033 125.459C310.355 128.759 395.635 127.801 460.025 123.663C485.76 122.01 517.727 118.372 555.926 112.752C594.747 106.596 621.372 102.008 635.799 98.9906C662.913 93.3236 711.501 81.5026 726.605 78.1276C779.47 66.3166 817.839 54.5316 855.324 47.9036C921.689 36.1686 954.676 34.5216 1010.19 32.4316C1059.71 33.4766 1096.39 35.1286 1120.24 37.3866C1160.7 41.2186 1207.62 49.8206 1234.4 54.3036C1284.86 62.7476 1353.46 79.578 1440 104.5V136H0V66.1194Z"
        fill="white"
      />
    </svg>
  );
};

export default PageTransition;