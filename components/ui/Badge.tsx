"use client";

import { Badge as FlowbiteBadge } from "flowbite-react";
import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const Badge: FC<Props> = ({ children }) => {
  return (
    <FlowbiteBadge
      color="info"
      className="border-badge inline-flex border px-[10px] py-1 text-sm font-bold"
    >
      {children}
    </FlowbiteBadge>
  );
};

export default Badge;
