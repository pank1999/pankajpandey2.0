"use client";
import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          opacity: 1,
        },
        {
          duration: 0.1,
          delay: stagger(0.1),
        }
      );
    }
  }, [isInView, animate]);

  const renderWords = words.map((word, idx) => {
    return (
      <motion.span
        key={`${word}-${idx}`}
        className={cn("opacity-0", word.className)}
      >
        {word.text}
        {idx === words.length - 1 ? "" : "\u00A0"}
      </motion.span>
    );
  });

  return (
    <div
      ref={scope}
      className={cn(
        "text-base md:text-xl lg:text-2xl font-bold text-center",
        className
      )}
    >
      {renderWords}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-8 bg-blue-500",
          cursorClassName
        )}
      />
    </div>
  );
};
