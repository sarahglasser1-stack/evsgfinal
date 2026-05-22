import React from 'react';
import { motion } from 'motion/react';
import collageImg from '../assets/images/collage.png';

export default function Photos() {
  return (
    <section className="py-24 px-6 md:px-8 bg-cream" id="photos">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-[clamp(2.5rem,7vw,4rem)] font-light leading-none text-ink"
          >
            and seen a lot...
          </motion.h2>
        </div>

        {/* Tactile, dimensional photography mount */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-warm-white p-2.5 sm:p-3.5 md:p-4 rounded-3xl shadow-xl shadow-ink/[0.04] border border-sand/40 max-w-[1000px] mx-auto hover:shadow-2xl hover:shadow-ink/[0.08] transition-all duration-500"
        >
          {/* Subtle paper tape accent on the top edge to mimic a taped gallery photo */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-24 h-6 bg-sand/25 backdrop-blur-[1px] rotate-[-1deg] border border-sand/15 opacity-80" />

          {/* Actual Collage Image Container with vintage camera print border */}
          <div className="relative overflow-hidden rounded-2xl bg-sand/10 aspect-[16/10] md:aspect-[16/9] shadow-inner ring-1 ring-inset ring-black/[0.06]">
            <img
              src={collageImg}
              alt="Our Shared Travel Memories Collage"
              className="w-full h-full object-cover select-none"
              referrerPolicy="no-referrer"
            />
            
            {/* Soft, photorealistic grain and film overlay sheen on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/[0.02] via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}



