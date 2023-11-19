"use client";

import {
  CheckBadgeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/solid";
import { Tooltip } from "flowbite-react";
import React, { useState } from "react";

interface CopyButtonProps {
  textToCopy: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ textToCopy }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000); // Сбросить состояние после 2.5 секунд
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <button className="" onClick={copyToClipboard}>
      {!isCopied ? (
        <Tooltip content="Скопировать">
          <DocumentDuplicateIcon className="w-5 animate-vanish fill-dark-blue md:w-7" />
        </Tooltip>
      ) : (
        <Tooltip content="Запись скопирована">
          <CheckBadgeIcon className="w-5 animate-vanish fill-dark-blue md:w-7" />
        </Tooltip>
      )}
    </button>
  );
};

export default CopyButton;
