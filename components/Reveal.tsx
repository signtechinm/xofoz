"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { ElementType, ReactNode } from "react";

type RevealProps = Omit<HTMLMotionProps<"div">, "children"> & {
  as?: ElementType;
  children: ReactNode;
  delay?: number;
  [key: string]: unknown;
};

export default function Reveal({
  as = "div",
  children,
  delay = 0,
  ...props
}: RevealProps) {
  const MotionTag = motion.create(as);

  return (
    <MotionTag
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1], delay }}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
