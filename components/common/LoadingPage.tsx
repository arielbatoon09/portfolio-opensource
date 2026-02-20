"use client";

import { motion } from "motion/react";

export function LoadingPage() {
  return (
    <div className="fixed inset-0 z-50 flex h-screen w-full flex-col items-center justify-center bg-background backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center gap-8"
      >
        <div className="relative flex h-24 w-24 items-center justify-center">
          {/* Outer Ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-primary/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          {/* Spinning Arc 1 */}
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
          {/* Spinning Arc 2 (Counter-rotating) */}
          <motion.div
            className="absolute inset-2 rounded-full border-4 border-secondary border-b-transparent"
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          {/* Inner Pulse */}
          <motion.div
            className="h-4 w-4 rounded-full bg-primary"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="flex flex-col items-center gap-2 text-center">
          <motion.h2
            className="text-xl font-bold tracking-[0.2em] text-primary"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            LOADING
          </motion.h2>
          <div className="h-1 w-48 overflow-hidden rounded-full bg-primary/20">
            <motion.div
              className="h-full bg-primary"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}