import React from 'react';
import { motion } from 'motion/react';

export default function Closing() {
  return (
    <section className="relative py-32 flex flex-col items-center justify-center text-center px-8 bg-plum overflow-hidden">
      {/* Subtle decorative background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_70%,rgba(187,148,87,0.1)_0%,transparent_70%)]" />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="font-display text-lg md:text-xl font-light text-cream relative tracking-wide"
      >
        i can't wait for all the <em className="italic text-mustard not-italic">months to come!!</em>
      </motion.p>
    </section>
  );
}
