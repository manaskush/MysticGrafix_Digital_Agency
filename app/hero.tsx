"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-black">
      <div className="relative">
        {/* First Heading */}
        <motion.h1
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 0, y: -200 }}
          exit={{ opacity: 0, y: -200 }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200"
          style={{
            fontSize: "12xl",
          }}
        >
          MYSTIC 
        </motion.h1>

        {/* Second Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 200 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 2,
            delay: 2, // Delays the second heading animation
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200"
          style={{
            fontSize: "12xl",
          }}
        >
          GRAFIX
        </motion.h1>
      </div>
    </div>
  );
}
