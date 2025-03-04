"use client";

import { useState } from "react";
import { Copy, Mail } from "lucide-react";

export default function CopyEmail() {
  const [,setCopied] = useState(false);
  const email = "contato@flickify.com.br";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Erro ao copiar e-mail:", err);
    }
  };

  return (
    <div className="flex items-center justify-between bg-black text-white p-4 rounded-lg border border-gray-700 max-w-md">
      <div className="flex items-center gap-2">
        <Mail className="text-purple-500 mr-2" size={20} />
        <span className="text-gray-300">{email}</span>
      </div>
      <button
        onClick={handleCopy}
        className="p-2 rounded-lg bg-purple-500 hover:bg-indigo-600 transition ml-4"
      >
        <Copy size={20} className="text-white" />
      </button>
    </div>
  );
}
