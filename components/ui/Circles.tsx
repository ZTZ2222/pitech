import clsx from "clsx";
import { FC } from "react";

type Props = {
  className?: string;
};

const Circles: FC<Props> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 986 986"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(className)}
    >
      <g opacity="0.1">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M493 986C765.276 986 986 765.276 986 493C986 220.724 765.276 0 493 0C220.724 0 0 220.724 0 493C0 765.276 220.724 986 493 986ZM493 897.593C716.451 897.593 897.593 716.45 897.593 493C897.593 269.549 716.451 88.4071 493 88.4071C269.55 88.4071 88.4072 269.549 88.4072 493C88.4072 716.45 269.55 897.593 493 897.593Z"
          fill="#D8E2F8"
        />
        <circle
          cx="493"
          cy="493"
          r="336.293"
          stroke="#302F4D"
          strokeWidth="2"
          strokeDasharray="12 12"
        />
        <circle
          cx="493.663"
          cy="492.337"
          r="261.415"
          stroke="#302F4D"
          strokeWidth="2"
          strokeDasharray="12 12"
        />
        <circle
          cx="493"
          cy="493"
          r="198.465"
          stroke="#302F4D"
          strokeWidth="2"
          strokeDasharray="12 12"
        />
      </g>
    </svg>
  );
};

export default Circles;
