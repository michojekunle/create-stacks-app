"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CopyButtonProps {
  text: string;
  className?: string;
  iconSize?: number;
}

export function CopyButton({
  text,
  className = "",
  iconSize = 16,
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copy}
      className={`opacity-60 hover:opacity-100 transition-opacity p-2 hover:bg-white/10 rounded-lg ${className}`}
      title="Copy to clipboard"
      aria-label="Copy code"
    >
      {copied ? (
        <Check size={iconSize} className="text-green-400" />
      ) : (
        <Copy size={iconSize} className="text-gray-400" />
      )}
    </button>
  );
}
