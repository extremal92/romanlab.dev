'use client';

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type HoverLiftProps = {
  children: ReactNode;
};

export function HoverLift({ children }: HoverLiftProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 320, damping: 24 }}
    >
      {children}
    </motion.div>
  );
}

