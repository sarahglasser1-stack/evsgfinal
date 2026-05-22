import React from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export default function Nav() {
  return (
    <motion.nav
      initial={{ translateY: '-100%' }}
      animate={{ translateY: 0 }}
      transition={{ delay: 1.5, duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 px-8 py-4 flex items-center justify-center bg-cream/85 backdrop-blur-md border-b border-sand/60"
    >
      <a href="#top" className="relative flex items-center justify-center">
        <Heart className="w-8 h-8 fill-terracotta text-terracotta" />
        <span className="absolute text-cream font-bold text-xs">7</span>
      </a>
    </motion.nav>
  );
}
