"use client";
import React, { useRef } from "react";
import { IChildren } from "@/utils/types/children";
import { useRouter } from "next/navigation";

const variants = {
  outline: "border border-secondary/30",
  filled: "",
} as const;

interface IButtonProps {
  variant?: keyof typeof variants;
  routeTo?: string;
  onClick?: () => void;
  type?: "button" | "file-select";
}

function Button({
  children,
  variant = "outline",
  routeTo,
  onClick,
  type = "button",
}: IChildren & IButtonProps) {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (type === "file-select") {
      fileInputRef.current?.click();
    } else if (onClick) {
      onClick();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && routeTo) {
      // You can do something with the file here if needed
      console.log("Selected file:", file);
      router.push(routeTo);
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={`px-9 py-2 rounded-xl flex justify-center items-center hover:cursor-pointer ${variants[variant]}`}
      >
        {children}
      </button>
      {type === "file-select" && (
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept="image/*,application/pdf"
        />
      )}
    </>
  );
}

export default Button;
