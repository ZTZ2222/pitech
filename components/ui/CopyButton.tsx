"use client";

import {
  CheckBadgeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/solid";
import copy from "copy-to-clipboard";
import { Tooltip } from "flowbite-react";
import React, { useState } from "react";

interface CopyButtonProps {
  textToCopy: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ textToCopy }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    copy(textToCopy);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // Сбросить состояние после 2 секунд
  };

  return (
    <button onClick={copyToClipboard}>
      {!isCopied ? (
        <Tooltip content="Copy">
          <DocumentDuplicateIcon className="w-5 animate-vanish fill-dark-blue md:w-7" />
        </Tooltip>
      ) : (
        <Tooltip content="Copied">
          <CheckBadgeIcon className="w-5 animate-vanish fill-dark-blue md:w-7" />
        </Tooltip>
      )}
    </button>
  );
};

export default CopyButton;
