"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface BackgroundGradientProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const BackgroundGradient = ({ 
  children, 
  className,
  ...props 
}: BackgroundGradientProps) => {
  return (
    <div
      className={cn(
        "relative p-[1px] bg-gradient-to-r from-blue-500 to-purple-500 overflow-hidden",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}; 