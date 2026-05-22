import React from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative flex items-center justify-center py-32 bg-terracotta overflow-hidden">
      {/* Faded background '7' */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[35rem] font-display text-white/[0.07] leading-none">
          7
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-10"
      >
        <Heart className="w-12 h-12 fill-white text-white opacity-90" />
      </motion.div>
    </footer>
  );
}
