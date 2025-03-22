"use client";

import { useState, useEffect } from "react";

interface TerminalTextProps {
  text: string;
  typingSpeed?: number;
  className?: string;
}

export default function TerminalText({
  text,
  typingSpeed = 50,
  className = "",
}: TerminalTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, typingSpeed]);

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`font-mono ${className}`}>
      {displayedText}
      <span
        className={`${
          showCursor ? "opacity-100" : "opacity-0"
        } transition-opacity`}
      >
        _
      </span>
    </div>
  );
}
