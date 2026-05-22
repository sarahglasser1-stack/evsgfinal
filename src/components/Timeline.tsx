import React from 'react';
import { motion } from 'motion/react';

const timelineEvents = [
  {
    month: '2021',
    event: "Pushes Evan's Face",
    detail: '',
    color: 'terracotta',
  },
  {
    month: '2023',
    event: 'Friends++++',
    detail: '',
    color: 'sage',
  },
  {
    month: 'June 19, 2025',
    event: 'First date',
    detail: '',
    color: 'terracotta',
  },
  {
    month: 'August 19, 2025',
    event: 'Exclusivity',
    detail: '',
    color: 'sage',
  },
  {
    month: 'October 22, 2025',
    event: 'Officially official',
    detail: 'I Love You',
    color: 'mustard',
  },
  {
    month: 'November 22, 2025',
    event: '1 Month',
    detail: 'Veggie Samosa',
    color: 'terracotta',
  },
  {
    month: 'December 2025',
    event: 'First trip',
    detail: 'Roadtrip',
    color: 'mustard',
  },
  {
    month: 'January 2026',
    event: "Grammy's + LA",
    detail: '',
    color: 'sage',
  },
  {
    month: 'February 2026',
    event: 'The Caribbean',
    detail: '',
    color: 'terracotta',
  },
  {
    month: 'March 2026',
    event: 'Nashville & DK',
    detail: '',
    color: 'mustard',
  },
  {
    month: 'April 2026',
    event: '6 Months',
    detail: '',
    color: 'sage',
  },
];

export default function Timeline() {
  return (
    <section className="py-20 px-8 w-full overflow-hidden" id="timeline">
      <div className="max-w-[600px] lg:max-w-none mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-[clamp(2rem,4vw,3rem)] font-light leading-tight text-ink mb-2"
        >
          it's been an <em className="italic text-terracotta not-italic">epic 7 months</em>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xs opacity-40 font-body lowercase mb-12"
        >
          (and some)
        </motion.p>

      <div className="relative pl-8">
        <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-terracotta via-sage to-mustard" />

        <div className="flex flex-col gap-10">
          {timelineEvents.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: (i % 4) * 0.1, duration: 0.6 }}
              className="relative pl-8"
            >
              <div
                className={`absolute -left-[32px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-cream ring-2 transition-colors`}
                style={{
                  backgroundColor: `var(--color-${item.color})`,
                  boxShadow: `0 0 0 2px var(--color-${item.color})`,
                }}
              />
              <p
                className="text-[10px] font-medium tracking-[0.2em] uppercase mb-1"
                style={{ color: `var(--color-${item.color})` }}
              >
                {item.month}
              </p>
              <h3 className="font-display text-xl font-light text-ink mb-1 leading-tight">
                {item.event}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
     </div>
    </section>
  );
}
