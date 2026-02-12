'use client';

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type RevealDirection = "up" | "left" | "right";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  direction?: RevealDirection;
};

export function Reveal({
  children,
  delay = 0,
  direction = "up",
}: RevealProps) {
  const offset =
    direction === "up" ? { y: 16, x: 0 } : { y: 0, x: direction === "left" ? -24 : 24 };

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

