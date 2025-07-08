import React from "react";
import { motion } from "framer-motion";

// Container controls delay and stagger between each word's animation
const container = {
  hidden: { opacity: 0 },
  visible: (speed = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.3 / speed,     // ⏱ Faster speed = smaller interval
      delayChildren: 0.1 / speed,
    },
  }),
};

// Child controls how each word animates in
const child = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

/**
 * SplitWords animates:
 * - plain strings via `text` prop (headings, quotes, etc)
 * - rich JSX via `children` (e.g., tags like <strong>)
 */
const SplitWords = ({ text, children, className = "", speed = 1 }) => {
  const content = text ?? children;

  const words =
    typeof content === "string"
      ? content.split(" ")
      : [content]; // If children are complex JSX, treat as one unit

  return (
    <motion.div
      className={`inline-block ${className}`}
      variants={container}
      custom={speed}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {words.map((word, idx) => (
        <motion.span key={idx} variants={child} className="inline-block mr-1">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default SplitWords;
