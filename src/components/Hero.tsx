import React from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <header className="relative min-h-screen flex flex-col items-center justify-center text-center px-8 py-12 bg-warm-white overflow-hidden" id="top">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_30%,rgba(200,96,74,0.08)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_80%_70%,rgba(107,143,113,0.09)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_50%_50%,rgba(212,145,58,0.06)_0%,transparent_60%)]" />
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.9 }}
        className="font-display text-[clamp(2.5rem,8vw,6rem)] font-light leading-[1.1] text-ink relative tracking-tight"
      >
        hey <em className="font-italic text-terracotta not-italic">evan</em><br />
        i love you
      </motion.h1>
    </header>
  );
}
