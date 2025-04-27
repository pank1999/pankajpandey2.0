"use client";
import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorStyle,
}: {
  words: {
    text: string;
    className?: string;
    style?: React.CSSProperties;
  }[];
  className?: string;
  cursorStyle?: React.CSSProperties;
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
          delay: stagger(0.2),
        }
      );
    }
  }, [isInView, animate]);

  const renderWords = words.map((word, idx) => {
    return (
      <motion.span
        key={`${word}-${idx}`}
        style={{
          opacity: 0,
          ...word.style,
        }}
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
        "text-white md:text-xl lg:text-2xl font-bold text-center",
        className
      )}
    >
      {renderWords}
      <div className="inline-block h-4 md:h-6 lg:h-8">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            display: "inline-block",
            borderRadius: "0.125rem",
            width: "4px",
            height: "100%",
            backgroundColor: "rgb(59 130 246)",
            ...cursorStyle,
          }}
        />
      </div>
    </div>
  );
};
