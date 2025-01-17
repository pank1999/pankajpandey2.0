"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface MovingBorderBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  borderRadius?: string;
  children: React.ReactNode;
  className?: string;
}

export const MovingBorderBtn = ({
  borderRadius = "1.75rem",
  children,
  className,
  ...props
}: MovingBorderBtnProps) => {
  return (
    <button
      className={cn(
        "bg-transparent relative text-neutral-200 px-8 py-4 rounded-lg hover:text-neutral-100 transition-colors",
        className
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...props}
    >
      <div className="relative z-10">{children}</div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0"
        style={{ borderRadius }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 blur-sm transition-opacity" />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="h-full w-full bg-gradient-to-r from-blue-500 to-purple-500 rotate-180" />
        </div>
      </motion.div>
    </button>
  );
}; 