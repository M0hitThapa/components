"use client";

import { motion } from "motion/react";

export const HoveButton = () => {
  return (
    <motion.button
      initial="initial"
      whileHover="hover"
      className="relative overflow-hidden rounded-full cursor-pointer"
    >
      <motion.div
        variants={{
          initial: { clipPath: "inset(0 100% 0 0)" },
          hover: { clipPath: "inset(0 0% 0 0)" },
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="bg-neutral-700 border border-neutral-800 rounded-full px-4 py-2 text-xs text-neutral-200 font-medium absolute inset-0 z-10"
      >
        Subscribe
      </motion.div>
      <div className="bg-neutral-100 border border-neutral-200 rounded-full px-4 py-2 text-xs text-neutral-800 font-medium ">
        Subscribe
      </div>
    </motion.button>
  );
};
