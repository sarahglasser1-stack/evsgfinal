import React from 'react';
import { motion } from 'motion/react';

const stats = [
  { number: '76', label: 'Date spots total', note: 'Not including meals with friends' },
  { number: '56', label: 'NYC explorations', note: 'From Traif to Radio Bakery' },
  { number: '12', label: 'California stops', note: 'Breakfast tacos to saloon dyes' },
  { number: '4', label: 'Major destinations', note: 'NY, CA, Nashville, & PR' },
];

const funFacts = [
  { icon: '🌮', text: '<strong>Los Tacos No. 1</strong> in Chelsea Market is located in the former Nabisco factory—the exact building where the <strong>Oreo</strong> was invented in 1912.' },
  { icon: '🥘', text: 'Founder <strong>Zareen Khan</strong> was a Silicon Valley product manager who applied "product development" rigour to her kitchen, obsessively beta-testing her signature <strong>Chicken Tikka Masala</strong> with her children before opening Zareen\'s.' },
  { icon: '🍕', text: '<strong>Joe & Pat\'s</strong> uses a specialized low-moisture mozzarella and high-heat ovens to achieve their legendary "cracker-thin" crust, a Staten Island secret since 1960.' },
  { icon: '🏆', text: '<strong>Motorino</strong> was the first pizza place in New York City history to be awarded a Michelin Bib Gourmand, proving that world-class dining can be casual.' },
  { icon: '🌊', text: '<strong>Virgin Gorda</strong> is home to The Baths, where giant granite boulders form secret grottoes—a geological anomaly as granite is rarely found on volcanic islands.' },
  { icon: '🔥', text: '<strong>Hattie B\'s</strong> "Shut the Cluck Up" heat level is unique because it\'s the only recipe that applies a second dry-rub finish *after* the chicken leaves the hot oil.' },
  { icon: '🍲', text: '<strong>JT\'s Country Kitchen</strong> is the only breakfast spot in the high desert that was hand-picked by <strong>Anthony Bourdain</strong> for a feature on "No Reservations."' },
  { icon: '🥯', text: '<strong>Tompkins Square Bagels</strong> is one of the few shops that uses a custom filtration system to mimic the specific mineral content of 1970s NYC tap water.' },
];

export default function Stats() {
  return (
    <section className="bg-ink py-20 px-8 text-cream overflow-hidden" id="stats">
      <div className="max-w-[1100px] mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10px] font-medium tracking-[0.25em] uppercase text-terracotta-light mb-3"
        >
          by the numbers
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-[clamp(2rem,5vw,3.2rem)] font-light leading-tight text-cream mb-12"
        >
          we've eaten a lot...
        </motion.h2>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-[1.5px] bg-white/8 border-[1.5px] border-white/8 rounded-2xl overflow-hidden mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/[0.03] p-8 text-center hover:bg-white/[0.07] transition-colors"
            >
              <span className="font-display text-[3.5rem] font-light leading-none text-terracotta-light block mb-2">
                {stat.number}
              </span>
              <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-white/50">
                {stat.label}
              </span>
              <p className="text-[11px] text-white/30 mt-2 italic font-display">
                {stat.note}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
          {funFacts.map((fact, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5 flex gap-4 items-start"
            >
              <span className="text-2xl flex-shrink-0 mt-0.5">{fact.icon}</span>
              <p
                className="text-[13px] text-white/65 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: fact.text }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
