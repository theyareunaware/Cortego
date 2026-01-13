
import React, { useRef, useState, useEffect } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

/**
 * SplitText: Animates text character by character for high-impact headlines.
 */
interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const SplitText: React.FC<SplitTextProps> = ({ text, className, delay = 0 }) => {
  const letters = Array.from(text);
  const container = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.span
      style={{ display: "inline-block", overflow: "hidden" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {letters.map((letter, index) => (
        <motion.span
          variants={child}
          key={index}
          style={{ display: "inline-block", whiteSpace: "pre" }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

/**
 * SpotlightCard: Interactive card with a cursor-following radial highlight.
 */
export const SpotlightCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(57, 255, 20, 0.15), transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
};

/**
 * ShinyText: Subtle animated shimmer effect for badges and small labels.
 */
export const ShinyText: React.FC<{ text: string; className?: string }> = ({ text, className = "" }) => {
  return (
    <span 
      className={`inline-block bg-[linear-gradient(110deg,#39FF14,45%,#fff,55%,#39FF14)] bg-[length:200%_100%] bg-clip-text text-transparent animate-shine ${className}`}
      style={{ animation: 'shine 3s linear infinite' }}
    >
      {text}
    </span>
  );
};
