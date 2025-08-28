"use client";

import React, { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

type Props = {
  children: ReactNode;
};

export const HorizontalScroll = ({ children }: Props) => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    // Note: h-[500vh] controlls the scroll speed
    <section ref={targetRef} className="relative h-[500vh] bg-black">
      <div className="sticky top-[30%] md:top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4 p-4">
          {children}
        </motion.div>
      </div>
    </section>
  );
};
