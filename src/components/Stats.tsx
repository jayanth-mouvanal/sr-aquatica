import React from 'react';
import { motion } from 'motion/react';
import { config } from '../data/config';

export default function TrustBar() {
  return (
    <section className="bg-white border-y border-slate-100 py-16 px-6 relative z-10" aria-label="Company performance statistics">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {config.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="flex items-baseline gap-1 mb-3">
                <span className={`text-4xl md:text-6xl font-serif font-bold ${stat.color} tracking-tight`}>
                  {stat.value}
                </span>
                {stat.suffix && (
                  <span className={`text-2xl font-serif font-medium ${stat.color} opacity-80`}>{stat.suffix}</span>
                )}
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-slate-500 font-bold">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

